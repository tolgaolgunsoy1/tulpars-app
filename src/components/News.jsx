import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  Bell,
  Calendar,
  User,
  ExternalLink,
  Filter,
  Clock,
  Eye
} from 'lucide-react';

function News() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const newsItems = [
    {
      id: 1,
      title: 'Yeni Gönüllü Eğitim Programı Başlıyor',
      summary: 'Tulpars Derneği olarak yeni gönüllülerimiz için kapsamlı bir eğitim programı hazırladık.',
      content: 'Detaylı eğitim içeriği burada yer alacak...',
      date: '15 Aralık 2024',
      time: '10:00',
      author: 'Tulpars Derneği',
      category: 'duyuru',
      type: 'announcement',
      views: 245,
      urgent: true
    },
    {
      id: 2,
      title: 'Ramazan Yardımları Başarıyla Dağıtıldı',
      summary: 'Bu Ramazan ayında 500 aileye gıda paketi dağıtımı gerçekleştirildi.',
      content: 'Dağıtım detayları ve fotoğraflar...',
      date: '10 Aralık 2024',
      time: '14:30',
      author: 'Ahmet Kaya',
      category: 'haber',
      type: 'news',
      views: 189,
      urgent: false
    },
    {
      id: 3,
      title: 'İlk Yardım Sertifikası Yenileme Dönemi',
      summary: 'İlk yardım sertifikası sahiplerinin yenileme işlemleri 15 Ocak\'ta başlayacak.',
      content: 'Yenileme süreci hakkında detaylar...',
      date: '8 Aralık 2024',
      time: '09:15',
      author: 'Dr. Ayşe Yılmaz',
      category: 'duyuru',
      type: 'announcement',
      views: 156,
      urgent: false
    },
    {
      id: 4,
      title: 'Gönüllü Başarı Hikayesi: Mehmet\'in Yolculuğu',
      summary: '2 yıldır derneğimizde aktif görev yapan Mehmet\'in hikayesi.',
      content: 'Mehmet\'in tam hikayesi...',
      date: '5 Aralık 2024',
      time: '16:45',
      author: 'Editör',
      category: 'hikaye',
      type: 'story',
      views: 312,
      urgent: false
    }
  ];

  const categories = ['all', 'haber', 'duyuru', 'hikaye'];

  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category) => {
    switch (category) {
      case 'haber': return 'bg-blue-100 text-blue-700';
      case 'duyuru': return 'bg-green-100 text-green-700';
      case 'hikaye': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'announcement': return Bell;
      case 'news': return User;
      case 'story': return ExternalLink;
      default: return Bell;
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
              <Bell className="w-6 h-6 text-primary" />
              <h1 className="text-xl font-bold text-neutral-900">Haberler & Duyurular</h1>
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
                placeholder="Haber veya duyuru ara..."
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
                  {category === 'all' ? 'Tümü' : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* News List */}
        <div className="space-y-4">
          {filteredNews.map((item) => {
            const TypeIcon = getTypeIcon(item.type);
            return (
              <div key={item.id} className="card hover:shadow-lg transition-all cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full flex-shrink-0 ${
                    item.urgent
                      ? 'bg-gradient-to-br from-red-500/10 to-red-500/5 text-red-600'
                      : 'bg-primary/10 text-primary'
                  }`}>
                    <TypeIcon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                          </span>
                          {item.urgent && (
                            <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                              Acil
                            </span>
                          )}
                        </div>

                        <h3 className="font-semibold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>

                        <p className="text-neutral-600 text-sm mb-3 line-clamp-2">
                          {item.summary}
                        </p>

                        <div className="flex items-center gap-4 text-xs text-neutral-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {item.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {item.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {item.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {item.views}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <Bell className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-neutral-900 mb-2">Sonuç bulunamadı</h3>
              <p className="text-neutral-600">Arama kriterlerinize uygun haber bulunamadı.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default News;