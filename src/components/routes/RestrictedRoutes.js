import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { user } = useAuth();
  return user ? <Navigate to={redirectTo} /> : Component;
};

export const PrivatLogOut = ({ component: Component, redirectTo }) => {
  const { user } = useAuth();
  return user ? Component : <Navigate to={redirectTo} />;
};
