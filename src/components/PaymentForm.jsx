import { useState } from 'react';
import { CreditCard, Calendar, Lock } from 'lucide-react';

/**
 * Payment Form Component
 *
 * PRODUCTION INTEGRATION NOTES:
 * - Replace demo logic with real payment gateway
 * - Options: Stripe, Iyzico, PayPal, PayU
 * - Implement PCI DSS compliance
 * - Add payment validation and error handling
 * - Store payment tokens securely (never store full card details)
 * - Implement 3D Secure for additional security
 */

function PaymentForm({ amount, frequency }) {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    email: '',
    phone: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // In production, this would integrate with payment gateway like:
      // - Stripe: stripe.confirmPayment()
      // - Iyzico: iyzico.createPayment()
      // - PayPal: paypal.Buttons()

      alert(`✅ Ödeme Başarılı!\n\nBağış Tutarı: ${amount} TL\nSıklık: ${frequency === 'one-time' ? 'Tek Seferlik' : 'Aylık Düzenli'}\n\nTeşekkür ederiz! Bağışınız Tulpars Derneği'ne ulaşmıştır.`);

      // In production: redirect to success page or update donation history
    } catch (error) {
      alert('❌ Ödeme işlemi başarısız. Lütfen tekrar deneyin.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Card Information */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-neutral-700 mb-2">
            Kart Numarası
          </label>
          <div className="relative">
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
              className="input-field pl-12"
              maxLength="19"
              required
            />
            <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-neutral-700 mb-2">
            Kart Üzerindeki İsim
          </label>
          <input
            type="text"
            name="cardName"
            value={formData.cardName}
            onChange={handleChange}
            placeholder="AD SOYAD"
            className="input-field"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-2">
              Son Kullanma Tarihi
            </label>
            <div className="relative">
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                placeholder="AA/YY"
                className="input-field pl-12"
                maxLength="5"
                required
              />
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-2">
              CVV
            </label>
            <div className="relative">
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="123"
                className="input-field pl-12"
                maxLength="3"
                required
              />
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="border-t border-neutral-200 pt-6 space-y-4">
        <h3 className="font-semibold text-neutral-900">İletişim Bilgileri</h3>
        
        <div>
          <label className="block text-sm font-semibold text-neutral-700 mb-2">
            E-posta Adresi
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ornek@email.com"
            className="input-field"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-neutral-700 mb-2">
            Telefon Numarası
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+90 555 123 4567"
            className="input-field"
            required
          />
        </div>
      </div>

      {/* Summary and Submit */}
      <div className="bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-xl p-6 space-y-4">
        <div className="flex justify-between items-center text-lg">
          <span className="font-semibold text-neutral-700">Bağış Tutarı:</span>
          <span className="font-bold text-2xl text-primary">{amount} TL</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-neutral-600">Bağış Tipi:</span>
          <span className="text-sm font-semibold text-neutral-900">
            {frequency === 'one-time' ? 'Tek Seferlik' : 'Aylık Düzenli'}
          </span>
        </div>
      </div>

      <button
        type="submit"
        disabled={isProcessing}
        className={`
          w-full py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg
          ${frequency === 'one-time'
            ? 'btn-primary'
            : 'btn-secondary'
          }
          ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        {isProcessing ? '⏳ Ödeme İşleniyor...' : `${amount} TL Bağış Yap`}
      </button>

      <p className="text-xs text-center text-neutral-500">
        Bağış yaparak <a href="#" className="text-primary hover:underline">Kullanım Koşulları</a> ve{' '}
        <a href="#" className="text-primary hover:underline">Gizlilik Politikası</a>'nı kabul etmiş olursunuz.
      </p>
    </form>
  );
}

export default PaymentForm;