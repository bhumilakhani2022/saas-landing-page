'use client'

import { forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'default', children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
    
    const variantClasses: Record<string, string> = {
      default: 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:shadow-lg hover:scale-105',
      secondary: 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20',
      outline: 'border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
      ghost: 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800',
    }
    
    const sizeClasses: Record<string, string> = {
      default: 'h-12 px-6 py-3',
      sm: 'h-9 px-4 py-2 text-sm',
      lg: 'h-14 px-8 py-4 text-lg',
      icon: 'h-10 w-10',
    }
    
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button } 