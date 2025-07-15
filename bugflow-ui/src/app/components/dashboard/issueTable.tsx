import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
  Box,
} from '@mui/material';
import { JSX } from 'react';

interface Props {
  role: string;
  username: string;
}

const mockIssues = [
  { id: 'ISSUE-001', assigned: 'jhon', status: 'Open' },
  { id: 'ISSUE-002', assigned: 'lucas', status: 'In Progress' },
  { id: 'ISSUE-003', assigned: 'jhon', status: 'Closed' },
];

const IssueTable = ({ role, username }: Props): JSX.Element => {
  const isAdmin = role === 'admin';
  const filtered = isAdmin
    ? mockIssues
    : mockIssues.filter(
        (i) => i.assigned === username && i.status !== 'Closed'
      );
  const title = isAdmin ? 'All Project Issues' : 'Issues Assigned to Me';

  return (
    <Box mt={4}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Issue ID</TableCell>
              <TableCell>Assigned</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map((issue) => (
              <TableRow key={issue.id}>
                <TableCell>{issue.id}</TableCell>
                <TableCell>{issue.assigned}</TableCell>
                <TableCell>{issue.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default IssueTable;
