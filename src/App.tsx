import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppKitAccount } from '@reown/appkit/react';
import ConnectWalletButton from './components/ConnectWalletButton';
import UnsupportedNetworkModal from './components/UnsupportedNetworkModal';
import { useNetworkValidation } from './hooks/useNetworkValidation';

// Generate correlated APY pairs (borrow slightly higher than supply, max 1.8x)
const getAPYPair = (supplyMin: number, supplyMax: number) => {
  const supplyAPY = Math.random() * (supplyMax - supplyMin) + supplyMin;
  const borrowAPY = supplyAPY * (1.2 + Math.random() * 0.6); // 1.2x to 1.8x of supply
  return {
    supply: supplyAPY.toFixed(2),
    borrow: borrowAPY.toFixed(2)
  };
};

function App() {
  const navigate = useNavigate();
  const { isConnected, address } = useAppKitAccount();
  const { isUnsupportedNetwork } = useNetworkValidation();
  
  // Debug logging
  React.useEffect(() => {
    console.log('App component - isConnected:', isConnected, 'address:', address);
  }, [isConnected, address]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [marketData, setMarketData] = React.useState<{[key: string]: { usd_market_cap?: number }}>({});
  const [showNetworkModal, setShowNetworkModal] = React.useState(false);
  const [apyData] = React.useState(() => ({
    usdc: getAPYPair(3, 7),
    usd1: getAPYPair(2, 5),
    usdt: getAPYPair(3.5, 6.5)
  }));

  // Fetch market cap data from CoinGecko
  React.useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=usd-coin,usd1,tether&vs_currencies=usd&include_market_cap=true'
        );
        const data = await response.json();
        setMarketData(data);
      } catch (error) {
        console.error('Failed to fetch market data:', error);
      }
    };

    fetchMarketData();
  }, []);

  // Navigate to /app when connected
  React.useEffect(() => {
    console.log('Navigation effect - isConnected:', isConnected, 'address:', address);
    if (isConnected && address) {
      console.log('Navigating to /app...');
      navigate('/app');
    }
  }, [isConnected, address, navigate]);

  // Show network modal when on unsupported network
  React.useEffect(() => {
    setShowNetworkModal(isUnsupportedNetwork);
  }, [isUnsupportedNetwork]);
  
  const handleNavClick = (elementId: string) => {
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  // Helper function to format market cap
  const formatMarketCap = (marketCap: number) => {
    if (marketCap >= 1e9) {
      return `$${(marketCap / 1e9).toFixed(1)}B`;
    } else if (marketCap >= 1e6) {
      return `$${(marketCap / 1e6).toFixed(1)}M`;
    }
    return `$${marketCap.toLocaleString()}`;
  };



  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#111827', color: 'white' }}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            <div className="logo">
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
            </div>
            
            {/* Desktop Navigation */}
            <div className="nav-links">
              <a href="#markets" onClick={(e) => { e.preventDefault(); handleNavClick('markets'); }}>Markets</a>
              <a href="#features" onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}>Features</a>
              <a href="#video" onClick={(e) => { e.preventDefault(); handleNavClick('video'); }}>Video</a>
              <a href="/contact">Contact</a>
              <a href="/docs/">Docs</a>
              <ConnectWalletButton />
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
          
          {/* Mobile Menu */}
          <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            <a href="#markets" onClick={(e) => { e.preventDefault(); handleNavClick('markets'); }}>Markets</a>
            <a href="#features" onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}>Features</a>
            <a href="#video" onClick={(e) => { e.preventDefault(); handleNavClick('video'); }}>Video</a>
            <a href="/contact">Contact</a>
            <a href="/docs/">Docs</a>
            <ConnectWalletButton />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" style={{ paddingTop: '140px' }}>
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-content">
            <h1>
              <span className="gradient-text">Composable</span> Lending Markets
            </h1>
            <p>
              Create isolated lending markets for any asset. Supply liquidity, borrow against
              collateral, and earn yield in a secure, decentralized environment.
            </p>
            
            {/* Supported Blockchains */}
            <div style={{ 
              margin: '32px 0 48px', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: '24px' 
            }}>
              <div style={{ 
                height: '1px', 
                width: '60%', 
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)' 
              }} />
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '32px',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                <img 
                  src="/assets/images/ethereum-eth-logo.svg" 
                  alt="Ethereum" 
                  style={{ 
                    height: '40px', 
                    width: '40px', 
                    opacity: '0.8',
                    transition: 'opacity 0.3s ease',
                    filter: 'brightness(0.9)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
                />
                <img 
                  src="/assets/images/bnb-bnb-logo.svg" 
                  alt="Binance Smart Chain" 
                  style={{ 
                    height: '40px', 
                    width: '40px', 
                    opacity: '0.8',
                    transition: 'opacity 0.3s ease',
                    filter: 'brightness(0.9)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
                />
                <img 
                  src="/assets/images/avalanche-avax-logo.svg" 
                  alt="Avalanche" 
                  style={{ 
                    height: '40px', 
                    width: '40px', 
                    opacity: '0.8',
                    transition: 'opacity 0.3s ease',
                    filter: 'brightness(0.9)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
                />
                <img 
                  src="/assets/images/base-logo.svg" 
                  alt="Base" 
                  style={{ 
                    height: '40px', 
                    width: '40px', 
                    opacity: '0.8',
                    transition: 'opacity 0.3s ease',
                    filter: 'brightness(0.9)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
                />
                <img 
                  src="/assets/images/polygon-matic-logo.svg" 
                  alt="Polygon" 
                  style={{ 
                    height: '40px', 
                    width: '40px', 
                    opacity: '0.8',
                    transition: 'opacity 0.3s ease',
                    filter: 'brightness(0.9)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
                />
              </div>
              <div style={{ 
                height: '1px', 
                width: '60%', 
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)' 
              }} />
            </div>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '64px' }}>
              <a href="/book-demo" className="btn btn-primary">Book Demo</a>
              <a href="/docs/" className="btn btn-outline">View Documentation</a>
            </div>
            
            {/* Newsletter Signup */}
            <div className="newsletter-signup" style={{ padding: '24px' }}>
              <p style={{ color: '#9ca3af', marginBottom: '16px' }}>
                Subscribe to our newsletter for updates and launch announcements
              </p>
              <form 
                className="inline-form" 
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const formData = new FormData(form);
                  const email = formData.get('email') as string;
                  
                  // Mailchimp API endpoint for Lendefi Markets audience
                  const MAILCHIMP_ENDPOINT = 'https://us22.api.mailchimp.com/3.0/lists/ef1fb449f6/members';
                  const MAILCHIMP_API_KEY = import.meta.env.VITE_MAILCHIMP_API_KEY;
                  
                  if (!MAILCHIMP_API_KEY) {
                    console.warn('Mailchimp API key not configured');
                    alert('Newsletter signup is not configured yet. Please try again later.');
                    return;
                  }

                  fetch(MAILCHIMP_ENDPOINT, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${MAILCHIMP_API_KEY}`
                    },
                    body: JSON.stringify({
                      email_address: email,
                      status: 'subscribed'
                    })
                  })
                  .then(response => {
                    if (response.ok) {
                      alert('Thank you for subscribing! You\'ll receive updates about Lendefi Markets.');
                      form.reset();
                    } else {
                      throw new Error('Subscription failed');
                    }
                  })
                  .catch(() => {
                    alert('Sorry, there was an error. Please try again or contact us directly.');
                  });
                }}
              >
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Enter your email" 
                  className="form-input" 
                  required 
                />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-4xl mb-4">
              Powerful <span className="gradient-text">Features</span>
            </h2>
            <p className="text-xl text-gray-300">
              Built with security, flexibility, and scalability in mind. Lendefi Markets 
              provides everything you need for modern DeFi lending.
            </p>
          </div>
          
          <div className="grid grid-cols-3">
            <div className="glass-effect hover-glow">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px' }}>Multi-Market Ecosystem</h3>
              <p className="text-gray-400">Create isolated lending markets for any ERC-20 asset with independent liquidity pools.</p>
            </div>
            <div className="glass-effect hover-glow">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px' }}>Risk Isolation</h3>
              <p className="text-gray-400">Each market operates independently, preventing contagion between different base assets.</p>
            </div>
            <div className="glass-effect hover-glow">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px' }}>ERC-4626 Vaults</h3>
              <p className="text-gray-400">Standardized yield-bearing tokens for seamless integration with DeFi ecosystem.</p>
            </div>
            <div className="glass-effect hover-glow">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px' }}>Flash Loans</h3>
              <p className="text-gray-400">Execute instant, uncollateralized loans within a single transaction for arbitrage and liquidations.</p>
            </div>
            <div className="glass-effect hover-glow">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px' }}>Advanced Oracle System</h3>
              <p className="text-gray-400">Dual-oracle support with Chainlink and Uniswap V3 TWAP for reliable pricing.</p>
            </div>
            <div className="glass-effect hover-glow">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px' }}>MEV Protection</h3>
              <p className="text-gray-400">Built-in slippage controls and same-block operation prevention for user safety.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section id="markets" className="section">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-4xl mb-4">
              Available <span className="gradient-text">Markets</span>
            </h2>
            <p className="text-xl text-gray-300">
              Each market operates independently with its own liquidity pool, 
              risk parameters, and yield opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-3">
            <div className="glass-effect hover-glow">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '8px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginRight: '16px',
                  overflow: 'hidden'
                }}>
                  <img 
                    src="/assets/images/usdc-icon.svg" 
                    alt="USDC" 
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>USDC</h3>
                  <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>USD Coin Market</p>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="text-gray-400">Market Cap</span>
                <span>
                  {marketData['usd-coin']?.usd_market_cap 
                    ? formatMarketCap(marketData['usd-coin'].usd_market_cap)
                    : '--'
                  }
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="text-gray-400">Supply APY</span>
                <span style={{ color: '#10b981' }}>{apyData.usdc.supply}%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span className="text-gray-400">Borrow APY</span>
                <span style={{ color: '#3b82f6' }}>{apyData.usdc.borrow}%</span>
              </div>
            </div>
            
            <div className="glass-effect hover-glow">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '8px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginRight: '16px',
                  overflow: 'hidden'
                }}>
                  <img 
                    src="/assets/images/USD1.webp" 
                    alt="USD1" 
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>USD1</h3>
                  <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>USD1 Stablecoin Market</p>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="text-gray-400">Market Cap</span>
                <span>
                  {marketData['usd1']?.usd_market_cap 
                    ? formatMarketCap(marketData['usd1'].usd_market_cap)
                    : '$2.1B'
                  }
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="text-gray-400">Supply APY</span>
                <span style={{ color: '#10b981' }}>{apyData.usd1.supply}%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span className="text-gray-400">Borrow APY</span>
                <span style={{ color: '#3b82f6' }}>{apyData.usd1.borrow}%</span>
              </div>
            </div>
            
            <div className="glass-effect hover-glow">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '8px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginRight: '16px',
                  overflow: 'hidden'
                }}>
                  <img 
                    src="/assets/images/usdt-icon.svg" 
                    alt="USDT" 
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>USDT</h3>
                  <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Tether USD Market</p>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="text-gray-400">Market Cap</span>
                <span>
                  {marketData['tether']?.usd_market_cap 
                    ? formatMarketCap(marketData['tether'].usd_market_cap)
                    : '--'
                  }
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="text-gray-400">Supply APY</span>
                <span style={{ color: '#10b981' }}>{apyData.usdt.supply}%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span className="text-gray-400">Borrow APY</span>
                <span style={{ color: '#3b82f6' }}>{apyData.usdt.borrow}%</span>
              </div>
            </div>
          </div>
          
          <div className="text-center" style={{ marginTop: '48px' }}>
            <p className="text-gray-400">
              More markets coming soon! Want to see a specific asset?{' '}
              <a href="https://x.com/LendefiMarkets" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6' }}>Join our community</a>
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="section">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-4xl mb-4">
              Understanding <span className="gradient-text">Lendefi Markets</span>
            </h2>
            <p className="text-xl text-gray-300">
              Learn how composable lending markets work and how you can participate
              as a liquidity provider or borrower.
            </p>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="glass-effect" style={{ aspectRatio: '16/9', position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
              <video
                width="100%"
                height="100%"
                controls
                preload="metadata"
                style={{ 
                  borderRadius: '8px', 
                  objectFit: 'cover',
                  display: 'block'
                }}
                onError={(e) => {
                  // Show fallback message if video fails to load
                  const target = e.target as HTMLVideoElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              >
                <source src="/assets/LendefiPromo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Fallback content */}
              <div 
                style={{ 
                  position: 'absolute',
                  inset: 0,
                  display: 'none',
                  alignItems: 'center', 
                  justifyContent: 'center',
                  backgroundColor: 'rgba(17, 24, 39, 0.8)',
                  color: '#9ca3af',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                <div style={{ fontSize: '48px' }}>🎬</div>
                <p>Video not available</p>
                <p style={{ fontSize: '0.875rem' }}>LendefiPromo.mp4 not found in assets folder</p>
              </div>
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
              <a href="/docs/" className="text-gray-400">Documentation</a>
              <a href="/market-owner-guide" className="text-gray-400">Market Owner Guide</a>
              <a href="https://github.com/LendefiMarkets" className="text-gray-400">GitHub</a>
              <a href="https://x.com/LendefiMarkets" className="text-gray-400">X</a>
            </div>
            <p className="text-gray-400" style={{ fontSize: '0.875rem' }}>
              © 2025 Lendefi Labs LLC. All rights reserved.
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
  );
}

export default App;