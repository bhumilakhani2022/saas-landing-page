'use client'

import { Check, Star } from 'lucide-react'

interface PricingPlan {
  name: string
  price: number
  description: string
  features: string[]
  popular: boolean
  gradient: string
}

interface PricingCardProps {
  plan: PricingPlan
  isAnnual: boolean
  isSelected: boolean
  onSelect: () => void
}

export function PricingCard({ plan, isAnnual, isSelected, onSelect }: PricingCardProps) {
  const annualPrice = Math.round(plan.price * 0.8)
  const displayPrice = isAnnual ? annualPrice : plan.price

  return (
    <div className={`relative group ${isSelected ? 'scale-105' : ''} transition-all duration-300`}>
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
            <Star className="w-4 h-4" />
            <span>Most Popular</span>
          </div>
        </div>
      )}

      <div className={`relative p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border-2 rounded-2xl transition-all duration-300 ${
        isSelected 
          ? 'border-primary-500 shadow-xl' 
          : 'border-gray-200/20 dark:border-gray-700/20 hover:border-primary-300/50'
      }`}>
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
        
        {/* Header */}
        <div className="relative text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {plan.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {plan.description}
          </p>
          <div className="mb-6">
            <span className="text-4xl font-bold text-gray-900 dark:text-white">
              ${displayPrice}
            </span>
            <span className="text-gray-500 dark:text-gray-400">/month</span>
          </div>
          {isAnnual && (
            <div className="text-sm text-primary-600 dark:text-primary-400 font-medium">
              Save 20% with annual billing
            </div>
          )}
        </div>

        {/* Features */}
        <div className="relative space-y-4 mb-8">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-5 h-5 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 text-sm">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="relative">
          <button
            onClick={onSelect}
            className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
              isSelected
                ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-primary-500 hover:text-white'
            }`}
          >
            {isSelected ? 'Current Plan' : 'Choose Plan'}
          </button>
        </div>
      </div>
    </div>
  )
} 