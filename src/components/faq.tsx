'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'How does ADmyBRAND AI Suite work?',
    answer: 'ADmyBRAND AI Suite uses advanced machine learning algorithms to analyze your marketing data, identify patterns, and provide actionable insights. It automates campaign optimization, audience targeting, and content creation to maximize your ROI.'
  },
  {
    question: 'What makes ADmyBRAND different from other marketing tools?',
    answer: 'Unlike traditional marketing tools, ADmyBRAND combines AI-powered insights with automation in a single platform. Our proprietary algorithms learn from your specific data to provide personalized recommendations that improve over time.'
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Most customers see measurable improvements within the first 30 days. Our AI starts learning from your data immediately and begins optimizing campaigns within the first week of use.'
  },
  {
    question: 'Is my data secure with ADmyBRAND?',
    answer: 'Absolutely. We use enterprise-grade encryption and follow SOC 2 compliance standards. Your data is never shared with third parties and is stored in secure, redundant data centers.'
  },
  {
    question: 'Can I integrate ADmyBRAND with my existing tools?',
    answer: 'Yes! ADmyBRAND integrates with popular marketing platforms like Google Ads, Facebook Ads, Mailchimp, HubSpot, and many more. We also provide a robust API for custom integrations.'
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We offer 24/7 customer support via chat, email, and phone. Enterprise customers get dedicated account managers and priority support. We also provide comprehensive documentation and video tutorials.'
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time with no penalties. We believe in earning your business every day, so there are no long-term contracts or hidden fees.'
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start your trial. You can upgrade to a paid plan anytime during or after the trial.'
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <span>❓</span>
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Everything You Need to
            <span className="block gradient-text">Know</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get answers to the most common questions about ADmyBRAND AI Suite.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border border-gray-200/20 dark:border-gray-700/20 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    )}
                  </div>
                </div>
                {openIndex === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200/20 dark:border-gray-700/20">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Our team is here to help you get the most out of ADmyBRAND AI Suite.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                Contact Support
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