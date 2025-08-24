import React from 'react';
import { Link } from 'react-router-dom';
import NavbarLogo from './NavbarLogo';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <NavbarLogo />
          
          {/* Desktop Navigation */}
          <div className="nav-links">
            <Link to="/" className="btn btn-outline">← Back to Main</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;