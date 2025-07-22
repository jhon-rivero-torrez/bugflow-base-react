import { useQuery } from '@tanstack/react-query';
import { fetchIssuesByProject } from '../services/issueService';

export const useProjectIssues = (projectId: string) => {
    console.log('pruej',projectId)
  return useQuery({
    queryKey: ['project-issues', projectId],
    queryFn: () => fetchIssuesByProject(projectId),
    enabled: !!projectId,
  });
};
