# ADmyBRAND AI Suite - Landing Page

A modern, visually stunning landing page for ADmyBRAND AI Suite, a next-gen AI-powered marketing SaaS platform. Built with Next.js 14+, TypeScript, and Tailwind CSS.

## ✨ Features

- **Modern Design**: Glassmorphism, neumorphism accents, and scroll-triggered animations
- **Responsive**: Mobile-first design that looks perfect on all screen sizes
- **Dark/Light Mode**: Built-in theme toggle with system preference detection
- **Interactive Components**: 
  - Hero section with animated elements
  - Features grid with hover effects
  - Interactive pricing calculator
  - Testimonials carousel
  - FAQ accordion
  - Contact form with validation
  - Floating chat widget
  - Scroll progress indicator
  - Animated counters

## 🚀 Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **Animations**: CSS animations and Intersection Observer API
- **Theme**: Custom glassmorphism and neumorphism design

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd admybrand-nexus-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main landing page
├── components/
│   ├── ui/                  # Reusable UI components
│   │   └── button.tsx       # Button component with variants
│   ├── header.tsx           # Navigation header with theme toggle
│   ├── hero.tsx             # Hero section with animated elements
│   ├── features.tsx         # Features grid with cards
│   ├── feature-card.tsx     # Individual feature card component
│   ├── pricing.tsx          # Pricing section with calculator
│   ├── pricing-card.tsx     # Individual pricing card
│   ├── testimonials.tsx     # Testimonials carousel
│   ├── testimonial-card.tsx # Individual testimonial card
│   ├── faq.tsx              # FAQ accordion section
│   ├── contact.tsx          # Contact form with validation
│   ├── footer.tsx           # Footer with social links
│   ├── scroll-progress.tsx  # Scroll progress indicator
│   ├── floating-chat.tsx    # Floating chat widget
│   ├── why-choose-us.tsx    # Why Choose Us with animated counters
│   └── theme-provider.tsx   # Theme context provider
├── lib/
│   └── utils.ts             # Utility functions
└── types/
    └── global.d.ts          # Global type declarations
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (`#0ea5e9` to `#d946ef`)
- **Secondary**: Purple gradient for accents
- **Neutral**: Gray scale with dark mode support

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300-900
- **Scale**: Responsive text sizing

### Components
- **Glassmorphism**: Semi-transparent backgrounds with backdrop blur
- **Neumorphism**: Soft shadows for depth
- **Gradients**: Multi-color gradients for visual appeal
- **Animations**: Smooth transitions and hover effects

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

The application supports both light and dark modes with:
- System preference detection
- Manual toggle in header
- Smooth transitions between themes

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Use `npm run build` and deploy the `out` directory
- **AWS S3**: Build and upload static files
- **Custom Server**: Use `npm run start` for Node.js deployment

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request