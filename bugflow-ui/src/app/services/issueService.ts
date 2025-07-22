// services/issueService.ts
import { Issue } from '../types/issue';

export const mockIssues: Issue[] = [
  {
    id: 'ISS-101',
    title: 'Fix login redirect',
    description: 'Login does not redirect to dashboard',
    status: 'Open',
    priority: 'High',
    assignee: 'jhon',
    projectId: 'PJT-001',
    reporter: 'admin',
  },
  {
    id: 'ISS-102',
    title: 'Update UI styles',
    description: 'Buttons not aligned on mobile',
    status: 'In Progress',
    priority: 'Medium',
    assignee: 'lucas',
    projectId: 'PJT-001',
    reporter: 'admin',
  },
  // more issues...
];


export const fetchIssuesByProject = async (projectId: string): Promise<Issue[]> => {
  // This would be a real API call in a full app
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockIssues);
    }, 500);
  });
};
