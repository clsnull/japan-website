import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateBannerDto {
  @ApiProperty({ description: '名称' })
  @IsString({ message: 'name 类型错误, 正确类型 string' })
  @IsNotEmpty({ message: 'name 不能为空' })
  readonly name: string

  @ApiProperty({ description: '跳转链接' })
  @IsString({ message: 'url 类型错误, 正确类型 string' })
  @IsNotEmpty({ message: 'url 不能为空' })
  readonly url: string

  @ApiProperty({ description: '图片地址' })
  @IsString({ message: 'img 类型错误, 正确类型 string' })
  @IsNotEmpty({ message: 'img 不能为空' })
  readonly img: string
}
