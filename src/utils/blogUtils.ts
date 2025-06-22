import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  image?: string
  tags: string[]
  content?: string
  htmlContent?: string
  seo_title?: string
  seo_description?: string
  keywords?: string[]
  canonical_url?: string
}

// Use Vite's import.meta.glob to automatically discover markdown files
const blogPosts = import.meta.glob('../blog/posts/*.md', { query: '?raw', import: 'default', eager: true })

export async function getBlogPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = []
  
  for (const [path, content] of Object.entries(blogPosts)) {
    const slug = path.replace('../blog/posts/', '').replace('.md', '')
    const { data, content: markdownContent } = matter(content as string)
    
    posts.push({
      slug,
      title: data.title,
      date: data.date,
      author: data.author,
      excerpt: data.excerpt,
      image: data.image,
      tags: data.tags || [],
      content: markdownContent,
      seo_title: data.seo_title,
      seo_description: data.seo_description,
      keywords: data.keywords || [],
      canonical_url: data.canonical_url
    })
  }

  // Sort by date (newest first)
  return posts.sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB.getTime() - dateA.getTime()
  })
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const posts = await getBlogPosts()
    const post = posts.find(p => p.slug === slug)
    
    if (!post || !post.content) return null

    const processedContent = await remark()
      .use(html)
      .process(post.content)
    const htmlContent = processedContent.toString()

    return {
      ...post,
      htmlContent
    }
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    return null
  }
}

export function formatDate(dateString: string): string {
  // Parse the date string and add time to avoid timezone issues
  const date = new Date(dateString + 'T12:00:00')
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}