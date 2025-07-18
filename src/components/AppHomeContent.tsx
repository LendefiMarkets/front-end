import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { formatDate, getBlogPosts } from '../utils/blogUtils'
import type { BlogPost } from '../utils/blogUtils'
import BlogImagePlaceholder from '../blog/BlogImagePlaceholder'

export default function AppHomeContent() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const blogPosts = await getBlogPosts()
        // Show only the latest 6 posts for mobile app
        setPosts(blogPosts.slice(0, 6))
      } catch (error) {
        console.error('Error loading blog posts:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  if (loading) {
    return (
      <div className="blog-container">
        <div className="blog-header">
          <h1>Welcome to Lendefi</h1>
          <p>Loading latest updates...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>Welcome to Lendefi</h1>
        <p>Your decentralized lending platform. Stay updated with the latest news and insights.</p>
      </div>

      {/* Quick Stats Section */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1rem', 
        margin: '2rem 0',
        padding: '1.5rem',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <h2 style={{ 
          color: '#ffffff', 
          margin: '0 0 1rem 0', 
          fontSize: '1.5rem',
          textAlign: 'center'
        }}>
          Platform Overview
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
          gap: '1rem',
          textAlign: 'center'
        }}>
          <div style={{ 
            padding: '1rem',
            background: 'rgba(20, 184, 166, 0.1)',
            borderRadius: '12px',
            border: '1px solid rgba(20, 184, 166, 0.2)'
          }}>
            <div style={{ color: '#14b8a6', fontSize: '1.5rem', fontWeight: 'bold' }}>$2.4M+</div>
            <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Total Liquidity</div>
          </div>
          <div style={{ 
            padding: '1rem',
            background: 'rgba(20, 184, 166, 0.1)',
            borderRadius: '12px',
            border: '1px solid rgba(20, 184, 166, 0.2)'
          }}>
            <div style={{ color: '#14b8a6', fontSize: '1.5rem', fontWeight: 'bold' }}>15+</div>
            <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Active Markets</div>
          </div>
          <div style={{ 
            padding: '1rem',
            background: 'rgba(20, 184, 166, 0.1)',
            borderRadius: '12px',
            border: '1px solid rgba(20, 184, 166, 0.2)'
          }}>
            <div style={{ color: '#14b8a6', fontSize: '1.5rem', fontWeight: 'bold' }}>1,200+</div>
            <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Users</div>
          </div>
        </div>
      </div>

      {/* Latest Updates Section */}
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ 
          color: '#ffffff', 
          margin: '0 0 1.5rem 0', 
          fontSize: '1.5rem',
          textAlign: 'center'
        }}>
          Latest Updates
        </h2>
        
        <div className="blog-grid">
          {posts.map(post => (
            <article key={post.slug} className="blog-card">
              <div className="blog-card-image">
                {post.image ? (
                  <img src={post.image} alt={post.title} />
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
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <span className="blog-date">{formatDate(post.date)}</span>
                  <span className="blog-author">by {post.author}</span>
                </div>
                <h3 className="blog-card-title">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-footer">
                  <div className="blog-card-tags">
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="blog-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to={`/blog/${post.slug}`} className="read-more">
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link 
            to="/blog" 
            style={{
              display: 'inline-block',
              padding: '0.75rem 2rem',
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
            View All Updates
          </Link>
        </div>
      </div>

      {/* Quick Actions Section */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '1rem',
        marginTop: '2rem'
      }}>
        <Link 
          to="/app" 
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
            Launch App
          </div>
          <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
            Start lending and borrowing
          </div>
        </Link>
        
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