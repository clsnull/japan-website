import { ApiProperty } from '@nestjs/swagger'
import { PrimaryGeneratedColumn, Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm'

@Entity('cms_contact')
export class ContactEntity {
  @ApiProperty({ description: 'id' })
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string

  @ApiProperty({ description: '咨询产品' })
  @Column({ type: 'varchar', length: 255, comment: '咨询产品' })
  title: string

  @ApiProperty({ description: '会社名' })
  @Column({ type: 'varchar', length: 255, comment: '会社名' })
  businessName: string

  @ApiProperty({ type: String, description: '担当者' })
  @Column({ type: 'varchar', length: 255, comment: '担当者' })
  username: string

  @ApiProperty({ description: 'フリガナ(氏名)' })
  @Column({ type: 'varchar', length: 255, comment: 'フリガナ(氏名)' })
  nomen: string

  @ApiProperty({ description: '住所' })
  @Column({ type: 'varchar', length: 100, comment: '住所' })
  address: string

  @ApiProperty({ description: '電話番号' })
  @Column({ type: 'varchar', length: 20, comment: '電話番号' })
  phone: string

  @ApiProperty({ description: '郵便番号' })
  @Column({ type: 'varchar', length: 20, comment: '郵便番号' })
  postCode: string

  @ApiProperty({ description: 'メールアドレス(邮箱地址)' })
  @Column({ type: 'varchar', length: 60, comment: 'メールアドレス(邮箱地址)' })
  email: string

  @ApiProperty({ description: 'お問合せ内容(咨询内容)' })
  @Column({ type: 'text', length: 0, comment: 'お問合せ内容(咨询内容)' })
  content: string

  @ApiProperty({ type: Date, description: '创建时间' })
  @CreateDateColumn({ type: 'timestamp', name: 'create_date', comment: '创建时间' })
  createDate: Date

  @ApiProperty({ type: Date, description: '更新时间' })
  @UpdateDateColumn({ type: 'timestamp', name: 'update_date', comment: '更新时间' })
  updateDate: Date
}
