import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  MapPin,
  AlertTriangle,
  Users,
  Clock,
  Navigation,
  Phone,
  MessageSquare,
  Filter,
  Search
} from 'lucide-react';

function Operations() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const operations = [
    {
      id: 1,
      title: 'Şehitlik Mahallesi Gıda Dağıtımı',
      description: 'Ramazan ayı gıda paketleri dağıtım operasyonu',
      location: 'Şehitlik Mahallesi, İstanbul',
      coordinates: { lat: 41.0082, lng: 28.9784 },
      status: 'active',
      priority: 'high',
      participants: 12,
      maxParticipants: 15,
      startTime: '10:00',
      endTime: '16:00',
      coordinator: 'Ahmet Kaya',
      phone: '+90 555 123 4567',
      type: 'yardım'
    },
    {
      id: 2,
      title: 'İlk Yardım Eğitim Tatbikatı',
      description: 'Yeni gönüllüler için ilk yardım tatbikatı',
      location: 'Tulpars Derneği Binası',
      coordinates: { lat: 41.0122, lng: 28.9764 },
      status: 'scheduled',
      priority: 'medium',
      participants: 8,
      maxParticipants: 10,
      startTime: '14:00',
      endTime: '18:00',
      coordinator: 'Dr. Ayşe Yılmaz',
      phone: '+90 555 234 5678',
      type: 'eğitim'
    },
    {
      id: 3,
      title: 'Park Temizlik Operasyonu',
      description: 'Kent parkının temizlenmesi ve bakımı',
      location: 'Kent Parkı, İstanbul',
      coordinates: { lat: 41.0152, lng: 28.9744 },
      status: 'completed',
      priority: 'low',
      participants: 20,
      maxParticipants: 25,
      startTime: '09:00',
      endTime: '12:00',
      coordinator: 'Mehmet Demir',
      phone: '+90 555 345 6789',
      type: 'çevre'
    }
  ];

  const statuses = ['all', 'active', 'scheduled', 'completed'];

  const filteredOperations = operations.filter(operation => {
    const matchesSearch = operation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         operation.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         operation.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || operation.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'scheduled': return 'bg-blue-100 text-blue-700';
      case 'completed': return 'bg-gray-100 text-gray-700';
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

  const getTypeColor = (type) => {
    switch (type) {
      case 'yardım': return 'bg-blue-100 text-blue-700';
      case 'eğitim': return 'bg-purple-100 text-purple-700';
      case 'çevre': return 'bg-green-100 text-green-700';
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
              <MapPin className="w-6 h-6 text-primary" />
              <h1 className="text-xl font-bold text-neutral-900">Operasyonlar</h1>
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
                placeholder="Operasyon ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10"
              />
            </div>

            {/* Status Filter */}
            <div className="flex flex-wrap gap-2">
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedStatus === status
                      ? 'bg-primary text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {status === 'all' ? 'Tümü' :
                   status === 'active' ? 'Aktif' :
                   status === 'scheduled' ? 'Planlanan' : 'Tamamlanan'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Operations List */}
        <div className="space-y-4">
          {filteredOperations.map((operation) => (
            <div key={operation.id} className="card hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full flex-shrink-0 ${
                  operation.status === 'active'
                    ? 'bg-green-100 text-green-600'
                    : operation.status === 'scheduled'
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  <AlertTriangle className="w-5 h-5" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(operation.status)}`}>
                          {operation.status === 'active' ? 'Aktif' :
                           operation.status === 'scheduled' ? 'Planlanan' : 'Tamamlandı'}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(operation.priority)}`}>
                          {operation.priority === 'high' ? 'Yüksek' :
                           operation.priority === 'medium' ? 'Orta' : 'Düşük'} Öncelik
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(operation.type)}`}>
                          {operation.type.charAt(0).toUpperCase() + operation.type.slice(1)}
                        </span>
                      </div>

                      <h3 className="font-semibold text-neutral-900 mb-1">
                        {operation.title}
                      </h3>

                      <p className="text-neutral-600 text-sm mb-3">
                        {operation.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-neutral-600">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{operation.location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-neutral-600">
                      <Clock className="w-4 h-4 flex-shrink-0" />
                      <span>{operation.startTime} - {operation.endTime}</span>
                    </div>

                    <div className="flex items-center gap-2 text-neutral-600">
                      <Users className="w-4 h-4 flex-shrink-0" />
                      <span>{operation.participants}/{operation.maxParticipants} kişi</span>
                    </div>

                    <div className="flex items-center gap-2 text-neutral-600">
                      <MessageSquare className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{operation.coordinator}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 bg-primary text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                      <Navigation className="w-4 h-4" />
                      Yol Tarifi
                    </button>
                    <button className="flex-1 bg-neutral-100 text-neutral-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      İletişim
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredOperations.length === 0 && (
            <div className="text-center py-12">
              <MapPin className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-neutral-900 mb-2">Operasyon bulunamadı</h3>
              <p className="text-neutral-600">Arama kriterlerinize uygun operasyon bulunamadı.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Operations;