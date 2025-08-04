import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  Index,
} from 'typeorm';
import { Project } from './project.entity';
import { User } from './user.entity';
import { Status } from './status.entity';
import { Priority } from './priority.entity';
import { Comment } from './comments.entity';

@Entity('issues')
export class Issue {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Index()
  @Column()
  title!: string;

  @Column({ type: 'text' })
  description!: string;

  @Column()
  projectId!: string;

  @ManyToOne(() => Project, project => project.id)
  project!: Project;

  @Column()
  statusId!: string;

  @ManyToOne(() => Status, status => status.id, { eager: true })
  status!: Status;

  @Column()
  priorityId!: string;

  @ManyToOne(() => Priority, priority => priority.id, { eager: true })
  priority!: Priority;

  @Column()
  assigneeId!: string;

  @ManyToOne(() => User, user => user.id, { eager: true })
  assignee!: User;

  @Column()
  reporterId!: string;

  @ManyToOne(() => User, user => user.id, { eager: true })
  reporter!: User;

  @OneToMany(() => Comment, comment => comment.issue, { cascade: true })
  comments!: Comment[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
