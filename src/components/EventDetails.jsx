import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Clock,
  Users,
  Phone,
  Mail,
  Share,
  Heart,
  CheckCircle,
  AlertCircle,
  Navigation,
  MessageSquare
} from 'lucide-react';

function EventDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isParticipating, setIsParticipating] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Mock event data - in real app this would come from API based on ID
  const eventData = {
    id: 1,
    title: 'İlk Yardım Eğitimi',
    description: 'Temel ilk yardım teknikleri eğitimi. Bu eğitimde kalp masajı, suni solunum, yaralanma durumlarında müdahale teknikleri gibi konularda pratik bilgiler verilecektir.',
    longDescription: `Bu kapsamlı ilk yardım eğitimi, acil durumlarda hayat kurtarmak için gerekli temel becerileri kazandırmayı amaçlamaktadır.

    Eğitim İçeriği:
    • Temel yaşam desteği (CPR)
    • Kanama kontrolü
    • Yanık ve donma vakalarında müdahale
    • Zehirlenme durumları
    • Kemik kırıkları ve çıkıklar
    • Şok durumu

    Eğitim süresince teorik bilgiler yanında pratik uygulamalar da yapılacaktır. Eğitmenlerimiz tarafından birebir destek verilecektir.`,
    location: 'Tulpars Derneği Binası, İstanbul',
    coordinates: { lat: 41.0122, lng: 28.9764 },
    date: '15 Aralık 2024',
    startTime: '14:00',
    endTime: '18:00',
    type: 'Eğitim',
    category: 'eğitim',
    priority: 'high',
    participants: 25,
    maxParticipants: 30,
    instructor: 'Dr. Ayşe Yılmaz',
    contact: {
      phone: '+90 555 234 5678',
      email: 'ayse.yilmaz@tulpars.org'
    },
    requirements: [
      'Kimlik belgesi',
      'Rahat kıyafet',
      'Defter ve kalem'
    ],
    images: [], // Would contain image URLs
    status: 'upcoming'
  };

  const handleParticipate = () => {
    setIsParticipating(!isParticipating);
    // In real app, this would make an API call
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: eventData.title,
        text: eventData.description,
        url: window.location.href
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-700';
      case 'ongoing': return 'bg-green-100 text-green-700';
      case 'completed': return 'bg-gray-100 text-gray-700';
      case 'cancelled': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'low': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
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
                <Calendar className="w-6 h-6 text-primary" />
                <h1 className="text-xl font-bold text-neutral-900">Etkinlik Detayı</h1>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2 rounded-full transition-colors ${
                  isLiked ? 'text-red-500 bg-red-50' : 'text-neutral-400 hover:text-neutral-600'
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              </button>
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
        {/* Status and Priority */}
        <div className="flex flex-wrap gap-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(eventData.status)}`}>
            {eventData.status === 'upcoming' ? 'Yaklaşan' :
             eventData.status === 'ongoing' ? 'Devam Ediyor' :
             eventData.status === 'completed' ? 'Tamamlandı' : 'İptal Edildi'}
          </span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(eventData.priority)}`}>
            {eventData.priority === 'high' ? 'Yüksek Öncelik' :
             eventData.priority === 'medium' ? 'Orta Öncelik' : 'Düşük Öncelik'}
          </span>
          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            {eventData.type}
          </span>
        </div>

        {/* Title and Description */}
        <div className="card">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">{eventData.title}</h2>
          <p className="text-neutral-600 mb-4">{eventData.description}</p>
          <p className="text-neutral-700 leading-relaxed">{eventData.longDescription}</p>
        </div>

        {/* Key Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card">
            <h3 className="font-semibold text-neutral-900 mb-3">Etkinlik Bilgileri</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-neutral-700">{eventData.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-neutral-700">{eventData.startTime} - {eventData.endTime}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-neutral-700">{eventData.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-neutral-700">{eventData.participants}/{eventData.maxParticipants} katılımcı</span>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="font-semibold text-neutral-900 mb-3">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-neutral-700">{eventData.instructor}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href={`tel:${eventData.contact.phone}`} className="text-primary hover:text-primary/80">
                  {eventData.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href={`mailto:${eventData.contact.email}`} className="text-primary hover:text-primary/80">
                  {eventData.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="card">
          <h3 className="font-semibold text-neutral-900 mb-3">Gerekli Materyaller</h3>
          <ul className="space-y-2">
            {eventData.requirements.map((requirement, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-neutral-700">{requirement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleParticipate}
            className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all flex items-center justify-center gap-3 ${
              isParticipating
                ? 'bg-green-500 text-white hover:bg-green-600'
                : 'bg-primary text-white hover:bg-primary/90'
            }`}
          >
            {isParticipating ? (
              <>
                <CheckCircle className="w-5 h-5" />
                Katılıyorum
              </>
            ) : (
              <>
                <Users className="w-5 h-5" />
                Katıl
              </>
            )}
          </button>

          <button className="flex-1 bg-neutral-100 text-neutral-700 py-4 px-6 rounded-xl font-semibold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-3">
            <Navigation className="w-5 h-5" />
            Yol Tarifi
          </button>
        </div>

        {/* Additional Info */}
        <div className="card bg-blue-50 border-blue-200">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-blue-900 mb-1">Önemli Not</h4>
              <p className="text-blue-800 text-sm">
                Etkinliğe katılabilmek için kayıt olmak zorunludur. Kayıt sonrası SMS ile hatırlatma gönderilecektir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;