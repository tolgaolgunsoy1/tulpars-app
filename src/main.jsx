import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Capacitor back button handling - only in mobile environment
// This runs after the app is rendered to avoid build-time issues
setTimeout(() => {
  if (typeof window !== 'undefined' && window.Capacitor) {
    // Dynamic import to avoid build-time resolution issues
    import('@capacitor/app').then(({ App: CapacitorApp }) => {
      CapacitorApp.addListener('backButton', ({ canGoBack }) => {
        if (!canGoBack) {
          // If we can't go back in the web view, minimize the app instead of closing it
          CapacitorApp.minimizeApp();
        } else {
          // Navigate back in the browser history
          window.history.back();
        }
      }).catch(error => {
        console.warn('Capacitor back button setup failed:', error);
      });
    }).catch(error => {
      console.warn('Failed to import Capacitor App:', error);
    });
  }
}, 100);
