# HisabBot landing page handoff

This folder is reserved for the public HisabBot landing page, separate from the Android app and the existing API prototype. Use a small, responsive static site that can later be deployed to Cloudflare Pages.

## Brand and product direction

- Product brand: **HisabBot (হিসাববট)**, by KothaBot.
- Audience: small Bangladeshi shops currently using a paper khata.
- Positioning: a simple Bangla/English digital khata with voice-assisted credit and payment entry, transaction review before saving, and offline manual entry.
- Tone: warm, trustworthy, simple; avoid claims about perfect AI accuracy, guaranteed security, or features that are not in the ready prototype.
- Use the app's existing logo as the main brand asset: `../app/src/main/res/drawable/ic_hisabbot_logo.png`. Inspect the banner/splash assets before deciding if they belong on the page.

## Page requirements

- One bilingual landing page with a clear Bangla/English toggle (no mixed-language paragraphs).
- Mobile-first, polished and fast; align colors and visual tone with the existing HisabBot logo.
- Sections: navigation, hero and primary download action, product benefit/features, 3-step how-it-works, app screenshots/demo placeholders, download/QR area, FAQ, footer/contact/privacy links.
- Include Google Play and Apple App Store buttons. Until official listings exist, label these as **Coming soon** and don't create fake links. The current Android APK download URL must be configured as a replaceable placeholder before launch.
- QR code should point to the final HTTPS download/landing URL, not a local file or temporary URL. Existing `../public/qr.png` must be inspected before reuse; do not assume it links to the APK.
- Advertisements may be considered later; do not add ad units or tracking until explicitly configured. Keep the layout ad-ready without interrupting the download flow.
- Include basic accessibility, SEO/social metadata, privacy and terms link placeholders, and a visible prototype/beta notice while the app is being tested.

## Current facts and limits

- The ready product is an Android prototype for a voice-first Bangla ledger. Core flow: speak a credit/payment entry, review the interpreted details, confirm/cancel, then save. Manual ledger use is designed to work offline.
- Don't advertise cloud sync/backup, subscription pricing, iOS availability, or release availability as live unless those are actually enabled and verified.
- No final APK URL, Play Store listing, App Store listing, screenshots, contact address, or production QR destination has been supplied yet. Make these configurable and clearly marked.

## Suggested directory structure

```text
landing-page/
  README.md
  LANDING_PAGE_PLAN.md
  assets/
    hisabbot-logo.png
    screenshots/   # add real app screenshots later
  site/            # implementation can be created in a follow-up
```

