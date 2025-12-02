/* eslint-env jest */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AuthProvider, useAuth } from '../AuthContext';

// Test component that uses auth context
function TestComponent() {
  const { user, isAuthenticated, login, logout } = useAuth();

  const handleLogin = async () => {
    await login('demo@tulpars.org', 'demo123');
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <div data-testid="auth-status">
        {isAuthenticated ? 'Authenticated' : 'Not Authenticated'}
      </div>
      {user && <div data-testid="user-email">{user.email}</div>}
      <button onClick={handleLogin} data-testid="login-btn">Login</button>
      <button onClick={handleLogout} data-testid="logout-btn">Logout</button>
    </div>
  );
}

describe('AuthContext', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  test('provides authentication context to children', () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    expect(screen.getByTestId('auth-status')).toHaveTextContent('Not Authenticated');
  });

  test('successful login updates authentication state', async () => {
    const user = userEvent.setup();

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    const loginButton = screen.getByTestId('login-btn');
    await user.click(loginButton);

    await waitFor(() => {
      expect(screen.getByTestId('auth-status')).toHaveTextContent('Authenticated');
      expect(screen.getByTestId('user-email')).toHaveTextContent('demo@tulpars.org');
    });
  });

  test('logout clears authentication state', async () => {
    const user = userEvent.setup();

    // First login
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    const loginButton = screen.getByTestId('login-btn');
    await user.click(loginButton);

    await waitFor(() => {
      expect(screen.getByTestId('auth-status')).toHaveTextContent('Authenticated');
    });

    // Then logout
    const logoutButton = screen.getByTestId('logout-btn');
    await user.click(logoutButton);

    await waitFor(() => {
      expect(screen.getByTestId('auth-status')).toHaveTextContent('Not Authenticated');
    });
  });

  test('persists authentication state across re-renders', async () => {
    const user = userEvent.setup();

    const { rerender } = render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    const loginButton = screen.getByTestId('login-btn');
    await user.click(loginButton);

    await waitFor(() => {
      expect(screen.getByTestId('auth-status')).toHaveTextContent('Authenticated');
    });

    // Re-render the component
    rerender(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    // Should still be authenticated
    expect(screen.getByTestId('auth-status')).toHaveTextContent('Authenticated');
  });
});