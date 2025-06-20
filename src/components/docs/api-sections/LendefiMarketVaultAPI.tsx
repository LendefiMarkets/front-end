import React from 'react';

const LendefiMarketVaultAPI: React.FC = () => {
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
    <section id="lendefi-market-vault" style={{
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
        🏦 LendefiMarketVault
      </h2>
      <p style={{ color: '#d1d5db', marginBottom: '1.5rem' }}>
        ERC-4626 compliant vault that tokenizes base assets for the Lendefi lending protocol. 
        This contract serves as the liquidity management layer, implementing tokenized vault shares, 
        flash loans, automated Proof of Reserves updates via Chainlink, MEV protection, and time-based rewards.
      </p>

      {/* ERC-4626 Functions */}
      <h3 style={{ color: '#0ea5e9', margin: '2rem 0 1rem 0', fontSize: '1.4rem' }}>
        ERC-4626 Standard Functions
      </h3>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>external</span>
          deposit
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Deposits base assets into the vault and mints shares to the receiver. 
          Implements MEV protection via same-block operation prevention.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>deposit</span>(
            <span style={{ color: '#fbbf24' }}>uint256</span> amount,{' '}
            <span style={{ color: '#fbbf24' }}>address</span> receiver) <span style={{ color: '#c084fc' }}>public override returns</span> (<span style={{ color: '#fbbf24' }}>uint256</span>)
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
          mint
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Mints a specific number of vault shares to the receiver. 
          Calculates the required asset amount to mint the specified shares.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>mint</span>(
            <span style={{ color: '#fbbf24' }}>uint256</span> shares,{' '}
            <span style={{ color: '#fbbf24' }}>address</span> receiver) <span style={{ color: '#c084fc' }}>public override returns</span> (<span style={{ color: '#fbbf24' }}>uint256</span>)
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
          withdraw
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Withdraws a specific amount of base assets from the vault. 
          Burns the necessary shares to withdraw the specified asset amount.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>withdraw</span>(
            <span style={{ color: '#fbbf24' }}>uint256</span> amount,{' '}
            <span style={{ color: '#fbbf24' }}>address</span> receiver,{' '}
            <span style={{ color: '#fbbf24' }}>address</span> owner) <span style={{ color: '#c084fc' }}>public override returns</span> (<span style={{ color: '#fbbf24' }}>uint256</span>)
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
          redeem
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Redeems vault shares for base assets. Burns the specified shares and transfers corresponding assets to receiver.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>redeem</span>(
            <span style={{ color: '#fbbf24' }}>uint256</span> shares,{' '}
            <span style={{ color: '#fbbf24' }}>address</span> receiver,{' '}
            <span style={{ color: '#fbbf24' }}>address</span> owner) <span style={{ color: '#c084fc' }}>public override returns</span> (<span style={{ color: '#fbbf24' }}>uint256</span>)
          </code>
        </div>
      </div>

      {/* Flash Loan Functions */}
      <h3 style={{ color: '#0ea5e9', margin: '2rem 0 1rem 0', fontSize: '1.4rem' }}>
        Flash Loan Functionality
      </h3>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b',
            padding: 'px', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>external</span>
          flashLoan
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Executes a flash loan by temporarily lending assets without collateral. 
          Assets must be returned with fee in the same transaction. Default fee is configurable (typically 9 basis points).
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>flashLoan</span>(
            <span style={{ color: '#fbbf24' }}>address</span> receiver,{' '}
            <span style={{ color: '#fbbf24' }}>uint256</span> amount,{' '}
            <span style={{ color: '#fbbf24' }}>bytes calldata</span> params) <span style={{ color: '#c084fc' }}>external</span>
          </code>
        </div>
        <div style={{
          background: 'rgba(34, 197, 94, 0.1)',
          border: '1px solid rgba(34, 197, 94, 0.3)',
          borderRadius: '8px',
          padding: '1rem',
          margin: '1rem 0'
        }}>
          <strong>Implementation Note:</strong> Receiver must implement IFlashLoanReceiver interface with executeOperation callback.
        </div>
      </div>

      {/* Protocol Functions */}
      <h3 style={{ color: '#0ea5e9', margin: '2rem 0 1rem 0', fontSize: '1.4rem' }}>
        Protocol Integration Functions
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
          Allows the protocol to borrow assets from the vault's liquidity. 
          Only callable by LendefiCore contract with PROTOCOL_ROLE.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>borrow</span>(
            <span style={{ color: '#fbbf24' }}>uint256</span> amount,{' '}
            <span style={{ color: '#fbbf24' }}>address</span> receiver) <span style={{ color: '#c084fc' }}>public</span> <span style={{ color: '#60a5fa' }}>onlyRole(PROTOCOL_ROLE)</span>
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
          Processes debt repayment from protocol borrowers. Properly accounts for principal and interest portions.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>repay</span>(
            <span style={{ color: '#fbbf24' }}>uint256</span> amount,{' '}
            <span style={{ color: '#fbbf24' }}>address</span> sender) <span style={{ color: '#c084fc' }}>public</span> <span style={{ color: '#60a5fa' }}>onlyRole(PROTOCOL_ROLE)</span>
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
          boostYield
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Boosts vault yield by adding liquidation proceeds or other revenue. 
          Increases share value for all holders.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>boostYield</span>(
            <span style={{ color: '#fbbf24' }}>address</span> user,{' '}
            <span style={{ color: '#fbbf24' }}>uint256</span> amount) <span style={{ color: '#c084fc' }}>external</span> <span style={{ color: '#60a5fa' }}>onlyRole(MANAGER_ROLE)</span>
          </code>
        </div>
      </div>

      {/* Reward Functions */}
      <h3 style={{ color: '#0ea5e9', margin: '2rem 0 1rem 0', fontSize: '1.4rem' }}>
        Reward System
      </h3>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>external</span>
          claimReward
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Claims accumulated governance token rewards for eligible liquidity providers. 
          Rewards based on time and amount of liquidity provided.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>claimReward</span>() <span style={{ color: '#c084fc' }}>external returns</span> (<span style={{ color: '#fbbf24' }}>uint256</span> finalReward)
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
          isRewardable
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Determines if a user is eligible to claim governance token rewards based on time elapsed and liquidity provided.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>isRewardable</span>(
            <span style={{ color: '#fbbf24' }}>address</span> user) <span style={{ color: '#c084fc' }}>public view returns</span> (<span style={{ color: '#fbbf24' }}>bool</span>)
          </code>
        </div>
      </div>

      {/* Automation Functions */}
      <h3 style={{ color: '#0ea5e9', margin: '2rem 0 1rem 0', fontSize: '1.4rem' }}>
        Chainlink Automation
      </h3>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>external</span>
          performUpkeep
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Performs automated Proof of Reserve updates via Chainlink Automation. 
          Updates PoR feed with current TVL and checks protocol collateralization.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>performUpkeep</span>(
            <span style={{ color: '#fbbf24' }}>bytes calldata</span> performData) <span style={{ color: '#c084fc' }}>external override</span>
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
          checkUpkeep
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Determines if automated upkeep should be performed by Chainlink nodes. 
          Checks if sufficient time has elapsed since last update.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>checkUpkeep</span>(
            <span style={{ color: '#fbbf24' }}>bytes calldata</span> checkData) <span style={{ color: '#c084fc' }}>external view returns</span> (<span style={{ color: '#fbbf24' }}>bool</span> upkeepNeeded, <span style={{ color: '#fbbf24' }}>bytes memory</span> performData)
          </code>
        </div>
      </div>

      {/* View Functions */}
      <h3 style={{ color: '#0ea5e9', margin: '2rem 0 1rem 0', fontSize: '1.4rem' }}>
        View Functions
      </h3>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(59, 130, 246, 0.2)', color: '#3b82f6',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>view</span>
          totalAssets
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Returns the total amount of base assets managed by the vault, including supplied liquidity, accrued interest, and fees.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>totalAssets</span>() <span style={{ color: '#c084fc' }}>public view override returns</span> (<span style={{ color: '#fbbf24' }}>uint256</span>)
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
          utilization
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Calculates the current utilization rate of the vault's liquidity. 
          Expressed as (totalBorrow / totalSuppliedLiquidity) in baseDecimals format.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>utilization</span>() <span style={{ color: '#c084fc' }}>public view returns</span> (<span style={{ color: '#fbbf24' }}>uint256</span> u)
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
          getSupplyRate
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Calculates the current supply interest rate for liquidity providers. 
          Automatically accounts for commission through virtual fee shares.
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

      {/* Admin Functions */}
      <h3 style={{ color: '#0ea5e9', margin: '2rem 0 1rem 0', fontSize: '1.4rem' }}>
        Administrative Functions
      </h3>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>external</span>
          loadProtocolConfig
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Updates the protocol configuration including rates and rewards. Only callable by DAO with DEFAULT_ADMIN_ROLE.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>loadProtocolConfig</span>(
            ProtocolConfig <span style={{ color: '#fbbf24' }}>calldata</span> config) <span style={{ color: '#c084fc' }}>external</span> <span style={{ color: '#60a5fa' }}>onlyRole(DEFAULT_ADMIN_ROLE)</span>
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
          updateMarketParameters
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Updates market-specific parameters. Allows market owners to adjust borrowRate and flashLoanFee.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>updateMarketParameters</span>(
            <span style={{ color: '#fbbf24' }}>uint256</span> borrowRate,{' '}
            <span style={{ color: '#fbbf24' }}>uint32</span> flashLoanFee) <span style={{ color: '#c084fc' }}>external</span> <span style={{ color: '#60a5fa' }}>onlyRole(MANAGER_ROLE)</span>
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
          pause / unpause
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Emergency pause functionality to halt all vault operations. Only callable by addresses with PAUSER_ROLE.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>pause</span>() <span style={{ color: '#c084fc' }}>external</span> <span style={{ color: '#60a5fa' }}>onlyRole(PAUSER_ROLE)</span><br />
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>unpause</span>() <span style={{ color: '#c084fc' }}>external</span> <span style={{ color: '#60a5fa' }}>onlyRole(PAUSER_ROLE)</span>
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
        <strong style={{ color: '#3b82f6' }}>Note:</strong> This contract inherits from ERC4626Upgradeable and implements the full ERC-4626 
        tokenized vault standard. All standard functions support MEV protection and protocol-specific features.
        <br /><br />
        <strong>Complete Documentation:</strong><br />
        • <a href="https://github.com/LendefiMarkets/lendefi-markets/blob/main/contracts/markets/LendefiMarketVault.sol" 
           target="_blank" rel="noopener noreferrer" 
           style={{ color: '#3b82f6', textDecoration: 'none' }}>
           LendefiMarketVault.sol - Full Contract Implementation
        </a><br />
        • <a href="https://github.com/LendefiMarkets/lendefi-markets/blob/main/contracts/interfaces/ILendefiMarketVault.sol" 
           target="_blank" rel="noopener noreferrer" 
           style={{ color: '#3b82f6', textDecoration: 'none' }}>
           ILendefiMarketVault.sol - Contract Interface
        </a>
      </div>
    </section>
  );
};

export default LendefiMarketVaultAPI;