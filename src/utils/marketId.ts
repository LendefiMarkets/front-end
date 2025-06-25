// Utility functions for generating and parsing market IDs

// Network name mappings for shorter URLs
const NETWORK_NAMES: Record<number, string> = {
  1: 'eth',
  11155111: 'sepolia', 
  84532: 'base-sepolia',
  43113: 'fuji',
  8453: 'base',
  43114: 'avalanche',
  137: 'polygon'
}

// Reverse mapping
const NETWORK_IDS: Record<string, number> = Object.fromEntries(
  Object.entries(NETWORK_NAMES).map(([id, name]) => [name, parseInt(id)])
)

// Common token symbol mappings for shorter URLs
const TOKEN_SYMBOLS: Record<string, string> = {
  '0x036CbD53842c5426634e7929541eC2318f3dCF7e': 'usdc', // Base Sepolia USDC
  '0x5425890298aed601595a70AB815c96711a31Bc65': 'usdc', // Fuji USDC
  '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238': 'usdc', // Sepolia USDC
  '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48': 'usdc', // Mainnet USDC
  '0x6B175474E89094C44Da98b954EedeAC495271d0F': 'dai',  // Mainnet DAI
  '0xdAC17F958D2ee523a2206206994597C13D831ec7': 'usdt'  // Mainnet USDT
}

// Reverse token mapping
const TOKEN_ADDRESSES: Record<string, Record<number, string>> = {
  'usdc': {
    84532: '0x036CbD53842c5426634e7929541eC2318f3dCF7e',
    43113: '0x5425890298aed601595a70AB815c96711a31Bc65',
    11155111: '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238',
    1: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
  },
  'dai': {
    1: '0x6B175474E89094C44Da98b954EedeAC495271d0F'
  },
  'usdt': {
    1: '0xdAC17F958D2ee523a2206206994597C13D831ec7'
  }
}

export interface MarketInfo {
  chainId: number
  baseAsset: string
  marketOwner: string
}

/**
 * Generate a readable market URL
 * Format: /market/[network]/[token]/[owner-short]?owner=[full-owner]
 * Example: /market/base-sepolia/usdc/0x102e6a?owner=0x102e6a765b074b6444f259ef04297b2e51cd7fec
 */
export function generateMarketUrl(chainId: number, baseAsset: string, marketOwner: string): string {
  const networkName = NETWORK_NAMES[chainId] || chainId.toString()
  // Try both original case and lowercase for token lookup
  const tokenSymbol = TOKEN_SYMBOLS[baseAsset] || TOKEN_SYMBOLS[baseAsset.toLowerCase()] || baseAsset.slice(2, 8)
  const ownerShort = marketOwner.slice(0, 8) // First 6 chars after 0x
  
  
  return `/market/${networkName}/${tokenSymbol}/${ownerShort}?owner=${marketOwner}`
}

/**
 * Generate a short market ID for sharing
 * Format: [network]-[token]-[owner-short]
 * Example: base-sepolia-usdc-0x102e6a
 */
export function generateShortMarketId(chainId: number, baseAsset: string, marketOwner: string): string {
  const networkName = NETWORK_NAMES[chainId] || chainId.toString()
  const tokenSymbol = TOKEN_SYMBOLS[baseAsset.toLowerCase()] || baseAsset.slice(2, 8)
  const ownerShort = marketOwner.slice(0, 8)
  
  return `${networkName}-${tokenSymbol}-${ownerShort}`
}

/**
 * Parse market info from URL path
 * Supports formats:
 * - /market/[network]/[token]/[owner-short] (requires full owner in query param for now)
 * - /market/[short-id]
 * - Legacy: /market/[chainId]-[baseAsset]-[owner]
 */
export function parseMarketId(marketId: string, searchParams?: URLSearchParams): MarketInfo | null {
  if (!marketId) return null
  
  // Handle URL path format: network/token/owner
  if (marketId.includes('/')) {
    const parts = marketId.split('/')
    if (parts.length >= 3) {
      const [network, token, ownerShort] = parts
      const chainId = NETWORK_IDS[network]
      const baseAsset = TOKEN_ADDRESSES[token]?.[chainId]
      
      if (chainId && baseAsset) {
        // Try to get full owner from search params first
        const fullOwner = searchParams?.get('owner')
        if (fullOwner) {
          return {
            chainId,
            baseAsset,
            marketOwner: fullOwner
          }
        }
        
        // If no full owner available, this won't work for contract calls
        // but we can still return partial info for error handling
        return {
          chainId,
          baseAsset,
          marketOwner: ownerShort.startsWith('0x') ? ownerShort : `0x${ownerShort}`
        }
      }
    }
  }
  
  // Handle short format: network-token-owner
  if (marketId.includes('-') && marketId.split('-').length >= 3) {
    const parts = marketId.split('-')
    const network = parts.slice(0, -2).join('-') // Handle multi-part network names
    const token = parts[parts.length - 2]
    const ownerShort = parts[parts.length - 1]
    
    const chainId = NETWORK_IDS[network]
    const baseAsset = TOKEN_ADDRESSES[token]?.[chainId]
    
    if (chainId && baseAsset) {
      // Try to get full owner from search params
      const fullOwner = searchParams?.get('owner')
      if (fullOwner) {
        return {
          chainId,
          baseAsset,
          marketOwner: fullOwner
        }
      }
      
      return {
        chainId,
        baseAsset,
        marketOwner: ownerShort.startsWith('0x') ? ownerShort : `0x${ownerShort}`
      }
    }
  }
  
  // Handle legacy long format: chainId-baseAsset-owner
  const parts = marketId.split('-')
  if (parts.length >= 2 && !isNaN(parseInt(parts[0]))) {
    return {
      chainId: parseInt(parts[0]),
      baseAsset: parts[1],
      marketOwner: parts[2] || ''
    }
  }
  
  return null
}

/**
 * Get market display name
 */
export function getMarketDisplayName(chainId: number, baseAsset: string): string {
  const networkName = NETWORK_NAMES[chainId] || `Chain ${chainId}`
  const tokenSymbol = TOKEN_SYMBOLS[baseAsset.toLowerCase()] || 'Unknown Token'
  
  return `${tokenSymbol.toUpperCase()} on ${networkName}`
}