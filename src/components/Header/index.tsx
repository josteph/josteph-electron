import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="navbar">
      <nav className="nav-wrapper">
        <div className="nav-logo">
          <Link to="/">Josteph</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
