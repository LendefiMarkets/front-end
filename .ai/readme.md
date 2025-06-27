# Lendefi Markets Frontend - AI Agent Guide

## Project Overview
Lendefi Markets is a next-generation DeFi lending protocol with a React TypeScript frontend built on Vite. This application provides a user interface for interacting with decentralized lending markets.

## Technology Stack
- **Framework**: React 19.1.0 with TypeScript 5.8.3
- **Build Tool**: Vite 6.3.5
- **Web3**: Reown AppKit 1.7.8 (formerly WalletConnect) + Ethers.js 6.14.3
- **Routing**: React Router 7.6.2
- **Animations**: Framer Motion 12.16.0
- **Icons**: React Icons 5.5.0

## Key Components
- `src/App.tsx` - Main landing page
- `src/UserHome.tsx` - Connected user dashboard
- `src/config/appkit.tsx` - Web3 wallet configuration
- `src/components/ConnectWalletButton.tsx` - Wallet connection UI
- `src/context/Web3Modal.jsx` - Web3 modal context

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Environment Variables
Required in `.env`:
```
VITE_WALLETCONNECT_PROJECT_ID=your_project_id
VITE_RPC_URL=https://...
```

## Blockchain Integration
- Networks: Sepolia (testnet) and Mainnet
- Smart contracts in `../lendefi-markets/out/*/[Contract].json`
- Uses ethers.js v6 for contract interactions

## Blog System
- Blog posts in `src/blog/posts/` with markdown files
- Images in `public/assets/images/blog/`
- YAML frontmatter with title, date, author, excerpt, image, tags, SEO metadata

## Content Guidelines
- All blog images use dark theme with cartoon line art style
- Sequential dating system (one post per day)
- Focus on DeFi trends, protocols, and educational content

## Build Process
- TypeScript compilation + Vite bundling
- Output to `dist/` directory
- Node polyfills included for Web3 compatibility
- Environment variables must be prefixed with `VITE_`

## Common Tasks
- Adding pages: Create component in `src/`, add route in `main.tsx`
- Smart contract integration: Import ABI, get address, use ethers.js with AppKit
- Updating wallet config: Edit `src/config/appkit.tsx`

## Security Notes
- Never expose private keys or secrets
- All Web3 interactions through user's connected wallet
- Environment variables for sensitive config only