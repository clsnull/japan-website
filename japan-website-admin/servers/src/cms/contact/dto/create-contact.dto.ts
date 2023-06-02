import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsPhoneNumber, IsEmail } from 'class-validator'

export class CreateContactDto {
  @ApiProperty({ description: '咨询产品' })
  @IsNotEmpty({ message: 'お問合せ製品が入力されていません。' })
  readonly title: string

  @ApiProperty({ description: '会社名' })
  @IsNotEmpty({ message: '会社名が入力されていません。' })
  readonly businessName: string

  @ApiProperty({ description: '担当者' })
  @IsNotEmpty({ message: '担当者名が入力されていません。' })
  readonly username: string

  @ApiProperty({ description: 'フリガナ(氏名)' })
  @IsNotEmpty({ message: 'フリガナが入力されていません。' })
  readonly nomen: string

  @ApiProperty({ description: '住所' })
  @IsNotEmpty({ message: '住所が入力されていません。' })
  readonly address: string

  @ApiProperty({ description: '郵便番号' })
  readonly postCode: string

  @ApiProperty({ description: '電話番号' })
  @IsNotEmpty({ message: '電話番号が入力されていません。' })
  readonly phone: string

  @ApiProperty({ description: 'メールアドレス(邮箱地址)' })
  @IsEmail(
    {
    },
    {
      message: 'メールアドレスの形式が不正です。',
    },
  )
  @IsNotEmpty({ message: 'メールアドレスが入力されていません。' })
  readonly email: string

  @ApiProperty({ description: 'お問合せ内容(咨询内容)' })
  @IsNotEmpty({ message: 'お問い合わせ内容が入力されていません。' })
  readonly content: string
}
