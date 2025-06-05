import { mainnet, sepolia } from '@reown/appkit/networks'
import type { AppKitNetwork } from '@reown/appkit/networks'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'

// Get projectId from environment variables
export const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID

if (!projectId) {
  throw new Error('VITE_WALLETCONNECT_PROJECT_ID is not defined in .env file')
}

// Create a metadata object
export const metadata = {
  name: 'Lendefi Markets',
  description: 'Composable lending markets protocol for DeFi',
  url: window.location.origin, // Use current origin to avoid mismatch
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Setup networks
export const networks = [sepolia, mainnet] as [AppKitNetwork, ...AppKitNetwork[]]

// Create ethers adapter
export const ethersAdapter = new EthersAdapter()