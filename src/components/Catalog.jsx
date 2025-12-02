import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  Filter,
  HeartHandshake,
  Users,
  Award,
  Calendar,
  MapPin,
  Clock,
  User,
  Star
} from 'lucide-react';

function Catalog() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Determine catalog type from URL
  const catalogType = location.pathname.split('/')[1]; // tasks, events, certificates

  const catalogData = {
    tasks: {
      title: 'Görevler',
      icon: Users,
      items: [
        {
          id: 1,
          title: 'Gıda Paketleme',
          description: 'Muhtaç aileler için gıda paketleri hazırlama',
          location: 'Tulpars Derneği Binası',
          date: 'Her Cumartesi',
          time: '10:00 - 14:00',
          participants: 8,
          maxParticipants: 15,
          difficulty: 'Kolay',
          category: 'yardım'
        },
        {
          id: 2,
          title: 'Çocuklara Eğitim',
          description: 'Mahalle çocuklarına ders desteği',
          location: 'Şehitlik Mahallesi',
          date: 'Pazartesi, Çarşamba',
          time: '15:00 - 17:00',
          participants: 5,
          maxParticipants: 10,
          difficulty: 'Orta',
          category: 'eğitim'
        },
        {
          id: 3,
          title: 'Park Temizliği',
          description: 'Şehir parklarının temizlenmesi',
          location: 'Kent Parkı',
          date: 'Her Pazar',
          time: '09:00 - 12:00',
          participants: 12,
          maxParticipants: 20,
          difficulty: 'Kolay',
          category: 'çevre'
        }
      ]
    },
    events: {
      title: 'Etkinlikler',
      icon: Calendar,
      items: [
        {
          id: 1,
          title: 'İlk Yardım Eğitimi',
          description: 'Temel ilk yardım teknikleri eğitimi',
          location: 'Tulpars Derneği Binası',
          date: '15 Aralık 2024',
          time: '14:00 - 18:00',
          participants: 25,
          maxParticipants: 30,
          type: 'Eğitim',
          instructor: 'Dr. Ahmet Yılmaz'
        },
        {
          id: 2,
          title: 'Gıda Dağıtım Etkinliği',
          description: 'Ramazan öncesi gıda paketleri dağıtımı',
          location: 'Şehitlik Mahallesi',
          date: '20 Aralık 2024',
          time: '10:00 - 16:00',
          participants: 15,
          maxParticipants: 25,
          type: 'Yardım',
          coordinator: 'Ayşe Kaya'
        }
      ]
    },
    certificates: {
      title: 'Sertifikalar',
      icon: Award,
      items: [
        {
          id: 1,
          name: 'İlk Yardım Sertifikası',
          description: 'Temel ilk yardım eğitimi sertifikası',
          issueDate: '10 Kasım 2024',
          validityDate: '10 Kasım 2026',
          issuer: 'Türk Kızılayı',
          status: 'Aktif'
        },
        {
          id: 2,
          name: 'Gönüllü Koordinatörlük',
          description: 'Gönüllü koordinatörlük eğitimi',
          issueDate: '5 Ekim 2024',
          validityDate: '5 Ekim 2025',
          issuer: 'Tulpars Derneği',
          status: 'Aktif'
        }
      ]
    }
  };

  const currentCatalog = catalogData[catalogType] || catalogData.tasks;
  const Icon = currentCatalog.icon;

  const filteredItems = currentCatalog.items.filter(item => {
    const matchesSearch = item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory || item.type === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = catalogType === 'tasks'
    ? ['all', 'yardım', 'eğitim', 'çevre']
    : catalogType === 'events'
    ? ['all', 'Eğitim', 'Yardım']
    : ['all', 'Aktif'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 text-neutral-600 hover:text-neutral-900"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-3">
              <Icon className="w-6 h-6 text-primary" />
              <h1 className="text-xl font-bold text-neutral-900">{currentCatalog.title}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Search and Filter */}
        <div className="card">
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Arama..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {category === 'all' ? 'Tümü' : category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Items List */}
        <div className="space-y-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="card hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-neutral-900 mb-1">{item.title || item.name}</h3>
                      <p className="text-sm text-neutral-600 mb-3">{item.description}</p>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-500">
                        {item.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {item.location}
                          </span>
                        )}
                        {item.date && (
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {item.date}
                          </span>
                        )}
                        {item.time && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {item.time}
                          </span>
                        )}
                        {item.participants && (
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {item.participants}/{item.maxParticipants}
                          </span>
                        )}
                        {item.difficulty && (
                          <span className={`px-2 py-1 rounded-full ${
                            item.difficulty === 'Kolay' ? 'bg-green-100 text-green-700' :
                            item.difficulty === 'Orta' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {item.difficulty}
                          </span>
                        )}
                        {item.status && (
                          <span className={`px-2 py-1 rounded-full ${
                            item.status === 'Aktif' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                          }`}>
                            {item.status}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <Icon className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-neutral-900 mb-2">Sonuç bulunamadı</h3>
              <p className="text-neutral-600">Arama kriterlerinize uygun öğe bulunamadı.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Catalog;