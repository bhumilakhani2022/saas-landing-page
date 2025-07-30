'use client'

import { useEffect, useRef } from 'react'
import { Button } from './ui/button'
import { Play, ArrowRight, Sparkles, Zap, Target } from 'lucide-react'

export function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.hero-animate')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 hero-gradient opacity-90"></div>
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-secondary-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-primary-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-8 items-center">
        <div className="text-center lg:text-left max-w-4xl mx-auto">
          {/* Badge */}
          <div className="hero-animate mb-8 opacity-0">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white/90">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">AI-Powered Marketing Suite</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="hero-animate text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 opacity-0 leading-tight">
            Transform Your
            <span className="block gradient-text">Marketing with AI</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-animate text-xl md:text-2xl text-white/80 mb-8 opacity-0 max-w-3xl mx-auto leading-relaxed">
            The complete AI-powered marketing suite that helps you create, optimize, and scale your campaigns with unprecedented precision and efficiency.
          </p>

          {/* CTA Buttons */}
          <div className="hero-animate flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12 opacity-0">
            <Button size="lg" className="group" onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}>
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" size="lg" className="group">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="hero-animate grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-white">10x</div>
              <div className="text-white/70">Faster Campaign Creation</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Target className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-white">95%</div>
              <div className="text-white/70">Higher Conversion Rates</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Sparkles className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-white/70">AI-Powered Optimization</div>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src="https://i.imgur.com/6d2zC6d.png" alt="Dashboard preview" className="rounded-lg shadow-2xl animate-fade-in" />
        </div>
      </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center space-x-2 text-white/60 text-sm">
          <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}
