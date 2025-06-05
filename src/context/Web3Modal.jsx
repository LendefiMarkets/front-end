import { createAppKit } from '@reown/appkit/react'
import { networks, projectId, metadata, ethersAdapter } from '../config/appkit'

// Create AppKit instance
createAppKit({
  adapters: [ethersAdapter],
  networks,
  metadata,
  projectId,
  themeMode: 'dark',
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  },
  themeVariables: {
    '--w3m-z-index': '99999',
    '--w3m-accent': '#14b8a6', // Teal color to match our theme
    '--w3m-color-mix': '#0ea5e9', // Blue color
    '--w3m-color-mix-strength': 20
  }
})

export function Web3ModalProvider({ children }) {
  return children
}