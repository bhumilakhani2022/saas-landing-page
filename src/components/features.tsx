'use client'

import { useEffect } from 'react'
import { FeatureCard } from './feature-card'
import { 
  Brain, 
  BarChart3, 
  Zap, 
  Target, 
  Users, 
  Shield,
  TrendingUp,
  MessageSquare
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Get intelligent recommendations and insights that help you make data-driven marketing decisions.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Comprehensive analytics dashboard with real-time performance tracking and predictive modeling.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Zap,
    title: 'Automated Campaigns',
    description: 'Set up intelligent automation workflows that optimize your campaigns 24/7.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Target,
    title: 'Precision Targeting',
    description: 'Reach your ideal audience with AI-powered segmentation and behavioral targeting.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work seamlessly with your team using shared workspaces and real-time collaboration tools.',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with SOC 2 compliance and end-to-end encryption.',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: TrendingUp,
    title: 'Performance Optimization',
    description: 'Continuously optimize your campaigns with machine learning algorithms.',
    color: 'from-teal-500 to-green-500'
  },
  {
    icon: MessageSquare,
    title: 'Smart Messaging',
    description: 'Create personalized messages that resonate with your audience at scale.',
    color: 'from-violet-500 to-purple-500'
  }
]

export function Features() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-slide-up')
            }, index * 100)
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.feature-animate')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <span>✨</span>
            <span>Powerful Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Everything You Need to
            <span className="block gradient-text">Scale Your Marketing</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From AI-powered insights to automated campaigns, we provide all the tools you need to create, optimize, and scale your marketing efforts.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={feature.title} className="feature-animate opacity-0">
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={feature.color}
              />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Marketing?
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Join thousands of marketers who are already using ADmyBRAND AI Suite to scale their campaigns and drive results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                Start Free Trial
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/20 transition-colors duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 