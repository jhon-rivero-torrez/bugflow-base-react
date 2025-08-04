import { Request, Response } from 'express';
import { createPriority, getAllPriorities, deletePriority } from '../services/priority.service';
import { createPrioritySchema } from '../schemas/priority.schema';

export async function handleCreatePriority(req: Request, res: Response): Promise<void> {
  const parsed = createPrioritySchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.flatten().fieldErrors });
    return;
  }

  try {
    const priority = await createPriority(parsed.data);
    res.status(201).json(priority);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}

export async function handleGetAllPriorities(_req: Request, res: Response): Promise<void> {
  const priorities = await getAllPriorities();
  res.status(200).json(priorities);
}

export async function handleDeletePriority(req: Request, res: Response): Promise<void> {
  const { id } = req.params;

  try {
    await deletePriority(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}
