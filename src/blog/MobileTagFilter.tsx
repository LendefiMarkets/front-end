import React, { useState, useEffect } from 'react';

interface MobileTagFilterProps {
  tags: string[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
}

const MobileTagFilter: React.FC<MobileTagFilterProps> = ({ tags, selectedTag, onTagSelect }) => {
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

  const handleTagClick = (tag: string | null) => {
    onTagSelect(tag);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Tag Filter Toggle */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        margin: '0 0 1rem 0' 
      }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'linear-gradient(135deg, #0ea5e9, #14b8a6)',
            border: 'none',
            borderRadius: '8px',
            padding: '12px 24px',
            color: '#fff',
            fontSize: '0.875rem',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 12px rgba(20, 184, 166, 0.3)',
            minHeight: '44px'
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h12" />
          </svg>
          Filter Tags
        </button>
      </div>

      {/* Mobile Tag Filter Overlay */}
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

          {/* Tag Filter Panel */}
          <div
            className="mobile-tag-panel"
            style={{
              position: 'fixed',
              top: '140px',
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
              Filter by Tag
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button
                onClick={() => handleTagClick(null)}
                style={{
                  background: !selectedTag ? 'linear-gradient(135deg, #14b8a6 0%, #0ea5e9 100%)' : 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '16px 20px',
                  color: !selectedTag ? '#ffffff' : '#e5e7eb',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textAlign: 'left',
                  minHeight: '52px',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => {
                  if (selectedTag) {
                    e.currentTarget.style.background = 'rgba(20, 184, 166, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(20, 184, 166, 0.3)';
                    e.currentTarget.style.color = '#14b8a6';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedTag) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.color = '#e5e7eb';
                  }
                }}
              >
                All Posts
              </button>
              
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  style={{
                    background: selectedTag === tag ? 'linear-gradient(135deg, #14b8a6 0%, #0ea5e9 100%)' : 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '16px 20px',
                    color: selectedTag === tag ? '#ffffff' : '#e5e7eb',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textAlign: 'left',
                    minHeight: '52px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedTag !== tag) {
                      e.currentTarget.style.background = 'rgba(20, 184, 166, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(20, 184, 166, 0.3)';
                      e.currentTarget.style.color = '#14b8a6';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedTag !== tag) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.color = '#e5e7eb';
                    }
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
      
      <style>{`
        /* Custom scrollbar styling for mobile tag filter */
        .mobile-tag-panel::-webkit-scrollbar {
          width: 8px;
        }
        
        .mobile-tag-panel::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        
        .mobile-tag-panel::-webkit-scrollbar-thumb {
          background: rgba(20, 184, 166, 0.3);
          border-radius: 4px;
        }
        
        .mobile-tag-panel::-webkit-scrollbar-thumb:hover {
          background: rgba(20, 184, 166, 0.5);
        }
        
        /* Firefox scrollbar styling */
        .mobile-tag-panel {
          scrollbar-width: thin;
          scrollbar-color: rgba(20, 184, 166, 0.3) rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </>
  );
};

export default MobileTagFilter;