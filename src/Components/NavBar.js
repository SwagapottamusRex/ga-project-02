import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header>
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              {' '}
              Home
            </Link>
            <Link to="/cheeses" className="navbar-item">
              Cheese Index
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default NavBar;
