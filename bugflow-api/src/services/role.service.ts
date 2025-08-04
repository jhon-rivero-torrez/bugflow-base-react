import { Role } from '../entities/role.entity';
import { RoleRepository } from '../repositories/role.repository';
import { CreateRoleInput } from '../schemas/role.schema';

export async function createRole(data: CreateRoleInput): Promise<Role> {
  const role = RoleRepository.create(data);
  return await RoleRepository.save(role);
}

export async function getAllRoles(): Promise<Role[]> {
  return await RoleRepository.find();
}

export async function deleteRole(id: string): Promise<void> {
  await RoleRepository.delete(id);
}
