import React from 'react';

interface CrossReferenceProps {
  links: Array<{
    title: string;
    url: string;
    description?: string;
    type?: 'internal' | 'external';
  }>;
  title?: string;
}

const CrossReference: React.FC<CrossReferenceProps> = ({ 
  links, 
  title = "Related Sections" 
}) => {
  const handleInternalClick = (url: string, e: React.MouseEvent) => {
    if (url.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(url.substring(1));
      if (element) {
        const elementPosition = element.offsetTop - 120;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div style={{
      background: 'rgba(59, 130, 246, 0.05)',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      borderRadius: '8px',
      padding: '1.5rem',
      margin: '2rem 0',
      borderLeft: '4px solid #3b82f6'
    }}>
      <h4 style={{
        color: '#60a5fa',
        fontSize: '1rem',
        fontWeight: '600',
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
        {title}
      </h4>
      
      <div style={{
        display: 'grid',
        gap: '0.75rem'
      }}>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            onClick={(e) => {
              if (link.type !== 'external' && link.url.startsWith('#')) {
                handleInternalClick(link.url, e);
              }
            }}
            target={link.type === 'external' ? '_blank' : undefined}
            rel={link.type === 'external' ? 'noopener noreferrer' : undefined}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              padding: '0.75rem',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '6px',
              textDecoration: 'none',
              color: '#e5e7eb',
              transition: 'all 0.2s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
            }}
          >
            <div style={{
              minWidth: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '2px'
            }}>
              {link.type === 'external' ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15,3 21,3 21,9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
              )}
            </div>
            
            <div style={{ flex: 1 }}>
              <div style={{
                fontWeight: '500',
                color: '#60a5fa',
                fontSize: '0.9rem',
                marginBottom: link.description ? '4px' : '0'
              }}>
                {link.title}
              </div>
              {link.description && (
                <div style={{
                  fontSize: '0.8rem',
                  color: '#9ca3af',
                  lineHeight: '1.4'
                }}>
                  {link.description}
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CrossReference;