import { useState } from 'react';
import Footer from './components/layout/Footer';

function MarketOwnerGuide() {
  const [activeTab, setActiveTab] = useState('usdc');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#121212', color: 'white' }}>
      {/* Navbar */}
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
        <div className="container" style={{ maxWidth: '900px' }}>
          
          {/* Introduction */}
          <div className="glass-effect" style={{ marginBottom: '48px', padding: '32px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '16px', background: 'linear-gradient(135deg, #0ea5e9, #14b8a6)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              🚀 Welcome, Market Owner!
            </h2>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.6, color: '#d1d5db', marginBottom: '24px' }}>
              As a market owner in Lendefi Markets, you have the power to create and manage isolated lending markets for any ERC-20 asset. 
              This guide will walk you through the complete process from creation to launch.
            </p>
            <div style={{ 
              backgroundColor: 'rgba(59, 130, 246, 0.1)', 
              border: '1px solid rgba(59, 130, 246, 0.3)', 
              borderRadius: '8px', 
              padding: '16px',
              color: '#93c5fd'
            }}>
              <strong>🔥 New Feature:</strong> Market owners now automatically receive <code>MANAGER_ROLE</code> during market creation, 
              enabling immediate configuration without waiting for DAO governance!
            </div>
          </div>

          {/* Step 1: Create Market */}
          <div className="glass-effect" style={{ marginBottom: '48px', padding: '32px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ 
                backgroundColor: '#0ea5e9', 
                color: 'white', 
                borderRadius: '50%', 
                width: '32px', 
                height: '32px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '1rem',
                fontWeight: 'bold'
              }}>1</span>
              Create Your Market
            </h3>
            
            <p style={{ marginBottom: '24px', color: '#d1d5db' }}>
              The first step is to create your lending market through the factory contract. This establishes your isolated liquidity pool.
            </p>

            <div style={{ backgroundColor: 'rgba(17, 24, 39, 0.8)', borderRadius: '8px', padding: '24px', marginBottom: '24px' }}>
              <h4 style={{ fontSize: '1.125rem', marginBottom: '16px', color: '#fbbf24' }}>What happens during creation:</h4>
              <ul style={{ color: '#d1d5db', lineHeight: 1.6, paddingLeft: '20px' }}>
                <li>✅ Core contract deployed for borrower position management</li>
                <li>✅ ERC-4626 vault deployed for lender deposits and withdrawals</li>
                <li>✅ Position vault deployed for borrower collateral isolation</li>
                <li>✅ Assets module cloned with your configuration permissions</li>
                <li>✅ PoR feed deployed for proof-of-reserves tracking</li>
                <li>✅ <strong>MANAGER_ROLE granted to you automatically</strong></li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '8px', padding: '16px' }}>
              <strong style={{ color: '#10b981' }}>Required Information:</strong>
              <ul style={{ color: '#d1d5db', marginTop: '8px', paddingLeft: '20px' }}>
                <li><strong>Base Asset:</strong> Contract address of the token to be lent (must be whitelisted)</li>
                <li><strong>Market Name:</strong> Name for your yield token (e.g., "Lendefi Yield Token USDC")
                  <div style={{ fontSize: '0.8rem', color: '#9ca3af', marginTop: '4px' }}>
                    → This becomes your market's identifier and the ERC-4626 yield token name
                  </div>
                </li>
                <li><strong>Market Symbol:</strong> Symbol for your yield token (e.g., "LYTUSDC")
                  <div style={{ fontSize: '0.8rem', color: '#9ca3af', marginTop: '4px' }}>
                    → Lenders receive these tokens representing their supplied assets + earned interest
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 2: Configure Assets */}
          <div className="glass-effect" style={{ marginBottom: '48px', padding: '32px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ 
                backgroundColor: '#14b8a6', 
                color: 'white', 
                borderRadius: '50%', 
                width: '32px', 
                height: '32px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '1rem',
                fontWeight: 'bold'
              }}>2</span>
              Configure Your Assets Module
            </h3>
            
            <p style={{ marginBottom: '24px', color: '#d1d5db' }}>
              This is the most critical step! You must configure <strong>ALL</strong> assets in your market - both your <strong>base asset</strong> (the token lenders supply and borrowers receive) 
              and <strong>every collateral asset</strong> that borrowers can deposit to secure their loans. Each asset needs proper risk parameters and oracle configuration.
            </p>

            <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '8px', padding: '16px', marginBottom: '24px' }}>
              <h5 style={{ color: '#60a5fa', marginBottom: '8px' }}>🔧 Required Configurations</h5>
              <ul style={{ fontSize: '0.875rem', color: '#d1d5db', paddingLeft: '16px' }}>
                <li><strong>Base Asset:</strong> The token lenders supply and borrowers borrow (e.g., USDC in a USDC market)</li>
                <li><strong>Collateral Assets:</strong> Tokens borrowers deposit as security to borrow the base asset (e.g., ETH, WBTC, DAI)</li>
                <li><strong>Testing:</strong> Always test with <code>getAssetPrice()</code> and <code>getAssetInfo()</code> after configuration</li>
              </ul>
            </div>

            {/* Configuration Workflow */}
            <div style={{ marginBottom: '32px' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '16px', color: '#f59e0b' }}>
                🔄 Configuration Workflow
              </h4>
              
              <div style={{ backgroundColor: 'rgba(17, 24, 39, 0.8)', borderRadius: '8px', padding: '20px' }}>
                <ol style={{ color: '#d1d5db', lineHeight: 1.6, paddingLeft: '20px' }}>
                  <li><strong>Configure Base Asset</strong> - The token that will be supplied and borrowed (e.g., USDC)</li>
                  <li><strong>Configure Each Collateral Asset</strong> - All tokens borrowers can pledge as security</li>
                  <li><strong>Test Each Configuration</strong> - Use <code>getAssetPrice(address)</code> to verify oracles work</li>
                  <li><strong>Verify Settings</strong> - Use <code>getAssetInfo(address)</code> to confirm all parameters</li>
                  <li><strong>Check Oracle Count</strong> - Ensure you have enough active oracles per asset</li>
                </ol>
              </div>
            </div>

            {/* Configuration Examples with Tabs */}
            <div style={{ marginBottom: '32px' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '16px', color: '#fbbf24' }}>
                📋 Configuration Examples
              </h4>
              
              {/* Tab Navigation */}
              <div style={{ 
                display: 'flex', 
                borderBottom: '2px solid rgba(255, 255, 255, 0.1)', 
                marginBottom: '24px',
                gap: '8px'
              }}>
                <button
                  onClick={() => setActiveTab('usdc')}
                  style={{
                    padding: '12px 24px',
                    backgroundColor: activeTab === 'usdc' ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
                    border: 'none',
                    borderBottom: activeTab === 'usdc' ? '2px solid #3b82f6' : '2px solid transparent',
                    color: activeTab === 'usdc' ? '#60a5fa' : '#9ca3af',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    borderRadius: '6px 6px 0 0',
                    transition: 'all 0.2s'
                  }}
                >
                  💰 USDC (Base Asset)
                </button>
                <button
                  onClick={() => setActiveTab('weth')}
                  style={{
                    padding: '12px 24px',
                    backgroundColor: activeTab === 'weth' ? 'rgba(16, 185, 129, 0.2)' : 'transparent',
                    border: 'none',
                    borderBottom: activeTab === 'weth' ? '2px solid #10b981' : '2px solid transparent',
                    color: activeTab === 'weth' ? '#10b981' : '#9ca3af',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    borderRadius: '6px 6px 0 0',
                    transition: 'all 0.2s'
                  }}
                >
                  ⚡ WETH (Dual Oracle)
                </button>
                <button
                  onClick={() => setActiveTab('usd1')}
                  style={{
                    padding: '12px 24px',
                    backgroundColor: activeTab === 'usd1' ? 'rgba(245, 158, 11, 0.2)' : 'transparent',
                    border: 'none',
                    borderBottom: activeTab === 'usd1' ? '2px solid #f59e0b' : '2px solid transparent',
                    color: activeTab === 'usd1' ? '#fbbf24' : '#9ca3af',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    borderRadius: '6px 6px 0 0',
                    transition: 'all 0.2s'
                  }}
                >
                  🪙 USD1 (Stablecoin + Pool)
                </button>
              </div>
              
              {/* Tab Content */}
              {activeTab === 'usdc' && (
                <div style={{ backgroundColor: 'rgba(17, 24, 39, 0.8)', borderRadius: '8px', padding: '24px', fontFamily: 'monospace', fontSize: '0.875rem' }}>
                  <div style={{ marginBottom: '16px', color: '#10b981' }}>// Sample configuration for USDC as base asset</div>
                  <div style={{ marginBottom: '8px' }}><span style={{ color: '#3b82f6' }}>Asset Address:</span> 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48</div>
                  <div style={{ marginBottom: '16px', color: '#6b7280' }}>// Asset Configuration:</div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>active:</span> <span style={{ color: '#fbbf24' }}>1</span> <span style={{ color: '#6b7280' }}>// Enable the asset</span></div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>decimals:</span> <span style={{ color: '#fbbf24' }}>6</span> <span style={{ color: '#6b7280' }}>// USDC has 6 decimals</span></div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>borrowThreshold:</span> <span style={{ color: '#fbbf24' }}>950</span> <span style={{ color: '#6b7280' }}>// 95% LTV for stablecoin</span></div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>liquidationThreshold:</span> <span style={{ color: '#fbbf24' }}>980</span> <span style={{ color: '#6b7280' }}>// 98% liquidation threshold</span></div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>maxSupplyThreshold:</span> <span style={{ color: '#fbbf24' }}>1000000000e6</span> <span style={{ color: '#6b7280' }}>// 1B USDC (1B * 10^6)</span></div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>isolationDebtCap:</span> <span style={{ color: '#fbbf24' }}>0</span> <span style={{ color: '#6b7280' }}>// No isolation for base asset</span></div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>assetMinimumOracles:</span> <span style={{ color: '#fbbf24' }}>1</span> <span style={{ color: '#6b7280' }}>// Require at least 1 oracle</span></div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>primaryOracleType:</span> <span style={{ color: '#fbbf24' }}>CHAINLINK</span> <span style={{ color: '#6b7280' }}>// Use Chainlink as primary</span></div>
                  <div style={{ marginBottom: '16px' }}><span style={{ color: '#3b82f6' }}>tier:</span> <span style={{ color: '#fbbf24' }}>STABLE</span> <span style={{ color: '#6b7280' }}>// Tier 0 = STABLE (lowest risk)</span></div>
                  
                  <div style={{ marginBottom: '8px', color: '#6b7280' }}>// Chainlink Oracle Configuration:</div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>oracleUSD:</span> 0x8fFfFfd4AfB6115b954Bd326cbe7B4BA576818f6 <span style={{ color: '#6b7280' }}>// USDC/USD feed</span></div>
                  <div style={{ marginBottom: '16px' }}><span style={{ color: '#3b82f6' }}>active:</span> <span style={{ color: '#fbbf24' }}>1</span> <span style={{ color: '#6b7280' }}>// Enable Chainlink oracle</span></div>
                  
                  <div style={{ marginBottom: '8px', color: '#6b7280' }}>// Uniswap Pool Configuration (disabled for stablecoin):</div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>pool:</span> 0x0000000000000000000000000000000000000000 <span style={{ color: '#6b7280' }}>// Not using Uniswap</span></div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>twapPeriod:</span> <span style={{ color: '#fbbf24' }}>0</span></div>
                  <div><span style={{ color: '#3b82f6' }}>active:</span> <span style={{ color: '#fbbf24' }}>0</span> <span style={{ color: '#6b7280' }}>// Disabled</span></div>
                </div>
              )}
              
              {activeTab === 'weth' && (
                <div style={{ backgroundColor: 'rgba(17, 24, 39, 0.8)', borderRadius: '8px', padding: '24px', fontFamily: 'monospace', fontSize: '0.875rem' }}>
                  <div style={{ marginBottom: '16px', color: '#10b981' }}>// WETH configuration with both Chainlink and Uniswap oracles</div>
                  <div style={{ marginBottom: '8px' }}><span style={{ color: '#3b82f6' }}>Asset Address:</span> 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</div>
                  <div style={{ marginBottom: '16px', color: '#6b7280' }}>// Asset Configuration:</div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>active:</span> <span style={{ color: '#fbbf24' }}>1</span> <span style={{ color: '#6b7280' }}>// Enable the asset</span></div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>decimals:</span> <span style={{ color: '#fbbf24' }}>18</span> <span style={{ color: '#6b7280' }}>// WETH has 18 decimals</span></div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>borrowThreshold:</span> <span style={{ color: '#fbbf24' }}>800</span> <span style={{ color: '#6b7280' }}>// 80% LTV for blue chip</span></div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>liquidationThreshold:</span> <span style={{ color: '#fbbf24' }}>850</span> <span style={{ color: '#6b7280' }}>// 85% liquidation threshold</span></div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>maxSupplyThreshold:</span> <span style={{ color: '#fbbf24' }}>1000000 ether</span> <span style={{ color: '#6b7280' }}>// 1M WETH maximum</span></div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>isolationDebtCap:</span> <span style={{ color: '#fbbf24' }}>0</span> <span style={{ color: '#6b7280' }}>// No isolation (cross-collateral)</span></div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>assetMinimumOracles:</span> <span style={{ color: '#fbbf24' }}>1</span> <span style={{ color: '#6b7280' }}>// Require at least 1 oracle</span></div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>primaryOracleType:</span> <span style={{ color: '#fbbf24' }}>CHAINLINK</span> <span style={{ color: '#6b7280' }}>// Use Chainlink as primary</span></div>
                  <div style={{ marginBottom: '16px' }}><span style={{ color: '#3b82f6' }}>tier:</span> <span style={{ color: '#fbbf24' }}>CROSS_A</span> <span style={{ color: '#6b7280' }}>// Tier 1 = Blue chip asset</span></div>
                  
                  <div style={{ marginBottom: '8px', color: '#6b7280' }}>// Chainlink Oracle Configuration:</div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>oracleUSD:</span> 0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419 <span style={{ color: '#6b7280' }}>// ETH/USD price feed</span></div>
                  <div style={{ marginBottom: '16px' }}><span style={{ color: '#3b82f6' }}>active:</span> <span style={{ color: '#fbbf24' }}>1</span> <span style={{ color: '#6b7280' }}>// Enable Chainlink oracle</span></div>
                  
                  <div style={{ marginBottom: '8px', color: '#6b7280' }}>// Uniswap V3 Pool Configuration (dual oracle setup):</div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>pool:</span> 0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640 <span style={{ color: '#6b7280' }}>// WETH/USDC 0.05% pool</span></div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>twapPeriod:</span> <span style={{ color: '#fbbf24' }}>1800</span> <span style={{ color: '#6b7280' }}>// 30 minutes TWAP</span></div>
                  <div style={{ marginBottom: '8px' }}><span style={{ color: '#3b82f6' }}>active:</span> <span style={{ color: '#fbbf24' }}>1</span> <span style={{ color: '#6b7280' }}>// Enable Uniswap oracle</span></div>
                  
                  <div style={{ marginBottom: '8px', color: '#10b981' }}>// 🔥 Dual Oracle Benefits:</div>
                  <div style={{ marginBottom: '4px', color: '#6b7280' }}>// - Median price from both sources increases security</div>
                  <div style={{ marginBottom: '4px', color: '#6b7280' }}>// - Protection against oracle manipulation attacks</div>
                  <div style={{ marginBottom: '4px', color: '#6b7280' }}>// - Fallback if one oracle fails</div>
                  <div style={{ color: '#6b7280' }}>// - More accurate pricing during high volatility</div>
                </div>
              )}
              
              {activeTab === 'usd1' && (
                <div style={{ backgroundColor: 'rgba(17, 24, 39, 0.8)', borderRadius: '8px', padding: '24px', fontFamily: 'monospace', fontSize: '0.875rem' }}>
                  <div style={{ marginBottom: '16px', color: '#10b981' }}>// USD1 stablecoin with dual oracle for enhanced security</div>
                  <div style={{ marginBottom: '8px' }}><span style={{ color: '#3b82f6' }}>Asset Address:</span> 0x8d0D000Ee44948FC98c9B98A4FA4921476f08B0d</div>
                  <div style={{ marginBottom: '16px', color: '#6b7280' }}>// Asset Configuration:</div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>active:</span> <span style={{ color: '#fbbf24' }}>1</span> <span style={{ color: '#6b7280' }}>// Enable the asset</span></div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>decimals:</span> <span style={{ color: '#fbbf24' }}>18</span> <span style={{ color: '#6b7280' }}>// USD1 has 18 decimals (unlike USDC/USDT)</span></div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>borrowThreshold:</span> <span style={{ color: '#fbbf24' }}>950</span> <span style={{ color: '#6b7280' }}>// 95% LTV for stablecoin</span></div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>liquidationThreshold:</span> <span style={{ color: '#fbbf24' }}>980</span> <span style={{ color: '#6b7280' }}>// 98% liquidation threshold</span></div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>maxSupplyThreshold:</span> <span style={{ color: '#fbbf24' }}>1000000000e18</span> <span style={{ color: '#6b7280' }}>// 1B USD1 (1B * 10^18)</span></div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>isolationDebtCap:</span> <span style={{ color: '#fbbf24' }}>0</span> <span style={{ color: '#6b7280' }}>// No isolation for stablecoin</span></div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>assetMinimumOracles:</span> <span style={{ color: '#fbbf24' }}>1</span> <span style={{ color: '#6b7280' }}>// Require at least 1 oracle</span></div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>primaryOracleType:</span> <span style={{ color: '#fbbf24' }}>CHAINLINK</span> <span style={{ color: '#6b7280' }}>// Use Chainlink as primary</span></div>
                  <div style={{ marginBottom: '16px' }}><span style={{ color: '#3b82f6' }}>tier:</span> <span style={{ color: '#fbbf24' }}>STABLE</span> <span style={{ color: '#6b7280' }}>// Tier 0 = STABLE (lowest risk)</span></div>
                  
                  <div style={{ marginBottom: '8px', color: '#6b7280' }}>// Chainlink Oracle Configuration:</div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>oracleUSD:</span> 0xF0d9bb015Cd7BfAb877B7156146dc09Bf461370d <span style={{ color: '#6b7280' }}>// USD1/USD feed</span></div>
                  <div style={{ marginBottom: '16px' }}><span style={{ color: '#3b82f6' }}>active:</span> <span style={{ color: '#fbbf24' }}>1</span> <span style={{ color: '#6b7280' }}>// Enable Chainlink oracle</span></div>
                  
                  <div style={{ marginBottom: '8px', color: '#6b7280' }}>// Uniswap V3 Pool Configuration (dual oracle for extra security):</div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>pool:</span> 0x4e68Ccd3E89f51C3074ca5072bbAC773960dFa36 <span style={{ color: '#6b7280' }}>// WETH/USD1 pool</span></div>
                  <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>twapPeriod:</span> <span style={{ color: '#fbbf24' }}>1800</span> <span style={{ color: '#6b7280' }}>// 30 minutes TWAP</span></div>
                  <div style={{ marginBottom: '8px' }}><span style={{ color: '#3b82f6' }}>active:</span> <span style={{ color: '#fbbf24' }}>1</span> <span style={{ color: '#6b7280' }}>// Enable Uniswap oracle</span></div>
                  
                  <div style={{ marginBottom: '8px', color: '#f59e0b' }}>// ⚠️ Important USD1 Notes:</div>
                  <div style={{ marginBottom: '4px', color: '#6b7280' }}>// - USD1 has 18 decimals (different from USDC/USDT with 6)</div>
                  <div style={{ marginBottom: '4px', color: '#6b7280' }}>// - Uses WETH/USD1 pool for Uniswap pricing</div>
                  <div style={{ marginBottom: '4px', color: '#6b7280' }}>// - Dual oracle recommended for newer stablecoins</div>
                  <div style={{ color: '#6b7280' }}>// - Monitor both oracle feeds for price stability</div>
                </div>
              )}
            </div>

            {/* Configuration Tips */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
              <div style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.3)', borderRadius: '8px', padding: '16px' }}>
                <h5 style={{ color: '#a78bfa', marginBottom: '8px' }}>🎯 Risk Tiers</h5>
                <ul style={{ fontSize: '0.875rem', color: '#d1d5db', paddingLeft: '16px' }}>
                  <li><strong>STABLE (0):</strong> USDC, USDT, DAI - 95% LTV</li>
                  <li><strong>CROSS_A (1):</strong> WETH, WBTC - 80% LTV</li>
                  <li><strong>CROSS_B (2):</strong> UNI, LINK - 70% LTV</li>
                  <li><strong>ISOLATED (3):</strong> Other tokens - 60% LTV</li>
                </ul>
              </div>
              
              <div style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '8px', padding: '16px' }}>
                <h5 style={{ color: '#fbbf24', marginBottom: '8px' }}>⚡ Oracle Setup Guide</h5>
                <ul style={{ fontSize: '0.875rem', color: '#d1d5db', paddingLeft: '16px' }}>
                  <li><strong>Single Oracle:</strong> Chainlink for stablecoins</li>
                  <li><strong>Dual Oracle:</strong> Chainlink + Uniswap for volatile assets</li>
                  <li><strong>Median Price:</strong> Protocol uses median when both active</li>
                  <li><strong>TWAP Period:</strong> 1800s (30min) recommended</li>
                </ul>
              </div>
            </div>

            {/* Testing Section */}
            <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '8px', padding: '16px', marginBottom: '24px' }}>
              <h5 style={{ color: '#10b981', marginBottom: '12px' }}>🧪 Testing Your Configuration</h5>
              <p style={{ fontSize: '0.875rem', color: '#d1d5db', marginBottom: '12px' }}>
                After configuring each asset, always test with these functions:
              </p>
              <div style={{ fontFamily: 'monospace', fontSize: '0.8rem', backgroundColor: 'rgba(17, 24, 39, 0.5)', padding: '12px', borderRadius: '4px' }}>
                <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>getAssetPrice(</span><span style={{ color: '#fbbf24' }}>0xAssetAddress</span><span style={{ color: '#3b82f6' }}>)</span> - Returns price with 6 decimals</div>
                <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>getAssetInfo(</span><span style={{ color: '#fbbf24' }}>0xAssetAddress</span><span style={{ color: '#3b82f6' }}>)</span> - Returns full config</div>
                <div><span style={{ color: '#3b82f6' }}>getOracleCount(</span><span style={{ color: '#fbbf24' }}>0xAssetAddress</span><span style={{ color: '#3b82f6' }}>)</span> - Returns active oracles</div>
              </div>
              <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '8px' }}>
                💡 Use the Asset Management tab in your market dashboard to test these functions!
              </p>
            </div>

            <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '8px', padding: '16px' }}>
              <h5 style={{ color: '#f87171', marginBottom: '8px' }}>⚠️ Important Notes</h5>
              <ul style={{ fontSize: '0.875rem', color: '#d1d5db', paddingLeft: '16px' }}>
                <li>Configure ALL assets (base + collateral) before launching</li>
                <li>Always test with small amounts first</li>
                <li>Ensure oracle feeds are active and up-to-date</li>
                <li>Conservative LTV ratios reduce liquidation risk</li>
                <li>Monitor your market regularly after launch</li>
              </ul>
            </div>
          </div>

          {/* Step 3: Deposit Liquidity */}
          <div className="glass-effect" style={{ marginBottom: '48px', padding: '32px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ 
                backgroundColor: '#f59e0b', 
                color: 'white', 
                borderRadius: '50%', 
                width: '32px', 
                height: '32px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '1rem',
                fontWeight: 'bold'
              }}>3</span>
              Deposit Initial Liquidity
            </h3>
            
            <p style={{ marginBottom: '24px', color: '#d1d5db' }}>
              Bootstrap your market by supplying the initial liquidity. This provides the base asset pool that borrowers can draw from when they deposit collateral.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
              <div style={{ backgroundColor: 'rgba(17, 24, 39, 0.8)', borderRadius: '8px', padding: '20px' }}>
                <h5 style={{ color: '#10b981', marginBottom: '12px' }}>✅ Best Practices</h5>
                <ul style={{ fontSize: '0.875rem', color: '#d1d5db', paddingLeft: '16px' }}>
                  <li>Supply meaningful initial liquidity (e.g., $10K+)</li>
                  <li>Monitor utilization rate (borrowed/supplied)</li>
                  <li>Watch borrow/supply APY spread</li>
                  <li>Consider LP incentives to attract lenders</li>
                </ul>
              </div>
              
              <div style={{ backgroundColor: 'rgba(17, 24, 39, 0.8)', borderRadius: '8px', padding: '20px' }}>
                <h5 style={{ color: '#3b82f6', marginBottom: '12px' }}>📊 What to Monitor</h5>
                <ul style={{ fontSize: '0.875rem', color: '#d1d5db', paddingLeft: '16px' }}>
                  <li>Total Value Locked (TVL)</li>
                  <li>Utilization rate</li>
                  <li>Supply and borrow APY</li>
                  <li>Number of active positions</li>
                </ul>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '8px', padding: '16px' }}>
              <strong style={{ color: '#10b981' }}>💡 Pro Tip:</strong> You earn fees as the market owner! 
              Your market generates revenue through:
              <ul style={{ color: '#d1d5db', marginTop: '8px', paddingLeft: '20px' }}>
                <li>Interest rate spreads (borrowers pay more than lenders receive)</li>
                <li>Liquidation penalties (when under-collateralized positions are liquidated)</li>
                <li>Flash loan fees (0.09% per transaction)</li>
              </ul>
            </div>
          </div>

          {/* Quick Reference */}
          <div className="glass-effect" style={{ marginBottom: '48px', padding: '32px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', color: '#fbbf24' }}>
              🔧 Quick Configuration Reference
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <h5 style={{ color: '#a78bfa', marginBottom: '12px' }}>Common LTV Ratios</h5>
                <div style={{ fontSize: '0.875rem', color: '#d1d5db' }}>
                  <div style={{ marginBottom: '4px' }}><strong>Stablecoins:</strong> 80-90%</div>
                  <div style={{ marginBottom: '4px' }}><strong>Blue Chips:</strong> 70-80%</div>
                  <div style={{ marginBottom: '4px' }}><strong>Mid Caps:</strong> 60-70%</div>
                  <div><strong>Long Tail:</strong> 40-60%</div>
                </div>
              </div>
              
              <div>
                <h5 style={{ color: '#10b981', marginBottom: '12px' }}>Asset Decimals Reference</h5>
                <div style={{ fontSize: '0.875rem', color: '#d1d5db' }}>
                  <div style={{ marginBottom: '4px' }}><strong>USDC, USDT:</strong> 6 decimals</div>
                  <div style={{ marginBottom: '4px' }}><strong>WBTC:</strong> 8 decimals</div>
                  <div style={{ marginBottom: '4px' }}><strong>ETH, DAI, most ERC-20:</strong> 18 decimals</div>
                </div>
              </div>
            </div>
          </div>

          {/* Support & Resources */}
          <div className="glass-effect" style={{ padding: '32px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>
              🤝 Need Help?
            </h3>
            <p style={{ marginBottom: '24px', color: '#d1d5db' }}>
              Our community and documentation are here to support you in building successful lending markets.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a 
                href="/docs" 
                style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '8px',
                  color: '#60a5fa',
                  textDecoration: 'none'
                }}
              >
                📚 Documentation
              </a>
              <a 
                href="https://x.com/LendefiMarkets" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  backgroundColor: 'rgba(139, 92, 246, 0.1)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  borderRadius: '8px',
                  color: '#a78bfa',
                  textDecoration: 'none'
                }}
              >
                💬 X Community
              </a>
              <a 
                href="https://github.com/LendefiMarkets" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '8px',
                  color: '#10b981',
                  textDecoration: 'none'
                }}
              >
                🐙 GitHub
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default MarketOwnerGuide;