export interface Issue {
  id: string;
  title: string;
  description: string;
  status: 'Open' | 'In Progress' | 'Closed';
  priority: 'Low' | 'Medium' | 'High';
  assignee: string;
  reporter: string;
  projectId: string;
}

export interface IssueProps {
  issue: Issue;
  onView: () => void;
  onEdit: () => void;
  onDelete: () => void;
}