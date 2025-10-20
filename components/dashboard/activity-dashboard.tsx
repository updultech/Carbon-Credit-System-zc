"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, TreePine, Recycle, Zap, Droplets, Leaf } from "lucide-react"
import { LogActivityModal } from "./log-activity-modal"

const activityTypes = [
  {
    id: "tree-planting",
    name: "Tree Planting",
    icon: TreePine,
    description: "Plant trees in your community",
    credits: "5-15 credits per tree",
    color: "bg-green-100 text-green-700",
  },
  {
    id: "recycling",
    name: "Recycling",
    icon: Recycle,
    description: "Recycle plastic, paper, or metal",
    credits: "2-8 credits per kg",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "clean-energy",
    name: "Clean Energy Use",
    icon: Zap,
    description: "Use solar panels or clean cookstoves",
    credits: "10-25 credits per day",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    id: "water-conservation",
    name: "Water Conservation",
    icon: Droplets,
    description: "Implement water-saving practices",
    credits: "5-12 credits per activity",
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    id: "community-cleanup",
    name: "Community Cleanup",
    icon: Leaf,
    description: "Participate in community cleanup events",
    credits: "8-20 credits per event",
    color: "bg-emerald-100 text-emerald-700",
  },
]

export function ActivityDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null)

  const handleActivitySelect = (activityId: string) => {
    setSelectedActivity(activityId)
    setIsModalOpen(true)
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Log New Activity
            <Button size="sm" onClick={() => setIsModalOpen(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Quick Log
            </Button>
          </CardTitle>
          <CardDescription>Choose an environmental activity to log and earn credits</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activityTypes.map((activity) => {
              const IconComponent = activity.icon
              return (
                <div
                  key={activity.id}
                  className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                  onClick={() => handleActivitySelect(activity.id)}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-full ${activity.color}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm mb-1">{activity.name}</h4>
                      <p className="text-xs text-muted-foreground mb-2">{activity.description}</p>
                      <Badge variant="secondary" className="text-xs">
                        {activity.credits}
                      </Badge>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <LogActivityModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedActivity(null)
        }}
        selectedActivityType={selectedActivity}
      />
    </>
  )
}
