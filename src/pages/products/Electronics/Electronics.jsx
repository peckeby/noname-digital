import ShopContext from 'context/ShopContext';
import { Component } from 'react';
import ProductCards from '../ProductCards';
import s from '../ProductStyles.module.scss';

class Electronics extends Component {
  render() {
    return (
      <ShopContext.Consumer>
        {context => (
          <ul className={s.productList}>
            {context.products
              .filter(product => product.category === 'electronics')
              .map(product => {
                return <ProductCards product={product} />;
              })}
          </ul>
        )}
      </ShopContext.Consumer>
    );
  }
}
export default Electronics;
