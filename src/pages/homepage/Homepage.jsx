import { Box, Container, Typography } from '@mui/material';
import CategoriesList from 'components/CategoriesList/CategoriesList';

export const Homepage = () => {
  return (
    <Container sx={{ display: { lg: 'flex' }, flexDirection: { lg: 'row' } }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: { md: '5rem', xs: '1rem' },
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontSize: { xs: '3rem' } }}
        >
          Noname Digital
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontSize: { xs: '1.7rem' } }}
        >
          {'Your expert in shopping.'}
          <br />
          {'Here you can find anything for great gifts and surprises.'}
        </Typography>
      </Box>
      <CategoriesList />
    </Container>
  );
};
