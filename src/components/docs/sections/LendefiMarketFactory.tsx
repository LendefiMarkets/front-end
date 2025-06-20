import React from 'react';

const LendefiMarketFactory: React.FC = () => {
  return (
    <section id="factory">
      <h2 style={{ color: '#14b8a6', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        LendefiMarketFactory
      </h2>
      
      <div style={{
        borderRadius: '8px',
        padding: '16px',
        margin: '1rem 0',
        background: 'rgba(59, 130, 246, 0.1)',
        border: '1px solid rgba(59, 130, 246, 0.3)'
      }}>
        <strong>Purpose:</strong> Factory contract for creating and managing complete lending markets with multi-tenant support. Each market owner can deploy isolated markets for approved base assets.
      </div>

      <h3 style={{ color: '#0ea5e9', margin: '2rem 0 1rem 0' }}>Key Functions</h3>
      
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
        }}>{`// Create a new lending market
function createMarket(
    address baseAsset,
    string memory name,
    string memory symbol
) external returns (Market memory market);

// Get market information
function getMarketInfo(
    address owner,
    address baseAsset
) external view returns (Market memory);

// Check if base asset is allowed
function isBaseAssetAllowed(address asset) external view returns (bool);

// Get all active markets
function getAllActiveMarkets() external view returns (Market[] memory);`}</code></pre>
      </div>

      <h3 style={{ color: '#0ea5e9', margin: '2rem 0 1rem 0' }}>Access Control Roles</h3>
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
          <h5>Administrative Roles</h5>
          <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '1rem', color: '#d1d5db' }}><strong>DEFAULT_ADMIN_ROLE:</strong> Timelock contract</li>
            <li style={{ marginBottom: '1rem', color: '#d1d5db' }}><strong>MANAGER_ROLE:</strong> Asset allowlist management</li>
            <li style={{ marginBottom: '1rem', color: '#d1d5db' }}><strong>UPGRADER_ROLE:</strong> Contract upgrades</li>
          </ul>
        </div>
        
        <div style={{
          borderRadius: '8px',
          padding: '16px',
          margin: '1rem 0',
          background: 'rgba(139, 92, 246, 0.1)',
          border: '1px solid rgba(139, 92, 246, 0.3)'
        }}>
          <h5>Operational Roles</h5>
          <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '1rem', color: '#d1d5db' }}><strong>MARKET_OWNER_ROLE:</strong> Market creation</li>
            <li style={{ marginBottom: '1rem', color: '#d1d5db' }}><strong>PAUSER_ROLE:</strong> Emergency pause</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LendefiMarketFactory;