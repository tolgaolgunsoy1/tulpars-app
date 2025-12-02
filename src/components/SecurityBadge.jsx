import { Lock, Shield } from 'lucide-react';

function SecurityBadge() {
  return (
    <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-full px-5 py-3 shadow-sm">
      <div className="flex items-center gap-2">
        <Lock className="w-4 h-4 text-green-600" />
        <span className="text-sm font-semibold text-neutral-700">SSL Güvenli</span>
      </div>
      <div className="w-px h-4 bg-neutral-300"></div>
      <div className="flex items-center gap-2">
        <Shield className="w-4 h-4 text-secondary" />
        <span className="text-sm font-semibold text-neutral-700">256-bit Şifreleme</span>
      </div>
    </div>
  );
}

export default SecurityBadge;