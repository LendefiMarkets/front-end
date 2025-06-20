import React from 'react';

const LendefiCoreAPI: React.FC = () => {
  const codeStyle = {
    background: 'rgba(17, 24, 39, 0.8)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '6px',
    padding: '1rem',
    margin: '1rem 0',
    overflowX: 'auto' as const
  };

  const functionStyle = {
    background: 'rgba(31, 41, 55, 0.5)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    padding: '1.5rem',
    marginBottom: '1.5rem'
  };

  return (
    <section id="lendefi-core" style={{
      background: 'rgba(17, 24, 39, 0.5)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      padding: '2rem',
      marginBottom: '2rem'
    }}>
      <h2 style={{
        color: '#14b8a6',
        marginBottom: '1.5rem',
        fontSize: '1.8rem',
        borderBottom: '2px solid rgba(20, 184, 166, 0.3)',
        paddingBottom: '0.5rem'
      }}>
        🎯 LendefiCore
      </h2>
      <p style={{ color: '#d1d5db', marginBottom: '1.5rem' }}>
        Core lending protocol focused on collateral management and lending calculations. 
        Asset-agnostic core with base currency tokenization handled by ERC4626 wrappers.
        Implements a secure and upgradeable collateralized lending protocol.
      </p>

      {/* Liquidity Management */}
      <h3 style={{ color: '#0ea5e9', margin: '2rem 0 1rem 0', fontSize: '1.4rem' }}>
        Liquidity Management
      </h3>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>external</span>
          depositLiquidity
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Supplies liquidity to the protocol with MEV protection and slippage controls.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>depositLiquidity</span>(
            <span style={{ color: '#fbbf24' }}>uint256</span> amount,{' '}
            <span style={{ color: '#fbbf24' }}>uint256</span> expectedShares,{' '}
            <span style={{ color: '#fbbf24' }}>uint32</span> maxSlippageBps) <span style={{ color: '#c084fc' }}>external</span>
          </code>
        </div>
      </div>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>external</span>
          withdrawLiquidity
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Withdraws a specific amount of base asset from the protocol with slippage protection.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>withdrawLiquidity</span>(
            <span style={{ color: '#fbbf24' }}>uint256</span> amount,{' '}
            <span style={{ color: '#fbbf24' }}>uint256</span> expectedShares,{' '}
            <span style={{ color: '#fbbf24' }}>uint32</span> maxSlippageBps) <span style={{ color: '#c084fc' }}>external</span>
          </code>
        </div>
      </div>

      {/* Position Management */}
      <h3 style={{ color: '#0ea5e9', margin: '2rem 0 1rem 0', fontSize: '1.4rem' }}>
        Position Management
      </h3>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>external</span>
          createPosition
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Creates a new position for the user with isolated vault contract. Returns the position ID.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>createPosition</span>(
            <span style={{ color: '#fbbf24' }}>address</span> asset,{' '}
            <span style={{ color: '#fbbf24' }}>bool</span> isIsolated) <span style={{ color: '#c084fc' }}>external</span>{' '}
            <span style={{ color: '#c084fc' }}>returns</span> (<span style={{ color: '#fbbf24' }}>uint256</span> positionId)
          </code>
        </div>
      </div>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>external</span>
          supplyCollateral
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Supplies collateral assets to a position. For isolated positions, only the initial asset type can be supplied.
          For cross-collateral positions, up to 20 different asset types can be added.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>supplyCollateral</span>(
            <span style={{ color: '#fbbf24' }}>address</span> asset,{' '}
            <span style={{ color: '#fbbf24' }}>uint256</span> amount,{' '}
            <span style={{ color: '#fbbf24' }}>uint256</span> positionId) <span style={{ color: '#c084fc' }}>external</span>
          </code>
        </div>
      </div>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>external</span>
          withdrawCollateral
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Withdraws collateral assets from a position with MEV protection and slippage controls.
          Position must remain sufficiently collateralized after withdrawal.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>withdrawCollateral</span>(<br />
            &nbsp;&nbsp;<span style={{ color: '#fbbf24' }}>address</span> asset,{' '}
            <span style={{ color: '#fbbf24' }}>uint256</span> amount,{' '}
            <span style={{ color: '#fbbf24' }}>uint256</span> positionId,<br />
            &nbsp;&nbsp;<span style={{ color: '#fbbf24' }}>uint256</span> expectedCreditLimit,{' '}
            <span style={{ color: '#fbbf24' }}>uint32</span> maxSlippageBps<br />
            ) <span style={{ color: '#c084fc' }}>external</span>
          </code>
        </div>
      </div>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>external</span>
          exitPosition
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Exits a position by repaying the debt and withdrawing all collateral. Sets position status to CLOSED.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>exitPosition</span>(
            <span style={{ color: '#fbbf24' }}>uint256</span> positionId,{' '}
            <span style={{ color: '#fbbf24' }}>uint256</span> expectedDebt,{' '}
            <span style={{ color: '#fbbf24' }}>uint32</span> maxSlippageBps) <span style={{ color: '#c084fc' }}>external</span>
          </code>
        </div>
      </div>

      {/* Borrowing & Repayment */}
      <h3 style={{ color: '#0ea5e9', margin: '2rem 0 1rem 0', fontSize: '1.4rem' }}>
        Borrowing & Repayment
      </h3>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>external</span>
          borrow
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Borrows assets from the protocol with MEV protection and slippage controls. 
          Interest rate depends on position's collateral tier.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>borrow</span>(
            <span style={{ color: '#fbbf24' }}>uint256</span> positionId,{' '}
            <span style={{ color: '#fbbf24' }}>uint256</span> amount,{' '}
            <span style={{ color: '#fbbf24' }}>uint256</span> expectedCreditLimit,{' '}
            <span style={{ color: '#fbbf24' }}>uint32</span> maxSlippageBps) <span style={{ color: '#c084fc' }}>external</span>
          </code>
        </div>
      </div>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>external</span>
          repay
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Repays a borrow position. Position must remain sufficiently collateralized after repayment.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>repay</span>(
            <span style={{ color: '#fbbf24' }}>uint256</span> positionId,{' '}
            <span style={{ color: '#fbbf24' }}>uint256</span> amount,{' '}
            <span style={{ color: '#fbbf24' }}>uint256</span> expectedDebt,{' '}
            <span style={{ color: '#fbbf24' }}>uint32</span> maxSlippageBps) <span style={{ color: '#c084fc' }}>external</span>
          </code>
        </div>
      </div>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>external</span>
          liquidate
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Liquidates an undercollateralized position. Caller must have sufficient governance tokens.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>liquidate</span>(
            <span style={{ color: '#fbbf24' }}>address</span> user,{' '}
            <span style={{ color: '#fbbf24' }}>uint256</span> positionId,{' '}
            <span style={{ color: '#fbbf24' }}>uint256</span> expectedCost,{' '}
            <span style={{ color: '#fbbf24' }}>uint32</span> maxSlippageBps) <span style={{ color: '#c084fc' }}>external</span>
          </code>
        </div>
      </div>

      {/* Calculation Functions */}
      <h3 style={{ color: '#0ea5e9', margin: '2rem 0 1rem 0', fontSize: '1.4rem' }}>
        Calculation Functions
      </h3>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(59, 130, 246, 0.2)', color: '#3b82f6',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>view</span>
          calculateDebtWithInterest
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Calculates the current debt including accrued interest for a position based on collateral tier.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>calculateDebtWithInterest</span>(
            <span style={{ color: '#fbbf24' }}>address</span> user,{' '}
            <span style={{ color: '#fbbf24' }}>uint256</span> positionId) <span style={{ color: '#c084fc' }}>public view returns</span> (<span style={{ color: '#fbbf24' }}>uint256</span>)
          </code>
        </div>
      </div>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(59, 130, 246, 0.2)', color: '#3b82f6',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>view</span>
          calculateCreditLimit
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Calculates the credit limit for a position based on collateral value and tier.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>calculateCreditLimit</span>(
            <span style={{ color: '#fbbf24' }}>address</span> user,{' '}
            <span style={{ color: '#fbbf24' }}>uint256</span> positionId) <span style={{ color: '#c084fc' }}>public view returns</span> (<span style={{ color: '#fbbf24' }}>uint256</span>)
          </code>
        </div>
      </div>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(59, 130, 246, 0.2)', color: '#3b82f6',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>view</span>
          healthFactor
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Calculates the health factor of a position. Below 1.0 indicates the position is liquidatable.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>healthFactor</span>(
            <span style={{ color: '#fbbf24' }}>address</span> user,{' '}
            <span style={{ color: '#fbbf24' }}>uint256</span> positionId) <span style={{ color: '#c084fc' }}>public view returns</span> (<span style={{ color: '#fbbf24' }}>uint256</span>)
          </code>
        </div>
      </div>

      {/* Position Query Functions */}
      <h3 style={{ color: '#0ea5e9', margin: '2rem 0 1rem 0', fontSize: '1.4rem' }}>
        Position Query Functions
      </h3>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(59, 130, 246, 0.2)', color: '#3b82f6',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>view</span>
          getUserPositions
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Gets all positions owned by a user (includes all statuses: active, closed, liquidated).
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>getUserPositions</span>(
            <span style={{ color: '#fbbf24' }}>address</span> user) <span style={{ color: '#c084fc' }}>public view returns</span> (UserPosition[] <span style={{ color: '#c084fc' }}>memory</span>)
          </code>
        </div>
      </div>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(59, 130, 246, 0.2)', color: '#3b82f6',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>view</span>
          getCollateralAmount
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Gets the collateral amount for a specific asset in a position.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>getCollateralAmount</span>(
            <span style={{ color: '#fbbf24' }}>address</span> user,{' '}
            <span style={{ color: '#fbbf24' }}>uint256</span> positionId,{' '}
            <span style={{ color: '#fbbf24' }}>address</span> asset) <span style={{ color: '#c084fc' }}>public view returns</span> (<span style={{ color: '#fbbf24' }}>uint256</span>)
          </code>
        </div>
      </div>

      {/* Interest Rate Functions */}
      <h3 style={{ color: '#0ea5e9', margin: '2rem 0 1rem 0', fontSize: '1.4rem' }}>
        Interest Rate Functions
      </h3>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(59, 130, 246, 0.2)', color: '#3b82f6',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>view</span>
          getSupplyRate
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Calculates the current supply interest rate for liquidity providers based on utilization and protocol fees.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>getSupplyRate</span>() <span style={{ color: '#c084fc' }}>public view returns</span> (<span style={{ color: '#fbbf24' }}>uint256</span>)
          </code>
        </div>
      </div>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(59, 130, 246, 0.2)', color: '#3b82f6',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>view</span>
          getBorrowRate
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Calculates the current borrow interest rate for a specific collateral tier based on utilization and tier-specific jump rate.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>getBorrowRate</span>(
            IASSETS.CollateralTier tier) <span style={{ color: '#c084fc' }}>public view returns</span> (<span style={{ color: '#fbbf24' }}>uint256</span>)
          </code>
        </div>
      </div>

      <div style={{
        background: 'rgba(59, 130, 246, 0.1)',
        border: '1px solid rgba(59, 130, 246, 0.3)',
        borderRadius: '8px',
        padding: '1rem',
        margin: '2rem 0'
      }}>
        <strong style={{ color: '#3b82f6' }}>Note:</strong> This contract contains many more functions for internal processing, 
        validation, and administration. The functions above represent the main user-facing and query functions. 
        <br /><br />
        <strong>Complete Documentation:</strong><br />
        • <a href="https://github.com/LendefiMarkets/lendefi-markets/blob/main/contracts/markets/LendefiCore.sol" 
           target="_blank" rel="noopener noreferrer" 
           style={{ color: '#3b82f6', textDecoration: 'none' }}>
           LendefiCore.sol - Full Contract Implementation
        </a><br />
        • <a href="https://github.com/LendefiMarkets/lendefi-markets/blob/main/contracts/interfaces/IProtocol.sol" 
           target="_blank" rel="noopener noreferrer" 
           style={{ color: '#3b82f6', textDecoration: 'none' }}>
           IProtocol.sol - Contract Interface
        </a>
      </div>
    </section>
  );
};

export default LendefiCoreAPI;