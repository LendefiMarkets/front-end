import React from 'react';
import { syntaxColors } from './syntaxConstants';

interface SyntaxHighlightProps {
  children: string;
  type: keyof typeof syntaxColors;
  style?: React.CSSProperties;
}

export const SyntaxHighlight: React.FC<SyntaxHighlightProps> = ({ 
  children, 
  type, 
  style = {} 
}) => {
  return (
    <span style={{ 
      color: syntaxColors[type], 
      fontWeight: type === 'keyword' || type === 'function' ? '600' : '400',
      ...style 
    }}>
      {children}
    </span>
  );
};

export default SyntaxHighlight;