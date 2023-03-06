import { Box, Button, Typography } from '@mui/material';
import ShopContext from 'context/ShopContext';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductCard() {
  const { idx } = useParams();

  return (
    <ShopContext.Consumer>
      {context => (
        <Box sx={{ display: 'flex', gap: '9rem' }}>
          <img
            src={
              context.products.filter(product => product.id === idx)[0].image
            }
            height={300}
            alt={context.products.filter(product => product.id === idx)[0].name}
          />
          <Box sx={{ display: 'block' }}>
            <Typography variant="h4" marginBottom="2rem">
              {context.products.filter(product => product.id === idx)[0].name}
            </Typography>
            <Typography variant="body" component="p" marginBottom="2rem">
              {
                context.products.filter(product => product.id === idx)[0]
                  .description
              }
            </Typography>
            <Typography variant="h5" marginBottom="2rem">
              Price:{' '}
              {context.products.filter(product => product.id === idx)[0].price}$
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={context.addProductToCart.bind(
                this,
                context.products.filter(product => product.id === idx)[0]
              )}
            >
              Add to cart
            </Button>
          </Box>
        </Box>
      )}
    </ShopContext.Consumer>
  );
}
