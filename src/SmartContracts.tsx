import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const SmartContracts: React.FC = () => {
  const contractCardStyle = {
    background: 'rgba(17, 24, 39, 0.5)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    padding: '2rem',
    marginBottom: '2rem'
  };

  const addressStyle = {
    background: 'rgba(17, 24, 39, 0.8)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    padding: '1rem',
    fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace',
    fontSize: '0.9rem',
    color: '#14b8a6',
    marginTop: '1rem',
    wordBreak: 'break-all' as const
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#111827', color: '#e5e7eb' }}>
      <Navbar />
      
      <main style={{ padding: '120px 0 64px 0' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #14b8a6, #0ea5e9)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              marginBottom: '1rem'
            }}>
              Smart Contracts
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: '#9ca3af',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Core smart contracts powering the Lendefi Markets protocol. Each contract serves a specific purpose in the composable lending ecosystem.
            </p>
          </div>

          {/* LendefiMarketFactory */}
          <div style={contractCardStyle}>
            <h2 style={{
              color: '#14b8a6',
              marginBottom: '1rem',
              fontSize: '1.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              🏭 LendefiMarketFactory
            </h2>
            <p style={{ color: '#d1d5db', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Factory contract for creating isolated lending markets. Market owners deploy their own 
              LendefiCore + ERC4626 vault infrastructure for different base assets, providing complete 
              asset and risk isolation while leveraging shared protocol features.
            </p>
            <div style={{
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1rem'
            }}>
              <strong style={{ color: '#3b82f6' }}>Key Features:</strong>
              <ul style={{ margin: '0.5rem 0 0 1rem', color: '#d1d5db' }}>
                <li>Multi-tenant market creation with complete isolation</li>
                <li>Base asset allowlist management for security</li>
                <li>Gas-efficient deployment using OpenZeppelin clone pattern</li>
                <li>Comprehensive market discovery and analytics functions</li>
              </ul>
            </div>
            <div style={addressStyle}>
              <strong>Sepolia Deployment:</strong><br />
              <strong>Proxy:</strong> 0x08F276a9595160044c2Fb136f6BA8a0520230955{' '}
              <a href="https://sepolia.etherscan.io/address/0x08F276a9595160044c2Fb136f6BA8a0520230955" 
                 target="_blank" rel="noopener noreferrer" 
                 style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '0.8rem' }}>
                📋 View on Etherscan
              </a><br />
              <strong>Implementation:</strong> 0x9fecB33A97DeeD0B86331537517090888693982B{' '}
              <a href="https://sepolia.etherscan.io/address/0x9fecB33A97DeeD0B86331537517090888693982B" 
                 target="_blank" rel="noopener noreferrer" 
                 style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '0.8rem' }}>
                📋 View on Etherscan
              </a>
            </div>
          </div>

          {/* LendefiCore */}
          <div style={contractCardStyle}>
            <h2 style={{
              color: '#14b8a6',
              marginBottom: '1rem',
              fontSize: '1.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              🏗️ LendefiCore
            </h2>
            <p style={{ color: '#d1d5db', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Core lending protocol used by borrowers to borrow base assets against collateral. 
              Manages individual user positions, calculates health factors, handles liquidations, 
              and implements dynamic interest rate models based on utilization.
            </p>
            <div style={{
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1rem'
            }}>
              <strong style={{ color: '#3b82f6' }}>Key Features:</strong>
              <ul style={{ margin: '0.5rem 0 0 1rem', color: '#d1d5db' }}>
                <li>Multi-collateral borrowing with isolated position tracking</li>
                <li>Dynamic interest rates based on market utilization</li>
                <li>Automated liquidation system with liquidator incentives</li>
                <li>Health factor monitoring and risk management</li>
              </ul>
            </div>
            <div style={addressStyle}>
              <strong>Sepolia Deployment:</strong><br />
              0xDe70388f3267718caEB9a66623a3176C05b38236{' '}
              <a href="https://sepolia.etherscan.io/address/0xDe70388f3267718caEB9a66623a3176C05b38236" 
                 target="_blank" rel="noopener noreferrer" 
                 style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '0.8rem' }}>
                📋 View on Etherscan
              </a>
            </div>
          </div>

          {/* LendefiMarketVault */}
          <div style={contractCardStyle}>
            <h2 style={{
              color: '#14b8a6',
              marginBottom: '1rem',
              fontSize: '1.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              🏦 LendefiMarketVault
            </h2>
            <p style={{ color: '#d1d5db', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
              ERC-4626 compliant vault used by lenders to supply base assets and earn yield. 
              Tokenizes liquidity positions as vault shares, implements flash loans, automated 
              Proof of Reserves updates, and distributes governance token rewards to suppliers.
            </p>
            <div style={{
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1rem'
            }}>
              <strong style={{ color: '#3b82f6' }}>Key Features:</strong>
              <ul style={{ margin: '0.5rem 0 0 1rem', color: '#d1d5db' }}>
                <li>ERC-4626 standard for tokenized vault shares</li>
                <li>Flash loan functionality with configurable fees</li>
                <li>Chainlink Automation for transparent reserve tracking</li>
                <li>Time-based governance token rewards for liquidity providers</li>
              </ul>
            </div>
            <div style={addressStyle}>
              <strong>Sepolia Deployment:</strong><br />
              0x28deDb371F413fBAFba75006efD480773351576D{' '}
              <a href="https://sepolia.etherscan.io/address/0x28deDb371F413fBAFba75006efD480773351576D" 
                 target="_blank" rel="noopener noreferrer" 
                 style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '0.8rem' }}>
                📋 View on Etherscan
              </a>
            </div>
          </div>

          {/* LendefiAssets */}
          <div style={contractCardStyle}>
            <h2 style={{
              color: '#14b8a6',
              marginBottom: '1rem',
              fontSize: '1.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              ⚙️ LendefiAssets
            </h2>
            <p style={{ color: '#d1d5db', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Asset configuration contract configured by market owners to manage oracles, collateral 
              tiers, and custom pricing. Integrates Chainlink and Uniswap V3 oracles with circuit 
              breaker protection, manages risk parameters, and provides price feeds to the protocol.
            </p>
            <div style={{
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1rem'
            }}>
              <strong style={{ color: '#3b82f6' }}>Key Features:</strong>
              <ul style={{ margin: '0.5rem 0 0 1rem', color: '#d1d5db' }}>
                <li>Multi-oracle system with Chainlink and Uniswap V3 TWAP</li>
                <li>Circuit breaker protection against price manipulation</li>
                <li>Collateral tier management with custom risk parameters</li>
                <li>Asset validation and capacity management</li>
              </ul>
            </div>
            <div style={addressStyle}>
              <strong>Sepolia Deployment:</strong><br />
              0xeE6B05978C7a2D999fa5Cf23C575a394280F460f{' '}
              <a href="https://sepolia.etherscan.io/address/0xeE6B05978C7a2D999fa5Cf23C575a394280F460f" 
                 target="_blank" rel="noopener noreferrer" 
                 style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '0.8rem' }}>
                📋 View on Etherscan
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div style={{
            background: 'rgba(34, 197, 94, 0.1)',
            border: '1px solid rgba(34, 197, 94, 0.3)',
            borderRadius: '12px',
            padding: '2rem',
            marginTop: '3rem',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#22c55e', marginBottom: '1rem', fontSize: '1.5rem' }}>
              🔗 Protocol Architecture
            </h3>
            <p style={{ color: '#d1d5db', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              These contracts work together to create a composable lending ecosystem. The Factory deploys 
              isolated markets, Core handles borrowing logic, Vault manages liquidity, and Assets configures 
              pricing and risk parameters. Each market operates independently while sharing governance and security.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              marginTop: '2rem'
            }}>
              <div style={{
                background: 'rgba(17, 24, 39, 0.5)',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid rgba(34, 197, 94, 0.3)'
              }}>
                <strong style={{ color: '#22c55e' }}>Network:</strong><br />
                <span style={{ color: '#d1d5db' }}>Sepolia Testnet</span>
              </div>
              <div style={{
                background: 'rgba(17, 24, 39, 0.5)',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid rgba(34, 197, 94, 0.3)'
              }}>
                <strong style={{ color: '#22c55e' }}>Standard:</strong><br />
                <span style={{ color: '#d1d5db' }}>ERC-4626, ERC-20</span>
              </div>
              <div style={{
                background: 'rgba(17, 24, 39, 0.5)',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid rgba(34, 197, 94, 0.3)'
              }}>
                <strong style={{ color: '#22c55e' }}>Upgradeable:</strong><br />
                <span style={{ color: '#d1d5db' }}>UUPS Proxy Pattern</span>
              </div>
              <div style={{
                background: 'rgba(17, 24, 39, 0.5)',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid rgba(34, 197, 94, 0.3)'
              }}>
                <strong style={{ color: '#22c55e' }}>Audited:</strong><br />
                <span style={{ color: '#d1d5db' }}>Security Verified</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SmartContracts;