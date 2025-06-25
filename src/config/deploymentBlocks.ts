// Deployment block numbers for each chain
// These are the blocks where the MarketFactory contracts were deployed
// Using these helps optimize event queries by avoiding scanning from block 0

export const DEPLOYMENT_BLOCKS: Record<number, number> = {
  // Mainnet
  1: 0, // To be updated when deployed
  
  // Sepolia
  11155111: 5000000, // Approximate, update with actual deployment block
  
  // Base Sepolia
  84532: 10000000, // Approximate, update with actual deployment block
  
  // Avalanche Fuji
  43113: 30000000, // Approximate, update with actual deployment block
  
  // Anvil local
  31337: 0, // Local starts from 0
  
  // Other testnets
  80002: 0,  // Polygon Amoy
  421614: 0, // Arbitrum Sepolia
  97: 0,     // BSC Testnet
  
  // Other mainnets
  56: 0,     // BSC
  8453: 0,   // Base
  42161: 0,  // Arbitrum
  43114: 0,  // Avalanche
  137: 0,    // Polygon
}

// Maximum blocks to query in a single request
// Different chains have different limits
export const MAX_BLOCK_RANGE: Record<number, number> = {
  // Some chains have stricter limits
  137: 50000,    // Polygon
  56: 50000,     // BSC
  43114: 50000,  // Avalanche
}

const DEFAULT_MAX_BLOCK_RANGE = 100000

export function getDeploymentBlock(chainId: number): number {
  return DEPLOYMENT_BLOCKS[chainId] || 0
}

export function getMaxBlockRange(chainId: number): number {
  return MAX_BLOCK_RANGE[chainId] || DEFAULT_MAX_BLOCK_RANGE
}