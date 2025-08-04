import { Issue } from "@prisma/client";
import { issueRepository } from "../repositories/issue.repository";
import { CreateIssueInput, UpdateIssueInput } from "../schemas/issue.schema";


export async function createIssue(data: CreateIssueInput): Promise<Issue> {
  const issue = issueRepository.create({...data, updatedAt: new Date()});
  return await issueRepository.save(issue);
}

export async function getAllIssues(): Promise<Issue[]> {
  return await issueRepository.find({
    relations: ['comments'],
  });
}

export async function getIssueById(id: string): Promise<Issue | null> {
  return await issueRepository.findOne({
    where: { id },
    relations: ['comments'],
  });
}

export async function updateIssue(id: string, data: UpdateIssueInput): Promise<Issue | null> {
  const issue = await issueRepository.findOneBy({ id });
  if (!issue) return null;
  Object.assign(issue, data);
  return await issueRepository.save(issue);
}

export async function deleteIssue(id: string): Promise<boolean> {
  const result = await issueRepository.delete({ id });
  return result.affected === 1;
}
