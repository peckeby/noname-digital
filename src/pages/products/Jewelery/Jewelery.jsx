import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShopContext from 'context/ShopContext';
import { Component } from 'react';
import s from '../ProductStyles.module.scss';
import ProductCards from '../ProductCards';

class Jewelery extends Component {
  render() {
    return (
      <ShopContext.Consumer>
        {context => (
          <ul className={s.productList}>
            {context.products
              .filter(product => product.category === 'jewelery')
              .map(product => {
                return <ProductCards product={product} />;
              })}
          </ul>
        )}
      </ShopContext.Consumer>
    );
  }
}
export default Jewelery;
