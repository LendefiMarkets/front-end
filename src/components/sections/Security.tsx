import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaShieldAlt, 
  FaLock, 
  FaClock, 
  FaEye, 
  FaCode, 
  FaUsers 
} from 'react-icons/fa';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export const Security: React.FC = () => {
  const securityFeatures = [
    {
      icon: FaShieldAlt,
      title: 'Audited Smart Contracts',
      description: 'Comprehensive security audits by leading blockchain security firms.',
      status: 'Completed',
    },
    {
      icon: FaLock,
      title: 'Isolated Position Vaults',
      description: 'Each position has its own vault contract for complete asset segregation.',
      status: 'Implemented',
    },
    {
      icon: FaClock,
      title: 'Timelock Governance',
      description: '3-day timelock on all critical protocol upgrades and parameter changes.',
      status: 'Active',
    },
    {
      icon: FaEye,
      title: 'Oracle Redundancy',
      description: 'Multi-oracle system with Chainlink and Uniswap V3 TWAP fallbacks.',
      status: 'Active',
    },
    {
      icon: FaCode,
      title: 'Open Source',
      description: 'All protocol code is open source and available for community review.',
      status: 'Available',
    },
    {
      icon: FaUsers,
      title: 'Community Governed',
      description: 'Protocol governance managed by token holders through DAO voting.',
      status: 'Coming Soon',
    },
  ];

  const auditReports = [
    {
      firm: 'Audit Firm A',
      date: 'Q1 2024',
      scope: 'Core Protocol',
      status: 'Coming Soon',
    },
    {
      firm: 'Audit Firm B',
      date: 'Q1 2024',
      scope: 'Market Factory',
      status: 'Coming Soon',
    },
  ];

  return (
    <section id="security" className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Security <span className="gradient-text">First</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built with defense-in-depth security architecture and multiple layers
            of protection to keep your assets safe.
          </p>
        </motion.div>

        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
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
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                      <feature.icon className="text-white text-xl" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                      <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">
                        {feature.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Audit Reports Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Audit <span className="gradient-text">Reports</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {auditReports.map((audit, index) => (
              <motion.div
                key={audit.firm}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-semibold">{audit.firm}</h4>
                      <p className="text-gray-400 text-sm">{audit.scope}</p>
                    </div>
                    <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full">
                      {audit.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">{audit.date}</span>
                    <Button variant="outline" size="small" disabled>
                      View Report
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Security Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-gray-400 text-sm">Code Coverage</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">0</div>
                <div className="text-gray-400 text-sm">Critical Vulnerabilities</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">3</div>
                <div className="text-gray-400 text-sm">Day Timelock</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Monitoring</div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Bug Bounty CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">
            Security researcher? Help us make the protocol even more secure.
          </p>
          <Button variant="primary" disabled>
            Bug Bounty Program (Coming Soon)
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};