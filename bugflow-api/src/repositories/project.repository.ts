import { AppDataSource } from '../config/typeorm.config';
import { Project } from '../entities/project.entity';

export const projectRepository = AppDataSource.getRepository(Project);
