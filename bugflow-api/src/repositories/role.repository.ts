import { AppDataSource } from '../config/typeorm.config';
import { Role } from '../entities/role.entity';

export const RoleRepository = AppDataSource.getRepository(Role);
