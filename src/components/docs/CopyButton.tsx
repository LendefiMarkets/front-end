import React, { useState } from 'react';

interface CopyButtonProps {
  code: string;
  className?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ code, className = '' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      // Clean the code by removing JSX syntax and keeping only the actual code
      const cleanCode = code
        .replace(/\{'\n'\}/g, '\n')
        .replace(/\{'\s*'\}/g, ' ')
        .replace(/\{'\t'\}/g, '\t')
        .replace(/<span[^>]*>/g, '')
        .replace(/<\/span>/g, '')
        .replace(/&gt;/g, '>')
        .replace(/&lt;/g, '<')
        .replace(/&amp;/g, '&')
        .replace(/\{'\}\'/g, '}')
        .replace(/\{'\{'\}/g, '{')
        .trim();

      await navigator.clipboard.writeText(cleanCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`copy-button ${className}`}
      style={{
        position: 'absolute',
        top: '8px',
        right: '8px',
        background: copied ? '#10b981' : 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '6px',
        padding: '6px 12px',
        color: '#fff',
        fontSize: '0.75rem',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        gap: '4px'
      }}
    >
      {copied ? (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20,6 9,17 4,12"></polyline>
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="m5,15 L5,5 A2,2 0 0,1 7,3 L17,3"></path>
          </svg>
          Copy
        </>
      )}
    </button>
  );
};

export default CopyButton;