'use client'

import { useEffect, useRef, useState } from 'react'
import { Button as MUIButton } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Box from '@mui/material/Box'
import { Sparkles, Zap, Target } from 'lucide-react'

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [imageVisible, setImageVisible] = useState(false)
  const [demoOpen, setDemoOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in')
            }, idx * 200)
          }
        })
      },
      { threshold: 0.1 }
    )
    const elements = document.querySelectorAll('.hero-animate')
    elements.forEach((el, idx) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // Only fade in, no scale or float
    setTimeout(() => setImageVisible(true), 300)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* SVG/Gradient background for depth */}
      <div className="absolute inset-0 w-full h-full z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="heroGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>
            <radialGradient id="heroRadial" cx="50%" cy="50%" r="80%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1440" height="900" fill="url(#heroGradient)" />
          <ellipse cx="900" cy="200" rx="400" ry="200" fill="url(#heroRadial)" />
          <ellipse cx="400" cy="700" rx="300" ry="150" fill="url(#heroRadial)" />
        </svg>
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen py-12">
        {/* Left: Text Content */}
        <div className="w-full flex flex-col justify-center items-start text-left max-w-2xl mx-auto lg:mx-0">
          <MUIButton
            variant="contained"
            startIcon={<Sparkles style={{ color: '#facc15' }} />}
            sx={{
              background: 'rgba(255,255,255,0.15)',
              color: '#fff',
              borderRadius: '9999px',
              fontWeight: 500,
              fontSize: '1rem',
              mb: 3,
              px: 2.5,
              py: 1,
              boxShadow: 'none',
              textTransform: 'none',
              backdropFilter: 'blur(6px)',
              '&:hover': { background: 'rgba(255,255,255,0.25)' }
            }}
            disableElevation
            disableRipple
            tabIndex={-1}
          >
            AI-Powered Marketing Suite
          </MUIButton>
          <h1 className="hero-animate text-4xl md:text-5xl font-extrabold text-white mb-6 opacity-0">
            Transform Your <span className="block bg-gradient-to-r from-blue-400 to-fuchsia-500 bg-clip-text text-transparent">Marketing with AI</span>
          </h1>
          <p className="hero-animate text-lg md:text-xl text-white/90 mb-8 opacity-0 max-w-2xl leading-relaxed">
            The complete AI-powered marketing suite that helps you create, optimize, and scale your campaigns with unprecedented precision and efficiency.
          </p>
          <div className="hero-animate flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12 opacity-0">
            <MUIButton
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                background: 'linear-gradient(90deg, #38bdf8 0%, #a78bfa 100%)',
                color: '#fff',
                fontWeight: 700,
                fontSize: '1.1rem',
                px: 4,
                py: 1.5,
                borderRadius: '0.75rem',
                boxShadow: '0 4px 24px 0 rgba(56,189,248,0.15)',
                textTransform: 'none',
                '&:hover': { background: 'linear-gradient(90deg, #2563eb 0%, #a21caf 100%)' }
              }}
              onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Trial
            </MUIButton>
            <MUIButton
              variant="outlined"
              startIcon={<PlayArrowIcon />}
              sx={{
                color: '#fff',
                borderColor: 'rgba(255,255,255,0.4)',
                fontWeight: 700,
                fontSize: '1.1rem',
                px: 4,
                py: 1.5,
                borderRadius: '0.75rem',
                background: 'rgba(255,255,255,0.08)',
                textTransform: 'none',
                '&:hover': { background: 'rgba(255,255,255,0.18)', borderColor: '#fff' }
              }}
              onClick={() => setDemoOpen(true)}
            >
              Watch Demo
            </MUIButton>
          </div>
          <div className="hero-animate flex flex-row items-center gap-10 opacity-0 mt-8">
            <div className="flex flex-col items-center">
              <Zap className="w-7 h-7 text-yellow-400 mb-2" />
              <div className="text-xl font-bold text-white">10x</div>
              <div className="text-white/80 text-sm">Faster Campaign Creation</div>
            </div>
            <div className="flex flex-col items-center">
              <Target className="w-7 h-7 text-green-400 mb-2" />
              <div className="text-xl font-bold text-white">95%</div>
              <div className="text-white/80 text-sm">Higher Conversion Rates</div>
            </div>
            <div className="flex flex-col items-center">
              <Sparkles className="w-7 h-7 text-purple-400 mb-2" />
              <div className="text-xl font-bold text-white">24/7</div>
              <div className="text-white/80 text-sm">AI-Powered Optimization</div>
            </div>
          </div>
        </div>
        {/* Right: Image Content, always visible */}
        <div className="w-full flex justify-center items-center mt-12 lg:mt-0">
          <div className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
            <img
              src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80"
              alt="Modern Marketing Analytics Dashboard Preview"
              className="w-full h-auto object-cover object-center rounded-2xl"
              style={{ background: '#1a1a1a' }}
            />
          </div>
        </div>
      </div>
      {/* Demo Video Modal */}
      <Dialog open={demoOpen} onClose={() => setDemoOpen(false)} maxWidth="md" fullWidth>
        <Box position="relative" bgcolor="#000">
          <IconButton
            aria-label="close"
            onClick={() => setDemoOpen(false)}
            sx={{ position: 'absolute', top: 8, right: 8, zIndex: 10, color: '#fff' }}
          >
            <CloseIcon />
          </IconButton>
          <Box pt={6} pb={2} px={2} display="flex" justifyContent="center" alignItems="center">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/uTrQNyEJflI"
              title="Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: 16, background: '#000' }}
            />
          </Box>
        </Box>
      </Dialog>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center space-x-2 text-white/80 text-sm">
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}
