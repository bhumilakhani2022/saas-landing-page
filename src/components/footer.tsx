import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

const socials = [
  { href: 'https://github.com/admybrand', icon: Github, label: 'GitHub' },
  { href: 'https://twitter.com/admybrand', icon: Twitter, label: 'Twitter' },
  { href: 'https://linkedin.com/company/admybrand', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:info@admybrand.com', icon: Mail, label: 'Email' },
]

const links = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200/20 dark:border-gray-700/20 py-12 mt-16">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo & Brand */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="text-xl font-bold gradient-text">ADmyBRAND</span>
        </div>
        {/* Links */}
        <nav className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-300 text-sm">
          {links.map(link => (
            <a key={link.href} href={link.href} className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200">
              {link.label}
            </a>
          ))}
        </nav>
        {/* Socials */}
        <div className="flex items-center gap-4">
          {socials.map(social => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-2 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors duration-200"
            >
              <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400" />
            </a>
          ))}
        </div>
      </div>
      <div className="container-custom text-center text-xs text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} ADmyBRAND AI Suite. All rights reserved.
      </div>
    </footer>
  )
}