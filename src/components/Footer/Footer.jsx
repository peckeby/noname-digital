import { Box, Container, IconButton, Typography } from '@material-ui/core';
import * as React from 'react';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: theme =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">Author: @peckeby</Typography>
        <a href="https://github.com/peckeby">
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
          ></IconButton>
        </a>
      </Container>
    </Box>
  );
}
