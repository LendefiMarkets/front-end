import React from 'react';
import GettingStartedFAQ from './faq-sections/GettingStartedFAQ';
import MarketsAssetsFAQ from './faq-sections/MarketsAssetsFAQ';
import FlashLoansAdvancedFAQ from './faq-sections/FlashLoansAdvancedFAQ';
import TechnicalIntegrationFAQ from './faq-sections/TechnicalIntegrationFAQ';
import SecurityRiskFAQ from './faq-sections/SecurityRiskFAQ';
import SupportCommunityFAQ from './faq-sections/SupportCommunityFAQ';

const FAQContent: React.FC = () => {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <GettingStartedFAQ />
      <MarketsAssetsFAQ />
      <FlashLoansAdvancedFAQ />
      <TechnicalIntegrationFAQ />
      <SecurityRiskFAQ />
      <SupportCommunityFAQ />
    </div>
  );
};

export default FAQContent;