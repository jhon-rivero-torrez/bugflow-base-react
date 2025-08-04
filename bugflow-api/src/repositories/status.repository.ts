import { AppDataSource } from '../config/typeorm.config';
import { Status } from '../entities/status.entity';
import { Repository } from 'typeorm';

export const StatusRepository: Repository<Status> = AppDataSource.getRepository(Status);
