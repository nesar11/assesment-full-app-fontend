import React from 'react';
import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
    </React.Fragment>
  );
}

export default Layout;
