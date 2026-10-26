import QRCode from 'qrcode';
import { CONFIG } from './config.js';
import { TRANSLATIONS } from './translations.js';

let currentLang = localStorage.getItem('hisabbot_lang') || 'bn';

// Elements
const langToggleBtn = document.getElementById('langToggleBtn');
const benefitsContainer = document.getElementById('benefitsContainer');
const stepsContainer = document.getElementById('stepsContainer');
const featuresContainer = document.getElementById('featuresContainer');
const faqListContainer = document.getElementById('faqListContainer');
const demoPresetsContainer = document.getElementById('demoPresetsContainer');
const installGuideBody = document.getElementById('installGuideBody');
const qrCanvasContainer = document.getElementById('qrCanvasContainer');
const btnCopyDownloadLink = document.getElementById('btnCopyDownloadLink');
const toastNotice = document.getElementById('toastNotice');
const stickyMobileBar = document.getElementById('stickyMobileBar');

// Simulator Elements
const demoCustomerVal = document.getElementById('demoCustomerVal');
const demoTypeBadge = document.getElementById('demoTypeBadge');
const demoAmountVal = document.getElementById('demoAmountVal');
const demoNoteVal = document.getElementById('demoNoteVal');
const demoPromptText = document.getElementById('demoPromptText');
const btnDemoCancel = document.getElementById('btnDemoCancel');
const btnDemoConfirm = document.getElementById('btnDemoConfirm');
const demoToast = document.getElementById('demoToast');

// Hero Phone Elements
const heroPhoneConfirmBtn = document.getElementById('heroPhoneConfirmBtn');
const heroPhoneCancelBtn = document.getElementById('heroPhoneCancelBtn');
const heroPhoneToast = document.getElementById('heroPhoneToast');

// Modals
const openInstallGuideBtn = document.getElementById('openInstallGuideBtn');
const openPrivacyModalBtn = document.getElementById('openPrivacyModalBtn');
const openTermsModalBtn = document.getElementById('openTermsModalBtn');

/**
 * Resolve nested translation keys
 */
function getTranslation(key, lang) {
  const parts = key.split('.');
  let current = TRANSLATIONS[lang];
  for (const part of parts) {
    if (current && current[part] !== undefined) {
      current = current[part];
    } else {
      return null;
    }
  }
  return current;
}

/**
 * Render all static text translations
 */
function updateTranslations() {
  document.documentElement.lang = currentLang;
  document.body.className = `lang-${currentLang}`;

  // Update page title and description
  const meta = TRANSLATIONS[currentLang].meta;
  document.title = meta.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = meta.description;

  // Update elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const val = getTranslation(key, currentLang);
    if (val !== null) {
      el.textContent = val;
    }
  });

  // Render Dynamic Containers
  renderBenefits();
  renderSteps();
  renderFeatures();
  renderFAQ();
  renderDemoPresets();
  renderInstallGuide();

  // Update language toggle label
  const langLabel = document.getElementById('langSwitchLabel');
  if (langLabel) {
    langLabel.textContent = currentLang === 'bn' ? 'English' : 'বাংলা';
  }

  // Update release date pill
  const releasePill = document.getElementById('releaseDatePill');
  if (releasePill) {
    releasePill.textContent = currentLang === 'bn' 
      ? `রিলিজ: ${CONFIG.APK_RELEASE_DATE}` 
      : `Released: ${CONFIG.APK_RELEASE_DATE_EN}`;
  }
}

/**
 * Render Benefits Cards
 */
function renderBenefits() {
  const data = TRANSLATIONS[currentLang].benefits.items;
  benefitsContainer.innerHTML = data.map((item) => `
    <div class="benefit-card">
      <div class="benefit-icon-wrap">${item.icon}</div>
      <h3 class="benefit-title">${item.title}</h3>
      <p class="benefit-desc">${item.desc}</p>
    </div>
  `).join('');
}

/**
 * Render 3-Step How It Works
 */
function renderSteps() {
  const data = TRANSLATIONS[currentLang].howItWorks.steps;
  stepsContainer.innerHTML = data.map((item) => `
    <div class="step-card">
      <span class="step-badge">${item.step}</span>
      <h3 class="step-title">${item.title}</h3>
      <p class="step-desc">${item.desc}</p>
    </div>
  `).join('');
}

/**
 * Render Feature Grid
 */
function renderFeatures() {
  const data = TRANSLATIONS[currentLang].features.list;
  featuresContainer.innerHTML = data.map((item) => `
    <div class="feature-card">
      <div class="feature-icon">${item.icon}</div>
      <h3 class="feature-title">${item.title}</h3>
      <p class="feature-desc">${item.desc}</p>
    </div>
  `).join('');
}

/**
 * Render Accordion FAQ
 */
function renderFAQ() {
  const data = TRANSLATIONS[currentLang].faq.items;
  faqListContainer.innerHTML = data.map((item, idx) => `
    <div class="faq-item ${idx === 0 ? 'open' : ''}">
      <button class="faq-question-btn" type="button" aria-expanded="${idx === 0}">
        <span>${item.q}</span>
        <svg class="faq-chevron" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
        </svg>
      </button>
      <div class="faq-answer-pane">
        <p>${item.a}</p>
      </div>
    </div>
  `).join('');

  // Attach toggle listeners
  faqListContainer.querySelectorAll('.faq-question-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      // Close others
      faqListContainer.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

/**
 * Render Demo Simulator Presets
 */
let activePresetIndex = 0;
function renderDemoPresets() {
  const presets = TRANSLATIONS[currentLang].demo.presets;
  demoPresetsContainer.innerHTML = presets.map((p, idx) => `
    <button class="demo-chip-btn ${idx === activePresetIndex ? 'active' : ''}" data-idx="${idx}">
      ${p.text}
    </button>
  `).join('');

  demoPresetsContainer.querySelectorAll('.demo-chip-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-idx'), 10);
      selectPreset(idx);
    });
  });

  applyPreset(activePresetIndex);
}

function selectPreset(idx) {
  activePresetIndex = idx;
  demoPresetsContainer.querySelectorAll('.demo-chip-btn').forEach((b, i) => {
    b.classList.toggle('active', i === idx);
  });
  applyPreset(idx);
}

function applyPreset(idx) {
  const preset = TRANSLATIONS[currentLang].demo.presets[idx];
  if (!preset) return;

  demoCustomerVal.textContent = preset.customer;
  demoAmountVal.textContent = preset.amount;
  demoNoteVal.textContent = preset.note;
  demoToast.style.display = 'none';

  if (preset.type === 'credit') {
    demoTypeBadge.className = 'badge-tag-credit';
    demoTypeBadge.textContent = currentLang === 'bn' ? 'বাকি (Credit)' : 'Credit (বাকি)';
    demoAmountVal.style.color = 'var(--color-debt-red)';
    demoPromptText.textContent = currentLang === 'bn'
      ? `“${preset.customer}র খাতায় ${preset.amount.replace('৳ ', '')} টাকা বাকি উঠাবো?”`
      : `“Record ${preset.amount} credit for ${preset.customer}?”`;
  } else if (preset.type === 'payment') {
    demoTypeBadge.className = 'badge-tag-payment';
    demoTypeBadge.textContent = currentLang === 'bn' ? 'জমা (Payment)' : 'Payment (জমা)';
    demoAmountVal.style.color = 'var(--color-payment-green)';
    demoPromptText.textContent = currentLang === 'bn'
      ? `“${preset.customer}র জমা হিসেবে ${preset.amount.replace('৳ ', '')} টাকা উঠাবো?”`
      : `“Record ${preset.amount} payment received from ${preset.customer}?”`;
  } else {
    demoTypeBadge.className = 'badge-tag-cash';
    demoTypeBadge.textContent = currentLang === 'bn' ? 'নগদ (Cash)' : 'Cash (নগদ)';
    demoAmountVal.style.color = '#0284c7';
    demoPromptText.textContent = currentLang === 'bn'
      ? `“${preset.amount.replace('৳ ', '')} টাকা নগদ বিক্রয় হিসেবে সেভ করবো?”`
      : `“Save ${preset.amount} as cash sale entry?”`;
  }
}

/**
 * Render Install Guide Steps in Modal
 */
function renderInstallGuide() {
  const steps = TRANSLATIONS[currentLang].installGuide.steps;
  installGuideBody.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:1rem">
      ${steps.map((st) => `<div style="background:#f8fafc;padding:0.85rem 1rem;border-radius:8px;border:1px solid #e2e8f0;font-size:0.9rem">${st}</div>`).join('')}
    </div>
  `;
}

/**
 * Setup Dynamic QR Code
 */
async function setupQRCode() {
  qrCanvasContainer.innerHTML = '';
  const canvas = document.createElement('canvas');
  qrCanvasContainer.appendChild(canvas);

  // Compute final stable download or landing URL
  const targetUrl = CONFIG.QR_TARGET_URL || window.location.href;

  try {
    await QRCode.toCanvas(canvas, targetUrl, {
      width: 160,
      margin: 1,
      color: {
        dark: '#0F172A',
        light: '#FFFFFF',
      },
    });
  } catch (err) {
    console.error('Failed to generate QR Code:', err);
  }
}

/**
 * Show Toast Notice
 */
function showToast(msg) {
  toastNotice.textContent = msg;
  toastNotice.classList.add('show');
  setTimeout(() => {
    toastNotice.classList.remove('show');
  }, 2800);
}

/**
 * Setup Event Listeners
 */
function setupEventListeners() {
  // Language toggle
  langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'bn' ? 'en' : 'bn';
    localStorage.setItem('hisabbot_lang', currentLang);
    updateTranslations();
  });

  // Copy link
  btnCopyDownloadLink.addEventListener('click', async () => {
    const targetUrl = CONFIG.QR_TARGET_URL || window.location.href;
    try {
      await navigator.clipboard.writeText(targetUrl);
      const toastText = TRANSLATIONS[currentLang].download.copiedToast;
      showToast(toastText);
    } catch {
      showToast(targetUrl);
    }
  });

  // Simulator actions
  btnDemoConfirm.addEventListener('click', () => {
    demoToast.textContent = TRANSLATIONS[currentLang].demo.toastSuccess;
    demoToast.style.display = 'block';
  });

  btnDemoCancel.addEventListener('click', () => {
    demoToast.style.display = 'none';
    demoPromptText.textContent = currentLang === 'bn' ? 'লেনদেন বাতিল করা হয়েছে।' : 'Transaction cancelled.';
  });

  // Hero Phone Simulator actions
  heroPhoneConfirmBtn.addEventListener('click', () => {
    heroPhoneToast.style.display = 'block';
    setTimeout(() => {
      heroPhoneToast.style.display = 'none';
    }, 3500);
  });

  heroPhoneCancelBtn.addEventListener('click', () => {
    heroPhoneToast.textContent = currentLang === 'bn' ? '✕ লেনদেন বাতিল করা হয়েছে।' : '✕ Transaction cancelled.';
    heroPhoneToast.style.display = 'block';
    setTimeout(() => {
      heroPhoneToast.textContent = TRANSLATIONS[currentLang].hero.statusConfirmed;
      heroPhoneToast.style.display = 'none';
    }, 2500);
  });

  // Modals management
  const openModal = (id) => {
    const modal = document.getElementById(id);
    if (modal) modal.classList.add('active');
  };

  const closeModal = (id) => {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove('active');
  };

  openInstallGuideBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal('installGuideModal');
  });

  if (openPrivacyModalBtn) openPrivacyModalBtn.addEventListener('click', () => openModal('privacyModal'));
  if (openTermsModalBtn) openTermsModalBtn.addEventListener('click', () => openModal('termsModal'));

  document.querySelectorAll('[data-close-modal]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-close-modal');
      closeModal(modalId);
    });
  });

  document.querySelectorAll('.modal-overlay').forEach((overlay) => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach((m) => m.classList.remove('active'));
    }
  });

  // Sticky mobile download bar visibility
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > 400) {
      stickyMobileBar.classList.add('visible');
    } else {
      stickyMobileBar.classList.remove('visible');
    }
  }, { passive: true });

  // Update Download and Contact URLs from CONFIG
  const heroDlBtn = document.getElementById('heroDownloadBtn');
  const mainDlBtn = document.getElementById('mainDownloadBtn');
  if (heroDlBtn) heroDlBtn.href = CONFIG.APK_DOWNLOAD_URL;
  if (mainDlBtn) mainDlBtn.href = CONFIG.APK_DOWNLOAD_URL;

  const emailLink = document.getElementById('footerEmailLink');
  if (emailLink && CONFIG.SUPPORT_EMAIL) {
    emailLink.href = `mailto:${CONFIG.SUPPORT_EMAIL}`;
  }

  const whatsappLink = document.getElementById('footerWhatsappLink');
  if (whatsappLink && CONFIG.SUPPORT_WHATSAPP) {
    whatsappLink.href = CONFIG.SUPPORT_WHATSAPP;
  }
}

// Initial Run
updateTranslations();
setupQRCode();
setupEventListeners();
