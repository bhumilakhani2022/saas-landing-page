# ADmyBRAND AI Suite - Landing Page

[![ADmyBRAND AI Suite](https://img.shields.io/badge/ADmyBRAND-AI%20Suite-blue?style=for-the-badge&logo=admybrand&logoColor=white)](https://admybrand.com/)

A modern, visually stunning landing page for the ADmyBRAND AI Suite, a next-gen AI-powered marketing SaaS platform. Built with Next.js 14+, TypeScript, and Tailwind CSS.

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com/)

## 🚀 Live Demo

[View the live demo here](https://saas-landing-page-bay-seven.vercel.app/)

## ✨ Key Features

- **Modern UI/UX**: A visually appealing design with glassmorphism, neumorphism, and smooth animations.
- **Responsive Design**: Fully responsive and optimized for all devices, from mobile to desktop.
- **Dark/Light Mode**: Seamless theme switching with system preference detection.
- **Interactive Components**: Engaging components like a pricing calculator, testimonials carousel, and FAQ accordion.
- **Blog Section**: A fully functional blog with dynamic routing for individual posts.
- **Dashboard Preview**: A glimpse into the AI-powered dashboard with charts and data tables.

## 🛠️ Technology Stack

| Component      | Technology                               | Purpose                                       |
| -------------- | ---------------------------------------- | --------------------------------------------- |
| **Framework**  | Next.js 14+ (App Router)                 | Full-stack web framework for React            |
| **Language**   | TypeScript                               | Static typing for robust code                 |
| **Styling**    | Tailwind CSS                             | Utility-first CSS framework                   |
| **Animations** | Framer Motion                            | Advanced animations and gestures              |
| **UI/UX**      | Material-UI (MUI)                        | UI components and design system               |
| **Charts**     | Recharts                                 | Interactive data visualization                |
| **Icons**      | Lucide React                             | Lightweight and customizable SVG icons        |
| **Deployment** | Vercel                                   | Optimized hosting for Next.js applications    |

## 📦 Quick Start

### Prerequisites

- **Node.js** (v18.x or later)
- **npm** or **yarn**

### 1. Clone Repository

```bash
git clone https://github.com/bhumilakhani2022/saas-landing-page.git
cd saas-landing-page
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

### 4. Access Application

- **Frontend**: http://localhost:3000

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles and Tailwind CSS configuration
│   ├── layout.tsx         # Root layout for the application
│   ├── page.tsx           # Main landing page
│   ├── blog/
│   │   └── [slug]/
│   │       └── page.tsx   # Dynamic blog post page
│   └── dashboard/
│       ├── layout.tsx     # Layout for the dashboard
│       └── page.tsx       # Dashboard overview page
├── components/
│   ├── ui/                # Reusable UI components (e.g., Button)
│   ├── dashboard/         # Components specific to the dashboard
│   ├── blog-card.tsx      # Card component for blog posts
│   ├── blog.tsx           # Blog section component
│   ├── contact.tsx        # Contact form component
│   ├── faq.tsx            # FAQ section component
│   ├── feature-card.tsx   # Card component for features
│   ├── features.tsx       # Features section component
│   ├── floating-chat.tsx  # Floating chat widget
│   ├── footer.tsx         # Footer component
│   ├── header.tsx         # Header and navigation component
│   ├── hero.tsx           # Hero section component
│   ├── pricing-card.tsx   # Card component for pricing plans
│   ├── pricing.tsx        # Pricing section component
│   ├── scroll-progress.tsx# Scroll progress indicator
│   ├── testimonial-card.tsx# Card component for testimonials
│   ├── testimonials.tsx   # Testimonials section component
│   ├── theme-provider.tsx # Theme provider for dark/light mode
│   └── why-choose-us.tsx  # "Why Choose Us" section component
├── lib/
│   └── utils.ts           # Utility functions
└── types/
    └── global.d.ts        # Global TypeScript type definitions
```

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
