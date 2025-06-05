import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLayerGroup, 
  FaShieldAlt, 
  FaCoins, 
  FaExchangeAlt, 
  FaChartLine, 
  FaBolt 
} from 'react-icons/fa';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';

export const Features: React.FC = () => {
  const features = [
    {
      icon: FaLayerGroup,
      title: 'Multi-Market Ecosystem',
      description: 'Create isolated lending markets for any ERC-20 asset with independent liquidity pools.',
    },
    {
      icon: FaShieldAlt,
      title: 'Risk Isolation',
      description: 'Each market operates independently, preventing contagion between different base assets.',
    },
    {
      icon: FaCoins,
      title: 'ERC-4626 Vaults',
      description: 'Standardized yield-bearing tokens for seamless integration with DeFi ecosystem.',
    },
    {
      icon: FaExchangeAlt,
      title: 'Cross-Market Collateral',
      description: 'Use any whitelisted asset as collateral across different lending markets.',
    },
    {
      icon: FaChartLine,
      title: 'Advanced Oracle System',
      description: 'Dual-oracle support with Chainlink and Uniswap V3 TWAP for reliable pricing.',
    },
    {
      icon: FaBolt,
      title: 'MEV Protection',
      description: 'Built-in slippage controls and same-block operation prevention for user safety.',
    },
  ];

  return (
    <section id="features" className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built with security, flexibility, and scalability in mind. Lendefi Markets 
            provides everything you need for modern DeFi lending.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                      <feature.icon className="text-white text-xl" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};