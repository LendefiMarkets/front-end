import { useState } from 'react';
import Footer from './components/layout/Footer';

function BorrowerGuide() {
  const [activeTab, setActiveTab] = useState('solidity');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#111827', color: '#e5e7eb' }}>
      {/* Navbar - Contact style */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            <a href="/" className="logo" style={{ textDecoration: 'none', cursor: 'pointer' }}>
              <img src="/assets/images/logo.png" alt="Lendefi Markets" style={{ height: '50px', width: 'auto' }} />
              <span style={{ 
                background: 'linear-gradient(135deg, #0ea5e9, #14b8a6)', 
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                Lendefi Markets
              </span>
            </a>
            
            {/* Desktop Navigation */}
            <div className="nav-links">
              <a href="/" className="btn btn-outline">← Back to Main</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ padding: '120px 0 64px 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
              <span style={{
                background: 'linear-gradient(135deg, #0ea5e9, #14b8a6)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Borrower
              </span> Guide
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#9ca3af', maxWidth: '600px', margin: '0 auto' }}>
              Complete guide to borrowing against collateral in Lendefi Markets
            </p>
          </div>

          {/* Docs Content */}
          <div className="docs-content" style={{
            display: 'grid',
            gridTemplateColumns: '250px 1fr',
            gap: '3rem'
          }}>
            {/* Sidebar */}
            <aside className="sidebar" style={{
              background: 'rgba(17, 24, 39, 0.5)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              height: 'fit-content',
              position: 'sticky',
              top: '120px'
            }}>
              <h3 style={{ color: '#14b8a6', marginBottom: '1rem', fontSize: '1.1rem' }}>
                Table of Contents
              </h3>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#overview" style={{ color: '#9ca3af', textDecoration: 'none', padding: '0.5rem', display: 'block', borderRadius: '6px', transition: 'all 0.3s' }}>Overview</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#getting-started" style={{ color: '#9ca3af', textDecoration: 'none', padding: '0.5rem', display: 'block', borderRadius: '6px', transition: 'all 0.3s' }}>Getting Started</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#create-position" style={{ color: '#9ca3af', textDecoration: 'none', padding: '0.5rem', display: 'block', borderRadius: '6px', transition: 'all 0.3s' }}>1. Create Position</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#supply-collateral" style={{ color: '#9ca3af', textDecoration: 'none', padding: '0.5rem', display: 'block', borderRadius: '6px', transition: 'all 0.3s' }}>2. Supply Collateral</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#borrow-funds" style={{ color: '#9ca3af', textDecoration: 'none', padding: '0.5rem', display: 'block', borderRadius: '6px', transition: 'all 0.3s' }}>3. Borrow Funds</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#manage-position" style={{ color: '#9ca3af', textDecoration: 'none', padding: '0.5rem', display: 'block', borderRadius: '6px', transition: 'all 0.3s' }}>4. Manage Position</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#repay-close" style={{ color: '#9ca3af', textDecoration: 'none', padding: '0.5rem', display: 'block', borderRadius: '6px', transition: 'all 0.3s' }}>5. Repay & Close</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#flash-loans" style={{ color: '#9ca3af', textDecoration: 'none', padding: '0.5rem', display: 'block', borderRadius: '6px', transition: 'all 0.3s' }}>Flash Loans</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#collateral-tiers" style={{ color: '#9ca3af', textDecoration: 'none', padding: '0.5rem', display: 'block', borderRadius: '6px', transition: 'all 0.3s' }}>Collateral Tiers</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#liquidation" style={{ color: '#9ca3af', textDecoration: 'none', padding: '0.5rem', display: 'block', borderRadius: '6px', transition: 'all 0.3s' }}>Liquidation</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#mev-protection" style={{ color: '#9ca3af', textDecoration: 'none', padding: '0.5rem', display: 'block', borderRadius: '6px', transition: 'all 0.3s' }}>MEV Protection</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#examples" style={{ color: '#9ca3af', textDecoration: 'none', padding: '0.5rem', display: 'block', borderRadius: '6px', transition: 'all 0.3s' }}>Code Examples</a>
                </li>
              </ul>
            </aside>

            {/* Content */}
            <div className="main-content" style={{
              background: 'rgba(17, 24, 39, 0.5)',
              padding: '3rem',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              minWidth: 0
            }}>
              <section id="overview">
                <h2 style={{ color: '#14b8a6', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  Overview
                </h2>
                <p style={{ marginBottom: '1rem', color: '#d1d5db' }}>
                  As a borrower in Lendefi Markets, you can access liquidity by depositing collateral assets and borrowing base assets from isolated lending markets. Each position is tracked individually, providing better risk management and regulatory compliance.
                </p>
                
                <div style={{
                  background: 'rgba(20, 184, 166, 0.1)',
                  borderLeft: '4px solid #14b8a6',
                  padding: '1rem',
                  margin: '1rem 0',
                  borderRadius: '0 6px 6px 0'
                }}>
                  <strong style={{ color: '#14b8a6' }}>Key Benefits for Borrowers:</strong>
                  <ul style={{ marginTop: '0.5rem', paddingLeft: '1rem' }}>
                    <li>Isolated positions for better risk management</li>
                    <li>Competitive interest rates based on market dynamics</li>
                    <li>MEV protection for all operations</li>
                    <li>No liquidation cascades between positions</li>
                    <li>Flexible collateral management</li>
                  </ul>
                </div>

                <div style={{
                  background: 'linear-gradient(135deg, #10b981, #14b8a6)',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  padding: '1rem',
                  borderRadius: '8px',
                  textAlign: 'center',
                  margin: '1rem 0'
                }}>
                  🎯 Always maintain Health Factor &gt; 1.2 for safety
                </div>

                <div style={{
                  background: 'rgba(59, 130, 246, 0.1)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '8px',
                  padding: '16px',
                  margin: '1rem 0'
                }}>
                  <strong style={{ color: '#3b82f6' }}>How Borrowing Works:</strong>
                  <p style={{ color: '#d1d5db', marginTop: '0.5rem' }}>You create individual positions where you deposit collateral assets and borrow base assets. Each position has its own isolated vault contract, preventing cross-contamination and providing clear regulatory boundaries. Your borrowing capacity depends on the value and risk tier of your collateral.</p>
                </div>
              </section>

              <section id="getting-started" style={{ marginTop: '3rem' }}>
                <h2 style={{ color: '#14b8a6', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  Getting Started
                </h2>
                <p style={{ marginBottom: '1rem', color: '#d1d5db' }}>
                  Borrowing in Lendefi Markets requires understanding position lifecycle, collateral requirements, and risk management.
                </p>

                <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', margin: '24px 0' }}>
                  <div style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    borderRadius: '8px',
                    padding: '16px'
                  }}>
                    <h5 style={{ color: '#10b981', marginBottom: '0.5rem' }}>✅ What You Need</h5>
                    <ul style={{ color: '#d1d5db', paddingLeft: '1rem' }}>
                      <li>Collateral assets (ETH, WBTC, stablecoins, etc.)</li>
                      <li>Web3 wallet (MetaMask, WalletConnect, etc.)</li>
                      <li>ETH for gas fees</li>
                      <li>Understanding of liquidation risks</li>
                    </ul>
                  </div>
                  
                  <div style={{
                    background: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    borderRadius: '8px',
                    padding: '16px'
                  }}>
                    <h5 style={{ color: '#3b82f6', marginBottom: '0.5rem' }}>📊 Market Selection</h5>
                    <ul style={{ color: '#d1d5db', paddingLeft: '1rem' }}>
                      <li>Choose markets with desired base assets</li>
                      <li>Check available collateral types</li>
                      <li>Compare borrowing rates across markets</li>
                      <li>Assess market liquidity and utilization</li>
                    </ul>
                  </div>
                </div>

                <div style={{
                  background: 'rgba(245, 158, 11, 0.1)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  borderRadius: '8px',
                  padding: '16px',
                  margin: '1rem 0'
                }}>
                  <strong style={{ color: '#f59e0b' }}>🧮 Key Calculations:</strong>
                  <ul style={{ color: '#d1d5db', paddingLeft: '1rem', marginTop: '0.5rem' }}>
                    <li><strong>Credit Limit:</strong> Collateral Value × Loan-to-Value Ratio</li>
                    <li><strong>Health Factor:</strong> (Collateral Value × Liquidation Threshold) ÷ Total Debt</li>
                    <li><strong>Available to Borrow:</strong> Credit Limit - Current Debt</li>
                    <li><strong>Liquidation Price:</strong> Price at which Health Factor = 1.0</li>
                  </ul>
                </div>
              </section>

              <section id="create-position" style={{ marginTop: '3rem' }}>
                <h2 style={{ color: '#14b8a6', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  Step 1: Create Position
                </h2>
                <p style={{ marginBottom: '1rem', color: '#d1d5db' }}>
                  Start by creating a new borrowing position for your chosen collateral asset. This deploys an isolated vault contract for your position.
                </p>

                <div style={{
                  background: 'rgba(31, 41, 55, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  margin: '1rem 0',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '20px',
                    background: '#14b8a6',
                    color: '#111827',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '0.875rem'
                  }}>1</div>
                  <div style={{
                    color: '#0ea5e9',
                    fontSize: '1.1rem',
                    marginBottom: '0.5rem',
                    marginTop: '0.5rem'
                  }}>Choose Your Collateral Asset</div>
                  <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
                    Select the asset you want to use as collateral from the available options.
                  </p>
                  
                  <div style={{
                    background: 'rgba(139, 92, 246, 0.1)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    borderRadius: '8px',
                    padding: '16px'
                  }}>
                    <strong style={{ color: '#8b5cf6' }}>Collateral Considerations:</strong>
                    <ul style={{ color: '#d1d5db', paddingLeft: '1rem', marginTop: '0.5rem' }}>
                      <li><strong>Volatility:</strong> More stable assets = higher LTV ratios</li>
                      <li><strong>Liquidity:</strong> Better liquidity = easier liquidation if needed</li>
                      <li><strong>Your Holdings:</strong> Use assets you already own</li>
                      <li><strong>Market Depth:</strong> Ensure sufficient oracle data</li>
                    </ul>
                  </div>
                </div>

                <div style={{
                  background: 'rgba(31, 41, 55, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  margin: '1rem 0',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '20px',
                    background: '#14b8a6',
                    color: '#111827',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '0.875rem'
                  }}>2</div>
                  <div style={{
                    color: '#0ea5e9',
                    fontSize: '1.1rem',
                    marginBottom: '0.5rem',
                    marginTop: '0.5rem'
                  }}>Create the Position</div>
                  <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
                    Call the createPosition function to deploy your isolated position vault.
                  </p>
                  
                  <div className="code-container" style={{
                    background: '#1f2937',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    margin: '1rem 0',
                    overflowX: 'auto'
                  }}>
                    <pre style={{ color: '#e5e7eb', fontFamily: 'Monaco, Menlo, monospace', fontSize: '0.875rem' }}><code>
                      <span style={{ color: '#7c7c7c' }}>// Create a position for WETH collateral</span>{'\n'}
                      <span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>positionId</span> = <span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>createPosition</span>({'\n'}
                      {'    '}<span style={{ color: '#dcdcaa' }}>address</span>(<span style={{ color: '#9cdcfe' }}>weth</span>),    <span style={{ color: '#7c7c7c' }}>// Collateral asset address</span>{'\n'}
                      {'    '}<span style={{ color: '#569cd6' }}>false</span>            <span style={{ color: '#7c7c7c' }}>// isIsolated: false for cross-collateral, true for isolated</span>{'\n'}
                      );{'\n\n'}
                      <span style={{ color: '#7c7c7c' }}>// Position ID is returned for all future operations</span>{'\n'}
                      <span style={{ color: '#7c7c7c' }}>// Position vaults are deployed using minimal proxy pattern for gas efficiency</span>
                    </code></pre>
                  </div>

                  <div style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    borderRadius: '8px',
                    padding: '16px'
                  }}>
                    <strong style={{ color: '#10b981' }}>What Happens During Creation:</strong>
                    <ul style={{ color: '#d1d5db', paddingLeft: '1rem', marginTop: '0.5rem' }}>
                      <li>Unique position ID is assigned</li>
                      <li>Isolated vault contract is deployed</li>
                      <li>Position status set to INACTIVE</li>
                      <li>Ready to receive collateral deposits</li>
                    </ul>
                    <p style={{ color: '#d1d5db', marginTop: '0.5rem' }}>
                      <span style={{
                        display: 'inline-block',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        background: 'rgba(107, 114, 128, 0.2)',
                        color: '#9ca3af'
                      }}>Status: INACTIVE</span> - Position created but no collateral supplied yet
                    </p>
                  </div>
                </div>
              </section>

              <section id="supply-collateral" style={{ marginTop: '3rem' }}>
                <h2 style={{ color: '#14b8a6', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  Step 2: Supply Collateral
                </h2>
                <p style={{ marginBottom: '1rem', color: '#d1d5db' }}>
                  Add collateral to your position to enable borrowing capacity. Collateral is securely stored in your isolated position vault.
                </p>

                <div style={{
                  background: 'rgba(31, 41, 55, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  margin: '1rem 0',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '20px',
                    background: '#14b8a6',
                    color: '#111827',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '0.875rem'
                  }}>1</div>
                  <div style={{
                    color: '#0ea5e9',
                    fontSize: '1.1rem',
                    marginBottom: '0.5rem',
                    marginTop: '0.5rem'
                  }}>Approve and Deposit</div>
                  <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
                    Approve the market contract and supply your collateral assets.
                  </p>
                  
                  <div className="code-container" style={{
                    background: '#1f2937',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    margin: '1rem 0',
                    overflowX: 'auto'
                  }}>
                    <pre style={{ color: '#e5e7eb', fontFamily: 'Monaco, Menlo, monospace', fontSize: '0.875rem' }}><code>
                      <span style={{ color: '#7c7c7c' }}>// Approve the market core contract to transfer your collateral</span>{'\n'}
                      <span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>collateralAmount</span> = <span style={{ color: '#b5cea8' }}>50</span> <span style={{ color: '#9cdcfe' }}>ether</span>; <span style={{ color: '#7c7c7c' }}>// 50 WETH</span>{'\n'}
                      <span style={{ color: '#9cdcfe' }}>weth</span>.<span style={{ color: '#dcdcaa' }}>approve</span>(<span style={{ color: '#dcdcaa' }}>address</span>(<span style={{ color: '#9cdcfe' }}>marketCore</span>), <span style={{ color: '#9cdcfe' }}>collateralAmount</span>);{'\n\n'}
                      <span style={{ color: '#7c7c7c' }}>// Supply collateral to your position</span>{'\n'}
                      <span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>supplyCollateral</span>({'\n'}
                      {'    '}<span style={{ color: '#dcdcaa' }}>address</span>(<span style={{ color: '#9cdcfe' }}>weth</span>),      <span style={{ color: '#7c7c7c' }}>// Collateral asset</span>{'\n'}
                      {'    '}<span style={{ color: '#9cdcfe' }}>collateralAmount</span>,   <span style={{ color: '#7c7c7c' }}>// Amount to supply</span>{'\n'}
                      {'    '}<span style={{ color: '#9cdcfe' }}>positionId</span>          <span style={{ color: '#7c7c7c' }}>// Your position ID</span>{'\n'}
                      );
                    </code></pre>
                  </div>
                </div>

                <div style={{
                  background: 'rgba(31, 41, 55, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  margin: '1rem 0',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '20px',
                    background: '#14b8a6',
                    color: '#111827',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '0.875rem'
                  }}>2</div>
                  <div style={{
                    color: '#0ea5e9',
                    fontSize: '1.1rem',
                    marginBottom: '0.5rem',
                    marginTop: '0.5rem'
                  }}>Check Your Borrowing Capacity</div>
                  <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
                    Calculate how much you can borrow against your collateral.
                  </p>
                  
                  <div className="code-container" style={{
                    background: '#1f2937',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    margin: '1rem 0',
                    overflowX: 'auto'
                  }}>
                    <pre style={{ color: '#e5e7eb', fontFamily: 'Monaco, Menlo, monospace', fontSize: '0.875rem' }}><code>
                      <span style={{ color: '#7c7c7c' }}>// Calculate your credit limit</span>{'\n'}
                      <span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>creditLimit</span> = <span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>calculateCreditLimit</span>(<span style={{ color: '#9cdcfe' }}>borrower</span>, <span style={{ color: '#9cdcfe' }}>positionId</span>);{'\n\n'}
                      <span style={{ color: '#7c7c7c' }}>// With 50 WETH at $2500 and 80% LTV:</span>{'\n'}
                      <span style={{ color: '#7c7c7c' }}>// Credit Limit = 50 × $2500 × 0.80 = $100,000 USDC</span>{'\n\n'}
                      <span style={{ color: '#7c7c7c' }}>// Check collateral value</span>{'\n'}
                      <span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>collateralValue</span> = <span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>calculateCollateralValue</span>(<span style={{ color: '#9cdcfe' }}>borrower</span>, <span style={{ color: '#9cdcfe' }}>positionId</span>);
                    </code></pre>
                  </div>

                  <div style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    borderRadius: '8px',
                    padding: '16px'
                  }}>
                    <strong style={{ color: '#10b981' }}>Position Now Active:</strong>
                    <ul style={{ color: '#d1d5db', paddingLeft: '1rem', marginTop: '0.5rem' }}>
                      <li>Collateral secured in isolated vault</li>
                      <li>Borrowing capacity calculated</li>
                      <li>Position ready for borrowing</li>
                      <li>Health factor tracking enabled</li>
                    </ul>
                    <p style={{ color: '#d1d5db', marginTop: '0.5rem' }}>
                      <span style={{
                        display: 'inline-block',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        background: 'rgba(16, 185, 129, 0.2)',
                        color: '#10b981'
                      }}>Status: ACTIVE</span> - Position ready for borrowing
                    </p>
                  </div>
                </div>
              </section>

              <section id="borrow-funds" style={{ marginTop: '3rem' }}>
                <h2 style={{ color: '#14b8a6', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  Step 3: Borrow Funds
                </h2>
                <p style={{ marginBottom: '1rem', color: '#d1d5db' }}>
                  Borrow base assets against your collateral, up to your credit limit. Interest begins accruing immediately upon borrowing.
                </p>

                <div style={{
                  background: 'rgba(31, 41, 55, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  margin: '1rem 0',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '20px',
                    background: '#14b8a6',
                    color: '#111827',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '0.875rem'
                  }}>1</div>
                  <div style={{
                    color: '#0ea5e9',
                    fontSize: '1.1rem',
                    marginBottom: '0.5rem',
                    marginTop: '0.5rem'
                  }}>Execute Borrow Transaction</div>
                  <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
                    Borrow base assets with MEV protection and slippage controls.
                  </p>
                  
                  <div className="code-container" style={{
                    background: '#1f2937',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    margin: '1rem 0',
                    overflowX: 'auto'
                  }}>
                    <pre style={{ color: '#e5e7eb', fontFamily: 'Monaco, Menlo, monospace', fontSize: '0.875rem' }}><code>
                      <span style={{ color: '#7c7c7c' }}>// Borrow USDC against WETH collateral</span>{'\n'}
                      <span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>borrowAmount</span> = <span style={{ color: '#b5cea8' }}>80_000e6</span>; <span style={{ color: '#7c7c7c' }}>// 80,000 USDC (staying below credit limit)</span>{'\n'}
                      <span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>expectedCreditLimit</span> = <span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>calculateCreditLimit</span>(<span style={{ color: '#9cdcfe' }}>borrower</span>, <span style={{ color: '#9cdcfe' }}>positionId</span>);{'\n\n'}
                      <span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>borrow</span>({'\n'}
                      {'    '}<span style={{ color: '#9cdcfe' }}>positionId</span>,           <span style={{ color: '#7c7c7c' }}>// Your position ID</span>{'\n'}
                      {'    '}<span style={{ color: '#9cdcfe' }}>borrowAmount</span>,         <span style={{ color: '#7c7c7c' }}>// Amount to borrow</span>{'\n'}
                      {'    '}<span style={{ color: '#9cdcfe' }}>expectedCreditLimit</span>,  <span style={{ color: '#7c7c7c' }}>// Expected credit limit (MEV protection)</span>{'\n'}
                      {'    '}<span style={{ color: '#b5cea8' }}>100</span>                   <span style={{ color: '#7c7c7c' }}>// Maximum slippage in basis points (1%)</span>{'\n'}
                      );
                    </code></pre>
                  </div>
                </div>

                <div style={{
                  background: 'rgba(31, 41, 55, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  margin: '1rem 0',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '20px',
                    background: '#14b8a6',
                    color: '#111827',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '0.875rem'
                  }}>2</div>
                  <div style={{
                    color: '#0ea5e9',
                    fontSize: '1.1rem',
                    marginBottom: '0.5rem',
                    marginTop: '0.5rem'
                  }}>Monitor Your Position</div>
                  <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
                    Track key metrics to ensure your position remains healthy.
                  </p>
                  
                  <div className="code-container" style={{
                    background: '#1f2937',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    margin: '1rem 0',
                    overflowX: 'auto'
                  }}>
                    <pre style={{ color: '#e5e7eb', fontFamily: 'Monaco, Menlo, monospace', fontSize: '0.875rem' }}><code>
                      <span style={{ color: '#7c7c7c' }}>// Check your health factor (must stay above 1.0)</span>{'\n'}
                      <span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>healthFactor</span> = <span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>healthFactor</span>(<span style={{ color: '#9cdcfe' }}>borrower</span>, <span style={{ color: '#9cdcfe' }}>positionId</span>);{'\n\n'}
                      <span style={{ color: '#7c7c7c' }}>// Get current debt including accrued interest</span>{'\n'}
                      <span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>currentDebt</span> = <span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>calculateDebtWithInterest</span>(<span style={{ color: '#9cdcfe' }}>borrower</span>, <span style={{ color: '#9cdcfe' }}>positionId</span>);{'\n\n'}
                      <span style={{ color: '#7c7c7c' }}>// Check remaining borrowing capacity</span>{'\n'}
                      <span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>remainingCredit</span> = <span style={{ color: '#9cdcfe' }}>creditLimit</span> - <span style={{ color: '#9cdcfe' }}>currentDebt</span>;
                    </code></pre>
                  </div>

                  <div style={{
                    background: 'rgba(245, 158, 11, 0.1)',
                    border: '1px solid rgba(245, 158, 11, 0.3)',
                    borderRadius: '8px',
                    padding: '16px'
                  }}>
                    <strong style={{ color: '#f59e0b' }}>Interest Accumulation:</strong>
                    <ul style={{ color: '#d1d5db', paddingLeft: '1rem', marginTop: '0.5rem' }}>
                      <li>Interest begins accruing immediately upon borrowing</li>
                      <li>Rates are dynamic based on market utilization</li>
                      <li>Higher risk collateral tiers pay higher rates</li>
                      <li>Interest compounds continuously</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="manage-position" style={{ marginTop: '3rem' }}>
                <h2 style={{ color: '#14b8a6', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  Step 4: Manage Your Position
                </h2>
                <p style={{ marginBottom: '1rem', color: '#d1d5db' }}>
                  Actively monitor and manage your position to maintain health and optimize your borrowing strategy.
                </p>

                <div style={{
                  background: 'linear-gradient(135deg, #10b981, #14b8a6)',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  padding: '1rem',
                  borderRadius: '8px',
                  textAlign: 'center',
                  margin: '1rem 0'
                }}>
                  Health Factor = (Collateral Value × Liquidation Threshold) ÷ Total Debt
                </div>

                <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', margin: '24px 0' }}>
                  <div style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    borderRadius: '8px',
                    padding: '16px'
                  }}>
                    <h5 style={{ color: '#10b981', marginBottom: '0.5rem' }}>🟢 Healthy</h5>
                    <p style={{ color: '#d1d5db' }}><strong>HF &gt; 1.5:</strong> Safe position with good buffer</p>
                  </div>
                  
                  <div style={{
                    background: 'rgba(245, 158, 11, 0.1)',
                    border: '1px solid rgba(245, 158, 11, 0.3)',
                    borderRadius: '8px',
                    padding: '16px'
                  }}>
                    <h5 style={{ color: '#f59e0b', marginBottom: '0.5rem' }}>🟡 Caution</h5>
                    <p style={{ color: '#d1d5db' }}><strong>HF 1.0-1.5:</strong> Monitor closely, consider adding collateral</p>
                  </div>
                  
                  <div style={{
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    borderRadius: '8px',
                    padding: '16px'
                  }}>
                    <h5 style={{ color: '#ef4444', marginBottom: '0.5rem' }}>🔴 Danger</h5>
                    <p style={{ color: '#d1d5db' }}><strong>HF &lt; 1.0:</strong> Position can be liquidated</p>
                  </div>
                </div>
              </section>

              <section id="repay-close" style={{ marginTop: '3rem' }}>
                <h2 style={{ color: '#14b8a6', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  Step 5: Repay & Close Position
                </h2>
                <p style={{ marginBottom: '1rem', color: '#d1d5db' }}>
                  Repay your debt and withdraw collateral to close your position when ready.
                </p>

                <div style={{
                  background: 'rgba(31, 41, 55, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  margin: '1rem 0',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '20px',
                    background: '#14b8a6',
                    color: '#111827',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '0.875rem'
                  }}>1</div>
                  <div style={{
                    color: '#0ea5e9',
                    fontSize: '1.1rem',
                    marginBottom: '0.5rem',
                    marginTop: '0.5rem'
                  }}>Calculate Total Debt</div>
                  <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
                    Get the exact amount needed to fully repay your position including interest.
                  </p>
                  
                  <div className="code-container" style={{
                    background: '#1f2937',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    margin: '1rem 0',
                    overflowX: 'auto'
                  }}>
                    <pre style={{ color: '#e5e7eb', fontFamily: 'Monaco, Menlo, monospace', fontSize: '0.875rem' }}><code>
                      <span style={{ color: '#7c7c7c' }}>// Get total debt including all accrued interest</span>{'\n'}
                      <span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>totalDebt</span> = <span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>calculateDebtWithInterest</span>(<span style={{ color: '#9cdcfe' }}>borrower</span>, <span style={{ color: '#9cdcfe' }}>positionId</span>);{'\n\n'}
                      <span style={{ color: '#7c7c7c' }}>// Add small buffer for any interest that might accrue during transaction</span>{'\n'}
                      <span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>repayAmount</span> = <span style={{ color: '#9cdcfe' }}>totalDebt</span> + <span style={{ color: '#b5cea8' }}>100e6</span>; <span style={{ color: '#7c7c7c' }}>// Add 100 USDC buffer</span>
                    </code></pre>
                  </div>
                </div>

                <div style={{
                  background: 'rgba(31, 41, 55, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  margin: '1rem 0',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '20px',
                    background: '#14b8a6',
                    color: '#111827',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '0.875rem'
                  }}>2</div>
                  <div style={{
                    color: '#0ea5e9',
                    fontSize: '1.1rem',
                    marginBottom: '0.5rem',
                    marginTop: '0.5rem'
                  }}>Repay Full Debt</div>
                  <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
                    Repay the complete outstanding debt to clear your borrowing obligation.
                  </p>
                  
                  <div className="code-container" style={{
                    background: '#1f2937',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    margin: '1rem 0',
                    overflowX: 'auto'
                  }}>
                    <pre style={{ color: '#e5e7eb', fontFamily: 'Monaco, Menlo, monospace', fontSize: '0.875rem' }}><code>
                      <span style={{ color: '#7c7c7c' }}>// Approve and repay full debt</span>{'\n'}
                      <span style={{ color: '#9cdcfe' }}>usdc</span>.<span style={{ color: '#dcdcaa' }}>approve</span>(<span style={{ color: '#dcdcaa' }}>address</span>(<span style={{ color: '#9cdcfe' }}>marketCore</span>), <span style={{ color: '#9cdcfe' }}>repayAmount</span>);{'\n\n'}
                      <span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>repay</span>({'\n'}
                      {'    '}<span style={{ color: '#9cdcfe' }}>positionId</span>,          <span style={{ color: '#7c7c7c' }}>// Your position ID</span>{'\n'}
                      {'    '}<span style={{ color: '#9cdcfe' }}>repayAmount</span>,         <span style={{ color: '#7c7c7c' }}>// Amount to repay (with buffer)</span>{'\n'}
                      {'    '}<span style={{ color: '#9cdcfe' }}>totalDebt</span>,           <span style={{ color: '#7c7c7c' }}>// Expected debt amount</span>{'\n'}
                      {'    '}<span style={{ color: '#b5cea8' }}>100</span>                  <span style={{ color: '#7c7c7c' }}>// 1% max slippage</span>{'\n'}
                      );
                    </code></pre>
                  </div>
                </div>

                <div style={{
                  background: 'rgba(31, 41, 55, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  margin: '1rem 0',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '20px',
                    background: '#14b8a6',
                    color: '#111827',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '0.875rem'
                  }}>3</div>
                  <div style={{
                    color: '#0ea5e9',
                    fontSize: '1.1rem',
                    marginBottom: '0.5rem',
                    marginTop: '0.5rem'
                  }}>Withdraw All Collateral</div>
                  <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
                    Once debt is fully repaid, withdraw all your collateral to close the position.
                  </p>
                  
                  <div className="code-container" style={{
                    background: '#1f2937',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    margin: '1rem 0',
                    overflowX: 'auto'
                  }}>
                    <pre style={{ color: '#e5e7eb', fontFamily: 'Monaco, Menlo, monospace', fontSize: '0.875rem' }}><code>
                      <span style={{ color: '#7c7c7c' }}>// Withdraw all collateral after full debt repayment</span>{'\n'}
                      <span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>expectedCreditLimit</span> = <span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>calculateCreditLimit</span>(<span style={{ color: '#9cdcfe' }}>borrower</span>, <span style={{ color: '#9cdcfe' }}>positionId</span>);{'\n'}
                      <span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>withdrawCollateral</span>({'\n'}
                      {'    '}<span style={{ color: '#dcdcaa' }}>address</span>(<span style={{ color: '#9cdcfe' }}>weth</span>),              <span style={{ color: '#7c7c7c' }}>// Collateral asset</span>{'\n'}
                      {'    '}<span style={{ color: '#9cdcfe' }}>collateralAmount</span>,           <span style={{ color: '#7c7c7c' }}>// Amount to withdraw</span>{'\n'}
                      {'    '}<span style={{ color: '#9cdcfe' }}>positionId</span>,                 <span style={{ color: '#7c7c7c' }}>// Position ID</span>{'\n'}
                      {'    '}<span style={{ color: '#9cdcfe' }}>expectedCreditLimit</span>,        <span style={{ color: '#7c7c7c' }}>// Expected credit limit (MEV protection)</span>{'\n'}
                      {'    '}<span style={{ color: '#b5cea8' }}>100</span>                         <span style={{ color: '#7c7c7c' }}>// Max slippage in basis points</span>{'\n'}
                      );
                    </code></pre>
                  </div>

                  <div style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    borderRadius: '8px',
                    padding: '16px'
                  }}>
                    <strong style={{ color: '#10b981' }}>Position Successfully Closed:</strong>
                    <ul style={{ color: '#d1d5db', paddingLeft: '1rem', marginTop: '0.5rem' }}>
                      <li>All debt repaid with interest</li>
                      <li>All collateral withdrawn</li>
                      <li>Position can be reused for future borrowing</li>
                      <li>Gas costs minimized through efficient design</li>
                    </ul>
                    <p style={{ color: '#d1d5db', marginTop: '0.5rem' }}>
                      <span style={{
                        display: 'inline-block',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        background: 'rgba(59, 130, 246, 0.2)',
                        color: '#3b82f6'
                      }}>Status: CLOSED</span> - Position closed successfully
                    </p>
                  </div>
                </div>
              </section>

              <section id="examples" style={{ marginTop: '3rem' }}>
                <h2 style={{ color: '#14b8a6', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  Complete Borrowing Example
                </h2>
                
                {/* Tab Navigation */}
                <div style={{ display: 'flex', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', marginBottom: '1rem' }}>
                  <button 
                    onClick={() => setActiveTab('solidity')}
                    style={{
                      padding: '0.75rem 1.5rem',
                      background: activeTab === 'solidity' ? '#14b8a6' : 'transparent',
                      color: activeTab === 'solidity' ? '#111827' : '#9ca3af',
                      border: 'none',
                      borderRadius: '8px 8px 0 0',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      fontWeight: '600'
                    }}
                  >
                    Solidity
                  </button>
                  <button 
                    onClick={() => setActiveTab('javascript')}
                    style={{
                      padding: '0.75rem 1.5rem',
                      background: activeTab === 'javascript' ? '#14b8a6' : 'transparent',
                      color: activeTab === 'javascript' ? '#111827' : '#9ca3af',
                      border: 'none',
                      borderRadius: '8px 8px 0 0',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      fontWeight: '600'
                    }}
                  >
                    JavaScript
                  </button>
                  <button 
                    onClick={() => setActiveTab('python')}
                    style={{
                      padding: '0.75rem 1.5rem',
                      background: activeTab === 'python' ? '#14b8a6' : 'transparent',
                      color: activeTab === 'python' ? '#111827' : '#9ca3af',
                      border: 'none',
                      borderRadius: '8px 8px 0 0',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      fontWeight: '600'
                    }}
                  >
                    Python
                  </button>
                </div>

                {/* Solidity Tab */}
                {activeTab === 'solidity' && (
                  <div className="code-container" style={{
                    background: '#1f2937',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    margin: '1rem 0',
                    overflowX: 'auto'
                  }}>
                    <pre style={{ color: '#e5e7eb', fontFamily: 'Monaco, Menlo, monospace', fontSize: '0.875rem' }}><code>
                    <span style={{ color: '#7c7c7c' }}>// Complete borrowing lifecycle example</span>{'\n'}
                    <span style={{ color: '#569cd6' }}>contract</span> <span style={{ color: '#4ec9b0' }}>BorrowerExample</span> {'{'}
                    {'\n    '}<span style={{ color: '#4ec9b0' }}>ILendefiCore</span> <span style={{ color: '#9cdcfe' }}>marketCore</span>;
                    {'\n    '}<span style={{ color: '#4ec9b0' }}>IERC20</span> <span style={{ color: '#9cdcfe' }}>weth</span>;
                    {'\n    '}<span style={{ color: '#4ec9b0' }}>IERC20</span> <span style={{ color: '#9cdcfe' }}>usdc</span>;
                    {'\n    '}
                    {'\n    '}<span style={{ color: '#569cd6' }}>function</span> <span style={{ color: '#dcdcaa' }}>completeBorrowingCycle</span>() <span style={{ color: '#569cd6' }}>external</span> {'{'}
                    {'\n        '}<span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>positionId</span>;
                    {'\n        '}<span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>collateralAmount</span> = <span style={{ color: '#b5cea8' }}>50</span> <span style={{ color: '#9cdcfe' }}>ether</span>; <span style={{ color: '#7c7c7c' }}>// 50 WETH</span>
                    {'\n        '}<span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>borrowAmount</span> = <span style={{ color: '#b5cea8' }}>80_000e6</span>;     <span style={{ color: '#7c7c7c' }}>// 80,000 USDC</span>
                    {'\n        '}
                    {'\n        '}<span style={{ color: '#7c7c7c' }}>// Step 1: Create position for WETH collateral</span>
                    {'\n        '}<span style={{ color: '#9cdcfe' }}>positionId</span> = <span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>createPosition</span>(<span style={{ color: '#dcdcaa' }}>address</span>(<span style={{ color: '#9cdcfe' }}>weth</span>), <span style={{ color: '#569cd6' }}>false</span>);
                    {'\n        '}
                    {'\n        '}<span style={{ color: '#7c7c7c' }}>// Step 2: Supply collateral</span>
                    {'\n        '}<span style={{ color: '#9cdcfe' }}>weth</span>.<span style={{ color: '#dcdcaa' }}>approve</span>(<span style={{ color: '#dcdcaa' }}>address</span>(<span style={{ color: '#9cdcfe' }}>marketCore</span>), <span style={{ color: '#9cdcfe' }}>collateralAmount</span>);
                    {'\n        '}<span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>supplyCollateral</span>(<span style={{ color: '#dcdcaa' }}>address</span>(<span style={{ color: '#9cdcfe' }}>weth</span>), <span style={{ color: '#9cdcfe' }}>collateralAmount</span>, <span style={{ color: '#9cdcfe' }}>positionId</span>);
                    {'\n        '}
                    {'\n        '}<span style={{ color: '#7c7c7c' }}>// Step 3: Check credit limit and borrow</span>
                    {'\n        '}<span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>creditLimit</span> = <span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>calculateCreditLimit</span>(<span style={{ color: '#569cd6' }}>msg</span>.<span style={{ color: '#9cdcfe' }}>sender</span>, <span style={{ color: '#9cdcfe' }}>positionId</span>);
                    {'\n        '}<span style={{ color: '#569cd6' }}>require</span>(<span style={{ color: '#9cdcfe' }}>borrowAmount</span> &lt;= <span style={{ color: '#9cdcfe' }}>creditLimit</span>, <span style={{ color: '#ce9178' }}>"Insufficient credit"</span>);
                    {'\n        '}
                    {'\n        '}<span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>borrow</span>(<span style={{ color: '#9cdcfe' }}>positionId</span>, <span style={{ color: '#9cdcfe' }}>borrowAmount</span>, <span style={{ color: '#9cdcfe' }}>creditLimit</span>, <span style={{ color: '#b5cea8' }}>100</span>);
                    {'\n        '}
                    {'\n        '}<span style={{ color: '#7c7c7c' }}>// Step 4: Monitor position (should be called regularly)</span>
                    {'\n        '}<span style={{ color: '#dcdcaa' }}>monitorPosition</span>(<span style={{ color: '#9cdcfe' }}>positionId</span>);
                    {'\n        '}
                    {'\n        '}<span style={{ color: '#7c7c7c' }}>// Step 5: Repay and close (when ready)</span>
                    {'\n        '}<span style={{ color: '#dcdcaa' }}>repayAndClose</span>(<span style={{ color: '#9cdcfe' }}>positionId</span>);
                    {'\n    '}{'}'}
                    {'\n    '}
                    {'\n    '}<span style={{ color: '#569cd6' }}>function</span> <span style={{ color: '#dcdcaa' }}>monitorPosition</span>(<span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>positionId</span>) <span style={{ color: '#569cd6' }}>public</span> <span style={{ color: '#569cd6' }}>view</span> <span style={{ color: '#569cd6' }}>returns</span> ({'\n'}
                    {'        '}<span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>healthFactor</span>,{'\n'}
                    {'        '}<span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>currentDebt</span>,{'\n'}
                    {'        '}<span style={{ color: '#569cd6' }}>bool</span> <span style={{ color: '#9cdcfe' }}>needsAttention</span>{'\n'}
                    {'    '}) {'{'}
                    {'\n        '}<span style={{ color: '#9cdcfe' }}>healthFactor</span> = <span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>healthFactor</span>(<span style={{ color: '#569cd6' }}>msg</span>.<span style={{ color: '#9cdcfe' }}>sender</span>, <span style={{ color: '#9cdcfe' }}>positionId</span>);
                    {'\n        '}<span style={{ color: '#9cdcfe' }}>currentDebt</span> = <span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>calculateDebtWithInterest</span>(<span style={{ color: '#569cd6' }}>msg</span>.<span style={{ color: '#9cdcfe' }}>sender</span>, <span style={{ color: '#9cdcfe' }}>positionId</span>);
                    {'\n        '}<span style={{ color: '#9cdcfe' }}>needsAttention</span> = <span style={{ color: '#9cdcfe' }}>healthFactor</span> &lt; <span style={{ color: '#b5cea8' }}>1.5e6</span>; <span style={{ color: '#7c7c7c' }}>// Health factor below 1.5</span>
                    {'\n        '}
                    {'\n        '}<span style={{ color: '#569cd6' }}>if</span> (<span style={{ color: '#9cdcfe' }}>needsAttention</span>) {'{'}
                    {'\n            '}<span style={{ color: '#7c7c7c' }}>// Consider adding collateral or repaying debt</span>
                    {'\n        '}{'}'}
                    {'\n    '}{'}'}
                    {'\n    '}
                    {'\n    '}<span style={{ color: '#569cd6' }}>function</span> <span style={{ color: '#dcdcaa' }}>repayAndClose</span>(<span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>positionId</span>) <span style={{ color: '#569cd6' }}>external</span> {'{'}
                    {'\n        '}<span style={{ color: '#7c7c7c' }}>// Calculate total debt with interest</span>
                    {'\n        '}<span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>totalDebt</span> = <span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>calculateDebtWithInterest</span>(<span style={{ color: '#569cd6' }}>msg</span>.<span style={{ color: '#9cdcfe' }}>sender</span>, <span style={{ color: '#9cdcfe' }}>positionId</span>);
                    {'\n        '}<span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>repayAmount</span> = <span style={{ color: '#9cdcfe' }}>totalDebt</span> + <span style={{ color: '#b5cea8' }}>100e6</span>; <span style={{ color: '#7c7c7c' }}>// Add buffer</span>
                    {'\n        '}
                    {'\n        '}<span style={{ color: '#7c7c7c' }}>// Repay debt</span>
                    {'\n        '}<span style={{ color: '#9cdcfe' }}>usdc</span>.<span style={{ color: '#dcdcaa' }}>approve</span>(<span style={{ color: '#dcdcaa' }}>address</span>(<span style={{ color: '#9cdcfe' }}>marketCore</span>), <span style={{ color: '#9cdcfe' }}>repayAmount</span>);
                    {'\n        '}<span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>repay</span>(<span style={{ color: '#9cdcfe' }}>positionId</span>, <span style={{ color: '#9cdcfe' }}>repayAmount</span>, <span style={{ color: '#9cdcfe' }}>totalDebt</span>, <span style={{ color: '#b5cea8' }}>100</span>);
                    {'\n        '}
                    {'\n        '}<span style={{ color: '#7c7c7c' }}>// Withdraw all collateral</span>
                    {'\n        '}<span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>expectedCreditLimit</span> = <span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>calculateCreditLimit</span>(<span style={{ color: '#569cd6' }}>msg</span>.<span style={{ color: '#9cdcfe' }}>sender</span>, <span style={{ color: '#9cdcfe' }}>positionId</span>);{'\n'}
                    {'\n        '}<span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>withdrawCollateral</span>({'\n'}
                    {'            '}<span style={{ color: '#dcdcaa' }}>address</span>(<span style={{ color: '#9cdcfe' }}>weth</span>),{'\n'}
                    {'            '}<span style={{ color: '#9cdcfe' }}>collateralAmount</span>,{'\n'}
                    {'            '}<span style={{ color: '#9cdcfe' }}>positionId</span>,{'\n'}
                    {'            '}<span style={{ color: '#9cdcfe' }}>expectedCreditLimit</span>, <span style={{ color: '#7c7c7c' }}>// Expected credit limit (MEV protection)</span>{'\n'}
                    {'            '}<span style={{ color: '#b5cea8' }}>100</span>{'\n'}
                    {'        '});{'\n'}
                    {'\n    '}{'}'}
                    {'\n'}{'}'}
                    </code></pre>
                  </div>
                )}

                {/* JavaScript Tab */}
                {activeTab === 'javascript' && (
                  <div className="code-container" style={{
                    background: '#1f2937',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    margin: '1rem 0',
                    overflowX: 'auto'
                  }}>
                    <pre style={{ color: '#e5e7eb', fontFamily: 'Monaco, Menlo, monospace', fontSize: '0.875rem' }}><code>
                      <span style={{ color: '#7c7c7c' }}>// Complete borrowing lifecycle example using ethers.js</span>{'\n'}
                      <span style={{ color: '#569cd6' }}>import</span> {'{ '}<span style={{ color: '#9cdcfe' }}>ethers</span> {'} '}<span style={{ color: '#569cd6' }}>from</span> <span style={{ color: '#ce9178' }}>'ethers'</span>;{'\n'}
                      <span style={{ color: '#569cd6' }}>import</span> {'{ '}<span style={{ color: '#9cdcfe' }}>useAppKitProvider</span> {'} '}<span style={{ color: '#569cd6' }}>from</span> <span style={{ color: '#ce9178' }}>'@reown/appkit/react'</span>;{'\n\n'}
                      
                      <span style={{ color: '#569cd6' }}>async function</span> <span style={{ color: '#dcdcaa' }}>completeBorrowingCycle</span>() {'{'}
                      {'\n    '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>provider</span> = <span style={{ color: '#dcdcaa' }}>useAppKitProvider</span>();
                      {'\n    '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>signer</span> = <span style={{ color: '#569cd6' }}>await</span> <span style={{ color: '#9cdcfe' }}>provider</span>.<span style={{ color: '#dcdcaa' }}>getSigner</span>();
                      {'\n    '}
                      {'\n    '}<span style={{ color: '#7c7c7c' }}>// Contract instances</span>
                      {'\n    '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>marketCore</span> = <span style={{ color: '#569cd6' }}>new</span> <span style={{ color: '#9cdcfe' }}>ethers</span>.<span style={{ color: '#dcdcaa' }}>Contract</span>(<span style={{ color: '#9cdcfe' }}>MARKET_CORE_ADDRESS</span>, <span style={{ color: '#9cdcfe' }}>MARKET_CORE_ABI</span>, <span style={{ color: '#9cdcfe' }}>signer</span>);
                      {'\n    '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>weth</span> = <span style={{ color: '#569cd6' }}>new</span> <span style={{ color: '#9cdcfe' }}>ethers</span>.<span style={{ color: '#dcdcaa' }}>Contract</span>(<span style={{ color: '#9cdcfe' }}>WETH_ADDRESS</span>, <span style={{ color: '#9cdcfe' }}>ERC20_ABI</span>, <span style={{ color: '#9cdcfe' }}>signer</span>);
                      {'\n    '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>usdc</span> = <span style={{ color: '#569cd6' }}>new</span> <span style={{ color: '#9cdcfe' }}>ethers</span>.<span style={{ color: '#dcdcaa' }}>Contract</span>(<span style={{ color: '#9cdcfe' }}>USDC_ADDRESS</span>, <span style={{ color: '#9cdcfe' }}>ERC20_ABI</span>, <span style={{ color: '#9cdcfe' }}>signer</span>);
                      {'\n    '}
                      {'\n    '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>collateralAmount</span> = <span style={{ color: '#9cdcfe' }}>ethers</span>.<span style={{ color: '#dcdcaa' }}>parseEther</span>(<span style={{ color: '#ce9178' }}>"50"</span>); <span style={{ color: '#7c7c7c' }}>// 50 WETH</span>
                      {'\n    '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>borrowAmount</span> = <span style={{ color: '#9cdcfe' }}>ethers</span>.<span style={{ color: '#dcdcaa' }}>parseUnits</span>(<span style={{ color: '#ce9178' }}>"80000"</span>, <span style={{ color: '#b5cea8' }}>6</span>); <span style={{ color: '#7c7c7c' }}>// 80,000 USDC</span>
                      {'\n    '}
                      {'\n    '}<span style={{ color: '#569cd6' }}>try</span> {'{'}
                      {'\n        '}<span style={{ color: '#7c7c7c' }}>// Step 1: Create position for WETH collateral</span>
                      {'\n        '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>createTx</span> = <span style={{ color: '#569cd6' }}>await</span> <span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>createPosition</span>(<span style={{ color: '#9cdcfe' }}>WETH_ADDRESS</span>, <span style={{ color: '#569cd6' }}>false</span>);
                      {'\n        '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>receipt</span> = <span style={{ color: '#569cd6' }}>await</span> <span style={{ color: '#9cdcfe' }}>createTx</span>.<span style={{ color: '#dcdcaa' }}>wait</span>();
                      {'\n        '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>positionId</span> = <span style={{ color: '#9cdcfe' }}>receipt</span>.<span style={{ color: '#9cdcfe' }}>logs</span>[<span style={{ color: '#b5cea8' }}>0</span>].<span style={{ color: '#9cdcfe' }}>args</span>.<span style={{ color: '#9cdcfe' }}>positionId</span>;
                      {'\n        '}
                      {'\n        '}<span style={{ color: '#7c7c7c' }}>// Step 2: Supply collateral</span>
                      {'\n        '}<span style={{ color: '#569cd6' }}>await</span> <span style={{ color: '#9cdcfe' }}>weth</span>.<span style={{ color: '#dcdcaa' }}>approve</span>(<span style={{ color: '#9cdcfe' }}>MARKET_CORE_ADDRESS</span>, <span style={{ color: '#9cdcfe' }}>collateralAmount</span>);
                      {'\n        '}<span style={{ color: '#569cd6' }}>await</span> <span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>supplyCollateral</span>(<span style={{ color: '#9cdcfe' }}>WETH_ADDRESS</span>, <span style={{ color: '#9cdcfe' }}>collateralAmount</span>, <span style={{ color: '#9cdcfe' }}>positionId</span>);
                      {'\n        '}
                      {'\n        '}<span style={{ color: '#7c7c7c' }}>// Step 3: Check credit limit and borrow</span>
                      {'\n        '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>creditLimit</span> = <span style={{ color: '#569cd6' }}>await</span> <span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>calculateCreditLimit</span>(<span style={{ color: '#569cd6' }}>await</span> <span style={{ color: '#9cdcfe' }}>signer</span>.<span style={{ color: '#dcdcaa' }}>getAddress</span>(), <span style={{ color: '#9cdcfe' }}>positionId</span>);
                      {'\n        '}<span style={{ color: '#569cd6' }}>if</span> (<span style={{ color: '#9cdcfe' }}>borrowAmount</span> {'>'} <span style={{ color: '#9cdcfe' }}>creditLimit</span>) {'{'}
                      {'\n            '}<span style={{ color: '#569cd6' }}>throw</span> <span style={{ color: '#569cd6' }}>new</span> <span style={{ color: '#dcdcaa' }}>Error</span>(<span style={{ color: '#ce9178' }}>"Insufficient credit"</span>);
                      {'\n        '}{'}'}
                      {'\n        '}
                      {'\n        '}<span style={{ color: '#569cd6' }}>await</span> <span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>borrow</span>(<span style={{ color: '#9cdcfe' }}>positionId</span>, <span style={{ color: '#9cdcfe' }}>borrowAmount</span>, <span style={{ color: '#9cdcfe' }}>creditLimit</span>, <span style={{ color: '#b5cea8' }}>100</span>);
                      {'\n        '}
                      {'\n        '}<span style={{ color: '#7c7c7c' }}>// Step 4: Monitor position</span>
                      {'\n        '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>healthFactor</span> = <span style={{ color: '#569cd6' }}>await</span> <span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>healthFactor</span>(<span style={{ color: '#569cd6' }}>await</span> <span style={{ color: '#9cdcfe' }}>signer</span>.<span style={{ color: '#dcdcaa' }}>getAddress</span>(), <span style={{ color: '#9cdcfe' }}>positionId</span>);
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>console</span>.<span style={{ color: '#dcdcaa' }}>log</span>(<span style={{ color: '#ce9178' }}>"Health Factor:"</span>, <span style={{ color: '#9cdcfe' }}>ethers</span>.<span style={{ color: '#dcdcaa' }}>formatUnits</span>(<span style={{ color: '#9cdcfe' }}>healthFactor</span>, <span style={{ color: '#b5cea8' }}>6</span>));
                      {'\n        '}
                      {'\n        '}<span style={{ color: '#7c7c7c' }}>// Step 5: Repay and close (when ready)</span>
                      {'\n        '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>totalDebt</span> = <span style={{ color: '#569cd6' }}>await</span> <span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>calculateDebtWithInterest</span>(<span style={{ color: '#569cd6' }}>await</span> <span style={{ color: '#9cdcfe' }}>signer</span>.<span style={{ color: '#dcdcaa' }}>getAddress</span>(), <span style={{ color: '#9cdcfe' }}>positionId</span>);
                      {'\n        '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>repayAmount</span> = <span style={{ color: '#9cdcfe' }}>totalDebt</span> + <span style={{ color: '#9cdcfe' }}>ethers</span>.<span style={{ color: '#dcdcaa' }}>parseUnits</span>(<span style={{ color: '#ce9178' }}>"100"</span>, <span style={{ color: '#b5cea8' }}>6</span>); <span style={{ color: '#7c7c7c' }}>// Add buffer</span>
                      {'\n        '}
                      {'\n        '}<span style={{ color: '#7c7c7c' }}>// Repay debt</span>
                      {'\n        '}<span style={{ color: '#569cd6' }}>await</span> <span style={{ color: '#9cdcfe' }}>usdc</span>.<span style={{ color: '#dcdcaa' }}>approve</span>(<span style={{ color: '#9cdcfe' }}>MARKET_CORE_ADDRESS</span>, <span style={{ color: '#9cdcfe' }}>repayAmount</span>);
                      {'\n        '}<span style={{ color: '#569cd6' }}>await</span> <span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>repay</span>(<span style={{ color: '#9cdcfe' }}>positionId</span>, <span style={{ color: '#9cdcfe' }}>repayAmount</span>, <span style={{ color: '#9cdcfe' }}>totalDebt</span>, <span style={{ color: '#b5cea8' }}>100</span>);
                      {'\n        '}
                      {'\n        '}<span style={{ color: '#7c7c7c' }}>// Withdraw all collateral</span>
                      {'\n        '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>expectedCreditLimit</span> = <span style={{ color: '#569cd6' }}>await</span> <span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>calculateCreditLimit</span>(<span style={{ color: '#569cd6' }}>await</span> <span style={{ color: '#9cdcfe' }}>signer</span>.<span style={{ color: '#dcdcaa' }}>getAddress</span>(), <span style={{ color: '#9cdcfe' }}>positionId</span>);
                      {'\n        '}<span style={{ color: '#569cd6' }}>await</span> <span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>withdrawCollateral</span>({'\n'}
                      {'            '}<span style={{ color: '#9cdcfe' }}>WETH_ADDRESS</span>,{'\n'}
                      {'            '}<span style={{ color: '#9cdcfe' }}>collateralAmount</span>,{'\n'}
                      {'            '}<span style={{ color: '#9cdcfe' }}>positionId</span>,{'\n'}
                      {'            '}<span style={{ color: '#9cdcfe' }}>expectedCreditLimit</span>,{'\n'}
                      {'            '}<span style={{ color: '#b5cea8' }}>100</span>{'\n'}
                      {'        '});
                      {'\n        '}
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>console</span>.<span style={{ color: '#dcdcaa' }}>log</span>(<span style={{ color: '#ce9178' }}>"Borrowing cycle completed successfully!"</span>);
                      {'\n    '} {'} '}<span style={{ color: '#569cd6' }}>catch</span> (<span style={{ color: '#9cdcfe' }}>error</span>) {'{'}
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>console</span>.<span style={{ color: '#dcdcaa' }}>error</span>(<span style={{ color: '#ce9178' }}>"Error in borrowing cycle:"</span>, <span style={{ color: '#9cdcfe' }}>error</span>);
                      {'\n    '}{'}'}
                      {'\n'}{'}'}
                    </code></pre>
                  </div>
                )}

                {/* Python Tab */}
                {activeTab === 'python' && (
                  <div className="code-container" style={{
                    background: '#1f2937',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    margin: '1rem 0',
                    overflowX: 'auto'
                  }}>
                    <pre style={{ color: '#e5e7eb', fontFamily: 'Monaco, Menlo, monospace', fontSize: '0.875rem' }}><code>
                      <span style={{ color: '#7c7c7c' }}># Complete borrowing lifecycle example using web3.py</span>{'\n'}
                      <span style={{ color: '#569cd6' }}>from</span> <span style={{ color: '#9cdcfe' }}>web3</span> <span style={{ color: '#569cd6' }}>import</span> <span style={{ color: '#9cdcfe' }}>Web3</span>{'\n'}
                      <span style={{ color: '#569cd6' }}>from</span> <span style={{ color: '#9cdcfe' }}>eth_account</span> <span style={{ color: '#569cd6' }}>import</span> <span style={{ color: '#9cdcfe' }}>Account</span>{'\n'}
                      <span style={{ color: '#569cd6' }}>import</span> <span style={{ color: '#9cdcfe' }}>json</span>{'\n\n'}
                      
                      <span style={{ color: '#569cd6' }}>def</span> <span style={{ color: '#dcdcaa' }}>complete_borrowing_cycle</span>():
                      {'\n    '}<span style={{ color: '#ce9178' }}>"""Complete borrowing lifecycle using Lendefi Markets"""</span>
                      {'\n    '}
                      {'\n    '}<span style={{ color: '#7c7c7c' }}># Setup Web3 connection</span>
                      {'\n    '}<span style={{ color: '#9cdcfe' }}>w3</span> = <span style={{ color: '#dcdcaa' }}>Web3</span>(<span style={{ color: '#dcdcaa' }}>Web3</span>.<span style={{ color: '#9cdcfe' }}>HTTPProvider</span>(<span style={{ color: '#ce9178' }}>'YOUR_RPC_URL'</span>))
                      {'\n    '}<span style={{ color: '#9cdcfe' }}>account</span> = <span style={{ color: '#dcdcaa' }}>Account</span>.<span style={{ color: '#dcdcaa' }}>from_key</span>(<span style={{ color: '#ce9178' }}>'YOUR_PRIVATE_KEY'</span>)
                      {'\n    '}
                      {'\n    '}<span style={{ color: '#7c7c7c' }}># Contract addresses and ABIs</span>
                      {'\n    '}<span style={{ color: '#9cdcfe' }}>MARKET_CORE_ADDRESS</span> = <span style={{ color: '#ce9178' }}>'0x...'</span>
                      {'\n    '}<span style={{ color: '#9cdcfe' }}>WETH_ADDRESS</span> = <span style={{ color: '#ce9178' }}>'0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'</span>
                      {'\n    '}<span style={{ color: '#9cdcfe' }}>USDC_ADDRESS</span> = <span style={{ color: '#ce9178' }}>'0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'</span>
                      {'\n    '}
                      {'\n    '}<span style={{ color: '#7c7c7c' }}># Load contract ABIs</span>
                      {'\n    '}<span style={{ color: '#569cd6' }}>with</span> <span style={{ color: '#dcdcaa' }}>open</span>(<span style={{ color: '#ce9178' }}>'market_core_abi.json'</span>) <span style={{ color: '#569cd6' }}>as</span> <span style={{ color: '#9cdcfe' }}>f</span>:
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>market_core_abi</span> = <span style={{ color: '#9cdcfe' }}>json</span>.<span style={{ color: '#dcdcaa' }}>load</span>(<span style={{ color: '#9cdcfe' }}>f</span>)
                      {'\n    '}
                      {'\n    '}<span style={{ color: '#569cd6' }}>with</span> <span style={{ color: '#dcdcaa' }}>open</span>(<span style={{ color: '#ce9178' }}>'erc20_abi.json'</span>) <span style={{ color: '#569cd6' }}>as</span> <span style={{ color: '#9cdcfe' }}>f</span>:
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>erc20_abi</span> = <span style={{ color: '#9cdcfe' }}>json</span>.<span style={{ color: '#dcdcaa' }}>load</span>(<span style={{ color: '#9cdcfe' }}>f</span>)
                      {'\n    '}
                      {'\n    '}<span style={{ color: '#7c7c7c' }}># Contract instances</span>
                      {'\n    '}<span style={{ color: '#9cdcfe' }}>market_core</span> = <span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#dcdcaa' }}>contract</span>(<span style={{ color: '#9cdcfe' }}>address</span>=<span style={{ color: '#9cdcfe' }}>MARKET_CORE_ADDRESS</span>, <span style={{ color: '#9cdcfe' }}>abi</span>=<span style={{ color: '#9cdcfe' }}>market_core_abi</span>)
                      {'\n    '}<span style={{ color: '#9cdcfe' }}>weth</span> = <span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#dcdcaa' }}>contract</span>(<span style={{ color: '#9cdcfe' }}>address</span>=<span style={{ color: '#9cdcfe' }}>WETH_ADDRESS</span>, <span style={{ color: '#9cdcfe' }}>abi</span>=<span style={{ color: '#9cdcfe' }}>erc20_abi</span>)
                      {'\n    '}<span style={{ color: '#9cdcfe' }}>usdc</span> = <span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#dcdcaa' }}>contract</span>(<span style={{ color: '#9cdcfe' }}>address</span>=<span style={{ color: '#9cdcfe' }}>USDC_ADDRESS</span>, <span style={{ color: '#9cdcfe' }}>abi</span>=<span style={{ color: '#9cdcfe' }}>erc20_abi</span>)
                      {'\n    '}
                      {'\n    '}<span style={{ color: '#9cdcfe' }}>collateral_amount</span> = <span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#dcdcaa' }}>to_wei</span>(<span style={{ color: '#b5cea8' }}>50</span>, <span style={{ color: '#ce9178' }}>'ether'</span>)  <span style={{ color: '#7c7c7c' }}># 50 WETH</span>
                      {'\n    '}<span style={{ color: '#9cdcfe' }}>borrow_amount</span> = <span style={{ color: '#b5cea8' }}>80_000</span> * <span style={{ color: '#b5cea8' }}>10</span>**<span style={{ color: '#b5cea8' }}>6</span>  <span style={{ color: '#7c7c7c' }}># 80,000 USDC</span>
                      {'\n    '}
                      {'\n    '}<span style={{ color: '#569cd6' }}>try</span>:
                      {'\n        '}<span style={{ color: '#7c7c7c' }}># Step 1: Create position for WETH collateral</span>
                      {'\n        '}<span style={{ color: '#dcdcaa' }}>print</span>(<span style={{ color: '#ce9178' }}>"Creating position..."</span>)
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>create_txn</span> = <span style={{ color: '#9cdcfe' }}>market_core</span>.<span style={{ color: '#9cdcfe' }}>functions</span>.<span style={{ color: '#dcdcaa' }}>createPosition</span>(<span style={{ color: '#9cdcfe' }}>WETH_ADDRESS</span>, <span style={{ color: '#569cd6' }}>False</span>).<span style={{ color: '#dcdcaa' }}>build_transaction</span>({'{'}
                      {'\n            '}<span style={{ color: '#ce9178' }}>'from'</span>: <span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>address</span>,
                      {'\n            '}<span style={{ color: '#ce9178' }}>'nonce'</span>: <span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#dcdcaa' }}>get_transaction_count</span>(<span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>address</span>)
                      {'\n        '}{'}'}){'\n'}
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>signed_txn</span> = <span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#dcdcaa' }}>sign_transaction</span>(<span style={{ color: '#9cdcfe' }}>create_txn</span>, <span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>key</span>)
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>tx_hash</span> = <span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#dcdcaa' }}>send_raw_transaction</span>(<span style={{ color: '#9cdcfe' }}>signed_txn</span>.<span style={{ color: '#9cdcfe' }}>rawTransaction</span>)
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>receipt</span> = <span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#dcdcaa' }}>wait_for_transaction_receipt</span>(<span style={{ color: '#9cdcfe' }}>tx_hash</span>)
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>position_id</span> = <span style={{ color: '#9cdcfe' }}>receipt</span>.<span style={{ color: '#9cdcfe' }}>logs</span>[<span style={{ color: '#b5cea8' }}>0</span>][<span style={{ color: '#ce9178' }}>'args'</span>][<span style={{ color: '#ce9178' }}>'positionId'</span>]
                      {'\n        '}
                      {'\n        '}<span style={{ color: '#7c7c7c' }}># Step 2: Supply collateral</span>
                      {'\n        '}<span style={{ color: '#dcdcaa' }}>print</span>(<span style={{ color: '#ce9178' }}>"Supplying collateral..."</span>)
                      {'\n        '}<span style={{ color: '#7c7c7c' }}># Approve WETH</span>
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>approve_txn</span> = <span style={{ color: '#9cdcfe' }}>weth</span>.<span style={{ color: '#9cdcfe' }}>functions</span>.<span style={{ color: '#dcdcaa' }}>approve</span>(<span style={{ color: '#9cdcfe' }}>MARKET_CORE_ADDRESS</span>, <span style={{ color: '#9cdcfe' }}>collateral_amount</span>).<span style={{ color: '#dcdcaa' }}>build_transaction</span>({'{'}
                      {'\n            '}<span style={{ color: '#ce9178' }}>'from'</span>: <span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>address</span>,
                      {'\n            '}<span style={{ color: '#ce9178' }}>'nonce'</span>: <span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#dcdcaa' }}>get_transaction_count</span>(<span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>address</span>)
                      {'\n        '}{'}'}){'\n'}
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>signed_txn</span> = <span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#dcdcaa' }}>sign_transaction</span>(<span style={{ color: '#9cdcfe' }}>approve_txn</span>, <span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>key</span>)
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#dcdcaa' }}>send_raw_transaction</span>(<span style={{ color: '#9cdcfe' }}>signed_txn</span>.<span style={{ color: '#9cdcfe' }}>rawTransaction</span>)
                      {'\n        '}
                      {'\n        '}<span style={{ color: '#7c7c7c' }}># Supply collateral</span>
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>supply_txn</span> = <span style={{ color: '#9cdcfe' }}>market_core</span>.<span style={{ color: '#9cdcfe' }}>functions</span>.<span style={{ color: '#dcdcaa' }}>supplyCollateral</span>(<span style={{ color: '#9cdcfe' }}>WETH_ADDRESS</span>, <span style={{ color: '#9cdcfe' }}>collateral_amount</span>, <span style={{ color: '#9cdcfe' }}>position_id</span>).<span style={{ color: '#dcdcaa' }}>build_transaction</span>({'{'}
                      {'\n            '}<span style={{ color: '#ce9178' }}>'from'</span>: <span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>address</span>,
                      {'\n            '}<span style={{ color: '#ce9178' }}>'nonce'</span>: <span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#dcdcaa' }}>get_transaction_count</span>(<span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>address</span>)
                      {'\n        '}{'}'}){'\n'}
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>signed_txn</span> = <span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#dcdcaa' }}>sign_transaction</span>(<span style={{ color: '#9cdcfe' }}>supply_txn</span>, <span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>key</span>)
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#dcdcaa' }}>send_raw_transaction</span>(<span style={{ color: '#9cdcfe' }}>signed_txn</span>.<span style={{ color: '#9cdcfe' }}>rawTransaction</span>)
                      {'\n        '}
                      {'\n        '}<span style={{ color: '#7c7c7c' }}># Step 3: Check credit limit and borrow</span>
                      {'\n        '}<span style={{ color: '#dcdcaa' }}>print</span>(<span style={{ color: '#ce9178' }}>"Checking credit limit..."</span>)
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>credit_limit</span> = <span style={{ color: '#9cdcfe' }}>market_core</span>.<span style={{ color: '#9cdcfe' }}>functions</span>.<span style={{ color: '#dcdcaa' }}>calculateCreditLimit</span>(<span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>address</span>, <span style={{ color: '#9cdcfe' }}>position_id</span>).<span style={{ color: '#dcdcaa' }}>call</span>()
                      {'\n        '}<span style={{ color: '#569cd6' }}>if</span> <span style={{ color: '#9cdcfe' }}>borrow_amount</span> {'>'} <span style={{ color: '#9cdcfe' }}>credit_limit</span>:
                      {'\n            '}<span style={{ color: '#569cd6' }}>raise</span> <span style={{ color: '#dcdcaa' }}>ValueError</span>(<span style={{ color: '#ce9178' }}>"Insufficient credit"</span>)
                      {'\n        '}
                      {'\n        '}<span style={{ color: '#dcdcaa' }}>print</span>(<span style={{ color: '#ce9178' }}>"Borrowing funds..."</span>)
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>borrow_txn</span> = <span style={{ color: '#9cdcfe' }}>market_core</span>.<span style={{ color: '#9cdcfe' }}>functions</span>.<span style={{ color: '#dcdcaa' }}>borrow</span>(<span style={{ color: '#9cdcfe' }}>position_id</span>, <span style={{ color: '#9cdcfe' }}>borrow_amount</span>, <span style={{ color: '#9cdcfe' }}>credit_limit</span>, <span style={{ color: '#b5cea8' }}>100</span>).<span style={{ color: '#dcdcaa' }}>build_transaction</span>({'{'}
                      {'\n            '}<span style={{ color: '#ce9178' }}>'from'</span>: <span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>address</span>,
                      {'\n            '}<span style={{ color: '#ce9178' }}>'nonce'</span>: <span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#dcdcaa' }}>get_transaction_count</span>(<span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>address</span>)
                      {'\n        '}{'}'}){'\n'}
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>signed_txn</span> = <span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#dcdcaa' }}>sign_transaction</span>(<span style={{ color: '#9cdcfe' }}>borrow_txn</span>, <span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>key</span>)
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#dcdcaa' }}>send_raw_transaction</span>(<span style={{ color: '#9cdcfe' }}>signed_txn</span>.<span style={{ color: '#9cdcfe' }}>rawTransaction</span>)
                      {'\n        '}
                      {'\n        '}<span style={{ color: '#7c7c7c' }}># Step 4: Monitor position</span>
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>health_factor</span> = <span style={{ color: '#9cdcfe' }}>market_core</span>.<span style={{ color: '#9cdcfe' }}>functions</span>.<span style={{ color: '#dcdcaa' }}>healthFactor</span>(<span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>address</span>, <span style={{ color: '#9cdcfe' }}>position_id</span>).<span style={{ color: '#dcdcaa' }}>call</span>()
                      {'\n        '}<span style={{ color: '#dcdcaa' }}>print</span>(<span style={{ color: '#ce9178' }}>f"Health Factor: </span>{'{health_factor / 10**6}'}<span style={{ color: '#ce9178' }}>"</span>)
                      {'\n        '}
                      {'\n        '}<span style={{ color: '#7c7c7c' }}># Step 5: Repay and close (when ready)</span>
                      {'\n        '}<span style={{ color: '#dcdcaa' }}>print</span>(<span style={{ color: '#ce9178' }}>"Repaying debt..."</span>)
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>total_debt</span> = <span style={{ color: '#9cdcfe' }}>market_core</span>.<span style={{ color: '#9cdcfe' }}>functions</span>.<span style={{ color: '#dcdcaa' }}>calculateDebtWithInterest</span>(<span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>address</span>, <span style={{ color: '#9cdcfe' }}>position_id</span>).<span style={{ color: '#dcdcaa' }}>call</span>()
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>repay_amount</span> = <span style={{ color: '#9cdcfe' }}>total_debt</span> + <span style={{ color: '#b5cea8' }}>100</span> * <span style={{ color: '#b5cea8' }}>10</span>**<span style={{ color: '#b5cea8' }}>6</span>  <span style={{ color: '#7c7c7c' }}># Add buffer</span>
                      {'\n        '}
                      {'\n        '}<span style={{ color: '#7c7c7c' }}># Approve and repay USDC</span>
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>approve_txn</span> = <span style={{ color: '#9cdcfe' }}>usdc</span>.<span style={{ color: '#9cdcfe' }}>functions</span>.<span style={{ color: '#dcdcaa' }}>approve</span>(<span style={{ color: '#9cdcfe' }}>MARKET_CORE_ADDRESS</span>, <span style={{ color: '#9cdcfe' }}>repay_amount</span>).<span style={{ color: '#dcdcaa' }}>build_transaction</span>({'{'}
                      {'\n            '}<span style={{ color: '#ce9178' }}>'from'</span>: <span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>address</span>,
                      {'\n            '}<span style={{ color: '#ce9178' }}>'nonce'</span>: <span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#dcdcaa' }}>get_transaction_count</span>(<span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>address</span>)
                      {'\n        '}{'}'}){'\n'}
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>signed_txn</span> = <span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#dcdcaa' }}>sign_transaction</span>(<span style={{ color: '#9cdcfe' }}>approve_txn</span>, <span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>key</span>)
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#dcdcaa' }}>send_raw_transaction</span>(<span style={{ color: '#9cdcfe' }}>signed_txn</span>.<span style={{ color: '#9cdcfe' }}>rawTransaction</span>)
                      {'\n        '}
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>repay_txn</span> = <span style={{ color: '#9cdcfe' }}>market_core</span>.<span style={{ color: '#9cdcfe' }}>functions</span>.<span style={{ color: '#dcdcaa' }}>repay</span>(<span style={{ color: '#9cdcfe' }}>position_id</span>, <span style={{ color: '#9cdcfe' }}>repay_amount</span>, <span style={{ color: '#9cdcfe' }}>total_debt</span>, <span style={{ color: '#b5cea8' }}>100</span>).<span style={{ color: '#dcdcaa' }}>build_transaction</span>({'{'}
                      {'\n            '}<span style={{ color: '#ce9178' }}>'from'</span>: <span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>address</span>,
                      {'\n            '}<span style={{ color: '#ce9178' }}>'nonce'</span>: <span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#dcdcaa' }}>get_transaction_count</span>(<span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>address</span>)
                      {'\n        '}{'}'}){'\n'}
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>signed_txn</span> = <span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#dcdcaa' }}>sign_transaction</span>(<span style={{ color: '#9cdcfe' }}>repay_txn</span>, <span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>key</span>)
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#dcdcaa' }}>send_raw_transaction</span>(<span style={{ color: '#9cdcfe' }}>signed_txn</span>.<span style={{ color: '#9cdcfe' }}>rawTransaction</span>)
                      {'\n        '}
                      {'\n        '}<span style={{ color: '#7c7c7c' }}># Withdraw all collateral</span>
                      {'\n        '}<span style={{ color: '#dcdcaa' }}>print</span>(<span style={{ color: '#ce9178' }}>"Withdrawing collateral..."</span>)
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>expected_credit_limit</span> = <span style={{ color: '#9cdcfe' }}>market_core</span>.<span style={{ color: '#9cdcfe' }}>functions</span>.<span style={{ color: '#dcdcaa' }}>calculateCreditLimit</span>(<span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>address</span>, <span style={{ color: '#9cdcfe' }}>position_id</span>).<span style={{ color: '#dcdcaa' }}>call</span>()
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>withdraw_txn</span> = <span style={{ color: '#9cdcfe' }}>market_core</span>.<span style={{ color: '#9cdcfe' }}>functions</span>.<span style={{ color: '#dcdcaa' }}>withdrawCollateral</span>({'\n'}
                      {'            '}<span style={{ color: '#9cdcfe' }}>WETH_ADDRESS</span>, <span style={{ color: '#9cdcfe' }}>collateral_amount</span>, <span style={{ color: '#9cdcfe' }}>position_id</span>, <span style={{ color: '#9cdcfe' }}>expected_credit_limit</span>, <span style={{ color: '#b5cea8' }}>100</span>{'\n'}
                      {'        '}).<span style={{ color: '#dcdcaa' }}>build_transaction</span>({'{'}
                      {'\n            '}<span style={{ color: '#ce9178' }}>'from'</span>: <span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>address</span>,
                      {'\n            '}<span style={{ color: '#ce9178' }}>'nonce'</span>: <span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#dcdcaa' }}>get_transaction_count</span>(<span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>address</span>)
                      {'\n        '}{'}'}){'\n'}
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>signed_txn</span> = <span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#dcdcaa' }}>sign_transaction</span>(<span style={{ color: '#9cdcfe' }}>withdraw_txn</span>, <span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>key</span>)
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#dcdcaa' }}>send_raw_transaction</span>(<span style={{ color: '#9cdcfe' }}>signed_txn</span>.<span style={{ color: '#9cdcfe' }}>rawTransaction</span>)
                      {'\n        '}
                      {'\n        '}<span style={{ color: '#dcdcaa' }}>print</span>(<span style={{ color: '#ce9178' }}>"Borrowing cycle completed successfully!"</span>)
                      {'\n        '}
                      {'\n    '}<span style={{ color: '#569cd6' }}>except</span> <span style={{ color: '#dcdcaa' }}>Exception</span> <span style={{ color: '#569cd6' }}>as</span> <span style={{ color: '#9cdcfe' }}>e</span>:
                      {'\n        '}<span style={{ color: '#dcdcaa' }}>print</span>(<span style={{ color: '#ce9178' }}>f"Error in borrowing cycle: </span>{'{e}'}<span style={{ color: '#ce9178' }}>"</span>)
                      {'\n\n'}
                      <span style={{ color: '#569cd6' }}>if</span> <span style={{ color: '#9cdcfe' }}>__name__</span> == <span style={{ color: '#ce9178' }}>"__main__"</span>:
                      {'\n    '}<span style={{ color: '#dcdcaa' }}>complete_borrowing_cycle</span>()
                    </code></pre>
                  </div>
                )}

                <div style={{
                  background: 'rgba(20, 184, 166, 0.1)',
                  borderLeft: '4px solid #14b8a6',
                  padding: '1rem',
                  margin: '1rem 0',
                  borderRadius: '0 6px 6px 0'
                }}>
                  <strong style={{ color: '#14b8a6' }}>💡 Pro Tips for Borrowers:</strong>
                  <ul style={{ marginTop: '0.5rem', paddingLeft: '1rem' }}>
                    <li>Conservative Borrowing: Never borrow more than 70-80% of your maximum credit limit</li>
                    <li>Health Factor Monitoring: Set up alerts when health factor drops below 1.5</li>
                    <li>Interest Management: Monitor interest accrual and repay periodically</li>
                    <li>Price Correlation: Avoid using highly correlated assets as collateral and borrow target</li>
                    <li>Liquidity Buffer: Keep some borrowed funds available for emergency collateral additions</li>
                    <li>Position Sizing: Start with smaller positions to learn the system before scaling up</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Mobile Responsive CSS */}
      <style>{`
        .main-content {
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
        
        @media (max-width: 768px) {
          .docs-content {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          
          .sidebar {
            display: none !important;
          }
          
          .main-content {
            padding: 1.5rem !important;
            margin: 0 !important;
            min-width: 0 !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
          
          .docs-header h1 {
            font-size: 2rem !important;
          }
          
          .grid-2, .grid-3 {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          
          .container {
            padding: 0 1rem !important;
            max-width: none !important;
            margin: 0 !important;
          }
          
          main {
            padding: 100px 0 64px 0 !important;
          }
          
          pre {
            font-size: 0.75rem !important;
            overflow-x: auto !important;
            white-space: pre-wrap !important;
            word-break: break-all !important;
          }
          
          h1 {
            font-size: 2.5rem !important;
          }
          
          h2 {
            font-size: 1.5rem !important;
          }
          
          h3 {
            font-size: 1.25rem !important;
          }
          
          div, section, p {
            min-width: 0 !important;
            max-width: 100% !important;
          }
        }
        
        @media (max-width: 480px) {
          .container {
            padding: 0 0.75rem !important;
            max-width: none !important;
          }
          
          .main-content {
            padding: 1rem !important;
          }
          
          main {
            padding: 90px 0 64px 0 !important;
          }
          
          h1 {
            font-size: 2rem !important;
          }
          
          .grid-2, .grid-3 {
            gap: 0.75rem !important;
          }
          
          pre {
            font-size: 0.7rem !important;
          }
        }

        /* Custom scrollbar styling for code containers */
        .code-container::-webkit-scrollbar {
          height: 8px;
        }
        .code-container::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }
        .code-container::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }
        .code-container::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
        
        /* Firefox scrollbar styling */
        .code-container {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
}

export default BorrowerGuide;