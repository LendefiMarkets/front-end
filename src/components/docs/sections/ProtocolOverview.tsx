import React from 'react';

const ProtocolOverview: React.FC = () => {
  return (
    <section id="overview">
      <h2 style={{ color: '#14b8a6', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        Protocol Overview
      </h2>
      <p style={{ marginBottom: '1rem', color: '#d1d5db' }}>
        Lendefi Markets is a composable multi-tenant lending protocol that enables market owners to create isolated lending markets for any base asset. The protocol uses a modular architecture with upgradeable contracts and comprehensive access controls.
      </p>
      
      <div style={{
        background: 'rgba(20, 184, 166, 0.1)',
        borderLeft: '4px solid #14b8a6',
        padding: '1rem',
        margin: '1rem 0',
        borderRadius: '0 6px 6px 0'
      }}>
        <strong>Key Architecture Features:</strong>
        <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '1rem', color: '#d1d5db' }}><strong>Multi-Tenant:</strong> Each market owner deploys isolated markets</li>
          <li style={{ marginBottom: '1rem', color: '#d1d5db' }}><strong>Upgradeable:</strong> UUPS proxy pattern with timelock governance</li>
          <li style={{ marginBottom: '1rem', color: '#d1d5db' }}><strong>Modular:</strong> Separate contracts for different functionalities</li>
          <li style={{ marginBottom: '1rem', color: '#d1d5db' }}><strong>ERC-4626 Compliant:</strong> Standard vault interfaces for DeFi integration</li>
          <li style={{ marginBottom: '1rem', color: '#d1d5db' }}><strong>MEV Protected:</strong> Built-in slippage and same-block protections</li>
        </ul>
      </div>
    </section>
  );
};

export default ProtocolOverview;