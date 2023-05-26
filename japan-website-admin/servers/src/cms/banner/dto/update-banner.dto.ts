import { ApiProperty } from '@nestjs/swagger'
import { IsNumberString, IsNotEmpty } from 'class-validator'

export class UpdateBannerDto {
  @ApiProperty({ description: 'id' })
  @IsNotEmpty({ message: 'id 不能为空' })
  @IsNumberString({}, { message: 'id 类型错误，正确类型 string' })
  id: string

  @ApiProperty({ description: '名称' })
  readonly name: string

  @ApiProperty({ description: '跳转链接' })
  readonly url: string

  @ApiProperty({ description: '图片地址' })
  readonly img: string
}
