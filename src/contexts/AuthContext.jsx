import { createContext, useContext, useState, useEffect } from 'react';

// Auth Context
const AuthContext = createContext();

// Auth Provider Component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize auth state on app load
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Check for stored auth token (in production, use secure storage)
        const token = localStorage.getItem('authToken');
        const userData = localStorage.getItem('userData');

        if (token && userData) {
          // Validate token (in production, call API)
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        // Clear invalid data
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      setIsLoading(true);

      // Demo login - in production, call API
      if (email === 'demo@tulpars.org' && password === 'demo123') {
        const userData = {
          id: 1,
          email: email,
          name: 'Demo User',
          role: 'volunteer'
        };

        // Store auth data securely (in production, use httpOnly cookies or secure storage)
        localStorage.setItem('authToken', 'demo-token-123');
        localStorage.setItem('userData', JSON.stringify(userData));

        setUser(userData);
        return { success: true };
      } else {
        return { success: false, error: 'Geçersiz kullanıcı bilgileri' };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Giriş yapılırken hata oluştu' };
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      // Clear stored data
      localStorage.removeItem('authToken');
      localStorage.removeItem('userData');

      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Check if user is authenticated
  const isAuthenticated = !!user;

  const value = {
    user,
    isLoading,
    isAuthenticated,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export default AuthContext;