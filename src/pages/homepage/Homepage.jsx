import { Box, Typography } from '@material-ui/core';
import CategoriesList from 'components/CategoriesList/CategoriesList';

export const Homepage = () => {
  // const homepageImg = {
  //   img: 'https://images.unsplash.com/photo-1593418631527-ef599fba72df',
  //   title: 'chanel bags',
  // };
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
