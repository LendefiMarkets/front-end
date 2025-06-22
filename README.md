# Lendefi Markets Frontend

```
  ═══════════[ Composable Lending Markets ]═══════════

  ██╗     ███████╗███╗   ██╗██████╗ ███████╗███████╗██╗
  ██║     ██╔════╝████╗  ██║██╔══██╗██╔════╝██╔════╝██║
  ██║     █████╗  ██╔██╗ ██║██║  ██║█████╗  █████╗  ██║
  ██║     ██╔══╝  ██║╚██╗██║██║  ██║██╔══╝  ██╔══╝  ██║
  ███████╗███████╗██║ ╚████║██████╔╝███████╗██║     ██║
  ╚══════╝╚══════╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝     ╚═╝

  ═══════════[ Composable Lending Markets ]═══════════
```

A modern, responsive frontend application for the Lendefi Markets protocol - the composable lending platform for DeFi.

## 🚀 Overview

The Lendefi Markets frontend provides an intuitive interface for interacting with isolated lending markets, enabling users to lend, borrow, and manage lending markets with complete asset isolation and risk management.

## 🛠 Tech Stack

- **React 19.1.0** - UI framework
- **TypeScript 5.8.3** - Type safety
- **Vite 6.3.5** - Build tool and dev server
- **Reown AppKit 1.7.8** - Web3 wallet connection (formerly WalletConnect)
- **Ethers.js 6.14.3** - Blockchain interaction
- **React Router 7.6.2** - Client-side routing
- **Framer Motion 12.16.0** - Animations
- **React Icons 5.5.0** - Icon library

## 📱 Features

### Core Functionality
- **Wallet Integration** - Seamless connection via Reown AppKit
- **Multi-Network Support** - Sepolia testnet and Ethereum mainnet
- **Responsive Design** - Mobile-first, fully responsive across all devices
- **Real-time Data** - Live market data and pricing via CoinGecko API
- **Error Handling** - Comprehensive error boundaries and fallbacks

### User Interfaces
- **Landing Page** - Protocol overview with market statistics
- **User Dashboard** - Connected wallet dashboard with position management
- **Documentation Hub** - Comprehensive guides and API reference
- **Contact Forms** - Support and demo booking functionality

### Documentation System
- **Market Owner Guide** - Complete guide for creating and managing markets
- **Lender Guide** - Comprehensive lending and yield strategies
- **Borrower Guide** - Detailed borrowing and collateral management
- **API Reference** - Complete smart contract documentation with syntax highlighting
- **Smart Contracts** - Contract addresses and deployment information
- **FAQ** - Frequently asked questions and troubleshooting

## 🏗 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components (Navbar, Footer)
│   ├── sections/       # Landing page sections
│   ├── ui/            # Base UI components
│   └── docs/          # Documentation components
├── config/            # Configuration files
│   └── appkit.tsx     # Web3 wallet configuration
├── context/           # React context providers
│   └── Web3Modal.jsx  # Web3 modal context
├── *.tsx             # Page components
├── index.css         # Global styles
└── main.tsx          # App entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd front-end
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Required variables:
   ```env
   VITE_WALLETCONNECT_PROJECT_ID=your_project_id  # Get from https://cloud.reown.com
   VITE_RPC_URL=https://...                       # Ethereum RPC endpoint
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

```bash
npm run dev          # Start Vite dev server
npm run build        # Build for production (TypeScript + Vite)
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
```

## 🌐 Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page (redirects to `/app` when wallet connected) |
| `/app` | User dashboard (requires wallet connection) |
| `/docs` | Documentation hub |
| `/market-owner-guide` | Market creation and management guide |
| `/lender-guide` | Lending and yield strategies guide |
| `/borrower-guide` | Borrowing and collateral management guide |
| `/api-reference` | Smart contract API documentation |
| `/smart-contracts` | Contract addresses and information |
| `/faq` | Frequently asked questions |
| `/contact` | Contact form |
| `/book-demo` | Demo booking form |

## 🔗 Web3 Integration

### Wallet Connection
- **Provider**: Reown AppKit (formerly WalletConnect)
- **Networks**: Sepolia (testnet), Ethereum Mainnet
- **Adapter**: Ethers.js v6 for blockchain interactions

### Smart Contract Integration
```typescript
import { ethers } from 'ethers'
import { useAppKitProvider } from '@reown/appkit/react'

const provider = useAppKitProvider()
const signer = await provider.getSigner()
const contract = new ethers.Contract(address, abi, signer)
```

### Contract Addresses (Sepolia)
- **LendefiMarketFactory**: `0x08F276a9595160044c2Fb136f6BA8a0520230955` (Proxy)
- **LendefiCore**: `0xDe70388f3267718caEB9a66623a3176C05b38236`
- **LendefiMarketVault**: `0x28deDb371F413fBAFba75006efD480773351576D`
- **LendefiAssets**: `0xeE6B05978C7a2D999fa5Cf23C575a394280F460f`

## 📱 Mobile Responsiveness

The application is fully responsive with:
- **Mobile-first design** - Optimized for touch interfaces
- **Responsive navigation** - Collapsible mobile menu
- **Adaptive layouts** - Grid systems that adjust to screen size
- **Touch-friendly controls** - Proper spacing and sizing for mobile
- **Performance optimized** - Lazy loading and efficient rendering

### Responsive Features
- Sidebar navigation hides on mobile (guides pages)
- Grid layouts become single-column on mobile
- Typography scales appropriately
- Code blocks with horizontal scrolling
- Tab navigation adapts to small screens

## 🎨 Styling

- **Global Styles**: `src/index.css`
- **Component Styles**: Inline styles with CSS-in-JS approach
- **Theme**: Dark theme with teal/blue gradient accents
- **CSS Variables**: For consistent theming
- **Responsive Breakpoints**: 768px, 480px

## 🔧 Configuration

### Web3 Configuration
Edit `src/config/appkit.tsx` to:
- Update supported networks
- Modify wallet connection options
- Change app metadata

### Environment Variables
All environment variables must be prefixed with `VITE_`:
- `VITE_WALLETCONNECT_PROJECT_ID` - Required for wallet connections
- `VITE_RPC_URL` - Ethereum RPC endpoint

## 📦 Build & Deployment

### Production Build
```bash
npm run build
```
Output is generated in the `dist/` folder.

### Deployment Options
- **Static Hosting**: Vercel, Netlify, GitHub Pages
- **CDN**: CloudFlare, AWS CloudFront
- **IPFS**: Decentralized hosting

### Build Considerations
- Environment variables are bundled at build time
- Source maps included for debugging
- Assets are optimized and compressed
- Modern browser targets (ES2020+)

## 🔍 Development Guidelines

### Code Style
- TypeScript for type safety
- Functional components with hooks
- Inline styles for component-specific styling
- Consistent naming conventions

### Component Architecture
- Reusable UI components in `components/ui/`
- Layout components for consistent structure
- Page components for route handling
- Context providers for state management

### Error Handling
- Error boundaries for graceful failures
- Wallet connection error states
- API failure fallbacks
- User-friendly error messages

## 🧪 Testing

The application includes:
- Component prop validation
- TypeScript compile-time checks
- ESLint code quality checks
- Production build verification

## 🛠 Troubleshooting

### Common Issues

**Wallet Connection Issues**
- Verify WalletConnect project ID in `.env`
- Check RPC URL accessibility
- Clear browser localStorage
- Ensure MetaMask is on correct network

**Build Errors**
- Run `npm install` to update dependencies
- Check TypeScript errors: `npm run build`
- Verify environment variables are set
- Clear Vite cache: `rm -rf .vite`

**Development Server Issues**
- Check port 5173 availability
- Clear browser cache
- Restart development server
- Check for Node.js version compatibility

### Performance Tips
- Use `npm run preview` to test production build locally
- Monitor bundle size with build output
- Use browser dev tools for performance profiling
- Enable React DevTools for component debugging

## 📄 License

This project is part of the Lendefi Markets protocol.

## 🔗 Links

- **Protocol**: [Lendefi Markets](https://lendefimarkets.com)
- **Documentation**: [docs.lendefimarkets.com](https://lendefimarkets.com/docs/)
- **GitHub**: [github.com/LendefiMarkets](https://github.com/LendefiMarkets)
- **X (Twitter)**: [@LendefiMarkets](https://x.com/LendefiMarkets)

## 📧 Support

For technical support or questions:
- **Contact**: [hello@lendefimarkets.com](mailto:hello@lendefimarkets.com)
- **Issues**: [GitHub Issues](https://github.com/LendefiMarkets/lendefi-markets/issues)
- **Community**: [X Community](https://x.com/LendefiMarkets)

---

Built with ❤️ by the Lendefi Labs team