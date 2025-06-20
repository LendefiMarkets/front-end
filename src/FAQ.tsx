import React from 'react';
import DocsNavbar from './components/layout/DocsNavbar';
import BackToTop from './components/docs/BackToTop';
import Footer from './components/layout/Footer';
import FAQHeader from './components/docs/FAQHeader';
import FAQContent from './components/docs/FAQContent';
import MobileNavigation from './components/docs/MobileNavigation';

const FAQ: React.FC = () => {
  const sections = [
    { id: 'getting-started', title: 'Getting Started' },
    { id: 'markets-assets', title: 'Markets & Assets' },
    { id: 'flash-loans-advanced', title: 'Flash Loans & Advanced' },
    { id: 'technical-integration', title: 'Technical Integration' },
    { id: 'security-risk', title: 'Security & Risk' },
    { id: 'support-community', title: 'Support & Community' }
  ];

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.offsetTop - 120;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#111827', color: '#e5e7eb' }}>
      {/* Mobile Navigation */}
      <MobileNavigation sections={sections} onSectionClick={handleSectionClick} />
      
      <DocsNavbar />
      
      <main style={{ padding: '120px 0 64px 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <FAQHeader />
          <FAQContent />
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default FAQ;