import { ActivityDashboard } from "@/components/dashboard/activity-dashboard"
import { RecentActivities } from "@/components/dashboard/recent-activities"
import { ActivityStats } from "@/components/dashboard/activity-stats"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Your Impact Dashboard</h1>
          <p className="text-muted-foreground">Track your environmental activities and see your positive impact</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Activity Section */}
          <div className="lg:col-span-2 space-y-6">
            <ActivityDashboard />
            <RecentActivities />
          </div>

          {/* Stats Sidebar */}
          <div className="space-y-6">
            <ActivityStats />
          </div>
        </div>
      </div>
    </div>
  )
}
