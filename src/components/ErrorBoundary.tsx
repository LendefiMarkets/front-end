import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          minHeight: '100vh', 
          backgroundColor: '#121212', 
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '20px'
        }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '16px' }}>Something went wrong</h1>
          <p style={{ color: '#9ca3af', marginBottom: '24px' }}>
            There was an error loading the Web3 integration. Please refresh the page.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="btn btn-primary"
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;