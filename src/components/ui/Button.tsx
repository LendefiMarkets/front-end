import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  className = '',
  disabled = false,
  onClick,
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 hover-glow';
  
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white',
  };
  
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};