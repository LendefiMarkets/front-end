import React from 'react';

const Interfaces: React.FC = () => {
  return (
    <section id="interfaces">
      <h2 style={{ color: '#14b8a6', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        Interfaces
      </h2>
      <p style={{ marginBottom: '1rem', color: '#d1d5db' }}>
        All core contracts implement comprehensive interfaces for integration and testing. Key interfaces include:
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '24px',
        margin: '24px 0'
      }}>
        <div style={{
          borderRadius: '8px',
          padding: '16px',
          margin: '1rem 0',
          background: 'rgba(16, 185, 129, 0.1)',
          border: '1px solid rgba(16, 185, 129, 0.3)'
        }}>
          <h5>Core Interfaces</h5>
          <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '1rem', color: '#d1d5db' }}><code>ILendefiMarketFactory</code></li>
            <li style={{ marginBottom: '1rem', color: '#d1d5db' }}><code>ILendefiCore</code></li>
            <li style={{ marginBottom: '1rem', color: '#d1d5db' }}><code>ILendefiMarketVault</code></li>
            <li style={{ marginBottom: '1rem', color: '#d1d5db' }}><code>ILendefiAssets</code></li>
          </ul>
        </div>
        
        <div style={{
          borderRadius: '8px',
          padding: '16px',
          margin: '1rem 0',
          background: 'rgba(59, 130, 246, 0.1)',
          border: '1px solid rgba(59, 130, 246, 0.3)'
        }}>
          <h5>Standard Interfaces</h5>
          <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '1rem', color: '#d1d5db' }}><code>IERC4626</code> - Vault standard</li>
            <li style={{ marginBottom: '1rem', color: '#d1d5db' }}><code>IERC3156</code> - Flash loan standard</li>
            <li style={{ marginBottom: '1rem', color: '#d1d5db' }}><code>IAccessControl</code> - Role management</li>
            <li style={{ marginBottom: '1rem', color: '#d1d5db' }}><code>IERC165</code> - Interface detection</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Interfaces;