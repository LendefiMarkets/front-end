import React from 'react';

// Improved syntax highlighting colors with better contrast
export const syntaxColors = {
  comment: '#8b949e',      // Lighter gray for better contrast
  keyword: '#ff7b72',      // Brighter red for keywords (function, const, etc.)
  string: '#a5d6ff',       // Brighter blue for strings
  number: '#79c0ff',       // Bright blue for numbers
  function: '#d2a8ff',     // Purple for function names
  variable: '#ffa657',     // Orange for variables
  type: '#7ee787',         // Green for types (uint256, etc.)
  operator: '#f85149',     // Red for operators
  bracket: '#e6edf3'       // Light gray for brackets and punctuation
};

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

// Helper function to wrap code with better syntax highlighting
export const enhanceSyntaxHighlighting = (codeElement: React.ReactNode) => {
  // This would be used to replace existing syntax highlighting with improved colors
  return codeElement;
};

export default SyntaxHighlight;