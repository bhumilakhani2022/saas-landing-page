'use client'

import { Star, Quote } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  avatar: string
  quote: string
  rating: number
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border border-gray-200/20 dark:border-gray-700/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Quote Icon */}
      <div className="mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
          <Quote className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center space-x-1 mb-6">
        {[...Array(testimonial.rating)].map((_, index) => (
          <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
        "{testimonial.quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center space-x-4">
        <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full" />
        <div>
          <div className="font-semibold text-gray-900 dark:text-white">
            {testimonial.name}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {testimonial.role} at {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  )
}
