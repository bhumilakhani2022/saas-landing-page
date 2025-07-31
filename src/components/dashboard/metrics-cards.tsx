'use client'

import { useState, useEffect } from 'react'
import { DollarSign, Users, TrendingUp, Target } from 'lucide-react'

const metrics = [
  {
    title: 'Total Revenue',
    value: 124500,
    change: 12.5,
    changeType: 'increase',
    icon: DollarSign,
    color: 'from-green-500 to-emerald-500',
    format: 'currency'
  },
  {
    title: 'Active Users',
    value: 2847,
    change: 8.2,
    changeType: 'increase',
    icon: Users,
    color: 'from-blue-500 to-cyan-500',
    format: 'number'
  },
  {
    title: 'Conversion Rate',
    value: 3.24,
    change: -2.1,
    changeType: 'decrease',
    icon: Target,
    color: 'from-purple-500 to-pink-500',
    format: 'percentage'
  },
  {
    title: 'Growth Rate',
    value: 15.7,
    change: 4.3,
    changeType: 'increase',
    icon: TrendingUp,
    color: 'from-orange-500 to-red-500',
    format: 'percentage'
  }
]

export function MetricsCards() {
  const [animatedValues, setAnimatedValues] = useState(metrics.map(() => 0))

  useEffect(() => {
    const animateValues = () => {
      const intervals = metrics.map((metric, index) => {
        const target = metric.value
        const duration = 2000 // 2 seconds
        const steps = 60
        const increment = target / steps
        let current = 0

        return setInterval(() => {
          current += increment
          if (current >= target) {
            current = target
            clearInterval(intervals[index])
          }
          
          setAnimatedValues(prev => {
            const newValues = [...prev]
            newValues[index] = current
            return newValues
          })
        }, duration / steps)
      })

      return () => intervals.forEach(interval => clearInterval(interval))
    }

    const timeout = setTimeout(animateValues, 500)
    return () => clearTimeout(timeout)
  }, [])

  const formatValue = (value: number, format: string) => {
    switch (format) {
      case 'currency':
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(value)
      case 'percentage':
        return `${value.toFixed(1)}%`
      case 'number':
        return value.toLocaleString()
      default:
        return value.toString()
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
      {metrics.map((metric, index) => {
        const Icon = metric.icon
        return (
          <div
            key={metric.title}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {metric.title}
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                  {formatValue(animatedValues[index], metric.format)}
                </p>
                <div className="flex items-center mt-2">
                  <span className={`text-sm font-medium ${
                    metric.changeType === 'increase' 
                      ? 'text-green-600 dark:text-green-400' 
                      : 'text-red-600 dark:text-red-400'
                  }`}>
                    {metric.changeType === 'increase' ? '+' : ''}{metric.change}%
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                    from last month
                  </span>
                </div>
              </div>
              <div className={`w-12 h-12 bg-gradient-to-r ${metric.color} rounded-lg flex items-center justify-center`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
} 