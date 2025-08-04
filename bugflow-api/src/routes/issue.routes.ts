import { Router } from 'express';
import {
  HandleCreateIssue,
  HandleDeleteIssueHandler,
  HandleGetAllIssues,
  HandleGetIssueById,
  HandleUpdateIssue,
} from '../controllers/issue.controller';

export const issueRouter: Router = Router();

issueRouter.post('/', HandleCreateIssue);
issueRouter.get('/', HandleGetAllIssues);
issueRouter.get('/:id', HandleGetIssueById);
issueRouter.put('/:id', HandleUpdateIssue);
issueRouter.delete('/:id', HandleDeleteIssueHandler);
