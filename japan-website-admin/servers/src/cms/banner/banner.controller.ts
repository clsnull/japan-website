import { ReqListQuery } from './../../common/utils/req-list-query'
import { Controller, Get, Post, Put, Body, Param, Delete, Query } from '@nestjs/common'
import { ApiTags, ApiExtraModels, ApiOperation, ApiBearerAuth } from '@nestjs/swagger'

import { ApiResult } from '../../common/decorators/api-result.decorator'
import { ResultData } from '../../common/utils/result'

import { BannerEntity } from './banner.entity'
import { BannerService } from './banner.service'

import { CreateBannerDto } from './dto/create-banner.dto'
import { UpdateBannerDto } from './dto/update-banner.dto'

@ApiTags('Banner模块')
@ApiBearerAuth()
@ApiExtraModels(BannerEntity)
@Controller('banner')
export class DeptController {
  constructor(private readonly bannerService: BannerService) {}

  @Post()
  @ApiOperation({ summary: '创建Banner' })
  @ApiResult(BannerEntity)
  async create(@Body() dto: CreateBannerDto): Promise<ResultData> {
    return this.bannerService.create(dto)
  }

  @Put()
  @ApiOperation({ summary: 'Banner更新' })
  @ApiResult()
  async update(@Body() dto: UpdateBannerDto): Promise<ResultData> {
    return this.bannerService.update(dto)
  }

  @Get('list')
  @ApiOperation({ summary: '查询Banner列表' })
  @ApiResult(BannerEntity, true)
  async findList(@Query() dto: ReqListQuery): Promise<ResultData> {
    return this.bannerService.findList(dto)
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除Banner' })
  @ApiResult()
  async delete(@Param('id') id: string): Promise<ResultData> {
    return this.bannerService.delete(id)
  }

  @Get(':id')
  @ApiOperation({ summary: '根据id查询Banner信息' })
  @ApiResult()
  async findOne(@Param('id') id: string): Promise<ResultData> {
    return await this.bannerService.findOne(id)
  }
}
