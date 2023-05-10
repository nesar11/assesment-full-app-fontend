import React from 'react';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import User from './pages/auth/User';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Layout from './components/Layout';
import UpdateUser from './pages/auth/UpdateUser';
import Product from './pages/products/Product';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home />} />
      <Route path="products" element={<Product />} />
      <Route path="Users" element={<User />} />
      <Route path="Users/update/:id" element={<UpdateUser />} />
      <Route index path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
