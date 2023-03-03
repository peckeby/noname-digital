import ShopContext from 'context/ShopContext';
import { Component } from 'react';
import s from '../ProductStyles.module.scss';
import ProductCards from '../ProductCards';

class ForHim extends Component {
  render() {
    return (
      <ShopContext.Consumer>
        {context => (
          <ul className={s.productList}>
            {context.products
              .filter(product => product.category === "men's clothing")
              .map(product => {
                return <ProductCards product={product} />;
              })}
          </ul>
        )}
      </ShopContext.Consumer>
    );
  }
}
export default ForHim;
