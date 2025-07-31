'use client'

import { useState } from 'react'
import { PricingCard } from './pricing-card'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import TextField from '@mui/material/TextField'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Typography from '@mui/material/Typography'
import { Check, Star } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Starter',
    price: 29,
    description: 'Perfect for small teams and startups',
    features: [
      'Up to 5 team members',
      'Basic AI insights',
      'Email support',
      'Standard analytics',
      '10 campaigns per month',
      'Basic automation'
    ],
    popular: false,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Professional',
    price: 99,
    description: 'Ideal for growing businesses',
    features: [
      'Up to 25 team members',
      'Advanced AI insights',
      'Priority support',
      'Advanced analytics',
      'Unlimited campaigns',
      'Advanced automation',
      'Custom integrations',
      'A/B testing'
    ],
    popular: true,
    gradient: 'from-primary-500 to-secondary-500'
  },
  {
    name: 'Enterprise',
    price: 299,
    description: 'For large organizations',
    features: [
      'Unlimited team members',
      'Custom AI models',
      '24/7 dedicated support',
      'Enterprise analytics',
      'Unlimited everything',
      'Advanced automation',
      'Custom integrations',
      'A/B testing',
      'White-label options',
      'API access'
    ],
    popular: false,
    gradient: 'from-purple-500 to-pink-500'
  }
]

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true)
  const [selectedPlan, setSelectedPlan] = useState('Professional')
  const [teamMembers, setTeamMembers] = useState(10)
  const [monthlyCampaigns, setMonthlyCampaigns] = useState(100)

  const calculatePrice = () => {
    const basePrice = 59
    const memberPrice = teamMembers * 5
    const campaignPrice = monthlyCampaigns * 0.1
    const total = basePrice + memberPrice + campaignPrice
    return isAnnual ? Math.round(total * 0.8) : Math.round(total)
  }

  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <span>💰</span>
            <span>Simple Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Choose the Perfect
            <span className="block gradient-text">Plan for Your Business</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-primary-500' : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Annual
              <span className="ml-1 text-primary-500 font-bold">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-stretch">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              isAnnual={isAnnual}
              isSelected={selectedPlan === plan.name}
              onSelect={() => setSelectedPlan(plan.name)}
            />
          ))}
        </div>

        {/* Interactive Calculator with Material UI */}
        <Box className="bg-gradient-to-br from-primary-50 to-secondary-100 dark:from-gray-900 dark:to-gray-800 border-2 border-primary-400 dark:border-primary-600 rounded-2xl p-10 shadow-2xl my-8" maxWidth="700px" mx="auto" sx={{ background: theme => theme.palette.mode === 'dark' ? 'rgba(30,41,59,0.95)' : undefined }}>
          <Typography component="h3" fontSize={28} fontWeight={700} mb={4} textAlign="center" letterSpacing={2} className="text-gray-900 dark:text-white">
            Custom Pricing Calculator
          </Typography>
          <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr 1fr' }} gap={4} alignItems="center">
            <Box>
              <Typography fontWeight={600} mb={1} className="text-gray-900 dark:text-white">
                Team Members
              </Typography>
              <Slider
                min={1}
                max={100}
                value={teamMembers}
                onChange={(_, value) => setTeamMembers(Number(value))}
                color="primary"
                sx={{ mb: 2, '& .MuiSlider-thumb': { color: theme => theme.palette.mode === 'dark' ? '#fff' : undefined }, '& .MuiSlider-rail': { backgroundColor: theme => theme.palette.mode === 'dark' ? '#334155' : undefined } }}
              />
              <TextField
                type="number"
                size="small"
                label=""
                value={teamMembers}
                onChange={e => setTeamMembers(Number(e.target.value))}
                inputProps={{ min: 1, max: 100 }}
                fullWidth
                sx={{
                  input: { 
                    color: theme => theme.palette.mode === 'dark' ? '#fff' : '#000',
                    backgroundColor: theme => theme.palette.mode === 'dark' ? '#23272f' : '#fff',
                  },
                }}
              />
            </Box>
            <Box>
              <Typography fontWeight={600} mb={1} className="text-gray-900 dark:text-white">
                Monthly Campaigns
              </Typography>
              <Slider
                min={10}
                max={1000}
                value={monthlyCampaigns}
                onChange={(_, value) => setMonthlyCampaigns(Number(value))}
                color="secondary"
                sx={{ mb: 2, '& .MuiSlider-thumb': { color: theme => theme.palette.mode === 'dark' ? '#fff' : undefined }, '& .MuiSlider-rail': { backgroundColor: theme => theme.palette.mode === 'dark' ? '#334155' : undefined } }}
              />
              <TextField
                type="number"
                size="small"
                label=""
                value={monthlyCampaigns}
                onChange={e => setMonthlyCampaigns(Number(e.target.value))}
                inputProps={{ min: 10, max: 1000 }}
                fullWidth
                sx={{
                  input: { 
                    color: theme => theme.palette.mode === 'dark' ? '#fff' : '#000',
                    backgroundColor: theme => theme.palette.mode === 'dark' ? '#23272f' : '#fff',
                  },
                }}
              />
            </Box>
            <Box textAlign="center">
              <Typography fontWeight={600} mb={1} className="text-gray-900 dark:text-white">
                Estimated Cost
              </Typography>
              <Box fontSize={36} fontWeight={900} color={theme => theme.palette.mode === 'dark' ? '#fff' : 'primary.main'} bgcolor={theme => theme.palette.mode === 'dark' ? '#1e293b' : '#fff'} borderRadius={3} px={4} py={2} boxShadow={3} border={2} borderColor={theme => theme.palette.mode === 'dark' ? 'primary.700' : 'primary.200'}>
                ${calculatePrice()}
                <Typography component="span" fontSize={16} fontWeight={400} sx={{ color: theme => theme.palette.mode === 'dark' ? '#e5e7eb' : 'text.secondary' }}>/month</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Material UI Alert Demo */}
        <Alert severity="info" sx={{ mt: 4, maxWidth: 600, mx: 'auto' }}>
          <AlertTitle>Tip</AlertTitle>
          You can use the calculator above to estimate your monthly cost based on your team size and campaign volume. For enterprise pricing, contact our sales team.
        </Alert>
        {/* FAQ Link */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Have questions about pricing?
          </p>
          <a
            href="#faq"
            className="text-primary-600 dark:text-primary-400 font-semibold hover:underline"
          >
            Check our FAQ →
          </a>
        </div>
      </div>
    </section>
  )
}
