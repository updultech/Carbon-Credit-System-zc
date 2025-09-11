"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Camera, MapPin, Calendar } from "lucide-react"

interface LogActivityModalProps {
  isOpen: boolean
  onClose: () => void
  selectedActivityType?: string | null
}

export function LogActivityModal({ isOpen, onClose, selectedActivityType }: LogActivityModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    activityType: selectedActivityType || "",
    quantity: "",
    location: "",
    description: "",
    date: new Date().toISOString().split("T")[0],
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    onClose()

    // Reset form
    setFormData({
      activityType: "",
      quantity: "",
      location: "",
      description: "",
      date: new Date().toISOString().split("T")[0],
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Log Environmental Activity</DialogTitle>
          <DialogDescription>
            Record your environmental action to earn credits and contribute to community impact
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="activityType">Activity Type</Label>
            <Select
              value={formData.activityType}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, activityType: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select activity type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tree-planting">Tree Planting</SelectItem>
                <SelectItem value="recycling">Recycling</SelectItem>
                <SelectItem value="clean-energy">Clean Energy Use</SelectItem>
                <SelectItem value="water-conservation">Water Conservation</SelectItem>
                <SelectItem value="community-cleanup">Community Cleanup</SelectItem>
                <SelectItem value="composting">Composting</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                id="quantity"
                type="number"
                placeholder="e.g., 5 trees, 10 kg"
                value={formData.quantity}
                onChange={(e) => setFormData((prev) => ({ ...prev, quantity: e.target.value }))}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
                  className="pl-10"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="location"
                type="text"
                placeholder="Where did this activity take place?"
                value={formData.location}
                onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description (Optional)</Label>
            <Textarea
              id="description"
              placeholder="Add any additional details about your activity..."
              value={formData.description}
              onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label>Verification Photos</Label>
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
              <Camera className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground mb-2">Upload photos to verify your activity</p>
              <Button type="button" variant="outline" size="sm">
                Choose Photos
              </Button>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading} className="flex-1">
              {isLoading ? "Logging..." : "Log Activity"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
