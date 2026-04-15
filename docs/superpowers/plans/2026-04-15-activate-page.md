# Activate Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a hidden, noindex `activate.html` page at `/activate` for migrated users to set their new password and log in to Anya for the first time.

**Architecture:** A single static HTML file following the exact same shell pattern as `about.html` — shared nav, footer, cookie banner, and GA consent scripts. The body uses the existing `.legal-page` CSS class from `shared.css` for layout. Two small inline styles handle the numbered steps and feature bullet list. No new files, no changes to existing files.

**Tech Stack:** Plain HTML, CSS from `/assets/css/shared.css`, inline `<style>` block for page-specific list styles, vanilla JS (nav dropdown + hamburger, copied verbatim from existing pages).

---

### Task 1: Create git branch

**Files:**
- No file changes — git operation only

- [ ] **Step 1: Create and check out branch**

```bash
git checkout -b feat/activate-migration-page
```

Expected output:
```
Switched to a new branch 'feat/activate-migration-page'
```

- [ ] **Step 2: Verify you are on the new branch**

```bash
git branch --show-current
```

Expected output:
```
feat/activate-migration-page
```

---

### Task 2: Create activate.html

**Files:**
- Create: `activate.html` (repo root)

- [ ] **Step 1: Create the file**

Create `/Users/joeldelany/code/tenerra-anya/activate.html` with this exact content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Access Your Anya Account — Tenerra.ai</title>
  <meta name="description" content="Your account has been migrated to VestIQ. Here is how to set your new password and log in to Anya." />
  <meta name="robots" content="noindex, nofollow" />
  <meta name="author" content="Tenerra.ai" />
  <meta name="theme-color" content="#8256F7" />

  <link rel="canonical" href="https://anya.tenerra.ai/activate" />
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/apple-touch-icon.png" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;family=DM+Serif+Display:ital@0;1&amp;family=Montserrat:wght@400;500;600&amp;display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/assets/css/shared.css" />

  <style>
    .activate-steps {
      list-style: none;
      counter-reset: steps;
      margin: 0 0 var(--space-5) 0;
      padding: 0;
    }
    .activate-steps li {
      counter-increment: steps;
      display: flex;
      gap: 16px;
      align-items: flex-start;
      padding: 16px 0;
      border-bottom: 1px solid var(--color-border);
      font-size: 16px;
      color: #333;
      line-height: 1.5;
    }
    .activate-steps li:last-child {
      border-bottom: none;
    }
    .activate-steps li::before {
      content: counter(steps);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      min-width: 28px;
      background: var(--color-primary);
      color: #fff;
      border-radius: 50%;
      font-family: var(--font-ui);
      font-size: 13px;
      font-weight: 600;
      margin-top: 1px;
    }
    .activate-features {
      list-style: none;
      padding: 0;
      margin: 0 0 var(--space-4) 0;
    }
    .activate-features li {
      display: flex;
      gap: 12px;
      align-items: flex-start;
      padding: 12px 0;
      border-bottom: 1px solid var(--color-border);
      font-size: 16px;
      color: #333;
      line-height: 1.5;
    }
    .activate-features li:last-child {
      border-bottom: none;
    }
    .activate-features li::before {
      content: "→";
      color: var(--color-primary);
      font-weight: 600;
      flex-shrink: 0;
      margin-top: 2px;
    }
  </style>
</head>
<body class="legal-page">

  <nav class="nav">
    <a href="/" class="nav-wordmark"><img src="/assets/images/tenerra-logo.png" alt="Anya icon" /><span class="nav-wm-wordmark"><span class="nav-wm-name">anya</span><span class="nav-wm-domain">.tenerra.ai</span></span></a>
    <ul class="nav-links">
      <li><a href="/" class="nav-link">Home</a></li>
      <li><a href="/about" class="nav-link">About</a></li>
      <li><a href="/faqs" class="nav-link">FAQs</a></li>
    </ul>

    <div class="nav-more">
      <button class="nav-more-trigger" aria-expanded="false" aria-controls="more-menu">
        More
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 4l4 4 4-4" stroke="#555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="nav-more-menu" id="more-menu" role="menu">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/faqs">FAQs</a>
      </div>
    </div>

    <div class="nav-actions">
      <a href="https://app.vestlife.com" target="_blank" rel="noopener noreferrer" class="nav-cta">Get Anya</a>
    </div>
    <button class="nav-hamburger" aria-label="Menu" aria-expanded="false" aria-controls="mobileMenu">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 5h14M3 10h14M3 15h14" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </button>
  </nav>

  <div class="nav-mobile-menu" id="mobileMenu">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/faqs">FAQs</a>
    <a href="https://app.vestlife.com" target="_blank" rel="noopener noreferrer">Get Anya</a>
  </div>

  <main id="main-content">
    <div class="page-wrap">

      <div class="page-header">
        <p class="page-eyebrow">Account Access</p>
        <h1 class="page-title">Your account is ready. Here's how to get in.</h1>
        <p class="page-meta">Your data migrated safely to VestIQ — the platform that powers Anya. Everything you stored is right where you left it. One quick step sets up your new login credentials.</p>
      </div>

      <div class="legal-content">

        <h2>How to log in</h2>

        <ol class="activate-steps">
          <li>Visit <a href="https://app.vestlife.com" target="_blank" rel="noopener noreferrer">app.vestlife.com</a></li>
          <li>Enter your existing email address</li>
          <li>Click <strong>"Forgot password?"</strong> to create your new login credentials</li>
        </ol>

        <a href="https://app.vestlife.com" target="_blank" rel="noopener noreferrer" class="button-primary" style="margin-bottom: var(--space-5);">Go to app.vestlife.com</a>

        <h2>What's waiting for you</h2>
        <p>Once you're in, you can start exploring everything Anya can do.</p>

        <ul class="activate-features">
          <li><strong>Conversations</strong> — Tell Anya anything about your child, any time. She holds it.</li>
          <li><strong>Key Events</strong> — Track what matters across your child's life, from milestones to medical history.</li>
          <li><strong>Memories &amp; Thoughts</strong> — Anya uses these to understand your child more deeply over time, so nothing important is ever lost.</li>
        </ul>

        <p style="font-size: 15px; color: var(--color-text-muted);">
          Questions during login? Reach us at <a href="mailto:support@vestlife.com">support@vestlife.com</a>.
        </p>

      </div>
    </div>
  </main>

  <footer class="footer">
    <p class="footer-legal-text">
      <a href="/terms" class="footer-legal-link footer-legal-link--button">Terms of Service</a> &nbsp;·&nbsp; <a href="/privacy" class="footer-legal-link">Privacy Policy</a> &nbsp;·&nbsp; © 2026 Tenerra.ai · Vest Life, Inc.
    </p>
    <p class="footer-signin-note">Already using Anya? <a href="https://app.vestlife.com" target="_blank" rel="noopener noreferrer" class="footer-signin-link">Sign in</a></p>
  </footer>

  <!-- Cookie Consent Banner -->
  <div id="cookie-banner" class="cookie-banner" role="dialog" aria-label="Cookie consent" aria-live="polite">
    <span>This site uses analytics cookies to improve how we reach families. <a href="/privacy">Learn more</a></span>
    <div class="cookie-banner-actions">
      <button onclick="setConsent('denied')" class="cookie-btn cookie-btn-decline">Decline</button>
      <button onclick="setConsent('granted')" class="cookie-btn cookie-btn-accept">Accept cookies</button>
    </div>
  </div>

  <script>
    /* GA Consent Management */
    (function () {
      var GA_ID = 'G-26WJ4LRG87';
      function loadGA() {
        var s = document.createElement('script');
        s.async = true;
        s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
        document.head.appendChild(s);
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', GA_ID);
      }
      window.setConsent = function (choice) {
        try { localStorage.setItem('ga_consent', choice); } catch (e) {}
        var banner = document.getElementById('cookie-banner');
        if (banner) banner.style.display = 'none';
        if (choice === 'granted') loadGA();
      };
      var consent;
      try { consent = localStorage.getItem('ga_consent'); } catch (e) {}
      if (consent === 'granted') {
        loadGA();
      } else if (!consent) {
        var banner = document.getElementById('cookie-banner');
        if (banner) banner.style.display = 'flex';
      }
    })();
  </script>

  <script>
    /* More dropdown */
    document.addEventListener('DOMContentLoaded', function () {
      var moreTrigger = document.querySelector('.nav-more-trigger');
      var moreMenu    = document.getElementById('more-menu');
      if (!moreTrigger || !moreMenu) return;
      function openMore()  { moreTrigger.setAttribute('aria-expanded', 'true');  moreMenu.style.display = 'block'; }
      function closeMore() { moreTrigger.setAttribute('aria-expanded', 'false'); moreMenu.style.display = ''; }
      function isMoreOpen() { return moreTrigger.getAttribute('aria-expanded') === 'true'; }
      moreTrigger.addEventListener('click', function (e) { e.stopPropagation(); isMoreOpen() ? closeMore() : openMore(); });
      document.addEventListener('click', function (e) { if (!moreMenu.contains(e.target) && e.target !== moreTrigger) closeMore(); });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && isMoreOpen()) { closeMore(); moreTrigger.focus(); } });
    });
  </script>

  <script>
    /* Hamburger */
    document.addEventListener('DOMContentLoaded', function () {
      var btn  = document.querySelector('.nav-hamburger');
      var menu = document.getElementById('mobileMenu');
      if (!btn || !menu) return;
      btn.addEventListener('click', function () {
        var open = menu.classList.toggle('open');
        btn.setAttribute('aria-expanded', open);
      });
      document.addEventListener('click', function (e) {
        if (!menu.contains(e.target) && !btn.contains(e.target)) {
          menu.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  </script>

</body>
</html>
```

- [ ] **Step 2: Verify the file was created**

```bash
ls -la activate.html
```

Expected: file exists, non-zero size.

---

### Task 3: Verify discoverability controls are clean

**Files:**
- Read: `sitemap.xml`
- Read: `llms.txt`
- Read: `about.html` (nav section, lines 505–543)
- Read: `index.html` (footer section — search for "footer")

No changes expected in this task. It is a read-only verification step.

- [ ] **Step 1: Confirm `/activate` is not in sitemap.xml**

```bash
grep -i "activate" sitemap.xml
```

Expected output: (empty — no match)

- [ ] **Step 2: Confirm `/activate` is not in llms.txt**

```bash
grep -i "activate" llms.txt
```

Expected output: (empty — no match)

- [ ] **Step 3: Confirm no nav or footer on existing pages links to /activate**

```bash
grep -ri "activate" about.html faqs.html index.html terms.html privacy.html
```

Expected output: (empty — no match)

- [ ] **Step 4: Confirm noindex is present in the new file**

```bash
grep "noindex" activate.html
```

Expected output:
```
  <meta name="robots" content="noindex, nofollow" />
```

---

### Task 4: Commit

**Files:**
- Stage: `activate.html`
- Stage: `docs/superpowers/specs/2026-04-15-activate-page-design.md`
- Stage: `docs/superpowers/plans/2026-04-15-activate-page.md`

- [ ] **Step 1: Stage the files**

```bash
git add activate.html docs/superpowers/specs/2026-04-15-activate-page-design.md docs/superpowers/plans/2026-04-15-activate-page.md
```

- [ ] **Step 2: Commit**

```bash
git commit -m "$(cat <<'EOF'
feat: add hidden activate page for migrated users

Adds activate.html (/activate) — a noindex, unlinked reference page
for existing users migrated to VestIQ. Includes password-reset steps,
CTA to app.vestlife.com, and a brief feature overview drawn from the
homepage. Not added to sitemap.xml or llms.txt.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
EOF
)"
```

- [ ] **Step 3: Verify commit**

```bash
git log --oneline -3
```

Expected: new commit at the top of the log on branch `feat/activate-migration-page`.
