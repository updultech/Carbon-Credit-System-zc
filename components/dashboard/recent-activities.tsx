"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TreePine, Recycle, Zap, Clock, MapPin, CheckCircle, AlertCircle } from "lucide-react"

const recentActivities = [
  {
    id: 1,
    type: "tree-planting",
    title: "Planted 8 Trees",
    location: "Community Park, Accra",
    date: "2 hours ago",
    credits: 40,
    status: "verified",
    icon: TreePine,
  },
  {
    id: 2,
    type: "recycling",
    title: "Recycled 15kg Plastic",
    location: "Recycling Center, Tema",
    date: "1 day ago",
    credits: 30,
    status: "pending",
    icon: Recycle,
  },
  {
    id: 3,
    type: "clean-energy",
    title: "Used Clean Cookstove",
    location: "Home, Kumasi",
    date: "2 days ago",
    credits: 15,
    status: "verified",
    icon: Zap,
  },
  {
    id: 4,
    type: "tree-planting",
    title: "Planted 3 Trees",
    location: "School Compound, Cape Coast",
    date: "3 days ago",
    credits: 15,
    status: "verified",
    icon: TreePine,
  },
]

export function RecentActivities() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
        <CardDescription>Your latest environmental actions and their verification status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivities.map((activity) => {
            const IconComponent = activity.icon
            return (
              <div key={activity.id} className="flex items-center gap-4 p-3 border rounded-lg">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <IconComponent className="w-5 h-5 text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-sm">{activity.title}</h4>
                    {activity.status === "verified" ? (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-yellow-600" />
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span className="truncate">{activity.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{activity.date}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <Badge variant={activity.status === "verified" ? "default" : "secondary"} className="mb-1">
                    +{activity.credits} credits
                  </Badge>
                  <p className="text-xs text-muted-foreground capitalize">{activity.status}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
