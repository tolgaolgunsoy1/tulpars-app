# Tulpars App - Bağış Yönetim Sistemi

[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
[![Capacitor](https://img.shields.io/badge/Capacitor-6.2.1-blue.svg)](https://capacitorjs.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.18-blue.svg)](https://tailwindcss.com/)
[![Jest](https://img.shields.io/badge/Jest-Testing-green.svg)](https://jestjs.io/)

Tulpars Derneği için geliştirilmiş modern, responsive mobil uygulama. React 19, Capacitor ve Tailwind CSS ile geliştirilmiştir.

## 🚀 Özellikler

### ✅ Tamamlanan Özellikler

#### 1. **Bağış Yönetim Sistemi**
- Çoklu tutar seçenekleri (50, 100, 250, 500 TL)
- Özel tutar girişi
- Tek seferlik ve aylık düzenli bağış seçenekleri
- Güvenli ödeme formu (demo modunda)
- SSL güvenlik göstergesi
- Profesyonel kullanıcı arayüzü

#### 2. **Kullanıcı Profil Sistemi**
- Profil fotoğrafı yönetimi
- İstatistik kartları (görevler, eğitim saatleri)
- Kişisel bilgiler düzenleme
- Sertifikalar ve yetkinlikler

#### 3. **Gelişmiş Navigasyon**
- Ana menü (Görevler, Sertifikalar, Etkinlikler, Haberler, Operasyonlar)
- Ayarlar menüsü
- Geri bildirim sistemi
- Duyurular ve bildirimler

#### 4. **Güvenlik ve Kimlik Doğrulama**
- Güvenli giriş sistemi
- Context-based authentication
- localStorage ile oturum yönetimi
- Korumalı rotalar

#### 5. **Responsive Tasarım**
- Mobil öncelikli tasarım
- Tailwind CSS ile modern UI
- Karanlık tema desteği
- Erişilebilirlik odaklı

## 🛠️ Teknoloji Stack

- **Frontend Framework:** React 19.2.0
- **Build Tool:** Vite 7.2.4
- **Styling:** Tailwind CSS 3.4.18
- **Mobile Framework:** Capacitor 6.2.1
- **Icons:** Lucide React
- **Routing:** React Router DOM 7.10.0
- **Testing:** Jest + React Testing Library
- **State Management:** React Context API

## 📦 Kurulum

### Ön Gereksinimler

- Node.js 18+
- npm veya yarn
- Android Studio (Android APK için)
- Xcode (iOS için)

### Kurulum Adımları

```bash
# Projeyi klonlayın
git clone <repository-url>
cd tulpars-app

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev

# Production build
npm run build
```

## 📱 Mobil APK Oluşturma

### Android APK

```bash
# Web uygulamasını build edin
npm run build

# Android platformunu hazırlayın
npm run build:mobile

# Veya adım adım:
npm run build
npx cap copy android
npx cap sync android
cd android
./gradlew assembleDebug
```

**APK Konumu:** `android/app/build/outputs/apk/debug/app-debug.apk`

### iOS Build

```bash
# iOS platformunu ekleyin
npx cap add ios

# Build ve sync
npm run build
npx cap copy ios
npx cap sync ios

# Xcode'da açın
npx cap open ios
```

## 🧪 Test

```bash
# Tüm testleri çalıştırın
npm test

# Test coverage ile
npm run test:coverage

# Watch mode
npm run test:watch
```

## 🎨 Tasarım

### Renk Paleti
- **Primary (Turuncu):** #FF8C00 - Aksiyon butonları için
- **Secondary (Mavi):** #2D68C4 - Düzenli bağışlar için
- **Accent:** Salmon (#F88379), Navy (#00356B)
- **Neutral:** Gri tonları (#FAFAFA - #171717)

### Tipografi
- **Font Family:** Inter
- **Tasarım Dili:** Modern, profesyonel, güvenilir

## 📂 Proje Yapısı

```
tulpars-app/
├── src/
│   ├── components/          # React bileşenleri
│   │   ├── Auth.jsx        # Giriş/Kayıt
│   │   ├── Home.jsx        # Ana sayfa
│   │   ├── Settings.jsx    # Ayarlar
│   │   ├── DonationForm.jsx # Bağış formu
│   │   └── ...
│   ├── contexts/           # React Context'ler
│   │   └── AuthContext.jsx # Kimlik doğrulama
│   ├── App.jsx             # Ana uygulama
│   ├── main.jsx            # Giriş noktası
│   └── setupTests.js       # Test kurulumu
├── android/                # Android projesi
├── ios/                   # iOS projesi
├── dist/                  # Build çıktısı
└── package.json
```

## 🔐 Güvenlik

- SSL/TLS şifreleme desteği
- Güvenli ödeme formu (demo)
- 256-bit şifreleme göstergesi
- Context-based authentication
- Input validation ve sanitization

## 📈 Performans

- Lazy loading ile kod bölme
- Vite ile optimized build
- esbuild minification
- Tree shaking
- Service worker desteği (gelecek)

## 🐛 Bilinen Sorunlar

- Demo modunda gerçek ödeme entegrasyonu yok
- iOS build sadece Xcode ile test edilebilir
- Karanlık tema henüz implement edilmedi

## 🚀 Gelecek Özellikler

- [ ] Gerçek payment gateway entegrasyonu
- [ ] Push notification desteği
- [ ] Offline mode
- [ ] Karanlık tema
- [ ] Çoklu dil desteği
- [ ] PWA özelliği

## 👥 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje Tulpars Derneği için geliştirilmiştir.

## 📞 İletişim

**Tulpars Derneği**
- Web: [tulpars.org](https://tulpars.org)
- E-posta: info@tulpars.org

## 🙏 Teşekkürler

Bu projede emeği geçen tüm geliştiricilere teşekkür ederiz. Topluma hizmet etmek için geliştirilen bu uygulama, bağışçıların ve gönüllülerin hayatını kolaylaştırmayı amaçlamaktadır.