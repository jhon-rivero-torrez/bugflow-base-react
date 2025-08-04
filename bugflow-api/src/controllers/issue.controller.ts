import { Request, Response } from 'express';
import { createIssueSchema, updateIssueSchema } from '../schemas/issue.schema';
import { createIssue, getAllIssues, getIssueById, updateIssue, deleteIssue } from '../services/issue.service';


export async function HandleCreateIssue(req: Request, res: Response) {
  const parse = createIssueSchema.safeParse(req.body);
  if (!parse.success) return res.status(400).json({ error: parse.error });

  const issue = await createIssue(parse.data);
  return res.status(201).json(issue);
}

export async function HandleGetAllIssues(_: Request, res: Response) {
  const issues = await getAllIssues();
  return res.json(issues);
}

export async function HandleGetIssueById(req: Request, res: Response) {
  const { id } = req.params;
  const issue = await getIssueById(id);
  if (!issue) return res.status(404).json({ error: 'Issue not found' });
  return res.json(issue);
}

export async function HandleUpdateIssue(req: Request, res: Response) {
  const { id } = req.params;
  const parse = updateIssueSchema.safeParse(req.body);
  if (!parse.success) return res.status(400).json({ error: parse.error });

  const updated = await updateIssue(id, parse.data);
  if (!updated) return res.status(404).json({ error: 'Issue not found' });
  return res.json(updated);
}

export async function HandleDeleteIssueHandler(req: Request, res: Response) {
  const { id } = req.params;
  const deleted = await deleteIssue(id);
  if (!deleted) return res.status(404).json({ error: 'Issue not found' });
  return res.status(204).send();
}
