import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import { JSX, useState } from 'react';
import { useAuthStore } from '../../store/useAuthStore';

const Header = (): JSX.Element => {
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();;;
    handleMenuClose();
    window.location.href = '/login'; // or useNavigate
  };

  return (
    <AppBar position="static" sx={{ bgcolor: '#1e1e1e' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          BugFlow{' '}
          <span role="img" aria-label="bug">
            🐞
          </span>
        </Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="body1" fontWeight="bold">
            {user?.username}
          </Typography>
          <IconButton onClick={handleMenuOpen}>
            <Avatar
              src={`/assets/avatars/${user?.role ?? 'user'}.png`}
              alt={user?.role}
              sx={{ width: 32, height: 32 }}
            />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleLogout}>Log out</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
