import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      // Whether to polyfill `node:` protocol imports.
      protocolImports: true,
    })
  ],
  define: {
    global: 'globalThis',
  },
  optimizeDeps: {
    include: ['@reown/appkit', '@reown/appkit-adapter-ethers', 'ethers'],
    exclude: ['vite-plugin-node-polyfills/shims/buffer', 'vite-plugin-node-polyfills/shims/global', 'vite-plugin-node-polyfills/shims/process']
  }
})
