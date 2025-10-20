"use client"

import { useState } from "react"
import { Leaf, LogOut, Settings, Menu, X, Edit2, Award, TrendingUp, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function ProfilePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const userProfile = {
    name: "John Mensah",
    phone: "+233 24 123 4567",
    email: "john.mensah@email.com",
    joinDate: "January 15, 2025",
    location: "Accra, Ghana",
    avatar: "JM",
  }

  const stats = {
    totalCredits: 1250,
    creditsEarned: 3450,
    creditsRedeemed: 2200,
    activitiesLogged: 45,
    treesPlanted: 120,
    wasteRecycled: 450,
    achievements: 8,
  }

  const achievements = [
    { id: 1, name: "Tree Planter", description: "Plant 50 trees", icon: "🌳", unlocked: true },
    { id: 2, name: "Recycling Champion", description: "Recycle 500kg", icon: "♻️", unlocked: true },
    { id: 3, name: "Community Hero", description: "Log 50 activities", icon: "🦸", unlocked: true },
    { id: 4, name: "Green Warrior", description: "Earn 5000 credits", icon: "⚔️", unlocked: false },
    { id: 5, name: "Climate Leader", description: "Offset 10 tons CO₂", icon: "🌍", unlocked: false },
    { id: 6, name: "Eco Influencer", description: "Refer 10 friends", icon: "📢", unlocked: false },
  ]

  const recentRedemptions = [
    { id: 1, item: "Mobile Airtime", credits: 100, date: "Mar 15, 2025", status: "Completed" },
    { id: 2, item: "Farm Seeds Bundle", credits: 300, date: "Mar 10, 2025", status: "Completed" },
    { id: 3, item: "Cash Out", credits: 200, date: "Mar 5, 2025", status: "Completed" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold text-foreground">EcoCredit</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm">
                Dashboard
              </Button>
            </Link>
            <Link href="/marketplace">
              <Button variant="ghost" size="sm">
                Marketplace
              </Button>
            </Link>
            <Link href="/settings">
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-card/50 p-4 space-y-2">
            <Link href="/dashboard">
              <Button variant="ghost" className="w-full justify-start">
                Dashboard
              </Button>
            </Link>
            <Link href="/marketplace">
              <Button variant="ghost" className="w-full justify-start">
                Marketplace
              </Button>
            </Link>
            <Link href="/settings">
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 max-w-5xl">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground">
                  {userProfile.avatar}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-foreground">{userProfile.name}</h1>
                  <p className="text-muted-foreground">{userProfile.location}</p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    Joined {userProfile.joinDate}
                  </div>
                </div>
              </div>
              <Button onClick={() => setIsEditing(!isEditing)}>
                <Edit2 className="w-4 h-4 mr-2" />
                {isEditing ? "Done" : "Edit Profile"}
              </Button>
            </div>

            {isEditing && (
              <div className="space-y-4 pt-6 border-t">
                <div>
                  <label className="text-sm font-medium text-foreground">Full Name</label>
                  <input
                    type="text"
                    defaultValue={userProfile.name}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <input
                    type="email"
                    defaultValue={userProfile.email}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Location</label>
                  <input
                    type="text"
                    defaultValue={userProfile.location}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground mt-1"
                  />
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Available Credits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">{stats.totalCredits.toLocaleString()}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Total Earned</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-600">{stats.creditsEarned.toLocaleString()}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Activities Logged</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stats.activitiesLogged}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stats.achievements}/6</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="achievements" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="activity">Activity Stats</TabsTrigger>
            <TabsTrigger value="redemptions">Redemptions</TabsTrigger>
          </TabsList>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((achievement) => (
                <Card key={achievement.id} className={achievement.unlocked ? "" : "opacity-50"}>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-4xl mb-2">{achievement.icon}</p>
                      <h4 className="font-semibold text-foreground mb-1">{achievement.name}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
                      {achievement.unlocked ? (
                        <Badge className="bg-green-600">Unlocked</Badge>
                      ) : (
                        <Badge variant="secondary">Locked</Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Activity Stats Tab */}
          <TabsContent value="activity" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Environmental Impact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Trees Planted</span>
                      <span className="text-lg font-bold text-primary">{stats.treesPlanted}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "60%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Waste Recycled (kg)</span>
                      <span className="text-lg font-bold text-primary">{stats.wasteRecycled}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }} />
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground mb-2">Estimated CO₂ Offset</p>
                    <p className="text-2xl font-bold text-primary">2.3 tons</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Credits Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-sm text-muted-foreground">Total Earned</span>
                    <span className="font-semibold text-green-600">{stats.creditsEarned.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-sm text-muted-foreground">Total Redeemed</span>
                    <span className="font-semibold text-orange-600">{stats.creditsRedeemed.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center pt-3">
                    <span className="text-sm font-medium">Available Balance</span>
                    <span className="text-xl font-bold text-primary">{stats.totalCredits.toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Redemptions Tab */}
          <TabsContent value="redemptions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Redemptions</CardTitle>
                <CardDescription>Your recent reward redemptions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentRedemptions.map((redemption) => (
                    <div key={redemption.id} className="flex items-center justify-between pb-4 border-b last:border-0">
                      <div>
                        <p className="font-medium text-foreground">{redemption.item}</p>
                        <p className="text-sm text-muted-foreground">{redemption.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-primary">{redemption.credits} credits</p>
                        <Badge variant="secondary" className="mt-1">
                          {redemption.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Link href="/marketplace">
              <Button className="w-full" size="lg">
                Browse More Rewards
              </Button>
            </Link>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
