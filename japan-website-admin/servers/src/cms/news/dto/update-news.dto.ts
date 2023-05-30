import { ApiProperty } from '@nestjs/swagger'
import { IsNumberString, IsNotEmpty } from 'class-validator'

export class UpdateNewsDto {
  @ApiProperty({ description: 'id' })
  @IsNotEmpty({ message: 'id 不能为空' })
  @IsNumberString({}, { message: 'id 类型错误，正确类型 string' })
  id: string

  @ApiProperty({ description: '标题' })
  readonly title: string

  @ApiProperty({ description: '摘要' })
  readonly digest: string

  @ApiProperty({ description: '内容' })
  readonly content: string

  @ApiProperty({ description: '内容' })
  readonly url: string
}
