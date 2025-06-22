// React import removed - not needed with new JSX transform
import { useParams } from 'react-router-dom'
import BlogList from './blog/BlogList'
import BlogPost from './blog/BlogPost'
import './BlogPage.css'

export default function BlogPage() {
  const { slug } = useParams<{ slug?: string }>()

  if (slug) {
    return <BlogPost />
  }

  return <BlogList />
}