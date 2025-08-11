"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gamepad2, Star, TrendingUp, Users, X, ExternalLink, Search } from "lucide-react"
import Image from "next/image"

// Your exact games data
const gamesData = [
  {
    id: 40,
    documentId: "f4s78zuywu3ifylebcdt406v",
    name: "BuildYourRobot2",
    description: "BuildYourRobot2",
    rating: 2,
    link: "https://onspotg.zohari.tech/en/BuildYourRobot2",
    createdAt: "2024-11-06T21:34:07.228Z",
    updatedAt: "2024-11-06T21:34:07.228Z",
    publishedAt: "2024-11-06T21:34:09.947Z",
    avatar_link: "https://i.postimg.cc/G2j356j7/Screenshot-from-2024-11-07-00-33-14.png",
    category: "puzzle",
  },
  {
    id: 42,
    documentId: "lkafhezwmyukx8h7ssw7v92s",
    name: "AirWarfare",
    description: "AirWarfare",
    rating: 5,
    link: "https://onspotg.zohari.tech/en/AirWarfare",
    createdAt: "2024-11-07T04:21:18.286Z",
    updatedAt: "2024-11-07T04:21:18.286Z",
    publishedAt: "2024-11-07T04:21:19.244Z",
    avatar_link: "https://onspotg.zohari.tech/en/AirWarfare/icon-256.png",
    category: "action",
  },
  {
    id: 44,
    documentId: "hdbn9nrykjso4d6i15xo4lsp",
    name: "BlackStarPinball",
    description: "BlackStarPinball",
    rating: 5,
    link: "https://onspotg.zohari.tech/en/BlackStarPinball",
    createdAt: "2024-11-07T04:21:51.652Z",
    updatedAt: "2024-11-07T04:21:51.652Z",
    publishedAt: "2024-11-07T04:21:52.629Z",
    avatar_link: "https://onspotg.zohari.tech/en/BlackStarPinball/icon-256.png",
    category: "arcade",
  },
  {
    id: 46,
    documentId: "s8ogk3u0tthmri282wjcyaib",
    name: "Cartooncoloringbook",
    description: "Cartooncoloringbook",
    rating: 5,
    link: "https://onspotg.zohari.tech/en/Cartooncoloringbook",
    createdAt: "2024-11-07T04:21:54.021Z",
    updatedAt: "2024-11-07T04:21:54.021Z",
    publishedAt: "2024-11-07T04:21:54.974Z",
    avatar_link: "https://onspotg.zohari.tech/en/Cartooncoloringbook/icon-256.png",
    category: "puzzle",
  },
  {
    id: 48,
    documentId: "rdxvrpcg6i7fpkp2mcx6med2",
    name: "ClassicPuzzleGame",
    description: "ClassicPuzzleGame",
    rating: 5,
    link: "https://onspotg.zohari.tech/en/ClassicPuzzleGame",
    createdAt: "2024-11-07T04:21:56.243Z",
    updatedAt: "2024-11-07T04:21:56.243Z",
    publishedAt: "2024-11-07T04:21:57.221Z",
    avatar_link: "https://onspotg.zohari.tech/en/ClassicPuzzleGame/icon-256.png",
    category: "puzzle",
  },
  {
    id: 50,
    documentId: "wc5f1ko9h6ew7zyzvc5bqmyh",
    name: "DangerousCircle",
    description: "DangerousCircle",
    rating: 5,
    link: "https://onspotg.zohari.tech/en/DangerousCircle",
    createdAt: "2024-11-07T04:21:58.485Z",
    updatedAt: "2024-11-07T04:21:58.485Z",
    publishedAt: "2024-11-07T04:21:59.438Z",
    avatar_link: "https://onspotg.zohari.tech/en/DangerousCircle/icon-256.png",
    category: "action",
  },
  {
    id: 52,
    documentId: "ldzrxzmc7qqbmay2i5ntr8m9",
    name: "FastDriver",
    description: "FastDriver",
    rating: 5,
    link: "https://onspotg.zohari.tech/en/FastDriver",
    createdAt: "2024-11-07T04:22:00.757Z",
    updatedAt: "2024-11-07T04:22:00.757Z",
    publishedAt: "2024-11-07T04:22:01.733Z",
    avatar_link: "https://onspotg.zohari.tech/en/FastDriver/icon-256.png",
    category: "racing",
  },
  {
    id: 54,
    documentId: "hwtt80tq3oh1elaoa5ebn12g",
    name: "GoldMinerJack",
    description: "GoldMinerJack",
    rating: 5,
    link: "https://onspotg.zohari.tech/en/GoldMinerJack",
    createdAt: "2024-11-07T04:22:02.991Z",
    updatedAt: "2024-11-07T04:22:02.991Z",
    publishedAt: "2024-11-07T04:22:03.940Z",
    avatar_link: "https://onspotg.zohari.tech/en/GoldMinerJack/icon-256.png",
    category: "action",
  },
  {
    id: 56,
    documentId: "t2gy52vx7r4d5hk6y0qpw90m",
    name: "Krting",
    description: "Krting",
    rating: 5,
    link: "https://onspotg.zohari.tech/en/Krting",
    createdAt: "2024-11-07T04:22:05.249Z",
    updatedAt: "2024-11-07T04:22:05.249Z",
    publishedAt: "2024-11-07T04:22:06.225Z",
    avatar_link: "https://onspotg.zohari.tech/en/Krting/icon-256.png",
    category: "racing",
  },
  {
    id: 58,
    documentId: "yfjz16a8f6v5qe4y2g65zkvq",
    name: "NeonPath",
    description: "NeonPath",
    rating: 5,
    link: "https://onspotg.zohari.tech/en/NeonPath",
    createdAt: "2024-11-07T04:22:07.496Z",
    updatedAt: "2024-11-07T04:22:07.496Z",
    publishedAt: "2024-11-07T04:22:08.448Z",
    avatar_link: "https://onspotg.zohari.tech/en/NeonPath/icon-256.png",
    category: "arcade",
  },
  {
    id: 60,
    documentId: "u6tajcnpyfzlatv1ffpwp7nj",
    name: "RollOrange",
    description: "RollOrange",
    rating: 5,
    link: "https://onspotg.zohari.tech/en/RollOrange",
    createdAt: "2024-11-07T04:22:09.693Z",
    updatedAt: "2024-11-07T04:22:09.693Z",
    publishedAt: "2024-11-07T04:22:10.670Z",
    avatar_link: "https://onspotg.zohari.tech/en/RollOrange/icon-256.png",
    category: "puzzle",
  },
  {
    id: 62,
    documentId: "mp9vwo71elzs8vag1om7ql7d",
    name: "TappyDumont",
    description: "TappyDumont",
    rating: 5,
    link: "https://onspotg.zohari.tech/en/TappyDumont",
    createdAt: "2024-11-07T04:22:12.001Z",
    updatedAt: "2024-11-07T04:22:12.001Z",
    publishedAt: "2024-11-07T04:22:12.951Z",
    avatar_link: "https://onspotg.zohari.tech/en/TappyDumont/icon-256.png",
    category: "arcade",
  },
  {
    id: 64,
    documentId: "jikqh7ynicz6er8xr6fnv3uu",
    name: "AliensMemory",
    description: "AliensMemory",
    rating: 5,
    link: "https://onspotg.zohari.tech/en/AliensMemory",
    createdAt: "2024-11-07T04:22:14.286Z",
    updatedAt: "2024-11-07T04:22:14.286Z",
    publishedAt: "2024-11-07T04:22:15.260Z",
    avatar_link: "https://onspotg.zohari.tech/en/AliensMemory/icon-256.png",
    category: "puzzle",
  },
  {
    id: 66,
    documentId: "yz4kux2trnpo24zjn56oziws",
    name: "BoatRush",
    description: "BoatRush",
    rating: 5,
    link: "https://onspotg.zohari.tech/en/BoatRush",
    createdAt: "2024-11-07T04:22:16.614Z",
    updatedAt: "2024-11-07T04:22:16.614Z",
    publishedAt: "2024-11-07T04:22:17.564Z",
    avatar_link: "https://onspotg.zohari.tech/en/BoatRush/icon-256.png",
    category: "racing",
  },
  {
    id: 68,
    documentId: "cpiuyvgl5xmpxvdgzrhqh31c",
    name: "CholiClimb",
    description: "CholiClimb",
    rating: 5,
    link: "https://onspotg.zohari.tech/en/CholiClimb",
    createdAt: "2024-11-07T04:22:18.867Z",
    updatedAt: "2024-11-07T04:22:18.867Z",
    publishedAt: "2024-11-07T04:22:19.843Z",
    avatar_link: "https://onspotg.zohari.tech/en/CholiClimb/icon-256.png",
    category: "action",
  },
  {
    id: 70,
    documentId: "jqog4ob4maj9z7rbm6ou7wvf",
    name: "ColorCandy",
    description: "ColorCandy",
    rating: 5,
    link: "https://onspotg.zohari.tech/en/ColorCandy",
    createdAt: "2024-11-07T04:22:21.093Z",
    updatedAt: "2024-11-07T04:22:21.093Z",
    publishedAt: "2024-11-07T04:22:22.042Z",
    avatar_link: "https://onspotg.zohari.tech/en/ColorCandy/icon-256.png",
    category: "puzzle",
  },
  {
    id: 72,
    documentId: "ct4h8gkrx3evplhtuj3odf0a",
    name: "DangerousTurn",
    description: "DangerousTurn",
    rating: 5,
    link: "https://onspotg.zohari.tech/en/DangerousTurn",
    createdAt: "2024-11-07T04:22:24.509Z",
    updatedAt: "2024-11-07T04:22:24.509Z",
    publishedAt: "2024-11-07T04:22:25.494Z",
    avatar_link: "https://onspotg.zohari.tech/en/DangerousTurn/icon-256.png",
    category: "racing",
  },
  {
    id: 74,
    documentId: "c5p45lm9himcz2jln0mpt6ly",
    name: "Fishing",
    description: "Fishing",
    rating: 5,
    link: "https://onspotg.zohari.tech/en/Fishing",
    createdAt: "2024-11-07T04:22:26.749Z",
    updatedAt: "2024-11-07T04:22:26.749Z",
    publishedAt: "2024-11-07T04:22:27.698Z",
    avatar_link: "https://onspotg.zohari.tech/en/Fishing/icon-256.png",
    category: "action",
  },
  {
    id: 76,
    documentId: "riyjsropoay8ouv1yeyi10gw",
    name: "GrammarGamble",
    description: "GrammarGamble",
    rating: 5,
    link: "https://onspotg.zohari.tech/en/GrammarGamble",
    createdAt: "2024-11-07T04:22:28.933Z",
    updatedAt: "2024-11-07T04:22:28.933Z",
    publishedAt: "2024-11-07T04:22:29.880Z",
    avatar_link: "https://onspotg.zohari.tech/en/GrammarGamble/icon-256.png",
    category: "puzzle",
  },
  {
    id: 78,
    documentId: "amfwnzc2o0r6q1xe8bga2f6a",
    name: "MadScientist",
    description: "MadScientist",
    rating: 5,
    link: "https://onspotg.zohari.tech/en/MadScientist",
    createdAt: "2024-11-07T04:22:31.151Z",
    updatedAt: "2024-11-07T04:22:31.151Z",
    publishedAt: "2024-11-07T04:22:32.102Z",
    avatar_link: "https://onspotg.zohari.tech/en/MadScientist/icon-256.png",
    category: "action",
  },
  {
    id: 80,
    documentId: "rk8yi4jvat03228fcsqgff06",
    name: "NinjaPumpkin",
    description: "NinjaPumpkin",
    rating: 5,
    link: "https://onspotg.zohari.tech/en/NinjaPumpkin",
    createdAt: "2024-11-07T04:22:33.342Z",
    updatedAt: "2024-11-07T04:22:33.342Z",
    publishedAt: "2024-11-07T04:22:34.316Z",
    avatar_link: "https://onspotg.zohari.tech/en/NinjaPumpkin/icon-256.png",
    category: "action",
  },
  {
    id: 82,
    documentId: "fhwtiitwe5u6uooxnjyrvwfx",
    name: "SantaRun",
    description: "SantaRun",
    rating: 5,
    link: "https://onspotg.zohari.tech/en/SantaRun",
    createdAt: "2024-11-07T04:22:35.651Z",
    updatedAt: "2024-11-07T04:22:35.651Z",
    publishedAt: "2024-11-07T04:22:36.603Z",
    avatar_link: "https://onspotg.zohari.tech/en/SantaRun/icon-256.png",
    category: "action",
  },
  {
    id: 84,
    documentId: "mgofp96rcjf4h27hb6esmvrx",
    name: "TheLastBattle",
    description: "TheLastBattle",
    rating: 5,
    link: "https://onspotg.zohari.tech/en/TheLastBattle",
    createdAt: "2024-11-07T04:22:37.907Z",
    updatedAt: "2024-11-07T04:22:37.907Z",
    publishedAt: "2024-11-07T04:22:38.881Z",
    avatar_link: "https://onspotg.zohari.tech/en/TheLastBattle/icon-256.png",
    category: "action",
  },
  {
    id: 86,
    documentId: "j014elefi43525cu2tw63vc7",
    name: "AngryCatShot",
    description: "AngryCatShot",
    rating: 5,
    link: "https://onspotg.zohari.tech/en/AngryCatShot",
    createdAt: "2024-11-07T04:22:40.129Z",
    updatedAt: "2024-11-07T04:22:40.129Z",
    publishedAt: "2024-11-07T04:22:41.083Z",
    avatar_link: "https://onspotg.zohari.tech/en/AngryCatShot/icon-256.png",
    category: "action",
  },
  {
    id: 88,
    documentId: "jm752alzl2re24r6k0p4r9py",
    name: "BoomRoom",
    description: "BoomRoom",
    rating: 5,
    link: "https://onspotg.zohari.tech/en/BoomRoom",
    createdAt: "2024-11-07T04:22:42.421Z",
    updatedAt: "2024-11-07T04:22:42.421Z",
    publishedAt: "2024-11-07T04:22:43.395Z",
    avatar_link: "https://onspotg.zohari.tech/en/BoomRoom/icon-256.png",
    category: "action",
  },
]

const categories = [
  { key: "action", name: "Action", icon: "🎯", color: "bg-red-500" },
  { key: "puzzle", name: "Puzzle", icon: "🧩", color: "bg-purple-500" },
  { key: "racing", name: "Racing", icon: "🏎️", color: "bg-orange-500" },
  { key: "arcade", name: "Arcade", icon: "🕹️", color: "bg-green-500" },
]

export default function GamingWebsite() {
  const [searchQuery, setSearchQuery] = useState("")
  const [featuredGame, setFeaturedGame] = useState(null)
  const [currentGame, setCurrentGame] = useState(null)
  const [isGameModalOpen, setIsGameModalOpen] = useState(false)
  const [countdown, setCountdown] = useState(3)

  const filteredGamesData = searchQuery.trim()
    ? gamesData.filter(
        (game) =>
          game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          game.category.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : gamesData

  const filteredGamesByCategory = {
    action: filteredGamesData.filter((game) => game.category === "action"),
    puzzle: filteredGamesData.filter((game) => game.category === "puzzle"),
    racing: filteredGamesData.filter((game) => game.category === "racing"),
    arcade: filteredGamesData.filter((game) => game.category === "arcade"),
  }

  const playGame = (game) => {
    setCurrentGame(game)
    setIsGameModalOpen(true)
    setCountdown(3)

    // Store the current game in localStorage for the back button
    localStorage.setItem("ZaamReturnUrl", window.location.href)
    localStorage.setItem("currentGame", JSON.stringify(game))

    // Start countdown
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          // Redirect to game with return parameter
          const gameUrl = new URL(game.link)
          gameUrl.searchParams.set("returnTo", "zaam")
          window.location.href = gameUrl.toString()
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const closeGame = () => {
    setIsGameModalOpen(false)
    setCurrentGame(null)
    setCountdown(3)
  }

  const playNow = () => {
    if (currentGame) {
      // Store the current game in localStorage for the back button
      localStorage.setItem("ZaamReturnUrl", window.location.href)
      localStorage.setItem("currentGame", JSON.stringify(currentGame))

      // Redirect to game with return parameter
      const gameUrl = new URL(currentGame.link)
      gameUrl.searchParams.set("returnTo", "zaam")
      window.location.href = gameUrl.toString()
    }
  }

  // Handle ESC key to close game
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isGameModalOpen) {
        closeGame()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isGameModalOpen])

  // Check if user is returning from a game
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get("returnFrom") === "game") {
      // Clear the URL parameter
      window.history.replaceState({}, document.title, window.location.pathname)

      // Show a welcome back message or highlight recently played game
      const lastGame = localStorage.getItem("currentGame")
      if (lastGame) {
        try {
          const game = JSON.parse(lastGame)
          // You could show a toast or notification here
          console.log(`Welcome back from ${game.name}!`)
        } catch (e) {
          console.error("Error parsing last game:", e)
        }
      }
    }
  }, [])

  // Select random featured game on component mount
  useEffect(() => {
    const randomGame = gamesData[Math.floor(Math.random() * gamesData.length)]
    setFeaturedGame(randomGame)
  }, [])

  // Generate random player count for display
  const getPlayerCount = (rating) => {
    const base = rating * 500
    const random = Math.floor(Math.random() * 1000) + base
    return `${(random / 1000).toFixed(1)}K`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Gamepad2 className="h-8 w-8 text-purple-400" />
              <h1 className="text-2xl font-bold text-white">Zaam</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              {categories.map((category) => (
                <a
                  key={category.key}
                  href={`#${category.key}`}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {category.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <section className="mb-8">
        <div className="max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        {/* Featured Game Section */}
        {featuredGame && (
          <section className="mb-12">
            <div className="flex items-center space-x-2 mb-6">
              <TrendingUp className="h-6 w-6 text-yellow-400" />
              <h2 className="text-3xl font-bold text-white">Trending Now</h2>
            </div>
            <Card className="bg-gradient-to-r from-purple-600 to-blue-600 border-none overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-80">
                    <Image
                      src={featuredGame.avatar_link || "/placeholder.svg"}
                      alt={featuredGame.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-yellow-500 text-black font-semibold">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <Badge className="w-fit mb-3 bg-white/20 text-white capitalize">{featuredGame.category}</Badge>
                    <h3 className="text-4xl font-bold text-white mb-4">{featuredGame.name}</h3>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex items-center text-white/80">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{getPlayerCount(featuredGame.rating)} playing</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < featuredGame.rating ? "text-yellow-400 fill-current" : "text-white/30"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <Button
                      size="lg"
                      className="w-fit bg-white text-purple-600 hover:bg-white/90"
                      onClick={() => playGame(featuredGame)}
                    >
                      <Gamepad2 className="h-5 w-5 mr-2" />
                      Play Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Search Results */}
        {searchQuery.trim() && (
          <section className="mb-12">
            <div className="flex items-center space-x-2 mb-6">
              <Search className="h-6 w-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Search Results for "{searchQuery}"</h2>
              <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                {filteredGamesData.length} games found
              </Badge>
            </div>

            {filteredGamesData.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-slate-400 mb-4">
                  <Search className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <h3 className="text-xl font-semibold mb-2">No games found</h3>
                  <p>Try searching with different keywords or browse our categories below.</p>
                </div>
                <Button
                  onClick={() => setSearchQuery("")}
                  variant="outline"
                  className="text-slate-300 border-slate-600 hover:bg-slate-800 bg-transparent"
                >
                  Clear Search
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredGamesData.map((game) => (
                  <Card
                    key={game.id}
                    className="bg-slate-800 border-slate-700 hover:border-purple-500 transition-all duration-300 cursor-pointer group overflow-hidden"
                    onClick={() => playGame(game)}
                  >
                    <CardContent className="p-0">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={game.avatar_link || "/placeholder.svg"}
                          alt={game.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Button className="bg-purple-600 hover:bg-purple-700">
                            <Gamepad2 className="h-4 w-4 mr-2" />
                            Play
                          </Button>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                          {game.name}
                        </h3>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < game.rating ? "text-yellow-400 fill-current" : "text-gray-600"
                                }`}
                              />
                            ))}
                          </div>
                          <div className="flex items-center text-slate-400 text-sm">
                            <Users className="h-3 w-3 mr-1" />
                            {getPlayerCount(game.rating)}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Games by Category - Hidden when searching */}
        {!searchQuery.trim() &&
          categories.map((category) => {
            const categoryGames = filteredGamesByCategory[category.key] || []
            if (categoryGames.length === 0) return null

            return (
              <section key={category.key} id={category.key} className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div
                    className={`w-10 h-10 rounded-lg ${category.color} flex items-center justify-center text-white text-xl`}
                  >
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white">{category.name} Games</h2>
                  <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                    {categoryGames.length} games
                  </Badge>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {categoryGames.map((game) => (
                    <Card
                      key={game.id}
                      className="bg-slate-800 border-slate-700 hover:border-purple-500 transition-all duration-300 cursor-pointer group overflow-hidden"
                      onClick={() => playGame(game)}
                    >
                      <CardContent className="p-0">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={game.avatar_link || "/placeholder.svg"}
                            alt={game.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Button className="bg-purple-600 hover:bg-purple-700">
                              <Gamepad2 className="h-4 w-4 mr-2" />
                              Play
                            </Button>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                            {game.name}
                          </h3>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 ${
                                    i < game.rating ? "text-yellow-400 fill-current" : "text-gray-600"
                                  }`}
                                />
                              ))}
                            </div>
                            <div className="flex items-center text-slate-400 text-sm">
                              <Users className="h-3 w-3 mr-1" />
                              {getPlayerCount(game.rating)}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )
          })}
      </main>

      {/* Fullscreen Game Launch Modal */}
      {isGameModalOpen && currentGame && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center">
          <div className="text-center max-w-md mx-auto p-8">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={closeGame}
              className="absolute top-4 right-4 text-white hover:text-red-400 hover:bg-slate-800"
              title="Close (ESC)"
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Game Image */}
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-lg overflow-hidden">
              <Image
                src={currentGame.avatar_link || "/placeholder.svg"}
                alt={currentGame.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Game Info */}
            <h2 className="text-3xl font-bold text-white mb-2">{currentGame.name}</h2>
            <Badge className="mb-4 bg-purple-600 text-white capitalize">{currentGame.category}</Badge>

            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="flex items-center text-slate-300">
                <Users className="h-4 w-4 mr-1" />
                <span>{getPlayerCount(currentGame.rating)} playing</span>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < currentGame.rating ? "text-yellow-400 fill-current" : "text-gray-600"}`}
                  />
                ))}
              </div>
            </div>

            {/* Countdown */}
            {countdown > 0 ? (
              <div className="mb-6">
                <div className="text-6xl font-bold text-purple-400 mb-2">{countdown}</div>
                <p className="text-slate-300">Starting game...</p>
              </div>
            ) : (
              <div className="mb-6">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-2"></div>
                <p className="text-slate-300">Launching game...</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button onClick={playNow} className="w-full bg-purple-600 hover:bg-purple-700 text-white" size="lg">
                <ExternalLink className="h-5 w-5 mr-2" />
                Play Now
              </Button>
              <Button
                onClick={closeGame}
                variant="outline"
                className="w-full text-slate-300 border-slate-600 hover:bg-slate-800 bg-transparent"
              >
                Cancel
              </Button>
            </div>

            <p className="text-xs text-slate-500 mt-4">Game will open in the same window</p>
            <p className="text-xs text-slate-400 mt-1">Look for the "Back to Zaam" button while playing</p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-slate-400">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Gamepad2 className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold text-white">Zaam</span>
            </div>
            <p>&copy; 2024 Zaam. All rights reserved. Play responsibly!</p>
            <p className="text-sm mt-2">{gamesData.length} games available to play</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
