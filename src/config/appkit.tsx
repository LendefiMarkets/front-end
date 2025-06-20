import { sepolia } from '@reown/appkit/networks'
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
  url: import.meta.env.PROD ? 'https://lendefimarkets.com' : window.location.origin,
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Define Anvil local network
const anvilLocal: AppKitNetwork = {
  id: 31337,
  name: 'Anvil Local',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH'
  },
  rpcUrls: {
    default: {
      http: ['http://localhost:8545']
    }
  },
  blockExplorers: {
    default: {
      name: 'Local Explorer',
      url: 'http://localhost:8545'
    }
  },
  testnet: true
}

// Setup networks (testnets only for now)
export const networks = [anvilLocal, sepolia] as [AppKitNetwork, ...AppKitNetwork[]]

// Export supported chain IDs for validation
export const supportedChainIds = networks.map(network => network.id)

// Create ethers adapter
export const ethersAdapter = new EthersAdapter()