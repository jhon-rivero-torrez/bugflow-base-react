import { Box, Button, Typography, Paper } from '@mui/material';
import { JSX } from 'react';

const HomePage = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 8,
        gap: 3,
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to Bugflow{' '}
        <span role="img" aria-label="lady beetle">
          🐞
        </span>
      </Typography>

      <Typography variant="body1" textAlign="center" maxWidth={500}>
        Bugflow helps you track, report, and squash bugs quickly. Manage your
        bugs with ease using our intuitive dashboard.
      </Typography>

      <Button
        variant="contained"
        color="primary"
        size="large"
        href="/dashboard"
      >
        Go to Dashboard
      </Button>

      <Paper
        elevation={3}
        sx={{
          mt: 4,
          p: 3,
          width: '100%',
          maxWidth: 600,
          textAlign: 'center',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Typography variant="h6">
          <span role="img" aria-label="lady beetle">
            🚀
          </span>{' '}
          Tip
        </Typography>
        <Typography variant="body2">
          Use the dashboard to view open bugs, assign them, and mark them as
          resolved.
        </Typography>
      </Paper>
    </Box>
  );
};

export default HomePage;
