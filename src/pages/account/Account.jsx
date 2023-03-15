import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { SIGN_OUT } from 'components/routes/routes';
import React from 'react';
import { Link } from 'react-router-dom';
import s from './Account.module.scss';

export default function Account() {
  const email =
    localStorage.getItem('user') &&
    JSON.parse(localStorage.getItem('user')).email;

  return (
    <section className={s.sectionCabinet}>
      <Typography variant="h2" sx={{ color: 'blue' }}>
        Personal cabinet
      </Typography>
      <Box
        component="div"
        sx={{
          p: 2,
          border: '1px dashed grey',
          ml: 'auto',
          mr: 'auto',
        }}
      >
        <Typography variant="h4">Your personal info</Typography>
        <Typography variant="h5">Email: {email}</Typography>
        <Link to={SIGN_OUT}>
          <Button>SING OUT</Button>
        </Link>
      </Box>
    </section>
  );
}
