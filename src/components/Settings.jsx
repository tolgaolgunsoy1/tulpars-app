import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Bell,
  Moon,
  Globe,
  Shield,
  HelpCircle,
  LogOut,
  ChevronRight,
  Volume2,
  Eye,
  Settings as SettingsIcon,
  HeartHandshake,
  MessageSquare
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

function Settings() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    language: 'tr',
    soundEnabled: true,
    privacyMode: false
  });

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const settingGroups = [
    {
      title: 'Bildirimler',
      items: [
        {
          icon: Bell,
          label: 'Anlık Bildirimler',
          type: 'toggle',
          key: 'notifications'
        },
        {
          icon: Volume2,
          label: 'Ses Bildirimleri',
          type: 'toggle',
          key: 'soundEnabled'
        }
      ]
    },
    {
      title: 'Görünüm',
      items: [
        {
          icon: Moon,
          label: 'Koyu Tema',
          type: 'toggle',
          key: 'darkMode'
        },
        {
          icon: Eye,
          label: 'Gizlilik Modu',
          type: 'toggle',
          key: 'privacyMode'
        }
      ]
    },
    {
      title: 'Genel',
      items: [
        {
          icon: Globe,
          label: 'Dil',
          type: 'select',
          key: 'language',
          options: [
            { value: 'tr', label: 'Türkçe' },
            { value: 'en', label: 'English' }
          ]
        }
      ]
    },
    {
      title: 'Destek',
      items: [
        {
          icon: MessageSquare,
          label: 'Geri Bildirim Gönder',
          type: 'link',
          action: () => navigate('/feedback')
        },
        {
          icon: HelpCircle,
          label: 'Yardım ve Destek',
          type: 'link',
          action: () => navigate('/help')
        },
        {
          icon: Shield,
          label: 'Gizlilik Politikası',
          type: 'link',
          action: () => navigate('/privacy')
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
      {/* Enhanced Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-neutral-200/50 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-full">
                <SettingsIcon className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-xl font-bold text-neutral-900">Ayarlar</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {settingGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-neutral-200/50 overflow-hidden">
            <div className="bg-gradient-to-r from-neutral-50 to-white px-6 py-4 border-b border-neutral-200/50">
              <h2 className="text-lg font-semibold text-neutral-900">{group.title}</h2>
            </div>

            <div className="divide-y divide-neutral-100">
              {group.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center justify-between px-6 py-4 hover:bg-neutral-50/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-neutral-900">{item.label}</span>
                  </div>

                  <div className="flex items-center">
                    {item.type === 'toggle' && (
                      <button
                        onClick={() => handleSettingChange(item.key, !settings[item.key])}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings[item.key] ? 'bg-primary' : 'bg-neutral-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings[item.key] ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    )}

                    {item.type === 'select' && (
                      <select
                        value={settings[item.key]}
                        onChange={(e) => handleSettingChange(item.key, e.target.value)}
                        className="bg-transparent border-0 text-neutral-600 font-medium focus:outline-none"
                      >
                        {item.options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    )}

                    {item.type === 'link' && (
                      <button
                        onClick={item.action}
                        className="text-neutral-400 hover:text-neutral-600 p-2"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Enhanced Account Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-neutral-200/50 overflow-hidden">
          <div className="bg-gradient-to-r from-neutral-50 to-white px-6 py-4 border-b border-neutral-200/50">
            <h2 className="text-lg font-semibold text-neutral-900">Hesap</h2>
          </div>

          <div className="p-6">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-xl hover:from-red-100 hover:to-red-200 transition-all duration-200 text-left group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-red-500/10 text-red-600 group-hover:scale-110 transition-transform">
                  <LogOut className="w-5 h-5" />
                </div>
                <span className="font-semibold text-red-700">Çıkış Yap</span>
              </div>
              <ChevronRight className="w-5 h-5 text-red-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Enhanced App Info */}
        <div className="bg-gradient-to-r from-primary/10 via-white to-secondary/10 rounded-2xl p-6 border border-neutral-200/50 shadow-sm">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl mb-4">
              <HeartHandshake className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-neutral-900 mb-2">Tulpars Derneği</h3>
            <p className="text-sm text-neutral-600 mb-1">Mobil Uygulama v1.0.0</p>
            <p className="text-xs text-neutral-500">❤️ Topluma hizmet etmek için tasarlandı</p>
            <p className="text-xs text-neutral-400 mt-2">© 2024 Tulpars Derneği. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;