"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Leaf, Users, Trophy, Coins, ArrowRight, CheckCircle2, Zap, Globe, Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("overview")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"))
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    localStorage.setItem("theme", newIsDark ? "dark" : "light")
    if (newIsDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const handleRedeemClick = (reward: string) => {
    alert(`Successfully redeemed ${reward}! You'll receive it soon.`)
  }

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
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-border hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <Link href="/auth/signin">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button size="sm">Get Started</Button>
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
            <button
              onClick={toggleTheme}
              className="w-full p-2 rounded-lg border border-border hover:bg-muted transition-colors flex items-center justify-center gap-2"
            >
              {isDark ? (
                <>
                  <Sun className="w-4 h-4" />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4" />
                  Dark Mode
                </>
              )}
            </button>
            <Link href="/auth/signin" className="block">
              <Button variant="outline" className="w-full bg-transparent">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/signup" className="block">
              <Button className="w-full">Get Started</Button>
            </Link>
          </div>
        )}
      </header>

      {/* Hero Section with Climate Animation and Image */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/green-earth-with-trees-nature-climate-action.jpg"
            alt="Climate action background"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>

        {/* Animated climate illustration overlay - kept as accent */}
        <div className="absolute inset-0 z-0">
          <svg className="w-full h-full opacity-10" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <style>{`
                @keyframes float {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-20px); }
                }
                @keyframes sway {
                  0%, 100% { transform: rotate(0deg); }
                  50% { transform: rotate(2deg); }
                }
                .tree { animation: sway 4s ease-in-out infinite; transform-origin: bottom center; }
                .leaf { animation: float 3s ease-in-out infinite; }
                .earth { animation: float 5s ease-in-out infinite; }
              `}</style>
            </defs>
            {/* Trees */}
            <g className="tree" style={{ transformOrigin: "100px 400px" }}>
              <path d="M 100 400 Q 80 350 100 300 Q 120 350 100 400" fill="currentColor" opacity="0.8" />
              <rect x="95" y="400" width="10" height="80" fill="currentColor" opacity="0.6" />
            </g>
            {/* Leaves floating */}
            <circle cx="200" cy="200" r="8" fill="currentColor" opacity="0.4" className="leaf" />
            <circle
              cx="400"
              cy="150"
              r="6"
              fill="currentColor"
              opacity="0.4"
              className="leaf"
              style={{ animationDelay: "0.5s" }}
            />
            {/* Earth/Globe */}
            <circle cx="1000" cy="100" r="60" fill="currentColor" opacity="0.3" className="earth" />
            <circle cx="1000" cy="100" r="58" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.2" />
          </svg>
        </div>

        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            Join the Climate Action Movement
          </Badge>
          <h2 className="text-5xl font-bold text-foreground mb-6 text-balance">Earn Credits for Climate Action</h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Join thousands of community members earning digital credits for environmental activities. Plant trees,
            recycle, use clean energy - and get rewarded for making a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="text-lg px-8">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-transparent"
              onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="how-it-works">How It Works</TabsTrigger>
              <TabsTrigger value="impact">Impact</TabsTrigger>
              <TabsTrigger value="rewards">Rewards</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">12,450</CardTitle>
                    <CardDescription>Active Community Members</CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                      <Leaf className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">89,230</CardTitle>
                    <CardDescription>Trees Planted This Month</CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                      <Coins className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">₵45,680</CardTitle>
                    <CardDescription>Credits Earned Today</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>

            {/* How It Works Tab */}
            <TabsContent value="how-it-works" className="space-y-6">
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
                    Our AI and community validators confirm your environmental activities using photos and location
                    data.
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
            </TabsContent>

            {/* Impact Tab */}
            <TabsContent value="impact" className="space-y-6">
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
            </TabsContent>

            {/* Rewards Tab */}
            <TabsContent value="rewards" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary" />
                      Mobile Airtime
                    </CardTitle>
                    <CardDescription>Redeem credits for phone credit</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary mb-4">100 Credits</p>
                    <Button className="w-full" onClick={() => handleRedeemClick("Mobile Airtime")}>
                      Redeem Now
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-primary" />
                      School Fees
                    </CardTitle>
                    <CardDescription>Support education in your community</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary mb-4">500 Credits</p>
                    <Button className="w-full" onClick={() => handleRedeemClick("School Fees")}>
                      Redeem Now
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      Farm Inputs
                    </CardTitle>
                    <CardDescription>Get seeds and farming supplies</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary mb-4">300 Credits</p>
                    <Button className="w-full" onClick={() => handleRedeemClick("Farm Inputs")}>
                      Redeem Now
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Coins className="w-5 h-5 text-primary" />
                      Cash Out
                    </CardTitle>
                    <CardDescription>Withdraw to your mobile money</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary mb-4">200 Credits</p>
                    <Button className="w-full" onClick={() => handleRedeemClick("Cash Out")}>
                      Redeem Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4" id="features">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Why Choose EcoCredit?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Transparent & Secure</h4>
                <p className="text-muted-foreground">
                  Blockchain-verified transactions ensure complete transparency and security.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Real Impact</h4>
                <p className="text-muted-foreground">Every credit earned represents verified environmental action.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Multiple Rewards</h4>
                <p className="text-muted-foreground">Redeem for airtime, school fees, farm inputs, or cash.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Community Driven</h4>
                <p className="text-muted-foreground">Join a global movement of climate-conscious individuals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h3 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
          <p className="text-lg mb-8 opacity-90">
            Start earning credits today and be part of the solution to climate change.
          </p>
          <Link href="/auth/signup">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-card/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-semibold text-foreground">EcoCredit</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering communities through transparent climate action rewards
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button onClick={() => setActiveTab("how-it-works")} className="hover:text-foreground cursor-pointer">
                    Features
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("rewards")} className="hover:text-foreground cursor-pointer">
                    Pricing
                  </button>
                </li>
                <li>
                  <button className="hover:text-foreground">Security</button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button className="hover:text-foreground">About</button>
                </li>
                <li>
                  <button className="hover:text-foreground">Blog</button>
                </li>
                <li>
                  <button className="hover:text-foreground">Contact</button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button className="hover:text-foreground">Privacy</button>
                </li>
                <li>
                  <button className="hover:text-foreground">Terms</button>
                </li>
                <li>
                  <button className="hover:text-foreground">Cookies</button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 EcoCredit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
