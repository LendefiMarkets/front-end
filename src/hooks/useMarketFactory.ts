import { useCallback, useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { useAppKitProvider, useAppKitAccount, useAppKitNetwork } from '@reown/appkit/react'
import { MARKET_FACTORY_ABI, CONTRACTS, ERC20_ABI, type SupportedChainId } from '../config/contracts'

export interface AllowedAsset {
  address: string
  name: string
  symbol: string
}

export interface MarketInfo {
  core: string
  baseVault: string
  baseAsset: string
  assetsModule: string
  porFeed: string
  decimals: bigint
  name: string
  symbol: string
  createdAt: bigint
  active: boolean
}

export function useMarketFactory() {
  const { walletProvider } = useAppKitProvider('eip155')
  const { address } = useAppKitAccount()
  const { chainId } = useAppKitNetwork()
  
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [allowedAssets, setAllowedAssets] = useState<AllowedAsset[]>([])
  const [hasMarketOwnerRole, setHasMarketOwnerRole] = useState(false)

  // Get the contract address for the current network
  const factoryAddress = chainId && CONTRACTS[chainId as SupportedChainId]?.marketFactory

  // Fetch allowed base assets
  const fetchAllowedAssets = useCallback(async () => {
    if (!walletProvider || !factoryAddress) return

    try {
      setIsLoading(true)
      setError(null)

      const provider = new ethers.BrowserProvider(walletProvider as any)
      const factoryContract = new ethers.Contract(
        factoryAddress,
        MARKET_FACTORY_ABI,
        provider
      )

      // Get allowed assets
      const assetAddresses: string[] = await factoryContract.getAllowedBaseAssets()
      
      // Fetch token details for each asset
      const assetDetails = await Promise.all(
        assetAddresses.map(async (assetAddress) => {
          try {
            const tokenContract = new ethers.Contract(assetAddress, ERC20_ABI, provider)
            const [name, symbol] = await Promise.all([
              tokenContract.name(),
              tokenContract.symbol()
            ])
            
            return {
              address: assetAddress,
              name,
              symbol
            }
          } catch (err) {
            console.error(`Failed to fetch details for ${assetAddress}:`, err)
            return {
              address: assetAddress,
              name: 'Unknown Token',
              symbol: 'UNKNOWN'
            }
          }
        })
      )

      setAllowedAssets(assetDetails)
    } catch (err) {
      console.error('Failed to fetch allowed assets:', err)
      setError('Failed to load allowed assets')
    } finally {
      setIsLoading(false)
    }
  }, [walletProvider, factoryAddress])

  // Create a new market
  const createMarket = useCallback(async (
    baseAsset: string,
    name: string,
    symbol: string
  ): Promise<ethers.ContractTransactionResponse | null> => {
    if (!walletProvider || !factoryAddress || !address) {
      setError('Wallet not connected')
      return null
    }

    try {
      setIsLoading(true)
      setError(null)

      const provider = new ethers.BrowserProvider(walletProvider as any)
      const signer = await provider.getSigner()
      const factoryContract = new ethers.Contract(
        factoryAddress,
        MARKET_FACTORY_ABI,
        signer
      )

      // Call createMarket
      const tx = await factoryContract.createMarket(baseAsset, name, symbol)
      
      return tx
    } catch (err: any) {
      console.error('Failed to create market:', err)
      
      // Parse error message
      let errorMessage = 'Failed to create market'
      if (err.reason) {
        errorMessage = err.reason
      } else if (err.message) {
        if (err.message.includes('MarketAlreadyExists')) {
          errorMessage = 'A market already exists for this asset'
        } else if (err.message.includes('BaseAssetNotAllowed')) {
          errorMessage = 'This base asset is not allowed'
        } else if (err.message.includes('user rejected')) {
          errorMessage = 'Transaction cancelled by user'
        } else {
          errorMessage = err.message
        }
      }
      
      setError(errorMessage)
      return null
    } finally {
      setIsLoading(false)
    }
  }, [walletProvider, factoryAddress, address])

  // Check if a market exists for the current user and asset
  const checkMarketExists = useCallback(async (baseAsset: string): Promise<boolean> => {
    if (!walletProvider || !factoryAddress || !address) return false

    try {
      const provider = new ethers.BrowserProvider(walletProvider as any)
      const factoryContract = new ethers.Contract(
        factoryAddress,
        MARKET_FACTORY_ABI,
        provider
      )

      const marketInfo = await factoryContract.getMarketInfo(address, baseAsset)
      return marketInfo.core !== ethers.ZeroAddress
    } catch (err: any) {
      // If getMarketInfo reverts, it likely means the market doesn't exist
      // This is expected behavior when no market has been created yet
      if (err.code === 'CALL_EXCEPTION') {
        return false
      }
      console.error('Failed to check market existence:', err)
      return false
    }
  }, [walletProvider, factoryAddress, address])

  // Get market info for the current user and asset
  const getMarketInfo = useCallback(async (baseAsset: string): Promise<MarketInfo | null> => {
    if (!walletProvider || !factoryAddress || !address) return null

    try {
      const provider = new ethers.BrowserProvider(walletProvider as any)
      const factoryContract = new ethers.Contract(
        factoryAddress,
        MARKET_FACTORY_ABI,
        provider
      )

      const marketInfo = await factoryContract.getMarketInfo(address, baseAsset)
      if (marketInfo.core === ethers.ZeroAddress) return null

      return marketInfo
    } catch (err: any) {
      // If getMarketInfo reverts, it likely means the market doesn't exist
      if (err.code === 'CALL_EXCEPTION') {
        return null
      }
      console.error('Failed to fetch market info:', err)
      return null
    }
  }, [walletProvider, factoryAddress, address])

  // Check if user has MARKET_OWNER_ROLE
  const checkMarketOwnerRole = useCallback(async () => {
    if (!walletProvider || !factoryAddress || !address) {
      setHasMarketOwnerRole(false)
      return
    }

    try {
      const provider = new ethers.BrowserProvider(walletProvider as any)
      const factoryContract = new ethers.Contract(
        factoryAddress,
        MARKET_FACTORY_ABI,
        provider
      )

      // MARKET_OWNER_ROLE = keccak256("MARKET_OWNER_ROLE")
      const MARKET_OWNER_ROLE = '0xc2d8be2f9fead751efa432b3ca8155dd1b8bde7d0d80d72f07850c659afcd0bc'
      const hasRole = await factoryContract.hasRole(MARKET_OWNER_ROLE, address)
      setHasMarketOwnerRole(hasRole)
    } catch (err) {
      console.error('Failed to check MARKET_OWNER_ROLE:', err)
      setHasMarketOwnerRole(false)
    }
  }, [walletProvider, factoryAddress, address])

  // Fetch allowed assets and check role on mount and when dependencies change
  useEffect(() => {
    if (factoryAddress && walletProvider) {
      fetchAllowedAssets()
      checkMarketOwnerRole()
    }
  }, [factoryAddress, walletProvider, fetchAllowedAssets, checkMarketOwnerRole])

  return {
    isLoading,
    error,
    allowedAssets,
    createMarket,
    checkMarketExists,
    getMarketInfo,
    fetchAllowedAssets,
    factoryAddress,
    hasMarketOwnerRole
  }
}