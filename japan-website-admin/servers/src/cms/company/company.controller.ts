import { ReqListQuery } from '../../common/utils/req-list-query'
import { Controller, Get, Post, Put, Body, Param, Delete, Query } from '@nestjs/common'
import { ApiTags, ApiExtraModels, ApiOperation, ApiBearerAuth } from '@nestjs/swagger'

import { ApiResult } from '../../common/decorators/api-result.decorator'
import { ResultData } from '../../common/utils/result'

import { CompanyEntity } from './company.entity'
import { CompanyService } from './company.service'

import { CreateCompanyDto } from './dto/create-company.dto'
import { UpdateCompanyDto } from './dto/update-company.dto'

@ApiTags('company module')
@ApiBearerAuth()
@ApiExtraModels(CompanyEntity)
@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  @ApiOperation({ summary: 'create company' })
  @ApiResult(CompanyEntity)
  async create(@Body() dto: CreateCompanyDto): Promise<ResultData> {
    return this.companyService.create(dto)
  }

  @Put()
  @ApiOperation({ summary: 'update company' })
  @ApiResult()
  async update(@Body() dto: UpdateCompanyDto): Promise<ResultData> {
    return this.companyService.update(dto)
  }

  @Get('list')
  @ApiOperation({ summary: 'company list' })
  @ApiResult(CompanyEntity, true)
  async findList(@Query() dto: ReqListQuery): Promise<ResultData> {
    return this.companyService.findList(dto)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'del company' })
  @ApiResult()
  async delete(@Param('id') id: string): Promise<ResultData> {
    return this.companyService.delete(id)
  }

  @Get(':id')
  @ApiOperation({ summary: 'find company by id' })
  @ApiResult()
  async findOne(@Param('id') id: string): Promise<ResultData> {
    return await this.companyService.findOne(id)
  }
}
