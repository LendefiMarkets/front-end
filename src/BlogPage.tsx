// React import removed - not needed with new JSX transform
import { useParams } from 'react-router-dom'
import BlogList from './blog/BlogList'
import BlogPost from './blog/BlogPost'
import BlogNavbar from './components/layout/BlogNavbar'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import BackToTop from './components/docs/BackToTop'
import './BlogPage.css'

export default function BlogPage() {
  const { slug } = useParams<{ slug?: string }>()

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#111827', color: '#e5e7eb' }}>
      {slug ? <BlogNavbar /> : <Navbar />}
      
      <main style={{ paddingTop: '80px' }}>
        {slug ? <BlogPost /> : <BlogList />}
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}