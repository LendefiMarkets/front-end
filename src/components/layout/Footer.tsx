import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaGithub, FaDiscord, FaTelegram } from 'react-icons/fa';
import { Container } from '../ui/Container';

export const Footer: React.FC = () => {
  const footerLinks = {
    product: [
      { name: 'Markets', href: '#markets' },
      { name: 'Features', href: '#features' },
      { name: 'Security', href: '#security' },
      { name: 'Roadmap', href: '#' },
    ],
    developers: [
      { name: 'Documentation', href: '#' },
      { name: 'GitHub', href: 'https://github.com/nebula-labs-xyz/lendefi-markets' },
      { name: 'Audit Reports', href: '#' },
      { name: 'Bug Bounty', href: '#' },
    ],
    community: [
      { name: 'Discord', href: '#' },
      { name: 'Twitter', href: '#' },
      { name: 'Telegram', href: '#' },
      { name: 'Forum', href: '#' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaGithub, href: 'https://github.com/nebula-labs-xyz/lendefi-markets', label: 'GitHub' },
    { icon: FaDiscord, href: '#', label: 'Discord' },
    { icon: FaTelegram, href: '#', label: 'Telegram' },
  ];

  return (
    <footer className="bg-gray-900/50 border-t border-white/10 pt-16 pb-8 mt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-xl font-bold">Lendefi</span>
            </div>
            <p className="text-gray-400 text-sm">
              Composable lending markets protocol for DeFi
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-white font-semibold mb-4 capitalize">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-8 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-white font-semibold mb-2">Stay updated</h3>
              <p className="text-gray-400 text-sm">Get the latest updates on Lendefi Markets</p>
            </div>
            <form className="flex space-x-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 w-full md:w-64"
              />
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Lendefi Protocol. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};