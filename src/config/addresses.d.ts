// Type declaration for addresses.json
declare module './addresses.json' {
  interface NetworkConfig {
    chainId: number
    marketFactory: string
  }
  
  const addresses: Record<string, NetworkConfig>
  export default addresses
}