import { z } from 'zod';

export const createProjectSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  ownerId: z.string().uuid('Invalid ownerId'),
});

export const updateProjectSchema = createProjectSchema.partial();

export type CreateProjectDto = z.infer<typeof createProjectSchema>;
export type UpdateProjectDto = z.infer<typeof updateProjectSchema>;
