import { useEffect, useState } from 'react'
import { useAppKitAccount, useAppKitProvider, useAppKitNetwork } from '@reown/appkit/react'
import { ethers } from 'ethers'
import { CONTRACTS, MARKET_FACTORY_ABI, ERC20_ABI, type SupportedChainId } from '../config/contracts'
import MarketDashboard from './MarketDashboard'

interface DeployedMarket {
  baseAsset: string
  baseAssetSymbol: string
  name: string
  symbol: string
  core: string
  baseVault: string
  createdAt: number
  active: boolean
}

export default function MyMarkets() {
  const { address } = useAppKitAccount()
  const { walletProvider } = useAppKitProvider('eip155')
  const { chainId } = useAppKitNetwork()
  const [markets, setMarkets] = useState<DeployedMarket[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedMarket, setSelectedMarket] = useState<DeployedMarket | null>(null)

  const factoryAddress = chainId && CONTRACTS[chainId as SupportedChainId]?.marketFactory

  const fetchUserMarkets = async () => {
    console.log('fetchUserMarkets called with:', { 
      walletProvider: !!walletProvider, 
      factoryAddress, 
      address,
      chainId 
    })
    
    if (!walletProvider || !factoryAddress || !address) {
      console.log('Missing required data for fetching user markets')
      return
    }

    try {
      setIsLoading(true)
      setError(null)

      const provider = new ethers.BrowserProvider(walletProvider as any)
      const factoryContract = new ethers.Contract(factoryAddress, MARKET_FACTORY_ABI, provider)

      // Get all MarketCreated events for this user
      const filter = factoryContract.filters.MarketCreated(address)
      const events = await factoryContract.queryFilter(filter)

      // Process events to get market data
      const marketData = await Promise.all(
        events.map(async (event) => {
          const args = (event as any).args
          const { baseAsset, core, baseVault, name, symbol } = args
          
          try {
            // Get base asset symbol
            const tokenContract = new ethers.Contract(baseAsset, ERC20_ABI, provider)
            const baseAssetSymbol = await tokenContract.symbol()

            // Get block timestamp for creation date
            const block = await provider.getBlock(event.blockNumber)
            const createdAt = block?.timestamp || 0

            return {
              baseAsset,
              baseAssetSymbol,
              name,
              symbol,
              core,
              baseVault,
              createdAt,
              active: true // Assume active for now
            }
          } catch (err) {
            console.error(`Failed to fetch data for market ${baseAsset}:`, err)
            return null
          }
        })
      )

      // Filter out failed fetches and sort by creation date
      const validMarkets = marketData
        .filter((market): market is DeployedMarket => market !== null)
        .sort((a, b) => b.createdAt - a.createdAt)

      setMarkets(validMarkets)
    } catch (err) {
      console.error('Failed to fetch user markets:', err)
      setError('Failed to load your markets')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (address && factoryAddress) {
      fetchUserMarkets()
    }
  }, [address, factoryAddress])

  if (selectedMarket) {
    return (
      <MarketDashboard
        baseAsset={selectedMarket.baseAsset}
        marketOwner={address}
        onBack={() => setSelectedMarket(null)}
      />
    )
  }

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '64px 0' }}>
        <div style={{ 
          display: 'inline-block',
          width: '40px',
          height: '40px',
          border: '4px solid rgba(14, 165, 233, 0.3)',
          borderTop: '4px solid #0ea5e9',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
        <p style={{ marginTop: '16px', color: '#9ca3af' }}>Loading your markets...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="glass-effect" style={{ textAlign: 'center', padding: '48px' }}>
        <h3 style={{ color: '#ef4444', marginBottom: '16px' }}>Error Loading Markets</h3>
        <p style={{ color: '#9ca3af', marginBottom: '24px' }}>{error}</p>
        <button onClick={fetchUserMarkets} className="btn btn-primary">
          Try Again
        </button>
      </div>
    )
  }

  if (markets.length === 0) {
    return (
      <div className="glass-effect" style={{ textAlign: 'center', padding: '48px' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px' }}>
          No Markets Found
        </h3>
        <p style={{ color: '#9ca3af', marginBottom: '24px' }}>
          You haven't created any markets yet. Create your first market to get started.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
          <button 
            onClick={fetchUserMarkets}
            style={{
              background: 'rgba(14, 165, 233, 0.1)',
              border: '1px solid rgba(14, 165, 233, 0.3)',
              borderRadius: '8px',
              padding: '12px 24px',
              color: '#0ea5e9',
              cursor: 'pointer',
              transition: 'all 0.2s',
              fontSize: '14px',
              fontWeight: 600
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(14, 165, 233, 0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(14, 165, 233, 0.1)'
            }}
          >
            🔄 Refresh
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
        <div>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '8px' }}>
            My Markets
          </h2>
          <p style={{ color: '#9ca3af' }}>
            Markets you've deployed and own. Click on any market to view its dashboard.
          </p>
        </div>
        <button 
          onClick={fetchUserMarkets}
          style={{
            background: 'rgba(14, 165, 233, 0.1)',
            border: '1px solid rgba(14, 165, 233, 0.3)',
            borderRadius: '8px',
            padding: '8px',
            color: '#0ea5e9',
            cursor: 'pointer',
            transition: 'all 0.2s',
            fontSize: '16px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(14, 165, 233, 0.2)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(14, 165, 233, 0.1)'
          }}
          title="Refresh markets"
        >
          🔄
        </button>
      </div>

      <div style={{ display: 'grid', gap: '24px' }}>
        {markets.map((market, index) => (
          <div 
            key={`${market.baseAsset}-${index}`}
            className="glass-effect hover-glow"
            style={{ 
              cursor: 'pointer',
              transition: 'all 0.2s',
              padding: '24px'
            }}
            onClick={() => setSelectedMarket(market)}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: 0 }}>
                    {market.name}
                  </h3>
                  <span style={{ 
                    background: 'rgba(14, 165, 233, 0.2)', 
                    color: '#0ea5e9', 
                    padding: '4px 8px', 
                    borderRadius: '8px', 
                    fontSize: '0.75rem',
                    fontWeight: 600
                  }}>
                    {market.symbol}
                  </span>
                  <span style={{ 
                    background: market.active ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)', 
                    color: market.active ? '#10b981' : '#ef4444', 
                    padding: '4px 8px', 
                    borderRadius: '8px', 
                    fontSize: '0.75rem',
                    fontWeight: 600
                  }}>
                    {market.active ? 'Active' : 'Inactive'}
                  </span>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '4px' }}>
                      Base Asset
                    </div>
                    <div style={{ fontWeight: 600 }}>
                      {market.baseAssetSymbol}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#9ca3af', fontFamily: 'monospace' }}>
                      {market.baseAsset.slice(0, 10)}...{market.baseAsset.slice(-8)}
                    </div>
                  </div>
                  
                  <div>
                    <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '4px' }}>
                      Core Contract
                    </div>
                    <div style={{ fontSize: '0.875rem', fontFamily: 'monospace' }}>
                      {market.core.slice(0, 10)}...{market.core.slice(-8)}
                    </div>
                  </div>
                  
                  <div>
                    <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '4px' }}>
                      Vault Contract
                    </div>
                    <div style={{ fontSize: '0.875rem', fontFamily: 'monospace' }}>
                      {market.baseVault.slice(0, 10)}...{market.baseVault.slice(-8)}
                    </div>
                  </div>
                  
                  <div>
                    <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '4px' }}>
                      Created
                    </div>
                    <div style={{ fontWeight: 600 }}>
                      {new Date(market.createdAt * 1000).toLocaleDateString()}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
                      {new Date(market.createdAt * 1000).toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              </div>
              
              <div style={{ marginLeft: '24px' }}>
                <button 
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedMarket(market)
                  }}
                >
                  View Dashboard →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div style={{ marginTop: '32px', textAlign: 'center' }}>
        <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
          Showing {markets.length} market{markets.length !== 1 ? 's' : ''} deployed by your wallet
        </p>
      </div>
    </div>
  )
}