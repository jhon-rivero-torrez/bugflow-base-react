import { Box, Typography, Button } from '@mui/material';
import { Issue } from '../../types/issue';

interface IssueViewProps {
  issue: Issue;
  onClose: () => void;
  onEdit: () => void;
}

const IssueView = ({ issue, onClose, onEdit }: IssueViewProps) => {
  return (
    <Box>
      <Typography variant="h6">{issue.title}</Typography>
      <Typography variant="body2">Priority: {issue.priority}</Typography>
      <Typography variant="body2">Assignee: {issue.assignee || 'Unassigned'}</Typography>
      <Typography variant="body2" mt={2}>{issue.description}</Typography>

      <Box mt={3} display="flex" justifyContent="flex-end" gap={1}>
        <Button onClick={onClose}>Close</Button>
        <Button variant="contained" onClick={onEdit}>Edit</Button>
      </Box>
    </Box>
  );
};

export default IssueView;
