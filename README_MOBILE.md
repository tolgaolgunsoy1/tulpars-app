# Tulpars App - Mobil APK Oluşturma Rehberi

## Gereksinimler

APK oluşturmak için aşağıdaki yazılımların yüklü olması gerekir:

1. **Node.js** (zaten yüklü)
2. **Java Development Kit (JDK) 17** veya üzeri
   - İndirme: https://adoptium.net/
3. **Android Studio**
   - İndirme: https://developer.android.com/studio
   - Android SDK'yı yükleyin
4. **Gradle** (Android Studio ile birlikte gelir)

## Android Studio Kurulumu

1. Android Studio'yu indirin ve kurun
2. Android Studio'yu açın ve SDK Manager'ı açın (Tools > SDK Manager)
3. Aşağıdaki bileşenleri yükleyin:
   - Android SDK Platform 34 (veya en son sürüm)
   - Android SDK Build-Tools
   - Android SDK Command-line Tools

## Ortam Değişkenlerini Ayarlama

Windows için PowerShell'de:

\`\`\`powershell
# ANDROID_HOME değişkenini ayarlayın
[System.Environment]::SetEnvironmentVariable("ANDROID_HOME", "C:\Users\<KULLANICI_ADI>\AppData\Local\Android\Sdk", "User")

# JAVA_HOME değişkenini ayarlayın (JDK kurulum yolunuz)
[System.Environment]::SetEnvironmentVariable("JAVA_HOME", "C:\Program Files\Eclipse Adoptium\jdk-17.0.x-hotspot", "User")
\`\`\`

## APK Oluşturma Adımları

### 1. Web Uygulamasını Build Edin

\`\`\`bash
cd tulpars-app
npm run build
\`\`\`

### 2. Android Platformunu Ekleyin

\`\`\`bash
npm run android:add
\`\`\`

### 3. Android Projesini Senkronize Edin

\`\`\`bash
npm run android:sync
\`\`\`

### 4. Android Studio'da Açın

\`\`\`bash
npm run android:open
\`\`\`

### 5. APK Oluşturun

Android Studio'da:
1. **Build** > **Build Bundle(s) / APK(s)** > **Build APK(s)** seçin
2. Build tamamlandığında "locate" linkine tıklayın
3. APK dosyası şu konumda olacak: `android/app/build/outputs/apk/debug/app-debug.apk`

## Release APK (İmzalı APK) Oluşturma

### 1. Keystore Oluşturun

\`\`\`bash
keytool -genkey -v -keystore tulpars-release-key.keystore -alias tulpars -keyalg RSA -keysize 2048 -validity 10000
\`\`\`

### 2. Android Studio'da Release APK Oluşturun

1. **Build** > **Generate Signed Bundle / APK**
2. **APK** seçin
3. Keystore dosyanızı seçin ve şifrenizi girin
4. **release** build variant'ını seçin
5. **Finish**

APK dosyası: `android/app/build/outputs/apk/release/app-release.apk`

## Hızlı Komutlar

\`\`\`bash
# Tüm süreci tek komutta
npm run build && npx cap sync android && npx cap open android

# Sadece senkronizasyon
npm run android:sync

# Android Studio'da aç
npm run android:open

# Emülatörde çalıştır (emülatör açık olmalı)
npm run android:run
\`\`\`

## Sorun Giderme

### "ANDROID_HOME is not set" Hatası
- Ortam değişkenlerini kontrol edin
- PowerShell'i yeniden başlatın

### "Gradle build failed" Hatası
- JDK 17 veya üzeri yüklü olduğundan emin olun
- Android Studio'da Gradle senkronizasyonu yapın

### "SDK location not found" Hatası
- Android Studio'da SDK Manager'dan SDK'yı yükleyin
- `android/local.properties` dosyasını kontrol edin

## Notlar

- Debug APK test için uygundur ancak Google Play Store'a yüklenemez
- Release APK imzalı olmalı ve Google Play Store'a yüklenebilir
- APK boyutu yaklaşık 5-10 MB olacaktır
- İlk build uzun sürebilir (5-10 dakika)

## Daha Fazla Bilgi

- Capacitor Dokümantasyonu: https://capacitorjs.com/docs
- Android Geliştirici Rehberi: https://developer.android.com/