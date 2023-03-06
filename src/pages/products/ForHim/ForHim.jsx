import ShopContext from 'context/ShopContext';
import s from '../ProductStyles.module.scss';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function ForHim() {
  const navigate = useNavigate();

  return (
    <ShopContext.Consumer>
      {context => (
        <ul className={s.productList}>
          {context.products
            .filter(product => product.category === "men's clothing")
            .map(product => {
              return (
                <Card sx={{ width: 400 }} key={product.id}>
                  <CardMedia
                    component="img"
                    alt={product.name}
                    image={product.image}
                    sx={{ width: 400, objectFit: 'contain', height: 200 }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="p">
                      {product.price}$
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={context.addProductToCart.bind(this, product)}
                      disabled={product.stock === 0}
                    >
                      Add to Cart
                    </Button>
                    <Button
                      size="small"
                      onClick={() => {
                        navigate(`/men/${product.id}`);
                      }}
                    >
                      More Info
                    </Button>
                  </CardActions>
                </Card>
              );
            })}
        </ul>
      )}
    </ShopContext.Consumer>
  );
}
