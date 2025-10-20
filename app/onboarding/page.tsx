"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Zap, Globe, CheckCircle2, ArrowRight } from "lucide-react"

const activities = [
  { id: "tree-planting", name: "Tree Planting", icon: Leaf, description: "Plant trees in your community" },
  { id: "recycling", name: "Recycling", icon: Globe, description: "Recycle waste materials" },
  { id: "clean-energy", name: "Clean Energy", icon: Zap, description: "Use clean cookstoves or solar" },
  { id: "community-cleanup", name: "Community Cleanup", icon: CheckCircle2, description: "Participate in cleanups" },
]

export default function OnboardingPage() {
  const router = useRouter()
  const [selectedActivities, setSelectedActivities] = useState<string[]>([])
  const [step, setStep] = useState(1)

  const toggleActivity = (id: string) => {
    setSelectedActivities((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const handleComplete = () => {
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-foreground">Welcome to EcoCredit</h1>
            <Badge variant="secondary">Step {step} of 2</Badge>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 2) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1: Select Activities */}
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>What activities interest you?</CardTitle>
              <CardDescription>
                Select the environmental activities you'd like to participate in. You can change these later.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activities.map((activity) => {
                  const Icon = activity.icon
                  const isSelected = selectedActivities.includes(activity.id)
                  return (
                    <button
                      key={activity.id}
                      onClick={() => toggleActivity(activity.id)}
                      className={`p-4 rounded-lg border-2 transition-all text-left ${
                        isSelected ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <Icon className={`w-6 h-6 mt-1 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                        <div>
                          <h4 className="font-semibold text-foreground">{activity.name}</h4>
                          <p className="text-sm text-muted-foreground">{activity.description}</p>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>

              <Button onClick={() => setStep(2)} disabled={selectedActivities.length === 0} className="w-full">
                Continue
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Profile Setup */}
        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Set Your Goals</CardTitle>
              <CardDescription>
                Tell us about your environmental goals to help us personalize your experience.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 rounded-lg border-2 border-primary bg-primary/5">
                  <h4 className="font-semibold text-foreground mb-2">Your Selected Activities</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedActivities.map((id) => {
                      const activity = activities.find((a) => a.id === id)
                      return (
                        <Badge key={id} variant="secondary">
                          {activity?.name}
                        </Badge>
                      )
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Monthly Goal (Credits)</label>
                  <input
                    type="number"
                    placeholder="e.g., 500"
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground"
                    defaultValue="500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Preferred Reward</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground">
                    <option>Mobile Airtime</option>
                    <option>School Fees</option>
                    <option>Farm Inputs</option>
                    <option>Cash Out</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                  Back
                </Button>
                <Button onClick={handleComplete} className="flex-1">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
