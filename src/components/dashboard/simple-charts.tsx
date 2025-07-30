'use client'

export function SimpleCharts() {
  return (
    <div className="space-y-6">
      {/* Simple Line Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Revenue & Users Trend (Simple)
        </h3>
        <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-2">📈</div>
            <p className="text-gray-600 dark:text-gray-300">Line Chart Placeholder</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Revenue: $124,500 | Users: 2,847</p>
          </div>
        </div>
      </div>

      {/* Simple Bar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Conversion by Channel (Simple)
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-300">Email</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <span className="text-sm font-medium">400</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-300">Social</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <span className="text-sm font-medium">300</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-300">Direct</span>
              <div className="flex items-center space-x-2">
                <div className="w-32 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '40%' }}></div>
                </div>
                <span className="text-sm font-medium">200</span>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Pie Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Traffic Sources (Simple)
          </h3>
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">🥧</div>
              <p className="text-gray-600 dark:text-gray-300">Pie Chart Placeholder</p>
              <div className="mt-4 space-y-1 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Desktop: 40%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>Mobile: 30%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Tablet: 20%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span>Other: 10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 