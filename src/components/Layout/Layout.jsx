import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Box, Container, CssBaseline } from '@mui/material';

function Layout() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <CssBaseline />
      <Container
        component="main"
        sx={{ mt: 8, mb: 2, ml: 30, display: 'flex', gap: 10 }}
      >
        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </Box>
  );
}

export default Layout;
