import React from 'react'
import './ConnectWalletButton.css'

interface ConnectWalletButtonProps {
  className?: string
  onConnected?: () => void
}

const ConnectWalletButton: React.FC<ConnectWalletButtonProps> = () => {
  const [isLoaded, setIsLoaded] = React.useState(false)
  
  React.useEffect(() => {
    // Check if the web component is defined
    const checkComponent = () => {
      if (customElements.get('appkit-button')) {
        setIsLoaded(true)
      } else {
        // Wait for component to be defined
        customElements.whenDefined('appkit-button').then(() => {
          setIsLoaded(true)
        })
      }
    }
    
    checkComponent()
  }, [])
  
  // Use appkit-button web component
  return (
    <div className="connect-wallet-wrapper">
      {!isLoaded && (
        <button 
          style={{ 
            minWidth: '140px',
            fontSize: '14px',
            padding: '10px 20px',
            fontWeight: '500',
            background: '#14b8a6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontFamily: "'Inter', sans-serif",
            transition: 'all 0.2s ease'
          }}
        >
          Connect Wallet
        </button>
      )}
      <div style={{ display: isLoaded ? 'block' : 'none' }}>
        <appkit-button />
      </div>
    </div>
  )
}

export default ConnectWalletButton