import React from 'react';
import FAQItem from '../FAQItem';

const FlashLoansAdvancedFAQ: React.FC = () => {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2 style={{
        color: '#14b8a6',
        marginBottom: '2rem',
        fontSize: '1.8rem',
        borderBottom: '2px solid rgba(20, 184, 166, 0.3)',
        paddingBottom: '0.5rem'
      }}>
        ⚡ Flash Loans & Advanced Features
      </h2>
      
      <FAQItem question="How do flash loans work?">
        <p style={{ marginBottom: '1rem' }}>Flash loans allow you to borrow large amounts without collateral within a single transaction:</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Borrow:</strong> Get instant access to liquidity</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Execute:</strong> Perform your strategy (arbitrage, liquidation, etc.)</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Repay:</strong> Return borrowed amount + fee in same transaction</li>
        </ul>
        <p style={{ marginBottom: '1rem' }}><strong>Fee:</strong> Default 9 basis points (0.09%) per flash loan</p>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Requirements:</strong> Implement <code style={{
            background: 'rgba(31, 41, 55, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '4px',
            padding: '0.25rem 0.5rem',
            fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace',
            color: '#14b8a6'
          }}>IFlashLoanReceiver</code> interface and return <code style={{
            background: 'rgba(31, 41, 55, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '4px',
            padding: '0.25rem 0.5rem',
            fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace',
            color: '#14b8a6'
          }}>true</code> from <code style={{
            background: 'rgba(31, 41, 55, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '4px',
            padding: '0.25rem 0.5rem',
            fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace',
            color: '#14b8a6'
          }}>executeOperation()</code>
        </p>
        <div style={{
          background: 'rgba(59, 130, 246, 0.1)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          borderRadius: '8px',
          padding: '1rem',
          margin: '1rem 0'
        }}>
          <strong>💡 Use Cases:</strong> Arbitrage, liquidations, collateral swaps, debt refinancing
        </div>
      </FAQItem>

      <FAQItem question="What is MEV protection?">
        <p style={{ marginBottom: '1rem' }}>Lendefi Markets includes several MEV protection mechanisms:</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Same-block prevention:</strong> No deposit/withdraw in same block</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Slippage protection:</strong> Maximum slippage limits on borrows</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Price validation:</strong> Oracle price checks with deviation limits</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Circuit breakers:</strong> Automatic pause on price anomalies</li>
        </ul>
        <p style={{ marginBottom: '1rem' }}>These protections help ensure fair pricing and prevent exploitative MEV extraction.</p>
      </FAQItem>

      <FAQItem question="How does liquidation work?">
        <p style={{ marginBottom: '1rem' }}>Liquidations occur when a position's health factor falls below 1.0:</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Trigger:</strong> Health factor &lt; 1.0 due to collateral price drop or interest accrual</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Liquidators:</strong> Must hold 20,000+ governance tokens</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Process:</strong> Liquidator repays debt, receives collateral + bonus</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Bonus:</strong> 1-4% depending on collateral tier</li>
        </ul>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Health Factor:</strong> <code style={{
            background: 'rgba(31, 41, 55, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '4px',
            padding: '0.25rem 0.5rem',
            fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace',
            color: '#14b8a6'
          }}>(Collateral Value × Liquidation Threshold) / Total Debt</code>
        </p>
      </FAQItem>
    </div>
  );
};

export default FlashLoansAdvancedFAQ;