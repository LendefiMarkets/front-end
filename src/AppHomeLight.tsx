import AppHomeContentLight from './components/AppHomeContentLight'
import './BlogPage.css'

export default function AppHomeLight() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', color: '#014B52' }}>
      <main style={{ paddingTop: '20px' }}>
        <AppHomeContentLight />
      </main>
    </div>
  )
}