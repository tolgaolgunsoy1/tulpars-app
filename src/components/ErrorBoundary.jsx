import { Component } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  }

  handleGoHome = () => {
    window.location.href = '/home';
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 flex items-center justify-center p-4">
          <div className="max-w-md w-full">
            <div className="card text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-neutral-900 mb-2">Bir Hata Oluştu</h2>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Uygulamada beklenmedik bir hata meydana geldi. Lütfen sayfayı yenileyin veya ana sayfaya dönün.
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={this.handleRetry}
                  className="w-full bg-primary text-white py-3 px-6 rounded-xl font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-5 h-5" />
                  Tekrar Dene
                </button>

                <button
                  onClick={this.handleGoHome}
                  className="w-full bg-neutral-100 text-neutral-700 py-3 px-6 rounded-xl font-semibold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
                >
                  <Home className="w-5 h-5" />
                  Ana Sayfa
                </button>
              </div>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-6 text-left">
                  <summary className="cursor-pointer text-sm text-neutral-500 hover:text-neutral-700">
                    Hata Detayları (Geliştirici)
                  </summary>
                  <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-800 font-mono">
                    <div className="mb-2">
                      <strong>Hata:</strong> {this.state.error.toString()}
                    </div>
                    <div>
                      <strong>Stack Trace:</strong>
                      <pre className="mt-1 whitespace-pre-wrap">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  </div>
                </details>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;