import { Request, Response } from 'express';
import { createCommentSchema, deleteCommentParamsSchema } from '../schemas/comment.schema';
import { createComment, deleteComment, getCommentsByIssueId } from '../services/comment.service';

export async function handleCreateComment(req: Request, res: Response): Promise<void> {
  const parse = createCommentSchema.safeParse(req.body);
  if (!parse.success) {
    res.status(400).json({ error: parse.error.format() });
    return;
  }

  try {
    const comment = await createComment(parse.data);
    res.status(201).json(comment);
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function handleGetCommentsByIssue(req: Request, res: Response): Promise<void> {
  const issueId = req.params.issueId;
  if (!issueId) {
    res.status(400).json({ error: 'Missing issueId' });
    return;
  }

  try {
    const comments = await getCommentsByIssueId(issueId);
    res.status(200).json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function handleDeleteComment(req: Request, res: Response) {
  try {
    const { id } = deleteCommentParamsSchema.parse(req.params);

    await deleteComment(id);

    return res.status(204).send();
  } catch (error) {
    if (error instanceof Error && error.message === 'Comment not found') {
      return res.status(404).json({ message: 'Comment not found' });
    }

    return res.status(500).json({ message: 'Internal server error' });
  }
}
