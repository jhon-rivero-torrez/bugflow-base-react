import { Router } from 'express';
import { handleCreateComment, handleDeleteComment, handleGetCommentsByIssue } from '../controllers/comment.controller';

const router: Router = Router();

router.post('/', handleCreateComment);
router.get('/issue/:id', handleGetCommentsByIssue);
router.delete('/:id', handleDeleteComment);

export default router;
