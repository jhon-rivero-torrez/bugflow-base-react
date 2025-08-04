import { Router } from 'express';
import {
  handleCreateRole,
  handleGetAllRoles,
  handleDeleteRole,
} from '../controllers/role.controller';

const router: Router = Router();

router.get('/', handleGetAllRoles);
router.post('/', handleCreateRole);
router.delete('/:id', handleDeleteRole);

export default router;
