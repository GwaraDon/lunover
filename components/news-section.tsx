import Image from "next/image"
import { Button } from "@/components/ui/button"

export function NewsSection() {
  const newsItems = [
    {
      title: "Årets lineup är här!",
      date: "15 maj 2025",
      excerpt: "Vi är stolta att presentera årets artister för Kulturfestivalen 2025.",
      image: "/images/banner.png",
    },
    {
      title: "Nya områden tillkommer",
      date: "10 maj 2025",
      excerpt: "I år utökar vi festivalen med två nya områden i centrala Stockholm.",
      image: "/images/city-night.png",
    },
    {
      title: "Volontärer sökes",
      date: "5 maj 2025",
      excerpt: "Vill du vara en del av årets festival? Vi söker volontärer!",
      image: "/images/waterfront.png",
    },
  ]

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {newsItems.map((item, index) => (
        <div key={index} className="overflow-hidden rounded-lg border">
          <div className="relative h-48">
            <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
          </div>
          <div className="p-4">
            <p className="mb-2 text-sm text-gray-500">{item.date}</p>
            <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
            <p className="mb-4">{item.excerpt}</p>
            <Button variant="outline">Läs mer</Button>
          </div>
        </div>
      ))}
    </div>
  )
}
