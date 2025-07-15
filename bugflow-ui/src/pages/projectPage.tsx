// apps/bugflow-ui/src/pages/ProjectPage.tsx
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import { JSX } from 'react';

const ProjectPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();

  return (
    <Container sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom>
        Project Details
      </Typography>
      <Box>
        <Typography variant="body1"><strong>Project ID:</strong> {id}</Typography>
        <Typography variant="body1"><strong>Owner:</strong> Placeholder Owner</Typography>
      </Box>
    </Container>
  );
};

export default ProjectPage;
