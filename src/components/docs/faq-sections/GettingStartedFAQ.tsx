import React from 'react';
import FAQItem from '../FAQItem';

const GettingStartedFAQ: React.FC = () => {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2 style={{
        color: '#14b8a6',
        marginBottom: '2rem',
        fontSize: '1.8rem',
        borderBottom: '2px solid rgba(20, 184, 166, 0.3)',
        paddingBottom: '0.5rem'
      }}>
        🚀 Getting Started
      </h2>
      
      <FAQItem question="What is Lendefi Markets?">
        <p style={{ marginBottom: '1rem' }}>
          Lendefi Markets is a composable lending protocol that creates isolated markets for each base asset (USDC, USD1, USDT, etc.). Each market operates independently with its own liquidity pools, collateral assets, and risk parameters.
        </p>
        <p style={{ marginBottom: '1rem' }}>Key features include:</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Isolated lending markets per base asset</li>
          <li style={{ marginBottom: '0.5rem' }}>ERC-4626 compliant vaults for liquidity providers</li>
          <li style={{ marginBottom: '0.5rem' }}>Individual position vaults for complete asset segregation</li>
          <li style={{ marginBottom: '0.5rem' }}>Cross-collateral and isolated collateral modes</li>
          <li style={{ marginBottom: '0.5rem' }}>Flash loans with configurable fees</li>
          <li style={{ marginBottom: '0.5rem' }}>Automated liquidations and MEV protection</li>
        </ul>
      </FAQItem>

      <FAQItem question="How do I get started as a lender?">
        <p style={{ marginBottom: '1rem' }}>To start earning yield as a lender:</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Connect your wallet</strong> to the Lendefi Markets app</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Choose a market</strong> (USDC, USD1, USDT, etc.)</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Deposit assets</strong> into the market's ERC-4626 vault</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Receive vault shares</strong> that represent your liquidity position</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Earn yield</strong> from borrower interest, flash loan fees, and liquidation proceeds</li>
        </ul>
        <p style={{ marginBottom: '1rem' }}>You can withdraw your liquidity anytime, subject to available liquidity in the vault.</p>
      </FAQItem>

      <FAQItem question="How do I start borrowing?">
        <p style={{ marginBottom: '1rem' }}>To borrow against your collateral:</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Connect your wallet</strong> and choose a base asset market</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Create a position</strong> (this deploys your individual vault)</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Supply collateral</strong> to your position vault</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Borrow base assets</strong> up to your position's credit limit</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Monitor your health factor</strong> to avoid liquidation</li>
        </ul>
        <div style={{
          background: 'rgba(245, 158, 11, 0.1)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          borderRadius: '8px',
          padding: '1rem',
          margin: '1rem 0'
        }}>
          <strong>⚠️ Important:</strong> Keep your health factor above 1.0 to avoid liquidation. Consider maintaining it above 1.5 for safety.
        </div>
      </FAQItem>

      <FAQItem question="What networks are supported?">
        <p style={{ marginBottom: '1rem' }}>Lendefi Markets is currently deployed on:</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Ethereum Mainnet</strong> - Production deployment</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Sepolia Testnet</strong> - Testing and development</li>
        </ul>
        <p style={{ marginBottom: '1rem' }}>Additional networks may be supported in the future based on community demand and technical requirements.</p>
      </FAQItem>
    </div>
  );
};

export default GettingStartedFAQ;