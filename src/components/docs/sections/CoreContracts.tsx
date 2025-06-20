import React from 'react';

const CoreContracts: React.FC = () => {
  return (
    <section id="core-contracts">
      <h2 style={{ color: '#14b8a6', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        Core Contracts
      </h2>
      <p style={{ marginBottom: '1rem', color: '#d1d5db' }}>
        The Lendefi protocol consists of five main contract types that work together to provide a complete lending market infrastructure.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '24px',
        margin: '24px 0'
      }}>
        <div style={{
          background: 'rgba(31, 41, 55, 0.5)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          padding: '2rem',
          margin: '2rem 0',
          transition: 'transform 0.3s, box-shadow 0.3s'
        }}>
          <div style={{
            color: '#14b8a6',
            fontSize: '1.5rem',
            marginBottom: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            🏭 LendefiMarketFactory
          </div>
          <p style={{ marginBottom: '1rem', color: '#d1d5db' }}>
            Factory contract for creating isolated lending markets. Manages market deployment, base asset allowlists, and implementation upgrades.
          </p>
        </div>
        
        <div style={{
          background: 'rgba(31, 41, 55, 0.5)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          padding: '2rem',
          margin: '2rem 0',
          transition: 'transform 0.3s, box-shadow 0.3s'
        }}>
          <div style={{
            color: '#14b8a6',
            fontSize: '1.5rem',
            marginBottom: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            ⚡ LendefiCore
          </div>
          <p style={{ marginBottom: '1rem', color: '#d1d5db' }}>
            Core lending protocol handling positions, collateral management, borrowing, repayment, and liquidations.
          </p>
        </div>
        
        <div style={{
          background: 'rgba(31, 41, 55, 0.5)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          padding: '2rem',
          margin: '2rem 0',
          transition: 'transform 0.3s, box-shadow 0.3s'
        }}>
          <div style={{
            color: '#14b8a6',
            fontSize: '1.5rem',
            marginBottom: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            🏦 LendefiMarketVault
          </div>
          <p style={{ marginBottom: '1rem', color: '#d1d5db' }}>
            ERC-4626 compliant vault for base asset tokenization, liquidity management, and flash loans.
          </p>
        </div>
        
        <div style={{
          background: 'rgba(31, 41, 55, 0.5)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          padding: '2rem',
          margin: '2rem 0',
          transition: 'transform 0.3s, box-shadow 0.3s'
        }}>
          <div style={{
            color: '#14b8a6',
            fontSize: '1.5rem',
            marginBottom: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            📊 LendefiAssets
          </div>
          <p style={{ marginBottom: '1rem', color: '#d1d5db' }}>
            Asset configuration, oracle management, and collateral tier system for risk assessment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreContracts;