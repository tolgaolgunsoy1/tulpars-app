import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Bell,
  Calendar,
  Users,
  Award,
  HeartHandshake,
  Trash2,
  Settings,
  CheckCircle,
  Clock
} from 'lucide-react';

function Notifications() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'event',
      title: 'Yeni Etkinlik: İlk Yardım Eğitimi',
      message: '15 Aralık\'ta gerçekleşecek olan İlk Yardım Eğitimi\'ne kaydolabilirsiniz.',
      time: '2 saat önce',
      read: false,
      icon: Calendar,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      id: 2,
      type: 'task',
      title: 'Görev Tamamlandı',
      message: 'Gıda Paketleme görevinizi başarıyla tamamladınız. Teşekkür ederiz!',
      time: '5 saat önce',
      read: false,
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      id: 3,
      type: 'certificate',
      title: 'Yeni Sertifika Kazandınız',
      message: 'İlk Yardım Sertifikası başarıyla hesabınıza eklendi.',
      time: '1 gün önce',
      read: true,
      icon: Award,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      id: 4,
      type: 'system',
      title: 'Haftalık Özet',
      message: 'Bu hafta 3 görev tamamladınız ve 12 saat gönüllü hizmet verdiniz.',
      time: '2 gün önce',
      read: true,
      icon: HeartHandshake,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      id: 5,
      type: 'reminder',
      title: 'Hatırlatma: Etkinlik Başlıyor',
      message: 'Gıda Dağıtım Etkinliği 10:00\'da başlıyor. Hazır olun!',
      time: '3 gün önce',
      read: true,
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ]);

  const markAsRead = (id) => {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const getTypeLabel = (type) => {
    switch (type) {
      case 'event': return 'Etkinlik';
      case 'task': return 'Görev';
      case 'certificate': return 'Sertifika';
      case 'system': return 'Sistem';
      case 'reminder': return 'Hatırlatma';
      default: return 'Bildirim';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
      {/* Enhanced Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-neutral-200/50 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate(-1)}
                className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Bell className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-neutral-900">Bildirimler</h1>
                  {unreadCount > 0 && (
                    <p className="text-sm text-neutral-600">{unreadCount} okunmamış</p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="px-4 py-2 text-sm bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Tümünü Oku
                </button>
              )}
              <button
                onClick={() => navigate('/settings')}
                className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors"
              >
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {notifications.length === 0 ? (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-100 rounded-full mb-4">
              <Bell className="w-8 h-8 text-neutral-400" />
            </div>
            <h3 className="text-lg font-medium text-neutral-900 mb-2">Bildirim Yok</h3>
            <p className="text-neutral-600">Yeni bildirimleriniz burada görünecek.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`bg-white/80 backdrop-blur-sm rounded-xl border shadow-sm transition-all duration-200 ${
                  notification.read
                    ? 'border-neutral-200/50 opacity-75'
                    : 'border-primary/20 shadow-md'
                }`}
              >
                <div className="p-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${notification.bgColor} flex-shrink-0`}>
                      <notification.icon className={`w-5 h-5 ${notification.color}`} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className={`font-semibold ${
                              notification.read ? 'text-neutral-700' : 'text-neutral-900'
                            }`}>
                              {notification.title}
                            </h3>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            )}
                          </div>

                          <p className={`text-sm mb-2 ${
                            notification.read ? 'text-neutral-600' : 'text-neutral-700'
                          }`}>
                            {notification.message}
                          </p>

                          <div className="flex items-center gap-3">
                            <span className="text-xs text-neutral-500">{notification.time}</span>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              notification.type === 'event' ? 'bg-blue-100 text-blue-700' :
                              notification.type === 'task' ? 'bg-green-100 text-green-700' :
                              notification.type === 'certificate' ? 'bg-purple-100 text-purple-700' :
                              notification.type === 'system' ? 'bg-primary/10 text-primary' :
                              'bg-orange-100 text-orange-700'
                            }`}>
                              {getTypeLabel(notification.type)}
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => deleteNotification(notification.id)}
                          className="p-2 text-neutral-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {!notification.read && (
                    <div className="mt-3 pt-3 border-t border-neutral-100">
                      <button
                        onClick={() => markAsRead(notification.id)}
                        className="text-sm text-primary hover:text-primary/80 font-medium"
                      >
                        Okundu olarak işaretle
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Notification Settings Hint */}
        <div className="mt-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-4 border border-neutral-200/50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Settings className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-neutral-900 mb-1">Bildirim Ayarları</h4>
              <p className="text-sm text-neutral-600">Bildirim tercihlerinizi ayarlamak için ayarlar sayfasına gidin.</p>
            </div>
            <button
              onClick={() => navigate('/settings')}
              className="px-4 py-2 bg-primary text-white text-sm rounded-lg hover:bg-primary/90 transition-colors"
            >
              Ayarlar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;