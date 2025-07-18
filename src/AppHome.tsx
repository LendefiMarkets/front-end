import AppHomeContent from './components/AppHomeContent'
import './BlogPage.css'

export default function AppHome() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000000', color: '#e5e7eb' }}>
      <main style={{ paddingTop: '20px' }}>
        <AppHomeContent />
      </main>
    </div>
  )
}