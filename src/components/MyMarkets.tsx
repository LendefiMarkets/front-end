import React, { useEffect, useState } from 'react'
import { useAppKitAccount, useAppKitProvider, useAppKitNetwork } from '@reown/appkit/react'
import { ethers } from 'ethers'
import { CONTRACTS, MARKET_FACTORY_ABI, ERC20_ABI, type SupportedChainId } from '../config/contracts'
import { networks } from '../config/appkit'

// Type definitions
interface EIP1193Provider {
  request(args: { method: string; params?: unknown }): Promise<unknown>
}

interface ContractMarketData {
  core: string
  baseVault: string
  baseAsset: string
  assetsModule: string
  porFeed: string
  decimals: bigint
  name: string
  symbol: string
  createdAt: bigint
  active: boolean
}

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

  const factoryAddress = chainId && CONTRACTS[chainId as SupportedChainId]?.marketFactory
  
  // Get network name from chain ID
  const getNetworkName = (chainId: number | undefined): string => {
    if (!chainId) return 'Unknown Network'
    const network = networks.find(n => n.id === chainId)
    return network?.name || 'Unknown Network'
  }

  const fetchUserMarkets = React.useCallback(async () => {
    if (!walletProvider || !factoryAddress || !address) {
      return
    }

    try {
      setIsLoading(true)
      setError(null)

      const provider = new ethers.BrowserProvider(walletProvider as EIP1193Provider)
      const factoryContract = new ethers.Contract(factoryAddress, MARKET_FACTORY_ABI, provider)

      // Use the getOwnerMarkets view function instead of querying events
      const marketsData = await factoryContract.getOwnerMarkets(address)
      
      // Process the returned market data
      const marketPromises = marketsData.map(async (market: ContractMarketData) => {
        try {
          // Get base asset symbol
          const tokenContract = new ethers.Contract(market.baseAsset, ERC20_ABI, provider)
          const baseAssetSymbol = await tokenContract.symbol()

          return {
            baseAsset: market.baseAsset,
            baseAssetSymbol,
            name: market.name,
            symbol: market.symbol,
            core: market.core,
            baseVault: market.baseVault,
            createdAt: Number(market.createdAt),
            active: market.active
          }
        } catch (err) {
          console.error(`Failed to fetch data for market ${market.baseAsset}:`, err)
          return null
        }
      })

      const marketData = await Promise.all(marketPromises)

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
  }, [walletProvider, factoryAddress, address])

  useEffect(() => {
    if (address && factoryAddress) {
      fetchUserMarkets()
    }
  }, [address, factoryAddress, fetchUserMarkets])


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
            onClick={() => {
              const params = new URLSearchParams({
                chainId: chainId!.toString(),
                baseAsset: market.baseAsset,
                marketOwner: address!,
                marketName: market.name,
                marketSymbol: market.symbol
              })
              window.open(`/market?${params.toString()}`, '_blank')
            }}
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
                    background: 'rgba(139, 92, 246, 0.2)', 
                    color: '#8b5cf6', 
                    padding: '4px 8px', 
                    borderRadius: '8px', 
                    fontSize: '0.75rem',
                    fontWeight: 600
                  }}>
                    {getNetworkName(chainId as number)}
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
                <a 
                  href={`/market?chainId=${chainId}&baseAsset=${market.baseAsset}&marketOwner=${address}&marketName=${encodeURIComponent(market.name)}&marketSymbol=${market.symbol}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ textDecoration: 'none', display: 'inline-block' }}
                  onClick={(e) => {
                    e.stopPropagation()
                  }}
                >
                  View Dashboard →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div style={{ marginTop: '32px', textAlign: 'center' }}>
        <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
          Showing {markets.length} market{markets.length !== 1 ? 's' : ''} deployed by your wallet on {getNetworkName(chainId as number)}
        </p>
      </div>
    </div>
  )
}