import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { formatDate, getBlogPost } from '../utils/blogUtils'
import type { BlogPost as BlogPostType } from '../utils/blogUtils'
import BlogImagePlaceholder from './BlogImagePlaceholder'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<BlogPostType | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) return
      
      try {
        const blogPost = await getBlogPost(slug)
        setPost(blogPost)
        
        // Update document title and meta tags for SEO
        if (blogPost) {
          document.title = blogPost.seo_title || blogPost.title
          
          // Update meta description
          const metaDescription = document.querySelector('meta[name="description"]')
          if (metaDescription) {
            metaDescription.setAttribute('content', blogPost.seo_description || blogPost.excerpt)
          } else {
            const meta = document.createElement('meta')
            meta.name = 'description'
            meta.content = blogPost.seo_description || blogPost.excerpt
            document.head.appendChild(meta)
          }
          
          // Update meta keywords
          if (blogPost.keywords && blogPost.keywords.length > 0) {
            const metaKeywords = document.querySelector('meta[name="keywords"]')
            if (metaKeywords) {
              metaKeywords.setAttribute('content', blogPost.keywords.join(', '))
            } else {
              const meta = document.createElement('meta')
              meta.name = 'keywords'
              meta.content = blogPost.keywords.join(', ')
              document.head.appendChild(meta)
            }
          }
          
          // Add canonical URL
          if (blogPost.canonical_url) {
            const existingCanonical = document.querySelector('link[rel="canonical"]')
            if (existingCanonical) {
              existingCanonical.setAttribute('href', window.location.origin + blogPost.canonical_url)
            } else {
              const link = document.createElement('link')
              link.rel = 'canonical'
              link.href = window.location.origin + blogPost.canonical_url
              document.head.appendChild(link)
            }
          }
          
          // Add Open Graph meta tags
          const updateOrCreateOGMeta = (property: string, content: string) => {
            const existing = document.querySelector(`meta[property="${property}"]`)
            if (existing) {
              existing.setAttribute('content', content)
            } else {
              const meta = document.createElement('meta')
              meta.setAttribute('property', property)
              meta.content = content
              document.head.appendChild(meta)
            }
          }
          
          updateOrCreateOGMeta('og:title', blogPost.seo_title || blogPost.title)
          updateOrCreateOGMeta('og:description', blogPost.seo_description || blogPost.excerpt)
          updateOrCreateOGMeta('og:type', 'article')
          updateOrCreateOGMeta('og:url', window.location.href)
          if (blogPost.image) {
            updateOrCreateOGMeta('og:image', window.location.origin + blogPost.image)
          }
          
          // Add Twitter Card meta tags
          const updateOrCreateTwitterMeta = (name: string, content: string) => {
            const existing = document.querySelector(`meta[name="${name}"]`)
            if (existing) {
              existing.setAttribute('content', content)
            } else {
              const meta = document.createElement('meta')
              meta.setAttribute('name', name)
              meta.content = content
              document.head.appendChild(meta)
            }
          }
          
          updateOrCreateTwitterMeta('twitter:card', 'summary_large_image')
          updateOrCreateTwitterMeta('twitter:title', blogPost.seo_title || blogPost.title)
          updateOrCreateTwitterMeta('twitter:description', blogPost.seo_description || blogPost.excerpt)
          if (blogPost.image) {
            updateOrCreateTwitterMeta('twitter:image', window.location.origin + blogPost.image)
          }
          
          // Add structured data (JSON-LD)
          const existingStructuredData = document.querySelector('script[type="application/ld+json"]')
          if (existingStructuredData) {
            existingStructuredData.remove()
          }
          
          const structuredData = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": blogPost.seo_title || blogPost.title,
            "description": blogPost.seo_description || blogPost.excerpt,
            "image": blogPost.image ? window.location.origin + blogPost.image : undefined,
            "author": {
              "@type": "Person",
              "name": blogPost.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Lendefi Markets",
              "logo": {
                "@type": "ImageObject",
                "url": window.location.origin + "/assets/images/logo.png"
              }
            },
            "datePublished": blogPost.date,
            "dateModified": blogPost.date,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": window.location.href
            },
            "keywords": blogPost.keywords ? blogPost.keywords.join(', ') : blogPost.tags.join(', ')
          }
          
          const script = document.createElement('script')
          script.type = 'application/ld+json'
          script.textContent = JSON.stringify(structuredData)
          document.head.appendChild(script)
        }
      } catch (error) {
        console.error('Error loading blog post:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPost()
  }, [slug])

  if (loading) {
    return (
      <div className="blog-post">
        <div className="blog-post-header">
          <Link to="/blog" className="back-link">
            ← Back to Blog
          </Link>
          <p>Loading post...</p>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="blog-error">
        <h1>Post not found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
        <Link to="/blog">← Back to Blog</Link>
      </div>
    )
  }

  return (
    <article className="blog-post">
      <div className="blog-post-header">
        <Link to="/blog" className="back-link">
          ← Back to Blog
        </Link>
        
        <h1 className="blog-post-title">{post.title}</h1>
        
        <div className="blog-post-meta">
          <span className="blog-date">{formatDate(post.date)}</span>
          <span className="blog-author">by {post.author}</span>
        </div>

        {post.tags.length > 0 && (
          <div className="blog-post-tags">
            {post.tags.map(tag => (
              <span key={tag} className="blog-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="blog-post-image">
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

      <div 
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}
      />

      <div className="blog-post-footer">
        <div className="share-section">
          <h3>Share this post</h3>
          <div className="share-buttons">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="share-button twitter"
            >
              Share on X
            </a>
          </div>
        </div>

        <div className="navigation-section">
          <Link to="/blog" className="nav-button">
            ← All Posts
          </Link>
        </div>
      </div>
    </article>
  )
}