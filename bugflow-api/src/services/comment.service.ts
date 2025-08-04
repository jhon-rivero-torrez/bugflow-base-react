import { commentRepository } from '../repositories/comment.repository';
import { CreateCommentInput } from '../schemas/comment.schema';
import { Comment } from '../entities/comments.entity';

export async function createComment(
  data: CreateCommentInput
): Promise<Comment> {
  const comment = commentRepository.create(data);
  return await commentRepository.save(comment);
}

export async function getCommentsByIssueId(
  issueId: string
): Promise<Comment[]> {
  return await commentRepository.find({
    where: { issueId },
    relations: ['createdBy'],
    order: { createdAt: 'DESC' },
  });
}

export async function deleteComment(id: string): Promise<void> {
  await commentRepository.delete(id);
}
