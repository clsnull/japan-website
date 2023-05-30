import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsPhoneNumber, IsEmail } from 'class-validator'

export class CreateContactDto {
  @ApiProperty({ description: '咨询产品' })
  @IsNotEmpty({ message: 'お問合せ製品 not null' })
  readonly title: string

  @ApiProperty({ description: '会社名' })
  @IsNotEmpty({ message: '会社名 not null' })
  readonly businessName: string

  @ApiProperty({ description: '担当者' })
  @IsNotEmpty({ message: '担当者名 not null' })
  readonly username: string

  @ApiProperty({ description: 'フリガナ(氏名)' })
  @IsNotEmpty({ message: 'フリガナ not null' })
  readonly nomen: string

  @ApiProperty({ description: '住所' })
  @IsNotEmpty({ message: '住所 not null' })
  readonly address: string

  @ApiProperty({ description: '郵便番号' })
  @IsNotEmpty({ message: '郵便番号 not null' })
  readonly postCode: string

  @ApiProperty({ description: '電話番号' })
  @IsPhoneNumber('JP', {
    message: '電話番号 格式不正确',
  })
  @IsNotEmpty({ message: '電話番号 not null' })
  readonly phone: string

  @ApiProperty({ description: 'メールアドレス(邮箱地址)' })
  @IsEmail(
    {
    },
    {
      message: 'メールアドレス 格式不正确',
    },
  )
  @IsNotEmpty({ message: 'メールアドレス not null' })
  readonly email: string

  @ApiProperty({ description: 'お問合せ内容(咨询内容)' })
  @IsNotEmpty({ message: 'お問合せ内容 not null' })
  readonly content: string
}
