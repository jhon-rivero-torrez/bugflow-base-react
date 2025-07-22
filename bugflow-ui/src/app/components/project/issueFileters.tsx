import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Typography,
  Paper,
} from '@mui/material';
import { useState } from 'react';
import { Issue } from '../../types/issue';

interface Props {
  issues: Issue[];
  setFiltered: (filtered: Issue[]) => void;
}

const IssueFilters = ({ issues, setFiltered }: Props) => {
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');
  const [assignee, setAssignee] = useState('');

  const uniqueAssignees = Array.from(new Set(issues.map((i) => i.assignee)));

  const handleChange = () => {
    const filtered = issues.filter((issue) => {
      const statusMatch = !status || issue.status === status;
      const priorityMatch = !priority || issue.priority === priority;
      const assigneeMatch = !assignee || issue.assignee === assignee;
      return statusMatch && priorityMatch && assigneeMatch;
    });
    setFiltered(filtered);
  };

  return (
    <Paper sx={{ p: 3, mt: 2, backgroundColor: 'background.paper' }} elevation={2}>
      <Typography variant="h6" mb={2}>
        Filter Issues
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <FormControl sx={{ minWidth: 200 }} size="small">
          <InputLabel>Status</InputLabel>
          <Select value={status} onChange={(e: SelectChangeEvent) => {
            setStatus(e.target.value);
            handleChange();
          }} label="Status">
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Open">Open</MenuItem>
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="Closed">Closed</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 200 }} size="small">
          <InputLabel>Priority</InputLabel>
          <Select value={priority} onChange={(e) => {
            setPriority(e.target.value);
            handleChange();
          }} label="Priority">
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 200 }} size="small">
          <InputLabel>Assignee</InputLabel>
          <Select value={assignee} onChange={(e) => {
            setAssignee(e.target.value);
            handleChange();
          }} label="Assignee">
            <MenuItem value="">All</MenuItem>
            {uniqueAssignees.map((assignee) => (
              <MenuItem key={assignee} value={assignee}>
                {assignee}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Paper>
  );
};

export default IssueFilters;
