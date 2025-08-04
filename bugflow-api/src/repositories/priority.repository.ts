import { AppDataSource } from '../config/typeorm.config';
import { Priority } from '../entities/priority.entity';

export const PriorityRepository = AppDataSource.getRepository(Priority);
