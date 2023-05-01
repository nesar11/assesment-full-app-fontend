import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import User from './pages/User';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Layout from './components/Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home />} />
      <Route path="Users" element={<User />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
