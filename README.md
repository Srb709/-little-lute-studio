# Little Lute Studio Website

The official website project for **Little Lute Studio**, Megan's Philadelphia-area umbrella brand for:

- **Little Lute Embroidery** — personalized embroidery for gifts, celebrations, businesses, baby items, apparel, bags, and everyday favorites.
- **On The Glow Tan** — mobile spray tanning in Philadelphia and the surrounding suburbs.

The site has a clean editorial style with oversized typography, generous spacing, and carefully separated photography. It is designed to work on desktop computers, tablets, and phones without text and photographs overlapping.

## Current status

The complete first version is built, tested, and live on the public domain.

Current public pages:

| Page | Address | Purpose |
| --- | --- | --- |
| Home | `/` | Introduces the umbrella brand and links to both businesses. |
| Embroidery | `/embroidery` | Shows recent embroidery designs, turnaround, payment details, and the main text-to-order button. |
| Spray tanning | `/spray-tanning` | Shows pricing, booking choices, customer photos, reviews, and Calendly links. |
| About Megan | `/about` | Introduces Megan in her own voice as a wife, mom of three, and business owner. |
| Contact | `/contact` | Provides text, call, email, Instagram, pricing, and booking paths. |
| Privacy | `/privacy` | Explains how website and booking information is handled. |
| Embroidery policy | `/order-policy` | Contains the complete approved Little Lute Embroidery order policy. |

## Business information currently used

- Owner: Megan
- Service area: Philadelphia and surrounding suburbs
- Phone: `215-880-3494`
- Email: `contact.ontheglowtan@gmail.com`
- Instagram: [`@littlelutestudio_`](https://www.instagram.com/littlelutestudio_/)
- Payment: Cash and Venmo
- Embroidery turnaround: Approximately 1–2 weeks unless otherwise discussed
- Spray tan: $75 for rapid or regular
- Four-tan package: $245
- Groups of four or more: $65 per person

## Spray-tan booking links

Bookings leave the website and open the corresponding Calendly page:

- [Wedding Consultation](https://calendly.com/contact-ontheglowtan/wedding-consultation)
- [Group Spray Tan Party](https://calendly.com/contact-ontheglowtan/group-spray-tan-party)
- [Deluxe Rapid Spray Tan](https://calendly.com/contact-ontheglowtan/deluxe-organic-rapid-spray-tan)
- [Spray Tan](https://calendly.com/contact-ontheglowtan/organic-spray-tan)
- [30-Minute Consultation](https://calendly.com/contact-ontheglowtan/30min)

These links were checked against their live Calendly scheduling screens on August 16, 2026.

## Technology

- React 19
- TypeScript
- Next.js 16 App Router
- Plain CSS in `app/globals.css`
- Next Image components for optimized image rendering

This project does not currently use a database, customer login, payment processor, contact form, or private admin page. Embroidery gallery updates are intentionally handled as normal website updates so Megan does not need to manage code or another dashboard. New approved photos can be sent to the website maintainer for addition.

## Folder guide

```text
website-source-code/
├── app/
│   ├── about/              About Megan page
│   ├── contact/            Contact page
│   ├── embroidery/         Embroidery page and gallery list
│   ├── order-policy/       Complete embroidery order policy
│   ├── privacy/            Privacy policy
│   ├── spray-tanning/      Spray pricing, booking, photos, and reviews
│   ├── globals.css         All shared layout, typography, mobile, and accessibility styles
│   ├── layout.tsx          Shared page metadata and document structure
│   ├── page.tsx            Home page
│   └── site-components.tsx Shared header, navigation, hero, and footer
├── public/
│   ├── brand/              Website logo copy
│   ├── embroidery/         Website-ready embroidery images
│   └── spray-tan/          Website-ready spray-tan images
├── tests/
│   └── rendered-html.test.mjs  Production-page and approved-link checks
├── package.json            Project commands and dependencies
└── README.md               This guide
```

The original uploaded photographs are stored outside this code repository in the larger Little Lute Studio project workspace. Do not rename, crop, resize, compress, convert, move, overwrite, or delete those originals. The files under `public/` are website-ready copies.

## Running the website locally

### Requirements

- Node.js `22.13.0` or newer
- npm, which is included with Node.js

### First-time setup

Open Terminal, move into this folder, and install the saved dependencies:

```bash
cd "/Users/stevenbrooks/Documents/ChatGPT/Little Lute Studio/website-source-code"
pnpm install
```

### Start the local preview

```bash
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

Stop the preview by returning to Terminal and pressing `Control + C`.

## Quality checks

Run these before publishing any update:

```bash
pnpm lint
pnpm test
```

`pnpm lint` checks the source for code-quality and accessibility mistakes.

`pnpm test` creates a production build and verifies all seven public pages, important navigation paths, approved contact content, and all five Calendly URLs saved in the site.

The August 16, 2026 pre-launch check also included:

- Desktop review of all seven pages
- Standard phone-width review of all seven pages
- Narrow 320-pixel phone review of all seven pages
- Horizontal-overflow checks
- Large-heading, photograph, and readable-copy collision checks
- Mobile navigation checks
- Image-loading checks after scrolling through both galleries
- Browser warning and error checks
- Keyboard focus, reduced-motion, image-alternative-text, and mobile touch-target checks
- Live opening of all five Calendly event pages

## Common content updates

### Add or replace an embroidery gallery item

1. Preserve the original photo in the main project image collection.
2. Create a separate website-ready copy.
3. Place that copy in `public/embroidery/` with a short, descriptive filename.
4. Open `app/embroidery/page.tsx`.
5. Add or update one entry in the `designs` list near the top of the file:

```ts
["/embroidery/photo-name.png", "Visible design name", "Visible category"]
```

6. Run `pnpm lint` and `pnpm test`.
7. Check the Embroidery page on both desktop and mobile before publishing.

### Change spray-tan pricing

Update the three price blocks in `app/spray-tanning/page.tsx`. Also update the matching summary on `app/contact/page.tsx` if the $75 or group price changes.

### Change a Calendly link

Update the corresponding entry in the `services` list at the top of `app/spray-tanning/page.tsx`. The main bottom booking button on that page also links to the standard Organic Spray Tan event and should be checked if that URL changes.

After changing any booking URL, open it in a browser and confirm that the correct Calendly event name and scheduling calendar appear.

### Change contact details

Contact information appears in:

- `app/site-components.tsx` — shared footer
- `app/contact/page.tsx` — complete contact page
- `app/embroidery/page.tsx` — text-to-order buttons
- `app/privacy/page.tsx` — privacy contact email

Phone links use the international-format value `+12158803494`. Visible text can remain `215-880-3494`.

### Change reviews

The three highlighted spray-tan reviews are stored in the `reviews` list near the top of `app/spray-tanning/page.tsx`. Only publish customer statements and names that Megan has permission to use.

### Change the embroidery policy

The complete displayed policy is in `app/order-policy/page.tsx`. Business policy changes should be approved before editing the live page. A qualified attorney should review the final language if formal legal assurance is needed.

### Change the privacy policy

The privacy page is in `app/privacy/page.tsx`. Update it whenever the website begins collecting information in a new way—for example, if a contact form, analytics service, customer account, payment system, or email list is added.

## Design rules that must be preserved

- Oversized display words must keep their own protected layout space.
- Large lettering must never overlap photographs, introductions, buttons, policy text, or other readable content.
- Keep hero photographs in their separate image area beneath or beside the display word, depending on screen width.
- Verify every change at desktop, tablet, standard phone, and 320-pixel phone widths.
- Do not add decorative labels, unnecessary quotes, or crowded visual elements around the hero photography.
- Customer spray-tan photos must never be presented as photos of Megan.
- Keep the site written in Megan's first-person voice as one woman, wife, and mom of three.
- Text message remains the primary embroidery order action.

## Accessibility rules

- Every meaningful image needs accurate alternative text.
- Links and buttons must explain what they do without relying only on an icon.
- Keyboard focus must remain clearly visible.
- Mobile links should remain large enough to tap comfortably.
- Text and images must not create horizontal scrolling.
- Motion must remain limited when a visitor has enabled reduced-motion settings.
- Do not communicate important meaning with color alone.

## GitHub workflow

The GitHub repository is:

[`Srb709/-little-lute-studio`](https://github.com/Srb709/-little-lute-studio)

Recommended update process:

1. Make the requested website changes locally.
2. Run `pnpm lint` and `pnpm test`.
3. Review the changed pages on desktop and mobile.
4. Commit only the intended website files.
5. Push the commit to GitHub.
6. Review the deployment preview before promoting it to the public website.

Do not commit passwords, two-factor authentication codes, API keys, private tokens, `.env` files, customer private information, or payment credentials. Environment files are ignored by Git.

## Publishing and domain setup

The source repository and the public website are separate: pushing to GitHub stores the code, while a hosting provider publishes it to a web address.

Public website: [`https://www.littlelutestudio.com`](https://www.littlelutestudio.com)

The GitHub repository is connected to the Vercel project `little-lute-studio`. Vercel automatically deploys production updates from the `main` branch. The root domain permanently redirects to the preferred `www` address, and Vercel manages HTTPS automatically.

Current launch configuration:

- Production source: the GitHub `main` branch
- Preferred address: [`https://www.littlelutestudio.com`](https://www.littlelutestudio.com)
- Redirect: `https://littlelutestudio.com` permanently redirects to the preferred `www` address
- Hosting, deployment, CDN, and HTTPS: Vercel
- Domain registration and automatic renewal: Vercel

No secret is currently required to render this website. If a future service requires a key, save it only in the hosting provider's encrypted environment-variable settings—never in this repository.

## Launch checklist

- [x] Megan approves the final desktop website
- [x] Megan approves the final mobile website
- [x] Contact phone, email, and Instagram are current
- [x] Spray-tan prices are current
- [x] Embroidery turnaround and policy are current
- [x] All five Calendly events open correctly
- [x] Every published customer image and review has permission
- [x] `pnpm lint` passes
- [x] `pnpm test` passes
- [x] Vercel deployment has no sideways scrolling or overlapping content at the tested desktop and phone widths
- [ ] Privacy and order policies receive any desired professional legal review
- [x] Final domain is connected and HTTPS works

## Safety and ownership notes

- Little Lute Studio owns and controls this project and its approved business content.
- Do not store secrets anywhere in the repository.
- Do not publish customer contact details, private order information, appointment details, or unapproved photographs.
- Do not modify the preserved originals when preparing website images.
- Keep a GitHub history of published changes so earlier versions can be recovered if necessary.
