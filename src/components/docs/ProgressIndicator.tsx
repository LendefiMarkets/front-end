import React, { useState, useEffect } from 'react';

interface ProgressSection {
  id: string;
  title: string;
}

interface ProgressIndicatorProps {
  sections: ProgressSection[];
  className?: string;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ sections, className = '' }) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowBackToTop(scrollY > 500);

      // Find the currently active section
      const sectionElements = sections.map(section => ({
        ...section,
        element: document.getElementById(section.id)
      })).filter(section => section.element);

      let currentActiveSection = '';
      
      for (const section of sectionElements) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          const elementTop = rect.top + scrollY;
          
          if (scrollY >= elementTop - 150) {
            currentActiveSection = section.id;
          }
        }
      }

      setActiveSection(currentActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.offsetTop - 120; // Account for fixed navbar
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Progress Indicator */}
      <div 
        className={`progress-indicator ${className}`}
        style={{
          position: 'fixed',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)',
          background: 'rgba(17, 24, 39, 0.9)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          padding: '1rem',
          zIndex: 1000,
          backdropFilter: 'blur(10px)',
          maxHeight: '60vh',
          overflowY: 'auto',
          width: '200px'
        }}
      >
        <h4 style={{ 
          color: '#14b8a6', 
          fontSize: '0.875rem', 
          fontWeight: '600',
          marginBottom: '0.75rem',
          textAlign: 'center'
        }}>
          Progress
        </h4>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {sections.map((section, index) => {
            const isActive = activeSection === section.id;
            const isCompleted = sections.findIndex(s => s.id === activeSection) > index;
            
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                style={{
                  background: isActive ? 'rgba(20, 184, 166, 0.2)' : 'transparent',
                  border: `1px solid ${isActive ? '#14b8a6' : 'rgba(255, 255, 255, 0.1)'}`,
                  borderRadius: '6px',
                  padding: '0.5rem 0.75rem',
                  color: isActive ? '#14b8a6' : isCompleted ? '#10b981' : '#9ca3af',
                  fontSize: '0.75rem',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'rgba(20, 184, 166, 0.5)';
                    e.currentTarget.style.color = '#14b8a6';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.color = isCompleted ? '#10b981' : '#9ca3af';
                  }
                }}
              >
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: isActive ? '#14b8a6' : isCompleted ? '#10b981' : 'rgba(255, 255, 255, 0.3)',
                  flexShrink: 0
                }} />
                {section.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            background: 'linear-gradient(135deg, #0ea5e9, #14b8a6)',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            color: '#fff',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(20, 184, 166, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="18,15 12,9 6,15"></polyline>
          </svg>
        </button>
      )}

      <style>{`
        .progress-indicator::-webkit-scrollbar {
          width: 4px;
        }
        .progress-indicator::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }
        .progress-indicator::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
        }
        .progress-indicator::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }

        @media (max-width: 1200px) {
          .progress-indicator {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default ProgressIndicator;