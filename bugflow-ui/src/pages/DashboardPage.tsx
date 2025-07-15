// apps/bugflow-ui/src/pages/DashboardPage.tsx
import { JSX } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useAuthStore } from '../app/store/useAuthStore';
import AdminPanel from '../app/components/dashboard/adminPanel';
import IssueTable from '../app/components/dashboard/issueTable';

const DashboardPage = (): JSX.Element => {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return (
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Typography variant="h5" color="error">
          No user data found. Please log in again.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box mb={4}>
        <Typography variant="h4" fontWeight="bold">
          Welcome, {user.username}!
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Role: {user.role}
        </Typography>
      </Box>

      {user.role === 'admin' && (
        <Box mb={6}>
          <AdminPanel />
        </Box>
      )}

      <IssueTable role={user.role} username={user.username} />
    </Container>
  );
};

export default DashboardPage;