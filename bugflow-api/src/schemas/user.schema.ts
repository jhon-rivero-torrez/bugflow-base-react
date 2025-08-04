import { z } from 'zod';

export const createUserSchema = z.object({
  email: z.email(),
  name: z.string().min(1),
  password: z.string().min(6),
});

export const updateUserSchema = z.object({
  name: z.string().min(1).optional(),
  password: z.string().min(6).optional(),
});

export type CreateUserDto = z.infer<typeof createUserSchema>;
export type UpdateUserDto = z.infer<typeof updateUserSchema>;
