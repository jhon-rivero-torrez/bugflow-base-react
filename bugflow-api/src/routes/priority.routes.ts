import { Router } from 'express';
import {
  handleCreatePriority,
  handleGetAllPriorities,
  handleDeletePriority,
} from '../controllers/priority.controller';

const router: Router = Router();

router.get('/', handleGetAllPriorities);
router.post('/', handleCreatePriority);
router.delete('/:id', handleDeletePriority);

export default router;
