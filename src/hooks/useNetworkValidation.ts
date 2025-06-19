import { useState, useEffect } from 'react'
import { useAppKitNetwork, useAppKitAccount } from '@reown/appkit/react'
import { supportedChainIds } from '../config/appkit'

export function useNetworkValidation() {
  const { chainId } = useAppKitNetwork()
  const { isConnected } = useAppKitAccount()
  const [isUnsupportedNetwork, setIsUnsupportedNetwork] = useState(false)

  useEffect(() => {
    console.log('Network validation check:', { 
      isConnected, 
      chainId, 
      supportedChainIds,
      chainIdType: typeof chainId 
    })
    
    if (isConnected && chainId) {
      const isSupported = supportedChainIds.includes(chainId)
      console.log('Network supported?', isSupported, 'chainId:', chainId)
      setIsUnsupportedNetwork(!isSupported)
    } else {
      setIsUnsupportedNetwork(false)
    }
  }, [chainId, isConnected])

  console.log('useNetworkValidation returning:', { isUnsupportedNetwork, chainId })
  return { isUnsupportedNetwork }
}