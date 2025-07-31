'use client'

import { ComponentType, SVGProps } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Brain, BarChart3, Zap, Target, Users, Shield, TrendingUp, MessageSquare } from 'lucide-react'

const iconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  'AI-Powered Insights': Brain,
  'Advanced Analytics': BarChart3,
  'Automated Campaigns': Zap,
  'Precision Targeting': Target,
  'Team Collaboration': Users,
  'Enterprise Security': Shield,
  'Performance Optimization': TrendingUp,
  'Smart Messaging': MessageSquare,
}

interface FeatureCardProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  description: string
  gradient: string
}

export function FeatureCard({ icon, title, description, gradient }: FeatureCardProps) {
  const Icon = iconMap[title] || icon
  return (
    <Card
      elevation={6}
      sx={{
        position: 'relative',
        borderRadius: '1.5rem',
        p: 3,
        background: theme => theme.palette.mode === 'dark' ? 'rgba(36,41,47,0.98)' : '#fff',
        border: '2.5px solid',
        borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(99,102,241,0.18)' : 'rgba(56,189,248,0.10)',
        boxShadow: '0 6px 32px 0 rgba(56,189,248,0.10)',
        minHeight: 260,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        transition: 'box-shadow 0.3s, border 0.3s, transform 0.3s',
        '&:hover': {
          boxShadow: '0 12px 40px 0 rgba(56,189,248,0.18)',
          borderColor: '#6366f1',
          transform: 'translateY(-4px) scale(1.03)',
        },
      }}
    >
      <Box mb={2} display="flex" alignItems="center" justifyContent="flex-start">
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: 2,
            background: gradient ? `linear-gradient(to bottom right, var(--${gradient.replace(' ', ', --')}) )` : 'linear-gradient(135deg, #38bdf8 0%, #a78bfa 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            boxShadow: 4,
            border: theme => theme.palette.mode === 'dark' ? '2px solid #6366f1' : '2px solid #38bdf8',
          }}
        >
          <Icon style={{ width: 28, height: 28, color: '#fff' }} />
        </Box>
      </Box>
      <CardContent sx={{ p: 0, flex: 1, width: '100%' }}>
        <Typography variant="h6" fontWeight={900} mb={1} sx={{ fontSize: 22, lineHeight: 1.3, color: theme => theme.palette.mode === 'dark' ? '#fff' : theme.palette.text.primary }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: 17, lineHeight: 1.7, color: theme => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.92)' : theme.palette.text.secondary }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
} 