import React from 'react';
import { Link } from 'react-router-dom';
import FAQItem from '../FAQItem';

const SupportCommunityFAQ: React.FC = () => {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2 style={{
        color: '#14b8a6',
        marginBottom: '2rem',
        fontSize: '1.8rem',
        borderBottom: '2px solid rgba(20, 184, 166, 0.3)',
        paddingBottom: '0.5rem'
      }}>
        🤝 Support & Community
      </h2>
      
      <FAQItem question="How can I get help or support?">
        <p style={{ marginBottom: '1rem' }}>Multiple support channels are available:</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Documentation:</strong> Comprehensive guides at <Link to="/docs" style={{ color: '#14b8a6' }}>docs</Link>
          </li>
          <li style={{ marginBottom: '0.5rem' }}><strong>GitHub:</strong> Technical issues and feature requests</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Community:</strong> Join discussions on X/Twitter</li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Contact:</strong> Direct inquiries via <Link to="/contact" style={{ color: '#14b8a6' }}>contact form</Link>
          </li>
        </ul>
        <p style={{ marginBottom: '1rem' }}>
          For urgent security issues, contact: <code style={{
            background: 'rgba(31, 41, 55, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '4px',
            padding: '0.25rem 0.5rem',
            fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace',
            color: '#14b8a6'
          }}>security@lendefimarkets.com</code>
        </p>
      </FAQItem>

      <FAQItem question="Can I contribute to the project?">
        <p style={{ marginBottom: '1rem' }}>Yes! Lendefi Markets welcomes contributions:</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Code Contributions:</strong> Submit PRs on GitHub</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Bug Reports:</strong> Report issues and help improve stability</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Documentation:</strong> Help improve guides and tutorials</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Community Support:</strong> Help other users in community channels</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Security Research:</strong> Participate in bug bounty program</li>
        </ul>
        <p style={{ marginBottom: '1rem' }}>Check our GitHub repository for contribution guidelines and open issues.</p>
      </FAQItem>
    </div>
  );
};

export default SupportCommunityFAQ;