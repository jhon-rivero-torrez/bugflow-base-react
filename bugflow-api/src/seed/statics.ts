
import { DataSource } from 'typeorm';
import { Priority } from '../entities/priority.entity';
import { Role } from '../entities/role.entity';
import { Status } from '../entities/status.entity';

export async function seedStaticTables(dataSource: DataSource) {
  const roleRepo = dataSource.getRepository(Role);
  const statusRepo = dataSource.getRepository(Status);
  const priorityRepo = dataSource.getRepository(Priority);

  const roles = ['Admin', 'Manager', 'Developer'];
  const statuses = ['Open', 'In Progress', 'Closed'];
  const priorities = ['Low', 'Medium', 'High'];

  for (const name of roles) {
    const existing = await roleRepo.findOne({ where: { name } });
    if (!existing) await roleRepo.save({ name });
  }

  for (const name of statuses) {
    const existing = await statusRepo.findOne({ where: { name } });
    if (!existing) await statusRepo.save({ name });
  }

  for (const level of priorities) {
    const existing = await priorityRepo.findOne({ where: { level } });
    if (!existing) await priorityRepo.save({ level });
  }
}
