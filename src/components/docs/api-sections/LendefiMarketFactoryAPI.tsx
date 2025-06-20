import React from 'react';

const LendefiMarketFactoryAPI: React.FC = () => {
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
    <section id="lendefi-market-factory" style={{
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
        🏭 LendefiMarketFactory
      </h2>
      <p style={{ color: '#d1d5db', marginBottom: '1.5rem' }}>
        Factory contract for creating and managing isolated lending markets with multi-tenant support. 
        Each market owner can deploy their own LendefiCore + ERC4626 vault pairs for different base assets, 
        providing complete asset and risk isolation between markets while leveraging shared protocol infrastructure.
      </p>

      {/* Market Creation Functions */}
      <h3 style={{ color: '#0ea5e9', margin: '2rem 0 1rem 0', fontSize: '1.4rem' }}>
        Market Creation & Management
      </h3>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>external</span>
          createMarket
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Creates a new isolated lending market for the caller with the specified base asset. 
          Deploys complete infrastructure including LendefiCore, LendefiMarketVault, LendefiAssets, and PoR feed contracts.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>createMarket</span>(<br />
            {'  '}<span style={{ color: '#fbbf24' }}>address</span> baseAsset,{' '}
            <span style={{ color: '#fbbf24' }}>string memory</span> name,{' '}
            <span style={{ color: '#fbbf24' }}>string memory</span> symbol) <span style={{ color: '#c084fc' }}>external</span> <span style={{ color: '#60a5fa' }}>onlyRole(MARKET_OWNER_ROLE)</span>
          </code>
        </div>
        <div style={{
          background: 'rgba(34, 197, 94, 0.1)',
          border: '1px solid rgba(34, 197, 94, 0.3)',
          borderRadius: '8px',
          padding: '1rem',
          margin: '1rem 0'
        }}>
          <strong>Deployment Process:</strong> Creates clones of all implementation contracts, initializes them with proper cross-references, 
          and establishes access control. Each market is completely isolated with its own liquidity pools and risk parameters.
        </div>
      </div>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>external</span>
          setImplementations
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Sets the implementation contract addresses used for cloning new markets. 
          Updates the template contracts that will be used for all future market deployments.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>setImplementations</span>(<br />
            {'  '}<span style={{ color: '#fbbf24' }}>address</span> _coreImplementation,{' '}
            <span style={{ color: '#fbbf24' }}>address</span> _vaultImplementation,<br />
            {'  '}<span style={{ color: '#fbbf24' }}>address</span> _positionVaultImplementation,{' '}
            <span style={{ color: '#fbbf24' }}>address</span> _assetsModuleImplementation,<br />
            {'  '}<span style={{ color: '#fbbf24' }}>address</span> _porFeed) <span style={{ color: '#c084fc' }}>external</span> <span style={{ color: '#60a5fa' }}>onlyRole(MANAGER_ROLE)</span>
          </code>
        </div>
      </div>

      {/* Base Asset Management */}
      <h3 style={{ color: '#0ea5e9', margin: '2rem 0 1rem 0', fontSize: '1.4rem' }}>
        Base Asset Allowlist Management
      </h3>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>external</span>
          addAllowedBaseAsset
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Adds a base asset to the allowlist for market creation. 
          Only assets on the allowlist can be used to create new markets, ensuring protocol security.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>addAllowedBaseAsset</span>(<br />
            {'  '}<span style={{ color: '#fbbf24' }}>address</span> baseAsset) <span style={{ color: '#c084fc' }}>external</span> <span style={{ color: '#60a5fa' }}>onlyRole(MANAGER_ROLE)</span>
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
          removeAllowedBaseAsset
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Removes a base asset from the allowlist, preventing future market creation. 
          Existing markets with this asset continue to operate normally.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>removeAllowedBaseAsset</span>(<br />
            {'  '}<span style={{ color: '#fbbf24' }}>address</span> baseAsset) <span style={{ color: '#c084fc' }}>external</span> <span style={{ color: '#60a5fa' }}>onlyRole(MANAGER_ROLE)</span>
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
          isBaseAssetAllowed
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Checks if a base asset is allowed for market creation. 
          Returns true if the asset is in the allowlist and can be used to create markets.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>isBaseAssetAllowed</span>(<br />
            {'  '}<span style={{ color: '#fbbf24' }}>address</span> baseAsset) <span style={{ color: '#c084fc' }}>external view returns</span> (<span style={{ color: '#fbbf24' }}>bool</span>)
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
          getAllowedBaseAssets
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Returns all allowed base assets that can be used for market creation. 
          Useful for UI applications to display available options to market owners.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>getAllowedBaseAssets</span>() <span style={{ color: '#c084fc' }}>external view returns</span> (<span style={{ color: '#fbbf24' }}>address[] memory</span>)
          </code>
        </div>
      </div>

      {/* Market Information Functions */}
      <h3 style={{ color: '#0ea5e9', margin: '2rem 0 1rem 0', fontSize: '1.4rem' }}>
        Market Information & Discovery
      </h3>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(59, 130, 246, 0.2)', color: '#3b82f6',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>view</span>
          getMarketInfo
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Retrieves complete market information for a specific market owner and base asset. 
          Returns the full Market struct containing all deployed contract addresses and configuration.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>getMarketInfo</span>(<br />
            {'  '}<span style={{ color: '#fbbf24' }}>address</span> marketOwner,{' '}
            <span style={{ color: '#fbbf24' }}>address</span> baseAsset) <span style={{ color: '#c084fc' }}>external view returns</span> (<span style={{ color: '#fbbf24' }}>IPROTOCOL.Market memory</span>)
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
          isMarketActive
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Checks if a market is currently active for the specified owner and base asset. 
          Markets can be deactivated for maintenance or emergency purposes.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>isMarketActive</span>(<br />
            {'  '}<span style={{ color: '#fbbf24' }}>address</span> marketOwner,{' '}
            <span style={{ color: '#fbbf24' }}>address</span> baseAsset) <span style={{ color: '#c084fc' }}>external view returns</span> (<span style={{ color: '#fbbf24' }}>bool</span>)
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
          getOwnerMarkets
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Returns all markets created by a specific owner. 
          Useful for displaying a market owner's portfolio and managing their markets.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>getOwnerMarkets</span>(<br />
            {'  '}<span style={{ color: '#fbbf24' }}>address</span> marketOwner) <span style={{ color: '#c084fc' }}>external view returns</span> (<span style={{ color: '#fbbf24' }}>IPROTOCOL.Market[] memory</span>)
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
          getOwnerBaseAssets
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Returns all base assets for which a specific owner has created markets. 
          Provides an overview of asset diversity for a market owner.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>getOwnerBaseAssets</span>(<br />
            {'  '}<span style={{ color: '#fbbf24' }}>address</span> marketOwner) <span style={{ color: '#c084fc' }}>external view returns</span> (<span style={{ color: '#fbbf24' }}>address[] memory</span>)
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
          getAllActiveMarkets
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Returns all active markets across all owners. 
          Useful for protocol-wide analytics and discovery of available lending opportunities.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>getAllActiveMarkets</span>() <span style={{ color: '#c084fc' }}>external view returns</span> (<span style={{ color: '#fbbf24' }}>IPROTOCOL.Market[] memory</span>)
          </code>
        </div>
        <div style={{
          background: 'rgba(251, 191, 36, 0.1)',
          border: '1px solid rgba(251, 191, 36, 0.3)',
          borderRadius: '8px',
          padding: '1rem',
          margin: '1rem 0'
        }}>
          <strong>Gas Consideration:</strong> This function iterates through all owners and markets, 
          which can be gas-intensive with many markets. Consider pagination for UI implementations.
        </div>
      </div>

      {/* Statistics & Utility Functions */}
      <h3 style={{ color: '#0ea5e9', margin: '2rem 0 1rem 0', fontSize: '1.4rem' }}>
        Statistics & Utility Functions
      </h3>

      <div style={functionStyle}>
        <h4 style={{ color: '#f9fafb', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>
          <span style={{
            display: 'inline-block', background: 'rgba(59, 130, 246, 0.2)', color: '#3b82f6',
            padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.75rem',
            fontWeight: 600, marginRight: '0.5rem'
          }}>view</span>
          getMarketOwnersCount
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Returns the total number of unique market owners who have created markets.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>getMarketOwnersCount</span>() <span style={{ color: '#c084fc' }}>external view returns</span> (<span style={{ color: '#fbbf24' }}>uint256</span>)
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
          getMarketOwnerByIndex
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Returns a market owner address by index. 
          Enables iteration through all market owners for analytics and discovery.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>getMarketOwnerByIndex</span>(<br />
            {'  '}<span style={{ color: '#fbbf24' }}>uint256</span> index) <span style={{ color: '#c084fc' }}>external view returns</span> (<span style={{ color: '#fbbf24' }}>address</span>)
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
          getTotalMarketsCount
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Returns the total number of markets created across all owners. 
          Provides protocol-wide market statistics.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>getTotalMarketsCount</span>() <span style={{ color: '#c084fc' }}>external view returns</span> (<span style={{ color: '#fbbf24' }}>uint256</span>)
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
          getAllowedBaseAssetsCount
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Returns the number of allowed base assets without returning the full array. 
          Useful for pagination and gas-efficient checks.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>getAllowedBaseAssetsCount</span>() <span style={{ color: '#c084fc' }}>external view returns</span> (<span style={{ color: '#fbbf24' }}>uint256</span>)
          </code>
        </div>
      </div>

      {/* Upgrade Management */}
      <h3 style={{ color: '#0ea5e9', margin: '2rem 0 1rem 0', fontSize: '1.4rem' }}>
        Upgrade Management
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
          Part of the UUPS upgrade pattern for secure contract upgrades.
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
          cancelUpgrade
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Cancels a previously scheduled upgrade. 
          Allows governance to abort upgrades if issues are discovered during the timelock period.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>cancelUpgrade</span>() <span style={{ color: '#c084fc' }}>external</span> <span style={{ color: '#60a5fa' }}>onlyRole(UPGRADER_ROLE)</span>
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
          upgradeTimelockRemaining
        </h4>
        <p style={{ color: '#d1d5db', marginBottom: '1rem' }}>
          Returns the remaining time before a scheduled upgrade can be executed. 
          Returns 0 if no upgrade is scheduled or if the timelock has expired.
        </p>
        <div style={codeStyle}>
          <code style={{
            color: '#14b8a6', fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace', fontSize: '0.9rem'
          }}>
            <span style={{ color: '#c084fc' }}>function</span>{' '}
            <span style={{ color: '#14b8a6' }}>upgradeTimelockRemaining</span>() <span style={{ color: '#c084fc' }}>external view returns</span> (<span style={{ color: '#fbbf24' }}>uint256</span>)
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
        <strong style={{ color: '#3b82f6' }}>Note:</strong> This factory contract enables multi-tenant lending markets with complete isolation. 
        Each market owner can deploy their own lending infrastructure while benefiting from shared protocol features, 
        governance, and security. Uses OpenZeppelin's clone factory pattern for gas-efficient deployments.
        <br /><br />
        <strong>Complete Documentation:</strong><br />
        • <a href="https://github.com/LendefiMarkets/lendefi-markets/blob/main/contracts/markets/LendefiMarketFactory.sol" 
           target="_blank" rel="noopener noreferrer" 
           style={{ color: '#3b82f6', textDecoration: 'none' }}>
           LendefiMarketFactory.sol - Full Contract Implementation
        </a><br />
        • <a href="https://github.com/LendefiMarkets/lendefi-markets/blob/main/contracts/interfaces/ILendefiMarketFactory.sol" 
           target="_blank" rel="noopener noreferrer" 
           style={{ color: '#3b82f6', textDecoration: 'none' }}>
           ILendefiMarketFactory.sol - Contract Interface
        </a>
      </div>
    </section>
  );
};

export default LendefiMarketFactoryAPI;