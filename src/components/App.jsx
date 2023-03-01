import Electronics from 'pages/Electronics/Electronics';
import { Homepage } from 'pages/homepage/Homepage';
import { Login } from 'pages/login/Login';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />

          <Route path="/login" element={<Login />} />

          <Route path="/electronics" element={<Electronics />} />
          {/* <Route path="/jewelery" element={<Jewelery />} /> */}
          {/* <Route path="/men" element={<Men />} /> */}
          {/* <Route path="/she" element={<She />} /> */}
        </Route>
      </Routes>
    </>
  );
};
