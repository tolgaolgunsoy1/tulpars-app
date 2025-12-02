import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  AlertTriangle,
  Heart,
  Phone,
  MapPin,
  Users,
  ChevronDown,
  ChevronRight,
  Search,
  BookOpen,
  Zap
} from 'lucide-react';

function EmergencyGuide() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState(new Set());

  const emergencyGuides = [
    {
      id: 1,
      title: 'Temel İlk Yardım',
      category: 'firstaid',
      priority: 'high',
      icon: Heart,
      summary: 'Acil durumlarda uygulanacak temel müdahale teknikleri',
      content: {
        steps: [
          'Hasta/yaralıya yaklaşırken güvenliğinizi sağlayın',
          'Hastanın bilinç durumunu kontrol edin',
          '112 acil servisi arayın',
          'Temel yaşam desteği uygulayın (varsa)',
          'Kanamayı durdurun',
          'Şok pozisyonu uygulayın'
        ],
        contacts: ['112 - Acil Yardım', '155 - Polis', '110 - İtfaiye'],
        warnings: [
          'Elektrik çarpması durumunda doğrudan müdahale etmeyin',
          'Zehirlenme durumunda kusturmaya çalışmayın',
          'Omurga yaralanması şüphesinde hareket ettirmeyin'
        ]
      }
    },
    {
      id: 2,
      title: 'Kalp Masajı ve Sunî Solunum',
      category: 'cpr',
      priority: 'high',
      icon: Heart,
      summary: 'Yetişkin, çocuk ve bebeklerde CPR uygulaması',
      content: {
        steps: [
          'Hastayı sırt üstü yatırın',
          'Göğüs kafesinin ortasına 5 cm derinlikte 30 kez basın',
          'Başını geriye doğru yatırarak ağzını açın',
          '2 kez sunî solunum verin',
          '30:2 oranında devam edin'
        ],
        contacts: ['112 - Acil Yardım'],
        warnings: [
          'Kaburga kırılması riski vardır',
          'Ağız içi yabancı cisim varsa temizleyin',
          'Hamilelerde farklı pozisyon uygulanabilir'
        ]
      }
    },
    {
      id: 3,
      title: 'Kanama Kontrolü',
      category: 'bleeding',
      priority: 'high',
      icon: AlertTriangle,
      summary: 'Farklı tip kanamalarda uygulanacak müdahaleler',
      content: {
        steps: [
          'Eldiven giyin (mümkünse)',
          'Kanamayı durdurmak için baskı uygulayın',
          'Yarayı temiz gazlı bezle örtün',
          'Sıkıca sarın',
          'Yaralı uzuvu kalp seviyesinden yukarıda tutun'
        ],
        contacts: ['112 - Acil Yardım'],
        warnings: [
          'Turnike sadece son çare olarak uygulanır',
          'Soğuk uygulama ile kanamayı yavaşlatın',
          'Derin yaralarda doku görünüyorsa dokunmayın'
        ]
      }
    },
    {
      id: 4,
      title: 'Zehirlenme Durumları',
      category: 'poisoning',
      priority: 'medium',
      icon: AlertTriangle,
      summary: 'Farklı zehirlenme türlerinde müdahale yöntemleri',
      content: {
        steps: [
          'Zehir maddesini belirleyin',
          'Hastayı sakinleştirin',
          'Zehrin cinsine göre müdahale edin',
          'Bol su verin (asit/baz zehirlenmesinde dikkat)',
          'Kusturma işlemi sadece uzman önerisiyle'
        ],
        contacts: ['112 - Acil Yardım', '114 - Zehir Danışma'],
        warnings: [
          'Kusturma işlemi tehlikeli olabilir',
          'Süt ve yumurta akı bazı zehirleri bağlar',
          'Asit zehirlenmesinde su vermeyin'
        ]
      }
    },
    {
      id: 5,
      title: 'Yanık ve Donma',
      category: 'burns',
      priority: 'medium',
      icon: AlertTriangle,
      summary: 'Termal ve kimyasal yanıklarla donma vakalarında müdahale',
      content: {
        steps: [
          'Yanık alanını soğuk su altında tutun',
          'Kıyafetleri yavaşça çıkarın',
          'Yanık alanını steril örtüyle kapatın',
          'Ağrı kesici verin',
          'Donmada ısıtma işlemi yavaş olsun'
        ],
        contacts: ['112 - Acil Yardım'],
        warnings: [
          'Buz uygulamayın (donma hariç)',
          'Yanık kabarcıklarını patlatmayın',
          'Kimyasal yanıkta su ile yıkayın'
        ]
      }
    },
    {
      id: 6,
      title: 'Kırık ve Çıkık',
      category: 'fractures',
      priority: 'medium',
      icon: AlertTriangle,
      summary: 'Kemik kırıkları ve eklem çıkıklarında ilk müdahale',
      content: {
        steps: [
          'Hareket ettirmeden sabitleştirin',
          'Ağrı kesici verin',
          'Soğuk uygulama yapın',
          'Şişliği azaltmak için yüksekte tutun',
          'Splint uygulayın'
        ],
        contacts: ['112 - Acil Yardım'],
        warnings: [
          'Kırık kemikleri hareket ettirmeyin',
          'Açık kırıkta dokuya dokunmayın',
          'Omurga kırığı şüphesinde çok dikkatli olun'
        ]
      }
    }
  ];

  const categories = [
    { value: 'all', label: 'Tümü', icon: BookOpen },
    { value: 'firstaid', label: 'İlk Yardım', icon: Heart },
    { value: 'cpr', label: 'CPR', icon: Heart },
    { value: 'bleeding', label: 'Kanama', icon: AlertTriangle },
    { value: 'poisoning', label: 'Zehirlenme', icon: AlertTriangle },
    { value: 'burns', label: 'Yanık/Donma', icon: AlertTriangle },
    { value: 'fractures', label: 'Kırık/Çıkık', icon: AlertTriangle }
  ];

  const filteredGuides = emergencyGuides.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || guide.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleExpanded = (id) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
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
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 text-neutral-600 hover:text-neutral-900"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-primary" />
              <h1 className="text-xl font-bold text-neutral-900">Acil Durum Rehberi</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Emergency Contact */}
        <div className="card bg-red-50 border-red-200">
          <div className="flex items-center gap-3 mb-3">
            <Phone className="w-6 h-6 text-red-600" />
            <h3 className="font-semibold text-red-900">Acil Durum Numaraları</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-white p-3 rounded-lg text-center">
              <div className="text-2xl font-bold text-red-600">112</div>
              <div className="text-sm text-neutral-600">Acil Yardım</div>
            </div>
            <div className="bg-white p-3 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">155</div>
              <div className="text-sm text-neutral-600">Polis</div>
            </div>
            <div className="bg-white p-3 rounded-lg text-center">
              <div className="text-2xl font-bold text-orange-600">110</div>
              <div className="text-sm text-neutral-600">İtfaiye</div>
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
                placeholder="Rehber ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.value}
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
          </div>
        </div>

        {/* Guide Items */}
        <div className="space-y-4">
          {filteredGuides.map((guide) => {
            const Icon = guide.icon;
            const isExpanded = expandedItems.has(guide.id);

            return (
              <div key={guide.id} className="card hover:shadow-lg transition-all">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleExpanded(guide.id)}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`p-3 rounded-full ${
                      guide.priority === 'high' ? 'bg-red-100 text-red-600' :
                      guide.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-neutral-900">{guide.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(guide.priority)}`}>
                          {guide.priority === 'high' ? 'Kritik' :
                           guide.priority === 'medium' ? 'Önemli' : 'Bilgilendirme'}
                        </span>
                      </div>
                      <p className="text-neutral-600 text-sm">{guide.summary}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5 text-neutral-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-neutral-400" />
                    )}
                  </div>
                </div>

                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-neutral-200 space-y-4">
                    {/* Steps */}
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                        <Zap className="w-4 h-4" />
                        Uygulama Adımları
                      </h4>
                      <ol className="list-decimal list-inside space-y-1 text-neutral-700 text-sm">
                        {guide.content.steps.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ol>
                    </div>

                    {/* Emergency Contacts */}
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        İletişim
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {guide.content.contacts.map((contact, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                            {contact}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Warnings */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <h4 className="font-semibold text-yellow-900 mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        Dikkat Edilmesi Gerekenler
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-yellow-800 text-sm">
                        {guide.content.warnings.map((warning, index) => (
                          <li key={index}>{warning}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredGuides.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-neutral-900 mb-2">Rehber bulunamadı</h3>
              <p className="text-neutral-600">Arama kriterlerinize uygun acil durum rehberi bulunamadı.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EmergencyGuide;