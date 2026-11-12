# Picknexo

Independent affiliate discovery for India. No cart, checkout, payments, fabricated product data or active affiliate links are included.

## What works now
Public navigation, seven category hubs, catalogue filters, product details, ten original educational guides, search, comparison selection, a rule-based shopping consultant, adjustable budget allocation, URL-shareable budget plans, browser print/PDF, session-only assistant, legal starter pages and contact-message storage.

Cloud stores published/draft content, contact messages and an audit trail. Admin supports product and article editing, scheduling, duplication, deletion confirmation, private image uploads (5 MB; browser WebP optimisation), CSV draft import/export and settings/events editing. Uploaded product images are served only while linked to published products. Public buckets were unavailable, so uploads remain private.

## First owner setup
1. Open Lovable **More → Users → Add user** and create your owner account. No public sign-up button is offered.
2. Ask Lovable to assign this specific account the protected admin role. No first-user automatic promotion is used.
3. Visit `/admin` and sign in with that email/password. Sessions use an httpOnly, same-site cookie and expire after one hour. Login attempts are limited to five per email per 15 minutes.
4. Add a real product with your own verified information and authorised image. Save a draft or publish. Slugs must be unique within the content type.
5. Imported CSV rows are always drafts. Required columns: title, slug. Supported additional columns: category, retailer, description, affiliateUrl. Row errors are shown after import; successfully imported rows remain saved.
6. Articles support Markdown; only published entries are visible alongside local educational guides. Scheduled content appears after its publication time.

Owner login, CRUD and uploads cannot be verified until a real owner account/role exists. Use More → Users → Auth settings to disable public registration before launch; the login UI itself does not establish this hosted setting.

## Editing content
Starter content lives in `src/data/catalogue.ts`: products, articles, categories, retailers and site settings. The catalogue starts empty intentionally. Never populate it with guessed product specifications, ratings, discounts or affiliate IDs. Admin-managed content lives in Cloud through `src/lib/storage.functions.ts`; storage is separated from presentation.

Guide illustrations and shopping visuals are original CSS/icon artwork, not photographs of products. Educational articles are not labelled personally tested. Legal pages are starter copy: **Generic template, not legal advice. Review with a qualified professional before launch.** Supply legal name, address, grievance contact and retention policy before publishing.

## Services and costs
- Cloud is connected for database, image storage and owner authentication. Usage depends on your workspace allowance and traffic; no fixed free allowance is promised. Check the Cloud usage page before launch.
- **Paid AI is off, monthly cap is zero, and no LLM API calls are made.** Current tools are deterministic. Activating AI requires a provider/secret, current price estimate, owner-approved monthly cap and server-side enforcement. Provider adapters and paid AI activation are not implemented yet.
- Contact messages save privately. Resend owner-copy and auto-reply calls run only with `RESEND_API_KEY`, `MAIL_FROM` and `CONTACT_EMAIL` configured. No delivery is claimed without testing the provider. Never include Amazon affiliate URLs in mail; link only to Picknexo pages. Resend free limits and charges must be checked before use.
- Newsletter remains disabled and stores no subscriber addresses. Double opt-in and unsubscribe integration must be implemented after selecting/configuring an approved provider and final privacy notice.
- WhatsApp direct support awaits a real number. Sharing via WhatsApp/email does not collect phone numbers or send bulk messages.
- Retailer activation remains off until affiliate approval and supplied URLs; owner activation controls require account approval for Amazon; verify live links before launch. No Amazon prices are displayed.

## Remaining work before a full launch
Complete category/settings propagation through every public surface; add proper ranked consultant reasoning, budget product alternatives, search typo tolerance, assistant richer retrieval/feedback, owner password reset, live scheduling/replay/calendar controls . Complete canonical/structured-data/OG generation, analytics consent and security-header review. These are not represented as complete production features.

## Local development and checks
This project uses TanStack Start, React, TypeScript and Tailwind v4, rather than Next.js. Install Node.js and Bun, install dependencies with `bun install`, then `bun run dev`. Run `bun test` and `bun run seo:check`. The latter checks local content slugs and route metadata; it does not replace a live SEO audit. `.env.example` contains empty owner-supplied configuration values. Store real private keys in Lovable Secrets, never source files.

## Publishing
1. Configure your owner, real catalogue, legal/contact details and approved integrations.
2. Verify owner CRUD, uploads and public reads; test contact delivery, mobile navigation and affiliate states.
3. Use Lovable’s Publish dialog. This app is not already deployed and Vercel compatibility is not asserted.
4. Connect your real domain in project settings and verify HTTPS. Check the published sitemap and robots exclusions.
5. Add the domain to Google Search Console, verify ownership and submit `/sitemap.xml`. Add analytics only with appropriate consent and a real identifier.

## 30-day SEO checklist
- Days 1–7: verify domain, search indexing settings, sitemap, original content ownership and legal disclosures; research Indian shopper questions without fabricated search-volume figures.
- Days 8–14: improve two original guides around specific needs, add verified catalogue entries and link them to related guides.
- Days 15–21: expand category introductions and publish documented comparison research; inspect mobile readability and image accessibility.
- Days 22–30: review Search Console impressions and indexing, correct issues and choose subsequent topics from actual query data. Do not invent reviews or structured rating/offer data.
