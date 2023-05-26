import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'

import { BannerEntity } from "./banner.entity"

import { BannerService } from './banner.service'
import { DeptController } from './banner.controller'

@Module({
  imports: [
    TypeOrmModule.forFeature([BannerEntity]),
  ],
  providers: [BannerService],
  controllers: [DeptController],
  exports: [],
})
export class BannerModule {}
