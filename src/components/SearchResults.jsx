import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  Filter,
  MapPin,
  Calendar,
  Clock,
  Users,
  Award,
  Bell,
  FileText,
  Target
} from 'lucide-react';

function SearchResults() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [results, setResults] = useState([]);

  // Mock search data - in real app this would come from API
  const allData = {
    tasks: [
      {
        id: 1,
        title: 'Gıda Paketleme',
        description: 'Muhtaç aileler için gıda paketleri hazırlama',
        type: 'task',
        location: 'Tulpars Derneği Binası',
        date: 'Her Cumartesi',
        category: 'yardım'
      },
      {
        id: 2,
        title: 'İlk Yardım Eğitimi',
        description: 'Temel ilk yardım teknikleri eğitimi',
        type: 'event',
        location: 'Tulpars Derneği Binası',
        date: '15 Aralık 2024',
        category: 'eğitim'
      }
    ],
    news: [
      {
        id: 3,
        title: 'Yeni Gönüllü Programı',
        description: 'Tulpars Derneği yeni gönüllü programı hakkında duyuru',
        type: 'news',
        date: '15 Aralık 2024',
        category: 'duyuru'
      }
    ],
    certificates: [
      {
        id: 4,
        title: 'İlk Yardım Sertifikası',
        description: 'Temel ilk yardım eğitimi sertifikası',
        type: 'certificate',
        date: '10 Kasım 2024',
        category: 'sertifika'
      }
    ]
  };

  const performSearch = (query) => {
    const allResults = [];

    Object.values(allData).forEach(categoryData => {
      categoryData.forEach(item => {
        if (item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase()) ||
            item.location?.toLowerCase().includes(query.toLowerCase())) {
          if (selectedCategory === 'all' || item.type === selectedCategory) {
            allResults.push(item);
          }
        }
      });
    });

    setResults(allResults);
  };

  useEffect(() => {
    if (searchTerm) {
      performSearch(searchTerm);
    }
  }, [searchTerm, selectedCategory]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      performSearch(searchTerm.trim());
    }
  };

  const categories = [
    { value: 'all', label: 'Tümü', icon: Search },
    { value: 'task', label: 'Görevler', icon: Target },
    { value: 'event', label: 'Etkinlikler', icon: Calendar },
    { value: 'news', label: 'Haberler', icon: Bell },
    { value: 'certificate', label: 'Sertifikalar', icon: Award }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'task': return Target;
      case 'event': return Calendar;
      case 'news': return Bell;
      case 'certificate': return Award;
      default: return FileText;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'task': return 'bg-blue-100 text-blue-700';
      case 'event': return 'bg-green-100 text-green-700';
      case 'news': return 'bg-purple-100 text-purple-700';
      case 'certificate': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

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
              <Search className="w-6 h-6 text-primary" />
              <h1 className="text-xl font-bold text-neutral-900">Arama Sonuçları</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Search Form */}
        <div className="card">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Arama..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10 pr-4"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.value}
                    type="button"
                    onClick={() => setSelectedCategory(category.value)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                      selectedCategory === category.value
                        ? 'bg-primary text-white'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {category.label}
                  </button>
                );
              })}
            </div>
          </form>
        </div>

        {/* Results */}
        <div className="space-y-4">
          {results.length > 0 ? (
            <>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-neutral-900">
                  {results.length} sonuç bulundu
                </h2>
              </div>

              {results.map((result) => {
                const TypeIcon = getTypeIcon(result.type);
                return (
                  <div key={result.id} className="card hover:shadow-lg transition-all cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full flex-shrink-0 ${getTypeColor(result.type)}`}>
                        <TypeIcon className="w-5 h-5" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(result.type)}`}>
                            {result.type === 'task' ? 'Görev' :
                             result.type === 'event' ? 'Etkinlik' :
                             result.type === 'news' ? 'Haber' : 'Sertifika'}
                          </span>
                        </div>

                        <h3 className="font-semibold text-neutral-900 mb-2 hover:text-primary transition-colors">
                          {result.title}
                        </h3>

                        <p className="text-neutral-600 text-sm mb-3">
                          {result.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-500">
                          {result.location && (
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {result.location}
                            </span>
                          )}
                          {result.date && (
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {result.date}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : searchTerm ? (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-neutral-900 mb-2">Sonuç bulunamadı</h3>
              <p className="text-neutral-600">
                "{searchTerm}" için sonuç bulunamadı. Farklı anahtar kelimeler deneyin.
              </p>
            </div>
          ) : (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-neutral-900 mb-2">Arama yapın</h3>
              <p className="text-neutral-600">
                Görevler, etkinlikler, haberler ve sertifikalar arasında arama yapmak için yukarıdaki kutuyu kullanın.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;