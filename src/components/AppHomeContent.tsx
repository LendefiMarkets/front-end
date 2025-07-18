import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { formatDate, getBlogPosts } from '../utils/blogUtils'
import type { BlogPost } from '../utils/blogUtils'
import BlogImagePlaceholder from '../blog/BlogImagePlaceholder'

export default function AppHomeContent() {
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadFeaturedPost = async () => {
      try {
        const blogPosts = await getBlogPosts()
        // Find the lendefi-protocol post
        const lendefiPost = blogPosts.find(post => post.slug === 'lendefi-protocol')
        setFeaturedPost(lendefiPost || null)
      } catch (error) {
        console.error('Error loading featured post:', error)
      } finally {
        setLoading(false)
      }
    }

    loadFeaturedPost()
  }, [])

  if (loading) {
    return (
      <div className="blog-container">
        <div style={{ textAlign: 'center', padding: '3rem 0' }}>
          <h2 style={{ color: '#ffffff' }}>Loading...</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="blog-container">
      {/* PREMIUM WALLET PROMOTION */}
      <div style={{
        background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        padding: '2.5rem',
        marginBottom: '2rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-40%',
          right: '-15%',
          width: '300px',
          height: '300px',
          background: 'rgba(99, 102, 241, 0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem'
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(168, 85, 247, 0.2)',
                padding: '0.5rem 1rem',
                borderRadius: '30px',
                marginBottom: '1rem'
              }}>
                <span style={{ fontSize: '1rem' }}>⚡</span>
                <span style={{
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  color: '#a78bfa'
                }}>
                  EARLY ACCESS
                </span>
              </div>
              <h2 style={{
                fontSize: '2.25rem',
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '0.75rem',
                lineHeight: '1.2'
              }}>
                Lendefi Premium Wallet
              </h2>
              <p style={{
                fontSize: '1.25rem',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '1.5rem',
                fontWeight: '500'
              }}>
                500 Free Annual Subscriptions • $599 Value
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <span style={{
                    background: 'rgba(99, 102, 241, 0.2)',
                    padding: '0.25rem',
                    borderRadius: '6px',
                    display: 'flex'
                  }}>
                    ⛽
                  </span>
                  <span style={{ color: '#e5e7eb', fontSize: '1rem' }}>
                    90% Gas Fee Subsidy on All Transactions
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <span style={{
                    background: 'rgba(99, 102, 241, 0.2)',
                    padding: '0.25rem',
                    borderRadius: '6px',
                    display: 'flex'
                  }}>
                    🚀
                  </span>
                  <span style={{ color: '#e5e7eb', fontSize: '1rem' }}>
                    Priority Transaction Processing
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <span style={{
                    background: 'rgba(99, 102, 241, 0.2)',
                    padding: '0.25rem',
                    borderRadius: '6px',
                    display: 'flex'
                  }}>
                    📊
                  </span>
                  <span style={{ color: '#e5e7eb', fontSize: '1rem' }}>
                    Advanced Analytics & Portfolio Insights
                  </span>
                </div>
              </div>
              <button
                disabled
                style={{
                  padding: '0.875rem 2rem',
                  background: 'rgba(20, 184, 166, 0.5)',
                  color: 'rgba(255, 255, 255, 0.7)',
                  border: 'none',
                  borderRadius: '10px',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  cursor: 'not-allowed',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(20, 184, 166, 0.2)'
                }}
              >
                Claim Premium Access →
              </button>
            </div>
            <div style={{
              textAlign: 'center',
              minWidth: '200px'
            }}>
              <div style={{
                background: 'rgba(99, 102, 241, 0.1)',
                border: '2px solid rgba(99, 102, 241, 0.3)',
                borderRadius: '16px',
                padding: '1.5rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  color: '#a78bfa',
                  marginBottom: '0.5rem'
                }}>
                  423
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}>
                  of 500 Claimed
                </div>
              </div>
              <p style={{
                fontSize: '0.875rem',
                color: 'rgba(255, 255, 255, 0.6)'
              }}>
                Ends in 48 hours
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* NEWSLETTER SECTION */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '16px',
        padding: '2rem',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        <h2 style={{
          color: '#ffffff',
          fontSize: '1.5rem',
          marginBottom: '0.5rem',
          fontWeight: 'bold'
        }}>
          Stay Ahead of the Curve
        </h2>
        <p style={{ 
          color: '#9ca3af', 
          marginBottom: '1.5rem',
          fontSize: '1rem'
        }}>
          Subscribe to our newsletter for exclusive updates, market insights, and early access to new features
        </p>
        <form 
          style={{
            display: 'flex',
            gap: '0.75rem',
            maxWidth: '500px',
            margin: '0 auto',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
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
            required
            style={{
              flex: '1 1 250px',
              padding: '0.75rem 1rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              color: '#ffffff',
              fontSize: '1rem',
              outline: 'none',
              transition: 'all 0.3s ease'
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'rgba(20, 184, 166, 0.5)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
          />
          <button 
            type="submit" 
            style={{
              padding: '0.75rem 2rem',
              background: 'linear-gradient(135deg, #14b8a6 0%, #0ea5e9 100%)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(20, 184, 166, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* PROMOTION SECTION */}
      <div style={{
        background: 'linear-gradient(135deg, #14b8a6 0%, #14b8a6 100%)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        padding: '3rem 2rem',
        marginBottom: '2rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '300px',
          height: '300px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'inline-block',
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            marginBottom: '1rem',
            fontSize: '0.875rem',
            fontWeight: '500',
            color: '#d1d5db'
          }}>
            🚀 LAUNCHING SOON
          </div>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#ffffff',
            marginBottom: '1rem',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            lineHeight: '1.2'
          }}>
            The Future of DeFi is Multi-Chain
          </h1>
          <p style={{
            fontSize: '1.5rem',
            color: 'rgba(255, 255, 255, 0.95)',
            marginBottom: '0.5rem',
            fontWeight: '600'
          }}>
            $LEND Token • 6 Blockchains • One Protocol
          </p>
          <p style={{
            fontSize: '1.125rem',
            color: 'rgba(255, 255, 255, 0.85)',
            marginBottom: '2rem'
          }}>
            300M Total Supply • 26% Community Rewards • DAO Governed
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a
              href="https://www.tally.xyz/gov/lendefi-dao-mainnet"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                background: 'rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Join Governance
            </a>
            <Link
              to="/blog/lendefi-protocol"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                background: '#ffffff',
                color: '#14b8a6',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 255, 255, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* ANNOUNCEMENT SECTION */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          padding: '1.5rem',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.borderColor = 'rgba(20, 184, 166, 0.3)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}>
          <div style={{
            background: 'rgba(20, 184, 166, 0.2)',
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem',
            fontSize: '1.5rem'
          }}>
            🌐
          </div>
          <h3 style={{
            color: '#ffffff',
            fontSize: '1.25rem',
            marginBottom: '0.75rem',
            fontWeight: 'bold'
          }}>
            True Cross-Chain Lending
          </h3>
          <p style={{
            color: '#d1d5db',
            fontSize: '0.875rem',
            lineHeight: '1.6',
            marginBottom: '1rem'
          }}>
            One protocol, six chains, infinite possibilities. Lend and borrow seamlessly across Ethereum, Polygon, Arbitrum, Base, Avalanche, and BSC.
          </p>
          <a 
            href="https://etherscan.io/address/0x5e53aebe377efc92213514ec07f8ef3af426dd1d"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#14b8a6',
              fontSize: '0.875rem',
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = '#0ea5e9'}
            onMouseOut={(e) => e.currentTarget.style.color = '#14b8a6'}
          >
            View Contract →
          </a>
        </div>

        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          padding: '1.5rem',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.borderColor = 'rgba(20, 184, 166, 0.3)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}>
          <div style={{
            background: 'rgba(59, 130, 246, 0.2)',
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem',
            fontSize: '1.5rem'
          }}>
            🔗
          </div>
          <h3 style={{
            color: '#ffffff',
            fontSize: '1.25rem',
            marginBottom: '0.75rem',
            fontWeight: 'bold'
          }}>
            Powered by Chainlink CCIP
          </h3>
          <p style={{
            color: '#d1d5db',
            fontSize: '0.875rem',
            lineHeight: '1.6',
            marginBottom: '1rem'
          }}>
            Military-grade security meets DeFi innovation. Your assets travel safely across chains with Chainlink's battle-tested infrastructure.
          </p>
          <a 
            href="https://chain.link/ccip"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#14b8a6',
              fontSize: '0.875rem',
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = '#0ea5e9'}
            onMouseOut={(e) => e.currentTarget.style.color = '#14b8a6'}
          >
            Learn More →
          </a>
        </div>

        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          padding: '1.5rem',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.borderColor = 'rgba(20, 184, 166, 0.3)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}>
          <div style={{
            background: 'rgba(168, 85, 247, 0.2)',
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem',
            fontSize: '1.5rem'
          }}>
            🏦
          </div>
          <h3 style={{
            color: '#ffffff',
            fontSize: '1.25rem',
            marginBottom: '0.75rem',
            fontWeight: 'bold'
          }}>
            Institutional-Grade Protocol
          </h3>
          <p style={{
            color: '#d1d5db',
            fontSize: '0.875rem',
            lineHeight: '1.6',
            marginBottom: '1rem'
          }}>
            Built for the big leagues. Advanced risk management, real-time analytics, and professional tools for serious DeFi participants.
          </p>
          <Link 
            to="/docs"
            style={{
              color: '#14b8a6',
              fontSize: '0.875rem',
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = '#0ea5e9'}
            onMouseOut={(e) => e.currentTarget.style.color = '#14b8a6'}
          >
            Read Docs →
          </Link>
        </div>
      </div>

      {/* ARTICLE SECTION */}
      {featuredPost && (
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          overflow: 'hidden',
          marginBottom: '2rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '0'
          }}>
            {/* Article Image */}
            <div style={{
              height: '300px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              {featuredPost.image ? (
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              ) : (
                <BlogImagePlaceholder 
                  title={featuredPost.title} 
                  type="intro"
                />
              )}
              <div style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                background: 'rgba(20, 184, 166, 0.9)',
                color: '#ffffff',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '0.875rem'
              }}>
                FEATURED ARTICLE
              </div>
            </div>

            {/* Article Content */}
            <div style={{
              padding: '2rem'
            }}>
              <div style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '1rem',
                color: '#9ca3af',
                fontSize: '0.875rem'
              }}>
                <span>{formatDate(featuredPost.date)}</span>
                <span>•</span>
                <span>by {featuredPost.author}</span>
              </div>

              <h2 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '1rem',
                lineHeight: '1.2'
              }}>
                {featuredPost.title}
              </h2>

              <p style={{
                color: '#d1d5db',
                fontSize: '1.125rem',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                {featuredPost.excerpt}
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  flexWrap: 'wrap'
                }}>
                  {featuredPost.tags.slice(0, 3).map(tag => (
                    <span 
                      key={tag} 
                      style={{
                        background: 'rgba(20, 184, 166, 0.1)',
                        color: '#14b8a6',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '6px',
                        fontSize: '0.875rem',
                        fontWeight: '500'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/blog/${featuredPost.slug}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    background: 'linear-gradient(135deg, #14b8a6 0%, #0ea5e9 100%)',
                    color: '#ffffff',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(20, 184, 166, 0.3)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Read Full Article
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions Section (keeping the existing one) */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '1rem',
        marginTop: '2rem'
      }}>
        <div 
          style={{
            padding: '1.5rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            color: '#ffffff',
            transition: 'all 0.3s ease',
            textAlign: 'center',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.borderColor = 'rgba(20, 184, 166, 0.3)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
          }}
        >
          <div style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
            ⭐ Rate This App
          </div>
          <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
            Help us improve with your feedback
          </div>
        </div>
        
        <Link 
          to="/docs" 
          style={{
            padding: '1.5rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            textDecoration: 'none',
            color: '#ffffff',
            transition: 'all 0.3s ease',
            textAlign: 'center'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.borderColor = 'rgba(20, 184, 166, 0.3)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
          }}
        >
          <div style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
            Documentation
          </div>
          <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
            Learn how to use Lendefi
          </div>
        </Link>
      </div>
    </div>
  )
}