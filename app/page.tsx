import { Leaf, Users, Trophy, Coins } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function HomePage() {
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
          <Button variant="outline" size="sm">
            Sign In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Earn Credits for Climate Action</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Join thousands of community members earning digital credits for environmental activities. Plant trees,
            recycle, use clean energy - and get rewarded for making a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">12,450</CardTitle>
                <CardDescription>Active Community Members</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">89,230</CardTitle>
                <CardDescription>Trees Planted This Month</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Coins className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">₵45,680</CardTitle>
                <CardDescription>Credits Earned Today</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Take Action</h4>
              <p className="text-muted-foreground">
                Plant trees, recycle, use clean cookstoves, or participate in community clean-up activities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Get Verified</h4>
              <p className="text-muted-foreground">
                Our AI and community validators confirm your environmental activities using photos and location data.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Earn Rewards</h4>
              <p className="text-muted-foreground">
                Receive digital credits that can be redeemed for airtime, school fees, farm inputs, or cash.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-8 text-foreground">Community Impact</h3>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-primary" />
                This Month's Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Trees Planted</span>
                  <span className="text-sm text-muted-foreground">89,230 / 100,000</span>
                </div>
                <Progress value={89} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Waste Recycled (kg)</span>
                  <span className="text-sm text-muted-foreground">15,670 / 20,000</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Clean Cookstove Hours</span>
                  <span className="text-sm text-muted-foreground">45,230 / 50,000</span>
                </div>
                <Progress value={90} className="h-2" />
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Total CO₂ Offset This Month</span>
                  <Badge variant="secondary" className="text-lg px-3 py-1">
                    2,340 tons
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-card/50">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <Leaf className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">EcoCredit</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Empowering communities through transparent climate action rewards
          </p>
        </div>
      </footer>
    </div>
  )
}
