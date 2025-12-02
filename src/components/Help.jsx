import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

function Help() {
  const navigate = useNavigate();

  const faqItems = [
    {
      question: 'Nasıl gönüllü olabilirim?',
      answer: 'Uygulamada "Görevler" bölümünden uygun görevleri seçebilirsiniz. Profilinizdeki sertifikalarınız görev seçiminde önemlidir.'
    },
    {
      question: 'Bağış nasıl yapabilirim?',
      answer: 'Ana sayfadaki "Bağış Yap" butonuna tıklayarak güvenli ödeme sistemi üzerinden bağış yapabilirsiniz.'
    },
    {
      question: 'Sertifika nasıl kazanırım?',
      answer: 'Katıldığınız eğitim ve etkinliklerden otomatik olarak sertifika kazanırsınız. Sertifikalarınız profilinizde görünür.'
    },
    {
      question: 'Bildirimleri nasıl yönetirim?',
      answer: 'Ayarlar > Bildirimler bölümünden bildirim tercihlerinizi değiştirebilirsiniz.'
    }
  ];

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'Canlı Destek',
      description: '7/24 canlı destek',
      action: () => window.open('https://wa.me/905551234567', '_blank'),
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Phone,
      title: 'Telefon',
      description: '+90 555 123 45 67',
      action: () => window.open('tel:+905551234567'),
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Mail,
      title: 'E-posta',
      description: 'destek@tulpars.org',
      action: () => window.open('mailto:destek@tulpars.org'),
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  const quickLinks = [
    {
      title: 'Kullanım Kılavuzu',
      description: 'Uygulamanın detaylı kullanımı',
      icon: ExternalLink,
      action: () => window.open('https://tulpars.org/kilavuz', '_blank')
    },
    {
      title: 'Sık Sorulan Sorular',
      description: 'En çok sorulan sorular',
      icon: HelpCircle,
      action: () => navigate('/faq')
    },
    {
      title: 'İletişim Bilgileri',
      description: 'Dernek bilgileri ve adres',
      icon: MapPin,
      action: () => navigate('/contact')
    }
  ];

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
                <HelpCircle className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-xl font-bold text-neutral-900">Yardım ve Destek</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary/10 via-white to-secondary/10 rounded-2xl p-6 border border-neutral-200/50">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-4">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Size Nasıl Yardımcı Olabiliriz?</h2>
            <p className="text-neutral-600">Sorularınız için aşağıdaki seçeneklerden birini kullanabilirsiniz.</p>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-neutral-900">İletişim Yöntemleri</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contactMethods.map((method, index) => (
              <button
                key={index}
                onClick={method.action}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-200/50 hover:shadow-md transition-all duration-200 text-left group"
              >
                <div className={`inline-flex p-3 rounded-xl mb-4 ${method.bgColor} group-hover:scale-110 transition-transform`}>
                  <method.icon className={`w-6 h-6 ${method.color}`} />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">{method.title}</h4>
                <p className="text-sm text-neutral-600">{method.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-neutral-900">Sık Sorulan Sorular</h3>
          <div className="space-y-3">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl border border-neutral-200/50 overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-50/50 transition-colors">
                    <h4 className="font-medium text-neutral-900 pr-4">{faq.question}</h4>
                    <ChevronRight className="w-5 h-5 text-neutral-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-neutral-900">Hızlı Bağlantılar</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickLinks.map((link, index) => (
              <button
                key={index}
                onClick={link.action}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-neutral-200/50 hover:shadow-md transition-all duration-200 text-left group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <link.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-neutral-900 mb-1">{link.title}</h4>
                    <p className="text-sm text-neutral-600">{link.description}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Office Hours */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200/50">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-xl">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-neutral-900 mb-2">Çalışma Saatleri</h4>
              <div className="space-y-1 text-sm text-neutral-600">
                <p><strong>Hafta içi:</strong> 09:00 - 18:00</p>
                <p><strong>Cumartesi:</strong> 10:00 - 16:00</p>
                <p><strong>Pazar:</strong> Kapalı</p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border border-red-200/50">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-red-100 rounded-xl">
              <Phone className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h4 className="font-semibold text-neutral-900 mb-2">Acil Durum</h4>
              <p className="text-sm text-neutral-600 mb-3">
                Acil durumlarda dernek başkanımızla iletişime geçebilirsiniz.
              </p>
              <button
                onClick={() => window.open('tel:+905551234568')}
                className="px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors"
              >
                +90 555 123 45 68
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;