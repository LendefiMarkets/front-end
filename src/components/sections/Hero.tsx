import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  const stats = [
    { label: 'Total Value Locked', value: '$0M', soon: true },
    { label: 'Markets Available', value: '3+', soon: false },
    { label: 'Supported Assets', value: '20+', soon: false },
    { label: 'Active Users', value: '0', soon: true },
  ];

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%, rgba(168, 85, 247, 0.1) 100%)' }} />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full" style={{ background: 'rgba(59, 130, 246, 0.1)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full" style={{ background: 'rgba(168, 85, 247, 0.1)', filter: 'blur(60px)' }} />
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Composable</span>{' '}
            <span>Lending Markets</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Create isolated lending markets for any asset. Supply liquidity, borrow against
            collateral, and earn yield in a secure, decentralized environment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button variant="primary" size="large" disabled>
              Launch App (Coming Soon)
            </Button>
            <Button variant="outline" size="large">
              View Documentation
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="glass-effect rounded-lg p-6"
              >
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                  {stat.soon && (
                    <span className="text-xs text-gray-400 ml-2">(soon)</span>
                  )}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};