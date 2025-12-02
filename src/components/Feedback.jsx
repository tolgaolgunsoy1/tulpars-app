import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, Star, MessageSquare } from 'lucide-react';

function Feedback() {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState({
    rating: 0,
    category: '',
    message: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    { value: 'bug', label: 'Hata Bildirimi', icon: '🐛' },
    { value: 'feature', label: 'Özellik Önerisi', icon: '💡' },
    { value: 'ui', label: 'Arayüz Geri Bildirimi', icon: '🎨' },
    { value: 'performance', label: 'Performans', icon: '⚡' },
    { value: 'other', label: 'Diğer', icon: '📝' }
  ];

  const handleRating = (rating) => {
    setFeedback(prev => ({ ...prev, rating }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // In production, send to backend API
      console.log('Feedback submitted:', feedback);

      setSubmitted(true);
    } catch (error) {
      console.error('Feedback submission error:', error);
      alert('Geri bildirim gönderilirken hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-neutral-200/50 p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <Send className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Teşekkürler!</h2>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Geri bildiriminiz başarıyla gönderildi. Değerli görüşleriniz için teşekkür ederiz.
            </p>
            <button
              onClick={() => navigate('/settings')}
              className="w-full bg-primary text-white py-3 px-6 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
            >
              Ayarlar'a Dön
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-neutral-200/50 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-full">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-xl font-bold text-neutral-900">Geri Bildirim</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-neutral-200/50 p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Rating */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-3">
                Uygulamayı Puanlayın
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRating(star)}
                    className="p-2 hover:scale-110 transition-transform"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= feedback.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-neutral-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-3">
                Geri Bildirim Türü
              </label>
              <div className="grid grid-cols-2 gap-3">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    type="button"
                    onClick={() => setFeedback(prev => ({ ...prev, category: category.value }))}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      feedback.category === category.value
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      <span className="font-medium">{category.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                Mesajınız
              </label>
              <textarea
                value={feedback.message}
                onChange={(e) => setFeedback(prev => ({ ...prev, message: e.target.value }))}
                placeholder="Lütfen geri bildiriminizi detaylıca açıklayın..."
                className="input-field min-h-[120px] resize-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                E-posta Adresi (İsteğe bağlı)
              </label>
              <input
                type="email"
                value={feedback.email}
                onChange={(e) => setFeedback(prev => ({ ...prev, email: e.target.value }))}
                placeholder="yanıt almak için e-posta adresinizi bırakın"
                className="input-field"
              />
              <p className="text-xs text-neutral-500 mt-1">
                Geri bildiriminiz hakkında daha fazla bilgi almak istersek kullanacağız.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting || !feedback.rating || !feedback.category || !feedback.message.trim()}
              className="w-full bg-primary text-white py-4 px-6 rounded-xl font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Gönderiliyor...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Geri Bildirimi Gönder
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Feedback;