"use client"

import { useState } from "react"
import { Leaf, LogOut, User, Menu, X, ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const rewards = [
  {
    id: 1,
    name: "Mobile Airtime",
    category: "utilities",
    credits: 100,
    value: "GHS 10",
    description: "Get instant mobile credit for any network",
    icon: "📱",
    rating: 4.8,
    redeemed: 2340,
  },
  {
    id: 2,
    name: "School Fees Support",
    category: "education",
    credits: 500,
    value: "GHS 50",
    description: "Support a child's education in your community",
    icon: "📚",
    rating: 4.9,
    redeemed: 1205,
  },
  {
    id: 3,
    name: "Farm Seeds Bundle",
    category: "agriculture",
    credits: 300,
    value: "GHS 30",
    description: "Quality seeds for your next planting season",
    icon: "🌱",
    rating: 4.7,
    redeemed: 856,
  },
  {
    id: 4,
    name: "Cash Out",
    category: "cash",
    credits: 200,
    value: "GHS 20",
    description: "Withdraw directly to your mobile money",
    icon: "💰",
    rating: 4.9,
    redeemed: 3421,
  },
  {
    id: 5,
    name: "Water Filter",
    category: "health",
    credits: 400,
    value: "GHS 40",
    description: "Clean water filter for your household",
    icon: "💧",
    rating: 4.6,
    redeemed: 542,
  },
  {
    id: 6,
    name: "Solar Lamp",
    category: "energy",
    credits: 600,
    value: "GHS 60",
    description: "Eco-friendly solar-powered lamp",
    icon: "☀️",
    rating: 4.8,
    redeemed: 723,
  },
  {
    id: 7,
    name: "Cooking Oil (5L)",
    category: "food",
    credits: 250,
    value: "GHS 25",
    description: "Premium quality cooking oil",
    icon: "🍳",
    rating: 4.7,
    redeemed: 1834,
  },
  {
    id: 8,
    name: "Health Insurance",
    category: "health",
    credits: 800,
    value: "GHS 80",
    description: "1 month of health insurance coverage",
    icon: "🏥",
    rating: 4.9,
    redeemed: 456,
  },
]

export default function MarketplacePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [userCredits] = useState(1250)
  const [cart, setCart] = useState<number[]>([])
  const [notification, setNotification] = useState("")

  const categories = [
    { id: "all", name: "All Rewards" },
    { id: "utilities", name: "Utilities" },
    { id: "education", name: "Education" },
    { id: "agriculture", name: "Agriculture" },
    { id: "health", name: "Health" },
    { id: "energy", name: "Energy" },
    { id: "food", name: "Food" },
    { id: "cash", name: "Cash Out" },
  ]

  const filteredRewards = rewards.filter((reward) => {
    const matchesCategory = selectedCategory === "all" || reward.category === selectedCategory
    const matchesSearch = reward.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleCart = (id: number) => {
    setCart((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
    const reward = rewards.find((r) => r.id === id)
    if (!cart.includes(id)) {
      setNotification(`Added ${reward?.name} to cart`)
      setTimeout(() => setNotification(""), 2000)
    }
  }

  const cartTotal = cart.reduce((sum, id) => {
    const reward = rewards.find((r) => r.id === id)
    return sum + (reward?.credits || 0)
  }, 0)

  const canAfford = cartTotal <= userCredits

  const handleRedeemClick = () => {
    if (cart.length === 0) return
    const items = cart.map((id) => rewards.find((r) => r.id === id)?.name).join(", ")
    alert(`Successfully redeemed ${cart.length} item(s):\n${items}\n\nTotal: ${cartTotal} credits used`)
    setCart([])
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
          <div className="hidden md:flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm">
                Dashboard
              </Button>
            </Link>
            <Link href="/profile">
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4 mr-2" />
                Profile
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
            <Link href="/profile">
              <Button variant="ghost" className="w-full justify-start">
                <User className="w-4 h-4 mr-2" />
                Profile
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
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Rewards Marketplace</h1>
          <p className="text-muted-foreground mb-6">
            Redeem your credits for rewards that matter to you and your community
          </p>

          {/* Credits Display */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Available Credits</p>
                  <p className="text-4xl font-bold">{userCredits.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm opacity-90">In Cart</p>
                  <p className="text-3xl font-bold">{cartTotal.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Notification */}
        {notification && <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">{notification}</div>}

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <Input
            placeholder="Search rewards..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />

          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Rewards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredRewards.map((reward) => (
            <Card
              key={reward.id}
              className={`cursor-pointer transition-all ${
                cart.includes(reward.id) ? "ring-2 ring-primary" : "hover:shadow-lg"
              }`}
              onClick={() => toggleCart(reward.id)}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <span className="text-4xl">{reward.icon}</span>
                  {cart.includes(reward.id) && <Badge className="bg-primary">In Cart</Badge>}
                </div>
                <CardTitle>{reward.name}</CardTitle>
                <CardDescription>{reward.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Credits Required</p>
                    <p className="text-2xl font-bold text-primary">{reward.credits}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Value</p>
                    <p className="text-lg font-semibold">{reward.value}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{reward.rating}</span>
                  <span className="text-muted-foreground">({reward.redeemed.toLocaleString()} redeemed)</span>
                </div>

                <Button
                  className="w-full"
                  variant={cart.includes(reward.id) ? "default" : "outline"}
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleCart(reward.id)
                  }}
                >
                  {cart.includes(reward.id) ? "Remove from Cart" : "Add to Cart"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <Card className="sticky bottom-0 bg-card border-t-2">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">Items in Cart</p>
                  <p className="text-2xl font-bold">{cart.length}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Credits</p>
                  <p className="text-2xl font-bold text-primary">{cartTotal.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Remaining</p>
                  <p className={`text-2xl font-bold ${canAfford ? "text-green-600" : "text-destructive"}`}>
                    {(userCredits - cartTotal).toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setCart([])} className="flex-1">
                  Clear Cart
                </Button>
                <Button disabled={!canAfford} className="flex-1" onClick={handleRedeemClick}>
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Redeem Now
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
