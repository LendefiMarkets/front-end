import React from 'react';
import { Link } from 'react-router-dom';
import FAQItem from '../FAQItem';

const TechnicalIntegrationFAQ: React.FC = () => {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2 style={{
        color: '#14b8a6',
        marginBottom: '2rem',
        fontSize: '1.8rem',
        borderBottom: '2px solid rgba(20, 184, 166, 0.3)',
        paddingBottom: '0.5rem'
      }}>
        🔧 Technical & Integration
      </h2>
      
      <FAQItem question="Is Lendefi Markets open source?">
        <p style={{ marginBottom: '1rem' }}>Yes! Lendefi Markets is open source and available on GitHub:</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Smart Contracts:</strong> Fully auditable Solidity code</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Frontend:</strong> React application with TypeScript</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Documentation:</strong> Comprehensive guides and API reference</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Tests:</strong> Extensive test suite with Foundry</li>
        </ul>
        <p style={{ marginBottom: '1rem' }}>
          Visit <a href="https://github.com/LendefiMarkets" target="_blank" style={{ color: '#14b8a6' }}>github.com/LendefiMarkets</a> to explore the codebase.
        </p>
      </FAQItem>

      <FAQItem question="How can I integrate with Lendefi Markets?">
        <p style={{ marginBottom: '1rem' }}>Integration options include:</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Direct Integration:</strong> Use smart contract ABIs and addresses</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>SDK:</strong> JavaScript/TypeScript SDK (coming soon)</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Subgraph:</strong> GraphQL API for querying protocol data</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Webhooks:</strong> Real-time event notifications</li>
        </ul>
        <p style={{ marginBottom: '1rem' }}>
          Check our <Link to="/api-reference" style={{ color: '#14b8a6' }}>API Reference</Link> for detailed integration documentation.
        </p>
      </FAQItem>

      <FAQItem question="What wallets are supported?">
        <p style={{ marginBottom: '1rem' }}>Lendefi Markets supports all wallets compatible with WalletConnect and Web3 standards:</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Browser Wallets:</strong> MetaMask, Coinbase Wallet, Brave Wallet</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Mobile Wallets:</strong> Rainbow, Trust Wallet, 1inch Wallet</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Hardware Wallets:</strong> Ledger, Trezor (via MetaMask)</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>WalletConnect:</strong> Any WalletConnect-compatible wallet</li>
        </ul>
        <p style={{ marginBottom: '1rem' }}>The app uses Reown AppKit (formerly WalletConnect) for seamless wallet connections.</p>
      </FAQItem>
    </div>
  );
};

export default TechnicalIntegrationFAQ;