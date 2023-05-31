import { ApiProperty } from '@nestjs/swagger'
import { PrimaryGeneratedColumn, Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm'

@Entity('cms_news')
export class NewsEntity {
  @ApiProperty({ description: 'id' })
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string

  @ApiProperty({ description: '标题' })
  @Column({ type: 'varchar', length: 100, comment: '标题' })
  title: string

  @ApiProperty({ description: '摘要' })
  @Column({ type: 'varchar', length: 200, comment: '摘要', default:'' })
  digest: string

  @ApiProperty({ description: '内容' })
  @Column({ type: 'text',length: 0, comment: '内容' })
  content: string

  @ApiProperty({ description: '封面图' })
  @Column({ type: 'varchar', comment: '封面图', default:'' })
  url: string

  @ApiProperty({ type: Date, description: '创建时间' })
  @CreateDateColumn({ type: 'timestamp', name: 'create_date', comment: '创建时间' })
  createDate: Date

  @ApiProperty({ type: Date, description: '更新时间' })
  @UpdateDateColumn({ type: 'timestamp', name: 'update_date', comment: '更新时间' })
  updateDate: Date
}
