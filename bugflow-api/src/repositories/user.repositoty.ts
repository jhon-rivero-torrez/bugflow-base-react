import { AppDataSource } from '../config/typeorm.config';
import { User } from '../entities/user.entity';

export const userRepository = AppDataSource.getRepository(User);
