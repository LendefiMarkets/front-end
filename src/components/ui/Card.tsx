import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      className={`glass-effect rounded-xl p-6 ${hover ? 'hover-glow' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};