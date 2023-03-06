import { Box, Card, List, ListItem, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import css from './Cart.module.scss';

export const Cart = () => {
  const [total, setTotal] = useState(0);
  const cart = JSON.parse(localStorage.getItem('cart'));

  useEffect(() => {
    cart.map(item => setTotal(prev => prev + item.totalValue));
  }, []);

  return (
    <>
      <Typography variant="h3" sx={{ textTransform: 'uppercase' }}>
        My Cart
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '7rem' }}>
        <List>
          {cart ? (
            cart.map(item => (
              <ListItem key={item.name}>
                <Card
                  sx={{
                    p: '1rem',
                    display: 'flex',
                    width: '60rem',
                    gap: '4rem',
                  }}
                >
                  <div className={css.imageBox}>
                    <img
                      src={item.image}
                      alt={item.name}
                      height={200}
                      className={css.image}
                    />
                  </div>
                  <Box>
                    <Typography variant="h5">{item.name}</Typography>
                    <Typography variant="h6">
                      Quantity:
                      {item.quantity}
                    </Typography>
                    <Typography variant="h6">
                      Price:
                      {item.totalValue}$
                    </Typography>
                  </Box>
                </Card>
              </ListItem>
            ))
          ) : (
            <Typography variant="body">No products in your cart</Typography>
          )}
        </List>
        <Typography
          variant="h4"
          sx={{
            alignSelf: 'center',
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
        >
          Total: {total}$
        </Typography>
      </Box>
    </>
  );
};
