import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Diet Point</div>
      <nav className="nav-menu">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/booking">Booking</Link>
      </nav>
    </header>
  );
};

export default Header;