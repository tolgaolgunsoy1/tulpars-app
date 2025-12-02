import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeartHandshake } from 'lucide-react';

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if user has seen onboarding
      const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
      if (hasSeenOnboarding) {
        navigate('/login');
      } else {
        navigate('/onboarding');
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/90 to-secondary flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Logo and Icon */}
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full backdrop-blur-sm">
            <HeartHandshake className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white">Tulpars</h1>
          <p className="text-xl text-white/80">Derneği</p>
        </div>

        {/* Loading Animation */}
        <div className="space-y-4">
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
          <p className="text-white/60 text-sm">Yükleniyor...</p>
        </div>

        {/* Tagline */}
        <div className="max-w-xs mx-auto">
          <p className="text-white/80 text-sm leading-relaxed">
            Hayata dokunun, umut olun
          </p>
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;