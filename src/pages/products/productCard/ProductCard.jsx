import { Box, Button, Typography } from '@mui/material';
import ShopContext from 'context/ShopContext';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductCard() {
  const { idx } = useParams();

  return (
    <ShopContext.Consumer>
      {context => (
        <Box>
          <img
            src={
              context.products.filter(product => product.id === idx)[0].image
            }
            height={300}
            alt={context.products.filter(product => product.id === idx)[0].name}
          />
          <Typography variant="h4">
            {context.products.filter(product => product.id === idx)[0].name}
          </Typography>
          <Typography variant="body">
            {
              context.products.filter(product => product.id === idx)[0]
                .description
            }
          </Typography>
          <Typography variant="h5">
            Price:{' '}
            {context.products.filter(product => product.id === idx)[0].price}$
          </Typography>
          <Button
            variant="contained"
            onClick={context.addProductToCart.bind(
              this,
              context.products.filter(product => product.id === idx)[0]
            )}
          >
            Add to cart
          </Button>
        </Box>
      )}
    </ShopContext.Consumer>
  );
}
