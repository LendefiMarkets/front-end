import { useState } from 'react';
import Footer from './components/layout/Footer';

function LenderGuide() {
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
                Lender
              </span> Guide
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#9ca3af', maxWidth: '600px', margin: '0 auto' }}>
              Complete guide to earning yield by providing liquidity in Lendefi Markets
            </p>
          </div>

          {/* Docs Content */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '250px 1fr',
            gap: '3rem'
          }}
          className="docs-content">
            {/* Sidebar */}
            <aside style={{
              background: 'rgba(17, 24, 39, 0.5)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              height: 'fit-content',
              position: 'sticky',
              top: '120px'
            }}
            className="sidebar">
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
                  <a href="#deposit-liquidity" style={{ color: '#9ca3af', textDecoration: 'none', padding: '0.5rem', display: 'block', borderRadius: '6px', transition: 'all 0.3s' }}>1. Deposit Liquidity</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#revenue-streams" style={{ color: '#9ca3af', textDecoration: 'none', padding: '0.5rem', display: 'block', borderRadius: '6px', transition: 'all 0.3s' }}>2. Earn Revenue</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#monitor-performance" style={{ color: '#9ca3af', textDecoration: 'none', padding: '0.5rem', display: 'block', borderRadius: '6px', transition: 'all 0.3s' }}>3. Monitor Performance</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#claim-rewards" style={{ color: '#9ca3af', textDecoration: 'none', padding: '0.5rem', display: 'block', borderRadius: '6px', transition: 'all 0.3s' }}>4. Claim Rewards</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#withdraw-liquidity" style={{ color: '#9ca3af', textDecoration: 'none', padding: '0.5rem', display: 'block', borderRadius: '6px', transition: 'all 0.3s' }}>5. Withdraw Liquidity</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#strategies" style={{ color: '#9ca3af', textDecoration: 'none', padding: '0.5rem', display: 'block', borderRadius: '6px', transition: 'all 0.3s' }}>Yield Strategies</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#risk-considerations" style={{ color: '#9ca3af', textDecoration: 'none', padding: '0.5rem', display: 'block', borderRadius: '6px', transition: 'all 0.3s' }}>Risk Considerations</a>
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
                  As a lender in Lendefi Markets, you provide liquidity to isolated lending markets and earn yield from multiple revenue streams. Your funds are represented by ERC-4626 compliant vault shares that automatically appreciate in value as the market generates revenue.
                </p>
                
                <div style={{
                  background: 'rgba(20, 184, 166, 0.1)',
                  borderLeft: '4px solid #14b8a6',
                  padding: '1rem',
                  margin: '1rem 0',
                  borderRadius: '0 6px 6px 0'
                }}>
                  <strong style={{ color: '#14b8a6' }}>Key Benefits for Lenders:</strong>
                  <ul style={{ marginTop: '0.5rem', paddingLeft: '1rem' }}>
                    <li>Earn competitive APY on your digital assets</li>
                    <li>Multiple revenue streams: interest, flash loans, liquidations</li>
                    <li>ERC-4626 standard for maximum DeFi compatibility</li>
                    <li>Isolated markets reduce systemic risk</li>
                    <li>Governance rewards for long-term participants</li>
                    <li>Instant liquidity through vault shares</li>
                  </ul>
                </div>

                <div style={{
                  background: 'linear-gradient(135deg, #10b981, #14b8a6)',
                  color: 'white',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  padding: '1rem',
                  borderRadius: '8px',
                  textAlign: 'center',
                  margin: '1rem 0'
                }}>
                  🎯 Typical APY Range: 3-12%
                </div>

                <div style={{
                  background: 'rgba(59, 130, 246, 0.1)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '8px',
                  padding: '16px',
                  margin: '1rem 0'
                }}>
                  <strong style={{ color: '#3b82f6' }}>How Lender Returns Work:</strong>
                  <p style={{ marginTop: '0.5rem', color: '#d1d5db' }}>
                    When you deposit assets, you receive vault shares that represent your claim on the growing pool. As borrowers pay interest, flash loan fees are collected, and liquidations occur, the total value of the vault increases. Your shares automatically become worth more of the underlying asset over time.
                  </p>
                </div>
              </section>

              <section id="getting-started" style={{ marginTop: '3rem' }}>
                <h2 style={{ color: '#14b8a6', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  Getting Started
                </h2>
                <p style={{ marginBottom: '1rem', color: '#d1d5db' }}>
                  Lending in Lendefi Markets is straightforward and follows the ERC-4626 vault standard that you may be familiar with from other DeFi protocols.
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
                      <li>Supported base assets (USDC, USD1, USDT, etc.)</li>
                      <li>Web3 wallet (MetaMask, WalletConnect, etc.)</li>
                      <li>ETH for gas fees</li>
                      <li>Understanding of DeFi risks</li>
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
                      <li>Compare APY rates across different markets</li>
                      <li>Check market utilization and TVL</li>
                      <li>Review the market owner's reputation</li>
                      <li>Assess collateral asset diversity</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="deposit-liquidity" style={{ marginTop: '3rem' }}>
                <h2 style={{ color: '#14b8a6', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  Step 1: Deposit Liquidity
                </h2>
                <p style={{ marginBottom: '1rem', color: '#d1d5db' }}>
                  Start earning immediately by depositing your assets into any active Lendefi market. Your assets are converted to ERC-4626 vault shares that appreciate in value.
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
                  }}>Choose Your Market</div>
                  <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
                    Select the market that best fits your risk tolerance and yield expectations.
                  </p>
                  
                  <div style={{
                    background: 'rgba(245, 158, 11, 0.1)',
                    border: '1px solid rgba(245, 158, 11, 0.3)',
                    borderRadius: '8px',
                    padding: '16px'
                  }}>
                    <strong style={{ color: '#f59e0b' }}>Market Comparison Factors:</strong>
                    <ul style={{ color: '#d1d5db', paddingLeft: '1rem', marginTop: '0.5rem' }}>
                      <li><strong>APY:</strong> Current annual percentage yield</li>
                      <li><strong>TVL:</strong> Total value locked indicates market maturity</li>
                      <li><strong>Utilization:</strong> Higher utilization = higher yields but less liquidity</li>
                      <li><strong>Collateral Diversity:</strong> More collateral types = broader earning potential</li>
                      <li><strong>Market Owner:</strong> Reputation and track record</li>
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
                  }}>Deposit Your Assets</div>
                  <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
                    Supply base assets to the market vault and receive vault shares representing your position.
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
                      <span style={{ color: '#7c7c7c' }}>// Approve the market core contract to spend your tokens</span>{'\n'}
                      <span style={{ color: '#9cdcfe' }}>usdc</span>.<span style={{ color: '#dcdcaa' }}>approve</span>(<span style={{ color: '#dcdcaa' }}>address</span>(<span style={{ color: '#9cdcfe' }}>marketCore</span>), <span style={{ color: '#9cdcfe' }}>depositAmount</span>);{'\n\n'}
                      <span style={{ color: '#7c7c7c' }}>// Get expected shares from the vault</span>{'\n'}
                      <span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>expectedShares</span> = <span style={{ color: '#9cdcfe' }}>marketVault</span>.<span style={{ color: '#dcdcaa' }}>previewDeposit</span>(<span style={{ color: '#9cdcfe' }}>depositAmount</span>);{'\n\n'}
                      <span style={{ color: '#7c7c7c' }}>// Deposit with MEV protection</span>{'\n'}
                      <span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>depositLiquidity</span>({'\n'}
                      {'    '}<span style={{ color: '#9cdcfe' }}>depositAmount</span>,     <span style={{ color: '#7c7c7c' }}>// Amount of USDC to deposit</span>{'\n'}
                      {'    '}<span style={{ color: '#9cdcfe' }}>expectedShares</span>,    <span style={{ color: '#7c7c7c' }}>// Expected vault shares to receive</span>{'\n'}
                      {'    '}<span style={{ color: '#b5cea8' }}>100</span>               <span style={{ color: '#7c7c7c' }}>// Maximum 1% slippage</span>{'\n'}
                      );
                    </code></pre>
                  </div>

                  <div style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    borderRadius: '8px',
                    padding: '16px'
                  }}>
                    <strong style={{ color: '#10b981' }}>What Happens During Deposit:</strong>
                    <ul style={{ color: '#d1d5db', paddingLeft: '1rem', marginTop: '0.5rem' }}>
                      <li>Your base assets are transferred to the market vault</li>
                      <li>You receive ERC-4626 vault shares in return</li>
                      <li>Shares immediately start earning yield</li>
                      <li>MEV protection prevents front-running</li>
                      <li>You can track your position in real-time</li>
                    </ul>
                  </div>
                </div>

                <div style={{
                  background: 'rgba(245, 158, 11, 0.1)',
                  borderLeft: '4px solid #f59e0b',
                  padding: '1rem',
                  margin: '1rem 0',
                  borderRadius: '0 6px 6px 0'
                }}>
                  <strong style={{ color: '#f59e0b' }}>💡 Pro Tip:</strong> Start with smaller amounts to test the market and understand the yield patterns before making larger deposits. Each market has different risk/reward profiles.
                </div>
              </section>

              <section id="revenue-streams" style={{ marginTop: '3rem' }}>
                <h2 style={{ color: '#14b8a6', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  Step 2: Earn from Multiple Revenue Streams
                </h2>
                <p style={{ marginBottom: '1rem', color: '#d1d5db' }}>
                  Your vault shares automatically appreciate through various yield sources within the Lendefi ecosystem.
                </p>

                <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', margin: '24px 0' }}>
                  <div style={{
                    background: 'rgba(31, 41, 55, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '2rem',
                    textAlign: 'center',
                    transition: 'transform 0.3s, box-shadow 0.3s'
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💰</div>
                    <h4 style={{ color: '#10b981', marginBottom: '1rem' }}>Interest Income</h4>
                    <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>Primary yield from borrower interest payments. Rates adjust dynamically based on market utilization.</p>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#10b981' }}>
                      3-8% APY
                    </div>
                  </div>
                  
                  <div style={{
                    background: 'rgba(31, 41, 55, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '2rem',
                    textAlign: 'center',
                    transition: 'transform 0.3s, box-shadow 0.3s'
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
                    <h4 style={{ color: '#3b82f6', marginBottom: '1rem' }}>Flash Loan Fees</h4>
                    <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>Earn 9 basis points (0.09%) on every flash loan transaction in your market.</p>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#3b82f6' }}>
                      0.5-2% APY Boost
                    </div>
                  </div>
                  
                  <div style={{
                    background: 'rgba(31, 41, 55, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '2rem',
                    textAlign: 'center',
                    transition: 'transform 0.3s, box-shadow 0.3s'
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
                    <h4 style={{ color: '#f59e0b', marginBottom: '1rem' }}>Liquidation Proceeds</h4>
                    <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>Share in profits from liquidating unhealthy borrower positions.</p>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#f59e0b' }}>
                      Variable Boost
                    </div>
                  </div>
                </div>

                <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', margin: '24px 0' }}>
                  <div style={{
                    background: 'rgba(139, 92, 246, 0.1)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    borderRadius: '8px',
                    padding: '16px'
                  }}>
                    <h5 style={{ color: '#8b5cf6', marginBottom: '0.5rem' }}>🚀 Additional Yield Sources</h5>
                    <ul style={{ color: '#d1d5db', paddingLeft: '1rem' }}>
                      <li><strong>Governance Rewards:</strong> Long-term liquidity providers earn governance tokens</li>
                      <li><strong>Yield Boosts:</strong> Market owners can share additional profits</li>
                      <li><strong>Protocol Incentives:</strong> Special rewards during growth phases</li>
                      <li><strong>Compound Interest:</strong> All yields are automatically reinvested</li>
                    </ul>
                  </div>
                  
                  <div style={{
                    background: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    borderRadius: '8px',
                    padding: '16px'
                  }}>
                    <h5 style={{ color: '#3b82f6', marginBottom: '0.5rem' }}>📈 Yield Optimization</h5>
                    <ul style={{ color: '#d1d5db', paddingLeft: '1rem' }}>
                      <li><strong>Higher Utilization = Higher Yields:</strong> More borrowing activity increases returns</li>
                      <li><strong>Flash Loan Volume:</strong> Active arbitrage and liquidation bots boost fees</li>
                      <li><strong>Market Maturity:</strong> Established markets often provide more stable yields</li>
                      <li><strong>Collateral Diversity:</strong> More asset types increase earning opportunities</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="monitor-performance" style={{ marginTop: '3rem' }}>
                <h2 style={{ color: '#14b8a6', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  Step 3: Monitor Your Performance
                </h2>
                <p style={{ marginBottom: '1rem', color: '#d1d5db' }}>
                  Track your investment performance and understand market dynamics to optimize your lending strategy.
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
                  }}>Track Key Metrics</div>
                  <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
                    Monitor important performance indicators for your lending position.
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
                      <span style={{ color: '#7c7c7c' }}>// Check current supply rate (APY)</span>{'\n'}
                      <span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>currentAPY</span> = <span style={{ color: '#9cdcfe' }}>marketVault</span>.<span style={{ color: '#dcdcaa' }}>getSupplyRate</span>(); <span style={{ color: '#7c7c7c' }}>// Returns rate in 1e6 format</span>{'\n\n'}
                      <span style={{ color: '#7c7c7c' }}>// Check market utilization</span>{'\n'}
                      <span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>utilization</span> = <span style={{ color: '#9cdcfe' }}>marketVault</span>.<span style={{ color: '#dcdcaa' }}>utilization</span>(); <span style={{ color: '#7c7c7c' }}>// Percentage of funds borrowed</span>{'\n\n'}
                      <span style={{ color: '#7c7c7c' }}>// Check your current position value</span>{'\n'}
                      <span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>yourShares</span> = <span style={{ color: '#9cdcfe' }}>marketVault</span>.<span style={{ color: '#dcdcaa' }}>balanceOf</span>(<span style={{ color: '#9cdcfe' }}>yourAddress</span>);{'\n'}
                      <span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>currentValue</span> = <span style={{ color: '#9cdcfe' }}>marketVault</span>.<span style={{ color: '#dcdcaa' }}>previewRedeem</span>(<span style={{ color: '#9cdcfe' }}>yourShares</span>);{'\n\n'}
                      <span style={{ color: '#7c7c7c' }}>// Check total vault performance</span>{'\n'}
                      <span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>totalVaultValue</span> = <span style={{ color: '#9cdcfe' }}>marketVault</span>.<span style={{ color: '#dcdcaa' }}>totalBase</span>();{'\n'}
                      <span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>totalShares</span> = <span style={{ color: '#9cdcfe' }}>marketVault</span>.<span style={{ color: '#dcdcaa' }}>totalSupply</span>();
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
                  }}>Understand Market Dynamics</div>
                  <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
                    Learn how market conditions affect your returns.
                  </p>
                  
                  <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                    <div style={{
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      borderRadius: '8px',
                      padding: '16px'
                    }}>
                      <h5 style={{ color: '#10b981', marginBottom: '0.5rem' }}>🔥 High Yield Periods</h5>
                      <ul style={{ color: '#d1d5db', paddingLeft: '1rem' }}>
                        <li>High utilization (&gt;80%)</li>
                        <li>Active flash loan usage</li>
                        <li>Liquidation events</li>
                        <li>Market stress periods</li>
                      </ul>
                    </div>
                    
                    <div style={{
                      background: 'rgba(59, 130, 246, 0.1)',
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                      borderRadius: '8px',
                      padding: '16px'
                    }}>
                      <h5 style={{ color: '#3b82f6', marginBottom: '0.5rem' }}>📊 Market Health Indicators</h5>
                      <ul style={{ color: '#d1d5db', paddingLeft: '1rem' }}>
                        <li>Stable or growing TVL</li>
                        <li>Diverse borrower base</li>
                        <li>Active governance participation</li>
                        <li>Regular market owner updates</li>
                      </ul>
                    </div>
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
                  }}>Portfolio Management</div>
                  <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
                    Optimize your lending portfolio across multiple markets.
                  </p>
                  
                  <div style={{
                    background: 'rgba(245, 158, 11, 0.1)',
                    border: '1px solid rgba(245, 158, 11, 0.3)',
                    borderRadius: '8px',
                    padding: '16px'
                  }}>
                    <strong style={{ color: '#f59e0b' }}>Diversification Strategies:</strong>
                    <ul style={{ color: '#d1d5db', paddingLeft: '1rem', marginTop: '0.5rem' }}>
                      <li><strong>Multi-Market:</strong> Spread across different base assets (USDC, USD1, USDT)</li>
                      <li><strong>Risk Laddering:</strong> Mix conservative and aggressive markets</li>
                      <li><strong>Utilization Balance:</strong> Combine high-yield and high-liquidity positions</li>
                      <li><strong>Market Owner Diversity:</strong> Avoid concentration with single market owners</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="claim-rewards" style={{ marginTop: '3rem' }}>
                <h2 style={{ color: '#14b8a6', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  Step 4: Claim Governance Rewards
                </h2>
                <p style={{ marginBottom: '1rem', color: '#d1d5db' }}>
                  Long-term liquidity providers can earn additional governance tokens on top of regular yield.
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
                  }}>Check Reward Eligibility</div>
                  <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
                    Verify if you meet the requirements for governance token rewards.
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
                      <span style={{ color: '#7c7c7c' }}>// Check if you're eligible for rewards</span>{'\n'}
                      <span style={{ color: '#569cd6' }}>bool</span> <span style={{ color: '#9cdcfe' }}>isEligible</span> = <span style={{ color: '#9cdcfe' }}>marketVault</span>.<span style={{ color: '#dcdcaa' }}>isRewardable</span>(<span style={{ color: '#9cdcfe' }}>yourAddress</span>);{'\n\n'}
                      <span style={{ color: '#7c7c7c' }}>// View your current reward balance (if eligible)</span>{'\n'}
                      <span style={{ color: '#569cd6' }}>if</span> (<span style={{ color: '#9cdcfe' }}>isEligible</span>) {'{'}
                      {'\n    '}<span style={{ color: '#7c7c7c' }}>// Eligibility confirmed - rewards available</span>
                      {'\n'}{'}'}
                      <span style={{ color: '#569cd6' }}>else</span> {'{'}
                      {'\n    '}<span style={{ color: '#7c7c7c' }}>// Check requirements: minimum amount and time</span>
                      {'\n'}{'}'}
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
                  }}>Claim Your Rewards</div>
                  <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
                    Claim available governance tokens when eligible.
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
                      <span style={{ color: '#7c7c7c' }}>// Claim governance token rewards</span>{'\n'}
                      <span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>rewardAmount</span> = <span style={{ color: '#9cdcfe' }}>marketVault</span>.<span style={{ color: '#dcdcaa' }}>claimReward</span>();{'\n\n'}
                      <span style={{ color: '#7c7c7c' }}>// Note: Claiming resets your eligibility timer</span>{'\n'}
                      <span style={{ color: '#7c7c7c' }}>// You'll need to maintain minimum liquidity for the required period again</span>
                    </code></pre>
                  </div>

                  <div style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    borderRadius: '8px',
                    padding: '16px'
                  }}>
                    <strong style={{ color: '#10b981' }}>Reward Requirements:</strong>
                    <ul style={{ color: '#d1d5db', paddingLeft: '1rem', marginTop: '0.5rem' }}>
                      <li>Maintain minimum liquidity amount</li>
                      <li>Keep funds deposited for required time period</li>
                      <li>Active participation in governance (optional bonus)</li>
                      <li>Claiming resets the eligibility timer</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="withdraw-liquidity" style={{ marginTop: '3rem' }}>
                <h2 style={{ color: '#14b8a6', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  Step 5: Withdraw Your Liquidity
                </h2>
                <p style={{ marginBottom: '1rem', color: '#d1d5db' }}>
                  Exit your position using standard ERC-4626 withdrawal methods with MEV protection.
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
                  }}>Choose Withdrawal Method</div>
                  <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
                    Decide between withdrawing specific amounts or redeeming shares.
                  </p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
                    <div style={{
                      background: 'rgba(59, 130, 246, 0.1)',
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                      borderRadius: '8px',
                      padding: '16px'
                    }}>
                      <h5 style={{ color: '#3b82f6', marginBottom: '0.5rem' }}>💰 Withdraw Method</h5>
                      <p style={{ color: '#d1d5db', marginBottom: '1rem', fontSize: '0.875rem' }}>Specify the exact amount of underlying assets you want to receive.</p>
                      <div className="code-container" style={{
                        background: '#1f2937',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px',
                        padding: '1rem',
                        overflowX: 'auto'
                      }}>
                        <pre style={{ color: '#e5e7eb', fontFamily: 'Monaco, Menlo, monospace', fontSize: '0.75rem' }}><code>
                          <span style={{ color: '#7c7c7c' }}>// Withdraw specific amount</span>{'\n'}
                          <span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>withdrawAmount</span> = <span style={{ color: '#b5cea8' }}>1000e6</span>; <span style={{ color: '#7c7c7c' }}>// 1000 USDC</span>{'\n'}
                          <span style={{ color: '#9cdcfe' }}>marketVault</span>.<span style={{ color: '#dcdcaa' }}>withdraw</span>({'\n'}
                          {'    '}<span style={{ color: '#9cdcfe' }}>withdrawAmount</span>,{'\n'}
                          {'    '}<span style={{ color: '#9cdcfe' }}>yourAddress</span>,  <span style={{ color: '#7c7c7c' }}>// receiver</span>{'\n'}
                          {'    '}<span style={{ color: '#9cdcfe' }}>yourAddress</span>   <span style={{ color: '#7c7c7c' }}>// owner</span>{'\n'}
                          );
                        </code></pre>
                      </div>
                    </div>
                    
                    <div style={{
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      borderRadius: '8px',
                      padding: '16px'
                    }}>
                      <h5 style={{ color: '#10b981', marginBottom: '0.5rem' }}>🎫 Redeem Method</h5>
                      <p style={{ color: '#d1d5db', marginBottom: '1rem', fontSize: '0.875rem' }}>Redeem a specific number of vault shares for underlying assets.</p>
                      <div className="code-container" style={{
                        background: '#1f2937',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px',
                        padding: '1rem',
                        overflowX: 'auto'
                      }}>
                        <pre style={{ color: '#e5e7eb', fontFamily: 'Monaco, Menlo, monospace', fontSize: '0.75rem' }}><code>
                          <span style={{ color: '#7c7c7c' }}>// Redeem specific shares</span>{'\n'}
                          <span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>sharesToRedeem</span> = <span style={{ color: '#b5cea8' }}>1000e6</span>; <span style={{ color: '#7c7c7c' }}>// 1000 shares</span>{'\n'}
                          <span style={{ color: '#9cdcfe' }}>marketVault</span>.<span style={{ color: '#dcdcaa' }}>redeem</span>({'\n'}
                          {'    '}<span style={{ color: '#9cdcfe' }}>sharesToRedeem</span>,{'\n'}
                          {'    '}<span style={{ color: '#9cdcfe' }}>yourAddress</span>,  <span style={{ color: '#7c7c7c' }}>// receiver</span>{'\n'}
                          {'    '}<span style={{ color: '#9cdcfe' }}>yourAddress</span>   <span style={{ color: '#7c7c7c' }}>// owner</span>{'\n'}
                          );
                        </code></pre>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{
                  background: 'rgba(245, 158, 11, 0.1)',
                  borderLeft: '4px solid #f59e0b',
                  padding: '1rem',
                  margin: '1rem 0',
                  borderRadius: '0 6px 6px 0'
                }}>
                  <strong style={{ color: '#f59e0b' }}>⚠️ Liquidity Considerations:</strong> If market utilization is very high (&gt;90%), you may need to wait for borrowers to repay loans before making large withdrawals. Consider partial withdrawals or monitoring utilization rates.
                </div>
              </section>

              <section id="strategies" style={{ marginTop: '3rem' }}>
                <h2 style={{ color: '#14b8a6', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  Yield Strategies
                </h2>
                <p style={{ marginBottom: '1rem', color: '#d1d5db' }}>
                  Different approaches to maximize your lending returns in Lendefi Markets.
                </p>

                <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', margin: '24px 0' }}>
                  <div style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    borderRadius: '8px',
                    padding: '16px'
                  }}>
                    <h5 style={{ color: '#10b981', marginBottom: '0.5rem' }}>🛡️ Conservative Strategy</h5>
                    <ul style={{ color: '#d1d5db', paddingLeft: '1rem' }}>
                      <li><strong>Target:</strong> Stable 3-6% APY</li>
                      <li><strong>Markets:</strong> Established markets with strong TVL</li>
                      <li><strong>Assets:</strong> Stablecoin markets (USDC, USD1)</li>
                      <li><strong>Utilization:</strong> 50-70% range</li>
                      <li><strong>Benefits:</strong> Predictable returns, high liquidity</li>
                    </ul>
                  </div>
                  
                  <div style={{
                    background: 'rgba(245, 158, 11, 0.1)',
                    border: '1px solid rgba(245, 158, 11, 0.3)',
                    borderRadius: '8px',
                    padding: '16px'
                  }}>
                    <h5 style={{ color: '#f59e0b', marginBottom: '0.5rem' }}>⚡ Aggressive Strategy</h5>
                    <ul style={{ color: '#d1d5db', paddingLeft: '1rem' }}>
                      <li><strong>Target:</strong> 8-15% APY</li>
                      <li><strong>Markets:</strong> Newer markets, volatile assets</li>
                      <li><strong>Assets:</strong> ETH, BTC, altcoin markets</li>
                      <li><strong>Utilization:</strong> 80%+ range</li>
                      <li><strong>Benefits:</strong> Higher yields, more upside</li>
                    </ul>
                  </div>
                </div>

                <div style={{
                  background: 'rgba(139, 92, 246, 0.1)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  borderRadius: '8px',
                  padding: '16px'
                }}>
                  <h5 style={{ color: '#8b5cf6', marginBottom: '0.5rem' }}>🎯 Balanced Portfolio Approach</h5>
                  <ul style={{ color: '#d1d5db', paddingLeft: '1rem' }}>
                    <li><strong>70% Conservative:</strong> Stable markets for base yield</li>
                    <li><strong>20% Moderate:</strong> Mid-tier markets for enhanced returns</li>
                    <li><strong>10% Aggressive:</strong> High-yield opportunities for upside</li>
                    <li><strong>Rebalancing:</strong> Monthly review and adjustment</li>
                    <li><strong>Benefits:</strong> Risk-adjusted returns with diversification</li>
                  </ul>
                </div>
              </section>

              <section id="risk-considerations" style={{ marginTop: '3rem' }}>
                <h2 style={{ color: '#14b8a6', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  Risk Considerations
                </h2>
                <p style={{ marginBottom: '1rem', color: '#d1d5db' }}>
                  Understanding and managing risks is crucial for successful lending in DeFi markets.
                </p>

                <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', margin: '24px 0' }}>
                  <div style={{
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    borderRadius: '8px',
                    padding: '16px'
                  }}>
                    <h5 style={{ color: '#ef4444', marginBottom: '0.5rem' }}>⚠️ Primary Risks</h5>
                    <ul style={{ color: '#d1d5db', paddingLeft: '1rem' }}>
                      <li><strong>Liquidity Risk:</strong> High utilization may delay withdrawals</li>
                      <li><strong>Smart Contract Risk:</strong> Code bugs or vulnerabilities</li>
                      <li><strong>Market Owner Risk:</strong> Poor management decisions</li>
                      <li><strong>Oracle Risk:</strong> Price feed manipulation or failure</li>
                      <li><strong>Regulatory Risk:</strong> Changing legal landscape</li>
                    </ul>
                  </div>
                  
                  <div style={{
                    background: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    borderRadius: '8px',
                    padding: '16px'
                  }}>
                    <h5 style={{ color: '#3b82f6', marginBottom: '0.5rem' }}>🛡️ Risk Mitigation</h5>
                    <ul style={{ color: '#d1d5db', paddingLeft: '1rem' }}>
                      <li><strong>Diversification:</strong> Spread across multiple markets</li>
                      <li><strong>Due Diligence:</strong> Research market owners and contracts</li>
                      <li><strong>Position Sizing:</strong> Never invest more than you can afford to lose</li>
                      <li><strong>Monitor Utilization:</strong> Watch for liquidity constraints</li>
                      <li><strong>Stay Informed:</strong> Follow protocol updates and governance</li>
                    </ul>
                  </div>
                </div>

                <div style={{
                  background: 'rgba(245, 158, 11, 0.1)',
                  borderLeft: '4px solid #f59e0b',
                  padding: '1rem',
                  margin: '1rem 0',
                  borderRadius: '0 6px 6px 0'
                }}>
                  <strong style={{ color: '#f59e0b' }}>🔍 Red Flags to Watch:</strong>
                  <ul style={{ marginTop: '0.5rem', paddingLeft: '1rem', color: '#d1d5db' }}>
                    <li>Consistently high utilization (&gt;95%) with no new liquidity</li>
                    <li>Frequent oracle price deviations or failures</li>
                    <li>Market owner making frequent aggressive parameter changes</li>
                    <li>Declining TVL without clear market reasons</li>
                    <li>Multiple liquidation events in short timeframes</li>
                  </ul>
                </div>
              </section>

              <section id="examples" style={{ marginTop: '3rem' }}>
                <h2 style={{ color: '#14b8a6', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  Complete Example: USDC Lending
                </h2>
                
                {/* Tab Navigation */}
                <div style={{ 
                  display: 'flex', 
                  gap: '8px', 
                  marginBottom: '0', 
                  background: 'rgba(17, 24, 39, 0.5)',
                  padding: '8px',
                  borderRadius: '8px 8px 0 0',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderBottom: 'none'
                }}>
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
                    borderRadius: '0 0 8px 8px',
                    padding: '1.5rem',
                    margin: '0 0 1rem 0',
                    overflowX: 'auto'
                  }}>
                    <pre style={{ color: '#e5e7eb', fontFamily: 'Monaco, Menlo, monospace', fontSize: '0.875rem' }}><code>
                      <span style={{ color: '#7c7c7c' }}>// Complete USDC lending example</span>{'\n'}
                      <span style={{ color: '#569cd6' }}>contract</span> <span style={{ color: '#4ec9b0' }}>LenderExample</span> {'{'}
                      {'\n    '}<span style={{ color: '#4ec9b0' }}>IERC20</span> <span style={{ color: '#9cdcfe' }}>usdc</span> = <span style={{ color: '#4ec9b0' }}>IERC20</span>(<span style={{ color: '#ce9178' }}>0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48</span>);
                      {'\n    '}<span style={{ color: '#4ec9b0' }}>ILendefiCore</span> <span style={{ color: '#9cdcfe' }}>marketCore</span>;
                      {'\n    '}<span style={{ color: '#4ec9b0' }}>ILendefiMarketVault</span> <span style={{ color: '#9cdcfe' }}>marketVault</span>;
                      {'\n    '}
                      {'\n    '}<span style={{ color: '#569cd6' }}>function</span> <span style={{ color: '#dcdcaa' }}>depositLiquidity</span>() <span style={{ color: '#569cd6' }}>external</span> {'{'}
                      {'\n        '}<span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>depositAmount</span> = <span style={{ color: '#b5cea8' }}>10_000e6</span>; <span style={{ color: '#7c7c7c' }}>// 10,000 USDC</span>
                      {'\n        '}
                      {'\n        '}<span style={{ color: '#7c7c7c' }}>// 1. Approve the market core contract</span>
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>usdc</span>.<span style={{ color: '#dcdcaa' }}>approve</span>(<span style={{ color: '#dcdcaa' }}>address</span>(<span style={{ color: '#9cdcfe' }}>marketCore</span>), <span style={{ color: '#9cdcfe' }}>depositAmount</span>);
                      {'\n        '}
                      {'\n        '}<span style={{ color: '#7c7c7c' }}>// 2. Preview expected shares</span>
                      {'\n        '}<span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>expectedShares</span> = <span style={{ color: '#9cdcfe' }}>marketVault</span>.<span style={{ color: '#dcdcaa' }}>previewDeposit</span>(<span style={{ color: '#9cdcfe' }}>depositAmount</span>);
                      {'\n        '}
                      {'\n        '}<span style={{ color: '#7c7c7c' }}>// 3. Deposit with slippage protection</span>
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>depositLiquidity</span>(
                      {'\n            '}<span style={{ color: '#9cdcfe' }}>depositAmount</span>,
                      {'\n            '}<span style={{ color: '#9cdcfe' }}>expectedShares</span>,
                      {'\n            '}<span style={{ color: '#b5cea8' }}>100</span> <span style={{ color: '#7c7c7c' }}>// 1% max slippage</span>
                      {'\n        '});
                      {'\n        '}
                      {'\n        '}<span style={{ color: '#569cd6' }}>emit</span> <span style={{ color: '#dcdcaa' }}>LiquidityDeposited</span>(<span style={{ color: '#569cd6' }}>msg</span>.<span style={{ color: '#9cdcfe' }}>sender</span>, <span style={{ color: '#9cdcfe' }}>depositAmount</span>, <span style={{ color: '#9cdcfe' }}>expectedShares</span>);
                      {'\n    '}{'}'}
                      {'\n    '}
                      {'\n    '}<span style={{ color: '#569cd6' }}>function</span> <span style={{ color: '#dcdcaa' }}>monitorPerformance</span>() <span style={{ color: '#569cd6' }}>external</span> <span style={{ color: '#569cd6' }}>view</span> <span style={{ color: '#569cd6' }}>returns</span> (
                      {'\n        '}<span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>currentAPY</span>,
                      {'\n        '}<span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>utilization</span>,
                      {'\n        '}<span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>yourValue</span>,
                      {'\n        '}<span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>totalGrowth</span>
                      {'\n    '}) {'{'}
                      {'\n        '}<span style={{ color: '#7c7c7c' }}>// Current market metrics</span>
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>currentAPY</span> = <span style={{ color: '#9cdcfe' }}>marketVault</span>.<span style={{ color: '#dcdcaa' }}>getSupplyRate</span>();
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>utilization</span> = <span style={{ color: '#9cdcfe' }}>marketVault</span>.<span style={{ color: '#dcdcaa' }}>utilization</span>();
                      {'\n        '}
                      {'\n        '}<span style={{ color: '#7c7c7c' }}>// Your position value</span>
                      {'\n        '}<span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>yourShares</span> = <span style={{ color: '#9cdcfe' }}>marketVault</span>.<span style={{ color: '#dcdcaa' }}>balanceOf</span>(<span style={{ color: '#569cd6' }}>msg</span>.<span style={{ color: '#9cdcfe' }}>sender</span>);
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>yourValue</span> = <span style={{ color: '#9cdcfe' }}>marketVault</span>.<span style={{ color: '#dcdcaa' }}>previewRedeem</span>(<span style={{ color: '#9cdcfe' }}>yourShares</span>);
                      {'\n        '}
                      {'\n        '}<span style={{ color: '#7c7c7c' }}>// Calculate total vault growth</span>
                      {'\n        '}<span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>totalAssets</span> = <span style={{ color: '#9cdcfe' }}>marketVault</span>.<span style={{ color: '#dcdcaa' }}>totalBase</span>();
                      {'\n        '}<span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>totalShares</span> = <span style={{ color: '#9cdcfe' }}>marketVault</span>.<span style={{ color: '#dcdcaa' }}>totalSupply</span>();
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>totalGrowth</span> = <span style={{ color: '#9cdcfe' }}>totalAssets</span> &gt; <span style={{ color: '#9cdcfe' }}>totalShares</span> ? 
                      {'\n            '}((<span style={{ color: '#9cdcfe' }}>totalAssets</span> - <span style={{ color: '#9cdcfe' }}>totalShares</span>) * <span style={{ color: '#b5cea8' }}>10000</span>) / <span style={{ color: '#9cdcfe' }}>totalShares</span> : <span style={{ color: '#b5cea8' }}>0</span>; <span style={{ color: '#7c7c7c' }}>// Growth in bps</span>
                      {'\n    '}{'}'}
                      {'\n    '}
                      {'\n    '}<span style={{ color: '#569cd6' }}>function</span> <span style={{ color: '#dcdcaa' }}>withdrawLiquidity</span>(<span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>amount</span>) <span style={{ color: '#569cd6' }}>external</span> {'{'}
                      {'\n        '}<span style={{ color: '#7c7c7c' }}>// Check maximum withdrawal</span>
                      {'\n        '}<span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>maxWithdraw</span> = <span style={{ color: '#9cdcfe' }}>marketVault</span>.<span style={{ color: '#dcdcaa' }}>maxWithdraw</span>(<span style={{ color: '#569cd6' }}>msg</span>.<span style={{ color: '#9cdcfe' }}>sender</span>);
                      {'\n        '}<span style={{ color: '#569cd6' }}>require</span>(<span style={{ color: '#9cdcfe' }}>amount</span> &lt;= <span style={{ color: '#9cdcfe' }}>maxWithdraw</span>, <span style={{ color: '#ce9178' }}>"Insufficient liquidity"</span>);
                      {'\n        '}
                      {'\n        '}<span style={{ color: '#7c7c7c' }}>// Withdraw specific amount</span>
                      {'\n        '}<span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>receivedAmount</span> = <span style={{ color: '#9cdcfe' }}>marketVault</span>.<span style={{ color: '#dcdcaa' }}>withdraw</span>(
                      {'\n            '}<span style={{ color: '#9cdcfe' }}>amount</span>,
                      {'\n            '}<span style={{ color: '#569cd6' }}>msg</span>.<span style={{ color: '#9cdcfe' }}>sender</span>,
                      {'\n            '}<span style={{ color: '#569cd6' }}>msg</span>.<span style={{ color: '#9cdcfe' }}>sender</span>
                      {'\n        '});
                      {'\n        '}
                      {'\n        '}<span style={{ color: '#569cd6' }}>emit</span> <span style={{ color: '#dcdcaa' }}>LiquidityWithdrawn</span>(<span style={{ color: '#569cd6' }}>msg</span>.<span style={{ color: '#9cdcfe' }}>sender</span>, <span style={{ color: '#9cdcfe' }}>amount</span>, <span style={{ color: '#9cdcfe' }}>receivedAmount</span>);
                      {'\n    '}{'}'}
                      {'\n    '}
                      {'\n    '}<span style={{ color: '#7c7c7c' }}>// Events</span>
                      {'\n    '}<span style={{ color: '#569cd6' }}>event</span> <span style={{ color: '#dcdcaa' }}>LiquidityDeposited</span>(<span style={{ color: '#569cd6' }}>address</span> <span style={{ color: '#569cd6' }}>indexed</span> <span style={{ color: '#9cdcfe' }}>user</span>, <span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>amount</span>, <span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>shares</span>);
                      {'\n    '}<span style={{ color: '#569cd6' }}>event</span> <span style={{ color: '#dcdcaa' }}>LiquidityWithdrawn</span>(<span style={{ color: '#569cd6' }}>address</span> <span style={{ color: '#569cd6' }}>indexed</span> <span style={{ color: '#9cdcfe' }}>user</span>, <span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>requested</span>, <span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>received</span>);
                      {'\n    '}<span style={{ color: '#569cd6' }}>event</span> <span style={{ color: '#dcdcaa' }}>RewardsClaimed</span>(<span style={{ color: '#569cd6' }}>address</span> <span style={{ color: '#569cd6' }}>indexed</span> <span style={{ color: '#9cdcfe' }}>user</span>, <span style={{ color: '#569cd6' }}>uint256</span> <span style={{ color: '#9cdcfe' }}>amount</span>);
                      {'\n'}{'}'}
                    </code></pre>
                  </div>
                )}

                {/* JavaScript Tab */}
                {activeTab === 'javascript' && (
                  <div className="code-container" style={{
                    background: '#1f2937',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '0 0 8px 8px',
                    padding: '1.5rem',
                    margin: '0 0 1rem 0',
                    overflowX: 'auto'
                  }}>
                    <pre style={{ color: '#e5e7eb', fontFamily: 'Monaco, Menlo, monospace', fontSize: '0.875rem' }}><code>
                      <span style={{ color: '#7c7c7c' }}>// Complete USDC lending example using ethers.js</span>{'\n'}
                      <span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#4ec9b0' }}>{'{ ethers }'}</span> = <span style={{ color: '#dcdcaa' }}>require</span>(<span style={{ color: '#ce9178' }}>'ethers'</span>);{'\n'}
                      <span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>fs</span> = <span style={{ color: '#dcdcaa' }}>require</span>(<span style={{ color: '#ce9178' }}>'fs'</span>);{'\n\n'}
                      
                      <span style={{ color: '#569cd6' }}>async function</span> <span style={{ color: '#dcdcaa' }}>completeLendingCycle</span>() {'{'}{'\n'}
                      {'    '}<span style={{ color: '#ce9178' }}>"""Complete USDC lending lifecycle using Lendefi Markets"""</span>{'\n'}
                      {'    '}{'\n'}
                      {'    '}<span style={{ color: '#7c7c7c' }}>// Setup provider and wallet</span>{'\n'}
                      {'    '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>provider</span> = <span style={{ color: '#569cd6' }}>new</span> <span style={{ color: '#4ec9b0' }}>ethers.providers.JsonRpcProvider</span>(<span style={{ color: '#ce9178' }}>process.env.RPC_URL</span>);{'\n'}
                      {'    '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>wallet</span> = <span style={{ color: '#569cd6' }}>new</span> <span style={{ color: '#4ec9b0' }}>ethers.Wallet</span>(<span style={{ color: '#ce9178' }}>process.env.PRIVATE_KEY</span>, <span style={{ color: '#9cdcfe' }}>provider</span>);{'\n'}
                      {'    '}{'\n'}
                      {'    '}<span style={{ color: '#7c7c7c' }}>// Contract addresses and ABIs</span>{'\n'}
                      {'    '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>MARKET_CORE_ADDRESS</span> = <span style={{ color: '#ce9178' }}>'0x...'</span>;{'\n'}
                      {'    '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>USDC_ADDRESS</span> = <span style={{ color: '#ce9178' }}>'0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'</span>;{'\n'}
                      {'    '}{'\n'}
                      {'    '}<span style={{ color: '#7c7c7c' }}>// Load contract ABIs</span>{'\n'}
                      {'    '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>marketCoreABI</span> = <span style={{ color: '#4ec9b0' }}>JSON</span>.<span style={{ color: '#dcdcaa' }}>parse</span>(<span style={{ color: '#9cdcfe' }}>fs</span>.<span style={{ color: '#dcdcaa' }}>readFileSync</span>(<span style={{ color: '#ce9178' }}>'./abi/LendefiCore.json'</span>, <span style={{ color: '#ce9178' }}>'utf8'</span>));{'\n'}
                      {'    '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>erc20ABI</span> = <span style={{ color: '#4ec9b0' }}>JSON</span>.<span style={{ color: '#dcdcaa' }}>parse</span>(<span style={{ color: '#9cdcfe' }}>fs</span>.<span style={{ color: '#dcdcaa' }}>readFileSync</span>(<span style={{ color: '#ce9178' }}>'./abi/ERC20.json'</span>, <span style={{ color: '#ce9178' }}>'utf8'</span>));{'\n'}
                      {'    '}{'\n'}
                      {'    '}<span style={{ color: '#7c7c7c' }}>// Contract instances</span>{'\n'}
                      {'    '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>marketCore</span> = <span style={{ color: '#569cd6' }}>new</span> <span style={{ color: '#4ec9b0' }}>ethers.Contract</span>(<span style={{ color: '#9cdcfe' }}>MARKET_CORE_ADDRESS</span>, <span style={{ color: '#9cdcfe' }}>marketCoreABI</span>, <span style={{ color: '#9cdcfe' }}>wallet</span>);{'\n'}
                      {'    '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>usdc</span> = <span style={{ color: '#569cd6' }}>new</span> <span style={{ color: '#4ec9b0' }}>ethers.Contract</span>(<span style={{ color: '#9cdcfe' }}>USDC_ADDRESS</span>, <span style={{ color: '#9cdcfe' }}>erc20ABI</span>, <span style={{ color: '#9cdcfe' }}>wallet</span>);{'\n'}
                      {'    '}{'\n'}
                      {'    '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>depositAmount</span> = <span style={{ color: '#4ec9b0' }}>ethers</span>.<span style={{ color: '#9cdcfe' }}>utils</span>.<span style={{ color: '#dcdcaa' }}>parseUnits</span>(<span style={{ color: '#ce9178' }}>'10000'</span>, <span style={{ color: '#b5cea8' }}>6</span>); <span style={{ color: '#7c7c7c' }}>// 10,000 USDC</span>{'\n'}
                      {'    '}{'\n'}
                      {'    '}<span style={{ color: '#569cd6' }}>try</span> {'{'}{'\n'}
                      {'        '}<span style={{ color: '#7c7c7c' }}>// Step 1: Approve USDC spending</span>{'\n'}
                      {'        '}<span style={{ color: '#4ec9b0' }}>console</span>.<span style={{ color: '#dcdcaa' }}>log</span>(<span style={{ color: '#ce9178' }}>"Approving USDC..."</span>);{'\n'}
                      {'        '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>approveTx</span> = <span style={{ color: '#569cd6' }}>await</span> <span style={{ color: '#9cdcfe' }}>usdc</span>.<span style={{ color: '#dcdcaa' }}>approve</span>(<span style={{ color: '#9cdcfe' }}>MARKET_CORE_ADDRESS</span>, <span style={{ color: '#9cdcfe' }}>depositAmount</span>);{'\n'}
                      {'        '}<span style={{ color: '#569cd6' }}>await</span> <span style={{ color: '#9cdcfe' }}>approveTx</span>.<span style={{ color: '#dcdcaa' }}>wait</span>();{'\n'}
                      {'        '}{'\n'}
                      {'        '}<span style={{ color: '#7c7c7c' }}>// Step 2: Get vault address and preview deposit</span>{'\n'}
                      {'        '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>vaultAddress</span> = <span style={{ color: '#569cd6' }}>await</span> <span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>marketVault</span>();{'\n'}
                      {'        '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>vault</span> = <span style={{ color: '#569cd6' }}>new</span> <span style={{ color: '#4ec9b0' }}>ethers.Contract</span>(<span style={{ color: '#9cdcfe' }}>vaultAddress</span>, <span style={{ color: '#9cdcfe' }}>vaultABI</span>, <span style={{ color: '#9cdcfe' }}>wallet</span>);{'\n'}
                      {'        '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>expectedShares</span> = <span style={{ color: '#569cd6' }}>await</span> <span style={{ color: '#9cdcfe' }}>vault</span>.<span style={{ color: '#dcdcaa' }}>previewDeposit</span>(<span style={{ color: '#9cdcfe' }}>depositAmount</span>);{'\n'}
                      {'        '}{'\n'}
                      {'        '}<span style={{ color: '#7c7c7c' }}>// Step 3: Deposit liquidity with slippage protection</span>{'\n'}
                      {'        '}<span style={{ color: '#4ec9b0' }}>console</span>.<span style={{ color: '#dcdcaa' }}>log</span>(<span style={{ color: '#ce9178' }}>"Depositing liquidity..."</span>);{'\n'}
                      {'        '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>depositTx</span> = <span style={{ color: '#569cd6' }}>await</span> <span style={{ color: '#9cdcfe' }}>marketCore</span>.<span style={{ color: '#dcdcaa' }}>depositLiquidity</span>({'\n'}
                      {'            '}<span style={{ color: '#9cdcfe' }}>depositAmount</span>,{'\n'}
                      {'            '}<span style={{ color: '#9cdcfe' }}>expectedShares</span>,{'\n'}
                      {'            '}<span style={{ color: '#b5cea8' }}>100</span> <span style={{ color: '#7c7c7c' }}>// 1% max slippage</span>{'\n'}
                      {'        '});{'\n'}
                      {'        '}<span style={{ color: '#569cd6' }}>await</span> <span style={{ color: '#9cdcfe' }}>depositTx</span>.<span style={{ color: '#dcdcaa' }}>wait</span>();{'\n'}
                      {'        '}{'\n'}
                      {'        '}<span style={{ color: '#7c7c7c' }}>// Step 4: Monitor performance</span>{'\n'}
                      {'        '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>performance</span> = <span style={{ color: '#569cd6' }}>await</span> <span style={{ color: '#dcdcaa' }}>monitorPerformance</span>(<span style={{ color: '#9cdcfe' }}>vault</span>, <span style={{ color: '#9cdcfe' }}>wallet</span>.<span style={{ color: '#9cdcfe' }}>address</span>);{'\n'}
                      {'        '}<span style={{ color: '#4ec9b0' }}>console</span>.<span style={{ color: '#dcdcaa' }}>log</span>(<span style={{ color: '#ce9178' }}>"Performance:"</span>, <span style={{ color: '#9cdcfe' }}>performance</span>);{'\n'}
                      {'        '}{'\n'}
                      {'        '}<span style={{ color: '#7c7c7c' }}>// Step 5: Withdraw (when ready)</span>{'\n'}
                      {'        '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>withdrawAmount</span> = <span style={{ color: '#4ec9b0' }}>ethers</span>.<span style={{ color: '#9cdcfe' }}>utils</span>.<span style={{ color: '#dcdcaa' }}>parseUnits</span>(<span style={{ color: '#ce9178' }}>'5000'</span>, <span style={{ color: '#b5cea8' }}>6</span>); <span style={{ color: '#7c7c7c' }}>// 5,000 USDC</span>{'\n'}
                      {'        '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>withdrawTx</span> = <span style={{ color: '#569cd6' }}>await</span> <span style={{ color: '#9cdcfe' }}>vault</span>.<span style={{ color: '#dcdcaa' }}>withdraw</span>({'\n'}
                      {'            '}<span style={{ color: '#9cdcfe' }}>withdrawAmount</span>,{'\n'}
                      {'            '}<span style={{ color: '#9cdcfe' }}>wallet</span>.<span style={{ color: '#9cdcfe' }}>address</span>,{'\n'}
                      {'            '}<span style={{ color: '#9cdcfe' }}>wallet</span>.<span style={{ color: '#9cdcfe' }}>address</span>{'\n'}
                      {'        '});{'\n'}
                      {'        '}<span style={{ color: '#569cd6' }}>await</span> <span style={{ color: '#9cdcfe' }}>withdrawTx</span>.<span style={{ color: '#dcdcaa' }}>wait</span>();{'\n'}
                      {'        '}{'\n'}
                      {'        '}<span style={{ color: '#4ec9b0' }}>console</span>.<span style={{ color: '#dcdcaa' }}>log</span>(<span style={{ color: '#ce9178' }}>"Lending cycle completed successfully!"</span>);{'\n'}
                      {'    '}{'}'} <span style={{ color: '#569cd6' }}>catch</span> (<span style={{ color: '#9cdcfe' }}>error</span>) {'{'}{'\n'}
                      {'        '}<span style={{ color: '#4ec9b0' }}>console</span>.<span style={{ color: '#dcdcaa' }}>error</span>(<span style={{ color: '#ce9178' }}>"Error in lending cycle:"</span>, <span style={{ color: '#9cdcfe' }}>error</span>);{'\n'}
                      {'    '}{'}'}{'\n'}
                      {'}'}{'\n\n'}
                      
                      <span style={{ color: '#569cd6' }}>async function</span> <span style={{ color: '#dcdcaa' }}>monitorPerformance</span>(<span style={{ color: '#9cdcfe' }}>vault</span>, <span style={{ color: '#9cdcfe' }}>userAddress</span>) {'{'}{'\n'}
                      {'    '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>currentAPY</span> = <span style={{ color: '#569cd6' }}>await</span> <span style={{ color: '#9cdcfe' }}>vault</span>.<span style={{ color: '#dcdcaa' }}>getSupplyRate</span>();{'\n'}
                      {'    '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>utilization</span> = <span style={{ color: '#569cd6' }}>await</span> <span style={{ color: '#9cdcfe' }}>vault</span>.<span style={{ color: '#dcdcaa' }}>utilization</span>();{'\n'}
                      {'    '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>yourShares</span> = <span style={{ color: '#569cd6' }}>await</span> <span style={{ color: '#9cdcfe' }}>vault</span>.<span style={{ color: '#dcdcaa' }}>balanceOf</span>(<span style={{ color: '#9cdcfe' }}>userAddress</span>);{'\n'}
                      {'    '}<span style={{ color: '#569cd6' }}>const</span> <span style={{ color: '#9cdcfe' }}>yourValue</span> = <span style={{ color: '#569cd6' }}>await</span> <span style={{ color: '#9cdcfe' }}>vault</span>.<span style={{ color: '#dcdcaa' }}>previewRedeem</span>(<span style={{ color: '#9cdcfe' }}>yourShares</span>);{'\n'}
                      {'    '}{'\n'}
                      {'    '}<span style={{ color: '#569cd6' }}>return</span> {'{'}{'\n'}
                      {'        '}<span style={{ color: '#9cdcfe' }}>currentAPY</span>: <span style={{ color: '#4ec9b0' }}>ethers</span>.<span style={{ color: '#9cdcfe' }}>utils</span>.<span style={{ color: '#dcdcaa' }}>formatUnits</span>(<span style={{ color: '#9cdcfe' }}>currentAPY</span>, <span style={{ color: '#b5cea8' }}>4</span>) + <span style={{ color: '#ce9178' }}>'%'</span>,{'\n'}
                      {'        '}<span style={{ color: '#9cdcfe' }}>utilization</span>: <span style={{ color: '#4ec9b0' }}>ethers</span>.<span style={{ color: '#9cdcfe' }}>utils</span>.<span style={{ color: '#dcdcaa' }}>formatUnits</span>(<span style={{ color: '#9cdcfe' }}>utilization</span>, <span style={{ color: '#b5cea8' }}>4</span>) + <span style={{ color: '#ce9178' }}>'%'</span>,{'\n'}
                      {'        '}<span style={{ color: '#9cdcfe' }}>yourValue</span>: <span style={{ color: '#4ec9b0' }}>ethers</span>.<span style={{ color: '#9cdcfe' }}>utils</span>.<span style={{ color: '#dcdcaa' }}>formatUnits</span>(<span style={{ color: '#9cdcfe' }}>yourValue</span>, <span style={{ color: '#b5cea8' }}>6</span>) + <span style={{ color: '#ce9178' }}>' USDC'</span>{'\n'}
                      {'    '}{'}'}; {'\n'}
                      {'}'}{'\n\n'}
                      
                      <span style={{ color: '#7c7c7c' }}>// Run the example</span>{'\n'}
                      <span style={{ color: '#dcdcaa' }}>completeLendingCycle</span>().<span style={{ color: '#dcdcaa' }}>catch</span>(<span style={{ color: '#4ec9b0' }}>console</span>.<span style={{ color: '#9cdcfe' }}>error</span>);{'\n'}
                    </code></pre>
                  </div>
                )}

                {/* Python Tab */}
                {activeTab === 'python' && (
                  <div className="code-container" style={{
                    background: '#1f2937',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '0 0 8px 8px',
                    padding: '1.5rem',
                    margin: '0 0 1rem 0',
                    overflowX: 'auto'
                  }}>
                    <pre style={{ color: '#e5e7eb', fontFamily: 'Monaco, Menlo, monospace', fontSize: '0.875rem' }}><code>
                      <span style={{ color: '#7c7c7c' }}># Complete USDC lending example using web3.py</span>{'\n'}
                      <span style={{ color: '#569cd6' }}>from</span> <span style={{ color: '#9cdcfe' }}>web3</span> <span style={{ color: '#569cd6' }}>import</span> <span style={{ color: '#9cdcfe' }}>Web3</span>{'\n'}
                      <span style={{ color: '#569cd6' }}>from</span> <span style={{ color: '#9cdcfe' }}>eth_account</span> <span style={{ color: '#569cd6' }}>import</span> <span style={{ color: '#9cdcfe' }}>Account</span>{'\n'}
                      <span style={{ color: '#569cd6' }}>import</span> <span style={{ color: '#9cdcfe' }}>json</span>{'\n'}
                      <span style={{ color: '#569cd6' }}>import</span> <span style={{ color: '#9cdcfe' }}>os</span>{'\n\n'}
                      
                      <span style={{ color: '#569cd6' }}>def</span> <span style={{ color: '#dcdcaa' }}>complete_lending_cycle</span>():
                      {'\n    '}<span style={{ color: '#ce9178' }}>"""Complete USDC lending lifecycle using Lendefi Markets"""</span>
                      {'\n    '}
                      {'\n    '}<span style={{ color: '#7c7c7c' }}># Setup Web3 connection</span>
                      {'\n    '}<span style={{ color: '#9cdcfe' }}>w3</span> = <span style={{ color: '#dcdcaa' }}>Web3</span>(<span style={{ color: '#dcdcaa' }}>Web3</span>.<span style={{ color: '#9cdcfe' }}>HTTPProvider</span>(<span style={{ color: '#9cdcfe' }}>os</span>.<span style={{ color: '#9cdcfe' }}>getenv</span>(<span style={{ color: '#ce9178' }}>'RPC_URL'</span>)))
                      {'\n    '}<span style={{ color: '#9cdcfe' }}>account</span> = <span style={{ color: '#dcdcaa' }}>Account</span>.<span style={{ color: '#dcdcaa' }}>from_key</span>(<span style={{ color: '#9cdcfe' }}>os</span>.<span style={{ color: '#9cdcfe' }}>getenv</span>(<span style={{ color: '#ce9178' }}>'PRIVATE_KEY'</span>))
                      {'\n    '}
                      {'\n    '}<span style={{ color: '#7c7c7c' }}># Contract addresses and ABIs</span>
                      {'\n    '}<span style={{ color: '#9cdcfe' }}>MARKET_CORE_ADDRESS</span> = <span style={{ color: '#ce9178' }}>'0x...'</span>
                      {'\n    '}<span style={{ color: '#9cdcfe' }}>USDC_ADDRESS</span> = <span style={{ color: '#ce9178' }}>'0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'</span>
                      {'\n    '}
                      {'\n    '}<span style={{ color: '#7c7c7c' }}># Load contract ABIs</span>
                      {'\n    '}<span style={{ color: '#569cd6' }}>with</span> <span style={{ color: '#dcdcaa' }}>open</span>(<span style={{ color: '#ce9178' }}>'./abi/LendefiCore.json'</span>) <span style={{ color: '#569cd6' }}>as</span> <span style={{ color: '#9cdcfe' }}>f</span>:
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>market_core_abi</span> = <span style={{ color: '#9cdcfe' }}>json</span>.<span style={{ color: '#dcdcaa' }}>load</span>(<span style={{ color: '#9cdcfe' }}>f</span>)
                      {'\n    '}
                      {'\n    '}<span style={{ color: '#569cd6' }}>with</span> <span style={{ color: '#dcdcaa' }}>open</span>(<span style={{ color: '#ce9178' }}>'./abi/ERC20.json'</span>) <span style={{ color: '#569cd6' }}>as</span> <span style={{ color: '#9cdcfe' }}>f</span>:
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>erc20_abi</span> = <span style={{ color: '#9cdcfe' }}>json</span>.<span style={{ color: '#dcdcaa' }}>load</span>(<span style={{ color: '#9cdcfe' }}>f</span>)
                      {'\n    '}
                      {'\n    '}<span style={{ color: '#7c7c7c' }}># Contract instances</span>
                      {'\n    '}<span style={{ color: '#9cdcfe' }}>market_core</span> = <span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#dcdcaa' }}>contract</span>(<span style={{ color: '#9cdcfe' }}>address</span>=<span style={{ color: '#9cdcfe' }}>MARKET_CORE_ADDRESS</span>, <span style={{ color: '#9cdcfe' }}>abi</span>=<span style={{ color: '#9cdcfe' }}>market_core_abi</span>)
                      {'\n    '}<span style={{ color: '#9cdcfe' }}>usdc</span> = <span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#dcdcaa' }}>contract</span>(<span style={{ color: '#9cdcfe' }}>address</span>=<span style={{ color: '#9cdcfe' }}>USDC_ADDRESS</span>, <span style={{ color: '#9cdcfe' }}>abi</span>=<span style={{ color: '#9cdcfe' }}>erc20_abi</span>)
                      {'\n    '}
                      {'\n    '}<span style={{ color: '#9cdcfe' }}>deposit_amount</span> = <span style={{ color: '#b5cea8' }}>10_000</span> * <span style={{ color: '#b5cea8' }}>10</span>**<span style={{ color: '#b5cea8' }}>6</span>  <span style={{ color: '#7c7c7c' }}># 10,000 USDC</span>
                      {'\n    '}
                      {'\n    '}<span style={{ color: '#569cd6' }}>try</span>:
                      {'\n        '}<span style={{ color: '#7c7c7c' }}># Step 1: Approve USDC spending</span>
                      {'\n        '}<span style={{ color: '#dcdcaa' }}>print</span>(<span style={{ color: '#ce9178' }}>"Approving USDC..."</span>)
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>approve_txn</span> = <span style={{ color: '#9cdcfe' }}>usdc</span>.<span style={{ color: '#9cdcfe' }}>functions</span>.<span style={{ color: '#dcdcaa' }}>approve</span>(<span style={{ color: '#9cdcfe' }}>MARKET_CORE_ADDRESS</span>, <span style={{ color: '#9cdcfe' }}>deposit_amount</span>).<span style={{ color: '#dcdcaa' }}>build_transaction</span>({'{'}
                      {'\n            '}<span style={{ color: '#ce9178' }}>'from'</span>: <span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>address</span>,
                      {'\n            '}<span style={{ color: '#ce9178' }}>'nonce'</span>: <span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#dcdcaa' }}>get_transaction_count</span>(<span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>address</span>)
                      {'\n        '}{'}'}
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>signed_approve</span> = <span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#dcdcaa' }}>sign_transaction</span>(<span style={{ color: '#9cdcfe' }}>approve_txn</span>, <span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>key</span>)
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>approve_hash</span> = <span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#dcdcaa' }}>send_raw_transaction</span>(<span style={{ color: '#9cdcfe' }}>signed_approve</span>.<span style={{ color: '#9cdcfe' }}>rawTransaction</span>)
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#dcdcaa' }}>wait_for_transaction_receipt</span>(<span style={{ color: '#9cdcfe' }}>approve_hash</span>)
                      {'\n        '}
                      {'\n        '}<span style={{ color: '#7c7c7c' }}># Step 2: Get vault address and preview deposit</span>
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>vault_address</span> = <span style={{ color: '#9cdcfe' }}>market_core</span>.<span style={{ color: '#9cdcfe' }}>functions</span>.<span style={{ color: '#dcdcaa' }}>marketVault</span>().<span style={{ color: '#dcdcaa' }}>call</span>()
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>vault</span> = <span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#dcdcaa' }}>contract</span>(<span style={{ color: '#9cdcfe' }}>address</span>=<span style={{ color: '#9cdcfe' }}>vault_address</span>, <span style={{ color: '#9cdcfe' }}>abi</span>=<span style={{ color: '#9cdcfe' }}>vault_abi</span>)
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>expected_shares</span> = <span style={{ color: '#9cdcfe' }}>vault</span>.<span style={{ color: '#9cdcfe' }}>functions</span>.<span style={{ color: '#dcdcaa' }}>previewDeposit</span>(<span style={{ color: '#9cdcfe' }}>deposit_amount</span>).<span style={{ color: '#dcdcaa' }}>call</span>()
                      {'\n        '}
                      {'\n        '}<span style={{ color: '#7c7c7c' }}># Step 3: Deposit liquidity with slippage protection</span>
                      {'\n        '}<span style={{ color: '#dcdcaa' }}>print</span>(<span style={{ color: '#ce9178' }}>"Depositing liquidity..."</span>)
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>deposit_txn</span> = <span style={{ color: '#9cdcfe' }}>market_core</span>.<span style={{ color: '#9cdcfe' }}>functions</span>.<span style={{ color: '#dcdcaa' }}>depositLiquidity</span>(
                      {'\n            '}<span style={{ color: '#9cdcfe' }}>deposit_amount</span>,
                      {'\n            '}<span style={{ color: '#9cdcfe' }}>expected_shares</span>,
                      {'\n            '}<span style={{ color: '#b5cea8' }}>100</span>  <span style={{ color: '#7c7c7c' }}># 1% max slippage</span>
                      {'\n        '}).<span style={{ color: '#dcdcaa' }}>build_transaction</span>({'{'}
                      {'\n            '}<span style={{ color: '#ce9178' }}>'from'</span>: <span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>address</span>,
                      {'\n            '}<span style={{ color: '#ce9178' }}>'nonce'</span>: <span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#dcdcaa' }}>get_transaction_count</span>(<span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>address</span>)
                      {'\n        '}{'}'}
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>signed_deposit</span> = <span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#dcdcaa' }}>sign_transaction</span>(<span style={{ color: '#9cdcfe' }}>deposit_txn</span>, <span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>key</span>)
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>deposit_hash</span> = <span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#dcdcaa' }}>send_raw_transaction</span>(<span style={{ color: '#9cdcfe' }}>signed_deposit</span>.<span style={{ color: '#9cdcfe' }}>rawTransaction</span>)
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#dcdcaa' }}>wait_for_transaction_receipt</span>(<span style={{ color: '#9cdcfe' }}>deposit_hash</span>)
                      {'\n        '}
                      {'\n        '}<span style={{ color: '#7c7c7c' }}># Step 4: Monitor performance</span>
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>performance</span> = <span style={{ color: '#dcdcaa' }}>monitor_performance</span>(<span style={{ color: '#9cdcfe' }}>vault</span>, <span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>address</span>)
                      {'\n        '}<span style={{ color: '#dcdcaa' }}>print</span>(<span style={{ color: '#ce9178' }}>"Performance:"</span>, <span style={{ color: '#9cdcfe' }}>performance</span>)
                      {'\n        '}
                      {'\n        '}<span style={{ color: '#7c7c7c' }}># Step 5: Withdraw (when ready)</span>
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>withdraw_amount</span> = <span style={{ color: '#b5cea8' }}>5_000</span> * <span style={{ color: '#b5cea8' }}>10</span>**<span style={{ color: '#b5cea8' }}>6</span>  <span style={{ color: '#7c7c7c' }}># 5,000 USDC</span>
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>withdraw_txn</span> = <span style={{ color: '#9cdcfe' }}>vault</span>.<span style={{ color: '#9cdcfe' }}>functions</span>.<span style={{ color: '#dcdcaa' }}>withdraw</span>(
                      {'\n            '}<span style={{ color: '#9cdcfe' }}>withdraw_amount</span>,
                      {'\n            '}<span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>address</span>,
                      {'\n            '}<span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>address</span>
                      {'\n        '}).<span style={{ color: '#dcdcaa' }}>build_transaction</span>({'{'}
                      {'\n            '}<span style={{ color: '#ce9178' }}>'from'</span>: <span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>address</span>,
                      {'\n            '}<span style={{ color: '#ce9178' }}>'nonce'</span>: <span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#dcdcaa' }}>get_transaction_count</span>(<span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>address</span>)
                      {'\n        '}{'}'}
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>signed_withdraw</span> = <span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#dcdcaa' }}>sign_transaction</span>(<span style={{ color: '#9cdcfe' }}>withdraw_txn</span>, <span style={{ color: '#9cdcfe' }}>account</span>.<span style={{ color: '#9cdcfe' }}>key</span>)
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>withdraw_hash</span> = <span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#dcdcaa' }}>send_raw_transaction</span>(<span style={{ color: '#9cdcfe' }}>signed_withdraw</span>.<span style={{ color: '#9cdcfe' }}>rawTransaction</span>)
                      {'\n        '}<span style={{ color: '#9cdcfe' }}>w3</span>.<span style={{ color: '#9cdcfe' }}>eth</span>.<span style={{ color: '#dcdcaa' }}>wait_for_transaction_receipt</span>(<span style={{ color: '#9cdcfe' }}>withdraw_hash</span>)
                      {'\n        '}
                      {'\n        '}<span style={{ color: '#dcdcaa' }}>print</span>(<span style={{ color: '#ce9178' }}>"Lending cycle completed successfully!"</span>)
                      {'\n    '}
                      {'\n    '}<span style={{ color: '#569cd6' }}>except</span> <span style={{ color: '#4ec9b0' }}>Exception</span> <span style={{ color: '#569cd6' }}>as</span> <span style={{ color: '#9cdcfe' }}>e</span>:
                      {'\n        '}<span style={{ color: '#dcdcaa' }}>print</span>(<span style={{ color: '#9cdcfe' }}>f</span><span style={{ color: '#ce9178' }}>"Error in lending cycle: </span>{'{e}'}<span style={{ color: '#ce9178' }}>"</span>)
                      {'\n'}
                      {'\n'}<span style={{ color: '#569cd6' }}>def</span> <span style={{ color: '#dcdcaa' }}>monitor_performance</span>(<span style={{ color: '#9cdcfe' }}>vault</span>, <span style={{ color: '#9cdcfe' }}>user_address</span>):
                      {'\n    '}<span style={{ color: '#9cdcfe' }}>current_apy</span> = <span style={{ color: '#9cdcfe' }}>vault</span>.<span style={{ color: '#9cdcfe' }}>functions</span>.<span style={{ color: '#dcdcaa' }}>getSupplyRate</span>().<span style={{ color: '#dcdcaa' }}>call</span>()
                      {'\n    '}<span style={{ color: '#9cdcfe' }}>utilization</span> = <span style={{ color: '#9cdcfe' }}>vault</span>.<span style={{ color: '#9cdcfe' }}>functions</span>.<span style={{ color: '#dcdcaa' }}>utilization</span>().<span style={{ color: '#dcdcaa' }}>call</span>()
                      {'\n    '}<span style={{ color: '#9cdcfe' }}>your_shares</span> = <span style={{ color: '#9cdcfe' }}>vault</span>.<span style={{ color: '#9cdcfe' }}>functions</span>.<span style={{ color: '#dcdcaa' }}>balanceOf</span>(<span style={{ color: '#9cdcfe' }}>user_address</span>).<span style={{ color: '#dcdcaa' }}>call</span>()
                      {'\n    '}<span style={{ color: '#9cdcfe' }}>your_value</span> = <span style={{ color: '#9cdcfe' }}>vault</span>.<span style={{ color: '#9cdcfe' }}>functions</span>.<span style={{ color: '#dcdcaa' }}>previewRedeem</span>(<span style={{ color: '#9cdcfe' }}>your_shares</span>).<span style={{ color: '#dcdcaa' }}>call</span>()
                      {'\n    '}
                      {'\n    '}<span style={{ color: '#569cd6' }}>return</span> {'{'}
                      {'\n        '}<span style={{ color: '#ce9178' }}>'current_apy'</span>: <span style={{ color: '#9cdcfe' }}>f</span><span style={{ color: '#ce9178' }}>"</span>{'{current_apy / 10000:.2f}'}<span style={{ color: '#ce9178' }}>%"</span>,
                      {'\n        '}<span style={{ color: '#ce9178' }}>'utilization'</span>: <span style={{ color: '#9cdcfe' }}>f</span><span style={{ color: '#ce9178' }}>"</span>{'{utilization / 10000:.2f}'}<span style={{ color: '#ce9178' }}>%"</span>,
                      {'\n        '}<span style={{ color: '#ce9178' }}>'your_value'</span>: <span style={{ color: '#9cdcfe' }}>f</span><span style={{ color: '#ce9178' }}>"</span>{'{your_value / 10**6:.2f}'}<span style={{ color: '#ce9178' }}> USDC"</span>
                      {'\n    '}{'}'}
                      {'\n'}
                      {'\n'}<span style={{ color: '#7c7c7c' }}># Run the example</span>
                      {'\n'}<span style={{ color: '#569cd6' }}>if</span> <span style={{ color: '#9cdcfe' }}>__name__</span> == <span style={{ color: '#ce9178' }}>"__main__"</span>:
                      {'\n    '}<span style={{ color: '#dcdcaa' }}>complete_lending_cycle</span>()
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
                  <strong style={{ color: '#14b8a6' }}>💡 Pro Tips for Lenders:</strong>
                  <ul style={{ marginTop: '0.5rem', paddingLeft: '1rem' }}>
                    <li>Monitor utilization rates - they directly impact your yields and liquidity</li>
                    <li>Consider the governance token rewards for long-term positions</li>
                    <li>Diversify across multiple markets to reduce concentration risk</li>
                    <li>Use partial withdrawals during high utilization periods</li>
                    <li>Track flash loan activity as it boosts your yields significantly</li>
                    <li>Stay engaged with market owner updates and governance decisions</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        background: 'rgba(17, 24, 39, 0.5)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '2rem 0',
        marginTop: '4rem',
        textAlign: 'center'
      }}>
        <div className="container">
          <p style={{ color: '#9ca3af' }}>
            © 2025 Lendefi Labs LLC. All rights reserved. | 
            <a href="/contact" style={{ color: '#14b8a6', textDecoration: 'none' }}> Contact</a> | 
            <a href="https://github.com/LendefiMarkets" style={{ color: '#14b8a6', textDecoration: 'none' }}> GitHub</a> | 
            <a href="https://x.com/LendefiMarkets" style={{ color: '#14b8a6', textDecoration: 'none' }}> X</a>
          </p>
        </div>
      </footer>

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

export default LenderGuide;