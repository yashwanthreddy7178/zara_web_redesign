# ZARA · Redesigned for the Shopper

> A UX + Frontend case study — concept rebuild of Zara's online storefront, focused on fixing the navigation, readability, and product-discovery problems documented across published UX reviews.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://zara-web-redesign.vercel.app/)
[![GitHub](https://img.shields.io/badge/Source-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/yashwanthreddy7178/zara_web_redesign)

---

## Table of Contents

- [Overview](#overview)
- [The Problem](#the-problem)
- [Key Statistics](#key-statistics)
- [What I Built](#what-i-built)
- [Before vs. After](#before-vs-after)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Honest Scope & Limitations](#honest-scope--limitations)
- [Next Steps](#next-steps)
- [References](#references)
- [Disclaimer](#disclaimer)

---

## Overview

Zara runs one of fashion's most recognizable online stores. Its editorial minimalism sets the tone for the industry — but that same aesthetic hides the controls shoppers reach for every day.

This project is a **self-directed concept rebuild** of Zara's core shopping flow as a React single-page application. The goal: test a more usable direction while keeping a fashion-forward look. The redesign covers the **full shopping path** — Home, Product, Search, Wishlist, Cart, Login, and Signup — across **7 routes** and **13 components**.

> **Role:** Design + Frontend build  
> **Type:** Self-directed concept / portfolio piece

---

## The Problem

Independent UX reviewers consistently report the same cluster of issues on zara.com:

| Category | Issue | Source |
|:---|:---|:---|
| **Navigation** | The primary navigation sits behind a small hamburger icon; the drop-down menu is nearly invisible | [Reyes, Medium](https://medium.com/marketing-in-the-age-of-digital/my-problem-with-zaras-user-experience-100a0ee4ab0b) |
| **Readability** | Product copy renders in small, low-contrast type — hard to read and inaccessible | [UX Planet](https://uxplanet.org/evaluating-the-user-experience-of-zaras-online-store-71790986bcf0) |
| **Affordance** | The interface gives little signal for what responds to a tap; hover states are absent on key elements | [Bressler, Medium](https://medium.com/@jill_8105/a-usability-analysis-of-zara-com-33bbc0712234) |
| **Orientation** | The store opens on a single product with no categories in view — like starting a book from the middle | [UX Planet](https://uxplanet.org/evaluating-the-user-experience-of-zaras-online-store-71790986bcf0) |
| **Discovery** | Missing sort options and a filter control fixed in a small, transparent corner | [UXmatters](https://www.uxmatters.com/mt/archives/2023/09/a-usability-evaluation-of-the-zara-website.php) |
| **Trust** | No visible customer reviews and weak supporting detail on product pages | [UX Planet](https://uxplanet.org/evaluating-the-user-experience-of-zaras-online-store-71790986bcf0) |

---

## Key Statistics

These industry benchmarks illustrate why storefront friction matters:

| Metric | Value | Source |
|:---|:---|:---|
| Average cart abandonment rate | **70.22%** (across 50 studies) | [Baymard Institute](https://baymard.com/lists/cart-abandonment-rate) |
| Conversion lift from 0.1s faster load | **+8.4%** (across 37 brands) | [Google / Deloitte](https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/milliseconds-earn-millions-why-mobile-speed-can-slow-or-grow-business/) |
| Home pages with low-contrast text | **83.9%** (of 1 million) | [WebAIM Million 2026](https://webaim.org/projects/million/) |
| Search-user conversion multiplier | **1.8×** vs. browsers | [Econsultancy](https://econsultancy.com/site-search-seven-tips-to-help-improve-your-website-search/) |

---

## What I Built

A React SPA with a purple accent replacing the original monochrome — giving every action a clear, high-contrast signal. The redesign directly addresses each documented problem:

| # | Original Problem | Redesign Response |
|:--|:---|:---|
| 01 | Menu hides behind a faint hamburger icon | Fixed top header with search, wishlist, account, and cart always visible; secondary category row; slide-out drawer with full category trees |
| 02 | Low-contrast text and unclear actions | High-contrast purple primary buttons; "Shop Now" and "Add to Cart" read as buttons at a glance; dark text on white for body copy |
| 03 | Few cues for what is clickable | Hover and focus states on links, buttons, and product cards; visible focus ring on menu toggle and form inputs |
| 04 | Store opens with no orientation | Full-screen hero with one headline and one action, followed by structured flow: New Collections → Join Life → Newsletter |
| 05 | Missing sort and buried filter | Dedicated search page with live suggestions and a 7-control filter panel (size, color, price, sort, gender, discount, collection) |
| 06 | No visible reviews on product detail | Product page with rating summary, review list, and a working review form with star input |

---

## Key Features

### 🧭 Navigation & Header
- Fixed header across every page with logo, search, wishlist, account, and cart
- Category row with **SALE** highlighted in red
- Drawer menu expands six category groups with full subcategory trees
- Account dropdown adapts based on login state
- Click-outside-to-close behavior; every icon button carries an `aria-label`

### 🛍️ Product Page
- Thumbnail gallery with main image viewer
- Color options, price with struck-through reference price, and specs
- **Add to Cart** confirms with animated state change to "ADDED"
- Collapsible sections: Reviews, Description, Details, and Styling
- Rating summary, sample reviews, and working review form with star input

### 🔍 Search & Filtering
- Dedicated `/search` route with live suggestions
- 7-control filter panel: Size, Color, Price, Sort, Gender, Discount, Collection
- Responsive grid: 1 column (mobile) → 4 columns (desktop)
- Heart icon to mark any result for the wishlist

### 🛒 Cart
- Item list with image, price, size, and quantity steppers
- Quantity floor of 1; summary shows subtotal, tax, delivery, and total
- Remove control on every row

### ❤️ Wishlist
- Mirrors the product card pattern with toggle hearts

### 🔐 Authentication
- Login and signup routes gate account features
- Shared `AuthContext` provider with `useAuth` hook

---

## Tech Stack

| Layer | Technology |
|:---|:---|
| **UI Library** | React 18.2 |
| **Routing** | React Router 6 |
| **Styling** | Tailwind CSS 3.4 |
| **Build Tool** | Create React App |
| **Icons** | lucide-react, FontAwesome, MUI Icons, react-icons |
| **Deployment** | Vercel |

---

## Architecture

### Component Design
- **13 components** wrapped in a shared `Header` + `Footer` shell
- `AuthContext` provider holds login state and exposes `login` / `logout` via a `useAuth` hook

### Performance
- Landing page sections (`Hero`, `NewCollections`, `JoinLife`, `Newsletter`) wrapped in `React.lazy` + `Suspense`
- Bundle splits so below-the-fold sections load on demand with a fallback

### Accessibility
- Every icon-only button carries an `aria-label`
- Images use descriptive `alt` text
- Visible focus rings on menu toggle, newsletter field, and login action
- All controls respond to the keyboard

### Responsive Design
- Mobile-first grids using Tailwind breakpoints (`sm`, `md`, `lg`)
- Product grids step from 1 column → 4 columns
- Product layout stacks on mobile, splits into 40/60 columns on desktop

---

## Project Structure

```
zara_web_redesign/
├── public/                      # Static assets & index.html
├── src/
│   ├── components/
│   │   ├── CartPage.js          # Shopping cart with quantity controls
│   │   ├── Footer.js            # Shared site footer
│   │   ├── Header.js            # Fixed header with nav, search, icons
│   │   ├── Hero.js              # Landing page hero section
│   │   ├── JoinLife.js          # Sustainability section
│   │   ├── LandingPage.js       # Main entry with lazy-loaded sections
│   │   ├── LoginPage.js         # Login form with auth integration
│   │   ├── NewCollections.js    # Featured collections grid
│   │   ├── Newsletter.js        # Email subscription section
│   │   ├── ProductPage.js       # Product detail with reviews
│   │   ├── SearchPage.js        # Search with filters & results grid
│   │   ├── SignupPage.js        # Registration form
│   │   └── WishlistPage.js      # Saved items with toggle hearts
│   ├── context/
│   │   └── AuthContext.js       # Auth state provider & useAuth hook
│   ├── images/                  # Product & asset images
│   ├── App.js                   # Root component with routing
│   ├── App.css                  # Global app styles
│   ├── index.js                 # Entry point
│   └── index.css                # Base / Tailwind directives
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
├── package.json
└── zara-redesign-case-study.html  # Full case study document
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 16
- **npm** ≥ 8

### Installation

```bash
# Clone the repository
git clone https://github.com/yashwanthreddy7178/zara_web_redesign.git
cd zara_web_redesign

# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
```

The optimized bundle will be output to the `build/` directory.

---

## Honest Scope & Limitations

A portfolio piece earns trust through candor. Here is the line between **built** and **pending**:

| Limitation | Detail |
|:---|:---|
| **Front end only** | Product data, prices, and order totals use hardcoded sample values. There is no backend or product API. |
| **Demo authentication** | Login checks one hardcoded account and stores state in memory. Session resets on refresh. No real auth or persistence. |
| **Partial filter logic** | The filter panel renders all seven controls, but the matching logic needs the product model extended with size and color fields to honor every option. |
| **No usability testing** | The redesign responds to documented critiques but carries no measured usability results. Improvement claims are design intent, not tested outcomes. |

---

## Next Steps

| Area | Plan |
|:---|:---|
| **Baseline Scores** | Run Lighthouse for performance and accessibility, plus a WAVE or axe scan. Compare against the WebAIM average of 56 errors per page. |
| **Moderated Testing** | Run task-based sessions with 5 users and an SUS questionnaire against a measured zara.com baseline. |
| **Real Data Layer** | Wire a product API, persistent cart, and token-based auth to replace the sample values. |
| **Hardening** | Complete filter logic, route every nav link, and remove console output left from development. |

---

## References

1. **Reyes, M.** — My problem with Zara's user experience. *Medium.* [→ link](https://medium.com/marketing-in-the-age-of-digital/my-problem-with-zaras-user-experience-100a0ee4ab0b)
2. **Majidova, Z.** — Evaluating the user experience of Zara's online store. *UX Planet.* [→ link](https://uxplanet.org/evaluating-the-user-experience-of-zaras-online-store-71790986bcf0)
3. **Bressler, J.** — A usability analysis of Zara.com. *Medium.* [→ link](https://medium.com/@jill_8105/a-usability-analysis-of-zara-com-33bbc0712234)
4. **UXmatters** — A usability evaluation of the Zara website. [→ link](https://www.uxmatters.com/mt/archives/2023/09/a-usability-evaluation-of-the-zara-website.php)
5. **Baymard Institute** — Cart abandonment rate statistics (70.22% average across 50 studies). [→ link](https://baymard.com/lists/cart-abandonment-rate)
6. **Google / Deloitte** — Milliseconds make millions: 0.1s load improvement → +8.4% retail conversion. [→ link](https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/milliseconds-earn-millions-why-mobile-speed-can-slow-or-grow-business/)
7. **WebAIM** — The WebAIM Million 2026: 56 errors/page average, low contrast on 83.9% of home pages. [→ link](https://webaim.org/projects/million/)
8. **W3C** — WCAG 2.1: contrast minimum 4.5:1 for body text. [→ link](https://www.w3.org/TR/WCAG21/)
9. **Econsultancy** — On-site search users convert near 1.8× browsers. [→ link](https://econsultancy.com/site-search-seven-tips-to-help-improve-your-website-search/)

---

## Disclaimer

> **Independent concept project for portfolio purposes only.**  
> Not affiliated with, endorsed by, or connected to Zara, Inditex, or any of their subsidiaries. All trademarks belong to their respective owners.

---

<p align="center">
  <strong>Zara Redesign · UX + Frontend Case Study</strong><br/>
  Built by <a href="https://github.com/yashwanthreddy7178">Yashwanth Reddy</a>
</p>
