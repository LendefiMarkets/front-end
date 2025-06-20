import React from 'react';

const LendefiMarketVault: React.FC = () => {
  return (
    <section id="vault">
      <h2 style={{ color: '#14b8a6', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        LendefiMarketVault
      </h2>
      
      <div style={{
        borderRadius: '8px',
        padding: '16px',
        margin: '1rem 0',
        background: 'rgba(59, 130, 246, 0.1)',
        border: '1px solid rgba(59, 130, 246, 0.3)'
      }}>
        <strong>Purpose:</strong> ERC-4626 compliant vault for base asset tokenization and liquidity management. Provides flash loans and handles yield distribution.
      </div>

      <h3 style={{ color: '#0ea5e9', margin: '2rem 0 1rem 0' }}>ERC-4626 Standard Functions</h3>
      <div style={{
        background: '#1f2937',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '8px',
        padding: '1.5rem',
        margin: '1rem 0',
        overflowX: 'auto'
      }}>
        <pre><code style={{
          color: '#e5e7eb',
          fontFamily: 'Monaco, Menlo, monospace',
          fontSize: '0.875rem'
        }}>{`// Deposit assets for shares
function deposit(uint256 assets, address receiver) external returns (uint256 shares);

// Withdraw assets by burning shares
function withdraw(
    uint256 assets,
    address receiver,
    address owner
) external returns (uint256 shares);

// Redeem shares for assets
function redeem(
    uint256 shares,
    address receiver,
    address owner
) external returns (uint256 assets);`}</code></pre>
      </div>
    </section>
  );
};

export default LendefiMarketVault;