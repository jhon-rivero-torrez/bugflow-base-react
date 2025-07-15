import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { JSX } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../app/store/useAuthStore';

const colorPalette = ['#FFEBEE', '#E3F2FD', '#E8F5E9', '#FFF3E0', '#EDE7F6'];

const mockProjects = [
  { id: 'PJT-001', name: 'Authentication Service', owner: 'admin' },
  { id: 'PJT-002', name: 'Frontend Redesign', owner: 'lucas' },
  { id: 'PJT-003', name: 'Bug Tracker Core', owner: 'jhon' },
  { id: 'PJT-004', name: 'Notifications', owner: 'jhon' },
].map((proj) => ({
  ...proj,
  color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
}));

const HomePage = (): JSX.Element => {
  const navigate = useNavigate();
  const user = useAuthStore((s) => s.user);
  const isAdmin = user?.role === 'admin';

  const filteredProjects = isAdmin
    ? mockProjects
    : mockProjects.filter((p) => p.owner === user?.username);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 6, gap: 4 }}>
      <Typography variant="h3" component="h1">
        Welcome to BugFlow{' '}
        <span role="img" aria-label="lady beetle">
          🐞
        </span>
      </Typography>

      <Typography variant="body1" maxWidth={600} textAlign="center">
        Track, assign, and resolve issues with ease across your projects.
      </Typography>

      <Button variant="contained" size="large" href="/dashboard">
        Go to Dashboard
      </Button>

      <Typography variant="h5" mt={6} fontWeight="medium">
        {isAdmin ? 'All Projects' : 'My Projects'}
      </Typography>
<Box
  sx={{
    display: 'grid',
    gap: 3,
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
    },
    maxWidth: 'lg',
    width: '100%',
    justifyContent: 'center',
  }}
>
  {filteredProjects.map((project) => (
    <Paper
      key={project.id}
      elevation={4}
      sx={{
        p: 3,
        cursor: 'pointer',
        backgroundColor: project.color,
        '&:hover': { boxShadow: 6 },
      }}
      onClick={() => navigate(`/project/${project.id}`)}
    >
      <Typography variant="h6" fontWeight="bold">
        {project.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        ID: {project.id}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Owner: {project.owner}
      </Typography>
    </Paper>
  ))}
</Box>


    </Box>
  );
};

export default HomePage;
