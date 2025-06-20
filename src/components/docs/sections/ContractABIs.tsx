import React, { useState } from 'react';

const ContractABIs: React.FC = () => {
  const [expandedAbi, setExpandedAbi] = useState<string | null>(null);

  const toggleAbi = (abiId: string) => {
    setExpandedAbi(expandedAbi === abiId ? null : abiId);
  };

  const downloadAbi = (contractName: string) => {
    alert(`Download ${contractName} ABI functionality would be implemented here`);
  };

  return (
    <section id="abis">
      <h2 style={{ color: '#14b8a6', marginBottom: '1.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        Contract ABIs
      </h2>
      <p style={{ marginBottom: '1rem', color: '#d1d5db' }}>
        Download complete ABIs for integration with the Lendefi protocol. All ABIs are generated from the latest deployed contracts.
      </p>

      <div style={{
        background: 'rgba(17, 24, 39, 0.8)',
        borderRadius: '8px',
        padding: '1rem',
        margin: '1rem 0'
      }}>
        <div 
          style={{
            color: '#f59e0b',
            fontWeight: '600',
            marginBottom: '0.5rem',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
          onClick={() => toggleAbi('factory-abi')}
        >
          LendefiMarketFactory ABI
          <span>{expandedAbi === 'factory-abi' ? '▲' : '▼'}</span>
        </div>
        {expandedAbi === 'factory-abi' && (
          <div style={{
            maxHeight: '200px',
            overflowY: 'auto',
            marginTop: '0.5rem',
            padding: '0.5rem',
            background: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '4px'
          }}>
            <div style={{
              background: '#1f2937',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              padding: '1.5rem',
              margin: '1rem 0',
              overflowX: 'auto'
            }}>
              <pre><code style={{
                color: '#e5e7eb',
                fontFamily: 'Monaco, Menlo, monospace',
                fontSize: '0.875rem'
              }}>{`[
  {
    "inputs": [
      {"internalType": "address", "name": "baseAsset", "type": "address"},
      {"internalType": "string", "name": "name", "type": "string"},
      {"internalType": "string", "name": "symbol", "type": "string"}
    ],
    "name": "createMarket",
    "outputs": [
      {
        "components": [
          {"internalType": "address", "name": "owner", "type": "address"},
          {"internalType": "address", "name": "baseAsset", "type": "address"},
          {"internalType": "address", "name": "core", "type": "address"}
        ],
        "internalType": "struct ILendefiMarketFactory.Market",
        "name": "market",
        "type": "tuple"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]`}</code></pre>
            </div>
            <button 
              onClick={() => downloadAbi('factory')}
              style={{
                background: 'rgba(139, 92, 246, 0.1)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                color: '#a78bfa',
                padding: '0.25rem 0.5rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.75rem'
              }}
            >
              Download Full ABI
            </button>
          </div>
        )}
      </div>

      <div style={{
        borderRadius: '8px',
        padding: '16px',
        margin: '1rem 0',
        background: 'rgba(59, 130, 246, 0.1)',
        border: '1px solid rgba(59, 130, 246, 0.3)'
      }}>
        <strong>📁 ABI Files:</strong> Complete ABI files are available in the <code>/out</code> directory of the deployed contracts repository. These include full function signatures, events, and error definitions.
      </div>
    </section>
  );
};

export default ContractABIs;