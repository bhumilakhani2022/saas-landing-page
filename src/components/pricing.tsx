'use client'

import { useState } from 'react'
import { PricingCard } from './pricing-card'
import { Check, Star } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Starter',
    price: 29,
    description: 'Perfect for small teams and startups',
    features: [
      'Up to 5 team members',
      'Basic AI insights',
      'Email support',
      'Standard analytics',
      '10 campaigns per month',
      'Basic automation'
    ],
    popular: false,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Professional',
    price: 99,
    description: 'Ideal for growing businesses',
    features: [
      'Up to 25 team members',
      'Advanced AI insights',
      'Priority support',
      'Advanced analytics',
      'Unlimited campaigns',
      'Advanced automation',
      'Custom integrations',
      'A/B testing'
    ],
    popular: true,
    gradient: 'from-primary-500 to-secondary-500'
  },
  {
    name: 'Enterprise',
    price: 299,
    description: 'For large organizations',
    features: [
      'Unlimited team members',
      'Custom AI models',
      '24/7 dedicated support',
      'Enterprise analytics',
      'Unlimited everything',
      'Advanced automation',
      'Custom integrations',
      'A/B testing',
      'White-label options',
      'API access'
    ],
    popular: false,
    gradient: 'from-purple-500 to-pink-500'
  }
]

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true)
  const [selectedPlan, setSelectedPlan] = useState('Professional')

  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <span>💰</span>
            <span>Simple Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Choose the Perfect
            <span className="block gradient-text">Plan for Your Business</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-primary-500' : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Annual
              <span className="ml-1 text-primary-500 font-bold">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              isAnnual={isAnnual}
              isSelected={selectedPlan === plan.name}
              onSelect={() => setSelectedPlan(plan.name)}
            />
          ))}
        </div>

        {/* Interactive Calculator */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200/20 dark:border-gray-700/20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Custom Pricing Calculator
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Team Members
              </label>
              <input
                type="range"
                min="1"
                max="100"
                defaultValue="10"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1</span>
                <span>100+</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Monthly Campaigns
              </label>
              <input
                type="range"
                min="10"
                max="1000"
                defaultValue="100"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>10</span>
                <span>1000+</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Estimated Cost
              </label>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                $149
                <span className="text-sm font-normal text-gray-500">/month</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Link */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Have questions about pricing?
          </p>
          <a
            href="#faq"
            className="text-primary-600 dark:text-primary-400 font-semibold hover:underline"
          >
            Check our FAQ →
          </a>
        </div>
      </div>
    </section>
  )
} 