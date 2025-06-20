import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FAQHeader from './components/docs/FAQHeader';
import FAQContent from './components/docs/FAQContent';

const FAQ: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#111827', color: '#e5e7eb' }}>
      <Navbar />
      
      <main style={{ padding: '120px 0 64px 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <FAQHeader />
          <FAQContent />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;