import { ReqListQuery } from '../../common/utils/req-list-query'
import { Controller, Get, Post, Put, Body, Param, Delete, Query } from '@nestjs/common'
import { ApiTags, ApiExtraModels, ApiOperation, ApiBearerAuth } from '@nestjs/swagger'

import { ApiResult } from '../../common/decorators/api-result.decorator'
import { ResultData } from '../../common/utils/result'

import { NewsEntity } from './news.entity'
import { NewsService } from './news.service'

import { CreateNewsDto } from './dto/create-news.dto'
import { UpdateNewsDto } from './dto/update-news.dto'
import { AllowAnon } from 'src/common/decorators/allow-anon.decorator'

@ApiTags('news module')
@ApiBearerAuth()
@ApiExtraModels(NewsEntity)
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  @ApiOperation({ summary: 'create news' })
  @ApiResult(NewsEntity)
  async create(@Body() dto: CreateNewsDto): Promise<ResultData> {
    return this.newsService.create(dto)
  }

  @Put()
  @ApiOperation({ summary: 'update news' })
  @ApiResult()
  async update(@Body() dto: UpdateNewsDto): Promise<ResultData> {
    return this.newsService.update(dto)
  }

  @Get('list')
  @ApiOperation({ summary: 'news list' })
  @ApiResult(NewsEntity, true)
  @AllowAnon()
  async findList(@Query() dto: ReqListQuery): Promise<ResultData> {
    return this.newsService.findList(dto)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'del news' })
  @ApiResult()
  async delete(@Param('id') id: string): Promise<ResultData> {
    return this.newsService.delete(id)
  }

  @Get(':id')
  @ApiOperation({ summary: 'find news by id' })
  @ApiResult()
  @AllowAnon()
  async findOne(@Param('id') id: string): Promise<ResultData> {
    return await this.newsService.findOne(id)
  }
}
