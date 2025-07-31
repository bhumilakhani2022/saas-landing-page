'use client'

import { motion } from 'framer-motion'
import { BlogCard } from './blog-card'
import { ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'Cracking the Code: How AI is Redefining Marketing ROI',
    description: 'Explore the metrics that matter and learn how AI-driven analytics can provide a clearer picture of your marketing performance.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=60',
    date: 'July 31, 2024',
    author: 'Alex Johnson',
    link: '/blog/ai-marketing-roi',
  },
  {
    title: 'Personalization at Scale: The Future of Customer Engagement',
    description: 'Discover how to leverage AI to create hyper-personalized experiences for your customers without sacrificing efficiency.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=60',
    date: 'July 28, 2024',
    author: 'Samantha Carter',
    link: '/blog/personalization-at-scale',
  },
  {
    title: 'Predictive Analytics: The Secret Weapon for Your Next Campaign',
    description: 'Learn how predictive analytics can help you anticipate customer needs and optimize your marketing campaigns for success.',
    image: 'https://images.unsplash.com/photo-1611926653458-092a4216257c?auto=format&fit=crop&w=800&q=60',
    date: 'July 25, 2024',
    author: 'Benjamin Lee',
    link: '/blog/predictive-analytics',
  },
]

export function Blog() {
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
    <section id="blog" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            From the Blog
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay up-to-date with the latest marketing trends and insights.
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {posts.map((post, index) => (
            <motion.div key={index} variants={itemVariants}>
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
