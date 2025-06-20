import React from 'react';
import LendefiMarketFactoryAPI from './api-sections/LendefiMarketFactoryAPI';
import LendefiCoreAPI from './api-sections/LendefiCoreAPI';
import LendefiMarketVaultAPI from './api-sections/LendefiMarketVaultAPI';
import LendefiAssetsAPI from './api-sections/LendefiAssetsAPI';

interface ApiReferenceContentProps {
  activeContract: string;
}

const ApiReferenceContent: React.FC<ApiReferenceContentProps> = ({ activeContract }) => {
  const renderContent = () => {
    switch (activeContract) {
      case 'lendefi-market-factory':
        return <LendefiMarketFactoryAPI />;
      case 'lendefi-core':
        return <LendefiCoreAPI />;
      case 'lendefi-market-vault':
        return <LendefiMarketVaultAPI />;
      case 'lendefi-assets':
        return <LendefiAssetsAPI />;
      default:
        return <LendefiMarketFactoryAPI />;
    }
  };

  return (
    <div style={{ maxWidth: 'none' }}>
      {renderContent()}
    </div>
  );
};

export default ApiReferenceContent;