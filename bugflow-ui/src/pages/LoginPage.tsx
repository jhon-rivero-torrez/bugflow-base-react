// apps/bugflow-ui/src/pages/LoginPage.tsx

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { JSX } from 'react';
import { useAuthStore } from '../app/store/useAuthStore';
import { LoginFormValues, loginSchema } from '../app/validation/loginSchema';
import { AuthUser } from '../app/types/auth';

const LoginPage = (): JSX.Element => {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormValues): void => {
    // Simulate backend response
    const user: AuthUser = { username: data.username, role: 'admin' };
    setUser(user);
    navigate('/dashboard');
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ p: 4, mt: 10 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Bug <span role="img" aria-label="bug">🐞</span> Flow
        </Typography>

        <Typography variant="body1" align="center" sx={{ mb: 3 }}>
          Collaborative Bug Tracking System
        </Typography>

        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            fullWidth
            label="Username"
            margin="normal"
            {...register('username')}
            error={!!errors.username}
            helperText={errors.username?.message}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            disabled={isSubmitting}
          >
            Log In
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;
