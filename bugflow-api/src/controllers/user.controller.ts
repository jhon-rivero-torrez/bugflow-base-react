import { Request, Response } from 'express';
import { createUserSchema } from '../schemas/user.schema';
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
} from '../services/user.service';

export async function handleCreateUser(req: Request, res: Response): Promise<void> {
  const parsed = createUserSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.flatten().fieldErrors });
    return;
  }

  try {
    const user = await createUser(parsed.data);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}

export async function handleGetAllUsers(_req: Request, res: Response): Promise<void> {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}

export async function handleGetUserById(req: Request, res: Response): Promise<void> {
  const { id } = req.params;

  try {
    const user = await getUserById(id);
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}

export async function handleDeleteUser(req: Request, res: Response): Promise<void> {
  const { id } = req.params;

  try {
    await deleteUser(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}
