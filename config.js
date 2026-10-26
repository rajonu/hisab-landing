/**
 * HisabBot Landing Page Configuration
 * 
 * Update these URLs and values before final production launch.
 */
const IS_LOCAL = typeof window !== 'undefined' && 
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.hostname.startsWith('192.168.'));

export const CONFIG = {
  // APK Download Configuration
  // Points to the auto-updating latest release on dokan-voice GitHub releases:
  // https://github.com/rajonu/dokan-voice/releases/latest/download/hisab-bot.apk
  APK_DOWNLOAD_URL: IS_LOCAL 
    ? '/hisab-bot.apk' 
    : 'https://github.com/rajonu/dokan-voice/releases/latest/download/hisab-bot.apk',
  
  // Specific release link
  APK_RELEASE_LATEST_URL: 'https://github.com/rajonu/dokan-voice/releases/latest/download/hisab-bot.apk',
  APK_LOCAL_WIFI_URL: 'http://192.168.68.78:8080/hisab-bot.apk',
    
  APK_VERSION: 'v1.2.0',
  APK_SIZE: '26.0 MB',
  APK_RELEASE_DATE: '২৬ অক্টোবর ২০২৬',
  APK_RELEASE_DATE_EN: 'October 26, 2026',
  MIN_ANDROID_VERSION: 'Android 8.0 (Oreo) বা তার উপরে',
  MIN_ANDROID_VERSION_EN: 'Android 8.0 (Oreo) or higher',

  // Web Admin Dashboard
  WEB_ADMIN_URL: 'https://hisab-bot-a08cc.web.app',
  WEB_ADMIN_CUSTOM_DOMAIN: 'https://hisab.d4f.me',
  WEB_ADMIN_PIN: '7570',

  // Official App Store URLs (Keep null until published to show "Coming soon" state)
  GOOGLE_PLAY_URL: null,
  APP_STORE_URL: null,

  // QR Code Target URL
  // Uses custom domain on production, or current window location on local
  QR_TARGET_URL: IS_LOCAL ? null : 'https://hisab.kothabot.ai.bd',

  // Support & Contact Channels
  SUPPORT_EMAIL: 'support@kothabot.ai',
  SUPPORT_WHATSAPP: 'https://wa.me/8801581771780',
  ORGANIZATION_NAME: 'KothaBot',
  PRODUCT_NAME_BN: 'হিসাববট',
  PRODUCT_NAME_EN: 'HisabBot',

  // Prototype Disclaimer Note
  IS_PROTOTYPE: true,
};
