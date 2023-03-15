import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Box, Container, CssBaseline } from '@mui/material';
import img from '../../bkg.png';

function Layout() {
  return (
    <>
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
          sx={{
            pt: 8,
            pb: 2,
            mr: 0,
            ml: 0,
            display: 'flex',
            gap: 10,
            position: 'relative',
            justifyContent: 'center',
            '@media (min-width: 1200px)': {
              maxWidth: '100vw',
            },
            '&::before': {
              width: '100%',
              height: '100%',
              content: "''",
              position: 'absolute',
              top: 0,
              left: 0,
              opacity: 0.03,
              zIndex: -1,
              background: `url(${img})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            },
          }}
        >
          <Suspense>
            <Outlet />
          </Suspense>
        </Container>
        <Footer />
      </Box>
    </>
  );
}

export default Layout;
