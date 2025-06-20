import React from 'react';

const ApiReferenceHeader: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        <span style={{
          background: 'linear-gradient(135deg, #0ea5e9, #14b8a6)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          API Reference
        </span>
      </h1>
      <p style={{ 
        fontSize: '1.2rem', 
        color: '#9ca3af', 
        maxWidth: '800px', 
        margin: '0 auto' 
      }}>
        Complete reference for the 4 core Lendefi Markets smart contracts: 
        LendefiAssets, LendefiCore, LendefiMarketFactory, and LendefiMarketVault.
      </p>
    </div>
  );
};

export default ApiReferenceHeader;