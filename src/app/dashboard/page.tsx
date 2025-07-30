'use client'

import { Suspense, useEffect } from 'react'
import { DashboardHeader } from '@/components/dashboard/dashboard-header'
import { MetricsCards } from '@/components/dashboard/metrics-cards'
import { DashboardCharts } from '@/components/dashboard/dashboard-charts'
import { SimpleCharts } from '@/components/dashboard/simple-charts'
import { DataTable } from '@/components/dashboard/data-table'
import { DashboardSidebar } from '@/components/dashboard/dashboard-sidebar'

export default function Dashboard() {
  useEffect(() => {
    console.log('Dashboard component mounted')
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <DashboardSidebar />
      <div className="lg:pl-64">
        <DashboardHeader />
        <main className="p-6">
          <div className="space-y-6">
            {/* Metrics Cards */}
            <div>
              <MetricsCards />
            </div>
            
            {/* Charts Section */}
            <div>
              <DashboardCharts />
            </div>
            
            {/* Data Table */}
            <div>
              <DataTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
