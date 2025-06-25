import { useCallback, useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { useAppKitProvider, useAppKitAccount, useAppKitNetwork } from '@reown/appkit/react'
import { 
  MARKET_VAULT_ABI, 
  ERC20_ABI,
  MARKET_FACTORY_ABI,
  CONTRACTS,
  type SupportedChainId
} from '../config/contracts'

// Type definitions
interface EIP1193Provider {
  request(args: { method: string; params?: unknown }): Promise<unknown>
}
import { type MarketInfo } from './useMarketFactory'

export interface MarketDashboardData {
  // Market info
  marketInfo: MarketInfo | null
  
  // Vault data (ERC-4626)
  totalAssets: bigint
  totalSupply: bigint
  userShares: bigint
  userAssets: bigint
  sharePrice: number // assets per share
  
  // Core data
  totalBorrows: bigint
  utilizationRate: bigint
  borrowRate: bigint
  supplyRate: bigint
  
  // Base asset info
  baseAssetSymbol: string
  baseAssetDecimals: number
  userBalance: bigint
  
  // Calculated metrics
  tvl: number // Total Value Locked in USD (approximated)
  apy: {
    supply: number
    borrow: number
  }
}

export function useMarketDashboard(baseAsset: string, marketOwner?: string, providedChainId?: number) {
  const { walletProvider } = useAppKitProvider('eip155')
  const { address } = useAppKitAccount()
  const { chainId: connectedChainId } = useAppKitNetwork()
  
  // Use provided chainId if available, otherwise fall back to connected chain
  const chainId = providedChainId || connectedChainId
  
  const [data, setData] = useState<MarketDashboardData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Use current user as market owner if not specified
  const ownerAddress = marketOwner || address

  // Get factory contract address
  const factoryAddress = chainId && CONTRACTS[chainId as SupportedChainId]?.marketFactory

  const fetchMarketData = useCallback(async () => {
    console.log('fetchMarketData called with:', { 
      walletProvider: !!walletProvider, 
      baseAsset, 
      ownerAddress, 
      factoryAddress,
      chainId 
    })
    
    if (!baseAsset || !ownerAddress || !factoryAddress || !chainId) {
      console.log('Missing required data for fetching')
      return
    }

    try {
      setIsLoading(true)
      setError(null)

      // Use wallet provider if available, otherwise use a public RPC
      let provider: ethers.BrowserProvider | ethers.JsonRpcProvider
      if (walletProvider) {
        provider = new ethers.BrowserProvider(walletProvider as EIP1193Provider)
      } else {
        // Use public RPC endpoints for read-only access
        const rpcUrls: Record<number, string> = {
          1: 'https://eth.public-rpc.com',
          11155111: 'https://ethereum-sepolia-rpc.publicnode.com',
          84532: 'https://base-sepolia-rpc.publicnode.com',
          43113: 'https://api.avax-test.network/ext/bc/C/rpc'
        }
        const rpcUrl = rpcUrls[chainId as number] || ''
        if (!rpcUrl) {
          throw new Error(`No RPC URL available for chain ${chainId}`)
        }
        provider = new ethers.JsonRpcProvider(rpcUrl)
      }
      
      // Get market info directly from factory
      const factoryContract = new ethers.Contract(factoryAddress, MARKET_FACTORY_ABI, provider)
      const marketInfo = await factoryContract.getMarketInfo(ownerAddress, baseAsset)
      
      if (!marketInfo || marketInfo.core === ethers.ZeroAddress) {
        setError('Market not found')
        return
      }

      // Create contract instances
      const vaultContract = new ethers.Contract(marketInfo.baseVault, MARKET_VAULT_ABI, provider)
      const baseAssetContract = new ethers.Contract(baseAsset, ERC20_ABI, provider)

      // Fetch all data in parallel
      const [
        totalAssets,
        totalSupply,
        userShares,
        totalBorrows,
        utilizationRate,
        supplyRate,
        borrowRate,
        baseAssetSymbol,
        baseAssetDecimals,
        userBalance
      ] = await Promise.all([
        vaultContract.totalAssets(),
        vaultContract.totalSupply(),
        address ? vaultContract.balanceOf(address) : BigInt(0),
        vaultContract.totalBorrow(),
        vaultContract.utilization(),
        vaultContract.getSupplyRate(),
        vaultContract.getBorrowRate(0), // Using tier 0 (STABLE) as default
        baseAssetContract.symbol(),
        baseAssetContract.decimals().then(d => Number(d)),
        address ? baseAssetContract.balanceOf(address) : BigInt(0)
      ])

      // Calculate user assets from shares
      const userAssets = totalSupply > BigInt(0)
        ? (userShares * totalAssets) / totalSupply 
        : BigInt(0)

      // Calculate share price (assets per share) - both vault shares and assets have same decimals
      const sharePrice = totalSupply > BigInt(0)
        ? Number(ethers.formatUnits(totalAssets, baseAssetDecimals)) / Number(ethers.formatUnits(totalSupply, baseAssetDecimals))
        : 1

      // Convert rates to APY (assuming rates are per second basis points)
      // Rate is typically in basis points per year, so divide by 10000 for percentage
      const supplyAPY = Number(supplyRate) / 10000
      const borrowAPY = Number(borrowRate) / 10000

      // Approximate TVL (would need price oracle for accurate USD value)
      // For now, just use the number of assets as a proxy
      const tvl = Number(ethers.formatUnits(totalAssets, baseAssetDecimals))

      const dashboardData: MarketDashboardData = {
        marketInfo,
        totalAssets,
        totalSupply,
        userShares,
        userAssets: userAssets as bigint,
        sharePrice,
        totalBorrows,
        utilizationRate,
        borrowRate,
        supplyRate,
        baseAssetSymbol,
        baseAssetDecimals,
        userBalance,
        tvl,
        apy: {
          supply: supplyAPY,
          borrow: borrowAPY
        }
      }

      setData(dashboardData)
    } catch (err) {
      console.error('Failed to fetch market data:', err)
      console.error('baseAsset:', baseAsset)
      console.error('ownerAddress:', ownerAddress)
      console.error('factoryAddress:', factoryAddress)
      setError(`Failed to load market data: ${err instanceof Error ? err.message : 'Unknown error'}`)
    } finally {
      setIsLoading(false)
    }
  }, [walletProvider, baseAsset, ownerAddress, address, factoryAddress, chainId])

  // Initial data load only
  useEffect(() => {
    if (baseAsset && ownerAddress) {
      fetchMarketData()
    }
  }, [fetchMarketData, baseAsset, ownerAddress])

  return {
    data,
    isLoading,
    error,
    refresh: fetchMarketData
  }
}

// Helper function to format numbers with appropriate precision
export function formatTokenAmount(amount: bigint, decimals: number, precision: number = 2): string {
  const formatted = ethers.formatUnits(amount, decimals)
  const num = parseFloat(formatted)
  
  if (num === 0) return '0'
  if (num < 0.01) return '<0.01'
  if (num < 1000) return num.toFixed(precision)
  if (num < 1000000) return (num / 1000).toFixed(precision) + 'K'
  if (num < 1000000000) return (num / 1000000).toFixed(precision) + 'M'
  return (num / 1000000000).toFixed(precision) + 'B'
}

// Helper function to format balance with commas (for display in position section)
export function formatBalance(amount: bigint, decimals: number, precision: number = 2): string {
  const formatted = ethers.formatUnits(amount, decimals)
  const num = parseFloat(formatted)
  
  if (num === 0) return '0'
  
  // For very small amounts, show more precision or use scientific notation
  if (num > 0 && num < 0.0001) {
    return num.toExponential(2)
  }
  if (num < 0.01) return num.toFixed(4)
  
  // Format with commas and fixed precision
  return num.toLocaleString('en-US', {
    minimumFractionDigits: precision,
    maximumFractionDigits: precision
  })
}

// Helper function to format percentage
export function formatPercentage(value: number, precision: number = 2): string {
  return value.toFixed(precision) + '%'
}

// Helper function to format share price based on asset decimals
export function formatSharePrice(price: number, assetDecimals: number): string {
  // For assets with 6 decimals (like USDC, USDT), show more precision to capture meaningful differences
  // For assets with 18 decimals (like WETH, DAI), show less precision since they're already very granular
  const displayDecimals = assetDecimals <= 8 ? 6 : 4;
  
  if (price === 0) return '0'
  if (price < 0.000001) return price.toExponential(2)
  if (price < 1) return price.toFixed(displayDecimals)
  if (price < 100) return price.toFixed(Math.min(displayDecimals - 2, 2))
  return price.toFixed(Math.max(displayDecimals - 4, 0))
}