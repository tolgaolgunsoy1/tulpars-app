import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Shield,
  Eye,
  Lock,
  Database,
  Users,
  Mail,
  Phone,
  MapPin,
  Calendar
} from 'lucide-react';

function Privacy() {
  const navigate = useNavigate();

  const privacySections = [
    {
      icon: Database,
      title: 'Veri Toplama ve Kullanım',
      content: 'Uygulamamız, hizmetlerimizi sağlamak için gerekli olan minimum kişisel bilgileri toplar. Bu bilgiler sadece gönüllü katılım, bağış işlemleri ve iletişim amaçlı kullanılır.'
    },
    {
      icon: Lock,
      title: 'Veri Güvenliği',
      content: 'Tüm verileriniz SSL şifreleme ile korunur ve sadece yetkili personel tarafından erişilebilir. Verileriniz üçüncü taraflarla paylaşılmaz.'
    },
    {
      icon: Eye,
      title: 'Veri Haklarınız',
      content: 'KVKK kapsamında verilerinizi görüntüleme, düzeltme, silme ve işleme izni verme/çekme haklarına sahipsiniz.'
    },
    {
      icon: Users,
      title: 'Gönüllü Bilgileri',
      content: 'Katıldığınız etkinlikler ve görev bilgileri, sertifika sistemi için saklanır. Bu bilgiler sadece dernek içi kullanım içindir.'
    },
    {
      icon: Mail,
      title: 'İletişim Bilgileri',
      content: 'E-posta ve telefon bilgileriniz sadece önemli duyurular ve etkinlik hatırlatmaları için kullanılır.'
    }
  ];

  const dataTypes = [
    { icon: Users, label: 'Kişisel Bilgiler', description: 'Ad, soyad, doğum tarihi' },
    { icon: Mail, label: 'İletişim', description: 'E-posta, telefon' },
    { icon: MapPin, label: 'Konum', description: 'Etkinlik katılım bilgileri' },
    { icon: Calendar, label: 'Katılım Geçmişi', description: 'Görev ve etkinlik kayıtları' }
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
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-xl font-bold text-neutral-900">Gizlilik Politikası</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-primary/10 via-white to-secondary/10 rounded-2xl p-6 border border-neutral-200/50">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Gizlilik ve Veri Koruma</h2>
            <p className="text-neutral-600 leading-relaxed">
              Tulpars Derneği olarak verilerinizin güvenliği ve gizliliği bizim için önceliklidir.
              Bu politika, bilgilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
            </p>
          </div>
        </div>

        {/* Last Updated */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-neutral-200/50">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-neutral-500" />
            <span className="text-sm text-neutral-600">
              Son güncelleme: 1 Aralık 2024
            </span>
          </div>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-neutral-900">Gizlilik İlkelerimiz</h3>

          {privacySections.map((section, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-200/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                  <section.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-3">{section.title}</h4>
                  <p className="text-neutral-600 leading-relaxed">{section.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Data Types */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-neutral-900">Toplanan Veri Türleri</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dataTypes.map((dataType, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-neutral-200/50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <dataType.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-neutral-900">{dataType.label}</h4>
                </div>
                <p className="text-sm text-neutral-600">{dataType.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Data Retention */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200/50">
          <h3 className="text-lg font-semibold text-neutral-900 mb-3">Veri Saklama Süresi</h3>
          <div className="space-y-2 text-sm text-neutral-600">
            <p>• <strong>Kişisel bilgiler:</strong> Hesap aktif olduğu sürece</p>
            <p>• <strong>Gönüllü katılım kayıtları:</strong> Sürekli (sertifika amaçlı)</p>
            <p>• <strong>Bağış bilgileri:</strong> 7 yıl (muhasebe kanunu gereği)</p>
            <p>• <strong>İletişim geçmişi:</strong> 2 yıl</p>
          </div>
        </div>

        {/* Contact for Privacy */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200/50">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-100 rounded-xl">
              <Mail className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold text-neutral-900 mb-2">Gizlilik Soruları</h4>
              <p className="text-neutral-600 mb-3">
                Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => window.open('mailto:gizlilik@tulpars.org')}
                  className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors"
                >
                  gizlilik@tulpars.org
                </button>
                <button
                  onClick={() => window.open('tel:+905551234569')}
                  className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors"
                >
                  +90 555 123 45 69
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Compliance */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-200/50">
          <h3 className="text-lg font-semibold text-neutral-900 mb-3">Yasal Uyumluluk</h3>
          <div className="space-y-2 text-sm text-neutral-600">
            <p>• Bu gizlilik politikası <strong>KVKK (6698 sayılı kanun)</strong> hükümlerine uygundur.</p>
            <p>• Veri işleme faaliyetlerimiz Kişisel Verileri Koruma Kurumu'na bildirilmiştir.</p>
            <p>• Veri güvenliği standartları ISO 27001'e uygundur.</p>
            <p>• Düzenli güvenlik denetimleri yapılır ve raporlanır.</p>
          </div>
        </div>

        {/* Data Subject Rights */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200/50">
          <h3 className="text-lg font-semibold text-neutral-900 mb-3">KVKK Haklarınız</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
              <span>Kişisel verilerinizin işlenip işlenmediğini öğrenme</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
              <span>Verilerinizin işlenme amacını ve uygunluğunu öğrenme</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
              <span>Yurt içi veya yurt dışı alıcılarını öğrenme</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
              <span>Verilerinizin düzeltilmesini isteme</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
              <span>Verilerinizin silinmesini veya yok edilmesini isteme</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
              <span>Düzeltme veya silme işlemlerinin bildirilmesini isteme</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;