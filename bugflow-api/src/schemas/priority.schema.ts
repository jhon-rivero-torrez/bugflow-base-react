import { z } from 'zod';

export const createPrioritySchema = z.object({
  level: z.string().min(1, 'Priority level is required')
});

export type CreatePriorityInput = z.infer<typeof createPrioritySchema>;
