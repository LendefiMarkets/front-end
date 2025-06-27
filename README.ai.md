# Lendefi Markets Frontend - AI Development Guide

This repository contains AI-friendly documentation and instructions for automated development assistance.

## AI Documentation Structure

### `.ai/readme.md`
Comprehensive project overview including:
- Technology stack and architecture
- Key components and file structure
- Development commands and workflows
- Environment setup and configuration

### `.ai/context.md`
Business context and project goals:
- Project purpose and vision
- Target user personas
- Current and planned features
- Design philosophy and content strategy

### `ai-instructions.md`
Development guidelines and best practices:
- Code style and organization
- Web3 integration patterns
- Security considerations
- Performance optimization
- Testing strategies

### `CLAUDE.md`
Project-specific instructions for Claude Code tool:
- Essential commands and workflows
- Technology-specific guidance
- Development environment setup
- Common tasks and troubleshooting

## For AI Agents

When working on this project:
1. Read `.ai/readme.md` for technical overview
2. Review `.ai/context.md` for business context
3. Follow guidelines in `ai-instructions.md`
4. Check `CLAUDE.md` for tool-specific instructions

## Key Technologies
- React 19.1.0 + TypeScript 5.8.3
- Vite 6.3.5 build system
- Reown AppKit for Web3 connectivity
- Ethers.js 6.14.3 for blockchain interaction
- Framer Motion for animations

## Development Workflow
1. `npm run dev` - Start development
2. `npm run build` - Production build
3. `npm run lint` - Code quality checks
4. See `CLAUDE.md` for complete command reference

## Content Management
- Blog posts: `src/blog/posts/*.md`
- Images: `public/assets/images/blog/`
- Dark theme, cartoon line art style
- Sequential dating system

## Web3 Integration
- Supports Sepolia testnet and Mainnet
- Smart contracts in `../lendefi-markets/out/`
- Uses ethers.js v6 with AppKit provider
- Environment variables in `.env` (see template in docs)