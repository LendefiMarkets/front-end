import Footer from './components/layout/Footer';

function Docs() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#111827', color: '#e5e7eb' }}>
      {/* Navbar - Contact style */}
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

      {/* Main Content */}
      <main style={{ padding: '120px 0 64px 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          {/* Docs Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
              <span style={{
                background: 'linear-gradient(135deg, #0ea5e9, #14b8a6)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Documentation
              </span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#9ca3af', maxWidth: '600px', margin: '0 auto' }}>
              Everything you need to understand and integrate with Lendefi Markets - 
              the composable lending protocol for DeFi.
            </p>
          </div>

          {/* Docs Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            <div style={{
              background: 'rgba(17, 24, 39, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '2.5rem',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            className="doc-card">
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #0ea5e9, #14b8a6)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                fontSize: '1.5rem'
              }}>
                🏗️
              </div>
              <h3 style={{ color: '#f9fafb', fontSize: '1.5rem', marginBottom: '1rem' }}>
                Market Owner Guide
              </h3>
              <p style={{ color: '#9ca3af', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                Complete guide to creating and managing isolated lending markets, including detailed asset configuration, revenue optimization, and market management strategies.
              </p>
              <a href="/market-owner-guide" style={{
                color: '#14b8a6',
                textDecoration: 'none',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'color 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = '#0ea5e9'}
              onMouseOut={(e) => e.currentTarget.style.color = '#14b8a6'}>
                Read Documentation →
              </a>
            </div>

            <div style={{
              background: 'rgba(17, 24, 39, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '2.5rem',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            className="doc-card">
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #0ea5e9, #14b8a6)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                fontSize: '1.5rem'
              }}>
                💰
              </div>
              <h3 style={{ color: '#f9fafb', fontSize: '1.5rem', marginBottom: '1rem' }}>
                Lender Guide
              </h3>
              <p style={{ color: '#9ca3af', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                Learn how to earn yield by providing liquidity to markets through ERC-4626 vaults with multiple revenue streams including interest, flash loans, and liquidation proceeds.
              </p>
              <a href="/lender-guide" style={{
                color: '#14b8a6',
                textDecoration: 'none',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'color 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = '#0ea5e9'}
              onMouseOut={(e) => e.currentTarget.style.color = '#14b8a6'}>
                Read Documentation →
              </a>
            </div>

            <div style={{
              background: 'rgba(17, 24, 39, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '2.5rem',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            className="doc-card">
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #0ea5e9, #14b8a6)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                fontSize: '1.5rem'
              }}>
                📊
              </div>
              <h3 style={{ color: '#f9fafb', fontSize: '1.5rem', marginBottom: '1rem' }}>
                Borrower Guide
              </h3>
              <p style={{ color: '#9ca3af', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                Complete guide to borrowing against collateral, managing positions, understanding liquidation risks, and optimizing your borrowing strategy across markets.
              </p>
              <a href="/borrower-guide" style={{
                color: '#14b8a6',
                textDecoration: 'none',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'color 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = '#0ea5e9'}
              onMouseOut={(e) => e.currentTarget.style.color = '#14b8a6'}>
                Read Documentation →
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{
            background: 'rgba(17, 24, 39, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: '2.5rem',
            textAlign: 'center'
          }}>
            <h2 style={{ color: '#14b8a6', marginBottom: '2rem', fontSize: '2rem' }}>
              Quick Links
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem'
            }}>
              <a href="/smart-contracts" style={{
                background: 'rgba(31, 41, 55, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                padding: '1.5rem',
                textDecoration: 'none',
                color: '#d1d5db',
                transition: 'all 0.3s ease',
                display: 'block'
              }}
              className="quick-link">
                <h4 style={{ marginBottom: '0.5rem', color: 'inherit' }}>Smart Contracts</h4>
                <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Contract addresses and ABIs</p>
              </a>
              
              <a href="/api-reference" style={{
                background: 'rgba(31, 41, 55, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                padding: '1.5rem',
                textDecoration: 'none',
                color: '#d1d5db',
                transition: 'all 0.3s ease',
                display: 'block'
              }}
              className="quick-link">
                <h4 style={{ marginBottom: '0.5rem', color: 'inherit' }}>API Reference</h4>
                <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Complete function reference</p>
              </a>
              
              <a href="#tutorials" style={{
                background: 'rgba(31, 41, 55, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                padding: '1.5rem',
                textDecoration: 'none',
                color: '#d1d5db',
                transition: 'all 0.3s ease',
                display: 'block'
              }}
              className="quick-link">
                <h4 style={{ marginBottom: '0.5rem', color: 'inherit' }}>Tutorials</h4>
                <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Step-by-step guides</p>
              </a>
              
              <a href="/faq" style={{
                background: 'rgba(31, 41, 55, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                padding: '1.5rem',
                textDecoration: 'none',
                color: '#d1d5db',
                transition: 'all 0.3s ease',
                display: 'block'
              }}
              className="quick-link">
                <h4 style={{ marginBottom: '0.5rem', color: 'inherit' }}>FAQ</h4>
                <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Frequently asked questions</p>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Hover Effects CSS */}
      <style>{`
        .doc-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(135deg, #0ea5e9, #14b8a6);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        
        .doc-card:hover::before {
          transform: scaleX(1);
        }
        
        .doc-card:hover {
          transform: translateY(-4px);
          border-color: rgba(20, 184, 166, 0.3) !important;
          box-shadow: 0 20px 40px rgba(20, 184, 166, 0.1);
        }
        
        .quick-link:hover {
          background: rgba(20, 184, 166, 0.1) !important;
          border-color: #14b8a6 !important;
          color: #14b8a6 !important;
        }
        
        @media (max-width: 768px) {
          .doc-card:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}

export default Docs;