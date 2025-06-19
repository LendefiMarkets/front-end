import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import './context/Web3Modal' // Import Web3Modal configuration
import App from './App.tsx'
import Contact from './Contact.tsx'
import BookDemo from './BookDemo.tsx'
import UserHome from './UserHome.tsx'
import MarketOwnerGuide from './MarketOwnerGuide.tsx'
import Docs from './Docs.tsx'
import { Web3ModalProvider } from './context/Web3Modal.tsx'
import ErrorBoundary from './components/ErrorBoundary.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <Web3ModalProvider>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-demo" element={<BookDemo />} />
            <Route path="/app" element={<UserHome />} />
            <Route path="/market-owner-guide" element={<MarketOwnerGuide />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="*" element={<App />} />
          </Routes>
        </Router>
      </Web3ModalProvider>
    </ErrorBoundary>
  </StrictMode>,
)
