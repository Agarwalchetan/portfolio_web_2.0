import React from 'react';
import { motion } from 'framer-motion';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const GradientButton: React.FC<GradientButtonProps> = ({ 
  children, 
  onClick, 
  className = '',
  type = 'button'
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative overflow-hidden
        px-6 py-3 rounded-lg
        bg-gradient-to-r from-primary-500 to-accent-500
        text-white font-medium
        shadow-lg
        transition-all duration-300
        hover:shadow-xl
        before:absolute before:inset-0
        before:bg-gradient-shine before:bg-[length:200%_100%]
        before:animate-shine
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
};

export default GradientButton;