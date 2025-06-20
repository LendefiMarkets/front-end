import React, { useState } from 'react';

interface CodeBlockProps {
  code: string;
  compact?: boolean;
  etherscanAddress?: string;
  githubUrl?: string;
  gasEstimate?: string;
  children?: React.ReactNode;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  compact = false,
  etherscanAddress,
  githubUrl,
  gasEstimate,
  children 
}) => {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const containerStyle = {
    background: '#1f2937',
    border: `1px solid ${isHovered ? 'rgba(20, 184, 166, 0.3)' : 'rgba(255, 255, 255, 0.1)'}`,
    borderRadius: '8px',
    padding: compact ? '1rem' : '1.5rem',
    margin: '1rem 0',
    overflowX: 'auto' as const,
    position: 'relative' as const,
    transition: 'all 0.3s ease',
    boxShadow: isHovered ? '0 4px 12px rgba(20, 184, 166, 0.1)' : 'none'
  };

  return (
    <div 
      className="code-container" 
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header with actions */}
      <div style={{
        position: 'absolute',
        top: '8px',
        right: '8px',
        display: 'flex',
        gap: '6px',
        alignItems: 'center',
        zIndex: 10
      }}>
        {/* Gas estimate */}
        {gasEstimate && (
          <span style={{
            background: 'rgba(139, 92, 246, 0.2)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            borderRadius: '4px',
            padding: '3px 8px',
            fontSize: '0.7rem',
            color: '#a78bfa'
          }}>
            ⛽ {gasEstimate}
          </span>
        )}

        {/* GitHub link */}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'rgba(107, 114, 128, 0.2)',
              border: '1px solid rgba(107, 114, 128, 0.3)',
              borderRadius: '4px',
              padding: '4px 8px',
              color: '#9ca3af',
              textDecoration: 'none',
              fontSize: '0.7rem',
              display: 'flex',
              alignItems: 'center',
              gap: '3px'
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        )}

        {/* Etherscan link */}
        {etherscanAddress && (
          <a
            href={`https://sepolia.etherscan.io/address/${etherscanAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'rgba(59, 130, 246, 0.2)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '4px',
              padding: '4px 8px',
              color: '#60a5fa',
              textDecoration: 'none',
              fontSize: '0.7rem',
              display: 'flex',
              alignItems: 'center',
              gap: '3px'
            }}
          >
            📋 Try it
          </a>
        )}

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          style={{
            background: copied ? '#10b981' : 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '6px',
            padding: '6px 12px',
            color: '#fff',
            fontSize: '0.75rem',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}
          onMouseEnter={(e) => {
            if (!copied) {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
            }
          }}
          onMouseLeave={(e) => {
            if (!copied) {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }
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
      </div>

      {children}
    </div>
  );
};

export default CodeBlock;