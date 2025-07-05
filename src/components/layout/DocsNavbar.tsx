import React from 'react';
import { Link } from 'react-router-dom';

const DocsNavbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="logo" style={{ textDecoration: 'none', cursor: 'pointer' }}>
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
          </Link>
          
          {/* Desktop Navigation */}
          <div className="nav-links">
            <Link to="/docs" className="btn btn-outline">← Back to Docs</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DocsNavbar;