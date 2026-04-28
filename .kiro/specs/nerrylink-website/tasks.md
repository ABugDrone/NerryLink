# Implementation Plan: NerryLink Website

## Overview

Scaffold a Next.js 14+ TypeScript static-export site inside `nerrylink-website/` at the workspace root, implement all 16 components and library modules, wire the FOMO/Zustand system, build the contact form with WhatsApp integration, and validate correctness with Vitest unit tests and fast-check property-based tests.

## Tasks

- [x] 1. Scaffold Next.js project and configure static export
  - Run `npx create-next-app@latest nerrylink-website --typescript --tailwind --app --no-src-dir` then move source under `src/`
  - Set `output: 'export'` in `next.config.js` and confirm `out/` is the build target
  - Create `firebase.json` with `"public": "out"` and `"ignore": ["firebase.json", "**/.*", "**/node_modules/**"]`
  - Install runtime deps: `framer-motion zustand react-hook-form @hookform/resolvers zod`
  - Install dev deps: `fast-check vitest @testing-library/react @testing-library/jest-dom @vitejs/plugin-react jsdom`
  - Add `vitest.config.ts` with jsdom environment and `@testing-library/jest-dom` setup file
  - Create `src/styles/glassmorphism.css` with `.glass` and `.glass-dark` utility classes per Requirements 2.1–2.2
  - Import `glassmorphism.css` in `src/app/globals.css`
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 2.1, 2.2, 2.9_

- [x] 2. Implement library modules and data layer
  - [x] 2.1 Create `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge) and `formatCountdown(ms: number): CountdownDisplay`
    - `formatCountdown` must decompose milliseconds into `{ days, hours, minutes, seconds, expired }`
    - _Requirements: 11.2, 11.3_

  - [ ]* 2.2 Write property tests for `formatCountdown` (Properties 5 & 6)
    - **Property 5: CountdownTimer display correctness** — generate random future ms offsets, assert `days*86400 + hours*3600 + minutes*60 + seconds` equals total remaining seconds ±1
    - **Property 6: CountdownTimer expiry** — generate past/zero ms values, assert `expired: true` and all numeric fields `0`
    - **Validates: Requirements 11.2, 11.3**

  - [x] 2.3 Create `src/lib/whatsapp.ts` — `generateWhatsAppMessage`, `buildWhatsAppURL`, `openWhatsApp`
    - Template: `Hello NerryLinks! My name is "{name} {lastName}" aka "{nickname}" (if provided). I am from "{area}" of "{state}". Please I will be needing "{serviceNeeds}". Please confirm on WhatsApp, Call or Text if you are available on "{date} {time}" to talk business.`
    - Omit the `aka "{nickname}"` clause when nickname is absent or empty
    - `buildWhatsAppURL` must `encodeURIComponent` the message and target `https://wa.me/2348166490440`
    - `openWhatsApp` falls back to `window.location.href` if `window.open` is blocked
    - _Requirements: 9.4, 9.5, 10.3_

  - [ ]* 2.4 Write property tests for `generateWhatsAppMessage` (Properties 3 & 4)
    - **Property 3: WhatsApp message template completeness** — generate random valid `ContactFormData`, assert name, lastName, area, state, serviceNeeds, date, time all appear verbatim
    - **Property 4: WhatsApp message nickname inclusion** — generate data with/without nickname, assert conditional inclusion/omission
    - **Validates: Requirements 9.4**

  - [x] 2.5 Create `src/lib/validation.ts` — `contactFormSchema` (Zod), `isWithinWorkingHours(date, time)`, `getOutOfHoursMessage()`
    - `isWithinWorkingHours`: returns `false` for Sunday or times outside 09:00–19:30 Mon–Sat
    - `getOutOfHoursMessage()` returns the exact string from Requirement 9.3
    - `contactFormSchema` enforces all required fields and max-100-word `serviceNeeds`
    - _Requirements: 9.1, 9.2, 9.3, 9.7_

  - [ ]* 2.6 Write property tests for `isWithinWorkingHours` (Properties 1 & 2)
    - **Property 1: Working hours validation rejects out-of-range inputs** — generate random Sunday dates and Mon–Sat dates with times outside [09:00, 19:30], assert `false`
    - **Property 2: Working hours validation accepts in-range inputs** — generate random Mon–Sat dates with times in [09:00, 19:30], assert `true`
    - **Validates: Requirements 9.3**

  - [ ]* 2.7 Write property tests for `contactFormSchema` (Properties 9, 10 & 11)
    - **Property 9: schema rejects invalid submissions** — generate objects with one or more required fields missing, assert `success: false`
    - **Property 10: schema accepts valid submissions** — generate fully valid `ContactFormData`, assert `success: true`
    - **Property 11: serviceNeeds word count enforcement** — generate `serviceNeeds` strings > 100 words, assert `success: false`
    - **Validates: Requirements 9.1, 9.2**

  - [x] 2.8 Create static data files: `src/lib/products.ts`, `src/lib/services.ts`, `src/lib/team.ts`
    - `products.ts`: populate with computers (HP, Dell, Lenovo, MacBook, ThinkPad, refurbished models), mobile devices, and automotive items; set `whatsappInquiryText` per product
    - `services.ts`: Technical Services (repairs, software installations, hardware upgrades) and Support Services (technical support, consultation, training and setup); set `whatsappBookingText` per service
    - `team.ts`: three members — Oko Jerimial Ekpa (CEO), Eric Oloyede (Chief Operations and Marketing), Denis Christopher (Chief Technician) — with Facebook CDN photo URLs and Facebook profile links
    - _Requirements: 5.1, 5.2, 6.1, 6.2, 6.3, 8.1, 8.5_

- [x] 3. Checkpoint — Ensure all library tests pass
  - Run `vitest --run` and confirm all property and unit tests in `src/lib/` pass before proceeding.

- [x] 4. Implement Zustand FOMO store
  - [x] 4.1 Create `src/store/fomoStore.ts` with `FOMOState` interface and Zustand store
    - Fields: `countdownTarget`, `stockLevels`, `viewCounts` and their setters
    - Seed initial values: a countdown target ~7 days from a fixed reference date, stock levels per product id, view counts per product id
    - _Requirements: 11.1_

- [x] 5. Implement UI primitive components
  - [x] 5.1 Create `src/components/ui/GlassCard.tsx`
    - Renders `<div>` with `.glass` class; accepts `children`, `className`, `onClick`
    - _Requirements: 2.5_

  - [x] 5.2 Create `src/components/ui/GlassButton.tsx`
    - Renders `<button>` or Next.js `<Link>` based on `href` prop
    - Supports `variant: 'primary' | 'secondary' | 'whatsapp'`; `whatsapp` variant uses `#25D366`
    - _Requirements: 2.6_

  - [x] 5.3 Create `src/components/ui/GlassModal.tsx`
    - Full-screen overlay with `.glass-dark` centred panel
    - Focus trap: Tab/Shift+Tab cycle within modal; Escape closes
    - Mount/unmount via Framer Motion `AnimatePresence`
    - _Requirements: 2.7_

- [x] 6. Implement FOMO display components
  - [x] 6.1 Create `src/components/fomo/CountdownTimer.tsx`
    - Accepts `targetDate: string` (ISO 8601)
    - Uses `setInterval(1000)` in `useEffect`; clears on unmount
    - Displays `DD : HH : MM : SS`; shows "Offer Expired" when `expired: true` or invalid date
    - _Requirements: 11.2, 11.3_

  - [x] 6.2 Create `src/components/fomo/StockIndicator.tsx`
    - Accepts `quantity: number`
    - Renders "Only {quantity} left in stock!" when `quantity ≤ 5`, else "In Stock"
    - _Requirements: 11.4, 11.5_

  - [ ]* 6.3 Write property tests for `StockIndicator` (Property 7)
    - **Property 7: StockIndicator threshold** — generate integers ≤ 5 and > 5, assert correct render text
    - **Validates: Requirements 11.4, 11.5**

  - [x] 6.4 Create `src/components/fomo/SocialProof.tsx`
    - Accepts `viewCount: number`
    - Renders "{viewCount} people viewed this today"
    - _Requirements: 11.6_

  - [ ]* 6.5 Write property tests for `SocialProof` (Property 8)
    - **Property 8: SocialProof display** — generate random non-negative integers, assert viewCount appears in rendered output
    - **Validates: Requirements 11.6**

- [x] 7. Implement layout components
  - [x] 7.1 Create `src/components/layout/Navigation.tsx`
    - Links: Home `/`, About `/about`, Products `/products`, Services `/services`, Team `/team`, Contact `/contact`
    - Highlights active route via `usePathname()`
    - Mobile: hamburger-triggered slide-down menu with Framer Motion
    - _Requirements: 3.1_

  - [x] 7.2 Create `src/components/layout/Header.tsx`
    - Fixed top bar; applies `.glass` background after scroll via `useScrollPosition` hook
    - Contains brand logo/name and `<Navigation>`
    - _Requirements: 3.1, 3.2_

  - [x] 7.3 Create `src/components/layout/Footer.tsx`
    - Displays business name, PrimaryWhatsApp (+2348166490440), working hours (Mon–Sat 09:00–19:30), Facebook link, copyright
    - _Requirements: 3.3_

  - [x] 7.4 Create root layout `src/app/layout.tsx`
    - Wraps all pages with `<Header>` and `<Footer>`
    - Includes `<meta name="viewport">` and Open Graph meta tags
    - Imports global styles
    - _Requirements: 3.4, 12.6, 12.7_

- [x] 8. Implement form and WhatsApp floating button
  - [x] 8.1 Create `src/components/forms/ContactForm.tsx`
    - Ten fields wired with React Hook Form + Zod resolver (`contactFormSchema`)
    - Inline error messages adjacent to each invalid field
    - `serviceNeeds` textarea with live word-count indicator (turns red > 100 words)
    - On valid submit: call `openWhatsApp(data)` from `src/lib/whatsapp.ts`
    - Out-of-hours validation on date/time fields using `isWithinWorkingHours`; display `getOutOfHoursMessage()` below those fields
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7, 9.8_

  - [x] 8.2 Create `src/components/forms/WhatsAppIntegration.tsx` (floating FAB)
    - Fixed bottom-right; always visible on all pages
    - WhatsApp SVG icon in `#25D366`; pulsing Framer Motion animation
    - Opens `https://wa.me/2348166490440` in new tab on click
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5_

- [x] 9. Implement section components
  - [x] 9.1 Create `src/components/sections/Hero.tsx`
    - Full-viewport-height; background `assets/Home Hero section.jpeg` with dark overlay
    - Headline "NerryLink Computer and Gadgets", sub-headline, two GlassButtons (Shop Now → `/products`, Contact Us → `/contact`)
    - Embeds `<CountdownTimer>` reading `countdownTarget` from Zustand store
    - Framer Motion entrance animations on headline and buttons
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 11.7_

  - [x] 9.2 Create `src/components/sections/ProductShowcase.tsx`
    - Category tabs: "Computers & Accessories", "Mobile Devices", "Automotive"
    - Product GlassCards with `<StockIndicator>` and `<SocialProof>` from Zustand store; "Refurbished" badge where applicable
    - Click opens GlassModal with product detail and WhatsApp inquiry GlassButton
    - Uses Next.js `Image` with `alt`, `width`, `height`, `placeholder="blur"` for product images
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 12.2, 12.3_

  - [x] 9.3 Create `src/components/sections/ServiceGrid.tsx`
    - Two categories: "Technical Services" and "Support Services"
    - Each service as GlassCard with glass-style SVG icon and name
    - Click opens GlassModal with description and "Book via WhatsApp" GlassButton
    - FOMO urgency message "Book your service slot now" per Requirement 11.7
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 11.7_

  - [x] 9.4 Create `src/components/sections/TeamSection.tsx`
    - Three GlassCards: photo, name, role, Facebook SVG icon link
    - `onError` handler swaps photo `src` to local SVG placeholder avatar
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

  - [x] 9.5 Create `src/components/sections/ContactSection.tsx`
    - Wraps `<ContactForm>` and Google Maps `<iframe>` embed (no API key)
    - _Requirements: 7.3, 9.1_

- [x] 10. Implement App Router pages
  - [x] 10.1 Create `src/app/page.tsx` (Home) — renders `<Hero>` and `<ProductShowcase>` preview
    - Open Graph meta: `og:title`, `og:description`, `og:image`
    - _Requirements: 3.4, 4.1–4.6, 12.7_

  - [x] 10.2 Create `src/app/about/page.tsx` — business overview, CAC registration, location, Facebook link, Google Maps iframe, WorkingHours
    - _Requirements: 7.1, 7.2, 7.3, 7.4_

  - [x] 10.3 Create `src/app/products/page.tsx` — renders full `<ProductShowcase>`
    - _Requirements: 5.1–5.7_

  - [x] 10.4 Create `src/app/services/page.tsx` — renders `<ServiceGrid>`
    - _Requirements: 6.1–6.5_

  - [x] 10.5 Create `src/app/team/page.tsx` — renders `<TeamSection>`
    - _Requirements: 8.1–8.5_

  - [x] 10.6 Create `src/app/contact/page.tsx` — renders `<ContactSection>`
    - _Requirements: 9.1–9.8_

  - [x] 10.7 Add `<WhatsAppIntegration>` floating button to root layout so it appears on every page
    - _Requirements: 10.1, 10.4_

- [x] 11. Copy and organise assets
  - Copy all images from workspace `assets/` into `nerrylink-website/public/assets/images/`
  - Copy video files (`Instore.mp4`, `iPhones.mp4`, `Samsung Phones.mp4`) into `nerrylink-website/public/assets/videos/`
  - Create `nerrylink-website/public/assets/icons/` and add glass-style SVG icons (WhatsApp, Facebook, phone, clock, map-pin, wrench, headset, laptop, mobile, car)
  - Create a local SVG placeholder avatar at `nerrylink-website/public/assets/icons/avatar-placeholder.svg`
  - Update all `imagePath` references in `src/lib/products.ts` and `src/lib/team.ts` to match the new paths
  - _Requirements: 5.6, 8.4, 8.5, 2.4_

- [x] 12. Checkpoint — Ensure all tests pass and build succeeds
  - Run `vitest --run` — all property-based and unit tests must pass
  - Run `next build` inside `nerrylink-website/` — build must complete without errors and produce `out/index.html`
  - Fix any TypeScript or build errors before proceeding.

- [x] 13. Accessibility and semantic HTML pass
  - Audit every page component and replace any non-semantic `<div>` wrappers with `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>` as appropriate
  - Verify every `<img>` and Next.js `<Image>` has a non-empty `alt` attribute
  - Add visible `:focus-visible` outline styles to all interactive elements in `glassmorphism.css`
  - Ensure all SVG icons have `aria-hidden="true"` and adjacent visible labels or `aria-label` on their parent buttons
  - _Requirements: 12.3, 12.4, 12.5, 12.6_

- [x] 14. Final checkpoint — Full build and test validation
  - Run `vitest --run` one final time — all tests must pass
  - Run `next build` — `out/` directory must contain `index.html` and all page directories
  - Confirm `firebase.json` is present with `"public": "out"` so the site is ready for `firebase deploy`
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- Each task references specific requirements for traceability
- Checkpoints (tasks 3, 12, 14) ensure incremental validation
- Property tests validate universal correctness properties using fast-check (minimum 100 iterations each)
- Unit tests validate specific examples and edge cases
- The floating WhatsApp button (task 8.2) must be wired into the root layout (task 10.7) to satisfy Requirement 10.4
- All 11 correctness properties from the design document are covered by property-based test sub-tasks in tasks 2.2, 2.4, 2.6, 2.7, 6.3, and 6.5
