'use client'

import { MetricsCards } from '@/components/dashboard/metrics-cards'
import { DashboardCharts } from '@/components/dashboard/dashboard-charts'
import { DataTable } from '@/components/dashboard/data-table'

export function DashboardContent() {
  return (
    <div className="space-y-6 p-6">
      <MetricsCards />
      <DashboardCharts />
      <DataTable />
    </div>
  )
}
