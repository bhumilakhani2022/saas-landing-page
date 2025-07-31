'use client'

import { Suspense, useState } from 'react'
import { Header } from '@/components/header'
import { DashboardContent } from '@/components/dashboard/dashboard-content'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Pricing } from '@/components/pricing'
import { Testimonials } from '@/components/testimonials'
import { FAQ } from '@/components/faq'
import { Contact } from '@/components/contact'
import { Blog } from '@/components/blog'
import { Footer } from '@/components/footer'
import { ScrollProgress } from '@/components/scroll-progress'
import { FloatingChat } from '@/components/floating-chat'
import { WhyChooseUs } from '@/components/why-choose-us'

export default function Home() {
  const [showDashboard, setShowDashboard] = useState(false)

  const handleShowDashboard = () => {
    setShowDashboard(true)
  }

  const handleShowHome = () => {
    setShowDashboard(false)
  }

  return (
    <main className="min-h-screen gradient-bg">
      <ScrollProgress />
      <Header onShowDashboard={handleShowDashboard} onShowHome={handleShowHome} />
      {showDashboard ? (
        <DashboardContent />
      ) : (
        <>
          <Hero />
          <Features />
          <WhyChooseUs />
          <Pricing />
          <Testimonials />
          <Blog />
          <FAQ />
          <Contact />
        </>
      )}
      <Footer />
      <FloatingChat />
    </main>
  )
}
