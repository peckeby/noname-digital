import {
  ELECTRONICS,
  LOG_IN,
  SIGN_OUT,
  SIGN_UP,
} from 'components/routes/routes';
import GlobalState from 'context/GlobalState';
import Electronics from 'pages/Electronics/Electronics';
import { Homepage } from 'pages/homepage/Homepage';
import { Login } from 'pages/login/Login';
import { Register } from 'pages/register/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { SignOut } from '../pages/SignOut/SignOut';
import { PrivateRoute, PrivatLogOut } from './routes/RestrictedRoutes';

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
              <Route
                path={SIGN_OUT}
                element={
                  <PrivatLogOut component={<SignOut />} redirectTo={LOG_IN} />
                }
              />
              {/* <Route path="/men" element={<Men />} /> */}
              {/* <Route path="/she" element={<Woman />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalState>
    </>
  );
};
