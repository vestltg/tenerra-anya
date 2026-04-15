---
title: activate.html — Migration Account Activation Page
date: 2026-04-15
status: approved
---

# Activate Page Design

## Purpose

A hidden reference page for existing users whose accounts were migrated from the
legacy system to VestIQ (the platform powering Anya). The page is linked from
the migration notification email and gives users a clear call to action to set
their new password and log in for the first time.

This page is not linked from the site nav or footer. It is not indexed by search
engines. It will not appear in sitemaps or AI crawl files.

## File & Routing

- **File:** `activate.html` at repo root
- **Public URL:** `https://anya.tenerra.ai/activate`
- **Cloudflare Pages:** No `_redirects` rule needed — Cloudflare Pages serves
  `.html` files as clean URLs automatically.

## Discoverability Controls

- `<meta name="robots" content="noindex, nofollow" />`
- Not added to `sitemap.xml`
- Not added to `llms.txt`
- No links to this page from nav, footer, or any other page

## Page Structure

Uses the standard site shell: `shared.css`, same `<head>` boilerplate, same nav
and footer as other pages. No hero image, no scroll animations, no JSON-LD
structured data.

### 1. Headline

> Your account is ready. Here's how to get in.

### 2. Intro paragraph

Your data migrated safely to VestIQ — the platform that powers Anya. Everything
you stored is right where you left it. One quick step sets up your new login
credentials and gets you in.

### 3. Numbered Steps

1. Visit [app.vestlife.com](https://app.vestlife.com)
2. Enter your existing email address
3. Click **"Forgot password?"** to create your new login credentials

### 4. CTA Button

Label: **Go to app.vestlife.com**
Href: `https://app.vestlife.com`
Behavior: opens in new tab (`target="_blank" rel="noopener noreferrer"`)
Style: existing `.btn-primary` or equivalent from `shared.css`

### 5. "What's waiting for you" section

Short subheading + 2–3 brief bullets drawn from homepage copy:

- **Conversations** — Tell Anya anything, any time. She holds it.
- **Key Events** — Track what matters across your child's life.
- **Memories & Thoughts** — Anya uses these to understand your child more
  deeply over time.

### 6. Support Footer Note

> Questions during login? Reach us at
> [support@vestlife.com](mailto:support@vestlife.com)

## What This Page Does NOT Include

- No hero image or large decorative sections
- No scroll animations or fade-in effects
- No JSON-LD structured data
- No account creation, forms, or login UI
- No links to this page anywhere on the public site

## Branding Notes

- **Anya** = the product brand. Use this name when referring to what users will
  experience.
- **VestIQ** = the underlying platform name. Use sparingly — mention it once in
  the intro to connect to what users may have seen in the email, then let Anya
  be the name that carries the page.
- **app.vestlife.com** = the login URL. Link to it exactly as written.

## Validation Checklist (pre-commit)

- [ ] `robots: noindex, nofollow` is present
- [ ] Page not added to `sitemap.xml`
- [ ] No nav or footer link points to `/activate`
- [ ] CTA button opens `app.vestlife.com` in a new tab
- [ ] `support@vestlife.com` mailto link is correct
- [ ] Favicons included in `<head>`
- [ ] Canonical URL set to `https://anya.tenerra.ai/activate`
- [ ] No placeholder text remains
