import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header>
      <div className="header-nav">
        <header>
          <nav className="nav">
            <div> Full CRUD app</div>

            <ul className="nav-items">
              <li>
                <Link to={`/home`}>Home</Link>
              </li>
              <li>
                <Link to={`/products`}>Products</Link>
              </li>

              <li>
                <Link to={`/users`}>Users</Link>
              </li>
              <li>
                <Link to={`/login`}>Login</Link>
              </li>
              <li>
                <Link to={`/register`}>Register</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </header>
  );
}

export default Navbar;
