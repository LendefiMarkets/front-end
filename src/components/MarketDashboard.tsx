import React, { useState } from 'react'
import { useAppKitAccount, useAppKitProvider } from '@reown/appkit/react'
import { ethers } from 'ethers'
import { useMarketDashboard, formatTokenAmount, formatBalance, formatPercentage, formatSharePrice } from '../hooks/useMarketDashboard'
import { MARKET_VAULT_ABI, ERC20_ABI, ASSETS_ABI } from '../config/contracts'

interface MarketDashboardProps {
  baseAsset: string
  marketOwner?: string
  onBack?: () => void
}

export default function MarketDashboard({ baseAsset, marketOwner, onBack }: MarketDashboardProps) {
  const { address } = useAppKitAccount()
  const { walletProvider } = useAppKitProvider('eip155')
  const { data, isLoading, error, refresh } = useMarketDashboard(baseAsset, marketOwner)
  
  // Tab state
  const [activeTab, setActiveTab] = useState<'overview' | 'assets'>('overview')
  
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

      {/* Tab Navigation */}
      {isOwner && (
        <div style={{ 
          display: 'flex', 
          borderBottom: '1px solid rgba(75, 85, 99, 0.3)', 
          marginBottom: '32px' 
        }}>
          <button
            onClick={() => setActiveTab('overview')}
            style={{
              padding: '12px 24px',
              background: 'none',
              border: 'none',
              color: activeTab === 'overview' ? '#0ea5e9' : '#9ca3af',
              borderBottom: activeTab === 'overview' ? '2px solid #0ea5e9' : '2px solid transparent',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: activeTab === 'overview' ? 600 : 400,
              transition: 'all 0.2s'
            }}
          >
            Market Overview
          </button>
          <button
            onClick={() => setActiveTab('assets')}
            style={{
              padding: '12px 24px',
              background: 'none',
              border: 'none',
              color: activeTab === 'assets' ? '#0ea5e9' : '#9ca3af',
              borderBottom: activeTab === 'assets' ? '2px solid #0ea5e9' : '2px solid transparent',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: activeTab === 'assets' ? 600 : 400,
              transition: 'all 0.2s'
            }}
          >
            Asset Management
          </button>
        </div>
      )}

      {/* Content based on active tab */}
      {activeTab === 'overview' ? (
        <>
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
                <span style={{ color: '#9ca3af' }}>Assets Module:</span>
                <span style={{ fontFamily: 'monospace', fontSize: '0.875rem' }}>
                  {marketInfo.assetsModule.slice(0, 10)}...{marketInfo.assetsModule.slice(-8)}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#9ca3af' }}>PoR Feed:</span>
                <span style={{ fontFamily: 'monospace', fontSize: '0.875rem' }}>
                  {marketInfo.porFeed.slice(0, 10)}...{marketInfo.porFeed.slice(-8)}
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
                        {formatSharePrice(data.sharePrice, data.baseAssetDecimals)} {data.baseAssetSymbol}/share
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
        </>
      ) : (
        /* Asset Management Tab */
        <AssetManagementTab 
          assetsModuleAddress={data.marketInfo!.assetsModule}
          marketOwner={marketOwner}
          baseAssetSymbol={data.baseAssetSymbol}
        />
      )}
    </div>
  )
}

// Asset Management Tab Component
interface AssetManagementTabProps {
  assetsModuleAddress: string
  marketOwner?: string
  baseAssetSymbol: string
}

function AssetManagementTab({ assetsModuleAddress, marketOwner, baseAssetSymbol }: AssetManagementTabProps) {
  const { address } = useAppKitAccount()
  
  const [activeAssetTab, setActiveAssetTab] = useState<'collateral' | 'price' | 'testing'>('collateral')
  const [showAddAssetModal, setShowAddAssetModal] = useState(false)

  const isOwner = address?.toLowerCase() === marketOwner?.toLowerCase()

  if (!isOwner) {
    return (
      <div className="glass-effect" style={{ textAlign: 'center', padding: '48px' }}>
        <h3 style={{ color: '#f59e0b', marginBottom: '16px' }}>Access Denied</h3>
        <p style={{ color: '#9ca3af' }}>
          Only the market owner can manage assets for this market.
        </p>
      </div>
    )
  }

  return (
    <div>
      {/* Asset Management Header */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '32px' 
      }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '8px' }}>
            Asset Management
          </h2>
          <p style={{ color: '#9ca3af', margin: 0 }}>
            Manage collateral assets and price feeds for your {baseAssetSymbol} market
          </p>
          <div style={{ 
            fontSize: '0.875rem', 
            color: '#9ca3af', 
            fontFamily: 'monospace',
            marginTop: '8px'
          }}>
            Assets Module: {assetsModuleAddress.slice(0, 10)}...{assetsModuleAddress.slice(-8)}
          </div>
        </div>
        <button
          onClick={() => setShowAddAssetModal(true)}
          style={{
            padding: '12px 24px',
            backgroundColor: '#0ea5e9',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s',
            boxShadow: '0 4px 12px rgba(14, 165, 233, 0.3)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#0284c7'
            e.currentTarget.style.transform = 'translateY(-1px)'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#0ea5e9'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          + Add Asset
        </button>
      </div>

      {/* Asset Management Tabs */}
      <div style={{ 
        display: 'flex', 
        borderBottom: '1px solid rgba(75, 85, 99, 0.3)', 
        marginBottom: '24px' 
      }}>
        <button
          onClick={() => setActiveAssetTab('collateral')}
          style={{
            padding: '8px 16px',
            background: 'none',
            border: 'none',
            color: activeAssetTab === 'collateral' ? '#10b981' : '#9ca3af',
            borderBottom: activeAssetTab === 'collateral' ? '2px solid #10b981' : '2px solid transparent',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: activeAssetTab === 'collateral' ? 600 : 400,
            transition: 'all 0.2s'
          }}
        >
          Collateral Assets
        </button>
        <button
          onClick={() => setActiveAssetTab('price')}
          style={{
            padding: '8px 16px',
            background: 'none',
            border: 'none',
            color: activeAssetTab === 'price' ? '#10b981' : '#9ca3af',
            borderBottom: activeAssetTab === 'price' ? '2px solid #10b981' : '2px solid transparent',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: activeAssetTab === 'price' ? 600 : 400,
            transition: 'all 0.2s'
          }}
        >
          Price Feeds
        </button>
        <button
          onClick={() => setActiveAssetTab('testing')}
          style={{
            padding: '8px 16px',
            background: 'none',
            border: 'none',
            color: activeAssetTab === 'testing' ? '#10b981' : '#9ca3af',
            borderBottom: activeAssetTab === 'testing' ? '2px solid #10b981' : '2px solid transparent',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: activeAssetTab === 'testing' ? 600 : 400,
            transition: 'all 0.2s'
          }}
        >
          Testing
        </button>
      </div>

      {/* Asset Management Content */}
      {activeAssetTab === 'collateral' ? (
        <CollateralManagement 
          assetsModuleAddress={assetsModuleAddress}
          showAddAssetModal={showAddAssetModal}
          setShowAddAssetModal={setShowAddAssetModal}
        />
      ) : activeAssetTab === 'price' ? (
        <PriceFeedManagement 
          assetsModuleAddress={assetsModuleAddress}
        />
      ) : (
        <AssetTesting 
          assetsModuleAddress={assetsModuleAddress}
        />
      )}
    </div>
  )
}

// Collateral Management Component
interface CollateralManagementProps {
  assetsModuleAddress: string
  showAddAssetModal: boolean
  setShowAddAssetModal: (show: boolean) => void
}

function CollateralManagement({ assetsModuleAddress, showAddAssetModal, setShowAddAssetModal }: CollateralManagementProps) {
  const { walletProvider } = useAppKitProvider('eip155')
  const [listedAssets, setListedAssets] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Form states
  const [newAssetAddress, setNewAssetAddress] = useState('')
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)
  const [assetConfig, setAssetConfig] = useState({
    active: 1,
    decimals: 18, // Will be auto-fetched from token contract
    borrowThreshold: 800, // 80.00% in basis points (800 = 80%)
    liquidationThreshold: 850, // 85.00% in basis points (850 = 85%)
    maxSupplyThreshold: '1000000', // Max supply cap (in token units)
    isolationDebtCap: '0', // Isolation debt cap (0 = not isolated)
    assetMinimumOracles: 1, // Minimum number of oracles required
    porFeed: '', // Proof of Reserve feed address
    primaryOracleType: 0, // 0 = CHAINLINK, 1 = UNISWAP_V3_TWAP
    tier: 0, // 0 = STABLE, 1 = CROSS_A, 2 = CROSS_B, 3 = ISOLATED
    // Chainlink configuration
    chainlinkOracle: '',
    chainlinkActive: true,
    // Uniswap configuration  
    uniswapPool: '',
    twapPeriod: 3600, // 1 hour TWAP
    uniswapActive: false
  })

  // Load existing assets
  React.useEffect(() => {
    loadAssets()
  }, [assetsModuleAddress])

  const resetForm = () => {
    setNewAssetAddress('')
    setAssetConfig({
      active: 1,
      decimals: 18,
      borrowThreshold: 800,
      liquidationThreshold: 850,
      maxSupplyThreshold: '1000000',
      isolationDebtCap: '0',
      assetMinimumOracles: 1,
      porFeed: '',
      primaryOracleType: 0,
      tier: 0,
      chainlinkOracle: '',
      chainlinkActive: true,
      uniswapPool: '',
      twapPeriod: 3600,
      uniswapActive: false
    })
  }

  const closeModal = () => {
    setShowAddAssetModal(false)
    resetForm()
  }

  const copyToClipboard = async (address: string, label: string) => {
    try {
      await navigator.clipboard.writeText(address)
      setCopiedAddress(address)
      setTimeout(() => setCopiedAddress(null), 2000) // Clear after 2 seconds
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const loadAssets = async () => {
    if (!walletProvider) return

    try {
      setIsLoading(true)
      const provider = new ethers.BrowserProvider(walletProvider as any)
      const assetsContract = new ethers.Contract(assetsModuleAddress, ASSETS_ABI, provider)
      
      const assetAddresses = await assetsContract.getListedAssets()
      
      const assetsWithInfo = await Promise.all(
        assetAddresses.map(async (address: string) => {
          try {
            const [assetInfo, tokenContract] = await Promise.all([
              assetsContract.getAssetInfo(address),
              new ethers.Contract(address, ERC20_ABI, provider)
            ])
            
            const [symbol, price, oracleCount] = await Promise.all([
              tokenContract.symbol(),
              assetsContract.getAssetPrice(address).catch((err) => {
                console.error(`Failed to get price for ${address}:`, err)
                
                // Parse common error types
                let errorMessage = 'Price unavailable'
                if (err.message) {
                  if (err.message.includes('AssetNotListed')) {
                    errorMessage = 'Asset not listed'
                  } else if (err.message.includes('CircuitBreakerActive')) {
                    errorMessage = 'Circuit breaker active'
                  } else if (err.message.includes('NotEnoughValidOracles')) {
                    errorMessage = 'Not enough valid oracles'
                  } else if (err.message.includes('execution reverted')) {
                    errorMessage = 'Oracle error'
                  } else {
                    errorMessage = err.message.split('(')[0] // Take first part before parentheses
                  }
                }
                
                return { error: errorMessage }
              }),
              assetsContract.getOracleCount(address)
            ])

            console.log('Loading asset info for', symbol, '- assetInfo.active:', assetInfo.active, 'type:', typeof assetInfo.active)
            console.log('Oracle status - Chainlink active:', assetInfo.chainlinkConfig.active, 'type:', typeof assetInfo.chainlinkConfig.active)
            console.log('Oracle status - Uniswap active:', assetInfo.poolConfig.active, 'type:', typeof assetInfo.poolConfig.active)
            return {
              address,
              symbol,
              active: Number(assetInfo.active) === 1,
              tier: assetInfo.tier,
              borrowThreshold: assetInfo.borrowThreshold,
              liquidationThreshold: assetInfo.liquidationThreshold,
              price: price?.error ? { error: price.error } : Number(price) / 1e6, // Convert from 6 decimals (LendefiAssets normalizes to 1e6)
              oracleCount: Number(oracleCount),
              porFeed: assetInfo.porFeed,
              chainlinkActive: Number(assetInfo.chainlinkConfig.active) === 1,
              chainlinkOracle: assetInfo.chainlinkConfig.oracleUSD,
              uniswapActive: Number(assetInfo.poolConfig.active) === 1,
              uniswapPool: assetInfo.poolConfig.pool
            }
          } catch (err) {
            console.error('Failed to load asset info:', err)
            return null
          }
        })
      )

      setListedAssets(assetsWithInfo.filter(Boolean))
    } catch (err) {
      console.error('Failed to load assets:', err)
      setError('Failed to load assets')
    } finally {
      setIsLoading(false)
    }
  }

  const getTierName = (tier: number) => {
    const tiers = ['STABLE', 'CROSS_A', 'CROSS_B', 'ISOLATED']
    return tiers[tier] || 'UNKNOWN'
  }

  const updateAssetConfig = async () => {
    if (!walletProvider || !newAssetAddress) return

    try {
      setIsLoading(true)
      const provider = new ethers.BrowserProvider(walletProvider as any)
      const signer = await provider.getSigner()
      const assetsContract = new ethers.Contract(assetsModuleAddress, ASSETS_ABI, signer)
      
      // Get token decimals from contract
      const tokenContract = new ethers.Contract(newAssetAddress, ERC20_ABI, provider)
      const decimals = await tokenContract.decimals()

      // Create complete Asset struct matching IASSETS.sol exactly
      console.log('Submitting assetConfig.active:', assetConfig.active)
      const config = [
        assetConfig.active, // uint8 active
        decimals, // uint8 decimals (auto-fetched from token)
        assetConfig.borrowThreshold, // uint16 borrowThreshold
        assetConfig.liquidationThreshold, // uint16 liquidationThreshold
        ethers.parseUnits(assetConfig.maxSupplyThreshold, decimals), // uint256 maxSupplyThreshold
        ethers.parseUnits(assetConfig.isolationDebtCap, decimals), // uint256 isolationDebtCap
        assetConfig.assetMinimumOracles, // uint8 assetMinimumOracles
        assetConfig.porFeed || ethers.ZeroAddress, // address porFeed
        assetConfig.primaryOracleType, // OracleType primaryOracleType (enum)
        assetConfig.tier, // CollateralTier tier (enum)
        [ // ChainlinkOracleConfig chainlinkConfig
          assetConfig.chainlinkOracle || ethers.ZeroAddress, // address oracleUSD
          assetConfig.chainlinkActive ? 1 : 0 // uint8 active
        ],
        [ // UniswapPoolConfig poolConfig
          assetConfig.uniswapPool || ethers.ZeroAddress, // address pool
          assetConfig.twapPeriod, // uint32 twapPeriod
          assetConfig.uniswapActive ? 1 : 0 // uint8 active
        ]
      ]

      const tx = await assetsContract.updateAssetConfig(newAssetAddress, config)
      await tx.wait()
      
      // Close modal and reload assets
      closeModal()
      await loadAssets()
    } catch (err: any) {
      console.error('Failed to update asset config:', err)
      setError(err.message || 'Failed to update asset config')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>

      {/* Assets List */}
      <div className="glass-effect">
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '16px' }}>
          Listed Collateral Assets
        </h3>
        
        {isLoading ? (
          <div style={{ color: '#9ca3af', textAlign: 'center', padding: '32px 0' }}>
            Loading assets...
          </div>
        ) : error ? (
          <div style={{ color: '#ef4444', textAlign: 'center', padding: '32px 0' }}>
            {error}
          </div>
        ) : listedAssets.length === 0 ? (
          <div style={{ color: '#9ca3af', textAlign: 'center', padding: '32px 0' }}>
            No assets configured yet
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {listedAssets.map((asset) => (
              <div key={asset.address} style={{
                background: 'rgba(17, 24, 39, 0.5)',
                border: '1px solid rgba(75, 85, 99, 0.3)',
                borderRadius: '8px',
                padding: '16px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontWeight: 600 }}>{asset.symbol}</span>
                    <span style={{
                      fontSize: '0.75rem',
                      padding: '2px 8px',
                      borderRadius: '12px',
                      background: asset.active ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                      color: asset.active ? '#10b981' : '#ef4444'
                    }}>
                      {asset.active ? 'Active' : 'Inactive'}
                    </span>
                    <span style={{
                      fontSize: '0.75rem',
                      padding: '2px 8px',
                      borderRadius: '12px',
                      background: 'rgba(139, 92, 246, 0.2)',
                      color: '#8b5cf6'
                    }}>
                      {getTierName(asset.tier)}
                    </span>
                    
                    {/* Asset Address */}
                    <span style={{ 
                      fontSize: '0.75rem',
                      fontFamily: 'monospace',
                      color: '#9ca3af',
                      cursor: 'pointer'
                    }}
                    onClick={() => copyToClipboard(asset.address, 'Asset')}
                    >
                      {`${asset.address.slice(0, 10)}...${asset.address.slice(-8)}`}
                    </span>
                    <button
                      onClick={() => copyToClipboard(asset.address, 'Asset')}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: copiedAddress === asset.address ? '#10b981' : '#9ca3af',
                        cursor: 'pointer',
                        fontSize: '0.75rem',
                        padding: '0'
                      }}
                    >
                      📋
                    </button>
                  </div>
                  <span style={{ 
                    fontSize: '0.875rem', 
                    color: asset.price?.error ? '#ef4444' : '#9ca3af' 
                  }}>
                    {asset.price?.error ? `❌ ${asset.price.error}` : `$${asset.price.toFixed(2)}`}
                  </span>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', fontSize: '0.75rem', color: '#9ca3af' }}>
                  <div>
                    Borrow Threshold: {(Number(asset.borrowThreshold) / 10).toFixed(0)}%
                  </div>
                  <div>
                    Liquidation Threshold: {(Number(asset.liquidationThreshold) / 10).toFixed(0)}%
                  </div>
                  <div>
                    Oracles: {asset.oracleCount}
                  </div>
                </div>

                {/* Oracle Configuration */}
                <div style={{ marginTop: '8px', fontSize: '0.75rem' }}>
                  <div style={{ color: '#9ca3af', marginBottom: '4px', fontWeight: 600 }}>Oracle Feeds:</div>
                  
                  {/* Chainlink Oracle */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    marginBottom: '2px',
                    padding: '2px 4px',
                    borderRadius: '3px'
                  }}>
                    <span style={{ 
                      color: asset.chainlinkActive ? '#10b981' : '#ef4444',
                      fontSize: '0.7rem'
                    }}>
                      {asset.chainlinkActive ? '✓' : '✗'}
                    </span>
                    <span style={{ color: '#0ea5e9', fontWeight: 600 }}>Chainlink:</span>
                    <span style={{ 
                      fontFamily: 'monospace',
                      color: '#9ca3af',
                      cursor: 'pointer'
                    }}
                    onClick={() => copyToClipboard(asset.chainlinkOracle || 'Not configured', 'Chainlink Oracle')}
                    >
                      {asset.chainlinkOracle ? `${asset.chainlinkOracle.slice(0, 10)}...${asset.chainlinkOracle.slice(-8)}` : 'Not configured'}
                    </span>
                    {asset.chainlinkOracle && (
                      <button
                        onClick={() => copyToClipboard(asset.chainlinkOracle, 'Chainlink Oracle')}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: copiedAddress === asset.chainlinkOracle ? '#10b981' : '#9ca3af',
                          cursor: 'pointer',
                          fontSize: '0.75rem',
                          padding: '0'
                        }}
                      >
                        📋
                      </button>
                    )}
                  </div>
                  
                  {/* Uniswap Oracle */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    padding: '2px 4px',
                    borderRadius: '3px'
                  }}>
                    <span style={{ 
                      color: asset.uniswapActive ? '#10b981' : '#ef4444',
                      fontSize: '0.7rem'
                    }}>
                      {asset.uniswapActive ? '✓' : '✗'}
                    </span>
                    <span style={{ color: '#10b981', fontWeight: 600 }}>Uniswap V3:</span>
                    <span style={{ 
                      fontFamily: 'monospace',
                      color: '#9ca3af',
                      cursor: 'pointer'
                    }}
                    onClick={() => copyToClipboard(asset.uniswapPool || 'Not configured', 'Uniswap Pool')}
                    >
                      {asset.uniswapPool ? `${asset.uniswapPool.slice(0, 10)}...${asset.uniswapPool.slice(-8)}` : 'Not configured'}
                    </span>
                    {asset.uniswapPool && (
                      <button
                        onClick={() => copyToClipboard(asset.uniswapPool, 'Uniswap Pool')}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: copiedAddress === asset.uniswapPool ? '#10b981' : '#9ca3af',
                          cursor: 'pointer',
                          fontSize: '0.75rem',
                          padding: '0'
                        }}
                      >
                        📋
                      </button>
                    )}
                  </div>
                </div>
                
                <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '8px', fontFamily: 'monospace' }}>
                  {asset.porFeed && asset.porFeed !== '0x0000000000000000000000000000000000000000' && (
                    <div 
                      style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        cursor: 'pointer',
                        padding: '2px 4px',
                        borderRadius: '3px',
                        transition: 'background-color 0.2s'
                      }}
                      onClick={() => copyToClipboard(asset.porFeed, 'PoR Feed')}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(75, 85, 99, 0.3)'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      title="Click to copy PoR Feed address"
                    >
                      PoR Feed: {asset.porFeed.slice(0, 10)}...{asset.porFeed.slice(-8)}
                      <span style={{ fontSize: '10px', color: copiedAddress === asset.porFeed ? '#10b981' : '#9ca3af' }}>
                        {copiedAddress === asset.porFeed ? '✓' : '📋'}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Asset Modal */}
      {showAddAssetModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#1f2937',
            borderRadius: '12px',
            padding: '24px',
            maxWidth: '600px',
            width: '90%',
            maxHeight: '80vh',
            overflowY: 'auto',
            border: '1px solid rgba(75, 85, 99, 0.5)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: 0 }}>
                Add New Asset
              </h3>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <a 
                  href="/market-owner-guide" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    fontSize: '0.75rem', 
                    color: '#3b82f6', 
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '4px 8px',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    borderRadius: '4px',
                    background: 'rgba(59, 130, 246, 0.1)'
                  }}
                >
                  📚 Guide
                </a>
                <button
                  onClick={closeModal}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#9ca3af',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    padding: '4px'
                  }}
                >
                  ×
                </button>
              </div>
            </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Asset Address */}
          <div>
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.75rem', fontWeight: 600 }}>
              Asset Address
            </label>
            <input
              type="text"
              placeholder="0x..."
              value={newAssetAddress}
              onChange={(e) => setNewAssetAddress(e.target.value)}
              style={{
                width: '100%',
                padding: '6px 8px',
                backgroundColor: 'rgba(31, 41, 55, 0.5)',
                border: '1px solid rgba(75, 85, 99, 0.5)',
                borderRadius: '4px',
                color: 'white',
                fontSize: '12px'
              }}
            />
          </div>

          {/* Basic Configuration */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.75rem', fontWeight: 600 }}>
                Active
              </label>
              <select
                value={assetConfig.active}
                onChange={(e) => setAssetConfig({...assetConfig, active: Number(e.target.value)})}
                style={{
                  width: '100%',
                  padding: '6px 8px',
                  backgroundColor: 'rgba(31, 41, 55, 0.5)',
                  border: '1px solid rgba(75, 85, 99, 0.5)',
                  borderRadius: '4px',
                  color: 'white',
                  fontSize: '12px'
                }}
              >
                <option value={1}>Active</option>
                <option value={0}>Inactive</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.75rem', fontWeight: 600 }}>
                Tier
              </label>
              <select
                value={assetConfig.tier}
                onChange={(e) => setAssetConfig({...assetConfig, tier: Number(e.target.value)})}
                style={{
                  width: '100%',
                  padding: '6px 8px',
                  backgroundColor: 'rgba(31, 41, 55, 0.5)',
                  border: '1px solid rgba(75, 85, 99, 0.5)',
                  borderRadius: '4px',
                  color: 'white',
                  fontSize: '12px'
                }}
              >
                <option value={0}>STABLE</option>
                <option value={1}>CROSS_A</option>
                <option value={2}>CROSS_B</option>
                <option value={3}>ISOLATED</option>
              </select>
            </div>
          </div>

          {/* Threshold Configuration */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.75rem', fontWeight: 600 }}>
                Borrow LTV (basis points)
              </label>
              <input
                type="number"
                value={assetConfig.borrowThreshold}
                onChange={(e) => setAssetConfig({...assetConfig, borrowThreshold: Number(e.target.value)})}
                placeholder="950 = 95%"
                style={{
                  width: '100%',
                  padding: '6px 8px',
                  backgroundColor: 'rgba(31, 41, 55, 0.5)',
                  border: '1px solid rgba(75, 85, 99, 0.5)',
                  borderRadius: '4px',
                  color: 'white',
                  fontSize: '12px'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.75rem', fontWeight: 600 }}>
                Liq. LTV (basis points)
              </label>
              <input
                type="number"
                value={assetConfig.liquidationThreshold}
                onChange={(e) => setAssetConfig({...assetConfig, liquidationThreshold: Number(e.target.value)})}
                placeholder="980 = 98%"
                style={{
                  width: '100%',
                  padding: '6px 8px',
                  backgroundColor: 'rgba(31, 41, 55, 0.5)',
                  border: '1px solid rgba(75, 85, 99, 0.5)',
                  borderRadius: '4px',
                  color: 'white',
                  fontSize: '12px'
                }}
              />
            </div>
          </div>

          {/* Supply Limits */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.75rem', fontWeight: 600 }}>
                Max Supply Cap
              </label>
              <input
                type="text"
                value={assetConfig.maxSupplyThreshold}
                onChange={(e) => setAssetConfig({...assetConfig, maxSupplyThreshold: e.target.value})}
                placeholder="1000000"
                style={{
                  width: '100%',
                  padding: '6px 8px',
                  backgroundColor: 'rgba(31, 41, 55, 0.5)',
                  border: '1px solid rgba(75, 85, 99, 0.5)',
                  borderRadius: '4px',
                  color: 'white',
                  fontSize: '12px'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.75rem', fontWeight: 600 }}>
                Isolation Debt Cap
              </label>
              <input
                type="text"
                value={assetConfig.isolationDebtCap}
                onChange={(e) => setAssetConfig({...assetConfig, isolationDebtCap: e.target.value})}
                placeholder="0 = not isolated"
                style={{
                  width: '100%',
                  padding: '6px 8px',
                  backgroundColor: 'rgba(31, 41, 55, 0.5)',
                  border: '1px solid rgba(75, 85, 99, 0.5)',
                  borderRadius: '4px',
                  color: 'white',
                  fontSize: '12px'
                }}
              />
            </div>
          </div>

          {/* Oracle Configuration */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.75rem', fontWeight: 600 }}>
                Min Oracles
              </label>
              <input
                type="number"
                value={assetConfig.assetMinimumOracles}
                onChange={(e) => setAssetConfig({...assetConfig, assetMinimumOracles: Number(e.target.value)})}
                min="1"
                max="2"
                style={{
                  width: '100%',
                  padding: '6px 8px',
                  backgroundColor: 'rgba(31, 41, 55, 0.5)',
                  border: '1px solid rgba(75, 85, 99, 0.5)',
                  borderRadius: '4px',
                  color: 'white',
                  fontSize: '12px'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.75rem', fontWeight: 600 }}>
                Primary Oracle
              </label>
              <select
                value={assetConfig.primaryOracleType}
                onChange={(e) => setAssetConfig({...assetConfig, primaryOracleType: Number(e.target.value)})}
                style={{
                  width: '100%',
                  padding: '6px 8px',
                  backgroundColor: 'rgba(31, 41, 55, 0.5)',
                  border: '1px solid rgba(75, 85, 99, 0.5)',
                  borderRadius: '4px',
                  color: 'white',
                  fontSize: '12px'
                }}
              >
                <option value={0}>Chainlink</option>
                <option value={1}>Uniswap V3</option>
              </select>
            </div>
          </div>

          {/* PoR Feed */}
          <div>
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.75rem', fontWeight: 600 }}>
              Proof of Reserve Feed
            </label>
            <input
              type="text"
              value={assetConfig.porFeed}
              onChange={(e) => setAssetConfig({...assetConfig, porFeed: e.target.value})}
              placeholder="0x... (optional)"
              style={{
                width: '100%',
                padding: '6px 8px',
                backgroundColor: 'rgba(31, 41, 55, 0.5)',
                border: '1px solid rgba(75, 85, 99, 0.5)',
                borderRadius: '4px',
                color: 'white',
                fontSize: '12px'
              }}
            />
          </div>

          {/* Chainlink Oracle Config */}
          <div style={{ border: '1px solid rgba(75, 85, 99, 0.3)', borderRadius: '4px', padding: '8px' }}>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 600, marginBottom: '8px', color: '#0ea5e9' }}>
              Chainlink Oracle Config
            </h4>
            <div>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.7rem', fontWeight: 600 }}>
                Oracle Address
              </label>
              <input
                type="text"
                value={assetConfig.chainlinkOracle}
                onChange={(e) => setAssetConfig({...assetConfig, chainlinkOracle: e.target.value})}
                placeholder="0x..."
                style={{
                  width: '100%',
                  padding: '4px 6px',
                  backgroundColor: 'rgba(31, 41, 55, 0.5)',
                  border: '1px solid rgba(75, 85, 99, 0.5)',
                  borderRadius: '4px',
                  color: 'white',
                  fontSize: '11px'
                }}
              />
            </div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', marginTop: '6px' }}>
              <input
                type="checkbox"
                checked={assetConfig.chainlinkActive}
                onChange={(e) => setAssetConfig({...assetConfig, chainlinkActive: e.target.checked})}
              />
              Active
            </label>
          </div>

          {/* Uniswap Oracle Config */}
          <div style={{ border: '1px solid rgba(75, 85, 99, 0.3)', borderRadius: '4px', padding: '8px' }}>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 600, marginBottom: '8px', color: '#10b981' }}>
              Uniswap V3 Oracle Config
            </h4>
            <div style={{ marginBottom: '6px' }}>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.7rem', fontWeight: 600 }}>
                Pool Address
              </label>
              <input
                type="text"
                value={assetConfig.uniswapPool}
                onChange={(e) => setAssetConfig({...assetConfig, uniswapPool: e.target.value})}
                placeholder="0x..."
                style={{
                  width: '100%',
                  padding: '4px 6px',
                  backgroundColor: 'rgba(31, 41, 55, 0.5)',
                  border: '1px solid rgba(75, 85, 99, 0.5)',
                  borderRadius: '4px',
                  color: 'white',
                  fontSize: '11px'
                }}
              />
            </div>
            <div style={{ marginBottom: '6px' }}>
              <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.7rem', fontWeight: 600 }}>
                TWAP Period (seconds)
              </label>
              <input
                type="number"
                value={assetConfig.twapPeriod}
                onChange={(e) => setAssetConfig({...assetConfig, twapPeriod: Number(e.target.value)})}
                placeholder="3600"
                style={{
                  width: '100%',
                  padding: '4px 6px',
                  backgroundColor: 'rgba(31, 41, 55, 0.5)',
                  border: '1px solid rgba(75, 85, 99, 0.5)',
                  borderRadius: '4px',
                  color: 'white',
                  fontSize: '11px'
                }}
              />
            </div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px' }}>
              <input
                type="checkbox"
                checked={assetConfig.uniswapActive}
                onChange={(e) => setAssetConfig({...assetConfig, uniswapActive: e.target.checked})}
              />
              Active
            </label>
          </div>

          <button
            onClick={updateAssetConfig}
            disabled={!newAssetAddress || isLoading}
            style={{
              width: '100%',
              padding: '8px 16px',
              background: isLoading ? 'rgba(75, 85, 99, 0.5)' : 'rgba(16, 185, 129, 0.2)',
              border: `1px solid ${isLoading ? 'rgba(75, 85, 99, 0.5)' : 'rgba(16, 185, 129, 0.3)'}`,
              borderRadius: '6px',
              color: isLoading ? '#9ca3af' : '#10b981',
              fontSize: '12px',
              fontWeight: 600,
              cursor: isLoading ? 'not-allowed' : 'pointer'
            }}
          >
            {isLoading ? 'Processing...' : 'Add Asset'}
          </button>
        </div>
          </div>
        </div>
      )}
    </>
  )
}

// Price Feed Management Component
interface PriceFeedManagementProps {
  assetsModuleAddress: string
}

function PriceFeedManagement({ assetsModuleAddress }: PriceFeedManagementProps) {
  const { walletProvider } = useAppKitProvider('eip155')
  const [oracleData, setOracleData] = useState<any[]>([])
  const [tierRates, setTierRates] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Oracle update forms
  const [chainlinkForm, setChainlinkForm] = useState({
    asset: '',
    oracle: '',
    active: true
  })
  
  const [uniswapForm, setUniswapForm] = useState({
    asset: '',
    pool: '',
    twapPeriod: 3600,
    active: true
  })

  const [tierForm, setTierForm] = useState({
    tier: 0,
    jumpRate: '',
    liquidationFee: ''
  })


  React.useEffect(() => {
    loadOracleData()
  }, [assetsModuleAddress])

  const loadOracleData = async () => {
    if (!walletProvider) return

    try {
      setIsLoading(true)
      const provider = new ethers.BrowserProvider(walletProvider as any)
      const assetsContract = new ethers.Contract(assetsModuleAddress, ASSETS_ABI, provider)
      
      const [assetAddresses, rates] = await Promise.all([
        assetsContract.getListedAssets(),
        assetsContract.getTierRates()
      ])

      console.log('Raw tier rates from contract:', rates)
      console.log('Jump rates:', rates[0].map((rate: bigint) => rate.toString()))
      console.log('Liquidation fees:', rates[1].map((fee: bigint) => fee.toString()))
      
      setTierRates({
        jumpRates: rates[0].map((rate: bigint) => Number(rate)),
        liquidationFees: rates[1].map((fee: bigint) => Number(fee))
      })
      
      const oracleInfo = await Promise.all(
        assetAddresses.map(async (address: string) => {
          try {
            const [assetInfo, tokenContract] = await Promise.all([
              assetsContract.getAssetInfo(address),
              new ethers.Contract(address, ERC20_ABI, provider)
            ])
            
            const [symbol, price, oracleCount, circuitBroken] = await Promise.all([
              tokenContract.symbol(),
              assetsContract.getAssetPrice(address).catch(() => BigInt(0)),
              assetsContract.getOracleCount(address),
              assetsContract.circuitBroken(address)
            ])

            return {
              address,
              symbol,
              price: Number(price) / 1e6, // Convert from 6 decimals (LendefiAssets normalizes to 1e6)
              oracleCount: Number(oracleCount),
              circuitBroken,
              chainlinkOracle: assetInfo.chainlinkConfig.oracleUSD,
              chainlinkActive: assetInfo.chainlinkConfig.active === 1,
              uniswapPool: assetInfo.poolConfig.pool,
              uniswapActive: assetInfo.poolConfig.active === 1,
              twapPeriod: assetInfo.poolConfig.twapPeriod,
              primaryOracleType: assetInfo.primaryOracleType
            }
          } catch (err) {
            console.error('Failed to load oracle info:', err)
            return null
          }
        })
      )

      setOracleData(oracleInfo.filter(Boolean))
    } catch (err) {
      console.error('Failed to load oracle data:', err)
      setError('Failed to load oracle data')
    } finally {
      setIsLoading(false)
    }
  }

  const updateChainlinkOracle = async () => {
    if (!walletProvider || !chainlinkForm.asset || !chainlinkForm.oracle) return

    try {
      setIsLoading(true)
      const provider = new ethers.BrowserProvider(walletProvider as any)
      const signer = await provider.getSigner()
      const assetsContract = new ethers.Contract(assetsModuleAddress, ASSETS_ABI, signer)
      
      const tx = await assetsContract.updateChainlinkOracle(
        chainlinkForm.asset,
        chainlinkForm.oracle,
        chainlinkForm.active ? 1 : 0
      )
      await tx.wait()
      
      await loadOracleData()
      setChainlinkForm({ asset: '', oracle: '', active: true })
    } catch (err: any) {
      console.error('Failed to update Chainlink oracle:', err)
      setError(err.message || 'Failed to update Chainlink oracle')
    } finally {
      setIsLoading(false)
    }
  }

  const updateUniswapOracle = async () => {
    if (!walletProvider || !uniswapForm.asset || !uniswapForm.pool) return

    try {
      setIsLoading(true)
      const provider = new ethers.BrowserProvider(walletProvider as any)
      const signer = await provider.getSigner()
      const assetsContract = new ethers.Contract(assetsModuleAddress, ASSETS_ABI, signer)
      
      const tx = await assetsContract.updateUniswapOracle(
        uniswapForm.asset,
        uniswapForm.pool,
        uniswapForm.twapPeriod,
        uniswapForm.active ? 1 : 0
      )
      await tx.wait()
      
      await loadOracleData()
      setUniswapForm({ asset: '', pool: '', twapPeriod: 3600, active: true })
    } catch (err: any) {
      console.error('Failed to update Uniswap oracle:', err)
      setError(err.message || 'Failed to update Uniswap oracle')
    } finally {
      setIsLoading(false)
    }
  }

  const updateTierConfig = async () => {
    if (!walletProvider || !tierForm.jumpRate || !tierForm.liquidationFee) return

    try {
      setIsLoading(true)
      const provider = new ethers.BrowserProvider(walletProvider as any)
      const signer = await provider.getSigner()
      const assetsContract = new ethers.Contract(assetsModuleAddress, ASSETS_ABI, signer)
      
      const tx = await assetsContract.updateTierConfig(
        tierForm.tier,
        ethers.parseUnits(tierForm.jumpRate, 0), // Should be in basis points * 100
        ethers.parseUnits(tierForm.liquidationFee, 0) // Should be in basis points * 100
      )
      await tx.wait()
      
      await loadOracleData()
      setTierForm({ tier: 0, jumpRate: '', liquidationFee: '' })
    } catch (err: any) {
      console.error('Failed to update tier config:', err)
      setError(err.message || 'Failed to update tier config')
    } finally {
      setIsLoading(false)
    }
  }

  const getTierName = (tier: number) => {
    const tiers = ['STABLE', 'CROSS_A', 'CROSS_B', 'ISOLATED']
    return tiers[tier] || 'UNKNOWN'
  }

  const getOracleTypeName = (type: number) => {
    return type === 0 ? 'Chainlink' : 'Uniswap V3'
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
      {/* Oracle Status */}
      <div className="glass-effect">
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '16px' }}>
          Oracle Status
        </h3>
        
        {isLoading ? (
          <div style={{ color: '#9ca3af', textAlign: 'center', padding: '32px 0' }}>
            Loading oracle data...
          </div>
        ) : error ? (
          <div style={{ color: '#ef4444', textAlign: 'center', padding: '32px 0' }}>
            {error}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {oracleData.map((oracle) => (
              <div key={oracle.address} style={{
                background: 'rgba(17, 24, 39, 0.5)',
                border: '1px solid rgba(75, 85, 99, 0.3)',
                borderRadius: '8px',
                padding: '12px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontWeight: 600 }}>{oracle.symbol}</span>
                    <span style={{
                      fontSize: '0.75rem',
                      padding: '2px 6px',
                      borderRadius: '8px',
                      background: oracle.circuitBroken ? 'rgba(239, 68, 68, 0.2)' : 'rgba(16, 185, 129, 0.2)',
                      color: oracle.circuitBroken ? '#ef4444' : '#10b981'
                    }}>
                      {oracle.circuitBroken ? 'Circuit Broken' : 'Active'}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
                    ${oracle.price.toFixed(2)}
                  </span>
                </div>
                
                <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginBottom: '8px' }}>
                  Primary: {getOracleTypeName(oracle.primaryOracleType)} • Oracles: {oracle.oracleCount}
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '0.75rem' }}>
                  <div>
                    <div style={{ color: '#9ca3af' }}>Chainlink:</div>
                    <div style={{ color: oracle.chainlinkActive ? '#10b981' : '#ef4444' }}>
                      {oracle.chainlinkActive ? '✓ Active' : '✗ Inactive'}
                    </div>
                  </div>
                  <div>
                    <div style={{ color: '#9ca3af' }}>Uniswap V3:</div>
                    <div style={{ color: oracle.uniswapActive ? '#10b981' : '#ef4444' }}>
                      {oracle.uniswapActive ? `✓ ${oracle.twapPeriod}s TWAP` : '✗ Inactive'}
                    </div>
                  </div>
                </div>
                
                <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '8px', fontFamily: 'monospace' }}>
                  {oracle.address.slice(0, 10)}...{oracle.address.slice(-8)}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tier Rates */}
        {tierRates && (
          <div style={{ marginTop: '24px' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '12px' }}>
              Tier Configuration
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', fontSize: '0.75rem' }}>
              {tierRates.jumpRates.map((rate: number, index: number) => (
                <div key={index} style={{
                  background: 'rgba(17, 24, 39, 0.5)',
                  border: '1px solid rgba(75, 85, 99, 0.3)',
                  borderRadius: '4px',
                  padding: '8px'
                }}>
                  <div style={{ fontWeight: 600 }}>{getTierName(index)}</div>
                  <div style={{ color: '#9ca3af' }}>
                    Jump Rate: {(rate / 10000).toFixed(2)}%
                  </div>
                  <div style={{ color: '#9ca3af' }}>
                    Liq Fee: {(tierRates.liquidationFees[index] / 10000).toFixed(2)}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Management Forms */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Chainlink Oracle Update */}
        <div className="glass-effect" style={{ padding: '16px' }}>
          <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '12px' }}>
            Update Chainlink Oracle
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <input
              type="text"
              placeholder="Asset address"
              value={chainlinkForm.asset}
              onChange={(e) => setChainlinkForm({...chainlinkForm, asset: e.target.value})}
              style={{
                padding: '6px 8px',
                backgroundColor: 'rgba(31, 41, 55, 0.5)',
                border: '1px solid rgba(75, 85, 99, 0.5)',
                borderRadius: '4px',
                color: 'white',
                fontSize: '12px'
              }}
            />
            <input
              type="text"
              placeholder="Oracle address"
              value={chainlinkForm.oracle}
              onChange={(e) => setChainlinkForm({...chainlinkForm, oracle: e.target.value})}
              style={{
                padding: '6px 8px',
                backgroundColor: 'rgba(31, 41, 55, 0.5)',
                border: '1px solid rgba(75, 85, 99, 0.5)',
                borderRadius: '4px',
                color: 'white',
                fontSize: '12px'
              }}
            />
            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}>
              <input
                type="checkbox"
                checked={chainlinkForm.active}
                onChange={(e) => setChainlinkForm({...chainlinkForm, active: e.target.checked})}
              />
              Active
            </label>
            <button
              onClick={updateChainlinkOracle}
              disabled={!chainlinkForm.asset || !chainlinkForm.oracle || isLoading}
              style={{
                padding: '6px 12px',
                background: 'rgba(14, 165, 233, 0.2)',
                border: '1px solid rgba(14, 165, 233, 0.3)',
                borderRadius: '4px',
                color: '#0ea5e9',
                fontSize: '12px',
                cursor: 'pointer'
              }}
            >
              Update
            </button>
          </div>
        </div>

        {/* Uniswap Oracle Update */}
        <div className="glass-effect" style={{ padding: '16px' }}>
          <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '12px' }}>
            Update Uniswap Oracle
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <input
              type="text"
              placeholder="Asset address"
              value={uniswapForm.asset}
              onChange={(e) => setUniswapForm({...uniswapForm, asset: e.target.value})}
              style={{
                padding: '6px 8px',
                backgroundColor: 'rgba(31, 41, 55, 0.5)',
                border: '1px solid rgba(75, 85, 99, 0.5)',
                borderRadius: '4px',
                color: 'white',
                fontSize: '12px'
              }}
            />
            <input
              type="text"
              placeholder="Pool address"
              value={uniswapForm.pool}
              onChange={(e) => setUniswapForm({...uniswapForm, pool: e.target.value})}
              style={{
                padding: '6px 8px',
                backgroundColor: 'rgba(31, 41, 55, 0.5)',
                border: '1px solid rgba(75, 85, 99, 0.5)',
                borderRadius: '4px',
                color: 'white',
                fontSize: '12px'
              }}
            />
            <input
              type="number"
              placeholder="TWAP Period (seconds)"
              value={uniswapForm.twapPeriod}
              onChange={(e) => setUniswapForm({...uniswapForm, twapPeriod: Number(e.target.value)})}
              style={{
                padding: '6px 8px',
                backgroundColor: 'rgba(31, 41, 55, 0.5)',
                border: '1px solid rgba(75, 85, 99, 0.5)',
                borderRadius: '4px',
                color: 'white',
                fontSize: '12px'
              }}
            />
            <button
              onClick={updateUniswapOracle}
              disabled={!uniswapForm.asset || !uniswapForm.pool || isLoading}
              style={{
                padding: '6px 12px',
                background: 'rgba(16, 185, 129, 0.2)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '4px',
                color: '#10b981',
                fontSize: '12px',
                cursor: 'pointer'
              }}
            >
              Update
            </button>
          </div>
        </div>

        {/* Tier Config Update */}
        <div className="glass-effect" style={{ padding: '16px' }}>
          <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '12px' }}>
            Update Tier Config
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <select
              value={tierForm.tier}
              onChange={(e) => setTierForm({...tierForm, tier: Number(e.target.value)})}
              style={{
                padding: '6px 8px',
                backgroundColor: 'rgba(31, 41, 55, 0.5)',
                border: '1px solid rgba(75, 85, 99, 0.5)',
                borderRadius: '4px',
                color: 'white',
                fontSize: '12px'
              }}
            >
              <option value={0}>STABLE</option>
              <option value={1}>CROSS_A</option>
              <option value={2}>CROSS_B</option>
              <option value={3}>ISOLATED</option>
            </select>
            <input
              type="number"
              placeholder="Jump Rate (bps * 100)"
              value={tierForm.jumpRate}
              onChange={(e) => setTierForm({...tierForm, jumpRate: e.target.value})}
              style={{
                padding: '6px 8px',
                backgroundColor: 'rgba(31, 41, 55, 0.5)',
                border: '1px solid rgba(75, 85, 99, 0.5)',
                borderRadius: '4px',
                color: 'white',
                fontSize: '12px'
              }}
            />
            <input
              type="number"
              placeholder="Liquidation Fee (bps * 100)"
              value={tierForm.liquidationFee}
              onChange={(e) => setTierForm({...tierForm, liquidationFee: e.target.value})}
              style={{
                padding: '6px 8px',
                backgroundColor: 'rgba(31, 41, 55, 0.5)',
                border: '1px solid rgba(75, 85, 99, 0.5)',
                borderRadius: '4px',
                color: 'white',
                fontSize: '12px'
              }}
            />
            <button
              onClick={updateTierConfig}
              disabled={!tierForm.jumpRate || !tierForm.liquidationFee || isLoading}
              style={{
                padding: '6px 12px',
                background: 'rgba(139, 92, 246, 0.2)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                borderRadius: '4px',
                color: '#8b5cf6',
                fontSize: '12px',
                cursor: 'pointer'
              }}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Asset Testing Component
interface AssetTestingProps {
  assetsModuleAddress: string
}

function AssetTesting({ assetsModuleAddress }: AssetTestingProps) {
  const { walletProvider } = useAppKitProvider('eip155')
  const [testAddress, setTestAddress] = useState('')
  const [testResults, setTestResults] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const testAssetFunctions = async () => {
    if (!walletProvider || !testAddress) return

    try {
      setIsLoading(true)
      setError(null)
      setTestResults(null)

      const provider = new ethers.BrowserProvider(walletProvider as any)
      const assetsContract = new ethers.Contract(assetsModuleAddress, ASSETS_ABI, provider)
      
      // Test all the critical functions
      const [
        assetPrice,
        assetInfo,
        oracleCount,
        isValid,
        circuitBroken,
        listedAssets
      ] = await Promise.all([
        assetsContract.getAssetPrice(testAddress).catch((e: any) => ({ error: e.message })),
        assetsContract.getAssetInfo(testAddress).catch((e: any) => ({ error: e.message })),
        assetsContract.getOracleCount(testAddress).catch((e: any) => ({ error: e.message })),
        assetsContract.isAssetValid(testAddress).catch((e: any) => ({ error: e.message })),
        assetsContract.circuitBroken(testAddress).catch((e: any) => ({ error: e.message })),
        assetsContract.getListedAssets().catch((e: any) => ({ error: e.message }))
      ])

      // Get token info if possible
      let tokenInfo = null
      try {
        const tokenContract = new ethers.Contract(testAddress, ERC20_ABI, provider)
        const [symbol, decimals] = await Promise.all([
          tokenContract.symbol(),
          tokenContract.decimals()
        ])
        tokenInfo = { symbol, decimals: Number(decimals) }
      } catch (err) {
        tokenInfo = { error: 'Not a valid ERC-20 token' }
      }

      setTestResults({
        address: testAddress,
        tokenInfo,
        assetPrice,
        assetInfo,
        oracleCount,
        isValid,
        circuitBroken,
        isListed: Array.isArray(listedAssets) ? listedAssets.includes(testAddress) : false
      })
    } catch (err: any) {
      console.error('Failed to test asset:', err)
      setError(err.message || 'Failed to test asset')
    } finally {
      setIsLoading(false)
    }
  }

  const formatPrice = (price: any) => {
    if (price?.error) return { value: 'Error', color: '#ef4444', details: price.error }
    try {
      const priceValue = Number(price) / 1e6 // Convert from 6 decimals (LendefiAssets normalizes to 1e6)
      return { value: `$${priceValue.toFixed(4)}`, color: '#10b981', details: `Raw: ${price.toString()}` }
    } catch {
      return { value: 'Invalid', color: '#ef4444', details: 'Could not parse price' }
    }
  }

  const formatBoolean = (value: any) => {
    if (value?.error) return { value: 'Error', color: '#ef4444', details: value.error }
    return value === true ? 
      { value: '✓ True', color: '#10b981', details: 'Function returned true' } : 
      { value: '✗ False', color: '#ef4444', details: 'Function returned false' }
  }

  const formatNumber = (value: any) => {
    if (value?.error) return { value: 'Error', color: '#ef4444', details: value.error }
    return { value: value.toString(), color: '#0ea5e9', details: `Raw value: ${value}` }
  }

  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '8px' }}>
          🧪 Asset Configuration Testing
        </h3>
        <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '16px' }}>
          Test your asset configurations to ensure they're working correctly. 
          Enter any asset address to check its price, configuration, and oracle status.
        </p>
      </div>

      {/* Test Input */}
      <div className="glass-effect" style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-end' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '0.875rem', fontWeight: 600 }}>
              Asset Contract Address
            </label>
            <input
              type="text"
              placeholder="0x..."
              value={testAddress}
              onChange={(e) => setTestAddress(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                backgroundColor: 'rgba(31, 41, 55, 0.5)',
                border: '1px solid rgba(75, 85, 99, 0.5)',
                borderRadius: '6px',
                color: 'white',
                fontSize: '14px'
              }}
            />
          </div>
          <button
            onClick={testAssetFunctions}
            disabled={!testAddress || isLoading}
            style={{
              padding: '8px 16px',
              background: isLoading ? 'rgba(75, 85, 99, 0.5)' : 'rgba(16, 185, 129, 0.2)',
              border: `1px solid ${isLoading ? 'rgba(75, 85, 99, 0.5)' : 'rgba(16, 185, 129, 0.3)'}`,
              borderRadius: '6px',
              color: isLoading ? '#9ca3af' : '#10b981',
              fontSize: '14px',
              fontWeight: 600,
              cursor: isLoading ? 'not-allowed' : 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            {isLoading ? 'Testing...' : 'Test Asset'}
          </button>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div style={{ 
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '24px',
          color: '#ef4444'
        }}>
          {error}
        </div>
      )}

      {/* Test Results */}
      {testResults && (
        <div className="glass-effect">
          <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '16px' }}>
            Test Results for {testResults.address.slice(0, 10)}...{testResults.address.slice(-8)}
          </h4>

          {/* Function Results */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '0.875rem' }}>
            
            {/* getAssetPrice */}
            <div style={{ padding: '12px', backgroundColor: 'rgba(17, 24, 39, 0.5)', borderRadius: '6px' }}>
              <div style={{ fontWeight: 600, marginBottom: '4px' }}>getAssetPrice()</div>
              <div style={{ color: formatPrice(testResults.assetPrice).color }}>
                {formatPrice(testResults.assetPrice).value}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '4px' }}>
                {formatPrice(testResults.assetPrice).details}
              </div>
            </div>

            {/* getOracleCount */}
            <div style={{ padding: '12px', backgroundColor: 'rgba(17, 24, 39, 0.5)', borderRadius: '6px' }}>
              <div style={{ fontWeight: 600, marginBottom: '4px' }}>getOracleCount()</div>
              <div style={{ color: formatNumber(testResults.oracleCount).color }}>
                {formatNumber(testResults.oracleCount).value}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '4px' }}>
                Active oracles for this asset
              </div>
            </div>

            {/* isAssetValid */}
            <div style={{ padding: '12px', backgroundColor: 'rgba(17, 24, 39, 0.5)', borderRadius: '6px' }}>
              <div style={{ fontWeight: 600, marginBottom: '4px' }}>isAssetValid()</div>
              <div style={{ color: formatBoolean(testResults.isValid).color }}>
                {formatBoolean(testResults.isValid).value}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '4px' }}>
                Is asset configured and active
              </div>
            </div>

            {/* circuitBroken */}
            <div style={{ padding: '12px', backgroundColor: 'rgba(17, 24, 39, 0.5)', borderRadius: '6px' }}>
              <div style={{ fontWeight: 600, marginBottom: '4px' }}>circuitBroken()</div>
              <div style={{ color: formatBoolean(testResults.circuitBroken).color }}>
                {formatBoolean(testResults.circuitBroken).value}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '4px' }}>
                Circuit breaker status
              </div>
            </div>

            {/* isListed */}
            <div style={{ padding: '12px', backgroundColor: 'rgba(17, 24, 39, 0.5)', borderRadius: '6px' }}>
              <div style={{ fontWeight: 600, marginBottom: '4px' }}>Listed Asset</div>
              <div style={{ color: testResults.isListed ? '#10b981' : '#ef4444' }}>
                {testResults.isListed ? '✓ Listed' : '✗ Not Listed'}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '4px' }}>
                Present in getListedAssets()
              </div>
            </div>
          </div>

          {/* Asset Configuration Details */}
          {testResults.assetInfo && !testResults.assetInfo.error && (
            <div style={{ marginTop: '16px', padding: '12px', backgroundColor: 'rgba(17, 24, 39, 0.5)', borderRadius: '6px' }}>
              <h5 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '8px', color: '#3b82f6' }}>
                getAssetInfo() - Configuration Details
              </h5>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px', fontSize: '0.75rem', color: '#d1d5db' }}>
                <div>Active: {testResults.assetInfo.active === 1 ? '✓ Yes' : '✗ No'}</div>
                <div>Decimals: {testResults.assetInfo.decimals}</div>
                <div>Borrow LTV: {(testResults.assetInfo.borrowThreshold / 100).toFixed(1)}%</div>
                <div>Liquidation LTV: {(testResults.assetInfo.liquidationThreshold / 100).toFixed(1)}%</div>
                <div>Tier: {['STABLE', 'CROSS_A', 'CROSS_B', 'ISOLATED'][testResults.assetInfo.tier] || 'Unknown'}</div>
                <div>Primary Oracle: {testResults.assetInfo.primaryOracleType === 0 ? 'Chainlink' : 'Uniswap'}</div>
                <div>Chainlink Active: {testResults.assetInfo.chainlinkConfig.active === 1 ? '✓' : '✗'}</div>
                <div>Uniswap Active: {testResults.assetInfo.poolConfig.active === 1 ? '✓' : '✗'}</div>
              </div>
            </div>
          )}

          {testResults.assetInfo?.error && (
            <div style={{ marginTop: '16px', padding: '12px', backgroundColor: 'rgba(239, 68, 68, 0.1)', borderRadius: '6px', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
              <div style={{ color: '#ef4444', fontSize: '0.875rem', fontWeight: 600 }}>getAssetInfo() Error:</div>
              <div style={{ color: '#ef4444', fontSize: '0.75rem' }}>{testResults.assetInfo.error}</div>
            </div>
          )}
        </div>
      )}

      {/* Instructions */}
      <div style={{ marginTop: '24px', padding: '16px', backgroundColor: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '8px' }}>
        <h5 style={{ color: '#60a5fa', marginBottom: '8px', fontSize: '0.875rem', fontWeight: 600 }}>
          💡 How to Use This Testing Tool
        </h5>
        <ul style={{ fontSize: '0.75rem', color: '#d1d5db', paddingLeft: '16px' }}>
          <li>Enter any ERC-20 token address to test its configuration</li>
          <li>Check that <code>getAssetPrice()</code> returns a valid price (should be &gt; 0)</li>
          <li>Verify <code>isAssetValid()</code> returns true for assets you want to use</li>
          <li>Ensure <code>getOracleCount()</code> meets your minimum requirements</li>
          <li>Test both your base asset and all intended collateral assets</li>
        </ul>
      </div>
    </div>
  )
}