import React, { useState, useEffect } from 'react'
import { useMarketFactory } from '../hooks/useMarketFactory'
import { FiAlertCircle, FiCheckCircle, FiLoader } from 'react-icons/fi'

function CreateMarket() {
  const { 
    isLoading, 
    error, 
    allowedAssets, 
    createMarket, 
    checkMarketExists,
    factoryAddress 
  } = useMarketFactory()

  const [selectedAsset, setSelectedAsset] = useState('')
  const [marketName, setMarketName] = useState('')
  const [marketSymbol, setMarketSymbol] = useState('')
  const [isCreating, setIsCreating] = useState(false)
  const [txHash, setTxHash] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [marketExists, setMarketExists] = useState(false)
  const [localError, setLocalError] = useState<string | null>(null)

  // Check if market exists when asset is selected
  useEffect(() => {
    const checkExistence = async () => {
      if (selectedAsset) {
        const exists = await checkMarketExists(selectedAsset)
        setMarketExists(exists)
        if (exists) {
          setLocalError('You already have a market for this asset')
        } else {
          setLocalError(null)
        }
      }
    }
    checkExistence()
  }, [selectedAsset, checkMarketExists])

  // Auto-generate name and symbol when asset is selected
  useEffect(() => {
    if (selectedAsset && allowedAssets.length > 0) {
      const asset = allowedAssets.find(a => a.address === selectedAsset)
      if (asset) {
        setMarketName(`Lendefi ${asset.symbol} Market`)
        setMarketSymbol(`lend${asset.symbol}`)
      }
    }
  }, [selectedAsset, allowedAssets])

  const handleCreateMarket = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedAsset || !marketName || !marketSymbol) {
      setLocalError('Please fill in all fields')
      return
    }

    if (marketExists) {
      setLocalError('You already have a market for this asset')
      return
    }

    setIsCreating(true)
    setLocalError(null)
    setSuccess(false)
    setTxHash(null)

    try {
      const tx = await createMarket(selectedAsset, marketName, marketSymbol)
      
      if (tx) {
        setTxHash(tx.hash)
        
        // Wait for transaction confirmation
        const receipt = await tx.wait()
        
        if (receipt && receipt.status === 1) {
          setSuccess(true)
          // Reset form
          setSelectedAsset('')
          setMarketName('')
          setMarketSymbol('')
        } else {
          setLocalError('Transaction failed')
        }
      }
    } catch (err) {
      console.error('Market creation error:', err)
    } finally {
      setIsCreating(false)
    }
  }

  const displayError = localError || error

  if (!factoryAddress) {
    return (
      <div className="glass-effect" style={{ padding: '32px', textAlign: 'center' }}>
        <FiAlertCircle style={{ fontSize: '48px', color: '#f87171', marginBottom: '16px' }} />
        <h3 style={{ marginBottom: '8px' }}>Network Not Supported</h3>
        <p style={{ color: '#9ca3af' }}>
          Please switch to Sepolia testnet or Ethereum mainnet to create markets.
        </p>
      </div>
    )
  }

  return (
    <div className="glass-effect" style={{ padding: '32px' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '24px' }}>
        Create New Market
      </h2>
      
      {success && (
        <div style={{ 
          backgroundColor: 'rgba(16, 185, 129, 0.1)', 
          border: '1px solid rgba(16, 185, 129, 0.3)',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <FiCheckCircle style={{ color: '#10b981', fontSize: '20px' }} />
          <div>
            <p style={{ fontWeight: 600 }}>Market created successfully!</p>
            {txHash && (
              <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
                Transaction: {txHash.slice(0, 10)}...{txHash.slice(-8)}
              </p>
            )}
          </div>
        </div>
      )}

      {displayError && (
        <div style={{ 
          backgroundColor: 'rgba(248, 113, 113, 0.1)', 
          border: '1px solid rgba(248, 113, 113, 0.3)',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <FiAlertCircle style={{ color: '#f87171', fontSize: '20px' }} />
          <p>{displayError}</p>
        </div>
      )}

      <form onSubmit={handleCreateMarket}>
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>
            Base Asset
          </label>
          <select
            value={selectedAsset}
            onChange={(e) => setSelectedAsset(e.target.value)}
            disabled={isLoading || isCreating}
            style={{
              width: '100%',
              padding: '12px 16px',
              backgroundColor: 'rgba(31, 41, 55, 0.5)',
              border: '1px solid rgba(75, 85, 99, 0.5)',
              borderRadius: '8px',
              color: 'white',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            <option value="">Select a base asset</option>
            {allowedAssets.map((asset) => (
              <option key={asset.address} value={asset.address}>
                {asset.symbol} - {asset.name}
              </option>
            ))}
          </select>
          {isLoading && (
            <p style={{ fontSize: '0.875rem', color: '#9ca3af', marginTop: '8px' }}>
              Loading allowed assets...
            </p>
          )}
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>
            Yield Token Name
          </label>
          <input
            type="text"
            value={marketName}
            onChange={(e) => setMarketName(e.target.value)}
            placeholder="e.g., Lendefi USDC Market"
            disabled={isCreating}
            style={{
              width: '100%',
              padding: '12px 16px',
              backgroundColor: 'rgba(31, 41, 55, 0.5)',
              border: '1px solid rgba(75, 85, 99, 0.5)',
              borderRadius: '8px',
              color: 'white',
              fontSize: '16px'
            }}
          />
        </div>

        <div style={{ marginBottom: '32px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>
            Yield Token Symbol
          </label>
          <input
            type="text"
            value={marketSymbol}
            onChange={(e) => setMarketSymbol(e.target.value)}
            placeholder="e.g., lendUSDC"
            disabled={isCreating}
            style={{
              width: '100%',
              padding: '12px 16px',
              backgroundColor: 'rgba(31, 41, 55, 0.5)',
              border: '1px solid rgba(75, 85, 99, 0.5)',
              borderRadius: '8px',
              color: 'white',
              fontSize: '16px'
            }}
          />
          <p style={{ fontSize: '0.875rem', color: '#9ca3af', marginTop: '8px' }}>
            This will be the symbol for the ERC-4626 yield token that liquidity providers receive.
          </p>
        </div>

        <button
          type="submit"
          disabled={isCreating || !selectedAsset || marketExists}
          className="btn btn-primary"
          style={{ 
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            opacity: (isCreating || !selectedAsset || marketExists) ? 0.5 : 1,
            cursor: (isCreating || !selectedAsset || marketExists) ? 'not-allowed' : 'pointer'
          }}
        >
          {isCreating ? (
            <>
              <FiLoader style={{ animation: 'spin 1s linear infinite' }} />
              Creating Market...
            </>
          ) : (
            'Create Market'
          )}
        </button>
      </form>

      <div style={{ marginTop: '32px', padding: '16px', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderRadius: '8px' }}>
        <h4 style={{ marginBottom: '8px', fontWeight: 600 }}>What happens next?</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#9ca3af' }}>
          <li style={{ marginBottom: '8px' }}>• A new lending market will be deployed for your chosen asset</li>
          <li style={{ marginBottom: '8px' }}>• You'll be the market owner with admin privileges</li>
          <li style={{ marginBottom: '8px' }}>• Liquidity providers can deposit the base asset to earn yield</li>
          <li>• Borrowers can use various collateral types to borrow from your market</li>
        </ul>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default CreateMarket