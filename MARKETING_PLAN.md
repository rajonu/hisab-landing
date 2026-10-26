# HisabBot — A-to-Z Marketing and Validation Plan

**Plan date:** 26 October 2026  
**Stage:** Working Android prototype; Firebase is configured. Confirm production readiness, privacy/security, voice costs and distribution before inviting shops.

## 1. Recommendation

Use **physical, assisted pilots first**, with online channels supporting trust, follow-up and referrals. Do not begin with broad paid ads.

HisabBot changes a daily habit and asks shopkeepers to trust it with customer dues. A short in-person demonstration lets the team observe how the shopkeeper currently writes a transaction, try one real example, answer installation/privacy questions, and help with the first setup. Online posts and ads can bring awareness, but they cannot by themselves confirm that a shopkeeper understands, trusts and repeatedly uses the app.

Treat this as a hypothesis to test, not as a proven channel result. Start with nearby shops and a narrow shop category, then compare channel cohorts using the same activation and retention measures.

## 2. Product positioning

**One-line Bangla:** “কথা বলুন, বাকি-জমার হিসাব দেখে নিশ্চিত করুন।”

**One-line English:** “Speak, review the entry, and confirm your customer ledger.”

Explain the product in shopkeeper language: it helps record customer dues and payments in a digital khata. The user can review the interpreted transaction and confirm before saving. Manual entry is available offline; voice interpretation needs internet in the current prototype.

Do not claim perfect voice accuracy, guaranteed collection growth, automatic WhatsApp messaging, live iOS availability, published store availability, or cloud backup/sync unless each is verified in the released build.

## 3. Who to test with first

Choose one accessible cluster and a simple shop category, such as neighborhood grocery/convenience shops. Keep the first pilot focused; later test pharmacies, clothing shops or other categories separately because their ledger workflows may differ.

Recruit a mix of:

- shopkeepers who write customer dues in a paper khata;
- owners who personally record most transactions;
- Android users willing to try a prototype;
- people with different comfort levels using apps and Bangla voice input.

Do not recruit only friends or tech-savvy owners. Avoid collecting customer names, phone numbers or real financial amounts for research unless necessary and explicitly consented to. Prefer fictional/sample customers during demos.

## 4. Pilot size and duration

Run an initial usability round with **5 shops**, fix obvious setup/usability problems, then a controlled pilot with **15–25 shops for 3–4 weeks**. This is a practical learning sample, not statistically representative market research. If the early group cannot be supported, start smaller and keep the process identical.

Ask each shopkeeper to use it during normal business for at least 10 business days. Do not judge success from installs alone.

## 5. Recruitment and field routine

1. Pick one compact market area; visit at a quiet time and ask permission to speak for five minutes.
2. Open with a question about their current khata routine; do not start with a sales pitch.
3. Ask how they record a customer taking goods on credit and later paying.
4. Demonstrate using fictional/sample data: speak one transaction, show the recognized name/type/amount, explain confirmation, then save the sample.
5. Let the owner try one sample themselves. Observe silently; note where they hesitate.
6. Explain that this is an early test version, what data is stored and any current limitations. Do not promise perfect accuracy or recovery if backup is not verified.
7. Invite them to the pilot only if they understand and agree. Give a support contact and one-page Bangla quick-start guide.
8. Follow up after day 1, day 3, day 7 and day 14; ask what they actually used and what failed.

Suggested opener:

> “ভাই/আপা, আপনার দোকানে কাস্টমারের বাকি আর জমার হিসাব কীভাবে রাখেন? আমরা বাংলায় কথা বলে খাতায় হিসাব লেখার একটা পরীক্ষামূলক অ্যাপ বানিয়েছি। দুই মিনিট দেখাতে পারি? আপনার তথ্য না নিয়ে নমুনা হিসাব দেখাব।”

Suggested close:

> “এটা এখনো পরীক্ষামূলক। আপনি চাইলে কয়েক সপ্তাহ ব্যবহার করে সমস্যা জানাতে পারেন। আপনার অনুমতি ছাড়া আপনার দোকানের নাম বা অভিজ্ঞতা প্রচারে ব্যবহার করব না।”

## 6. Distribution and trust

For a small, invited pilot, use a signed APK from a stable HTTPS URL only if the owner understands Android's installation prompt and explicitly opts in. Explain how to verify the app source and how to uninstall it. Do not ask a shopkeeper to disable broad device protections. If installation friction or trust concerns arise, pause direct APK distribution and use an official Play testing/release path when available.

The landing page should show a visible “পরীক্ষামূলক সংস্করণ / Beta” note, a real support contact, privacy information, the app's actual permissions, and a working download destination. QR should resolve to a stable HTTPS landing/download page and be physically scanned before printing. Do not use the current QR image until its destination is verified.

Use Google Play/App Store buttons only with official public listing URLs; otherwise mark them “Coming soon.” A direct APK is Android-only; do not imply iPhone users can install it.

## 7. Online marketing: support, not the first proof

Set up a simple Facebook page and the bilingual landing page. Publish short, real screen recordings with sample data:

- “বাকি লিখতে টাইপ করতে হয় না” — show speak → review → confirm;
- “ভুল শুনলে কী করবেন?” — show edit/cancel or correction path only if present in the build;
- “ইন্টারনেট না থাকলে কী চলে?” — demonstrate only verified offline manual entry;
- 20–30 second owner-style demo using fictional customer data.

Share in relevant local shopkeeper/business groups only with group rules respected and no repeated spam. Ask pilot users for permission before using quotes, shop names, faces or testimonials. Do not buy installs, fake reviews or engagement.

Avoid paid ads until the pilot reveals: (a) a clear audience, (b) a message that gets qualified shopkeepers to try, (c) successful onboarding, and (d) repeat usage. Then run a small, time-limited Facebook campaign targeting the tested locality/category; send ads to a landing page with a tagged link, not directly to an opaque APK file. Compare cost per activated shop, not cost per click or raw install.

## 8. Testing plan and metrics

Define a shop as **activated** only when its owner completes onboarding and records at least 3 legitimate or sample transactions across 2 different days, including one credit and one payment if both are supported and the owner can test safely.

Track using privacy-safe aggregate events only:

| Funnel stage | Measure |
|---|---|
| Reached | shops approached; channel/source; category |
| Interested | demos accepted / shops approached |
| Installed | installs / demo participants |
| Activated | activated shops / installs |
| First value | time from install to first confirmed entry |
| Repeat use | shops with activity on 3+ days in week 1 and week 3 |
| Voice quality | attempted voice entries, confirmed as-is, edited, canceled, failed; no audio/transcript unless explicit research consent |
| Reliability | crashes, sync/backup failures if enabled, support incidents |
| Retention | active shops at day 7, day 14 and day 28 |
| Referral | shops that voluntarily refer another shop |
| Cost | field/online spend and team time per activated and retained shop |

Use anonymous pilot IDs in the research sheet. Never put customer ledger contents, phone numbers, transcripts or exact amounts into marketing analytics. Store consent and feedback separately from business data.

## 9. Weekly experiment loop

Every week:

1. Review funnel counts and issues by acquisition channel.
2. Read notes from at least 3 shopkeeper conversations.
3. Identify the top setup problem and top reason for not returning.
4. Fix one or two high-impact problems; avoid adding features solely from one request.
5. Retest the affected flow with 2–3 people who did not help build the app.
6. Change one marketing variable at a time (opening line, demo, handout or post), and record the change.

Interview prompts:

- “গত সপ্তাহে কোন সময় অ্যাপটা কাজে লেগেছে?”
- “শেষবার ব্যবহার না করার কারণ কী ছিল?”
- “খাতায় লিখলে যা করেন, এখানে কোন ধাপটা কঠিন লাগল?”
- “ভয়েসে ভুল হলে কী করলে আপনার ভরসা বাড়বে?”
- “এই অ্যাপ ব্যবহার করতে কী নিয়ে দুশ্চিন্তা হয়?”
- “আগামী সপ্তাহে এটা ব্যবহার চালিয়ে যেতে কী দরকার?”

Ask about recent behavior first; do not lead with “আপনি কিনবেন?” Hypothetical willingness to pay is weaker evidence than repeated use or a real opt-in to a clearly described paid test.

## 10. Pricing validation

Keep the pilot free while validating the core workflow, with a clear end date or review date. Do not promise the service will remain free forever.

After repeat use is demonstrated, test a small number of transparent offers with separate cohorts (for example, a low monthly price versus a low annual price), clearly stating which features are included. Do not charge for unverified cloud backup or unlimited AI. Calculate actual per-shop costs first: AI requests/audio, Firebase reads/writes/storage/egress, support time, payment fees, taxes, and distribution costs.

Useful evidence: a shopkeeper agrees to a real paid pilot, completes payment, and continues using the product. Likes, survey answers and verbal enthusiasm are not proof of willingness to pay.

## 11. Budget discipline

Start with founder time, transport, printed one-page guides and a simple mobile data allowance. Set a weekly cap before spending. Do not hire promoters or buy ads until the founder can reliably onboard and support a shop and the app's critical data-handling behavior is understood.

Record actual expenses and hours. Review cost per activated shop and cost per retained shop weekly. A channel that produces cheap installs but no repeat users is not working.

## 12. Decision gates

These are internal pilot thresholds to guide learning, not industry benchmarks:

- **Continue usability work** if fewer than 4 of the first 5 owners can complete the basic demo without developer help.
- **Continue the pilot** if roughly half or more of invited shops activate and there is no unresolved data-loss/security issue.
- **Consider a larger local rollout** only if at least half of activated shops remain active in week 3, owners can explain the confirmation step, and voice errors/support are manageable.
- **Test paid pricing** only after repeat use and actual cost per shop are known.
- **Pause distribution immediately** for any credible data-loss, privacy, financial-entry corruption, or misleading-permission incident.

Change these thresholds before a pilot if the team has a justified operational reason; do not move them after seeing results just to declare success.

## 13. 90-day sequence

### Days 1–7: readiness

- Verify release build, permissions, local data behavior, Firebase rules and security posture.
- Resolve known theme and voice-engine issues that affect trust or usability.
- Prepare signed APK/Play testing route, privacy explanation, quick-start sheet and feedback form.
- Run 5 observed usability sessions.

### Days 8–21: first pilot

- Recruit 15–25 shops in one compact area/category.
- Personally onboard; check in on day 1, 3, 7 and 14.
- Fix top usability and reliability issues; avoid broad advertising.

### Days 22–45: repeat and compare

- Run a second cohort using revised onboarding.
- Compare physical referrals/visits with organic Facebook/landing-page sources.
- Publish a few real demo videos; only use testimonials with written/recorded consent.

### Days 46–60: pricing signal

- Estimate actual serving/support cost per active shop.
- Offer a clearly bounded paid pilot to a small subset; record acceptance and continued use.

### Days 61–90: scale or narrow

- If retention and support are healthy, test a small locality-based ad budget and one adjacent shop category.
- If installs exceed repeat use, stop acquisition spending and fix onboarding/value/reliability.
- If voice is not consistently useful, reconsider the core workflow before scaling marketing.

## 14. Launch checklist

- [ ] Release APK is signed and versioned; installation/update path is understood.
- [ ] No test API keys or debug-only options exposed to public users.
- [ ] Firebase security rules and data deletion/backup behavior reviewed.
- [ ] Privacy notice accurately describes audio, ledger, Firebase and analytics behavior.
- [ ] Support contact responds within a stated timeframe.
- [ ] Real screenshots and app name/icon are consistent.
- [ ] QR scans to a stable HTTPS page and works on a second phone/network.
- [ ] Demo uses sample data; no customer information shown.
- [ ] Analytics collect only necessary, privacy-safe aggregate events.
- [ ] Pilot consent and feedback process are ready.
- [ ] Landing page/store links do not imply unpublished availability.

## 15. Source notes

This plan is primarily a test strategy based on the product's current prototype and target user, not a forecast of market demand. Bangladesh has substantial mobile connectivity, but subscriber/connectivity figures do not prove this audience will install or pay for HisabBot. Digital ledger products already compete with free tiers; TallyKhata's current Play listing advertises a free Standard tier, so “digital khata” alone is not enough differentiation. Freshly verify platform distribution/payment rules before release.

- Bangladesh mobile internet context: U.S. International Trade Administration, *Bangladesh Digital Economy* (updated 19 March 2026): https://www.trade.gov/country-commercial-guides/bangladesh-digital-economy
- Bangladesh digital audience context: DataReportal, *Digital 2025: Bangladesh* (3 March 2025): https://datareportal.com/reports/digital-2025-bangladesh
- Competitor free tier: TallyKhata Google Play listing: https://play.google.com/store/apps/details?id=com.progoti.tallykhata
- Google Play billing policy update: https://support.google.com/googleplay/android-developer/answer/15582165
