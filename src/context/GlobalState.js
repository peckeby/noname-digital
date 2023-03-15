import React, { Component } from 'react';
import {
  db,
  auth,
  updateProducts,
  createUser,
  signInUser,
  signOutUser,
  getProducts,
} from '../firebase/index';
import ShopContext from './ShopContext';

class GlobalState extends Component {
  state = {
    products: [],
    cart: [],
  };

  componentDidMount() {
    try {
      getProducts(db)
        .then(retrievedProducts =>
          this.setState({ products: retrievedProducts })
        )
        .catch(error => console.log(error));

      this.updateUserStatus();
      if (localStorage.getItem('cart')) {
        this.setState({ cart: JSON.parse(localStorage.getItem('cart')) });
      }
    } catch (error) {}
  }

  addProductToCart = product => {
    let newCart = [];
    let updatedProducts = [];

    const indexProd = this.state.products.findIndex(prod => {
      return prod.id === product.id;
    });

    if (this.state.products[indexProd].stock > 0) {
      const indexCart = this.state.cart.findIndex(item => {
        return item.id === product.id;
      });
      console.log(indexCart);

      if (indexCart === -1 && this.state.cart.length !== 0) {
        const cartNew = this.state.cart.concat([
          {
            id: product.id,
            name: product.name,
            quantity: 1,
            totalValue: product.price,
            image: product.image,
          },
        ]);

        this.setState({
          cart: cartNew,
        });

        localStorage.setItem(
          'cart',
          JSON.stringify(
            this.state.cart.concat([
              {
                id: product.id,
                name: product.name,
                quantity: 1,
                totalValue: product.price,
                image: product.image,
              },
            ])
          )
        );
      } else if (indexCart === -1 && this.state.cart.length === 0) {
        const cartNew = this.state.cart.concat([
          {
            id: product.id,
            name: product.name,
            quantity: 1,
            totalValue: product.price,
            image: product.image,
          },
        ]);

        this.setState({
          cart: cartNew,
        });

        localStorage.setItem(
          'cart',
          JSON.stringify([
            {
              id: product.id,
              name: product.name,
              quantity: 1,
              totalValue: product.price,
              image: product.image,
            },
          ])
        );
      } else {
        newCart = this.state.cart;

        newCart[indexCart].quantity = newCart[indexCart].quantity + 1;
        newCart[indexCart].totalValue =
          newCart[indexCart].totalValue + product.price;

        this.setState({
          cart: newCart,
        });

        localStorage.setItem('cart', JSON.stringify(this.state.cart));
      }

      updatedProducts = this.state.products;

      updatedProducts[indexProd].stock--;

      this.setState({ products: updatedProducts });
    }
  };

  deleteProductFromCart = (id, quantity, idx) => {
    const newCart = this.state.cart;

    if (quantity === 1 && JSON.parse(localStorage.getItem('cart')).length > 1) {
      this.setState({ cart: newCart.filter(item => item.id !== id) });
      localStorage.setItem('cart', JSON.stringify(this.state.cart));
    } else if (
      quantity === 1 &&
      JSON.parse(localStorage.getItem('cart')).length === 1
    ) {
      this.setState({ cart: [] });
      localStorage.removeItem('cart');
    } else {
      console.log(idx);
      newCart[idx].quantity = quantity - 1;
      this.setState({ cart: newCart });
      localStorage.setItem('cart', JSON.stringify(this.state.cart));
    }
    const updatedProducts = this.state.products;
    updatedProducts[id].stock = updatedProducts[id].stock + parseInt(quantity);

    this.setState({ products: updatedProducts });
  };

  buyCart = () => {
    const cart = this.state.cart;
    const products = this.state.products;

    if (cart.length !== 0) {
      updateProducts(db, products)
        .then(() => {
          console.log('Successful items update');
          this.setState({ cart: [] });
          alert('Cart Ordered!!!');
        })
        .catch(error => console.error(`Any item was not updated`, error));
    }
  };

  register = (email, password) => {
    return createUser(auth, email, password);
  };

  logIn = (email, password) => {
    return signInUser(auth, email, password);
  };

  logOut = () => {
    return signOutUser(auth);
  };

  updateUserStatus = (user = auth.currentUser) => {
    if (user != null)
      user.providerData.forEach(profile => {
        this.setState({ user: { logged: true, name: profile.email } });
      });
    else this.setState({ user: { logged: false } });
  };

  render() {
    return (
      <>
        <ShopContext.Provider
          value={{
            products: this.state.products,
            cart: this.state.cart,
            user: this.state.user,
            addProductToCart: this.addProductToCart,
            deleteProductFromCart: this.deleteProductFromCart,
            buyCart: this.buyCart,
            register: this.register,
            logIn: this.logIn,
            logOut: this.logOut,
            updateUserStatus: this.updateUserStatus,
          }}
        >
          {this.props.children}
        </ShopContext.Provider>
      </>
    );
  }
}

export default GlobalState;
