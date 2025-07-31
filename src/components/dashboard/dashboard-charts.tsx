'use client'

import { useState, useEffect, useMemo } from 'react'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

// Types for better type safety
interface ChartDataPoint {
  name: string
  revenue?: number
  users?: number
  conversions?: number
  target?: number
  value?: number
  color?: string
}

interface ChartProps {
  data: ChartDataPoint[]
  height?: number
  title: string
  className?: string
}

// Constants for consistent styling
const CHART_COLORS = {
  primary: '#0ea5e9',
  secondary: '#d946ef',
  success: '#10b981',
  warning: '#f59e0b',
  info: '#3b82f6'
}

const TOOLTIP_STYLE = {
  backgroundColor: '#1f2937',
  border: '1px solid #374151',
  borderRadius: '8px',
  color: '#f9fafb',
  fontSize: '12px',
  padding: '8px 12px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  zIndex: 1000
}

// Sample data - in a real app, this would come from props or API
const lineChartData: ChartDataPoint[] = [
  { name: 'Jan', revenue: 4000, users: 2400 },
  { name: 'Feb', revenue: 3000, users: 1398 },
  { name: 'Mar', revenue: 2000, users: 9800 },
  { name: 'Apr', revenue: 2780, users: 3908 },
  { name: 'May', revenue: 1890, users: 4800 },
  { name: 'Jun', revenue: 2390, users: 3800 },
  { name: 'Jul', revenue: 3490, users: 4300 },
]

const barChartData: ChartDataPoint[] = [
  { name: 'Email', conversions: 400, target: 500 },
  { name: 'Social', conversions: 300, target: 400 },
  { name: 'Direct', conversions: 200, target: 300 },
  { name: 'Organic', conversions: 278, target: 350 },
  { name: 'Referral', conversions: 189, target: 250 },
]

const pieChartData: ChartDataPoint[] = [
  { name: 'Desktop', value: 400, color: CHART_COLORS.primary },
  { name: 'Mobile', value: 300, color: CHART_COLORS.secondary },
  { name: 'Tablet', value: 200, color: CHART_COLORS.success },
  { name: 'Other', value: 100, color: CHART_COLORS.warning },
]

// Individual Chart Components
const LineChartComponent = ({ data, height = 300, title, className }: ChartProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-700 hover-lift ${isVisible ? 'chart-animate opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis 
            dataKey="name" 
            stroke="#6b7280"
            fontSize={12}
          />
          <YAxis 
            stroke="#6b7280"
            fontSize={12}
          />
          <Tooltip contentStyle={TOOLTIP_STYLE} />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke={CHART_COLORS.primary} 
            strokeWidth={2}
            dot={{ fill: CHART_COLORS.primary, strokeWidth: 2, r: 4 }}
            animationDuration={1500}
            animationBegin={200}
            className="chart-line-animate"
          />
          <Line 
            type="monotone" 
            dataKey="users" 
            stroke={CHART_COLORS.secondary} 
            strokeWidth={2}
            dot={{ fill: CHART_COLORS.secondary, strokeWidth: 2, r: 4 }}
            animationDuration={1500}
            animationBegin={400}
            className="chart-line-animate"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

const BarChartComponent = ({ data, height = 300, title, className }: ChartProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-700 hover-lift ${isVisible ? 'chart-animate opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis 
            dataKey="name" 
            stroke="#6b7280"
            fontSize={12}
          />
          <YAxis 
            stroke="#6b7280"
            fontSize={12}
          />
          <Tooltip contentStyle={TOOLTIP_STYLE} />
          <Legend />
          <Bar 
            dataKey="conversions" 
            fill={CHART_COLORS.primary} 
            radius={[4, 4, 0, 0]}
            animationDuration={1200}
            animationBegin={300}
            className="chart-bar-animate"
          />
          <Bar 
            dataKey="target" 
            fill={CHART_COLORS.secondary} 
            radius={[4, 4, 0, 0]}
            animationDuration={1200}
            animationBegin={500}
            className="chart-bar-animate"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

const PieChartComponent = ({ data, height = 300, title, className }: ChartProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-700 hover-lift ${isVisible ? 'chart-animate opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            animationDuration={1000}
            animationBegin={400}
            className="chart-pie-animate"
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.color || CHART_COLORS.primary} 
              />
            ))}
          </Pie>
          <Tooltip contentStyle={TOOLTIP_STYLE} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

// Main Dashboard Charts Component
export function DashboardCharts() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Memoize data to prevent unnecessary re-renders
  const memoizedLineData = useMemo(() => lineChartData, [])
  const memoizedBarData = useMemo(() => barChartData, [])
  const memoizedPieData = useMemo(() => pieChartData, [])

  if (!isLoaded) {
    return (
      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
            <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6" role="region" aria-label="Dashboard Charts">
      {/* Line Chart */}
      <LineChartComponent 
        data={memoizedLineData}
        title="Revenue & Users Trend"
        height={300}
      />

      {/* Bar Chart and Pie Chart Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BarChartComponent 
          data={memoizedBarData}
          title="Conversion by Channel"
          height={300}
        />
        <PieChartComponent 
          data={memoizedPieData}
          title="Traffic Sources"
          height={300}
        />
      </div>
    </div>
  )
}
