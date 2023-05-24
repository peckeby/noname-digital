import { useState, useEffect, useContext } from 'react';
import {
  Box,
  Card,
  IconButton,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import css from './Cart.module.scss';
import ShopContext from 'context/ShopContext';

export const Cart = () => {
  const [total, setTotal] = useState(0);
  const context = useContext(ShopContext);

  useEffect(() => {
    setTotal(
      context.cart.reduce(
        (acc, item) => acc + item.quantity * item.totalValue,
        0
      )
    ); // eslint-disable-next-line
  }, [context.cart]);

  return (
    <ShopContext.Consumer>
      {context => (
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '4rem' }}>
          <Typography
            variant="h3"
            sx={{ textTransform: 'uppercase', alignSelf: 'center' }}
          >
            My Cart
          </Typography>
          <Box
            sx={{
              alignSelf: 'center',
              textAlign: 'center',
            }}
          >
            {context.cart.length > 0 ? (
              <>
                <List>
                  {context.cart.map(item => (
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
                            width={300}
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
                        <IconButton
                          sx={{ height: '100%' }}
                          onClick={context.deleteProductFromCart.bind(
                            this,
                            item.id,
                            item.quantity,
                            context.cart.findIndex(itm => item.id === itm.id)
                          )}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Card>
                    </ListItem>
                  ))}
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
              </>
            ) : (
              <Typography variant="body">No products in your cart</Typography>
            )}
          </Box>
        </Box>
      )}
    </ShopContext.Consumer>
  );
};
