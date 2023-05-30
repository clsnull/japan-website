import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'

import { NewsEntity } from "./news.entity"

import { NewsService } from './news.service'
import { NewsController } from './news.controller'

@Module({
  imports: [
    TypeOrmModule.forFeature([NewsEntity]),
  ],
  providers: [NewsService],
  controllers: [NewsController],
  exports: [],
})
export class NewsModule {}
