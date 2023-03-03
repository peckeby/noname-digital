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
