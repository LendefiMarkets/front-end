import { useState, useEffect, lazy, Suspense } from 'react'
import { useAppKitAccount, useAppKitNetwork } from '@reown/appkit/react'
import { Navigate, Link } from 'react-router-dom'
import UnsupportedNetworkModal from './components/UnsupportedNetworkModal'
import { useNetworkValidation } from './hooks/useNetworkValidation'
import NavbarLogo from './components/layout/NavbarLogo';

// Lazy load heavy components to reduce initial bundle size
const CreateMarket = lazy(() => import('./components/CreateMarket'))
const MyMarkets = lazy(() => import('./components/MyMarkets'))

function UserHome() {
  const { address, isConnected } = useAppKitAccount()
  const { chainId } = useAppKitNetwork()
  const { isUnsupportedNetwork } = useNetworkValidation()
  const [activeTab, setActiveTab] = useState<'overview' | 'my-markets' | 'create-market'>('overview')
  const [showNetworkModal, setShowNetworkModal] = useState(false)

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  const getNetworkName = (chainId: number): string => {
    switch (chainId) {
      case 1: return 'Ethereum Mainnet'
      case 11155111: return 'Sepolia Testnet'
      case 84532: return 'Base Sepolia'
      case 421614: return 'Arbitrum Sepolia'
      case 80002: return 'Polygon Amoy'
      case 43113: return 'Avalanche Fuji'
      case 97: return 'BSC Testnet'
      case 31337: return 'Anvil Local'
      default: return `Chain ${chainId}`
    }
  }

  // Show network modal when on unsupported network
  useEffect(() => {
    setShowNetworkModal(isUnsupportedNetwork)
  }, [isUnsupportedNetwork])

  // Redirect to home if not connected
  if (!isConnected) {
    return <Navigate to="/" replace />
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#121212', color: 'white' }}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            <NavbarLogo />
            
            {/* Desktop Navigation */}
            <div className="nav-links">
              {/* Use appkit-account-button for wallet info */}
              <appkit-account-button />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Section */}
      <section style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="container">
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '24px', textAlign: 'center' }}>
              Welcome to <span className="gradient-text">Lendefi Markets</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#d1d5db', marginBottom: '48px', textAlign: 'center' }}>
              Create and manage composable lending markets as a market owner.
            </p>

            {/* Tab Navigation */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '32px', borderBottom: '1px solid rgba(75, 85, 99, 0.5)' }}>
              <button
                onClick={() => setActiveTab('overview')}
                style={{
                  padding: '12px 24px',
                  background: 'none',
                  border: 'none',
                  color: activeTab === 'overview' ? '#0ea5e9' : '#9ca3af',
                  fontWeight: 600,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  borderBottom: activeTab === 'overview' ? '2px solid #0ea5e9' : '2px solid transparent',
                  transition: 'all 0.2s'
                }}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('my-markets')}
                style={{
                  padding: '12px 24px',
                  background: 'none',
                  border: 'none',
                  color: activeTab === 'my-markets' ? '#0ea5e9' : '#9ca3af',
                  fontWeight: 600,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  borderBottom: activeTab === 'my-markets' ? '2px solid #0ea5e9' : '2px solid transparent',
                  transition: 'all 0.2s'
                }}
              >
                My Markets
              </button>
              <button
                onClick={() => setActiveTab('create-market')}
                style={{
                  padding: '12px 24px',
                  background: 'none',
                  border: 'none',
                  color: activeTab === 'create-market' ? '#0ea5e9' : '#9ca3af',
                  fontWeight: 600,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  borderBottom: activeTab === 'create-market' ? '2px solid #0ea5e9' : '2px solid transparent',
                  transition: 'all 0.2s'
                }}
              >
                Create Market
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' ? (
              <div>
                {/* Wallet Info Card */}
                <div className="glass-effect" style={{ maxWidth: '500px', margin: '0 auto 48px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '16px' }}>
                    Wallet Information
                  </h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ color: '#9ca3af' }}>Address:</span>
                    <span style={{ fontFamily: 'monospace' }}>{formatAddress(address || '')}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ color: '#9ca3af' }}>Network:</span>
                    <span>{getNetworkName((chainId as number) || 1)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#9ca3af' }}>Status:</span>
                    <span style={{ color: '#10b981' }}>✓ Connected</span>
                  </div>
                </div>

                {/* Quick Actions */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '48px' }}>
                  <div 
                    className="glass-effect hover-glow" 
                    style={{ textAlign: 'center', cursor: 'pointer' }}
                    onClick={() => setActiveTab('create-market')}
                  >
                    <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '12px' }}>Create Market</h4>
                    <p style={{ color: '#9ca3af', marginBottom: '16px' }}>Deploy a new lending market for any allowed asset</p>
                    <button className="btn btn-primary">
                      Get Started
                    </button>
                  </div>
                  
                  <div 
                    className="glass-effect hover-glow" 
                    style={{ textAlign: 'center', cursor: 'pointer' }}
                    onClick={() => setActiveTab('my-markets')}
                  >
                    <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '12px' }}>Manage Markets</h4>
                    <p style={{ color: '#9ca3af', marginBottom: '16px' }}>View and manage your deployed lending markets</p>
                    <button className="btn btn-primary">
                      View Markets
                    </button>
                  </div>
                  
                  <div className="glass-effect hover-glow" style={{ textAlign: 'center', cursor: 'pointer' }}>
                    <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '12px' }}>Analytics</h4>
                    <p style={{ color: '#9ca3af', marginBottom: '16px' }}>Track performance and metrics of your markets</p>
                    <button className="btn btn-primary" disabled>
                      Coming Soon
                    </button>
                  </div>
                </div>

                {/* Info Section */}
                <div className="glass-effect" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px' }}>
                    About Market Ownership
                  </h3>
                  <p style={{ color: '#d1d5db', marginBottom: '16px' }}>
                    As a market owner in the Lendefi protocol, you can create isolated lending markets for different base assets. 
                    Each market operates independently with its own liquidity pool and parameters.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#9ca3af' }}>
                    <li style={{ marginBottom: '12px' }}>
                      <span style={{ color: '#0ea5e9', marginRight: '8px' }}>•</span>
                      Deploy markets for USDC, DAI, USDT, and other allowed assets
                    </li>
                    <li style={{ marginBottom: '12px' }}>
                      <span style={{ color: '#0ea5e9', marginRight: '8px' }}>•</span>
                      Earn fees from the spread between borrow and supply rates
                    </li>
                    <li style={{ marginBottom: '12px' }}>
                      <span style={{ color: '#0ea5e9', marginRight: '8px' }}>•</span>
                      Markets are fully composable and integrate with the broader DeFi ecosystem
                    </li>
                    <li>
                      <span style={{ color: '#0ea5e9', marginRight: '8px' }}>•</span>
                      Each market issues ERC-4626 yield tokens to liquidity providers
                    </li>
                  </ul>
                </div>
              </div>
            ) : activeTab === 'my-markets' ? (
              <Suspense fallback={
                <div style={{ textAlign: 'center', padding: '64px 0' }}>
                  <div style={{ 
                    display: 'inline-block',
                    width: '40px',
                    height: '40px',
                    border: '4px solid rgba(14, 165, 233, 0.3)',
                    borderTopColor: '#0ea5e9',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }} />
                  <p style={{ marginTop: '16px', color: '#64748b' }}>Loading markets...</p>
                </div>
              }>
                <MyMarkets />
              </Suspense>
            ) : (
              <Suspense fallback={
                <div style={{ textAlign: 'center', padding: '64px 0' }}>
                  <div style={{ 
                    display: 'inline-block',
                    width: '40px',
                    height: '40px',
                    border: '4px solid rgba(14, 165, 233, 0.3)',
                    borderTopColor: '#0ea5e9',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }} />
                  <p style={{ marginTop: '16px', color: '#64748b' }}>Loading create market...</p>
                </div>
              }>
                <CreateMarket />
              </Suspense>
            )}

            {/* Back to Landing */}
            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <Link to="/" className="btn btn-outline">
                Back to Landing Page
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: 'rgba(17, 24, 39, 0.5)', borderTop: '1px solid rgba(255, 255, 255, 0.1)', padding: '64px 0 32px' }}>
        <div className="container">
          <div className="text-center">
            <div className="logo" style={{ justifyContent: 'center', marginBottom: '16px' }}>
              <img src="/assets/images/logo.png" alt="Lendefi Markets" style={{ height: '40px', width: 'auto' }} />
              <span style={{ 
                background: 'linear-gradient(135deg, #0ea5e9, #14b8a6)', 
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '1.25rem',
                fontWeight: 'bold'
              }}>
                Lendefi Markets
              </span>
            </div>
            <p className="text-gray-400" style={{ marginBottom: '32px' }}>
              Composable lending markets protocol for DeFi
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginBottom: '32px' }}>
              <Link to="/" className="text-gray-400">Home</Link>
              <a href="#" className="text-gray-400">Documentation</a>
              <a href="#" className="text-gray-400">GitHub</a>
              <a href="#" className="text-gray-400">Discord</a>
              <a href="#" className="text-gray-400">Twitter</a>
            </div>
            <p className="text-gray-400" style={{ fontSize: '0.875rem' }}>
              © 2024 Lendefi Protocol. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Unsupported Network Modal */}
      <UnsupportedNetworkModal 
        isOpen={showNetworkModal}
        onClose={() => setShowNetworkModal(false)}
      />
    </div>
  )
}

export default UserHome