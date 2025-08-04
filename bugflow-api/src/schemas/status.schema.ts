import { z } from 'zod';

export const createStatusSchema = z.object({
  name: z.string().min(1, 'Status name is required'),
});

export type CreateStatusInput = z.infer<typeof createStatusSchema>;
