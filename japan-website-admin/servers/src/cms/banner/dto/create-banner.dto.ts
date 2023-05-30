import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateBannerDto {
  @ApiProperty({ description: '名称' })
  readonly name: string

  @ApiProperty({ description: '跳转链接' })
  readonly url: string

  @ApiProperty({ description: '图片地址' })
  @IsString({ message: 'img 类型错误, 正确类型 string' })
  @IsNotEmpty({ message: 'img 不能为空' })
  readonly img: string
}
