import { useParams, useSearchParams, Link } from 'react-router-dom'
import { lazy, Suspense, useEffect, useState } from 'react'
import { useAppKitNetwork } from '@reown/appkit/react'
import { parseMarketId } from './utils/marketId'

interface MarketInfo {
  chainId: number
  baseAsset: string
  marketOwner: string
  marketName?: string
  marketSymbol?: string
}

const MarketDashboard = lazy(() => import('./components/MarketDashboard'))

export default function MarketDashboardPage() {
  const { marketId, network, token, owner } = useParams()
  const [searchParams] = useSearchParams()
  const { chainId: connectedChainId } = useAppKitNetwork()
  const [marketInfo, setMarketInfo] = useState<MarketInfo | null>(null)
  
  // Get market details from URL parameters
  useEffect(() => {
    // Priority 1: Direct query params (from MyMarkets)
    const chainId = searchParams.get('chainId')
    const baseAsset = searchParams.get('baseAsset')
    const marketOwner = searchParams.get('marketOwner')
    const marketName = searchParams.get('marketName')
    const marketSymbol = searchParams.get('marketSymbol')
    
    if (chainId && baseAsset && marketOwner) {
      setMarketInfo({
        chainId: parseInt(chainId),
        baseAsset,
        marketOwner,
        marketName: marketName || '',
        marketSymbol: marketSymbol || ''
      })
      return
    }
    
    // Priority 2: URL path format /market/network/token/owner
    if (network && token && owner) {
      const fullPath = `${network}/${token}/${owner}`
      const parsed = parseMarketId(fullPath, searchParams)
      if (parsed) {
        setMarketInfo(parsed)
        return
      }
    }
    
    // Priority 3: marketId parameter
    if (marketId) {
      const parsed = parseMarketId(marketId, searchParams)
      if (parsed) {
        setMarketInfo(parsed)
        return
      }
    }
    
    // Priority 4: Legacy query params
    const legacyChainId = searchParams.get('chain')
    const legacyBaseAsset = searchParams.get('baseAsset')
    const legacyMarketOwner = searchParams.get('owner')
    
    if (legacyChainId && legacyBaseAsset) {
      setMarketInfo({
        chainId: parseInt(legacyChainId),
        baseAsset: legacyBaseAsset,
        marketOwner: legacyMarketOwner || ''
      })
    }
  }, [marketId, network, token, owner, searchParams])
  
  // Validate that the connected chain matches the market's chain
  if (marketInfo && connectedChainId && marketInfo.chainId !== connectedChainId) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#0f172a', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}>
        <div className="glass-effect" style={{ 
          textAlign: 'center', 
          padding: '48px',
          maxWidth: '500px'
        }}>
          <h2 style={{ color: '#ef4444', marginBottom: '16px' }}>Wrong Network</h2>
          <p style={{ color: '#9ca3af', marginBottom: '24px' }}>
            This market is on a different network. Please switch to the correct network to view this market.
          </p>
          <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
            Market Network: Chain ID {marketInfo.chainId}<br />
            Your Network: Chain ID {connectedChainId}
          </p>
        </div>
      </div>
    )
  }
  
  if (!marketInfo) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#0f172a', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}>
        <div className="glass-effect" style={{ 
          textAlign: 'center', 
          padding: '48px',
          maxWidth: '500px'
        }}>
          <h2 style={{ color: '#ef4444', marginBottom: '16px' }}>Market Not Found</h2>
          <p style={{ color: '#9ca3af', marginBottom: '24px' }}>
            The market ID or parameters are invalid. Please check the URL and try again.
          </p>
          <button 
            onClick={() => window.location.href = '/app'}
            className="btn btn-primary"
          >
            Go to Markets
          </button>
        </div>
      </div>
    )
  }
  
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#121212', color: 'white' }}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            <Link to="/" className="logo" style={{ textDecoration: 'none', cursor: 'pointer' }}>
              <img src="/assets/images/logo.png" alt="Lendefi Markets" style={{ height: '50px', width: 'auto' }} />
              <span style={{ 
                background: 'linear-gradient(135deg, #0ea5e9, #14b8a6)', 
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                Lendefi Markets
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="nav-links">
              <appkit-account-button />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Section */}
      <section style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="container">
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {/* Market Title */}
            <div style={{ marginBottom: '48px', textAlign: 'center' }}>
              <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '24px' }}>
                Market <span className="gradient-text">Dashboard</span>
              </h1>
              {marketInfo.marketName && (
                <p style={{ fontSize: '1.25rem', color: '#d1d5db' }}>
                  {marketInfo.marketName} ({marketInfo.marketSymbol})
                </p>
              )}
            </div>

            {/* Dashboard Content */}
            <Suspense fallback={
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '400px'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    display: 'inline-block',
                    width: '40px',
                    height: '40px',
                    border: '4px solid rgba(14, 165, 233, 0.3)',
                    borderTop: '4px solid #0ea5e9',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }} />
                  <p style={{ marginTop: '16px', color: '#64748b' }}>Loading market dashboard...</p>
                </div>
              </div>
            }>
              <MarketDashboard
                baseAsset={marketInfo.baseAsset}
                marketOwner={marketInfo.marketOwner}
                chainId={marketInfo.chainId}
                marketName={marketInfo.marketName}
                marketSymbol={marketInfo.marketSymbol}
              />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  )
}