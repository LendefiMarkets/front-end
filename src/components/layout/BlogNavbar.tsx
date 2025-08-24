import React from 'react';
import { Link } from 'react-router-dom';
import NavbarLogo from './NavbarLogo';

const BlogNavbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <NavbarLogo />
          
          {/* Back Button - Always Visible */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link 
              to="/blog" 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 0.75rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '6px',
                color: '#d1d5db',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'rgba(20, 184, 166, 0.3)';
                e.currentTarget.style.color = '#14b8a6';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.color = '#d1d5db';
              }}
            >
              <span style={{ fontSize: '1rem' }}>←</span>
              <span>Back</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BlogNavbar;