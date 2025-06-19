import { useState, useEffect } from 'react'
import { useAppKitNetwork, useAppKitAccount } from '@reown/appkit/react'
import { supportedChainIds } from '../config/appkit'

export function useNetworkValidation() {
  const { chainId } = useAppKitNetwork()
  const { isConnected } = useAppKitAccount()
  const [isUnsupportedNetwork, setIsUnsupportedNetwork] = useState(false)

  useEffect(() => {
    if (isConnected && chainId) {
      const chainIdNumber = typeof chainId === 'string' ? parseInt(chainId) : chainId
      const isSupported = supportedChainIds.includes(chainIdNumber)
      setIsUnsupportedNetwork(!isSupported)
    } else {
      setIsUnsupportedNetwork(false)
    }
  }, [chainId, isConnected])
  return { isUnsupportedNetwork }
}