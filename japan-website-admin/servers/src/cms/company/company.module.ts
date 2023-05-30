import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'

import { CompanyEntity } from "./company.entity"

import { CompanyService } from './company.service'
import { CompanyController } from './company.controller'

@Module({
  imports: [
    TypeOrmModule.forFeature([CompanyEntity]),
  ],
  providers: [CompanyService],
  controllers: [CompanyController],
  exports: [],
})
export class CompanyModule {}
