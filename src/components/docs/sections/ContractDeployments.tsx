import React from 'react';

interface ContractDeploymentsProps {
  selectedNetwork: string;
  setSelectedNetwork: (network: string) => void;
}

const ContractDeployments: React.FC<ContractDeploymentsProps> = ({ selectedNetwork, setSelectedNetwork }) => {
  const copyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
  };

  return (
    <section id="deployments">
      <h2 style={{ color: '#14b8a6', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        Contract Deployments
      </h2>
      
      <div style={{
        background: 'rgba(31, 41, 55, 0.5)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '8px',
        padding: '1rem',
        margin: '2rem 0',
        textAlign: 'center'
      }}>
        <h4>Select Network</h4>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginTop: '1rem'
        }}>
          <button 
            onClick={() => setSelectedNetwork('sepolia')}
            style={{
              background: selectedNetwork === 'sepolia' ? 'rgba(20, 184, 166, 0.2)' : 'rgba(59, 130, 246, 0.1)',
              border: selectedNetwork === 'sepolia' ? '1px solid #14b8a6' : '1px solid rgba(59, 130, 246, 0.3)',
              color: selectedNetwork === 'sepolia' ? '#14b8a6' : '#60a5fa',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          >
            Sepolia Testnet
          </button>
          <button 
            onClick={() => setSelectedNetwork('mainnet')}
            style={{
              background: selectedNetwork === 'mainnet' ? 'rgba(20, 184, 166, 0.2)' : 'rgba(59, 130, 246, 0.1)',
              border: selectedNetwork === 'mainnet' ? '1px solid #14b8a6' : '1px solid rgba(59, 130, 246, 0.3)',
              color: selectedNetwork === 'mainnet' ? '#14b8a6' : '#60a5fa',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          >
            Ethereum Mainnet
          </button>
        </div>
      </div>

      {selectedNetwork === 'sepolia' && (
        <div>
          <h3 style={{ color: '#0ea5e9', margin: '2rem 0 1rem 0' }}>Sepolia Testnet Deployments</h3>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            margin: '1rem 0'
          }}>
            <thead>
              <tr>
                <th style={{
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '0.75rem',
                  textAlign: 'left',
                  background: 'rgba(20, 184, 166, 0.1)',
                  color: '#14b8a6'
                }}>Contract</th>
                <th style={{
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '0.75rem',
                  textAlign: 'left',
                  background: 'rgba(20, 184, 166, 0.1)',
                  color: '#14b8a6'
                }}>Address</th>
                <th style={{
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '0.75rem',
                  textAlign: 'left',
                  background: 'rgba(20, 184, 166, 0.1)',
                  color: '#14b8a6'
                }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.75rem', fontFamily: 'Monaco, Menlo, monospace', fontSize: '0.8rem' }}>LendefiMarketFactory</td>
                <td style={{ border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.75rem', fontFamily: 'Monaco, Menlo, monospace', fontSize: '0.8rem' }}>
                  0x1234...5678 
                  <button 
                    onClick={() => copyAddress('0x1234567890123456789012345678901234567890')}
                    style={{
                      background: 'rgba(139, 92, 246, 0.1)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      color: '#a78bfa',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      marginLeft: '0.5rem'
                    }}
                  >
                    Copy
                  </button>
                </td>
                <td style={{ border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.75rem' }}>
                  <a href="https://sepolia.etherscan.io/address/0x1234567890123456789012345678901234567890" target="_blank" style={{ color: '#14b8a6' }}>View on Etherscan</a>
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.75rem', fontFamily: 'Monaco, Menlo, monospace', fontSize: '0.8rem' }}>LendefiCore (Implementation)</td>
                <td style={{ border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.75rem', fontFamily: 'Monaco, Menlo, monospace', fontSize: '0.8rem' }}>
                  0x2345...6789 
                  <button 
                    onClick={() => copyAddress('0x2345678901234567890123456789012345678901')}
                    style={{
                      background: 'rgba(139, 92, 246, 0.1)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      color: '#a78bfa',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      marginLeft: '0.5rem'
                    }}
                  >
                    Copy
                  </button>
                </td>
                <td style={{ border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.75rem' }}>
                  <a href="https://sepolia.etherscan.io/address/0x2345678901234567890123456789012345678901" target="_blank" style={{ color: '#14b8a6' }}>View on Etherscan</a>
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.75rem', fontFamily: 'Monaco, Menlo, monospace', fontSize: '0.8rem' }}>LendefiMarketVault (Implementation)</td>
                <td style={{ border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.75rem', fontFamily: 'Monaco, Menlo, monospace', fontSize: '0.8rem' }}>
                  0x3456...7890 
                  <button 
                    onClick={() => copyAddress('0x3456789012345678901234567890123456789012')}
                    style={{
                      background: 'rgba(139, 92, 246, 0.1)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      color: '#a78bfa',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      marginLeft: '0.5rem'
                    }}
                  >
                    Copy
                  </button>
                </td>
                <td style={{ border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.75rem' }}>
                  <a href="https://sepolia.etherscan.io/address/0x3456789012345678901234567890123456789012" target="_blank" style={{ color: '#14b8a6' }}>View on Etherscan</a>
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.75rem', fontFamily: 'Monaco, Menlo, monospace', fontSize: '0.8rem' }}>LendefiAssets (Implementation)</td>
                <td style={{ border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.75rem', fontFamily: 'Monaco, Menlo, monospace', fontSize: '0.8rem' }}>
                  0x4567...8901 
                  <button 
                    onClick={() => copyAddress('0x4567890123456789012345678901234567890123')}
                    style={{
                      background: 'rgba(139, 92, 246, 0.1)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      color: '#a78bfa',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      marginLeft: '0.5rem'
                    }}
                  >
                    Copy
                  </button>
                </td>
                <td style={{ border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.75rem' }}>
                  <a href="https://sepolia.etherscan.io/address/0x4567890123456789012345678901234567890123" target="_blank" style={{ color: '#14b8a6' }}>View on Etherscan</a>
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.75rem', fontFamily: 'Monaco, Menlo, monospace', fontSize: '0.8rem' }}>FlashLoanRecipient (Liquidator)</td>
                <td style={{ border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.75rem', fontFamily: 'Monaco, Menlo, monospace', fontSize: '0.8rem' }}>
                  0x5678...9012 
                  <button 
                    onClick={() => copyAddress('0x5678901234567890123456789012345678901234')}
                    style={{
                      background: 'rgba(139, 92, 246, 0.1)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      color: '#a78bfa',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      marginLeft: '0.5rem'
                    }}
                  >
                    Copy
                  </button>
                </td>
                <td style={{ border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.75rem' }}>
                  <a href="https://sepolia.etherscan.io/address/0x5678901234567890123456789012345678901234" target="_blank" style={{ color: '#14b8a6' }}>View on Etherscan</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {selectedNetwork === 'mainnet' && (
        <div>
          <h3 style={{ color: '#0ea5e9', margin: '2rem 0 1rem 0' }}>Ethereum Mainnet Deployments</h3>
          <div style={{
            borderRadius: '8px',
            padding: '16px',
            margin: '1rem 0',
            background: 'rgba(245, 158, 11, 0.1)',
            border: '1px solid rgba(245, 158, 11, 0.3)'
          }}>
            <strong>⚠️ Coming Soon:</strong> Mainnet deployment is planned after successful testnet validation and security audits.
          </div>
        </div>
      )}
    </section>
  );
};

export default ContractDeployments;