import { ApiProperty } from '@nestjs/swagger'
import { PrimaryGeneratedColumn, Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm'

@Entity('cms_company')
export class CompanyEntity {
  @ApiProperty({ description: 'id' })
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string

  @ApiProperty({ description: '商号' })
  @Column({ type: 'varchar', length: 255, comment: '商号' })
  businessName: string

  @ApiProperty({ description: '成立日期' })
  @Column({ type: 'varchar', length: 200, comment: '成立日期' })
  registerDate: string

  @ApiProperty({ description: '注册资金' })
  @Column({ type: 'varchar', length: 200, comment: '注册资金' })
  registerCapital: string

  @ApiProperty({ description: '所有地' })
  @Column({ type: 'varchar', length: 200, comment: '所有地' })
  address: string

  @ApiProperty({ description: 'TEL' })
  @Column({ type: 'varchar', length: 20, comment: 'TEL' })
  tel: string

  @ApiProperty({ description: 'FAX' })
  @Column({ type: 'varchar', length: 20, comment: 'FAX' })
  fax: string

  @ApiProperty({ description: 'email' })
  @Column({ type: 'varchar', length: 20, comment: 'email' })
  email: string

  @ApiProperty({ description: '取引银行' })
  @Column({ type: 'varchar', length: 64, comment: '取引银行' })
  bank: string

  @ApiProperty({ description: '主要经营品目' })
  @Column({ type: 'varchar', comment: '主要经营品目' })
  businessScope: string

  @ApiProperty({ description: '主要生产厂家' })
  @Column({ type: 'varchar', comment: '主要生产厂家' })
  manufacturer: string

  @ApiProperty({ description: '纬度' })
  @Column({ type: 'decimal', precision: 10, comment: '纬度', scale:7 })
  lat: number

  @ApiProperty({ description: '经度' })
  @Column({ type: 'decimal', precision: 10, comment: '经度', scale:7 })
  lng: number

  @ApiProperty({ description: '公司缩写' })
  @Column({ type: 'varchar', comment: '公司缩写' })
  companyLimited: string

  @ApiProperty({ description: 'logo' })
  @Column({ type: 'varchar', comment: 'logo' })
  logo: string

  @ApiProperty({ type: Date, description: '创建时间' })
  @CreateDateColumn({ type: 'timestamp', name: 'create_date', comment: '创建时间' })
  createDate: Date

  @ApiProperty({ type: Date, description: '更新时间' })
  @UpdateDateColumn({ type: 'timestamp', name: 'update_date', comment: '更新时间' })
  updateDate: Date
}
