'use client'

import { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useTheme } from './theme-provider'

export function Header({ onShowDashboard, onShowHome }: { onShowDashboard: () => void, onShowHome: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', action: onShowHome },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
    { name: 'Dashboard', action: onShowDashboard },
  ]

  const handleGetStarted = () => {
    onShowHome()
    setTimeout(() => {
      document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const handleNavigation = (href: string) => {
    onShowHome()
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
    setIsMobileMenuOpen(false)
  }

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: isScrolled
          ? 'rgba(255,255,255,0.85)'
          : 'rgba(30,41,59,0.7)',
        backdropFilter: 'blur(12px)',
        borderBottom: isScrolled ? '1px solid rgba(100,116,139,0.12)' : 'none',
        boxShadow: '0 2px 24px 0 rgba(56,189,248,0.08)',
        zIndex: 1200,
      }}
    >
      <Toolbar className="container-custom flex justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="text-xl font-bold gradient-text">ADmyBRAND</span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Button
              key={item.name}
              onClick={() => item.action ? item.action() : handleNavigation(item.href)}
              sx={{
                color: isScrolled ? '#334155' : '#fff',
                fontWeight: 500,
                fontSize: '1rem',
                textTransform: 'none',
                '&:hover': { color: '#6366f1' },
                transition: 'color 0.2s',
              }}
            >
              {item.name}
            </Button>
          ))}
        </nav>
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <IconButton
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            sx={{ color: isScrolled ? '#334155' : '#fff' }}
          >
            {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Button
            variant="contained"
            onClick={handleGetStarted}
            sx={{
              background: 'linear-gradient(90deg, #38bdf8 0%, #a78bfa 100%)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1rem',
              borderRadius: '0.75rem',
              px: 3,
              py: 1.2,
              textTransform: 'none',
              boxShadow: '0 2px 12px 0 rgba(56,189,248,0.10)',
              '&:hover': { background: 'linear-gradient(90deg, #2563eb 0%, #a21caf 100%)' },
            }}
          >
            Get Started
          </Button>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <IconButton
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            sx={{ color: isScrolled ? '#334155' : '#fff' }}
          >
            <MenuIcon />
          </IconButton>
        </div>
      </Toolbar>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden py-4 border-t border-gray-200/20 dark:border-gray-700/20 bg-white/95 dark:bg-gray-900/95">
          <nav className="flex flex-col space-y-4 px-6">
            {navigation.map((item) => (
              <Button
                key={item.name}
                onClick={() => item.action ? item.action() : handleNavigation(item.href)}
                sx={{
                  color: '#334155',
                  fontWeight: 500,
                  fontSize: '1rem',
                  textTransform: 'none',
                  justifyContent: 'flex-start',
                  width: '100%',
                  '&:hover': { color: '#6366f1' },
                  transition: 'color 0.2s',
                }}
              >
                {item.name}
              </Button>
            ))}
            <div className="flex items-center justify-between pt-4">
              <IconButton
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                sx={{ color: '#334155' }}
              >
                {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              <Button
                variant="contained"
                onClick={handleGetStarted}
                sx={{
                  background: 'linear-gradient(90deg, #38bdf8 0%, #a78bfa 100%)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1rem',
                  borderRadius: '0.75rem',
                  px: 3,
                  py: 1.2,
                  textTransform: 'none',
                  boxShadow: '0 2px 12px 0 rgba(56,189,248,0.10)',
                  '&:hover': { background: 'linear-gradient(90deg, #2563eb 0%, #a21caf 100%)' },
                }}
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </AppBar>
  )
}
