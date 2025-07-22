import { Box, Paper, Typography, Stack } from '@mui/material';
import { IssueProps } from '../../types/issue';
import IssueActions from '../issue/issueActions';

const IssueCard = ({ issue, onView, onEdit, onDelete }: IssueProps) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        borderLeft: `5px solid ${getPriorityColor(issue.priority)}`,
        cursor: 'pointer',
        position: 'relative',
        '&:hover .issue-actions': {
          visibility: 'visible',
        },
      }}
      onClick={onView}
    >
      <Stack spacing={0.5}>
        <Typography variant="subtitle1" fontWeight="bold" noWrap>
          {issue.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Priority: {issue.priority}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Assignee: {issue.assignee || 'Unassigned'}
        </Typography>
      </Stack>

      {/* Action icons (edit/delete) — visible on hover only */}
      <Box
        className="issue-actions"
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          display: 'flex',
          gap: 1,
          visibility: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <IssueActions onEdit={onEdit} onDelete={onDelete} />
      </Box>
    </Paper>
  );
};

export default IssueCard;

// Optional: Define a helper for color-coded priorities
function getPriorityColor(priority: string) {
  switch (priority) {
    case 'High':
      return '#e53935'; // red
    case 'Medium':
      return '#fb8c00'; // orange
    case 'Low':
    default:
      return '#43a047'; // green
  }
}
