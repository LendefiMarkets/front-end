import { createAppKit } from '@reown/appkit/react'
import { networks, projectId, metadata, ethersAdapter } from '../config/appkit'

// Debug logging for production
console.log('Web3Modal initialization:', {
  projectId,
  metadata,
  networks,
  isProd: import.meta.env.PROD,
  currentOrigin: window.location.origin
})

// Create AppKit instance
const appKit = createAppKit({
  adapters: [ethersAdapter],
  networks,
  metadata,
  projectId,
  themeMode: 'dark',
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  },
  themeVariables: {
    '--w3m-z-index': 99999,
    '--w3m-accent': '#14b8a6', // Teal color to match our theme
    '--w3m-color-mix': '#0ea5e9', // Blue color
    '--w3m-color-mix-strength': 20
  }
})

console.log('AppKit instance created:', appKit)

import type { ReactNode } from 'react';

interface Web3ModalProviderProps {
  children: ReactNode;
}

export function Web3ModalProvider({ children }: Web3ModalProviderProps) {
  return children
}