import { useNavigate } from 'react-router-dom';
import {
  HeartHandshake,
  Users,
  Award,
  Calendar,
  TrendingUp,
  Bell,
  Settings,
  User,
  ChevronRight,
  MapPin,
  Clock,
  CheckCircle,
  Star,
  Target,
  Activity
} from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  const quickActions = [
    {
      icon: HeartHandshake,
      title: 'Bağış Yap',
      description: 'Topluma destek olun',
      path: '/donation',
      gradient: 'from-primary to-primary/80',
      bgColor: 'bg-gradient-to-br from-primary/10 to-primary/5',
      iconColor: 'text-primary'
    },
    {
      icon: Users,
      title: 'Görevler',
      description: 'Katılabileceğiniz aktiviteler',
      path: '/tasks',
      gradient: 'from-secondary to-secondary/80',
      bgColor: 'bg-gradient-to-br from-secondary/10 to-secondary/5',
      iconColor: 'text-secondary'
    },
    {
      icon: Award,
      title: 'Sertifikalar',
      description: 'Kazandığınız belgeler',
      path: '/certificates',
      gradient: 'from-primary to-primary/80',
      bgColor: 'bg-gradient-to-br from-primary/10 to-primary/5',
      iconColor: 'text-primary'
    },
    {
      icon: Calendar,
      title: 'Etkinlikler',
      description: 'Yaklaşan programlar',
      path: '/events',
      gradient: 'from-secondary to-secondary/80',
      bgColor: 'bg-gradient-to-br from-secondary/10 to-secondary/5',
      iconColor: 'text-secondary'
    },
    {
      icon: Bell,
      title: 'Haberler',
      description: 'Dernek duyuruları ve haberleri',
      path: '/news',
      gradient: 'from-purple-500 to-purple-600',
      bgColor: 'bg-gradient-to-br from-purple-500/10 to-purple-500/5',
      iconColor: 'text-purple-600'
    },
    {
      icon: MapPin,
      title: 'Operasyonlar',
      description: 'Aktif acil durum operasyonları',
      path: '/operations',
      gradient: 'from-red-500 to-red-600',
      bgColor: 'bg-gradient-to-br from-red-500/10 to-red-500/5',
      iconColor: 'text-red-600'
    }
  ];

  const upcomingEvents = [
    {
      title: 'İlk Yardım Eğitimi',
      date: '15 Aralık 2024',
      time: '14:00',
      location: 'Tulpars Derneği Binası',
      type: 'Eğitim',
      participants: 25,
      capacity: 30,
      urgency: 'high'
    },
    {
      title: 'Gıda Dağıtım Etkinliği',
      date: '20 Aralık 2024',
      time: '10:00',
      location: 'Şehitlik Mahallesi',
      type: 'Yardım',
      participants: 15,
      capacity: 25,
      urgency: 'medium'
    }
  ];

  const stats = [
    {
      label: 'Katıldığınız Görev',
      value: '12',
      icon: CheckCircle,
      change: '+2',
      changeType: 'positive',
      bgColor: 'bg-gradient-to-br from-green-500/10 to-green-500/5',
      iconColor: 'text-green-600'
    },
    {
      label: 'Toplam Saat',
      value: '48',
      icon: Clock,
      change: '+8',
      changeType: 'positive',
      bgColor: 'bg-gradient-to-br from-blue-500/10 to-blue-500/5',
      iconColor: 'text-blue-600'
    },
    {
      label: 'Aktif Etkinlik',
      value: '3',
      icon: Activity,
      change: 'Yeni',
      changeType: 'neutral',
      bgColor: 'bg-gradient-to-br from-purple-500/10 to-purple-500/5',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
      {/* Enhanced Header with Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

        {/* Header */}
        <div className="relative bg-white/80 backdrop-blur-sm border-b border-neutral-200/50 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-neutral-900">Merhaba! 👋</h1>
                <p className="text-neutral-600">Tulpars Derneği'ne hoş geldiniz</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigate('/notifications')}
                  className="relative p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors"
                >
                  <Bell className="w-6 h-6" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <button
                  onClick={() => navigate('/settings')}
                  className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors"
                >
                  <Settings className="w-6 h-6" />
                </button>
                <button
                  onClick={() => navigate('/profile')}
                  className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors"
                >
                  <User className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Welcome Section */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-gradient-to-r from-primary/10 via-white to-secondary/10 rounded-2xl p-6 border border-neutral-200/50 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-neutral-900 mb-1">Bugün nasılsınız?</h2>
                <p className="text-neutral-600 text-sm">Topluma katkıda bulunmaya hazır mısınız?</p>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 space-y-6">
        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.bgColor} rounded-xl p-4 border border-neutral-200/50 shadow-sm hover:shadow-md transition-shadow`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-white/50 ${stat.iconColor}`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-neutral-900">{stat.value}</p>
                    <p className="text-xs text-neutral-600">{stat.label}</p>
                  </div>
                </div>
                <div className={`text-xs px-2 py-1 rounded-full ${
                  stat.changeType === 'positive'
                    ? 'bg-green-100 text-green-700'
                    : stat.changeType === 'negative'
                    ? 'bg-red-100 text-red-700'
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {stat.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Quick Actions */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-neutral-900">Hızlı İşlemler</h2>
            <button className="text-primary hover:text-primary/80 text-sm font-medium">
              Tümünü Gör →
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => navigate(action.path)}
                className={`${action.bgColor} p-5 rounded-xl border border-neutral-200/50 hover:shadow-md transition-all duration-200 text-left group`}
              >
                <div className={`inline-flex p-3 rounded-xl mb-4 bg-gradient-to-br ${action.gradient} text-white shadow-sm group-hover:scale-110 transition-transform`}>
                  <action.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">{action.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{action.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Upcoming Events */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-neutral-900">Yaklaşan Etkinlikler</h2>
            <button
              onClick={() => navigate('/events')}
              className="text-primary hover:text-primary/80 font-medium flex items-center gap-1 text-sm"
            >
              Tümünü Gör
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-neutral-200/50 shadow-sm hover:shadow-md transition-all duration-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`p-3 rounded-xl ${
                      event.urgency === 'high'
                        ? 'bg-gradient-to-br from-red-500/10 to-red-500/5 text-red-600'
                        : event.urgency === 'medium'
                        ? 'bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 text-yellow-600'
                        : 'bg-gradient-to-br from-green-500/10 to-green-500/5 text-green-600'
                    }`}>
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-neutral-900 mb-2">{event.title}</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                        <div className="flex items-center gap-2 text-neutral-600">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-600">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-600">
                          <MapPin className="w-4 h-4" />
                          <span className="truncate">{event.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            event.type === 'Eğitim'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-green-100 text-green-700'
                          }`}>
                            {event.type}
                          </span>
                          <span className="text-xs text-neutral-500">
                            {event.participants}/{event.capacity} kişi
                          </span>
                        </div>
                        <div className={`w-2 h-2 rounded-full ${
                          event.urgency === 'high'
                            ? 'bg-red-500'
                            : event.urgency === 'medium'
                            ? 'bg-yellow-500'
                            : 'bg-green-500'
                        }`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Motivational Section */}
        <div className="relative overflow-hidden">
          <div className="bg-gradient-to-r from-primary/10 via-white to-secondary/10 rounded-2xl p-6 border border-neutral-200/50 shadow-sm">
            <div className="relative">
              <div className="absolute -top-2 -left-2 text-4xl opacity-20">"</div>
              <div className="text-center px-4">
                <p className="text-lg font-medium text-neutral-900 mb-3 leading-relaxed">
                  "Bir insanın hayatına dokunan, aslında tüm insanlığa dokunmuştur."
                </p>
                <p className="text-sm text-neutral-600 font-medium">- Tulpars Derneği</p>
              </div>
              <div className="absolute -bottom-6 -right-2 text-4xl opacity-20 rotate-180">"</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 text-white shadow-lg">
          <div className="text-center">
            <Target className="w-8 h-8 mx-auto mb-3 opacity-90" />
            <h3 className="text-lg font-semibold mb-2">Hazır mısınız?</h3>
            <p className="text-white/90 text-sm mb-4">Bugün bir fark yaratın</p>
            <button
              onClick={() => navigate('/tasks')}
              className="bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors shadow-sm"
            >
              Görevlere Göz At
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;