import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';

export const MarketsOverview: React.FC = () => {
  const markets = [
    {
      asset: 'USDC',
      name: 'USD Coin Market',
      tvl: '$0M',
      supplyApy: '0.00%',
      borrowApy: '0.00%',
      status: 'soon',
      color: 'from-blue-500 to-blue-600',
    },
    {
      asset: 'USD1',
      name: 'USD1 Stablecoin Market',
      tvl: '$0M',
      supplyApy: '0.00%',
      borrowApy: '0.00%',
      status: 'soon',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      asset: 'USDT',
      name: 'Tether USD Market',
      tvl: '$0M',
      supplyApy: '0.00%',
      borrowApy: '0.00%',
      status: 'soon',
      color: 'from-green-500 to-green-600',
    },
  ];

  const collateralAssets = [
    { symbol: 'ETH', name: 'Ethereum', tier: 'CROSS_A' },
    { symbol: 'WBTC', name: 'Wrapped Bitcoin', tier: 'CROSS_A' },
    { symbol: 'LINK', name: 'Chainlink', tier: 'CROSS_B' },
    { symbol: 'UNI', name: 'Uniswap', tier: 'CROSS_B' },
    { symbol: 'AAVE', name: 'Aave', tier: 'CROSS_B' },
    { symbol: 'COMP', name: 'Compound', tier: 'CROSS_B' },
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'STABLE': return 'text-green-400';
      case 'CROSS_A': return 'text-blue-400';
      case 'CROSS_B': return 'text-yellow-400';
      case 'ISOLATED': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section id="markets" className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Available <span className="gradient-text">Markets</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Each market operates independently with its own liquidity pool, 
            risk parameters, and yield opportunities.
          </p>
        </motion.div>

        {/* Markets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {markets.map((market, index) => (
            <motion.div
              key={market.asset}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden">
                {/* Status badge */}
                {market.status === 'soon' && (
                  <div className="absolute top-4 right-4 bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full text-xs font-semibold">
                    Coming Soon
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${market.color} rounded-lg flex items-center justify-center mr-4`}>
                    <span className="text-white font-bold text-lg">{market.asset[0]}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{market.asset}</h3>
                    <p className="text-gray-400 text-sm">{market.name}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Value Locked</span>
                    <span className="font-semibold">{market.tvl}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Supply APY</span>
                    <span className="font-semibold text-green-400">{market.supplyApy}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Borrow APY</span>
                    <span className="font-semibold text-blue-400">{market.borrowApy}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Collateral Assets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Supported <span className="gradient-text">Collateral Assets</span>
          </h3>
          <p className="text-gray-300 mb-8">
            Use any of these assets as collateral across all markets
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {collateralAssets.map((asset, index) => (
            <motion.div
              key={asset.symbol}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-4">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-sm">{asset.symbol[0]}</span>
                </div>
                <h4 className="font-semibold text-sm mb-1">{asset.symbol}</h4>
                <p className="text-xs text-gray-400 mb-2">{asset.name}</p>
                <span className={`text-xs font-semibold ${getTierColor(asset.tier)}`}>
                  {asset.tier}
                </span>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 mb-4">
            Want to see more assets supported?{' '}
            <a href="#" className="text-primary-400 hover:text-primary-300 transition-colors">
              Join our community
            </a>{' '}
            and let us know!
          </p>
          <div className="flex justify-center space-x-2 text-sm">
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-400">STABLE (1%)</span>
            </span>
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-gray-400">CROSS_A (2%)</span>
            </span>
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-gray-400">CROSS_B (3%)</span>
            </span>
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <span className="text-gray-400">ISOLATED (4%)</span>
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};