import { Router } from 'express';
import {
  handleCreateProject,
  handleGetAllProjects,
  handleGetProjectById,
  handleGetProjectsByOwnerId,
  handleDeleteProject,
  handleUpdateProject,
} from '../controllers/project.controller';

const router: Router = Router();

router.post('/', handleCreateProject);
router.get('/', handleGetAllProjects);
router.get('/:id', handleGetProjectById);
router.get('/owner/:ownerId', handleGetProjectsByOwnerId);
router.put('/:id', handleUpdateProject);
router.delete('/:id', handleDeleteProject);

export default router;
