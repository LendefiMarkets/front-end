import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLogo: React.FC = () => (
  <Link to="/" className="logo" style={{ textDecoration: 'none', cursor: 'pointer' }}>
    <img src="/assets/images/navbar-logo.png" alt="Lendefi Markets" style={{ height: '50px', width: 'auto' }} />
  </Link>
);

export default NavbarLogo;
