import React from 'react'
import './ConnectWalletButton.css'

interface ConnectWalletButtonProps {
  className?: string
  onConnected?: () => void
}

const ConnectWalletButton: React.FC<ConnectWalletButtonProps> = ({ 
  className = "btn btn-primary",
  onConnected
}) => {
  // Use appkit-button web component
  return (
    <div className="connect-wallet-wrapper">
      <appkit-button />
    </div>
  )
}

export default ConnectWalletButton