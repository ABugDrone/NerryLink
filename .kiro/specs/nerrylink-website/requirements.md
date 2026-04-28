# Requirements Document

## Introduction

NerryLink Computer and Gadgets (CAC: NerryLink's Global Services) is a Nigerian tech retail and services business. This feature covers the full static website hosted on Firebase (nerrylinks.web.app), built with Next.js 14+ static export. The site targets Nigerian tech consumers and businesses, showcasing products (computers, mobile devices, automotive), services (technical and support), and enabling customer contact via WhatsApp and a booking form. The UI follows a glassmorphism/liquid glass design inspired by iOS 24.

## Glossary

- **Website**: The NerryLink static Next.js site deployed to nerrylinks.web.app
- **Visitor**: Any person browsing the Website
- **ContactForm**: The multi-field booking/inquiry form on the Contact page
- **WhatsApp_Integration**: The client-side logic that constructs and opens wa.me URLs
- **FOMO_System**: The Zustand-powered store and UI components that display urgency/social-proof signals
- **GlassCard**: A reusable React component styled with glassmorphism CSS
- **GlassButton**: A reusable React button component styled with glassmorphism CSS
- **GlassModal**: A reusable React modal component styled with glassmorphism CSS
- **CountdownTimer**: A FOMO component that displays a live countdown to a deadline
- **StockIndicator**: A FOMO component that displays remaining stock quantity
- **SocialProof**: A FOMO component that displays view counts and recent activity
- **Header**: The site-wide navigation bar component
- **Footer**: The site-wide footer component
- **Hero**: The full-width landing section on the Home page
- **ProductShowcase**: The section displaying product categories and individual items
- **ServiceGrid**: The section displaying service categories
- **TeamSection**: The section displaying team member profiles
- **ContactSection**: The section containing the ContactForm and map embed
- **Validator**: The client-side form validation logic using Zod schemas
- **WorkingHours**: Monday–Saturday, 09:00–19:30 (WAT)
- **PrimaryWhatsApp**: +2348166490440
- **SecondaryWhatsApp**: +2348149588574

---

## Requirements

### Requirement 1: Static Site Generation and Hosting

**User Story:** As the business owner, I want the website exported as a fully static site, so that it can be hosted on Firebase Hosting's free tier without a server.

#### Acceptance Criteria

1. THE Website SHALL be built with Next.js 14+ configured with `output: 'export'` in `next.config.js`.
2. THE Website SHALL produce a static `out/` directory containing only HTML, CSS, JavaScript, and asset files after running the build command.
3. THE Website SHALL be deployable to Firebase Hosting using a `firebase.json` configuration with `"public": "out"`.
4. WHEN the build command is executed, THE Website SHALL complete without server-side runtime dependencies.
5. THE Website SHALL achieve a Lighthouse performance score of 90 or above on desktop.
6. THE Website SHALL achieve a Largest Contentful Paint (LCP) of less than 2.5 seconds on a simulated fast 3G connection.

---

### Requirement 2: Glassmorphism Design System

**User Story:** As a Visitor, I want a visually modern interface, so that the site feels premium and trustworthy.

#### Acceptance Criteria

1. THE Website SHALL apply a glassmorphism design system with the `.glass` utility class defined as `background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2); border-radius: 16px;`.
2. THE Website SHALL apply a `.glass-dark` utility class defined as `background: rgba(0,0,0,0.1); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1);`.
3. THE Website SHALL use a color palette of tech blues, tech greens, WhatsApp green (#25D366), and semi-transparent whites and blacks.
4. THE Website SHALL use custom glass-style SVG icons throughout and SHALL NOT use emoji characters as icons.
5. THE GlassCard SHALL render child content inside a container styled with the `.glass` utility class.
6. THE GlassButton SHALL render as a button element styled with the `.glass` utility class and SHALL support an `onClick` handler prop.
7. THE GlassModal SHALL render an overlay and a centered panel styled with the `.glass-dark` utility class and SHALL trap focus while open.
8. THE Website SHALL use Framer Motion for all entrance and transition animations.
9. THE Website SHALL use Tailwind CSS as the primary styling framework with custom glassmorphism utilities defined in `src/styles/glassmorphism.css`.

---

### Requirement 3: Site Navigation and Layout

**User Story:** As a Visitor, I want clear navigation, so that I can find products, services, team info, and contact details easily.

#### Acceptance Criteria

1. THE Header SHALL display the NerryLink brand name and logo and SHALL include navigation links to Home, About, Products, Services, Team, and Contact pages.
2. WHILE a Visitor scrolls past the top of the page, THE Header SHALL remain fixed at the top of the viewport with a glass background applied.
3. THE Footer SHALL display the business name, PrimaryWhatsApp number, working hours (Monday–Saturday 09:00–19:30), Facebook page link, and a brief copyright notice.
4. THE Website SHALL render all pages as Next.js App Router pages under `src/app/`.
5. WHEN a Visitor navigates between pages, THE Website SHALL transition without a full page reload using Next.js client-side routing.

---

### Requirement 4: Home Page — Hero Section

**User Story:** As a Visitor, I want an impactful landing experience, so that I immediately understand what NerryLink offers.

#### Acceptance Criteria

1. THE Hero SHALL display a full-viewport-height section with a background image or gradient and an overlay.
2. THE Hero SHALL display the headline "NerryLink Computer and Gadgets" and a sub-headline describing the business value proposition.
3. THE Hero SHALL display a primary call-to-action GlassButton labelled "Shop Now" that navigates to the Products page.
4. THE Hero SHALL display a secondary call-to-action GlassButton labelled "Contact Us" that navigates to the Contact page.
5. THE Hero SHALL display a FOMO_System urgency message using the CountdownTimer component for a current promotion.
6. WHEN the Hero section mounts, THE Hero SHALL animate its headline and buttons into view using Framer Motion entrance animations.

---

### Requirement 5: Products Page — Product Showcase

**User Story:** As a Visitor, I want to browse available products by category, so that I can identify items I want to purchase.

#### Acceptance Criteria

1. THE ProductShowcase SHALL display three top-level product categories: "Computers & Accessories", "Mobile Devices", and "Automotive".
2. THE ProductShowcase SHALL display individual product cards inside each category using the GlassCard component.
3. WHEN a Visitor clicks a product card, THE ProductShowcase SHALL open a GlassModal displaying the product name, description, and a WhatsApp inquiry button.
4. THE ProductShowcase SHALL display a StockIndicator on each product card showing remaining stock quantity.
5. THE ProductShowcase SHALL display a SocialProof indicator on each product card showing the number of people who viewed the product that day.
6. THE ProductShowcase SHALL use images from the `public/assets/images/` directory for product visuals.
7. WHERE a product is marked as refurbished, THE ProductShowcase SHALL display a "Refurbished" badge on the product card.

---

### Requirement 6: Services Page — Service Grid

**User Story:** As a Visitor, I want to understand the services offered, so that I can decide whether to book a service appointment.

#### Acceptance Criteria

1. THE ServiceGrid SHALL display two service categories: "Technical Services" and "Support Services".
2. THE ServiceGrid SHALL list the following under "Technical Services": repairs, software installations, and hardware upgrades.
3. THE ServiceGrid SHALL list the following under "Support Services": technical support, consultation, and training and setup.
4. WHEN a Visitor clicks a service card, THE ServiceGrid SHALL open a GlassModal with a brief service description and a "Book via WhatsApp" GlassButton.
5. THE ServiceGrid SHALL render each service as a GlassCard with a glass-style SVG icon and a service name label.

---

### Requirement 7: About Page

**User Story:** As a Visitor, I want to learn about NerryLink's background, so that I can trust the business before making a purchase.

#### Acceptance Criteria

1. THE About page SHALL display a business overview section describing NerryLink Computer and Gadgets and its CAC registration as NerryLink's Global Services.
2. THE About page SHALL display the business location in Nigeria and a link to the Facebook page at `https://www.facebook.com/profile.php?id=61580632770804`.
3. THE About page SHALL display the Google Maps embed using the provided iframe src URL without requiring an API key.
4. THE About page SHALL display the WorkingHours prominently.

---

### Requirement 8: Team Page — Team Section

**User Story:** As a Visitor, I want to see who runs NerryLink, so that I can feel confident about the people behind the business.

#### Acceptance Criteria

1. THE TeamSection SHALL display a profile card for each of the three team members: Oko Jerimial Ekpa (CEO), Eric Oloyede (Chief Operations and Marketing), and Denis Christopher (Chief Technician).
2. THE TeamSection SHALL render each profile card as a GlassCard containing the member's photo, full name, and role title.
3. THE TeamSection SHALL display a Facebook profile link on each card using a glass-style SVG Facebook icon.
4. WHEN a team member's photo fails to load, THE TeamSection SHALL display a fallback avatar placeholder.
5. THE TeamSection SHALL use the provided Facebook CDN image URLs as the default photo sources for each team member.

---

### Requirement 9: Contact Page — Contact Form

**User Story:** As a Visitor, I want to submit a booking inquiry, so that I can schedule a service or product consultation with NerryLink.

#### Acceptance Criteria

1. THE ContactForm SHALL include the following fields: `name` (required), `lastName` (required), `nickname` (optional), `email` (optional, valid email format), `phone` (required), `area` (required), `state` (required), `serviceNeeds` (required, textarea, maximum 100 words), `date` (required), `time` (required).
2. THE Validator SHALL enforce all required fields and SHALL display an inline error message adjacent to each invalid field when the Visitor attempts to submit.
3. THE Validator SHALL reject a `date` and `time` combination that falls outside WorkingHours (Sunday or outside 09:00–19:30 Monday–Saturday) and SHALL display the message: "We do not work on Sundays or during these hours. However, you can call us to see if it's possible to make an exception for you. You are precious and we value you as a person. Call/WhatsApp or Text +2348166490440".
4. WHEN the ContactForm passes validation, THE WhatsApp_Integration SHALL construct a wa.me URL targeting PrimaryWhatsApp using the template: `Hello NerryLinks! My name is "{name} {lastName}" aka "{nickname}" (if provided). I am from "{area}" of "{state}". Please I will be needing "{serviceNeeds}". Please confirm on WhatsApp, Call or Text if you are available on "{date} {time}" to talk business.`
5. WHEN the ContactForm passes validation, THE WhatsApp_Integration SHALL open the constructed wa.me URL in a new browser tab.
6. THE ContactForm SHALL be built using React Hook Form for field registration and state management.
7. THE Validator SHALL use Zod schemas to define and enforce all field validation rules.
8. THE ContactForm SHALL display a character/word count indicator on the `serviceNeeds` textarea that updates as the Visitor types.

---

### Requirement 10: WhatsApp Integration — Floating Button

**User Story:** As a Visitor, I want a persistent WhatsApp contact button, so that I can reach NerryLink at any time while browsing.

#### Acceptance Criteria

1. THE WhatsApp_Integration SHALL render a floating action button fixed to the bottom-right corner of every page.
2. THE floating button SHALL display the WhatsApp SVG icon in WhatsApp green (#25D366) and SHALL NOT use an emoji.
3. WHEN a Visitor clicks the floating button, THE WhatsApp_Integration SHALL open `https://wa.me/2348166490440` in a new browser tab.
4. WHILE the Visitor is on the Contact page, THE WhatsApp_Integration SHALL keep the floating button visible.
5. THE floating button SHALL display a pulsing animation to draw attention.

---

### Requirement 11: FOMO System

**User Story:** As a Visitor, I want to see urgency and social-proof signals, so that I am motivated to act quickly on offers and bookings.

#### Acceptance Criteria

1. THE FOMO_System SHALL manage all urgency state (countdown targets, stock levels, view counts) in a Zustand store defined in `src/store/fomoStore.ts`.
2. THE CountdownTimer SHALL accept a target ISO datetime string prop and SHALL display days, hours, minutes, and seconds remaining, updating every second.
3. WHEN the CountdownTimer reaches zero, THE CountdownTimer SHALL display "Offer Expired" and SHALL stop updating.
4. THE StockIndicator SHALL accept a `quantity` number prop and SHALL display "Only {quantity} left in stock!" when `quantity` is 5 or fewer.
5. WHEN `quantity` is greater than 5, THE StockIndicator SHALL display "In Stock".
6. THE SocialProof SHALL accept a `viewCount` number prop and SHALL display "{viewCount} people viewed this today".
7. THE FOMO_System SHALL display urgency messaging such as "Offer expires soon" and "Book your service slot now" in the Hero and ServiceGrid sections.

---

### Requirement 12: Performance and Accessibility

**User Story:** As a Visitor on a mobile device in Nigeria, I want the site to load quickly and be usable, so that I can browse even on a slower connection.

#### Acceptance Criteria

1. THE Website SHALL load its initial visible content in under 2 seconds on a simulated 3G connection.
2. THE Website SHALL use Next.js `Image` component with appropriate `width`, `height`, and `priority` props for all above-the-fold images to enable automatic optimisation.
3. THE Website SHALL include `alt` text on every `img` and Next.js `Image` element.
4. THE Website SHALL be fully navigable using a keyboard alone, with visible focus indicators on all interactive elements.
5. THE Website SHALL use semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`) throughout all pages.
6. THE Website SHALL include a `<meta name="viewport">` tag and SHALL render correctly on viewport widths from 320px to 1920px.
7. THE Website SHALL include Open Graph meta tags (`og:title`, `og:description`, `og:image`) on every page for social sharing previews.
