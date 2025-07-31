'use client'

import { motion } from 'framer-motion'
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

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
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={feature.color}
              />
            </motion.div>
          ))}
        </motion.div>
      </Box>
    </section>
  )
}
