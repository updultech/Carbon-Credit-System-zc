"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Award, Target, Coins, Zap } from "lucide-react"

export function ActivityStats() {
  return (
    <div className="space-y-6">
      {/* Total Credits */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Coins className="w-5 h-5 text-primary" />
            Total Credits
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-primary mb-2">1,247</div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span>+85 this week</span>
          </div>
        </CardContent>
      </Card>

      {/* Monthly Goal */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Monthly Goal
          </CardTitle>
          <CardDescription>Earn 500 credits this month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>347 / 500</span>
            </div>
            <Progress value={69} className="h-2" />
            <p className="text-xs text-muted-foreground">153 credits to go</p>
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            Recent Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-lg">🌱</span>
              </div>
              <div className="min-w-0">
                <p className="font-medium text-sm">Tree Planter</p>
                <p className="text-xs text-muted-foreground">Planted 50+ trees</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-lg">♻️</span>
              </div>
              <div className="min-w-0">
                <p className="font-medium text-sm">Recycling Hero</p>
                <p className="text-xs text-muted-foreground">Recycled 100kg+ waste</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-lg">⚡</span>
              </div>
              <div className="min-w-0">
                <p className="font-medium text-sm">Clean Energy Champion</p>
                <p className="text-xs text-muted-foreground">30 days clean energy</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Activity Breakdown */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">This Month</CardTitle>
          <CardDescription>Activity breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Tree Planting</span>
              <Badge variant="secondary">23 activities</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Recycling</span>
              <Badge variant="secondary">15 activities</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Clean Energy</span>
              <Badge variant="secondary">8 activities</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Water Conservation</span>
              <Badge variant="secondary">5 activities</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Community Cleanup</span>
              <Badge variant="secondary">3 activities</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Streak Card */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            Current Streak
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-primary mb-2">12 Days</div>
          <p className="text-sm text-muted-foreground">Keep logging activities to maintain your streak!</p>
        </CardContent>
      </Card>
    </div>
  )
}
