import { Status } from '../entities/status.entity';
import { StatusRepository } from '../repositories/status.repository';
import { CreateStatusInput } from '../schemas/status.schema';

export async function createStatus(data: CreateStatusInput): Promise<Status> {
  const status = StatusRepository.create(data);
  return await StatusRepository.save(status);
}

export async function getAllStatuses(): Promise<Status[]> {
  return await StatusRepository.find();
}

export async function deleteStatus(id: string): Promise<void> {
  await StatusRepository.delete(id);
}
