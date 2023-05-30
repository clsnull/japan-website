import { Injectable } from '@nestjs/common'
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm'
import { EntityManager, Repository } from 'typeorm'
import { CompanyEntity } from './company.entity'
import { CreateCompanyDto } from './dto/create-company.dto'
import { ResultData } from '../../common/utils/result'
import { instanceToPlain, plainToInstance } from 'class-transformer'
import { AppHttpCode } from '../../common/enums/code.enum'
import { UpdateCompanyDto } from './dto/update-company.dto'
import { ReqListQuery } from 'src/common/utils/req-list-query'

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(CompanyEntity)
    private readonly companyRepo: Repository<CompanyEntity>,
    @InjectEntityManager()
    private readonly deptManager: EntityManager,
  ) {}

  async create(dto: CreateCompanyDto): Promise<ResultData> {
    const dept = plainToInstance(CompanyEntity, dto)
    const res = await this.deptManager.transaction(async (transactionalEntityManager) => {
      return await transactionalEntityManager.save<CompanyEntity>(dept)
    })
    if (!res) ResultData.fail(AppHttpCode.SERVICE_ERROR, '创建失败，请稍后重试')
    return ResultData.ok(res)
  }

  async update(dto: UpdateCompanyDto): Promise<ResultData> {
    const existing = await this.companyRepo.findOne({ where: { id: dto.id } })
    if (!existing) return ResultData.fail(AppHttpCode.DEPT_NOT_FOUND, 'Banner不存在或已被删除，请修改后重新添加')
    const { affected } = await this.deptManager.transaction(async (transactionalEntityManager) => {
      return await transactionalEntityManager.update<CompanyEntity>(CompanyEntity, dto.id, dto)
    })
    if (!affected) return ResultData.fail(AppHttpCode.SERVICE_ERROR, '更新失败，请稍后尝试')
    return ResultData.ok()
  }

  async delete(id: string): Promise<ResultData> {
    const existing = await this.companyRepo.findOne({ where: { id } })
    if (!existing) return ResultData.fail(AppHttpCode.DEPT_NOT_FOUND, 'Banner不存在或已被删除')
    const { affected } = await this.deptManager.transaction(async (transactionalEntityManager) => {
      return await transactionalEntityManager.delete<CompanyEntity>(CompanyEntity, id)
    })
    if (!affected) return ResultData.fail(AppHttpCode.SERVICE_ERROR, '删除Banner失败，请稍后尝试')
    return ResultData.ok()
  }

  async findList(dto: ReqListQuery): Promise<ResultData> {
    const { page, size } = dto
    const banners = await this.companyRepo.findAndCount({ order: { id: 'DESC' }, skip: size * (page - 1), take: size })
    return ResultData.ok({ list: instanceToPlain(banners[0]), total: banners[1] })
  }

  async findOne(id: string): Promise<ResultData> {
    const banner = await this.companyRepo.findOne({ where: { id } })
    if (!banner) return ResultData.fail(AppHttpCode.USER_NOT_FOUND, '该banner不存在或已删除')
    return ResultData.ok(instanceToPlain(banner))
  }
}
