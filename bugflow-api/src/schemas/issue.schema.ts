import { z } from 'zod';

export const createIssueSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  projectId: z.string().uuid(),
  statusId: z.string().uuid(),
  priorityId: z.string().uuid(),
  assigneeId: z.string().uuid(),
  reporterId: z.string().uuid(),
});

export const updateIssueSchema = createIssueSchema.partial();

export type CreateIssueInput = z.infer<typeof createIssueSchema>;
export type UpdateIssueInput = z.infer<typeof updateIssueSchema>;
