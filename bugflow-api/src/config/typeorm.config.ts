import { DataSource } from 'typeorm';
import 'dotenv/config';
import { Role } from '../entities/role.entity';
import { Status } from '../entities/status.entity';
import { Comment } from '../entities/comments.entity';
import { Issue } from '../entities/issue.entity';
import { Priority } from '../entities/priority.entity';
import { Project } from '../entities/project.entity';
import { User } from '../entities/user.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Role, Status, Comment, Issue, Priority, Project, User],
});
