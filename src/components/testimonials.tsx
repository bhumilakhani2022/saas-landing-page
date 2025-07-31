'use client'

import { useState, useEffect } from 'react'
import { TestimonialCard } from './testimonial-card'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechFlow Inc.',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    quote: 'ADmyBRAND AI Suite has completely transformed our marketing strategy. The AI insights are incredibly accurate and have helped us increase our conversion rates by 300%.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CEO',
    company: 'StartupXYZ',
    avatar: 'https://i.pravatar.cc/150?u=michael',
    quote: 'The automation features are game-changing. We\'ve reduced our campaign setup time from days to hours, and the results speak for themselves.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Digital Marketing Manager',
    company: 'GrowthCo',
    avatar: 'https://i.pravatar.cc/150?u=emily',
    quote: 'The precision targeting capabilities are unmatched. We\'re reaching our ideal customers with pinpoint accuracy, and our ROI has never been better.',
    rating: 5
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'VP of Marketing',
    company: 'Enterprise Solutions',
    avatar: 'https://i.pravatar.cc/150?u=david',
    quote: 'The analytics dashboard provides insights we never had before. It\'s like having a crystal ball for our marketing campaigns.',
    rating: 5
  },
  {
    id: 5,
    name: 'Lisa Wang',
    role: 'Marketing Specialist',
    company: 'Innovation Labs',
    avatar: 'https://i.pravatar.cc/150?u=lisa',
    quote: 'The team collaboration features are fantastic. We can now work seamlessly across departments and track everything in one place.',
    rating: 5
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Quote className="w-4 h-4" />
            <span>Customer Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Loved by
            <span className="block gradient-text">Marketing Teams Worldwide</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how leading companies are transforming their marketing with ADmyBRAND AI Suite.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
          </button>

          {/* Testimonials Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-500 w-8'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">10,000+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">4.9/5</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">99.9%</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  )
}
