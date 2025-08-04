import { Request, Response } from 'express';
import { createRole, getAllRoles, deleteRole } from '../services/role.service';
import { createRoleSchema } from '../schemas/role.schema';

export async function handleCreateRole(req: Request, res: Response): Promise<void> {
  const parsed = createRoleSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.flatten().fieldErrors });
    return;
  }

  try {
    const role = await createRole(parsed.data);
    res.status(201).json(role);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}

export async function handleGetAllRoles(_req: Request, res: Response): Promise<void> {
  const roles = await getAllRoles();
  res.status(200).json(roles);
}

export async function handleDeleteRole(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  try {
    await deleteRole(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}
