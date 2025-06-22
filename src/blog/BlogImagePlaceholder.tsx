// React import removed - not needed with new JSX transform

interface BlogImagePlaceholderProps {
  title: string
  type?: 'intro' | 'lending' | 'security'
}

export default function BlogImagePlaceholder({ title, type = 'intro' }: BlogImagePlaceholderProps) {
  const getGradient = () => {
    switch (type) {
      case 'intro':
        return 'linear-gradient(135deg, #14b8a6 0%, #0ea5e9 100%)'
      case 'lending':
        return 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)'
      case 'security':
        return 'linear-gradient(135deg, #14b8a6 0%, #10b981 100%)'
      default:
        return 'linear-gradient(135deg, #14b8a6 0%, #0ea5e9 100%)'
    }
  }

  const getIcon = () => {
    switch (type) {
      case 'intro':
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20L20 60L40 60L40 40L60 60L60 20L40 40L40 20L20 20Z" fill="white" fillOpacity="0.9"/>
          </svg>
        )
      case 'lending':
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 15L50 25H45V35H35V25H30L40 15Z" fill="white" fillOpacity="0.9"/>
            <path d="M40 65L30 55H35V45H45V55H50L40 65Z" fill="white" fillOpacity="0.9"/>
            <circle cx="40" cy="40" r="25" stroke="white" strokeWidth="2" fill="none" opacity="0.5"/>
          </svg>
        )
      case 'security':
        return (
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 15C40 15 55 20 55 35V50C55 60 45 65 40 65C35 65 25 60 25 50V35C25 20 40 15 40 15Z" stroke="white" strokeWidth="2" fill="none"/>
            <path d="M35 40L38 43L45 36" stroke="white" strokeWidth="2"/>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: getGradient(),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.1,
          background: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.1) 10px,
            rgba(255,255,255,0.1) 20px
          )`
        }}
      />
      
      {/* Logo/Icon */}
      <div style={{ marginBottom: '1rem', zIndex: 1 }}>
        {getIcon()}
      </div>
      
      {/* Text */}
      <div style={{ textAlign: 'center', zIndex: 1 }}>
        <h3 style={{ 
          color: 'white', 
          fontSize: '1.5rem', 
          fontWeight: '600',
          margin: '0 0 0.5rem 0',
          textShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}>
          Lendefi Markets
        </h3>
        <p style={{ 
          color: 'rgba(255,255,255,0.9)', 
          fontSize: '0.875rem',
          margin: 0,
          fontWeight: '500'
        }}>
          {title}
        </p>
      </div>
    </div>
  )
}