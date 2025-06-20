import React, { useState } from 'react';
import DocsNavbar from './components/layout/DocsNavbar';
import BackToTop from './components/docs/BackToTop';
import Footer from './components/layout/Footer';
import ApiReferenceHeader from './components/docs/ApiReferenceHeader';
import ApiReferenceContent from './components/docs/ApiReferenceContent';

const ApiReference: React.FC = () => {
  const [activeContract, setActiveContract] = useState<string>('lendefi-market-factory');

  const contracts = [
    { id: 'lendefi-market-factory', name: 'LendefiMarketFactory' },
    { id: 'lendefi-core', name: 'LendefiCore' },
    { id: 'lendefi-market-vault', name: 'LendefiMarketVault' },
    { id: 'lendefi-assets', name: 'LendefiAssets' }
  ];

  const handleContractSelect = (contractId: string) => {
    setActiveContract(contractId);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#111827', color: '#e5e7eb' }}>
      <DocsNavbar />
      
      <main style={{ padding: '120px 0 64px 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <ApiReferenceHeader />
          
          {/* Contract tabs */}
          <div style={{
            background: 'rgba(17, 24, 39, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: '1rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: '0.5rem'
            }}>
              {contracts.map((contract) => (
                <button
                  key={contract.id}
                  onClick={() => handleContractSelect(contract.id)}
                  style={{
                    background: activeContract === contract.id 
                      ? 'rgba(20, 184, 166, 0.2)' 
                      : 'transparent',
                    border: activeContract === contract.id 
                      ? '1px solid rgba(20, 184, 166, 0.3)' 
                      : '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '0.75rem 0.5rem',
                    color: activeContract === contract.id ? '#14b8a6' : '#9ca3af',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    fontWeight: activeContract === contract.id ? 600 : 400,
                    transition: 'all 0.3s',
                    textAlign: 'center',
                    wordBreak: 'break-word',
                    lineHeight: '1.2'
                  }}
                  onMouseOver={(e) => {
                    if (activeContract !== contract.id) {
                      e.currentTarget.style.background = 'rgba(20, 184, 166, 0.1)';
                      e.currentTarget.style.color = '#14b8a6';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (activeContract !== contract.id) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#9ca3af';
                    }
                  }}
                >
                  {contract.name.replace('Lendefi', '')}
                </button>
              ))}
            </div>
          </div>
          
          <ApiReferenceContent activeContract={activeContract} />
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default ApiReference;