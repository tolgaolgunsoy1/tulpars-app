import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  History,
  CheckCircle,
  Clock,
  Calendar,
  MapPin,
  Award,
  Filter,
  Search,
  Star,
  Users,
  Target
} from 'lucide-react';

function PastTasks() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const pastTasks = [
    {
      id: 1,
      title: 'Gıda Paketleme - Ramazan Yardımları',
      description: 'Şehitlik Mahallesi\'nde ihtiyaç sahibi aileler için gıda paketi hazırlama',
      date: '15 Kasım 2024',
      startTime: '10:00',
      endTime: '14:00',
      location: 'Tulpars Derneği Binası',
      status: 'completed',
      category: 'yardım',
      participants: 8,
      coordinator: 'Ahmet Kaya',
      hours: 4,
      rating: 5,
      feedback: 'Çok verimli bir çalışma oldu. Herkes çok yardımcıydı.',
      certificate: true,
      skills: ['Takım çalışması', 'Zaman yönetimi', 'İletişim']
    },
    {
      id: 2,
      title: 'İlk Yardım Eğitimi',
      description: 'Temel ilk yardım teknikleri eğitimi',
      date: '10 Kasım 2024',
      startTime: '14:00',
      endTime: '18:00',
      location: 'Tulpars Derneği Binası',
      status: 'completed',
      category: 'eğitim',
      participants: 15,
      coordinator: 'Dr. Ayşe Yılmaz',
      hours: 4,
      rating: 5,
      feedback: 'Çok faydalı bir eğitimdi. Pratik uygulamalar çok öğreticiydi.',
      certificate: true,
      skills: ['İlk yardım', 'CPR', 'Acil müdahale']
    },
    {
      id: 3,
      title: 'Çocuklara Eğitim Desteği',
      description: 'Mahalle çocuklarına ders desteği verme',
      date: '5 Kasım 2024',
      startTime: '15:00',
      endTime: '17:00',
      location: 'Şehitlik Mahallesi',
      status: 'completed',
      category: 'eğitim',
      participants: 5,
      coordinator: 'Mehmet Demir',
      hours: 2,
      rating: 4,
      feedback: 'Çocuklarla çalışmak çok keyifliydi. Gelecekte tekrar katılmak isterim.',
      certificate: false,
      skills: ['Çocuk eğitimi', 'Sabır', 'İletişim']
    },
    {
      id: 4,
      title: 'Park Temizliği',
      description: 'Kent parkının temizlenmesi ve bakımı',
      date: '1 Kasım 2024',
      startTime: '09:00',
      endTime: '12:00',
      location: 'Kent Parkı',
      status: 'completed',
      category: 'çevre',
      participants: 12,
      coordinator: 'Ayşe Kaya',
      hours: 3,
      rating: 4,
      feedback: 'Park çok daha temiz görünüyor. Toplum için önemli bir çalışma.',
      certificate: false,
      skills: ['Takım çalışması', 'Fiziksel dayanıklılık']
    },
    {
      id: 5,
      title: 'Yaşlılara Ev Ziyareti',
      description: 'Yalnız yaşayan yaşlılara moral ve ihtiyaç desteği',
      date: '28 Ekim 2024',
      startTime: '10:00',
      endTime: '16:00',
      location: 'Şehitlik Mahallesi',
      status: 'cancelled',
      category: 'yardım',
      participants: 0,
      coordinator: 'Fatma Öztürk',
      hours: 0,
      rating: null,
      feedback: 'Hava koşulları nedeniyle ertelenmiştir.',
      certificate: false,
      skills: []
    }
  ];

  const statuses = ['all', 'completed', 'cancelled'];
  const categories = ['all', 'yardım', 'eğitim', 'çevre'];

  const filteredTasks = pastTasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || task.status === selectedStatus;
    const matchesCategory = selectedCategory === 'all' || task.category === selectedCategory;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700';
      case 'cancelled': return 'bg-red-100 text-red-700';
      case 'upcoming': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'yardım': return 'bg-blue-100 text-blue-700';
      case 'eğitim': return 'bg-purple-100 text-purple-700';
      case 'çevre': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const totalHours = pastTasks
    .filter(task => task.status === 'completed')
    .reduce((sum, task) => sum + task.hours, 0);

  const totalTasks = pastTasks.filter(task => task.status === 'completed').length;
  const averageRating = pastTasks
    .filter(task => task.rating)
    .reduce((sum, task) => sum + task.rating, 0) /
    pastTasks.filter(task => task.rating).length;

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
              <History className="w-6 h-6 text-primary" />
              <h1 className="text-xl font-bold text-neutral-900">Geçmiş Görevler</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500 rounded-lg">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-900">{totalTasks}</p>
                <p className="text-sm text-blue-700">Tamamlanan Görev</p>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-500 rounded-lg">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-green-900">{totalHours}</p>
                <p className="text-sm text-green-700">Toplam Saat</p>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-500 rounded-lg">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-900">{averageRating.toFixed(1)}</p>
                <p className="text-sm text-yellow-700">Ortalama Puan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="card">
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Görev ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10"
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Durum</label>
                <div className="flex flex-wrap gap-2">
                  {statuses.map((status) => (
                    <button
                      key={status}
                      onClick={() => setSelectedStatus(status)}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        selectedStatus === status
                          ? 'bg-primary text-white'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                      }`}
                    >
                      {status === 'all' ? 'Tümü' :
                       status === 'completed' ? 'Tamamlandı' : 'İptal Edildi'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Kategori</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
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
          </div>
        </div>

        {/* Tasks List */}
        <div className="space-y-4">
          {filteredTasks.map((task) => (
            <div key={task.id} className="card hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full flex-shrink-0 ${
                  task.status === 'completed' ? 'bg-green-100 text-green-600' :
                  task.status === 'cancelled' ? 'bg-red-100 text-red-600' :
                  'bg-blue-100 text-blue-600'
                }`}>
                  {task.status === 'completed' ? <CheckCircle className="w-5 h-5" /> :
                   task.status === 'cancelled' ? <Clock className="w-5 h-5" /> :
                   <Calendar className="w-5 h-5" />}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-neutral-900">{task.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                          {task.status === 'completed' ? 'Tamamlandı' :
                           task.status === 'cancelled' ? 'İptal Edildi' : 'Planlandı'}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(task.category)}`}>
                          {task.category.charAt(0).toUpperCase() + task.category.slice(1)}
                        </span>
                        {task.certificate && (
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium flex items-center gap-1">
                            <Award className="w-3 h-3" />
                            Sertifika
                          </span>
                        )}
                      </div>

                      <p className="text-neutral-600 text-sm mb-3">{task.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-neutral-600">
                      <Calendar className="w-4 h-4" />
                      <span>{task.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-600">
                      <Clock className="w-4 h-4" />
                      <span>{task.startTime} - {task.endTime} ({task.hours} saat)</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-600">
                      <MapPin className="w-4 h-4" />
                      <span>{task.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-600">
                      <Users className="w-4 h-4" />
                      <span>{task.participants} katılımcı</span>
                    </div>
                  </div>

                  {task.rating && (
                    <div className="mt-3 pt-3 border-t border-neutral-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-neutral-600">Değerlendirme:</span>
                          <div className="flex items-center gap-1">
                            {renderStars(task.rating)}
                          </div>
                        </div>
                        <span className="text-sm text-neutral-500">{task.rating}/5</span>
                      </div>
                      {task.feedback && (
                        <p className="text-sm text-neutral-700 mt-2 italic">"{task.feedback}"</p>
                      )}
                    </div>
                  )}

                  {task.skills.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-neutral-200">
                      <div className="flex flex-wrap gap-2">
                        {task.skills.map((skill, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {filteredTasks.length === 0 && (
            <div className="text-center py-12">
              <History className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-neutral-900 mb-2">Görev bulunamadı</h3>
              <p className="text-neutral-600">Arama kriterlerinize uygun geçmiş görev bulunamadı.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PastTasks;