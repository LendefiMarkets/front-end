import { FiX, FiClock } from 'react-icons/fi'

interface PendingApprovalModalProps {
  isOpen: boolean
  onClose: () => void
}

function PendingApprovalModal({ isOpen, onClose }: PendingApprovalModalProps) {
  if (!isOpen) return null

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        backdropFilter: 'blur(4px)'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: '#1a1b23',
          borderRadius: '16px',
          padding: '32px',
          maxWidth: '480px',
          width: '90%',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            color: '#9ca3af',
            cursor: 'pointer',
            fontSize: '20px',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <FiX />
        </button>

        <div style={{ textAlign: 'center' }}>
          <div 
            style={{
              width: '64px',
              height: '64px',
              backgroundColor: 'rgba(251, 191, 36, 0.1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              border: '2px solid rgba(251, 191, 36, 0.3)'
            }}
          >
            <FiClock style={{ fontSize: '28px', color: '#fbbf24' }} />
          </div>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px' }}>
            Market Owner Registration Pending
          </h3>
          
          <p style={{ color: '#9ca3af', marginBottom: '24px', lineHeight: '1.6' }}>
            Your registration as a market owner is currently pending approval through the governance process. 
            Once approved, you'll be able to create and manage lending markets.
          </p>

          <div style={{
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '8px',
            padding: '16px',
            marginBottom: '24px'
          }}>
            <p style={{ fontSize: '0.875rem', color: '#60a5fa' }}>
              <strong>What happens next?</strong><br />
              The governance proposal to grant you market owner permissions will be voted on by token holders. 
              This typically takes 3-7 days.
            </p>
          </div>

          <button
            onClick={onClose}
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}

export default PendingApprovalModal