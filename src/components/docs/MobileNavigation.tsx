import React, { useState, useEffect } from 'react';

interface MobileNavigationProps {
  sections: Array<{id: string, title: string}>;
  onSectionClick: (sectionId: string) => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ sections, onSectionClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile) return null;

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Navigation Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1001,
          background: 'linear-gradient(135deg, #0ea5e9, #14b8a6)',
          border: 'none',
          borderRadius: '8px',
          padding: '12px 16px',
          color: '#fff',
          fontSize: '0.875rem',
          fontWeight: '600',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 4px 12px rgba(20, 184, 166, 0.3)',
          minHeight: '44px', // Better touch target
          minWidth: '44px'
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {isOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </>
          )}
        </svg>
        {!isOpen && 'Menu'}
      </button>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1000,
              backdropFilter: 'blur(4px)'
            }}
            onClick={() => setIsOpen(false)}
          />

          {/* Navigation Panel */}
          <div
            className="mobile-nav-panel"
            style={{
              position: 'fixed',
              top: '80px',
              left: '20px',
              right: '20px',
              maxHeight: '70vh',
              background: 'rgba(17, 24, 39, 0.95)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '1.5rem',
              zIndex: 1001,
              overflowY: 'auto',
              backdropFilter: 'blur(10px)'
            }}
          >
            <h3 style={{ 
              color: '#14b8a6', 
              marginBottom: '1rem', 
              fontSize: '1.1rem',
              fontWeight: '600'
            }}>
              Navigation
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleSectionClick(section.id)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '16px 20px', // Larger touch targets
                    color: '#e5e7eb',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textAlign: 'left',
                    minHeight: '52px', // Better touch target
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(20, 184, 166, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(20, 184, 166, 0.3)';
                    e.currentTarget.style.color = '#14b8a6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.color = '#e5e7eb';
                  }}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      <style>{`
        @media (max-width: 767px) {
          .sidebar {
            display: none !important;
          }
          .docs-content {
            grid-template-columns: 1fr !important;
          }
        }
        
        /* Custom scrollbar styling for mobile navigation */
        .mobile-nav-panel::-webkit-scrollbar {
          width: 8px;
        }
        
        .mobile-nav-panel::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        
        .mobile-nav-panel::-webkit-scrollbar-thumb {
          background: rgba(20, 184, 166, 0.3);
          border-radius: 4px;
        }
        
        .mobile-nav-panel::-webkit-scrollbar-thumb:hover {
          background: rgba(20, 184, 166, 0.5);
        }
        
        /* Firefox scrollbar styling */
        .mobile-nav-panel {
          scrollbar-width: thin;
          scrollbar-color: rgba(20, 184, 166, 0.3) rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </>
  );
};

export default MobileNavigation;