function Docs() {
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
              <a href="/" className="btn btn-outline">← Back to Main</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Docs Section */}
      <section className="section" style={{ paddingTop: '120px' }}>
        <div className="container">
          <div className="text-center mb-8">
            <h1 className="text-4xl mb-4">
              <span className="gradient-text">Documentation</span>
            </h1>
            <p className="text-xl text-gray-300">
              Learn how to use Lendefi Markets protocol
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-effect p-6">
                <h3 className="text-lg font-semibold mb-4">Getting Started</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '12px' }}>
                    <a href="#overview" style={{ color: '#0ea5e9', textDecoration: 'none' }}>
                      Protocol Overview
                    </a>
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    <a href="#create-market" style={{ color: '#0ea5e9', textDecoration: 'none' }}>
                      Creating a Market
                    </a>
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    <a href="#manage-assets" style={{ color: '#0ea5e9', textDecoration: 'none' }}>
                      Managing Collateral Assets
                    </a>
                  </li>
                </ul>
              </div>

              <div className="glass-effect p-6">
                <h3 className="text-lg font-semibold mb-4">Developer Resources</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '12px' }}>
                    <a href="#smart-contracts" style={{ color: '#0ea5e9', textDecoration: 'none' }}>
                      Smart Contracts
                    </a>
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    <a href="#integration" style={{ color: '#0ea5e9', textDecoration: 'none' }}>
                      Integration Guide
                    </a>
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    <a href="#sdk" style={{ color: '#0ea5e9', textDecoration: 'none' }}>
                      SDK Reference
                    </a>
                  </li>
                </ul>
              </div>

              <div className="glass-effect p-6">
                <h3 className="text-lg font-semibold mb-4">Risk Management</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '12px' }}>
                    <a href="#oracles" style={{ color: '#0ea5e9', textDecoration: 'none' }}>
                      Oracle Configuration
                    </a>
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    <a href="#risk-params" style={{ color: '#0ea5e9', textDecoration: 'none' }}>
                      Risk Parameters
                    </a>
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    <a href="#liquidations" style={{ color: '#0ea5e9', textDecoration: 'none' }}>
                      Liquidation Process
                    </a>
                  </li>
                </ul>
              </div>

              <div className="glass-effect p-6">
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '12px' }}>
                    <a href="/contact" style={{ color: '#0ea5e9', textDecoration: 'none' }}>
                      Contact Support
                    </a>
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    <a href="https://github.com/LendefiMarkets" style={{ color: '#0ea5e9', textDecoration: 'none' }}>
                      GitHub Repository
                    </a>
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    <a href="/market-owner-guide" style={{ color: '#0ea5e9', textDecoration: 'none' }}>
                      Market Owner Guide
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="glass-effect p-6 mt-8">
              <h3 className="text-lg font-semibold mb-4">Coming Soon</h3>
              <p style={{ color: '#9ca3af' }}>
                Full documentation with detailed guides, API references, and tutorials is currently being developed. 
                In the meantime, check out our GitHub repository for technical details and smart contract documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: 'rgba(17, 24, 39, 0.5)', borderTop: '1px solid rgba(255, 255, 255, 0.1)', padding: '64px 0 32px', marginTop: '80px' }}>
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
              <a href="/contact" className="text-gray-400">Contact</a>
              <a href="https://github.com/LendefiMarkets" className="text-gray-400">GitHub</a>
              <a href="https://x.com/LendefiMarkets" className="text-gray-400">X</a>
            </div>
            <p className="text-gray-400" style={{ fontSize: '0.875rem' }}>
              © 2025 Lendefi Labs LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Docs