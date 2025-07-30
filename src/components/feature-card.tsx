'use client'

import { ComponentType, SVGProps } from 'react'

interface FeatureCardProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  description: string
  gradient: string
}

export function FeatureCard({ icon: Icon, title, description, gradient }: FeatureCardProps) {
  return (
    <div className="group relative p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border border-gray-200/20 dark:border-gray-700/20 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105">
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
      
      {/* Icon */}
      <div className="relative mb-4">
        <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Hover Effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-500/20 transition-colors duration-300 pointer-events-none"></div>
    </div>
  )
} 