import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ children, className = '' }) => {
  return (
    <span className={`bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent animate-gradient ${className}`}>
      {children}
    </span>
  );
};

export default GradientText;