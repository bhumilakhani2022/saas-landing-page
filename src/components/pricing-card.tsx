'use client'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Check, Star } from 'lucide-react'

interface PricingPlan {
  name: string
  price: number
  description: string
  features: string[]
  popular: boolean
  gradient: string
}

interface PricingCardProps {
  plan: PricingPlan
  isAnnual: boolean
  isSelected: boolean
  onSelect: () => void
}

export function PricingCard({ plan, isAnnual, isSelected, onSelect }: PricingCardProps) {
  const annualPrice = Math.round(plan.price * 0.8)
  const displayPrice = isAnnual ? annualPrice : plan.price

  return (
    <Card
      elevation={isSelected ? 8 : 2}
      sx={{
        position: 'relative',
        borderRadius: '1.5rem',
        p: 0,
        overflow: 'visible',
        border: isSelected ? '2.5px solid #6366f1' : '1.5px solid rgba(100,116,139,0.10)',
        boxShadow: isSelected ? '0 8px 32px 0 rgba(99,102,241,0.18)' : '0 2px 16px 0 rgba(56,189,248,0.08)',
        transform: isSelected ? 'scale(1.045)' : 'scale(1)',
        transition: 'box-shadow 0.3s, border 0.3s, transform 0.3s',
        minHeight: 420,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        background: 'rgba(255,255,255,0.65)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <Chip
          icon={<Star style={{ color: '#facc15', fontSize: 18 }} />}
          label="Most Popular"
          color="primary"
          sx={{
            position: 'absolute',
            top: -18,
            left: '50%',
            transform: 'translateX(-50%)',
            fontWeight: 700,
            fontSize: 15,
            px: 2,
            py: 0.5,
            borderRadius: '9999px',
            background: 'linear-gradient(90deg, #6366f1 0%, #a21caf 100%)',
            color: '#fff',
            zIndex: 2,
          }}
        />
      )}
      <CardContent sx={{ pt: 5, pb: 2, px: 4, textAlign: 'center', flexGrow: 1 }}>
        <Typography variant="h5" fontWeight={800} color="text.primary" mb={1}>
          {plan.name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" mb={3}>
          {plan.description}
        </Typography>
        <Box mb={3}>
          <Typography variant="h3" fontWeight={900} color="text.primary" display="inline">
            ${displayPrice}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" display="inline">
            /month
          </Typography>
        </Box>
        {isAnnual && (
          <Typography variant="body2" color="primary" fontWeight={600} mb={2}>
            Save 20% with annual billing
          </Typography>
        )}
        <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, mb: 3, textAlign: 'left' }}>
          {plan.features.map((feature, index) => (
            <Box key={index} component="li" display="flex" alignItems="center" mb={1.2} gap={1.2}>
              <Box
                sx={{
                  width: 22,
                  height: 22,
                  borderRadius: '50%',
                  background: '#d1fae5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Check style={{ color: '#059669', fontSize: 16 }} />
              </Box>
              <Typography variant="body2" color="text.secondary">
                {feature}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
      <CardActions sx={{ px: 4, pb: 4, pt: 0 }}>
        <Button
          onClick={onSelect}
          fullWidth
          size="large"
          variant={isSelected ? 'contained' : 'outlined'}
          sx={{
            background: isSelected ? 'linear-gradient(90deg, #38bdf8 0%, #a78bfa 100%)' : 'rgba(255,255,255,0.85)',
            color: isSelected ? '#fff' : '#6366f1',
            fontWeight: 700,
            fontSize: '1.1rem',
            borderRadius: '0.75rem',
            boxShadow: isSelected ? '0 4px 24px 0 rgba(56,189,248,0.15)' : 'none',
            border: isSelected ? 'none' : '2px solid #6366f1',
            textTransform: 'none',
            '&:hover': {
              background: isSelected
                ? 'linear-gradient(90deg, #2563eb 0%, #a21caf 100%)'
                : 'rgba(99,102,241,0.08)',
              color: '#6366f1',
            },
          }}
        >
          {isSelected ? 'Current Plan' : 'Choose Plan'}
        </Button>
      </CardActions>
    </Card>
  )
}
