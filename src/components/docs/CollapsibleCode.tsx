import React, { useState } from 'react';
import CodeBlock from './CodeBlock';

interface CollapsibleCodeProps {
  title: string;
  code: string;
  defaultExpanded?: boolean;
  etherscanAddress?: string;
  githubUrl?: string;
  gasEstimate?: string;
  children?: React.ReactNode;
}

const CollapsibleCode: React.FC<CollapsibleCodeProps> = ({
  title,
  code,
  defaultExpanded = false,
  etherscanAddress,
  githubUrl,
  gasEstimate,
  children
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // On mobile, default to collapsed unless explicitly expanded
  const shouldShow = isMobile ? isExpanded : true;

  if (!isMobile) {
    // On desktop, show the full code block
    return (
      <CodeBlock
        code={code}
        etherscanAddress={etherscanAddress}
        githubUrl={githubUrl}
        gasEstimate={gasEstimate}
      >
        {children}
      </CodeBlock>
    );
  }

  return (
    <div style={{
      background: '#1f2937',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '8px',
      margin: '1rem 0',
      overflow: 'hidden'
    }}>
      {/* Collapsible Header */}
      <button
        onClick={toggleExpanded}
        style={{
          width: '100%',
          background: 'rgba(20, 184, 166, 0.1)',
          border: 'none',
          padding: '1rem',
          color: '#14b8a6',
          fontSize: '0.9rem',
          fontWeight: '600',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          textAlign: 'left',
          borderBottom: isExpanded ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
        }}
      >
        <span>📱 {title}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{
            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease'
          }}
        >
          <polyline points="6,9 12,15 18,9"></polyline>
        </svg>
      </button>

      {/* Collapsible Content */}
      {shouldShow && (
        <div style={{ padding: '1rem' }}>
          <div style={{ 
            fontFamily: 'SF Mono, Monaco, Cascadia Code, Roboto Mono, Consolas, Courier New, monospace',
            fontSize: '0.8rem',
            lineHeight: '1.6',
            color: '#e5e7eb',
            whiteSpace: 'pre-wrap',
            overflowX: 'auto'
          }}>
            {children}
          </div>
          
          {/* Action buttons for mobile */}
          <div style={{
            display: 'flex',
            gap: '8px',
            marginTop: '1rem',
            flexWrap: 'wrap'
          }}>
            {/* Copy Button */}
            <button
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(code);
                } catch (err) {
                  console.error('Failed to copy:', err);
                }
              }}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '6px',
                padding: '8px 12px',
                color: '#fff',
                fontSize: '0.75rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="m5,15 L5,5 A2,2 0 0,1 7,3 L17,3"></path>
              </svg>
              Copy
            </button>

            {/* Etherscan link */}
            {etherscanAddress && (
              <a
                href={`https://sepolia.etherscan.io/address/${etherscanAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'rgba(59, 130, 246, 0.2)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '6px',
                  padding: '8px 12px',
                  color: '#60a5fa',
                  textDecoration: 'none',
                  fontSize: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                📋 Try it
              </a>
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
                  borderRadius: '6px',
                  padding: '8px 12px',
                  color: '#9ca3af',
                  textDecoration: 'none',
                  fontSize: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            )}

            {/* Gas estimate */}
            {gasEstimate && (
              <span style={{
                background: 'rgba(139, 92, 246, 0.2)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                borderRadius: '6px',
                padding: '8px 12px',
                fontSize: '0.75rem',
                color: '#a78bfa',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                ⛽ {gasEstimate}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CollapsibleCode;