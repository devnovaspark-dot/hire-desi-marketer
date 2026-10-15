# Hire Desi Marketer — Modern Next.js Web Experience

A high-converting, premium web application built for **Hire Desi Marketer**. Designed to communicate the value proposition of dedicated Indian digital marketing teams operating across US, UK, Canada, Australia, Europe, and UAE time zones.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Start
```bash
npm run build
npm run start
```

---

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict type checking)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with CSS token architecture
- **Typography**: `Bricolage Grotesque` (display headlines) & `Manrope` (body)
- **Icons**: [Lucide React](https://lucide.dev/) + clean SVG brand assets
- **Animation**: [Framer Motion](https://www.framer.com/motion/)

---

## 📁 Architecture Overview

```text
src/
├── app/
│   ├── api/
│   │   └── quote/
│   │       └── route.ts         # Secure server-side validation & preview mode
│   ├── globals.css              # Design tokens, variables & animations
│   ├── layout.tsx               # Root layout, Google Fonts, SEO metadata
│   └── page.tsx                 # Main assembled landing experience
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # Responsive sticky navigation & mobile drawer
│   │   └── Footer.tsx           # Global footer, links, verified office address
│   ├── sections/
│   │   ├── Hero.tsx             # Signature hero & live SaaS operations card
│   │   ├── TrustStrip.tsx       # Partner programs & platform reviews
│   │   ├── EngagementModels.tsx # Hourly ($8/hr), Growth Bundle ($999/mo), Teams
│   │   ├── CostCalculator.tsx   # Interactive hourly calculator slider
│   │   ├── DedicatedTeams.tsx   # Team of 3, 5, 7 & role comparison matrix
│   │   ├── Services.tsx         # 6 core pillars & 2026 tech stack
│   │   ├── CaseStudies.tsx      # Interactive portfolio tabs (Dental, Roofing, Café, Clinic)
│   │   ├── TeamAvailability.tsx# Live international IANA clocks & schedule
│   │   ├── Process.tsx          # 4-step onboarding journey
│   │   ├── TeamIntroduction.tsx# Leadership profiles & in-house departments
│   │   ├── Office.tsx           # Bhubaneswar headquarters & map visual
│   │   ├── QuoteForm.tsx        # High-conversion quote request form
│   │   └── FAQ.tsx              # Accessible accordion
│   └── ui/
│       ├── Button.tsx           # Accessible buttons with multiple variants
│       ├── Badge.tsx            # Status pills with live pulse indicators
│       ├── Card.tsx             # Neo-modern cards with hover elevation
│       ├── SectionHeading.tsx   # Consistent editorial typography
│       └── Modal.tsx            # Accessible dialog with ESC dismissal
├── data/                        # Cleanly separated data structures
│   ├── case-studies.ts
│   ├── faq.ts
│   ├── pricing.ts
│   ├── services.ts
│   └── team.ts
├── lib/
│   ├── timezones.ts             # IANA timezone calculations
│   └── utils.ts                 # Classname merge & currency formatters
└── types/
    └── index.ts                 # Complete TypeScript definitions
```

---

## ⚙️ Environment Variables

Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

| Variable | Description | Default / Mode |
|---|---|---|
| `CONTACT_EMAIL` | Destination email address for quote requests | If unset, runs in safe preview mode |
| `RESEND_API_KEY` | Transactional email provider API key | Optional |
| `NEXT_PUBLIC_APP_URL` | Production website canonical URL | `https://hiredesimarketer.com` |

---

## 🔒 Data Integrity & Honest Conversion

- **Safe Preview Mode**: When production email credentials are not set, the contact form validates all fields and displays an honest notice rather than silently discarding messages or faking email delivery.
- **Case Study Transparency**: Campaign screenshots are explicitly presented as design and workflow architectures, noting that live client performance metrics are tracked during weekly reviews under NDA.
- **Time Zone Sync**: Local times are computed on the client side using official IANA timezone identifiers, avoiding server-side hydration mismatches while accurately handling Daylight Saving Time.
