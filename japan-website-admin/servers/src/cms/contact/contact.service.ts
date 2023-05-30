import { Injectable } from '@nestjs/common'
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm'
import { EntityManager, Repository } from 'typeorm'
import { ContactEntity } from './contact.entity'
import { CreateContactDto } from './dto/create-contact.dto'
import { ResultData } from '../../common/utils/result'
import { instanceToPlain, plainToInstance } from 'class-transformer'
import { AppHttpCode } from '../../common/enums/code.enum'
import { ReqListQuery } from 'src/common/utils/req-list-query'

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(ContactEntity)
    private readonly contactRepo: Repository<ContactEntity>,
    @InjectEntityManager()
    private readonly deptManager: EntityManager,
  ) {}

  async create(dto: CreateContactDto): Promise<ResultData> {
    const dept = plainToInstance(ContactEntity, dto)
    const res = await this.deptManager.transaction(async (transactionalEntityManager) => {
      return await transactionalEntityManager.save<ContactEntity>(dept)
    })
    if (!res) ResultData.fail(AppHttpCode.SERVICE_ERROR, '创建失败，请稍后重试')
    return ResultData.ok(res)
  }

  async delete(id: string): Promise<ResultData> {
    const existing = await this.contactRepo.findOne({ where: { id } })
    if (!existing) return ResultData.fail(AppHttpCode.DEPT_NOT_FOUND, '数据不存在或已被删除')
    const { affected } = await this.deptManager.transaction(async (transactionalEntityManager) => {
      return await transactionalEntityManager.delete<ContactEntity>(ContactEntity, id)
    })
    if (!affected) return ResultData.fail(AppHttpCode.SERVICE_ERROR, '删除失败，请稍后尝试')
    return ResultData.ok()
  }

  async findList(dto: ReqListQuery): Promise<ResultData> {
    const { page, size } = dto
    const banners = await this.contactRepo.findAndCount({ order: { id: 'DESC' }, skip: size * (page - 1), take: size })
    return ResultData.ok({ list: instanceToPlain(banners[0]), total: banners[1] })
  }

  async findOne(id: string): Promise<ResultData> {
    const banner = await this.contactRepo.findOne({ where: { id } })
    if (!banner) return ResultData.fail(AppHttpCode.USER_NOT_FOUND, '该数据不存在或已删除')
    return ResultData.ok(instanceToPlain(banner))
  }
}
