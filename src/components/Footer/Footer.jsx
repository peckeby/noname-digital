import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import { Map, Phone } from '@mui/icons-material';
import s from './Footer.module.scss';

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
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: '30%',
        }}
      >
        <section className={s.footerContactsSection}>
          <Typography variant="h6">Contacts</Typography>
          <a
            href="https://www.google.com/search?q=%D1%82%D0%B0%D1%80%D0%B0%D1%81%D0%B0+%D1%88%D0%B5%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%B0+33&oq=%D1%82%D0%B0%D1%80%D0%B0%D1%81%D0%B0+%D1%88%D0%B5%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%B0+33&aqs=chrome..69i57j0i19i22i30l2j0i15i19i22i30.3987j0j7&sourceid=chrome&ie=UTF-8#"
            className={s.footerLink}
          >
            <Map />
            <Typography>Tarasa Shevchenka 33, Kyiv, Ukraine</Typography>
          </a>
          <a href="tel:095-095-11-11" className={s.footerLink}>
            <Phone />
            <Typography>095-095-11-11</Typography>
          </a>
        </section>
        <section>
          <Typography variant="h6">Author: @peckeby</Typography>
          <Box>
            <a href="https://github.com/peckeby">
              <IconButton>
                <GitHubIcon />
              </IconButton>
            </a>
            <a href="https://www.linkedin.com/in/olha-prymak/">
              <IconButton>
                <LinkedIn sx={{ fontSize: '1.8rem' }} />
              </IconButton>
            </a>
          </Box>
        </section>
      </Container>
    </Box>
  );
}
