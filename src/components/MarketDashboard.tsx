import React, { useState } from 'react'
import { useAppKitAccount, useAppKitProvider } from '@reown/appkit/react'
import { ethers } from 'ethers'
import { useMarketDashboard, formatTokenAmount, formatBalance, formatPercentage } from '../hooks/useMarketDashboard'
import { MARKET_VAULT_ABI, ERC20_ABI } from '../config/contracts'

interface MarketDashboardProps {
  baseAsset: string
  marketOwner?: string
  onBack?: () => void
}

export default function MarketDashboard({ baseAsset, marketOwner, onBack }: MarketDashboardProps) {
  const { address } = useAppKitAccount()
  const { walletProvider } = useAppKitProvider('eip155')
  const { data, isLoading, error, refresh } = useMarketDashboard(baseAsset, marketOwner)
  
  // Supply/Withdraw states
  const [supplyAction, setSupplyAction] = useState<'deposit' | 'withdraw' | 'redeem' | null>(null)
  const [amount, setAmount] = useState('')
  const [isActionLoading, setIsActionLoading] = useState(false)
  const [actionError, setActionError] = useState<string | null>(null)

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '64px 0' }}>
        <div style={{ 
          display: 'inline-block',
          width: '40px',
          height: '40px',
          border: '4px solid rgba(14, 165, 233, 0.3)',
          borderTop: '4px solid #0ea5e9',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
        <p style={{ marginTop: '16px', color: '#9ca3af' }}>Loading market data...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="glass-effect" style={{ textAlign: 'center', padding: '48px' }}>
        <h3 style={{ color: '#ef4444', marginBottom: '16px' }}>Error Loading Market</h3>
        <p style={{ color: '#9ca3af', marginBottom: '24px' }}>{error}</p>
        <button onClick={refresh} className="btn btn-primary">
          Try Again
        </button>
        {onBack && (
          <button onClick={onBack} className="btn btn-outline" style={{ marginLeft: '12px' }}>
            Go Back
          </button>
        )}
      </div>
    )
  }

  if (!data || !data.marketInfo) {
    return (
      <div className="glass-effect" style={{ textAlign: 'center', padding: '48px' }}>
        <h3 style={{ color: '#f59e0b', marginBottom: '16px' }}>Market Not Found</h3>
        <p style={{ color: '#9ca3af', marginBottom: '24px' }}>
          No market found for this asset and owner combination.
        </p>
        {onBack && (
          <button onClick={onBack} className="btn btn-outline">
            Go Back
          </button>
        )}
      </div>
    )
  }

  const { marketInfo } = data
  const isOwner = address?.toLowerCase() === marketOwner?.toLowerCase()

  const executeSupplyAction = async () => {
    if (!walletProvider || !address || !supplyAction || !amount || !data) return

    try {
      setIsActionLoading(true)
      setActionError(null)

      const provider = new ethers.BrowserProvider(walletProvider as any)
      const signer = await provider.getSigner()
      const vaultContract = new ethers.Contract(data.marketInfo!.baseVault, MARKET_VAULT_ABI, signer)
      
      let tx: ethers.ContractTransactionResponse

      if (supplyAction === 'deposit') {
        // First approve the vault to spend tokens
        const tokenContract = new ethers.Contract(baseAsset, ERC20_ABI, signer)
        const amountWei = ethers.parseUnits(amount, data.baseAssetDecimals)
        
        // Check allowance
        const allowance = await tokenContract.allowance(address, data.marketInfo!.baseVault)
        if (allowance < amountWei) {
          const approveTx = await tokenContract.approve(data.marketInfo!.baseVault, amountWei)
          await approveTx.wait()
        }
        
        tx = await vaultContract.deposit(amountWei, address)
      } else if (supplyAction === 'withdraw') {
        const amountWei = ethers.parseUnits(amount, data.baseAssetDecimals)
        tx = await vaultContract.withdraw(amountWei, address, address)
      } else if (supplyAction === 'redeem') {
        const sharesWei = ethers.parseUnits(amount, data.baseAssetDecimals) // Shares have same decimals as base asset
        tx = await vaultContract.redeem(sharesWei, address, address)
      } else {
        return
      }

      await tx.wait()
      
      setSupplyAction(null)
      setAmount('')
      refresh() // Refresh dashboard data
    } catch (err: any) {
      console.error(`${supplyAction} failed:`, err)
      setActionError(err.message || `${supplyAction} failed`)
    } finally {
      setIsActionLoading(false)
    }
  }

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '8px' }}>
            {marketInfo.name}
          </h1>
          <p style={{ color: '#9ca3af', fontSize: '1.125rem' }}>
            Market Symbol: {marketInfo.symbol} • Base Asset: {data.baseAssetSymbol}
          </p>
          {isOwner && (
            <span style={{ 
              display: 'inline-block', 
              background: 'rgba(16, 185, 129, 0.2)', 
              color: '#10b981', 
              padding: '4px 12px', 
              borderRadius: '12px', 
              fontSize: '0.875rem',
              marginTop: '8px'
            }}>
              You own this market
            </span>
          )}
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button onClick={refresh} className="btn btn-outline">
            🔄 Refresh
          </button>
          {onBack && (
            <button onClick={onBack} className="btn btn-outline">
              ← Back
            </button>
          )}
        </div>
      </div>

      {/* Key Metrics */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '24px', 
        marginBottom: '32px' 
      }}>
        <div className="glass-effect">
          <h3 style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '8px', textTransform: 'uppercase' }}>
            Total Value Locked
          </h3>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0ea5e9' }}>
            {formatTokenAmount(data.totalAssets, data.baseAssetDecimals, 2)} {data.baseAssetSymbol}
          </div>
          <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginTop: '4px' }}>
            ${data.tvl.toFixed(2)} USD (est.)
          </div>
        </div>

        <div className="glass-effect">
          <h3 style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '8px', textTransform: 'uppercase' }}>
            Supply APY
          </h3>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>
            {formatPercentage(data.apy.supply)}
          </div>
          <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginTop: '4px' }}>
            Current rate for lenders
          </div>
        </div>

        <div className="glass-effect">
          <h3 style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '8px', textTransform: 'uppercase' }}>
            Borrow APY
          </h3>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b' }}>
            {formatPercentage(data.apy.borrow)}
          </div>
          <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginTop: '4px' }}>
            Current rate for borrowers
          </div>
        </div>

        <div className="glass-effect">
          <h3 style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '8px', textTransform: 'uppercase' }}>
            Utilization Rate
          </h3>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#8b5cf6' }}>
            {formatPercentage(Number(data.utilizationRate) / 10000)}
          </div>
          <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginTop: '4px' }}>
            {formatTokenAmount(data.totalBorrows, data.baseAssetDecimals, 2)} borrowed
          </div>
        </div>
      </div>


      {/* Main Content */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
        {/* Market Details */}
          <div className="glass-effect">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '24px' }}>
              Market Details
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#9ca3af' }}>Core Contract:</span>
                <span style={{ fontFamily: 'monospace', fontSize: '0.875rem' }}>
                  {marketInfo.core.slice(0, 10)}...{marketInfo.core.slice(-8)}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#9ca3af' }}>Vault Contract:</span>
                <span style={{ fontFamily: 'monospace', fontSize: '0.875rem' }}>
                  {marketInfo.baseVault.slice(0, 10)}...{marketInfo.baseVault.slice(-8)}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#9ca3af' }}>Base Asset:</span>
                <span style={{ fontFamily: 'monospace', fontSize: '0.875rem' }}>
                  {data.baseAssetSymbol} ({baseAsset.slice(0, 10)}...{baseAsset.slice(-8)})
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#9ca3af' }}>Created:</span>
                <span>
                  {new Date(Number(marketInfo.createdAt) * 1000).toLocaleDateString()}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#9ca3af' }}>Status:</span>
                <span style={{ color: marketInfo.active ? '#10b981' : '#ef4444' }}>
                  {marketInfo.active ? '✓ Active' : '✗ Inactive'}
                </span>
              </div>
            </div>
          </div>

          {/* Your Position */}
          <div className="glass-effect">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '24px' }}>
              Your Position
            </h3>
            {address ? (
              <div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#9ca3af' }}>Wallet Balance:</span>
                    <span>
                      {formatBalance(data.userBalance, data.baseAssetDecimals, 2)} {data.baseAssetSymbol}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#9ca3af' }}>Supplied:</span>
                    <span style={{ color: '#10b981' }}>
                      {formatBalance(data.userAssets, data.baseAssetDecimals, 2)} {data.baseAssetSymbol}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#9ca3af' }}>Vault Shares:</span>
                    <span>
                      {formatBalance(data.userShares, data.baseAssetDecimals, 2)} shares
                    </span>
                  </div>
                  {data.userShares > 0n && (
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#9ca3af' }}>Share Price:</span>
                      <span>
                        {data.sharePrice.toFixed(6)} {data.baseAssetSymbol}/share
                      </span>
                    </div>
                  )}
                </div>

                {!supplyAction ? (
                  /* Quick Actions */
                  <div>
                    <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '12px', color: '#9ca3af', textTransform: 'uppercase' }}>
                      Quick Actions
                    </h4>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      <button
                        onClick={() => setSupplyAction('deposit')}
                        style={{
                          background: 'rgba(16, 185, 129, 0.1)',
                          border: '1px solid rgba(16, 185, 129, 0.3)',
                          borderRadius: '6px',
                          padding: '8px 12px',
                          color: '#10b981',
                          fontSize: '12px',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(16, 185, 129, 0.2)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(16, 185, 129, 0.1)'
                        }}
                      >
                        + Deposit
                      </button>
                      
                      <button
                        onClick={() => setSupplyAction('withdraw')}
                        disabled={data.userAssets === BigInt(0)}
                        style={{
                          background: data.userAssets === BigInt(0) 
                            ? 'rgba(75, 85, 99, 0.1)' 
                            : 'rgba(245, 158, 11, 0.1)',
                          border: `1px solid ${data.userAssets === BigInt(0) 
                            ? 'rgba(75, 85, 99, 0.3)' 
                            : 'rgba(245, 158, 11, 0.3)'}`,
                          borderRadius: '6px',
                          padding: '8px 12px',
                          color: data.userAssets === BigInt(0) ? '#9ca3af' : '#f59e0b',
                          fontSize: '12px',
                          fontWeight: 600,
                          cursor: data.userAssets === BigInt(0) ? 'not-allowed' : 'pointer',
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => {
                          if (data.userAssets !== BigInt(0)) {
                            e.currentTarget.style.background = 'rgba(245, 158, 11, 0.2)'
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (data.userAssets !== BigInt(0)) {
                            e.currentTarget.style.background = 'rgba(245, 158, 11, 0.1)'
                          }
                        }}
                      >
                        - Withdraw
                      </button>
                      
                      <button
                        onClick={() => setSupplyAction('redeem')}
                        disabled={data.userShares === BigInt(0)}
                        style={{
                          background: data.userShares === BigInt(0) 
                            ? 'rgba(75, 85, 99, 0.1)' 
                            : 'rgba(139, 92, 246, 0.1)',
                          border: `1px solid ${data.userShares === BigInt(0) 
                            ? 'rgba(75, 85, 99, 0.3)' 
                            : 'rgba(139, 92, 246, 0.3)'}`,
                          borderRadius: '6px',
                          padding: '8px 12px',
                          color: data.userShares === BigInt(0) ? '#9ca3af' : '#8b5cf6',
                          fontSize: '12px',
                          fontWeight: 600,
                          cursor: data.userShares === BigInt(0) ? 'not-allowed' : 'pointer',
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => {
                          if (data.userShares !== BigInt(0)) {
                            e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)'
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (data.userShares !== BigInt(0)) {
                            e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)'
                          }
                        }}
                      >
                        ↻ Redeem
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Action Form */
                  <div style={{ 
                    background: 'rgba(17, 24, 39, 0.5)', 
                    border: '1px solid rgba(75, 85, 99, 0.3)',
                    borderRadius: '8px',
                    padding: '16px',
                    marginTop: '16px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <h4 style={{ fontSize: '14px', fontWeight: 600, margin: 0, textTransform: 'capitalize' }}>
                        {supplyAction} {supplyAction === 'redeem' ? 'Shares' : data.baseAssetSymbol}
                      </h4>
                      <button
                        onClick={() => {
                          setSupplyAction(null)
                          setAmount('')
                          setActionError(null)
                        }}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#9ca3af',
                          cursor: 'pointer',
                          fontSize: '14px'
                        }}
                      >
                        ✕
                      </button>
                    </div>

                    {actionError && (
                      <div style={{ 
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                        borderRadius: '4px',
                        padding: '8px',
                        color: '#ef4444',
                        fontSize: '12px',
                        marginBottom: '12px'
                      }}>
                        {actionError}
                      </div>
                    )}

                    <div style={{ marginBottom: '12px' }}>
                      <input
                        type="number"
                        placeholder={supplyAction === 'redeem' 
                          ? 'Number of shares'
                          : `Amount of ${data.baseAssetSymbol}`
                        }
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        style={{
                          width: '100%',
                          background: 'rgba(17, 24, 39, 0.8)',
                          border: '1px solid rgba(75, 85, 99, 0.5)',
                          borderRadius: '4px',
                          padding: '8px 12px',
                          color: 'white',
                          fontSize: '12px'
                        }}
                        disabled={isActionLoading}
                      />
                      <div style={{ fontSize: '10px', color: '#9ca3af', marginTop: '4px' }}>
                        {supplyAction === 'deposit' && `Available: ${formatBalance(data.userBalance, data.baseAssetDecimals, 2)} ${data.baseAssetSymbol}`}
                        {supplyAction === 'withdraw' && `Available: ${formatBalance(data.userAssets, data.baseAssetDecimals, 2)} ${data.baseAssetSymbol}`}
                        {supplyAction === 'redeem' && `Available: ${formatBalance(data.userShares, data.baseAssetDecimals, 2)} shares`}
                      </div>
                    </div>

                    <button
                      onClick={executeSupplyAction}
                      disabled={!amount || isActionLoading}
                      style={{
                        width: '100%',
                        background: isActionLoading ? 'rgba(75, 85, 99, 0.5)' : 'rgba(14, 165, 233, 0.2)',
                        border: `1px solid ${isActionLoading ? 'rgba(75, 85, 99, 0.5)' : 'rgba(14, 165, 233, 0.3)'}`,
                        borderRadius: '6px',
                        padding: '8px 16px',
                        color: isActionLoading ? '#9ca3af' : '#0ea5e9',
                        fontSize: '12px',
                        fontWeight: 600,
                        cursor: isActionLoading ? 'not-allowed' : 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      {isActionLoading ? 'Processing...' : `Confirm ${supplyAction}`}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <p style={{ color: '#9ca3af', textAlign: 'center', padding: '32px 0' }}>
                Connect your wallet to view your position
              </p>
            )}
          </div>
        </div>

      {/* Market Statistics */}
      <div className="glass-effect" style={{ marginTop: '32px' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '24px' }}>
          Market Statistics
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '24px' 
        }}>
          <div>
            <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '4px' }}>
              Total Supplied
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>
              {formatBalance(data.totalAssets, data.baseAssetDecimals, 2)} {data.baseAssetSymbol}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '4px' }}>
              Total Borrowed
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>
              {formatBalance(data.totalBorrows, data.baseAssetDecimals, 2)} {data.baseAssetSymbol}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '4px' }}>
              Available Liquidity
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>
              {formatBalance(data.totalAssets - data.totalBorrows, data.baseAssetDecimals, 2)} {data.baseAssetSymbol}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '4px' }}>
              Total Shares
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>
              {formatBalance(data.totalSupply, data.baseAssetDecimals, 2)} shares
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}