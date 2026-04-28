# EPIC Tech Store — Website Spec

## Overview
A modern, single-page website for **EPIC**, a tech retail store selling laptops, phones, and offering tech services. The site uses existing assets (images + videos) and must feel premium, clean, and conversion-focused.

---

## Brand Identity
- **Name:** EPIC
- **Tone:** Bold, modern, trustworthy
- **Color Palette:** Dark navy/black primary, electric blue accent, white text
- **Typography:** Clean sans-serif (Inter / system-ui)

---

## Page Sections (in order)

### 1. Navigation Bar
- Logo: "EPIC" wordmark (styled)
- Links: Home, Products, Services, About, Contact
- CTA button: "Visit Store"
- Sticky on scroll, mobile hamburger menu

### 2. Hero Section
- Asset: `Home Hero section.jpeg` as full-width background
- Headline: "Your One-Stop Tech Destination"
- Subheadline: "Laptops, Phones, Accessories & Expert Tech Services"
- Two CTAs: "Shop Now" + "Our Services"
- Overlay gradient for text readability

### 3. Featured Products (Video Showcase)
- Asset: `Instore.mp4` — autoplay loop muted background video
- Overlay text: "Experience EPIC In-Store"

### 4. Product Categories Grid
- Asset: `Our Products and services.jpeg` as section intro
- Cards for:
  - Laptops (HP, Dell, Lenovo, Apple, ThinkPad)
  - Phones (iPhones, Samsung)
  - Refurbished Laptops
  - Tech Services
- Each card has image + label + "View More" button

### 5. Laptops Showcase
- Brand tabs: HP | Dell | Lenovo | Apple | ThinkPad
- Each tab shows a grid of product images from assets
  - HP: `HP new.jpeg`, `HP fold.jpeg`, `HP fold 2.jpeg`, `HP touch.jpeg`, `HP touch 2.jpeg`, `Modern HP.jpeg`, `HP older and new models.jpeg`
  - Dell: `Dell .jpeg`, `Dell Fold.jpeg`
  - Lenovo: `Lenovo New.jpeg`, `Lenovo Inside.jpeg`, `Lenovo PC.jpeg`
  - Apple: `Apple PC.jpeg`, `Macbookpro.jpeg`, `iPRO.jpeg`
  - ThinkPad: `Thinkpad touch.jpeg`, `Thinkpad touch 2.jpeg`, `Thinkpad refurbished.jpeg`

### 6. Phones Section
- Video cards: `iPhones.mp4`, `Samsung Phones.mp4`
- Autoplay, muted, loop
- Labels: "iPhones" and "Samsung Galaxy"

### 7. Refurbished Laptops
- Asset: `Refurbished Laptops.jpeg`
- Highlight: Quality tested, warranty included, budget-friendly
- CTA: "Browse Refurbished"

### 8. Tech Services
- Assets: `Tech Services.jpeg`, `Tech Services 2.jpeg`
- Services listed: Repairs, Upgrades, Data Recovery, Virus Removal, Screen Replacement
- Two-column layout with images

### 9. About Us
- Asset: `About US.jpeg`, `Our team.jpeg`, `in_store.jpeg`
- WhatsApp images: `WhatsApp Image 2026-04-27 at 9.51.54 AM.jpeg`, `WhatsApp Image 2026-04-27 at 9.51.58 AM.jpeg`
- Story, team, and in-store photos

### 10. Contact Us
- Asset: `Contact Us.jpeg` as background
- Contact form: Name, Email, Phone, Message
- Store info: address, phone, email, hours
- Social media links

### 11. Footer
- Logo, nav links, social icons, copyright

---

## Technical Requirements
- Pure HTML + CSS (no frameworks)
- Fully responsive (mobile-first)
- Smooth scroll navigation
- CSS animations on scroll (fade-in)
- Video elements: autoplay, muted, loop, playsinline
- Tab switching via vanilla JS
- Hamburger menu via vanilla JS
