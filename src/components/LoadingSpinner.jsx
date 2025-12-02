import { Loader2 } from 'lucide-react';

function LoadingSpinner({ message = "Yükleniyor..." }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
        </div>
        <p className="text-neutral-600 font-medium">{message}</p>
      </div>
    </div>
  );
}

export default LoadingSpinner;