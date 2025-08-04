import { Router } from 'express';
import {
  handleCreateStatus,
  handleGetAllStatuses,
  handleDeleteStatus,
} from '../controllers/status.controller';

const router: Router = Router();

router.get('/', handleGetAllStatuses);
router.post('/', handleCreateStatus);
router.delete('/:id', handleDeleteStatus);

export default router;
