import React from 'react';

const LendefiAssetsAPI: React.FC = () => {
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
    <section id="lendefi-assets" style={{
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
        ⚙️ LendefiAssets
      </h2>
      <p style={{ color: '#d1d5db', marginBottom: '1.5rem' }}>
        Manages asset configurations, oracle integrations, collateral tier settings, and circuit breaker functionality. 
        This contract serves as the central registry for all supported assets, their risk parameters, pricing sources, 
        and liquidation thresholds across different collateral tiers.
      </p>

      {/* Asset Configuration Functions */}
      <h3 style={{ color: '#0ea5e9', margin: '2rem 0 1rem 0', fontSize: '1.4rem' }}>
        Asset Configuration Management
      </h3>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>external</span>
          updateAssetConfig
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Updates or adds a new asset configuration with comprehensive parameter validation. 
          Configures collateral tier, thresholds, oracle settings, and supply limits.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>updateAssetConfig</span>(<br />
            {'  '}<span style={{ color: '#fbbf24' }}>address</span> asset,{' '}
            <span style={{ color: '#fbbf24' }}>Asset memory</span> config) <span style={{ color: '#c084fc' }}>external</span> <span style={{ color: '#60a5fa' }}>onlyRole(MANAGER_ROLE)</span>
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
          updateAssetTier
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Updates the collateral tier for an existing asset, changing its risk parameters and rates.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>updateAssetTier</span>(<br />
            {'  '}<span style={{ color: '#fbbf24' }}>address</span> asset,{' '}
            <span style={{ color: '#fbbf24' }}>CollateralTier</span> newTier) <span style={{ color: '#c084fc' }}>external</span>
          </code>
        </div>
      </div>

      {/* Oracle Management Functions */}
      <h3 style={{ color: '#0ea5e9', margin: '2rem 0 1rem 0', fontSize: '1.4rem' }}>
        Oracle Management
      </h3>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>external</span>
          updateChainlinkOracle
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Adds or updates a Chainlink oracle configuration for an asset. 
          Includes activation/deactivation and price feed validation.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>updateChainlinkOracle</span>(<br />
            {'  '}<span style={{ color: '#fbbf24' }}>address</span> asset,{' '}
            <span style={{ color: '#fbbf24' }}>address</span> oracle,{' '}
            <span style={{ color: '#fbbf24' }}>uint8</span> active) <span style={{ color: '#c084fc' }}>external</span>
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
          updateUniswapOracle
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Registers a Uniswap V3 pool as an oracle for an asset with TWAP configuration. 
          Validates pool setup and configures time-weighted price averaging.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>updateUniswapOracle</span>(<br />
            {'  '}<span style={{ color: '#fbbf24' }}>address</span> asset,{' '}
            <span style={{ color: '#fbbf24' }}>address</span> uniswapPool,{' '}
            <span style={{ color: '#fbbf24' }}>uint32</span> twapPeriod,{' '}
            <span style={{ color: '#fbbf24' }}>uint8</span> active) <span style={{ color: '#c084fc' }}>external</span>
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
          updateMainOracleConfig
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Updates global oracle configuration including freshness thresholds, volatility parameters, and circuit breaker settings.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>updateMainOracleConfig</span>(<br />
            {'  '}<span style={{ color: '#fbbf24' }}>uint80</span> freshness,{' '}
            <span style={{ color: '#fbbf24' }}>uint80</span> volatility,{' '}
            <span style={{ color: '#fbbf24' }}>uint40</span> volatilityPct,{' '}
            <span style={{ color: '#fbbf24' }}>uint40</span> circuitBreakerPct) <span style={{ color: '#c084fc' }}>external</span>
          </code>
        </div>
      </div>

      {/* Tier Configuration Functions */}
      <h3 style={{ color: '#0ea5e9', margin: '2rem 0 1rem 0', fontSize: '1.4rem' }}>
        Collateral Tier Configuration
      </h3>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>external</span>
          updateTierConfig
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Updates rate configuration for a specific collateral tier including jump rates and liquidation fees.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>updateTierConfig</span>(<br />
            {'  '}<span style={{ color: '#fbbf24' }}>CollateralTier</span> tier,{' '}
            <span style={{ color: '#fbbf24' }}>uint256</span> jumpRate,{' '}
            <span style={{ color: '#fbbf24' }}>uint256</span> liquidationFee) <span style={{ color: '#c084fc' }}>external</span>
          </code>
        </div>
      </div>

      {/* Circuit Breaker Functions */}
      <h3 style={{ color: '#0ea5e9', margin: '2rem 0 1rem 0', fontSize: '1.4rem' }}>
        Circuit Breaker System
      </h3>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>external</span>
          evaluateCircuitBreaker
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Automatically evaluates and manages circuit breaker status based on price deviation between oracles. 
          Can be called by anyone to update circuit breaker status.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>evaluateCircuitBreaker</span>(<br />
            {'  '}<span style={{ color: '#fbbf24' }}>address</span> asset) <span style={{ color: '#c084fc' }}>external returns</span> (<span style={{ color: '#fbbf24' }}>bool</span> triggered, <span style={{ color: '#fbbf24' }}>uint256</span> deviation)
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
          checkPriceDeviation
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Checks for price deviation between Chainlink and Uniswap oracles. 
          Calculates percentage deviation and determines if circuit breaker threshold is exceeded.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>checkPriceDeviation</span>(<br />
            {'  '}<span style={{ color: '#fbbf24' }}>address</span> asset) <span style={{ color: '#c084fc' }}>public view returns</span> (<span style={{ color: '#fbbf24' }}>bool</span> isDeviated, <span style={{ color: '#fbbf24' }}>uint256</span> deviation)
          </code>
        </div>
      </div>

      {/* Price Functions */}
      <h3 style={{ color: '#0ea5e9', margin: '2rem 0 1rem 0', fontSize: '1.4rem' }}>
        Price & Oracle Functions
      </h3>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(59, 130, 246, 0.2)', color: '#3b82f6',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>view</span>
          getAssetPrice
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Returns the current price of an asset using the configured oracle(s). 
          Automatically handles oracle failover and circuit breaker checks.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>getAssetPrice</span>(<br />
            {'  '}<span style={{ color: '#fbbf24' }}>address</span> asset) <span style={{ color: '#c084fc' }}>public view returns</span> (<span style={{ color: '#fbbf24' }}>uint256</span>)
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
          getAssetPriceByType
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Gets the price from a specific oracle type (Chainlink or Uniswap) for debugging and comparison purposes.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>getAssetPriceByType</span>(<br />
            {'  '}<span style={{ color: '#fbbf24' }}>address</span> asset,{' '}
            <span style={{ color: '#fbbf24' }}>OracleType</span> oracleType) <span style={{ color: '#c084fc' }}>external view returns</span> (<span style={{ color: '#fbbf24' }}>uint256</span>)
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
          updateAssetPoRFeed
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Updates the Proof of Reserve feed with current TVL data for an asset. 
          Only callable by the protocol to maintain reserve transparency.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>updateAssetPoRFeed</span>(<br />
            {'  '}<span style={{ color: '#fbbf24' }}>address</span> asset,{' '}
            <span style={{ color: '#fbbf24' }}>uint256</span> tvl) <span style={{ color: '#c084fc' }}>external returns</span> (<span style={{ color: '#fbbf24' }}>uint256</span> usdValue)
          </code>
        </div>
      </div>

      {/* Asset Information Functions */}
      <h3 style={{ color: '#0ea5e9', margin: '2rem 0 1rem 0', fontSize: '1.4rem' }}>
        Asset Information & Validation
      </h3>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(59, 130, 246, 0.2)', color: '#3b82f6',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>view</span>
          getAssetInfo
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Retrieves complete configuration for an asset including all thresholds, oracle settings, and tier information.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>getAssetInfo</span>(<br />
            {'  '}<span style={{ color: '#fbbf24' }}>address</span> asset) <span style={{ color: '#c084fc' }}>external view returns</span> (<span style={{ color: '#fbbf24' }}>Asset memory</span>)
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
          getListedAssets
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Returns an array of all asset addresses currently listed and active in the protocol.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>getListedAssets</span>() <span style={{ color: '#c084fc' }}>external view returns</span> (<span style={{ color: '#fbbf24' }}>address[] memory</span>)
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
          isAssetValid
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Checks if an asset is valid and active in the protocol for lending/borrowing operations.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>isAssetValid</span>(<br />
            {'  '}<span style={{ color: '#fbbf24' }}>address</span> asset) <span style={{ color: '#c084fc' }}>external view returns</span> (<span style={{ color: '#fbbf24' }}>bool</span>)
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
          isAssetAtCapacity
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Checks if supplying a specific amount would exceed the asset's maximum supply capacity threshold.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>isAssetAtCapacity</span>(<br />
            {'  '}<span style={{ color: '#fbbf24' }}>address</span> asset,{' '}
            <span style={{ color: '#fbbf24' }}>uint256</span> amount,{' '}
            <span style={{ color: '#fbbf24' }}>uint256</span> tvl) <span style={{ color: '#c084fc' }}>external view returns</span> (<span style={{ color: '#fbbf24' }}>bool</span>)
          </code>
        </div>
      </div>

      {/* Getter Functions */}
      <h3 style={{ color: '#0ea5e9', margin: '2rem 0 1rem 0', fontSize: '1.4rem' }}>
        Collateral Parameter Getters
      </h3>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(59, 130, 246, 0.2)', color: '#3b82f6',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>view</span>
          getTierRates
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Retrieves rate configurations for all collateral tiers including jump rates and liquidation fees.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>getTierRates</span>() <span style={{ color: '#c084fc' }}>external view returns</span> (<br />
            {'  '}<span style={{ color: '#fbbf24' }}>uint256[4] memory</span> jumpRates,{' '}
            <span style={{ color: '#fbbf24' }}>uint256[4] memory</span> liquidationFees)
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
          getAssetCalculationParams
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Gets all parameters needed for collateral calculations in a single call including price, thresholds, and decimals.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>getAssetCalculationParams</span>(<br />
            {'  '}<span style={{ color: '#fbbf24' }}>address</span> asset) <span style={{ color: '#c084fc' }}>external view returns</span> (<span style={{ color: '#fbbf24' }}>AssetCalculationParams memory</span>)
          </code>
        </div>
      </div>

      {/* Administrative Functions */}
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
          scheduleUpgrade
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Schedules an upgrade to a new implementation contract with timelock protection.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>scheduleUpgrade</span>(<br />
            {'  '}<span style={{ color: '#fbbf24' }}>address</span> newImplementation) <span style={{ color: '#c084fc' }}>external</span> <span style={{ color: '#60a5fa' }}>onlyRole(UPGRADER_ROLE)</span>
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
          Emergency pause functionality to halt all asset configuration operations. Only callable by addresses with PAUSER_ROLE.
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
        <strong style={{ color: '#3b82f6' }}>Note:</strong> This contract manages all asset configurations, oracle integrations, 
        and risk parameters for the Lendefi protocol. It includes sophisticated circuit breaker functionality, 
        multi-oracle support (Chainlink + Uniswap V3), and comprehensive validation for asset safety.
        <br /><br />
        <strong>Complete Documentation:</strong><br />
        • <a href="https://github.com/LendefiMarkets/lendefi-markets/blob/main/contracts/markets/LendefiAssets.sol" 
           target="_blank" rel="noopener noreferrer" 
           style={{ color: '#3b82f6', textDecoration: 'none' }}>
           LendefiAssets.sol - Full Contract Implementation
        </a><br />
        • <a href="https://github.com/LendefiMarkets/lendefi-markets/blob/main/contracts/interfaces/IASSETS.sol" 
           target="_blank" rel="noopener noreferrer" 
           style={{ color: '#3b82f6', textDecoration: 'none' }}>
           IASSETS.sol - Contract Interface
        </a>
      </div>
    </section>
  );
};

export default LendefiAssetsAPI;