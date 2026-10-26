/**
 * HisabBot Landing Page Configuration
 * 
 * Update these URLs and values before final production launch.
 */
const IS_LOCAL = typeof window !== 'undefined' && 
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.hostname.startsWith('192.168.'));

export const CONFIG = {
  // APK Download Configuration
  // Uses local bundled APK on localhost / LAN, and GitHub Release CDN for production (bypassing Cloudflare Pages 25MB asset limit)
  APK_DOWNLOAD_URL: IS_LOCAL 
    ? '/dokan-voice.apk' 
    : 'https://github.com/rajonu/hisab-landing/releases/download/v1.0.0-beta/dokan-voice.apk',
    
  APK_VERSION: 'v1.0.0-beta',
  APK_SIZE: '27.0 MB',
  APK_RELEASE_DATE: '২৬ অক্টোবর ২০২৬',
  APK_RELEASE_DATE_EN: 'October 26, 2026',
  MIN_ANDROID_VERSION: 'Android 8.0 (Oreo) বা তার উপরে',
  MIN_ANDROID_VERSION_EN: 'Android 8.0 (Oreo) or higher',

  // Official App Store URLs (Keep null until published to show "Coming soon" state)
  GOOGLE_PLAY_URL: null,
  APP_STORE_URL: null,

  // QR Code Target URL
  // Uses custom domain if on production, or current window location
  QR_TARGET_URL: IS_LOCAL ? null : 'https://hisab.kothabot.ai.bd',

  // Support & Contact Channels
  SUPPORT_EMAIL: 'support@kothabot.ai',
  SUPPORT_WHATSAPP: 'https://wa.me/8801700000000',
  ORGANIZATION_NAME: 'KothaBot',
  PRODUCT_NAME_BN: 'হিসাববট',
  PRODUCT_NAME_EN: 'HisabBot',

  // Prototype Disclaimer Note
  IS_PROTOTYPE: true,
};
