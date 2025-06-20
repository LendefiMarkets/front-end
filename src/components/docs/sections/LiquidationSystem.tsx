import React from 'react';

const LiquidationSystem: React.FC = () => {
  return (
    <section id="liquidator">
      <h2 style={{ color: '#14b8a6', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        Liquidation System
      </h2>
      
      <div style={{
        borderRadius: '8px',
        padding: '16px',
        margin: '1rem 0',
        background: 'rgba(59, 130, 246, 0.1)',
        border: '1px solid rgba(59, 130, 246, 0.3)'
      }}>
        <strong>Purpose:</strong> Example liquidation contract utilizing flash loans for capital-efficient liquidations. Integrates with Balancer for flash loans and Uniswap for asset swapping.
      </div>

      <div style={{
        background: 'rgba(245, 158, 11, 0.1)',
        borderLeft: '4px solid #f59e0b',
        padding: '1rem',
        margin: '1rem 0',
        borderRadius: '0 6px 6px 0'
      }}>
        <strong>📋 Note:</strong> This is a reference implementation. Liquidators can build their own strategies using any capital source and DEX aggregator.
      </div>
    </section>
  );
};

export default LiquidationSystem;