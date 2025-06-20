import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <a href="/" className="logo" style={{ textDecoration: 'none', cursor: 'pointer' }}>
            <img src="/assets/images/logo.png" alt="Lendefi Markets" style={{ height: '50px', width: 'auto' }} />
            <span style={{ 
              background: 'linear-gradient(135deg, #0ea5e9, #14b8a6)', 
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }}>
              Lendefi Markets
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="nav-links">
            <a href="/" className="btn btn-outline">← Back to Main</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;