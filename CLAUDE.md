# CLAUDE.md

## Project Overview

This repository contains the public marketing site for `anya.tenerra.ai`.

- It is a static marketing / GEO site.
- It is not the product application.
- The live application is hosted separately at `https://app.vestlife.com`.
- The site is published from GitHub to Cloudflare Pages.

## Site Purpose

The site should explain what Anya is, who it is for, and why it matters.

When editing copy, preserve this positioning:

- Anya helps preserve parent and caregiver knowledge about a child.
- The site markets and explains the product.
- The site does not present itself as a full SaaS account system.

Do not introduce copy that implies features this site does not provide, such as:

- user accounts
- subscriptions
- billing
- stored user content on this site
- dashboards hosted on this site
- account management flows

## Technical Constraints

- This is a plain static HTML/CSS site.
- Shared styles belong in `assets/css/shared.css`.
- Page-specific styles may live inline in the page only when they are truly page-specific.
- Repeated site-shell CSS should not be duplicated across pages.
- Avoid inline base64 images for public-facing assets. Use real files in `assets/images/`.

## Routing

Cloudflare Pages serves these static `.html` files as clean public URLs automatically.

Current pattern:

- `about.html` is served at `/about`
- `faqs.html` is served at `/faqs`
- `terms.html` is served at `/terms`
- `privacy.html` is served at `/privacy`

Do not add `_redirects` rules that rewrite these pretty URLs back to their `.html` files. That can create redirect loops on Cloudflare Pages previews and production.

When adding a new public page:

1. Create the `.html` file at the repo root.
2. Link to the extensionless public path in nav/footer content.
3. Update `sitemap.xml` if the page should be indexed.

## GEO / SEO Expectations

This repo is optimized for both traditional search and generative engine optimization.

Keep these elements accurate and maintained:

- page titles and meta descriptions
- canonical URLs
- Open Graph and Twitter metadata
- structured data / JSON-LD where relevant
- `llms.txt`
- `robots.txt`
- `sitemap.xml`

GEO guidance:

- Prefer clear, direct language over vague marketing abstractions.
- Make important answers visible in page text, not only in images or `alt` text.
- Keep FAQs machine-readable and human-readable.
- If copy changes materially, check whether `llms.txt` or structured data should also change.

## Legal / Privacy Constraints

The legal pages must match the actual behavior of this site.

Current rules:

- no logins or user accounts on the marketing site
- no subscriptions or billing on the marketing site
- no user-content storage on the marketing site
- analytics only with consent
- `localStorage` use is limited to cookie/consent preference behavior

Do not reintroduce generic SaaS legal copy that describes systems this site does not operate.

## Favicons and Shared Head Elements

All public-facing pages should include:

- `favicon-32x32.png`
- `favicon-16x16.png`
- `apple-touch-icon.png`
- viewport meta
- canonical URL

Keep these consistent across pages.

## Copy and Content Quality

- Fix spelling and grammar errors when found.
- If a word choice is ambiguous or brand-sensitive, ask before changing it.
- Keep the tone clear, grounded, and specific.
- Avoid exaggerated claims that are not supported by the product.

## Assets

- Store reusable site assets in `assets/images/`.
- Prefer descriptive filenames.
- Use normal file references instead of embedding large images inline.
- If replacing an image, preserve reasonable dimensions and loading behavior.

## Validation Checklist

Before committing, prefer to check:

1. Links and local asset references resolve.
2. No placeholder text remains.
3. No unintended inline base64 assets remain.
4. `sitemap.xml` is still valid.
5. Clean public URLs still match the underlying `.html` files.
6. Public pages still include favicon links.
7. Legal/privacy copy still matches real site behavior.

## Repository Hygiene

- Do not commit `.DS_Store`.
- Keep `.gitignore` up to date for local OS artifacts.
- Do not commit or push unless explicitly asked.
