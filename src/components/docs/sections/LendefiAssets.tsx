import React from 'react';

const LendefiAssets: React.FC = () => {
  return (
    <section id="assets">
      <h2 style={{ color: '#14b8a6', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        LendefiAssets
      </h2>
      
      <div style={{
        borderRadius: '8px',
        padding: '16px',
        margin: '1rem 0',
        background: 'rgba(59, 130, 246, 0.1)',
        border: '1px solid rgba(59, 130, 246, 0.3)'
      }}>
        <strong>Purpose:</strong> Asset configuration, oracle management, and collateral tier system. Handles price feeds and risk parameters for all supported assets.
      </div>

      <h3 style={{ color: '#0ea5e9', margin: '2rem 0 1rem 0' }}>Collateral Tier System</h3>
      <div style={{
        borderRadius: '8px',
        padding: '16px',
        margin: '1rem 0',
        background: 'rgba(16, 185, 129, 0.1)',
        border: '1px solid rgba(16, 185, 129, 0.3)'
      }}>
        <strong>Collateral Tiers:</strong>
        <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '1rem', color: '#d1d5db' }}><strong>STABLE (0):</strong> Stablecoins - 5% jump rate, 1% liquidation fee</li>
          <li style={{ marginBottom: '1rem', color: '#d1d5db' }}><strong>CROSS_A (1):</strong> Blue-chip assets - 8% jump rate, 2% liquidation fee</li>
          <li style={{ marginBottom: '1rem', color: '#d1d5db' }}><strong>CROSS_B (2):</strong> Established altcoins - 12% jump rate, 3% liquidation fee</li>
          <li style={{ marginBottom: '1rem', color: '#d1d5db' }}><strong>ISOLATED (3):</strong> High-risk assets - 15% jump rate, 4% liquidation fee</li>
        </ul>
      </div>
    </section>
  );
};

export default LendefiAssets;