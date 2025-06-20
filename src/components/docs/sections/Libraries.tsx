import React from 'react';

const Libraries: React.FC = () => {
  return (
    <section id="libraries">
      <h2 style={{ color: '#14b8a6', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        Libraries
      </h2>
      <p style={{ marginBottom: '1rem', color: '#d1d5db' }}>
        The protocol includes several utility libraries for common operations:
      </p>

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
        }}>{`// LendefiConstants - Protocol constants
library LendefiConstants {
    uint256 public constant RATE_PRECISION = 1e6;
    uint256 public constant PRICE_PRECISION = 1e6;
    uint256 public constant MAX_COLLATERAL_ASSETS = 20;
    uint256 public constant LIQUIDATION_THRESHOLD = 1e6;
}

// LendefiRates - Interest rate calculations
library LendefiRates {
    function calculateInterestRate(
        uint256 utilization,
        uint256 baseRate,
        uint256 jumpRate,
        uint256 kink
    ) external pure returns (uint256);
}`}</code></pre>
      </div>
    </section>
  );
};

export default Libraries;