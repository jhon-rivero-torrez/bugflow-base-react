import { Request, Response } from 'express';
import { createStatus, getAllStatuses, deleteStatus } from '../services/status.service';
import { createStatusSchema } from '../schemas/status.schema';

export async function handleCreateStatus(req: Request, res: Response): Promise<void> {
  const parsed = createStatusSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.flatten().fieldErrors });
    return;
  }

  try {
    const status = await createStatus(parsed.data);
    res.status(201).json(status);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}

export async function handleGetAllStatuses(_req: Request, res: Response): Promise<void> {
  const statuses = await getAllStatuses();
  res.status(200).json(statuses);
}

export async function handleDeleteStatus(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  try {
    await deleteStatus(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}
