import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Global listener for stale Vite chunk load failures after new Vercel deployments
window.addEventListener('error', (event) => {
  const message = event?.message || '';
  const isChunkError = 
    message.includes('Failed to fetch dynamically imported module') ||
    message.includes('Importing a module script failed') ||
    message.includes('Unexpected token \'<\'') ||
    message.includes('ChunkLoadError');

  if (isChunkError) {
    const lastReload = sessionStorage.getItem('yatrika_chunk_reload');
    const now = Date.now();
    // Allow auto-reload once per 15 seconds to prevent infinite loops
    if (!lastReload || now - parseInt(lastReload, 10) > 15000) {
      sessionStorage.setItem('yatrika_chunk_reload', now.toString());
      window.location.reload();
    }
  }
});

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Yatrika Application Error Caught:", error, errorInfo);

    // Auto-recovery for chunk load errors inside ErrorBoundary
    const errorMessage = error?.message || '';
    const isChunkError = 
      error?.name === 'ChunkLoadError' ||
      errorMessage.includes('Failed to fetch dynamically imported module') ||
      errorMessage.includes('Importing a module script failed') ||
      errorMessage.includes('Unexpected token \'<\'');

    if (isChunkError) {
      const lastReload = sessionStorage.getItem('yatrika_chunk_reload');
      const now = Date.now();
      if (!lastReload || now - parseInt(lastReload, 10) > 15000) {
        sessionStorage.setItem('yatrika_chunk_reload', now.toString());
        window.location.reload();
      }
    }
  }

  handleClearCacheAndReload = () => {
    sessionStorage.clear();
    if ('caches' in window) {
      caches.keys().then((names) => {
        names.forEach((name) => caches.delete(name));
      });
    }
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '40px 20px',
          textAlign: 'center',
          fontFamily: 'Inter, sans-serif',
          backgroundColor: '#070b14',
          color: '#fff',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justify: 'center'
        }}>
          <div style={{
            maxWidth: '500px',
            width: '100%',
            backgroundColor: '#0f172a',
            border: '1px solid #334155',
            borderRadius: '24px',
            padding: '32px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)'
          }}>
            <h2 style={{ fontSize: '22px', color: '#e8734a', marginBottom: '12px', fontWeight: 'bold' }}>
              Yatrika Application Recovery
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '24px', lineHeight: '1.6' }}>
              A new deployment or asset update was detected. Click below to refresh your session and load the latest version.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => window.location.reload()}
                style={{
                  padding: '12px 24px',
                  borderRadius: '12px',
                  backgroundColor: '#e8734a',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '13px'
                }}
              >
                Reload Application
              </button>
              <button
                onClick={this.handleClearCacheAndReload}
                style={{
                  padding: '12px 24px',
                  borderRadius: '12px',
                  backgroundColor: '#1e293b',
                  color: '#f59e0b',
                  border: '1px solid #475569',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '13px'
                }}
              >
                Clear Cache & Refresh
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
