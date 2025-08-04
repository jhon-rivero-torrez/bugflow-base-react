import { Request, Response } from 'express';
import { createProjectSchema, updateProjectSchema } from '../schemas/project.schema';
import {
  createProject,
  getAllProjects,
  getProjectById,
  deleteProject,
  getProjectsByOwnerId,
  updateProject,
} from '../services/project.service';

export async function handleCreateProject(req: Request, res: Response): Promise<void> {
  const parsed = createProjectSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.flatten().fieldErrors });
    return;
  }

  try {
    const project = await createProject(parsed.data);
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}

export async function handleGetAllProjects(_req: Request, res: Response): Promise<void> {
  try {
    const projects = await getAllProjects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}

export async function handleGetProjectById(req: Request, res: Response): Promise<void> {
  const { id } = req.params;

  try {
    const project = await getProjectById(id);
    if (!project) {
      res.status(404).json({ error: 'Project not found' });
      return;
    }

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}

export async function handleDeleteProject(req: Request, res: Response): Promise<void> {
  const { id } = req.params;

  try {
    await deleteProject(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}



export async function handleGetProjectsByOwnerId(req: Request, res: Response): Promise<void> {
  const { ownerId } = req.params;

  try {
    const projects = await getProjectsByOwnerId(ownerId);
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}

export async function handleUpdateProject(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const parsed = updateProjectSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.flatten().fieldErrors });
    return;
  }

  try {
    const updatedProject = await updateProject(id, parsed.data);
    if (!updatedProject) {
      res.status(404).json({ error: `Project with id ${id} not found` });
      return;
    }
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}