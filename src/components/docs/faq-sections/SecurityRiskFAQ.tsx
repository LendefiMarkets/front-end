import React from 'react';
import FAQItem from '../FAQItem';

const SecurityRiskFAQ: React.FC = () => {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2 style={{
        color: '#14b8a6',
        marginBottom: '2rem',
        fontSize: '1.8rem',
        borderBottom: '2px solid rgba(20, 184, 166, 0.3)',
        paddingBottom: '0.5rem'
      }}>
        🛡️ Security & Risk
      </h2>
      
      <FAQItem question="How secure is Lendefi Markets?">
        <p style={{ marginBottom: '1rem' }}>Security is our top priority. Lendefi Markets includes:</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Smart Contract Audits:</strong> Multiple professional audits</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Open Source Code:</strong> Transparent and reviewable</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Battle-tested Patterns:</strong> ERC-4626, OpenZeppelin contracts</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Formal Verification:</strong> Critical functions mathematically proven</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Bug Bounty Program:</strong> Rewards for security researchers</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Gradual Rollout:</strong> Tested extensively on testnets</li>
        </ul>
      </FAQItem>

      <FAQItem question="What are the main risks?">
        <p style={{ marginBottom: '1rem' }}>As with all DeFi protocols, there are inherent risks:</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Smart Contract Risk:</strong> Potential bugs or exploits</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Liquidation Risk:</strong> Collateral can be liquidated if health factor falls</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Oracle Risk:</strong> Price feed failures or manipulation</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Market Risk:</strong> Asset price volatility</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Liquidity Risk:</strong> May not be able to withdraw during high utilization</li>
        </ul>
        <div style={{
          background: 'rgba(245, 158, 11, 0.1)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          borderRadius: '8px',
          padding: '1rem',
          margin: '1rem 0'
        }}>
          <strong>⚠️ Risk Management:</strong> Never invest more than you can afford to lose. Understand liquidation mechanics and monitor your positions closely.
        </div>
      </FAQItem>

      <FAQItem question="How are oracles secured?">
        <p style={{ marginBottom: '1rem' }}>Lendefi Markets uses a robust oracle system:</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Primary:</strong> Chainlink price feeds for maximum reliability</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Fallback:</strong> Uniswap V3 TWAP for additional validation</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Circuit Breakers:</strong> Automatic pause on price deviations &gt;50%</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Volatility Checks:</strong> Reject prices with excessive movement</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Staleness Protection:</strong> Reject outdated price data</li>
        </ul>
        <p style={{ marginBottom: '1rem' }}>This multi-layer approach ensures accurate and manipulation-resistant pricing.</p>
      </FAQItem>
    </div>
  );
};

export default SecurityRiskFAQ;