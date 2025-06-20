import React from 'react';

const LendefiCore: React.FC = () => {
  return (
    <section id="core">
      <h2 style={{ color: '#14b8a6', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        LendefiCore
      </h2>
      
      <div style={{
        borderRadius: '8px',
        padding: '16px',
        margin: '1rem 0',
        background: 'rgba(59, 130, 246, 0.1)',
        border: '1px solid rgba(59, 130, 246, 0.3)'
      }}>
        <strong>Purpose:</strong> Core lending protocol handling collateral management, borrowing, repayment, and liquidations. Manages individual positions with isolated vault contracts.
      </div>

      <h3 style={{ color: '#0ea5e9', margin: '2rem 0 1rem 0' }}>Position Management</h3>
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
        }}>{`// Create new lending position
function createPosition(
    address collateralAsset,
    bool isIsolated
) external returns (uint256 positionId);

// Supply collateral to position
function supplyCollateral(
    address asset,
    uint256 amount,
    uint256 positionId
) external;

// Borrow against collateral
function borrow(
    uint256 positionId,
    uint256 amount,
    uint256 expectedCreditLimit,
    uint32 maxSlippageBps
) external;`}</code></pre>
      </div>
    </section>
  );
};

export default LendefiCore;