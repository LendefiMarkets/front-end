import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  children: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{
      background: 'rgba(17, 24, 39, 0.5)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      marginBottom: '1.5rem',
      overflow: 'hidden'
    }}>
      <div 
        style={{
          background: isOpen ? 'rgba(20, 184, 166, 0.15)' : 'rgba(20, 184, 166, 0.1)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '1.5rem',
          fontWeight: 600,
          color: '#f9fafb',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'background 0.3s'
        }}
        onClick={toggleFaq}
      >
        {question}
        <span style={{
          fontSize: '1.5rem',
          color: '#14b8a6',
          transition: 'transform 0.3s',
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)'
        }}>
          +
        </span>
      </div>
      
      <div style={{
        padding: isOpen ? '1.5rem' : '0 1.5rem',
        maxHeight: isOpen ? '1000px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease, padding 0.3s ease'
      }}>
        <div style={{ color: '#d1d5db' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default FAQItem;