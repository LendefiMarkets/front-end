import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { formatDate, getBlogPosts } from '../utils/blogUtils'
import type { BlogPost } from '../utils/blogUtils'
import BlogImagePlaceholder from './BlogImagePlaceholder'
import MobileTagFilter from './MobileTagFilter'

export default function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const blogPosts = await getBlogPosts()
        setPosts(blogPosts)
      } catch (error) {
        console.error('Error loading blog posts:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  
  const allTags = Array.from(
    new Set(posts.flatMap(post => post.tags))
  ).sort()

  const filteredPosts = selectedTag
    ? posts.filter(post => post.tags.includes(selectedTag))
    : posts

  if (loading) {
    return (
      <div className="blog-container">
        <div className="blog-header">
          <h1>Lendefi Blog</h1>
          <p>Loading posts...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>Lendefi Blog</h1>
        <p>Insights, updates, and education about DeFi lending and Lendefi Markets</p>
      </div>

      {/* Desktop Tag Filter - Dropdown */}
      {allTags.length > 0 && (
        <div className="tag-filter-dropdown desktop-only">
          <label htmlFor="tag-select" className="tag-filter-label">Filter by topic:</label>
          <select
            id="tag-select"
            className="tag-select"
            value={selectedTag || ''}
            onChange={(e) => setSelectedTag(e.target.value || null)}
          >
            <option value="">All Posts ({posts.length})</option>
            {allTags.map(tag => {
              const count = posts.filter(post => post.tags.includes(tag)).length
              return (
                <option key={tag} value={tag}>
                  {tag} ({count})
                </option>
              )
            })}
          </select>
        </div>
      )}

      {/* Mobile Tag Filter */}
      <MobileTagFilter 
        tags={allTags}
        selectedTag={selectedTag}
        onTagSelect={setSelectedTag}
      />

      <div className="blog-grid">
        {filteredPosts.map(post => (
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
              <h2 className="blog-card-title">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              <div className="blog-card-footer">
                <div className="blog-card-tags">
                  {post.tags.map(tag => (
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

      {filteredPosts.length === 0 && (
        <div className="no-posts">
          <p>No posts found with the selected tag.</p>
        </div>
      )}
    </div>
  )
}