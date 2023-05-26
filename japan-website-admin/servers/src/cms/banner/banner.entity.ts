import { ApiProperty } from '@nestjs/swagger'
import { PrimaryGeneratedColumn, Column, CreateDateColumn, Entity } from 'typeorm'

@Entity('cms_banner')
export class BannerEntity {
  @ApiProperty({ description: 'id' })
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string

  @ApiProperty({ description: '名称' })
  @Column({ type: 'varchar', length: 50, comment: '名称' })
  name: string

  @ApiProperty({ description: '跳转路径' })
  @Column({ type: 'varchar', length: 50, comment: '跳转路径' })
  url: string

  @ApiProperty({ type: String, description: '图片地址' })
  @Column({ type: 'varchar', comment: '图片地址' })
  img: string
}
