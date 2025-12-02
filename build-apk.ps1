# Tulpars App - APK Build Script
# Bu script APK oluşturma sürecini otomatikleştirir

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "Tulpars App - APK Build Script" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Gerekli programları kontrol et
Write-Host "Gereksinimler kontrol ediliyor..." -ForegroundColor Yellow

# Node.js kontrolü
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Node.js bulunamadı! Lütfen Node.js yükleyin." -ForegroundColor Red
    exit 1
}

# Java kontrolü
try {
    $javaVersion = java -version 2>&1 | Select-Object -First 1
    Write-Host "✓ Java: $javaVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Java bulunamadı! Lütfen JDK 17+ yükleyin." -ForegroundColor Red
    Write-Host "  İndirme: https://adoptium.net/" -ForegroundColor Yellow
    exit 1
}

# ANDROID_HOME kontrolü
if ($env:ANDROID_HOME) {
    Write-Host "✓ ANDROID_HOME: $env:ANDROID_HOME" -ForegroundColor Green
} else {
    Write-Host "✗ ANDROID_HOME ayarlanmamış!" -ForegroundColor Red
    Write-Host "  Lütfen Android Studio'yu yükleyin ve ANDROID_HOME değişkenini ayarlayın." -ForegroundColor Yellow
    Write-Host "  Örnek: C:\Users\<KULLANICI>\AppData\Local\Android\Sdk" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "Build Süreci Başlıyor..." -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# 1. Web uygulamasını build et
Write-Host "1. Web uygulaması build ediliyor..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ Build başarısız!" -ForegroundColor Red
    exit 1
}
Write-Host "✓ Web build tamamlandı" -ForegroundColor Green
Write-Host ""

# 2. Android platformunu kontrol et ve ekle
Write-Host "2. Android platformu kontrol ediliyor..." -ForegroundColor Yellow
if (Test-Path "android") {
    Write-Host "✓ Android platformu mevcut" -ForegroundColor Green
} else {
    Write-Host "Android platformu ekleniyor..." -ForegroundColor Yellow
    npx cap add android
    if ($LASTEXITCODE -ne 0) {
        Write-Host "✗ Android platformu eklenemedi!" -ForegroundColor Red
        exit 1
    }
    Write-Host "✓ Android platformu eklendi" -ForegroundColor Green
}
Write-Host ""

# 3. Capacitor sync
Write-Host "3. Capacitor senkronizasyonu yapılıyor..." -ForegroundColor Yellow
npx cap sync android
if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ Senkronizasyon başarısız!" -ForegroundColor Red
    exit 1
}
Write-Host "✓ Senkronizasyon tamamlandı" -ForegroundColor Green
Write-Host ""

# 4. Kullanıcıya seçenek sun
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "Sonraki Adım" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Android Studio'da projeyi açmak için:" -ForegroundColor Yellow
Write-Host "  npm run android:open" -ForegroundColor White
Write-Host ""
Write-Host "Android Studio'da APK oluşturmak için:" -ForegroundColor Yellow
Write-Host "  Build > Build Bundle(s) / APK(s) > Build APK(s)" -ForegroundColor White
Write-Host ""
Write-Host "APK konumu:" -ForegroundColor Yellow
Write-Host "  android\app\build\outputs\apk\debug\app-debug.apk" -ForegroundColor White
Write-Host ""

$openStudio = Read-Host "Android Studio'yu şimdi açmak ister misiniz? (E/H)"
if ($openStudio -eq "E" -or $openStudio -eq "e") {
    Write-Host "Android Studio açılıyor..." -ForegroundColor Yellow
    npx cap open android
}

Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "İşlem Tamamlandı!" -ForegroundColor Green
Write-Host "==================================" -ForegroundColor Cyan