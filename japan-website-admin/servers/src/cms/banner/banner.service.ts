import { Injectable } from '@nestjs/common'
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm'
import { EntityManager, Repository } from 'typeorm'
import { BannerEntity } from './banner.entity'
import { CreateBannerDto } from './dto/create-banner.dto'
import { ResultData } from '../../common/utils/result'
import { instanceToPlain, plainToInstance } from 'class-transformer'
import { AppHttpCode } from '../../common/enums/code.enum'
import { UpdateBannerDto } from './dto/update-banner.dto'
import { ReqListQuery } from 'src/common/utils/req-list-query'

@Injectable()
export class BannerService {
  constructor(
    @InjectRepository(BannerEntity)
    private readonly bannerRepo: Repository<BannerEntity>,
    @InjectEntityManager()
    private readonly deptManager: EntityManager,
  ) {}

  /** 创建部门 */
  async create(dto: CreateBannerDto): Promise<ResultData> {
    const dept = plainToInstance(BannerEntity, dto)
    const res = await this.deptManager.transaction(async (transactionalEntityManager) => {
      return await transactionalEntityManager.save<BannerEntity>(dept)
    })
    if (!res) ResultData.fail(AppHttpCode.SERVICE_ERROR, '创建失败，请稍后重试')
    return ResultData.ok(res)
  }

  /** 更新部门 */
  async update(dto: UpdateBannerDto): Promise<ResultData> {
    const existing = await this.bannerRepo.findOne({ where: { id: dto.id } })
    if (!existing) return ResultData.fail(AppHttpCode.DEPT_NOT_FOUND, 'Banner不存在或已被删除，请修改后重新添加')
    const { affected } = await this.deptManager.transaction(async (transactionalEntityManager) => {
      return await transactionalEntityManager.update<BannerEntity>(BannerEntity, dto.id, dto)
    })
    if (!affected) return ResultData.fail(AppHttpCode.SERVICE_ERROR, '更新失败，请稍后尝试')
    return ResultData.ok()
  }

  /** 删除部门 */
  async delete(id: string): Promise<ResultData> {
    const existing = await this.bannerRepo.findOne({ where: { id } })
    if (!existing) return ResultData.fail(AppHttpCode.DEPT_NOT_FOUND, 'Banner不存在或已被删除')
    const { affected } = await this.deptManager.transaction(async (transactionalEntityManager) => {
      return await transactionalEntityManager.delete<BannerEntity>(BannerEntity, id)
    })
    if (!affected) return ResultData.fail(AppHttpCode.SERVICE_ERROR, '删除Banner失败，请稍后尝试')
    return ResultData.ok()
  }

  /** 查询所有部门 */
  async findList(dto: ReqListQuery): Promise<ResultData> {
    const { page, size } = dto
    const banners = await this.bannerRepo.findAndCount({ order: { id: 'DESC' }, skip: size * (page - 1), take: size })
    return ResultData.ok({ list: instanceToPlain(banners[0]), total: banners[1] })
  }

  /** 查询单个用户 */
  async findOne(id: string): Promise<ResultData> {
    const banner = await this.bannerRepo.findOne({ where: { id } })
    if (!banner) return ResultData.fail(AppHttpCode.USER_NOT_FOUND, '该banner不存在或已删除')
    return ResultData.ok(instanceToPlain(banner))
  }
}
