import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ 
      background: 'rgba(17, 24, 39, 0.9)',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '2rem 0',
      marginTop: '4rem'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', color: '#9ca3af' }}>
          <p>
            © 2025 Lendefi Labs LLC. All rights reserved. | 
            <a href="/contact" style={{ color: '#14b8a6', textDecoration: 'none' }}> Contact</a> | 
            <a href="https://github.com/LendefiMarkets" style={{ color: '#14b8a6', textDecoration: 'none' }}> GitHub</a> | 
            <a href="https://x.com/LendefiMarkets" style={{ color: '#14b8a6', textDecoration: 'none' }}> X</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;