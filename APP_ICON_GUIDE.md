# Uygulama İkonu Rehberi

## Android İkon Boyutları

APK oluşturmadan önce uygulama ikonlarını hazırlamanız gerekir.

### Gerekli İkon Boyutları

Android için aşağıdaki boyutlarda ikonlar oluşturun:

- **mdpi:** 48x48 px
- **hdpi:** 72x72 px
- **xhdpi:** 96x96 px
- **xxhdpi:** 144x144 px
- **xxxhdpi:** 192x192 px

### İkon Yerleştirme

İkonları şu klasörlere yerleştirin:

```
android/app/src/main/res/
├── mipmap-mdpi/ic_launcher.png (48x48)
├── mipmap-hdpi/ic_launcher.png (72x72)
├── mipmap-xhdpi/ic_launcher.png (96x96)
├── mipmap-xxhdpi/ic_launcher.png (144x144)
└── mipmap-xxxhdpi/ic_launcher.png (192x192)
```

### Adaptive Icon (Android 8.0+)

Modern Android için adaptive icon da oluşturmalısınız:

```
android/app/src/main/res/
├── mipmap-mdpi/ic_launcher_foreground.png
├── mipmap-hdpi/ic_launcher_foreground.png
├── mipmap-xhdpi/ic_launcher_foreground.png
├── mipmap-xxhdpi/ic_launcher_foreground.png
└── mipmap-xxxhdpi/ic_launcher_foreground.png
```

### Online Araçlar

İkonları otomatik oluşturmak için:

1. **Android Asset Studio:** https://romannurik.github.io/AndroidAssetStudio/
2. **App Icon Generator:** https://www.appicon.co/
3. **Icon Kitchen:** https://icon.kitchen/

### Tasarım Önerileri

- Tulpars logosunu kullanın
- Turuncu (#FF8C00) ve mavi (#2D68C4) renkleri kullanın
- Basit ve tanınabilir olsun
- Şeffaf arka plan kullanmayın (Android için)
- Köşeleri yuvarlak yapmayın (sistem otomatik yapar)

### Splash Screen (Açılış Ekranı)

Capacitor için splash screen eklemek isterseniz:

```bash
npm install @capacitor/splash-screen
```

Splash screen resimleri:
- **drawable-land-mdpi:** 480x320
- **drawable-land-hdpi:** 800x480
- **drawable-land-xhdpi:** 1280x720
- **drawable-land-xxhdpi:** 1600x960
- **drawable-land-xxxhdpi:** 1920x1280