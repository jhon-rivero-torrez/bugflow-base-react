import { Router } from 'express';
import {
  handleCreateUser,
  handleDeleteUser,
  handleGetAllUsers,
  handleGetUserById,
} from '../controllers/user.controller';

const router: Router = Router();

router.post('/', handleCreateUser);
router.get('/', handleGetAllUsers);
router.get('/:id', handleGetUserById);
router.delete('/:id', handleDeleteUser);

export default router;
