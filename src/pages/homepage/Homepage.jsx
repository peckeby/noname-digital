import { Box, Typography } from '@mui/material';
import CategoriesList from 'components/CategoriesList/CategoriesList';

export const Homepage = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '5rem',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Noname Digital
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          {'Your expert in shopping.'}
          <br />
          {'Here you can find anything for great gifts and surprises.'}
        </Typography>
      </Box>
      <CategoriesList />
    </>
  );
};
