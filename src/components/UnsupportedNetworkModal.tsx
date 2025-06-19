import React from 'react'
import { useAppKitNetwork } from '@reown/appkit/react'
import { networks } from '../config/appkit'

interface UnsupportedNetworkModalProps {
  isOpen: boolean
  onClose: () => void
}

const UnsupportedNetworkModal: React.FC<UnsupportedNetworkModalProps> = ({ isOpen, onClose }) => {
  const { switchNetwork } = useAppKitNetwork()

  if (!isOpen) return null

  const handleNetworkSwitch = async (network: typeof networks[0]) => {
    try {
      await switchNetwork(network)
      onClose()
    } catch (error) {
      console.error('Failed to switch network:', error)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-xl p-6 max-w-md w-full mx-4 border border-gray-800">
        <h2 className="text-xl font-bold text-white mb-4">Unsupported Network</h2>
        <p className="text-gray-300 mb-6">
          The network you're currently connected to is not supported. Please switch to one of the following networks:
        </p>
        
        <div className="space-y-2 mb-6">
          {networks.map((network) => (
            <button
              key={network.id}
              onClick={() => handleNetworkSwitch(network)}
              className="w-full p-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-left transition-colors duration-200"
            >
              <span className="text-white font-medium">{network.name}</span>
              {network.testnet && <span className="text-gray-400 text-sm ml-2">(Testnet)</span>}
            </button>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full p-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-colors duration-200"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default UnsupportedNetworkModal