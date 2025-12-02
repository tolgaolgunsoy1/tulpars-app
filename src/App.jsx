import { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import { AuthProvider, useAuth } from './contexts/AuthContext';

// Lazy load components for better performance
const SplashScreen = lazy(() => import('./components/SplashScreen'));
const Onboarding = lazy(() => import('./components/Onboarding'));
const Auth = lazy(() => import('./components/Auth'));
const Home = lazy(() => import('./components/Home'));
const Catalog = lazy(() => import('./components/Catalog'));
const Settings = lazy(() => import('./components/Settings'));
const Notifications = lazy(() => import('./components/Notifications'));
const Help = lazy(() => import('./components/Help'));
const Privacy = lazy(() => import('./components/Privacy'));
const UserProfile = lazy(() => import('./components/UserProfile'));
const DonationForm = lazy(() => import('./components/DonationForm'));
const News = lazy(() => import('./components/News'));
const Operations = lazy(() => import('./components/Operations'));
const SearchResults = lazy(() => import('./components/SearchResults'));
const EventDetails = lazy(() => import('./components/EventDetails'));
const CertificateDetails = lazy(() => import('./components/CertificateDetails'));
const EmergencyGuide = lazy(() => import('./components/EmergencyGuide'));
const PastTasks = lazy(() => import('./components/PastTasks'));
const Feedback = lazy(() => import('./components/Feedback'));

// Import Settings synchronously for debugging
import SettingsSync from './components/Settings';

// Protected Route Component
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

// App Router Component
function AppRouter() {
  const { isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication and redirect accordingly
    const checkAuth = () => {
      const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding') === 'true';

      if (!hasSeenOnboarding) {
        navigate('/onboarding');
      } else if (!isAuthenticated) {
        navigate('/login');
      } else {
        // Only navigate to home if we're currently on splash/onboarding
        const currentPath = window.location.pathname;
        if (currentPath === '/' || currentPath === '/onboarding') {
          navigate('/home');
        }
      }
      setIsLoading(false);
    };

    // Show splash screen for 3 seconds, then check auth
    const timer = setTimeout(checkAuth, 3000);
    return () => clearTimeout(timer);
  }, [navigate]); // Remove isAuthenticated dependency to prevent re-running on auth changes

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<SplashScreen />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<Auth />} />

        {/* Protected Routes */}
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/tasks" element={<ProtectedRoute><Catalog /></ProtectedRoute>} />
        <Route path="/events" element={<ProtectedRoute><Catalog /></ProtectedRoute>} />
        <Route path="/certificates" element={<ProtectedRoute><Catalog /></ProtectedRoute>} />
        <Route path="/news" element={<ProtectedRoute><News /></ProtectedRoute>} />
        <Route path="/operations" element={<ProtectedRoute><Operations /></ProtectedRoute>} />
        <Route path="/search" element={<ProtectedRoute><SearchResults /></ProtectedRoute>} />
        <Route path="/event/:id" element={<ProtectedRoute><EventDetails /></ProtectedRoute>} />
        <Route path="/certificate/:id" element={<ProtectedRoute><CertificateDetails /></ProtectedRoute>} />
        <Route path="/emergency-guide" element={<ProtectedRoute><EmergencyGuide /></ProtectedRoute>} />
        <Route path="/past-tasks" element={<ProtectedRoute><PastTasks /></ProtectedRoute>} />
        <Route path="/feedback" element={<ProtectedRoute><Feedback /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><SettingsSync /></ProtectedRoute>} />
        <Route path="/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
        <Route path="/help" element={<ProtectedRoute><Help /></ProtectedRoute>} />
        <Route path="/privacy" element={<ProtectedRoute><Privacy /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
        <Route path="/donation" element={<ProtectedRoute><DonationForm /></ProtectedRoute>} />

        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <AppRouter />
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App