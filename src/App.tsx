import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppKitAccount } from '@reown/appkit/react';
import ConnectWalletButton from './components/ConnectWalletButton';
import UnsupportedNetworkModal from './components/UnsupportedNetworkModal';
import { useNetworkValidation } from './hooks/useNetworkValidation';
import { getBlogPosts, formatDate } from './utils/blogUtils';
import type { BlogPost } from './utils/blogUtils';
import BlogImagePlaceholder from './blog/BlogImagePlaceholder';

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
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [marketData, setMarketData] = React.useState<{[key: string]: { usd_market_cap?: number }}>({});
  const [showNetworkModal, setShowNetworkModal] = React.useState(false);
  const [latestPosts, setLatestPosts] = React.useState<BlogPost[]>([]);
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

  // Fetch latest blog posts
  React.useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const posts = await getBlogPosts();
        // Get the latest 3 posts
        setLatestPosts(posts.slice(0, 3));
      } catch (error) {
        console.error('Failed to fetch blog posts:', error);
      }
    };

    fetchBlogPosts();
  }, []);

  // Navigate to /app when connected
  React.useEffect(() => {
    if (isConnected && address) {
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
              <Link to="/contact">Contact</Link>
              <Link to="/docs/">Docs</Link>
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
            <Link to="/contact">Contact</Link>
            <Link to="/docs/">Docs</Link>
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
                <img 
                  src="/assets/images/arbitrum-logo.svg" 
                  alt="Arbitrum"
                  width="40"
                  height="40"
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
              <Link to="/book-demo" className="btn btn-primary">Book Demo</Link>
              <Link to="/docs/" className="btn btn-outline">View Docs</Link>
              <Link to="/blog" className="btn btn-primary">Read Blog</Link>
            </div>
            
            {/* Newsletter Signup */}
            <div className="newsletter-signup" style={{ padding: '24px' }}>
              <p style={{ color: '#9ca3af', marginBottom: '16px' }}>
                Subscribe to our newsletter for updates and launch announcements
              </p>
              <form 
                className="inline-form"
                action="https://lendefimarkets.us22.list-manage.com/subscribe/post"
                method="POST"
                target="_blank"
              >
                <input type="hidden" name="u" value="64c323f9fdfbbb467ed66b1ff" />
                <input type="hidden" name="id" value="ef1fb449f6" />
                <input 
                  type="email" 
                  name="EMAIL" 
                  placeholder="Enter your email" 
                  className="form-input" 
                  required 
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
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

      {/* Latest Blog Posts Section */}
      <section className="section" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-4xl mb-4">
              Latest <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-xl text-gray-300">
              Stay updated with the latest news, tutorials, and insights from the Lendefi ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-3">
            {latestPosts.length > 0 ? latestPosts.map((post) => (
              <Link 
                key={post.slug} 
                to={`/blog/${post.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div className="glass-effect hover-glow" style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: 0 }}>
                  {/* Blog Image */}
                  <div style={{ 
                    width: '100%', 
                    height: '180px', 
                    marginBottom: '16px',
                    overflow: 'hidden',
                    borderRadius: '8px 8px 0 0',
                    background: 'rgba(20, 184, 166, 0.1)'
                  }}>
                    {post.image ? (
                      <img 
                        src={post.image} 
                        alt={post.title}
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      />
                    ) : (
                      <BlogImagePlaceholder 
                        title={post.title} 
                        type={
                          post.slug.includes('security') ? 'security' : 
                          post.slug.includes('lending') ? 'lending' : 
                          'intro'
                        }
                      />
                    )}
                  </div>
                  
                  <div style={{ padding: '0 20px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ marginBottom: '16px' }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', marginBottom: '8px' }}>
                        {post.title}
                      </h3>
                      <p style={{ fontSize: '0.875rem', color: '#14b8a6', marginBottom: '12px' }}>
                        {formatDate(post.date)} • {post.author}
                      </p>
                    </div>
                    
                    <p style={{ color: '#d1d5db', lineHeight: 1.6, marginBottom: '16px', flex: 1 }}>
                      {post.excerpt}
                    </p>
                    
                    <div style={{ marginTop: 'auto' }}>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                        {post.tags.slice(0, 3).map((tag) => (
                          <span 
                            key={tag} 
                            style={{
                              padding: '4px 12px',
                              background: 'rgba(20, 184, 166, 0.2)',
                              border: '1px solid rgba(20, 184, 166, 0.3)',
                              borderRadius: '12px',
                              fontSize: '0.75rem',
                              color: '#14b8a6'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <span style={{ color: '#3b82f6', fontSize: '0.875rem', fontWeight: 500 }}>
                        Read More →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )) : (
              // Placeholder for when no posts are loaded yet
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '48px 0' }}>
                <p style={{ color: '#9ca3af' }}>Loading latest posts...</p>
              </div>
            )}
          </div>
          
          <div className="text-center" style={{ marginTop: '48px' }}>
            <Link to="/blog" className="btn btn-outline">
              View All Posts
            </Link>
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
              <Link to="/docs/" className="text-gray-400">Documentation</Link>
              <Link to="/blog" className="text-gray-400">Blog</Link>
              <Link to="/market-owner-guide" className="text-gray-400">Market Owner Guide</Link>
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