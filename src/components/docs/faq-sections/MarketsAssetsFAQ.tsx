import React from 'react';
import FAQItem from '../FAQItem';

const MarketsAssetsFAQ: React.FC = () => {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2 style={{
        color: '#14b8a6',
        marginBottom: '2rem',
        fontSize: '1.8rem',
        borderBottom: '2px solid rgba(20, 184, 166, 0.3)',
        paddingBottom: '0.5rem'
      }}>
        💰 Markets & Assets
      </h2>
      
      <FAQItem question="What's the difference between isolated and cross-collateral markets?">
        <p style={{ marginBottom: '1rem' }}><strong>Cross-Collateral Mode:</strong></p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Use multiple collateral assets in one position</li>
          <li style={{ marginBottom: '0.5rem' }}>Higher borrowing capacity</li>
          <li style={{ marginBottom: '0.5rem' }}>Suitable for established assets (WETH, WBTC, major DeFi tokens)</li>
          <li style={{ marginBottom: '0.5rem' }}>Shared liquidation risk across all collateral</li>
        </ul>
        <p style={{ marginBottom: '1rem' }}><strong>Isolated Mode:</strong></p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Single collateral asset per position</li>
          <li style={{ marginBottom: '0.5rem' }}>Limited borrowing capacity (debt caps)</li>
          <li style={{ marginBottom: '0.5rem' }}>Ideal for long-tail or newer assets</li>
          <li style={{ marginBottom: '0.5rem' }}>Risk contained to individual positions</li>
        </ul>
      </FAQItem>

      <FAQItem question="What are collateral tiers?">
        <p style={{ marginBottom: '1rem' }}>Lendefi Markets uses four collateral tiers with different risk parameters:</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>STABLE (Tier 0):</strong> Stablecoins - Lowest fees, highest LTV</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>CROSS_A (Tier 1):</strong> Blue-chip assets (WETH, WBTC) - Low fees</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>CROSS_B (Tier 2):</strong> Established DeFi tokens - Medium fees</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>ISOLATED (Tier 3):</strong> Long-tail assets - Higher fees, debt caps</li>
        </ul>
        <p style={{ marginBottom: '1rem' }}>Higher tiers have increased borrow rates and liquidation fees to compensate for additional risk.</p>
      </FAQItem>

      <FAQItem question="How are interest rates determined?">
        <p style={{ marginBottom: '1rem' }}>Interest rates are dynamic and based on:</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Utilization Rate:</strong> Higher utilization = higher rates</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Collateral Tier:</strong> Riskier collateral = higher rates</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Base Rate:</strong> Minimum rate for all borrowing</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Jump Rate:</strong> Additional rate based on collateral tier</li>
        </ul>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Formula:</strong> 
          <code style={{
            background: 'rgba(31, 41, 55, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '4px',
            padding: '0.25rem 0.5rem',
            fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace',
            color: '#14b8a6',
            margin: '0 0.5rem'
          }}>
            Borrow Rate = Base Rate + (Utilization × Multiplier) + Tier Jump Rate
          </code>
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Supply Rate:</strong> 
          <code style={{
            background: 'rgba(31, 41, 55, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '4px',
            padding: '0.25rem 0.5rem',
            fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace',
            color: '#14b8a6',
            margin: '0 0.5rem'
          }}>
            Supply Rate = Borrow Rate × Utilization × (1 - Protocol Fee)
          </code>
        </p>
      </FAQItem>

      <FAQItem question="What assets can I use as collateral?">
        <p style={{ marginBottom: '1rem' }}>Supported collateral assets vary by market but typically include:</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Stablecoins:</strong> USDC, USDT, USD1, FRAX</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Major Cryptocurrencies:</strong> WETH, WBTC</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>DeFi Tokens:</strong> LINK, UNI, AAVE, CRV</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>LSTs:</strong> stETH, rETH, cbETH</li>
        </ul>
        <p style={{ marginBottom: '1rem' }}>Each asset has specific LTV ratios, liquidation thresholds, and supply caps configured by market owners.</p>
      </FAQItem>
    </div>
  );
};

export default MarketsAssetsFAQ;