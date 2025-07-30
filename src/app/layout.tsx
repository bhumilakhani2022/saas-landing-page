import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ADmyBRAND AI Suite - Next-Gen AI-Powered Marketing Platform',
  description: 'Transform your marketing with AI-powered insights, automation, and analytics. The complete marketing suite for modern businesses.',
  keywords: 'AI marketing, marketing automation, analytics, SaaS, digital marketing',
  authors: [{ name: 'ADmyBRAND Team' }],
  creator: 'ADmyBRAND',
  publisher: 'ADmyBRAND',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://admybrand-ai-suite.vercel.app',
    title: 'ADmyBRAND AI Suite - Next-Gen AI-Powered Marketing Platform',
    description: 'Transform your marketing with AI-powered insights, automation, and analytics.',
    siteName: 'ADmyBRAND AI Suite',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ADmyBRAND AI Suite',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADmyBRAND AI Suite - Next-Gen AI-Powered Marketing Platform',
    description: 'Transform your marketing with AI-powered insights, automation, and analytics.',
    images: ['/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0ea5e9',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 