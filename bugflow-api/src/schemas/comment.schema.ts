import { z } from 'zod';

export const createCommentSchema = z.object({
  content: z.string().min(1),
  issueId: z.string().uuid(),
  createdById: z.string().uuid(),
});

export const deleteCommentParamsSchema = z.object({
  id: z.string().uuid(),
});

export type CreateCommentInput = z.infer<typeof createCommentSchema>;
export type DeleteCommentParams = z.infer<typeof deleteCommentParamsSchema>;
