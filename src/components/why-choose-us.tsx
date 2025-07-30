'use client'

import { useState, useEffect } from 'react'
import { Users, TrendingUp, Zap, Shield } from 'lucide-react'

const stats = [
  { icon: Users, label: 'Happy Customers', value: 10000, suffix: '+' },
  { icon: TrendingUp, label: 'Revenue Growth', value: 300, suffix: '%' },
  { icon: Zap, label: 'Campaigns Optimized', value: 50000, suffix: '+' },
  { icon: Shield, label: 'Uptime', value: 99.9, suffix: '%' },
]

const reasons = [
  {
    title: 'AI-Powered Insights',
    description: 'Get intelligent recommendations that learn from your data and improve over time.',
    icon: '🤖',
  },
  {
    title: 'Enterprise Security',
    description: 'Bank-level security with SOC 2 compliance and end-to-end encryption.',
    icon: '🔒',
  },
  {
    title: '24/7 Optimization',
    description: 'Our AI continuously optimizes your campaigns while you sleep.',
    icon: '⚡',
  },
  {
    title: 'Proven Results',
    description: 'Join thousands of marketers who have transformed their ROI with our platform.',
    icon: '📈',
  },
]

export function WhyChooseUs() {
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate counters
            stats.forEach((stat, index) => {
              const target = stat.value
              const increment = target / 50
              let current = 0
              const timer = setInterval(() => {
                current += increment
                if (current >= target) {
                  current = target
                  clearInterval(timer)
                }
                setCounts(prev => {
                  const newCounts = [...prev]
                  newCounts[index] = Math.floor(current)
                  return newCounts
                })
              }, 20)
            })
          }
        })
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById('why-choose-us')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="why-choose-us" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <span>🏆</span>
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Trusted by
            <span className="block gradient-text">Leading Brands</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See why thousands of marketers choose ADmyBRAND AI Suite to scale their campaigns and drive results.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {counts[index].toLocaleString()}{stat.suffix}
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={reason.title} className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border border-gray-200/20 dark:border-gray-700/20 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{reason.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Join the Revolution?
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Start your free trial today and see the difference AI-powered marketing can make for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                Start Free Trial
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/20 transition-colors duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}