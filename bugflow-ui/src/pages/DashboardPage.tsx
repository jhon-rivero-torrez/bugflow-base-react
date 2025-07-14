import { JSX } from 'react';
import { Typography, Container } from '@mui/material';
import { useAuthStore } from '../app/store/useAuthStore';

const DashboardPage = (): JSX.Element => {
  const user = useAuthStore((state) => state.user);

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      {user ? (
        <Typography variant="body1">
          Welcome, <strong>{user.username}</strong>! You have role: <strong>{user.role}</strong>.
        </Typography>
      ) : (
        <Typography variant="body1" color="error">
          No user data found. Please log in again.
        </Typography>
      )}
    </Container>
  );
};

export default DashboardPage;
