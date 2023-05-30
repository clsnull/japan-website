import { ReqListQuery } from './../../common/utils/req-list-query'
import { Controller, Get, Post, Put, Body, Param, Delete, Query } from '@nestjs/common'
import { ApiTags, ApiExtraModels, ApiOperation, ApiBearerAuth } from '@nestjs/swagger'

import { ApiResult } from '../../common/decorators/api-result.decorator'
import { ResultData } from '../../common/utils/result'

import { ContactEntity } from './contact.entity'
import { ContactService } from './contact.service'

import { CreateContactDto } from './dto/create-contact.dto'

@ApiTags('联系我们模块')
@ApiBearerAuth()
@ApiExtraModels(ContactEntity)
@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @ApiOperation({ summary: '添加联系信息' })
  @ApiResult(ContactEntity)
  async create(@Body() dto: CreateContactDto): Promise<ResultData> {
    return this.contactService.create(dto)
  }

  @Get('list')
  @ApiOperation({ summary: '查询联系信息' })
  @ApiResult(ContactEntity, true)
  async findList(@Query() dto: ReqListQuery): Promise<ResultData> {
    return this.contactService.findList(dto)
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除联系信息' })
  @ApiResult()
  async delete(@Param('id') id: string): Promise<ResultData> {
    return this.contactService.delete(id)
  }

  @Get(':id')
  @ApiOperation({ summary: '根据id查询联系信息信息' })
  @ApiResult()
  async findOne(@Param('id') id: string): Promise<ResultData> {
    return await this.contactService.findOne(id)
  }
}
