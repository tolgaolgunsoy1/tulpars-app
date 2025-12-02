import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Award,
  Calendar,
  Download,
  Share,
  CheckCircle,
  AlertTriangle,
  FileText,
  User,
  Building
} from 'lucide-react';

function CertificateDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock certificate data - in real app this would come from API
  const certificateData = {
    id: 1,
    name: 'İlk Yardım Sertifikası',
    description: 'Temel ilk yardım eğitimi sertifikası',
    longDescription: 'Bu sertifika, Tulpars Derneği tarafından verilen temel ilk yardım eğitimini başarıyla tamamlamış olunduğunu gösterir. Sertifika sahibi, acil durumlarda temel müdahale tekniklerini uygulayabilir.',
    issueDate: '10 Kasım 2024',
    expiryDate: '10 Kasım 2026',
    issuer: 'Tulpars Derneği',
    issuerLogo: '', // Would contain logo URL
    recipient: 'Ahmet Kaya',
    certificateNumber: 'TY-2024-001',
    status: 'active',
    skills: [
      'Temel yaşam desteği (CPR)',
      'Kanama kontrolü',
      'Yanık ve donma vakalarında müdahale',
      'Zehirlenme durumları',
      'Kemik kırıkları ve çıkıklar',
      'Şok durumu müdahalesi'
    ],
    instructor: 'Dr. Ayşe Yılmaz',
    trainingDate: '5-7 Kasım 2024',
    trainingHours: 16,
    verificationCode: 'TY2024001AHMET',
    qrCode: '', // Would contain QR code URL
    downloadUrl: '', // Would contain PDF download URL
    isVerified: true
  };

  const handleDownload = () => {
    // In real app, this would trigger PDF download
    console.log('Downloading certificate...');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: certificateData.name,
        text: `Sertifikamı inceleyin: ${certificateData.name}`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'expired': return 'bg-red-100 text-red-700';
      case 'revoked': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const isExpiringSoon = () => {
    const expiryDate = new Date(certificateData.expiryDate);
    const now = new Date();
    const daysUntilExpiry = Math.ceil((expiryDate - now) / (1000 * 60 * 60 * 24));
    return daysUntilExpiry <= 30 && daysUntilExpiry > 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate(-1)}
                className="p-2 text-neutral-600 hover:text-neutral-900"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-primary" />
                <h1 className="text-xl font-bold text-neutral-900">Sertifika Detayı</h1>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-2 text-neutral-400 hover:text-neutral-600 rounded-full hover:bg-neutral-100"
              >
                <Share className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Status */}
        <div className="flex items-center justify-between">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(certificateData.status)}`}>
            {certificateData.status === 'active' ? 'Aktif' :
             certificateData.status === 'expired' ? 'Süresi Dolmuş' : 'İptal Edilmiş'}
          </span>

          {isExpiringSoon() && (
            <div className="flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
              <AlertTriangle className="w-4 h-4" />
              Süresi Yakında Dolacak
            </div>
          )}
        </div>

        {/* Certificate Card */}
        <div className="card bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full">
              <Award className="w-10 h-10 text-white" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">{certificateData.name}</h2>
              <p className="text-neutral-600">{certificateData.description}</p>
            </div>

            <div className="bg-white/50 rounded-lg p-4">
              <p className="text-neutral-700 leading-relaxed">{certificateData.longDescription}</p>
            </div>
          </div>
        </div>

        {/* Certificate Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="font-semibold text-neutral-900 mb-4">Sertifika Bilgileri</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-neutral-600">Sertifika No:</span>
                <span className="font-medium text-neutral-900">{certificateData.certificateNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Düzenlenme Tarihi:</span>
                <span className="font-medium text-neutral-900">{certificateData.issueDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Geçerlilik Tarihi:</span>
                <span className="font-medium text-neutral-900">{certificateData.expiryDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Eğitim Saati:</span>
                <span className="font-medium text-neutral-900">{certificateData.trainingHours} saat</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Eğitim Tarihi:</span>
                <span className="font-medium text-neutral-900">{certificateData.trainingDate}</span>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="font-semibold text-neutral-900 mb-4">Kurum ve Eğitmen</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Building className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium text-neutral-900">{certificateData.issuer}</p>
                  <p className="text-sm text-neutral-600">Düzenleyen Kurum</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium text-neutral-900">{certificateData.instructor}</p>
                  <p className="text-sm text-neutral-600">Eğitmen</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium text-neutral-900">{certificateData.recipient}</p>
                  <p className="text-sm text-neutral-600">Sertifika Sahibi</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="card">
          <h3 className="font-semibold text-neutral-900 mb-4">Kazanılan Yetkinlikler</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {certificateData.skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-neutral-700 text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Verification */}
        <div className="card bg-green-50 border-green-200">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-green-900">Doğrulanmış Sertifika</h4>
              <p className="text-green-800 text-sm">
                Bu sertifika Tulpars Derneği tarafından doğrulanmıştır. Doğrulama kodu: {certificateData.verificationCode}
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={handleDownload}
            className="flex-1 bg-primary text-white py-4 px-6 rounded-xl font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-3"
          >
            <Download className="w-5 h-5" />
            PDF İndir
          </button>

          <button className="flex-1 bg-neutral-100 text-neutral-700 py-4 px-6 rounded-xl font-semibold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-3">
            <FileText className="w-5 h-5" />
            Yazdır
          </button>
        </div>

        {/* Renewal Info */}
        {certificateData.status === 'active' && (
          <div className="card bg-blue-50 border-blue-200">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-900 mb-1">Yenileme Bilgileri</h4>
                <p className="text-blue-800 text-sm">
                  Sertifikanızın geçerliliğini sürdürmek için {certificateData.expiryDate} tarihinden önce yenileme eğitimi almanız gerekmektedir.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CertificateDetails;