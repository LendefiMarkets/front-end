import React from 'react';
import { useNavigate } from 'react-router-dom';

function MarketOwnerGuide() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#111827', color: 'white' }}>
      {/* Header */}
      <header style={{ 
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)', 
        padding: '16px 0',
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(17, 24, 39, 0.9)',
        backdropFilter: 'blur(10px)',
        zIndex: 10
      }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button 
                onClick={() => navigate(-1)}
                style={{ 
                  background: 'none', 
                  border: '1px solid rgba(255, 255, 255, 0.2)', 
                  color: 'white', 
                  padding: '8px 16px', 
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                ← Back
              </button>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>
                Market Owner Guide
              </h1>
            </div>
            <div className="logo">
              <img src="/assets/images/logo.png" alt="Lendefi Markets" style={{ height: '32px', width: 'auto' }} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: '64px 0' }}>
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
                <li>✅ Core contract deployed for position management</li>
                <li>✅ ERC-4626 vault deployed for liquidity operations</li>
                <li>✅ Position vault deployed for collateral tracking</li>
                <li>✅ Assets module cloned with your configuration permissions</li>
                <li>✅ PoR feed deployed for proof-of-reserves</li>
                <li>✅ <strong>MANAGER_ROLE granted to you automatically</strong></li>
              </ul>
            </div>

            <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '8px', padding: '16px' }}>
              <strong style={{ color: '#10b981' }}>Required Information:</strong>
              <ul style={{ color: '#d1d5db', marginTop: '8px', paddingLeft: '20px' }}>
                <li><strong>Base Asset:</strong> Contract address of the token (must be whitelisted)</li>
                <li><strong>Market Name:</strong> Descriptive name (e.g., "USDC Lending Market")</li>
                <li><strong>Market Symbol:</strong> Short symbol (e.g., "lmUSDC")</li>
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
              This is the most critical step! You must configure <strong>ALL</strong> assets in your market - both your <strong>base asset</strong> (the token you're lending) 
              and <strong>every collateral asset</strong> that users can borrow against. Each asset needs proper risk parameters and oracle configuration.
            </p>

            <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '8px', padding: '16px', marginBottom: '24px' }}>
              <h5 style={{ color: '#60a5fa', marginBottom: '8px' }}>🔧 Required Configurations</h5>
              <ul style={{ fontSize: '0.875rem', color: '#d1d5db', paddingLeft: '16px' }}>
                <li><strong>Base Asset:</strong> The token users deposit for lending (e.g., USDC in a USDC market)</li>
                <li><strong>Collateral Assets:</strong> All tokens users can use as collateral (e.g., ETH, WBTC, DAI)</li>
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
                  <li><strong>Configure Base Asset</strong> - Set up your main lending token (e.g., USDC)</li>
                  <li><strong>Configure Each Collateral Asset</strong> - Add every token users can use as collateral</li>
                  <li><strong>Test Each Configuration</strong> - Use <code>getAssetPrice(address)</code> to verify oracles work</li>
                  <li><strong>Verify Settings</strong> - Use <code>getAssetInfo(address)</code> to confirm all parameters</li>
                  <li><strong>Check Oracle Count</strong> - Ensure you have enough active oracles per asset</li>
                </ol>
              </div>
            </div>

            {/* USDC Example */}
            <div style={{ marginBottom: '32px' }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '16px', color: '#fbbf24' }}>
                📋 Example: Configuring USDC as Base Asset
              </h4>
              
              <div style={{ backgroundColor: 'rgba(17, 24, 39, 0.8)', borderRadius: '8px', padding: '24px', fontFamily: 'monospace', fontSize: '0.875rem' }}>
                <div style={{ marginBottom: '16px', color: '#10b981' }}>// Sample configuration for USDC collateral</div>
                <div style={{ marginBottom: '8px' }}><span style={{ color: '#3b82f6' }}>Asset Address:</span> 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48</div>
                <div style={{ marginBottom: '16px', color: '#6b7280' }}>// Asset Configuration:</div>
                <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>active:</span> <span style={{ color: '#fbbf24' }}>1</span> <span style={{ color: '#6b7280' }}>// Enable the asset</span></div>
                <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>decimals:</span> <span style={{ color: '#fbbf24' }}>6</span> <span style={{ color: '#6b7280' }}>// USDC has 6 decimals</span></div>
                <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>borrowThreshold:</span> <span style={{ color: '#fbbf24' }}>8000</span> <span style={{ color: '#6b7280' }}>// 80% LTV (80 * 100)</span></div>
                <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>liquidationThreshold:</span> <span style={{ color: '#fbbf24' }}>8500</span> <span style={{ color: '#6b7280' }}>// 85% liquidation threshold</span></div>
                <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>maxSupplyThreshold:</span> <span style={{ color: '#fbbf24' }}>10000000000000</span> <span style={{ color: '#6b7280' }}>// 10M USDC (10M * 10^6)</span></div>
                <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>isolationDebtCap:</span> <span style={{ color: '#fbbf24' }}>5000000000000</span> <span style={{ color: '#6b7280' }}>// 5M USDC isolation cap</span></div>
                <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>assetMinimumOracles:</span> <span style={{ color: '#fbbf24' }}>1</span> <span style={{ color: '#6b7280' }}>// Require at least 1 oracle</span></div>
                <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>primaryOracleType:</span> <span style={{ color: '#fbbf24' }}>1</span> <span style={{ color: '#6b7280' }}>// 1 = Chainlink, 2 = Uniswap</span></div>
                <div style={{ marginBottom: '16px' }}><span style={{ color: '#3b82f6' }}>tier:</span> <span style={{ color: '#fbbf24' }}>0</span> <span style={{ color: '#6b7280' }}>// Tier 0 = STABLE (lowest risk)</span></div>
                
                <div style={{ marginBottom: '8px', color: '#6b7280' }}>// Chainlink Oracle Configuration:</div>
                <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>oracleUSD:</span> 0x8fFfFfd4AfB6115b954Bd326cbe7B4BA576818f6 <span style={{ color: '#6b7280' }}>// USDC/USD feed</span></div>
                <div style={{ marginBottom: '16px' }}><span style={{ color: '#3b82f6' }}>active:</span> <span style={{ color: '#fbbf24' }}>1</span> <span style={{ color: '#6b7280' }}>// Enable Chainlink oracle</span></div>
                
                <div style={{ marginBottom: '8px', color: '#6b7280' }}>// Uniswap Pool Configuration (optional):</div>
                <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>pool:</span> 0x0000000000000000000000000000000000000000 <span style={{ color: '#6b7280' }}>// Not using Uniswap for USDC</span></div>
                <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>twapPeriod:</span> <span style={{ color: '#fbbf24' }}>0</span></div>
                <div><span style={{ color: '#3b82f6' }}>active:</span> <span style={{ color: '#fbbf24' }}>0</span> <span style={{ color: '#6b7280' }}>// Disabled</span></div>
              </div>
            </div>

            {/* Configuration Tips */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
              <div style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.3)', borderRadius: '8px', padding: '16px' }}>
                <h5 style={{ color: '#a78bfa', marginBottom: '8px' }}>🎯 Risk Tiers</h5>
                <ul style={{ fontSize: '0.875rem', color: '#d1d5db', paddingLeft: '16px' }}>
                  <li><strong>Tier 0 (STABLE):</strong> USDC, USDT, DAI</li>
                  <li><strong>Tier 1 (BLUE_CHIP):</strong> WETH, WBTC</li>
                  <li><strong>Tier 2 (MID_CAP):</strong> UNI, LINK</li>
                  <li><strong>Tier 3 (LONG_TAIL):</strong> Other tokens</li>
                </ul>
              </div>
              
              <div style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '8px', padding: '16px' }}>
                <h5 style={{ color: '#fbbf24', marginBottom: '8px' }}>⚡ Oracle Types</h5>
                <ul style={{ fontSize: '0.875rem', color: '#d1d5db', paddingLeft: '16px' }}>
                  <li><strong>Chainlink:</strong> Most reliable for major assets</li>
                  <li><strong>Uniswap V3 TWAP:</strong> For newer/smaller tokens</li>
                  <li><strong>Dual Oracle:</strong> Use both for extra security</li>
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
                <div style={{ marginBottom: '4px' }}><span style={{ color: '#3b82f6' }}>getAssetPrice(</span><span style={{ color: '#fbbf24' }}>0xAssetAddress</span><span style={{ color: '#3b82f6' }}>)</span> - Returns price with 8 decimals</div>
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
              Bootstrap your market by depositing the initial liquidity. This provides the base assets that users can borrow against their collateral.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
              <div style={{ backgroundColor: 'rgba(17, 24, 39, 0.8)', borderRadius: '8px', padding: '20px' }}>
                <h5 style={{ color: '#10b981', marginBottom: '12px' }}>✅ Best Practices</h5>
                <ul style={{ fontSize: '0.875rem', color: '#d1d5db', paddingLeft: '16px' }}>
                  <li>Start with meaningful liquidity (e.g., $10K+)</li>
                  <li>Monitor utilization rates</li>
                  <li>Adjust interest rate curves if needed</li>
                  <li>Consider incentive programs</li>
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
                <li>Interest rate spreads between borrowing and lending</li>
                <li>Liquidation fees (when positions are liquidated)</li>
                <li>Protocol fees (if configured)</li>
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
                href="#" 
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
                href="#" 
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
                💬 Discord Community
              </a>
              <a 
                href="#" 
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
    </div>
  );
}

export default MarketOwnerGuide;