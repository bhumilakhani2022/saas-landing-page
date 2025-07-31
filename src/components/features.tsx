'use client'

import { useEffect } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
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
    title: 'AI-Driven Insights',
    description: 'Leverage AI for actionable insights and data-driven marketing decisions.',
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
              entry.target.classList.add('animate-slide-up', 'opacity-100')
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
      <Box className="container-custom">
        {/* Section Header */}
        <Box textAlign="center" mb={10}>
          <Box display="inline-flex" alignItems="center" gap={1} px={2} py={1} borderRadius={9999} bgcolor="primary.50" color="primary.600" fontWeight={500} fontSize={16} mb={2}>
            <span role="img" aria-label="sparkles">✨</span>
            Powerful Features
          </Box>
          <Typography variant="h3" fontWeight={800} className="text-gray-900 dark:text-white" mb={2}>
            Everything You Need to
            <span className="block gradient-text">Scale Your Marketing</span>
          </Typography>
          <Typography variant="h6" className="text-gray-600 dark:text-gray-300" maxWidth={600} mx="auto">
            From AI-powered insights to automated campaigns, we provide all the tools you need to create, optimize, and scale your marketing efforts.
          </Typography>
        </Box>
        {/* Features Grid */}
        <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr 1fr' }} gap={4}>
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
        </Box>
      </Box>
    </section>
  )
}
