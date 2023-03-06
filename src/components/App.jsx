import {
  ELECTRONICS,
  LOG_IN,
  SIGN_OUT,
  MEN,
  SIGN_UP,
  WOMAN,
  JEWELERY,
  CART,
  PROFILE,
} from 'components/routes/routes';
import GlobalState from 'context/GlobalState';
import Electronics from 'pages/products/Electronics/Electronics';
import { Homepage } from 'pages/homepage/Homepage';
import { Login } from 'pages/login/Login';
import { Register } from 'pages/register/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { SignOut } from '../pages/SignOut/SignOut';
import { PrivateRoute, PrivatLogOut } from './routes/RestrictedRoutes';
import ForHim from 'pages/products/ForHim/ForHim';
import ForHer from 'pages/products/ForHer/ForHer';
import Jewelery from 'pages/products/Jewelery/Jewelery';
import { Cart } from 'pages/cart/Cart';
import Account from 'pages/account/Account';
import ProductCard from 'pages/products/productCard/ProductCard';

export const App = () => {
  return (
    <>
      <GlobalState>
        <BrowserRouter basename="noname-digital">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Homepage />} />
              <Route
                path={LOG_IN}
                element={<PrivateRoute redirectTo="/" component={<Login />} />}
              />
              <Route
                path={SIGN_UP}
                element={
                  <PrivateRoute redirectTo="/" component={<Register />} />
                }
              />
              <Route path={ELECTRONICS} element={<Electronics />} />
              <Route path="/electronics/:idx" element={<ProductCard />} />

              <Route path={MEN} element={<ForHim />} />
              <Route path="/men/:idx" element={<ProductCard />} />

              <Route path={WOMAN} element={<ForHer />} />
              <Route path="/woman/:idx" element={<ProductCard />} />
              <Route path={JEWELERY} element={<Jewelery />} />
              <Route path="/jewelery/:idx" element={<ProductCard />} />
              <Route
                path={PROFILE}
                element={
                  <PrivatLogOut redirectTo={LOG_IN} component={<Account />} />
                }
              />
              <Route
                path={CART}
                element={
                  <PrivatLogOut redirectTo={LOG_IN} component={<Cart />} />
                }
              />
              <Route
                path={SIGN_OUT}
                element={
                  <PrivatLogOut component={<SignOut />} redirectTo={LOG_IN} />
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalState>
    </>
  );
};
