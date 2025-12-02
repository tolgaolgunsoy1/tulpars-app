import { useState } from 'react';
import AmountSelector from './AmountSelector';
import FrequencySelector from './FrequencySelector';
import PaymentForm from './PaymentForm';
import SecurityBadge from './SecurityBadge';
import { HeartHandshake } from 'lucide-react';

function DonationForm() {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState('one-time');

  const handleAmountChange = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value) {
      setSelectedAmount(parseFloat(value) || 0);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1738440702720-2a57e6ce2b0b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxMnx8UHJvZmVzc2lvbmFsJTIwVHVya2lzaCUyMGNoYXJpdHklMjByZXByZXNlbnRhdGl2ZSUyMHNtaWxpbmclMjB3YXJtbHklMkMlMjBoZWxwaW5nJTIwcGVvcGxlJTJDJTIwY29tcGFzc2lvbmF0ZSUyMGFpZCUyMHdvcmtlciUyMGluJTIwbW9kZXJuJTIwb2ZmaWNlJTIwc2V0dGluZyUyMHByb2Zlc3Npb25hbHxlbnwwfDF8fHwxNzY0Njg1ODQyfDA&ixlib=rb-4.1.0&q=85"
                alt="Ahmet Yüksek ✪ on Unsplash - Professional charity representative"
                className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>

            {/* Right side - Title */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                <HeartHandshake className="w-5 h-5" />
                <span className="font-semibold">Tulpars Derneği</span>
              </div>
              <h1 className="text-5xl font-bold text-neutral-900 leading-tight">
                Hayata Dokunun,
                <span className="block text-primary mt-2">Umut Olun</span>
              </h1>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Bağışınızla ihtiyaç sahiplerine ulaşıyor, topluma değer katıyoruz. 
                Her katkı, bir hayatı değiştirebilir.
              </p>
              <SecurityBadge />
            </div>
          </div>
        </div>
      </div>

      {/* Donation Form Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="card">
          <div className="space-y-8">
            {/* Amount Selection */}
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Bağış Tutarı Seçin</h2>
              <AmountSelector 
                selectedAmount={selectedAmount}
                onAmountChange={handleAmountChange}
              />
              
              {/* Custom Amount Input */}
              <div className="mt-6">
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Farklı Tutar Girin
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder="Özel tutar giriniz"
                    className="input-field pr-12"
                    min="0"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 font-semibold">
                    TL
                  </span>
                </div>
              </div>
            </div>

            {/* Frequency Selection */}
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Bağış Sıklığı</h2>
              <FrequencySelector 
                frequency={frequency}
                onFrequencyChange={setFrequency}
              />
            </div>

            {/* Payment Form */}
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Ödeme Bilgileri</h2>
              <PaymentForm 
                amount={selectedAmount}
                frequency={frequency}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationForm;