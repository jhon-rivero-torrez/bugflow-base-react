import 'reflect-metadata';

import express, { Express } from 'express';
import projectRoutes from './routes/project.routes';
import roleRoutes from './routes/role.routes';
import statusRoutes from './routes/status.routes'
import priorityRoutes from './routes/priority.routes';
import userRoutes from './routes/user.routes';
import { issueRouter } from './routes/issue.routes';
import commentRoutes from './routes/comment.routes'
const createApp = (): Express => {
  const app = express();

  app.use(express.json());
  app.use('/api/roles', roleRoutes);
  app.use('/api/statuses', statusRoutes);
  app.use('/api/priorities', priorityRoutes);
  app.use('/api/users', userRoutes);
  app.use('/api/projects', projectRoutes);
  app.use('/api/issues', issueRouter);
  app.use('/api/commnets', commentRoutes);


  return app;
};

export default createApp;
