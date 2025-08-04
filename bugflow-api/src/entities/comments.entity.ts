import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  Index,
  UpdateDateColumn,
} from 'typeorm';
import { Issue } from './issue.entity';
import { User } from './user.entity';

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  @Index()
  content!: string;

  @Column()
  issueId!: string;

  @ManyToOne(() => Issue, issue => issue.comments, {
    onDelete: 'CASCADE',
  })
  issue!: Issue;

  @Column()
  createdById!: string;

  @ManyToOne(() => User, user => user.id)
  createdBy!: User | null;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
