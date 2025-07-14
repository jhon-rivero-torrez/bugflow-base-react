import { Outlet } from 'react-router-dom';
import Header from './header';
import { Container } from '@mui/material';
import { JSX } from 'react';

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <Container sx={{ mt: 4 }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
