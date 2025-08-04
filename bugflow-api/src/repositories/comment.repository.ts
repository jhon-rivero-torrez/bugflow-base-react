import { AppDataSource } from '../config/typeorm.config';
import { Comment } from '../entities/comments.entity';

export const commentRepository = AppDataSource.getRepository(Comment);
