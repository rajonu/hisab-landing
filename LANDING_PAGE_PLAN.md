# HisabBot Landing Page Plan

## Goal

Help a shopkeeper quickly understand what HisabBot does, trust that entries are reviewed before saving, and download the Android prototype to try it. The page should serve Bangla-first users while offering a complete English version.

## Audience and message

**Audience:** Bangladesh small-shop owners who keep customer dues and payments in a paper khata.

**Primary message (Bangla):** “কথা বলেই লিখুন বাকি-জমার হিসাব।”

**Primary message (English):** “Keep customer dues and payments by speaking.”

Supporting idea: speak a transaction, check what the app understood, then confirm before saving. Manual entry remains available when offline.

Avoid claiming the app replaces accounting/POS systems, guarantees accuracy, works offline for voice AI, or is already published in either store.

## Visual direction

- Mobile-first; single-column hero on phones and balanced two-column hero on desktop.
- Derive accent colors from `app/src/main/res/drawable/ic_hisabbot_logo.png` after visual inspection. Use warm off-white surfaces, dark readable text, and one strong brand accent; avoid generic SaaS gradients.
- Show the real logo prominently and use genuine app screenshots once supplied. Until then, use a clearly labeled product-preview placeholder rather than invented UI screenshots.
- Large, high-contrast download button; thumb-friendly controls; compact sticky mobile download CTA is optional.
- Clear Bangla typography with fallback support and no clipped Bengali glyphs.

## Page layout / copy outline

1. **Header:** logo + HisabBot / হিসাববট; বাংলা | English toggle; “অ্যাপ ডাউনলোড” CTA.
2. **Hero:** headline above; concise description; primary “APK ডাউনলোড করে টেস্ট করুন” CTA (configurable URL); secondary “QR স্ক্যান করুন”; app preview or real phone screenshot.
3. **Trust note:** “প্রোটোটাইপ / পরীক্ষামূলক সংস্করণ”—tell visitors to review entries and keep a backup of important records.
4. **Problem → benefit:** less typing for shopkeepers; quickly record customer credit and payment; see what will be saved before confirming.
5. **How it works:** (1) speak in Bangla, (2) review customer/type/amount, (3) confirm and save. Note that manual entry works offline; voice interpretation requires internet in current prototype.
6. **Features:** Bangla voice input; credit and payment entries; confirmation step; customer ledger and transaction history only if verified in current APK; offline manual entry. Keep each claim limited to implemented behavior.
7. **Screenshots/demo:** actual APK captures to be added. No fabricated screens.
8. **Download panel:** APK download and QR to the same final HTTPS destination. Google Play and Apple App Store buttons shown as “শিগগিরই / Coming soon” until real listings are published.
9. **FAQ:** Is it free during testing? Android/iPhone availability? Does voice work offline? Can I review before saving? Where is data stored? Answer only verified product behavior; mark beta terms as subject to change.
10. **Footer:** contact, privacy, terms, copyright/brand credit. Use real contact and policy URLs before publication.

## Localization

- Default locale: Bangla (`bn-BD`); English toggle available in header and footer.
- Translate all navigation, buttons, notes, FAQ, metadata, and accessibility labels.
- Do not mix English and Bangla in a paragraph; product names and standard platform names may remain as names.

## Download and QR behavior

Create one configuration source for:

- `APK_DOWNLOAD_URL` — final HTTPS APK URL or redirect.
- `GOOGLE_PLAY_URL` — show active button only after listing is public; otherwise Coming soon.
- `APP_STORE_URL` — show active button only after iOS app is public; otherwise Coming soon.
- `QR_TARGET_URL` — same public HTTPS page/download route, ideally stable across APK updates.
- `CONTACT_URL`, `PRIVACY_URL`, `TERMS_URL`.

Generate a QR only after `QR_TARGET_URL` is final; test it with a phone camera and ensure the target does not expire. The current `public/qr.png` is not presumed to be the right QR.

## Launch checklist

- Confirm final logo asset and inspect all existing brand image assets.
- Add 3–5 real screenshots from the prototype and compress them.
- Upload a signed release APK to a stable HTTPS URL; don't publish a debug APK as a public download.
- Verify permissions, privacy disclosures, hosting and contact links.
- Populate configuration values; test download link and QR from a physical phone.
- Keep store buttons inactive until their official listing URLs are available.
- Test both locales on narrow mobile screens and check Bengali font rendering.
- Only add advertising after deciding placement and consent/tracking behavior.

