
import { User } from '../entities/user.entity';
import { userRepository } from '../repositories/user.repositoty';
import { CreateUserDto, UpdateUserDto } from '../schemas/user.schema';

export const createUser = async (data: CreateUserDto): Promise<User> => {
  const user = userRepository.create(data);
  return await userRepository.save(user);
};

export const getUserById = async (id: string): Promise<User | null> => {
  return await userRepository.findOne({ where: { id } });
};

export const updateUser = async (id: string, data: UpdateUserDto): Promise<User | null> => {
  const user = await userRepository.findOneBy({ id });
  if (!user) return null;
  userRepository.merge(user, data);
  return await userRepository.save(user);
};

export const deleteUser = async (id: string): Promise<boolean> => {
  const result = await userRepository.delete(id);
  return result.affected !== 0;
};

export const getAllUsers = async (): Promise<User[]> => {
  return await userRepository.find();
};