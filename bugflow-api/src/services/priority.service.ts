import { Priority } from '../entities/priority.entity';
import { PriorityRepository } from '../repositories/priority.repository';
import { CreatePriorityInput } from '../schemas/priority.schema';

export async function createPriority(data: CreatePriorityInput): Promise<Priority> {
  const priority = PriorityRepository.create(data);
  return await PriorityRepository.save(priority);
}

export async function getAllPriorities(): Promise<Priority[]> {
  return await PriorityRepository.find();
}

export async function deletePriority(id: string): Promise<void> {
  await PriorityRepository.delete(id);
}
