import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateNewsDto {
  @ApiProperty({ description: '标题' })
  @IsNotEmpty({ message: '标题 不能为空' })
  readonly title: string

  @ApiProperty({ description: '摘要' })
  readonly digest: string

  @ApiProperty({ description: '图片地址' })
  readonly url: string

  @ApiProperty({ description: '内容' })
  @IsNotEmpty({ message: '内容 不能为空' })
  readonly content: string
}
