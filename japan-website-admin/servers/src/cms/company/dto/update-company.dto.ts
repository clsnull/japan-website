import { ApiProperty } from '@nestjs/swagger'
import { IsNumberString, IsNotEmpty } from 'class-validator'

export class UpdateCompanyDto {
  @ApiProperty({ description: 'id' })
  @IsNotEmpty({ message: 'id not null' })
  id: string

  @ApiProperty({ description: '商号' })
  readonly businessName: string

  @ApiProperty({ description: '成立日期' })
  readonly registerDate: string

  @ApiProperty({ description: '注册资金' })
  readonly registerCapital: string

  @ApiProperty({ description: '所有地' })
  readonly address: string

  @ApiProperty({ description: 'TEL' })
  readonly tel: string

  @ApiProperty({ description: 'FAX' })
  readonly fax: string

  @ApiProperty({ description: 'email' })
  readonly email: string

  @ApiProperty({ description: '取引银行' })
  readonly bank: string

  @ApiProperty({ description: '主要经营品目' })
  readonly businessScope: string

  @ApiProperty({ description: '主要生产厂家' })
  readonly manufacturer: string

  @ApiProperty({ description: '纬度' })
  readonly lat: number

  @ApiProperty({ description: '经度' })
  readonly lng: number

  @ApiProperty({ description: '公司缩写' })
  readonly companyLimited: string

  @ApiProperty({ description: 'logo' })
  readonly logo: string
}
