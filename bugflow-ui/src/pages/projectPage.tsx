import { useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  CircularProgress,
  Button,
} from '@mui/material';
import { useState } from 'react';
import ProjectBoard from '../app/components/project/projectBoard';
import IssueFilters from '../app/components/project/issueFileters';
import IssueModal from '../app/components/project/issueModal';
import { useProjectIssues } from '../app/hooks/useProjectIssues';
import { Issue } from '../app/types/issue';

const ProjectPage = () => {
  const { projectId = "" } = useParams<{ projectId: string }>();
  const [openModal, setOpenModal] = useState(false);

  const { data: issues = [], isLoading } = useProjectIssues(projectId);

  const setFilters = (filtered: Issue[]) => {console.log("test",filtered) }
   return (
    <Box sx={{ p: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">Project: {projectId}</Typography>
        <Button variant="contained" onClick={() => setOpenModal(true)}>Create Issue</Button>
      </Box>

      <IssueFilters issues={issues} setFiltered={setFilters} />

      {isLoading ? (
        <CircularProgress />
      ) : (
        <ProjectBoard issues={issues} />
      )}

      <IssueModal open={openModal} onClose={() => setOpenModal(false)} />
    </Box>
  );
};

export default ProjectPage;
