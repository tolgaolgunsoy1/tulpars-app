import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeartHandshake, Users, Award, ChevronRight, CheckCircle } from 'lucide-react';

function Onboarding() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      icon: HeartHandshake,
      title: 'Hoş Geldiniz',
      description: 'Tulpars Derneği ailesine katılın ve topluma değer katın.',
      color: 'text-primary'
    },
    {
      icon: Users,
      title: 'Toplumsal Etki',
      description: 'Gönüllü çalışmalarınızla binlerce insanın hayatına dokunun.',
      color: 'text-secondary'
    },
    {
      icon: Award,
      title: 'Sertifikalarınız',
      description: 'Katıldığınız eğitim ve aktivitelerden sertifika kazanın.',
      color: 'text-primary'
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleFinish();
    }
  };

  const handleFinish = () => {
    localStorage.setItem('hasSeenOnboarding', 'true');
    navigate('/login');
  };

  const currentStepData = steps[currentStep];
  const Icon = currentStepData.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>

      <div className="flex flex-col h-screen relative">
        {/* Enhanced Progress Indicator */}
        <div className="flex justify-center pt-12 pb-8">
          <div className="flex space-x-3">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`relative transition-all duration-300 ${
                  index <= currentStep
                    ? 'w-8 h-3 bg-primary rounded-full'
                    : 'w-3 h-3 bg-neutral-300 rounded-full'
                }`}
              >
                {index <= currentStep && (
                  <div className="absolute inset-0 bg-primary rounded-full animate-pulse"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          {/* Animated Icon Container */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl animate-pulse"></div>
            <div className={`relative inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br ${currentStepData.color} shadow-2xl transform transition-all duration-500 hover:scale-105`}>
              <Icon className="w-16 h-16 text-white drop-shadow-lg" />
            </div>
          </div>

          {/* Animated Text */}
          <div className="space-y-4 max-w-sm">
            <h1 className="text-4xl font-bold text-neutral-900 leading-tight animate-fade-in">
              {currentStepData.title}
            </h1>

            <p className="text-xl text-neutral-600 leading-relaxed animate-fade-in animation-delay-200">
              {currentStepData.description}
            </p>
          </div>

          {/* Feature Highlights for Current Step */}
          <div className="mt-8 space-y-3 max-w-xs">
            {currentStep === 0 && (
              <div className="flex items-center gap-3 text-left bg-white/50 backdrop-blur-sm rounded-lg p-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm text-neutral-700">Kolay bağış sistemi</span>
              </div>
            )}
            {currentStep === 1 && (
              <div className="flex items-center gap-3 text-left bg-white/50 backdrop-blur-sm rounded-lg p-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-sm text-neutral-700">Toplumsal etki oluşturma</span>
              </div>
            )}
            {currentStep === 2 && (
              <div className="flex items-center gap-3 text-left bg-white/50 backdrop-blur-sm rounded-lg p-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm text-neutral-700">Sertifika kazanma fırsatı</span>
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Navigation */}
        <div className="p-6 pb-8">
          <div className="max-w-sm mx-auto">
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={handleFinish}
                className="text-neutral-500 hover:text-neutral-700 font-medium px-4 py-2 rounded-lg hover:bg-neutral-100 transition-colors"
              >
                Atla
              </button>

              <div className="text-sm text-neutral-500">
                {currentStep + 1} / {steps.length}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 group"
            >
              {currentStep === steps.length - 1 ? (
                <>
                  <CheckCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="text-lg">Hemen Başla</span>
                </>
              ) : (
                <>
                  <span className="text-lg">Devam Et</span>
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;