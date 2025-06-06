// Contract addresses and ABIs for Lendefi Markets
import LendefiMarketFactoryABI from '../abi/LendefiMarketFactory.sol/LendefiMarketFactory.json'
import LendefiMarketVaultABI from '../abi/LendefiMarketVault.sol/LendefiMarketVault.json'
import LendefiCoreABI from '../abi/LendefiCore.sol/LendefiCore.json'

// Export complete ABIs for more complex interactions
export { LendefiMarketFactoryABI, LendefiMarketVaultABI, LendefiCoreABI }

// Market Factory ABI - Extract specific functions we need
export const MARKET_FACTORY_ABI = [
  {
    "type": "function",
    "name": "createMarket",
    "inputs": [
      {
        "name": "baseAsset",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "symbol",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "getAllowedBaseAssets",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address[]",
        "internalType": "address[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getMarketInfo",
    "inputs": [
      {
        "name": "marketOwner",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "baseAsset",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "tuple",
        "internalType": "struct IPROTOCOL.Market",
        "components": [
          {
            "name": "core",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "baseVault",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "baseAsset",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "assetsModule",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "porFeed",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "decimals",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "name",
            "type": "string",
            "internalType": "string"
          },
          {
            "name": "symbol",
            "type": "string",
            "internalType": "string"
          },
          {
            "name": "createdAt",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "active",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isBaseAssetAllowed",
    "inputs": [
      {
        "name": "baseAsset",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "event",
    "name": "MarketCreated",
    "inputs": [
      {
        "name": "marketOwner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "baseAsset",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "core",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "baseVault",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "name",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      },
      {
        "name": "symbol",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      },
      {
        "name": "porFeed",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      }
    ],
    "anonymous": false
  }
] as const

// Market Vault ABI - For deposit/withdraw functions
export const MARKET_VAULT_ABI = [
  {
    "type": "function",
    "name": "deposit",
    "inputs": [
      { "name": "assets", "type": "uint256" },
      { "name": "receiver", "type": "address" }
    ],
    "outputs": [{ "name": "", "type": "uint256" }],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "withdraw",
    "inputs": [
      { "name": "assets", "type": "uint256" },
      { "name": "receiver", "type": "address" },
      { "name": "owner", "type": "address" }
    ],
    "outputs": [{ "name": "", "type": "uint256" }],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "totalAssets",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "totalSupply",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "balanceOf",
    "inputs": [{ "name": "account", "type": "address" }],
    "outputs": [{ "name": "", "type": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "convertToShares",
    "inputs": [{ "name": "assets", "type": "uint256" }],
    "outputs": [{ "name": "", "type": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "convertToAssets",
    "inputs": [{ "name": "shares", "type": "uint256" }],
    "outputs": [{ "name": "", "type": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "previewDeposit",
    "inputs": [{ "name": "assets", "type": "uint256" }],
    "outputs": [{ "name": "", "type": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "previewWithdraw",
    "inputs": [{ "name": "assets", "type": "uint256" }],
    "outputs": [{ "name": "", "type": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "asset",
    "inputs": [],
    "outputs": [{ "name": "", "type": "address" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "totalBorrow",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "utilization",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getSupplyRate",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getBorrowRate",
    "inputs": [{ "name": "tier", "type": "uint8" }],
    "outputs": [{ "name": "", "type": "uint256" }],
    "stateMutability": "view"
  }
] as const

// Core contract ABI - For borrowing stats  
export const LENDEFI_CORE_ABI = [
  // Note: Most rate functions are on the vault, not core
  // Add specific core functions here as needed
] as const

// ERC20 ABI for token interactions
export const ERC20_ABI = [
  {
    "type": "function",
    "name": "name",
    "inputs": [],
    "outputs": [{ "name": "", "type": "string" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "symbol",
    "inputs": [],
    "outputs": [{ "name": "", "type": "string" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "decimals",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint8" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "balanceOf",
    "inputs": [{ "name": "account", "type": "address" }],
    "outputs": [{ "name": "", "type": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "approve",
    "inputs": [
      { "name": "spender", "type": "address" },
      { "name": "amount", "type": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "bool" }],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "allowance",
    "inputs": [
      { "name": "owner", "type": "address" },
      { "name": "spender", "type": "address" }
    ],
    "outputs": [{ "name": "", "type": "uint256" }],
    "stateMutability": "view"
  }
] as const

// Contract addresses by network
export const CONTRACTS = {
  // Anvil local testnet
  31337: {
    marketFactory: "0x59b670e9fA9D0A427751Af201D676719a970857b",
  },
  // Sepolia testnet
  11155111: {
    marketFactory: "0x1234567890123456789012345678901234567890", // TODO: Replace with actual deployed address
  },
  // Mainnet
  1: {
    marketFactory: "0x0000000000000000000000000000000000000000", // TODO: Add deployed address
  }
} as const

// Common token addresses by network
export const TOKENS = {
  // Anvil local testnet
  31337: {
    USDC: "0x3Aa5ebB10DC797CAC828524e59A333d0A371443c", // Test USDC deployed locally
  },
  // Sepolia testnet
  11155111: {
    USDC: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238", // Circle's official Sepolia USDC
    DAI: "0x3e622317f8C93f7328350cF0B56d9eD4C620C5d6",  // MakerDAO Sepolia DAI
    USDT: "0x7169D38820dfd117C3FA1f22a697dBA58d90BA06", // Tether Sepolia USDT
  },
  // Mainnet
  1: {
    USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    DAI: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    USDT: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  }
} as const

export type SupportedChainId = keyof typeof CONTRACTS