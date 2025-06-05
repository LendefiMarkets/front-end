import React from 'react'
import { useAppKitAccount, useAppKitNetwork } from '@reown/appkit/react'
import { Navigate } from 'react-router-dom'

function UserHome() {
  const { address, isConnected } = useAppKitAccount()
  const { chainId } = useAppKitNetwork()

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  const getNetworkName = (chainId: number): string => {
    switch (chainId) {
      case 1: return 'Ethereum Mainnet'
      case 11155111: return 'Sepolia Testnet'
      case 5: return 'Goerli Testnet'
      default: return `Chain ${chainId}`
    }
  }

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
            <a href="/" className="logo" style={{ textDecoration: 'none', cursor: 'pointer' }}>
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
            </a>
            
            {/* Desktop Navigation */}
            <div className="nav-links">
              <a href="/#markets">Markets</a>
              <a href="/#features">Features</a>
              <a href="/contact">Contact</a>
              <a href="#docs">Docs</a>
              {/* Use appkit-account-button for wallet info */}
              <appkit-account-button />
            </div>
          </div>
        </div>
      </nav>

      {/* Welcome Section */}
      <section style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '24px' }}>
              Welcome to <span className="gradient-text">Lendefi Markets</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#d1d5db', marginBottom: '32px' }}>
              Your wallet is successfully connected. Start exploring composable lending markets.
            </p>
            
            {/* Wallet Info Card */}
            <div className="glass-effect" style={{ maxWidth: '500px', margin: '0 auto 48px', textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '16px' }}>
                Wallet Information
              </h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ color: '#9ca3af' }}>Address:</span>
                <span style={{ fontFamily: 'monospace' }}>{address}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ color: '#9ca3af' }}>Network:</span>
                <span>{getNetworkName(chainId || 1)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#9ca3af' }}>Status:</span>
                <span style={{ color: '#10b981' }}>✓ Connected</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '48px' }}>
              <div className="glass-effect hover-glow" style={{ textAlign: 'center', cursor: 'pointer' }}>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '12px' }}>Supply Assets</h4>
                <p style={{ color: '#9ca3af', marginBottom: '16px' }}>Earn yield by supplying liquidity to lending markets</p>
                <button className="btn btn-primary" disabled>
                  Coming Soon
                </button>
              </div>
              
              <div className="glass-effect hover-glow" style={{ textAlign: 'center', cursor: 'pointer' }}>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '12px' }}>Borrow Assets</h4>
                <p style={{ color: '#9ca3af', marginBottom: '16px' }}>Borrow against your collateral with competitive rates</p>
                <button className="btn btn-primary" disabled>
                  Coming Soon
                </button>
              </div>
              
              <div className="glass-effect hover-glow" style={{ textAlign: 'center', cursor: 'pointer' }}>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '12px' }}>Portfolio</h4>
                <p style={{ color: '#9ca3af', marginBottom: '16px' }}>View your positions and manage your portfolio</p>
                <button className="btn btn-primary" disabled>
                  Coming Soon
                </button>
              </div>
            </div>

            {/* Back to Landing */}
            <a href="/" className="btn btn-outline">
              Back to Landing Page
            </a>
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
              <a href="/" className="text-gray-400">Home</a>
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
    </div>
  )
}

export default UserHome