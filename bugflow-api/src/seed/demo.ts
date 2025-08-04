import { DataSource } from 'typeorm';
import { Comment } from '../entities/comments.entity';
import { Issue } from '../entities/issue.entity';
import { Project } from '../entities/project.entity';
import { User } from '../entities/user.entity';
import { Role } from '../entities/role.entity';
import { Status } from '../entities/status.entity';
import { Priority } from '../entities/priority.entity';

export async function seedDemoData(dataSource: DataSource) {
  const userRepo = dataSource.getRepository(User);
  const projectRepo = dataSource.getRepository(Project);
  const issueRepo = dataSource.getRepository(Issue);
  const commentRepo = dataSource.getRepository(Comment);

  const role = await dataSource.getRepository(Role).findOneByOrFail({ name: 'Developer' });

  const user = await userRepo.save({
    username: 'Alice Tester',
    email: 'alice@example.com',
    password: 'hashedpassword123',
    role,
  });

  const project = await projectRepo.save({
    name: 'BugFlow Alpha',
    description: 'Initial test project',
    createdBy: user,
  });

  const status = await dataSource.getRepository(Status).findOneByOrFail({ name: 'Open' });
  const priority = await dataSource.getRepository(Priority).findOneByOrFail({ level: 'High' });

  const issue = await issueRepo.save({
    title: 'Login page broken',
    description: 'User cannot log in with valid credentials.',
    project,
    assignee: user,
    reporter: user,
    priority,
    status,
  });

  await commentRepo.save({
    content: 'Looks like a backend validation error.',
    issue,
    createdBy: user,
  });
}
