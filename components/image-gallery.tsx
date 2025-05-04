import Image from "next/image"
import { cn } from "@/lib/utils"

export function ImageGallery() {
  const images = [
    {
      src: "/images/stage-smoke.png",
      alt: "Concert stage with purple smoke effects",
    },
    {
      src: "/images/waterfront.png",
      alt: "Stockholm waterfront with flowers",
    },
    {
      src: "/images/image-2.png",
      alt: "Stockholm waterfront with flowers",
    },
    {
      src: "/images/city-night.png",
      alt: "Stockholm city at night with illuminated tower",
    },
    {
      src: "/images/crowd-purple.png",
      alt: "Festival crowd with purple lighting",
    },
    {
      src: "/images/evening-festival.png",
      alt: "Evening view of the festival area",
    },
    
  ]

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {images.map((image, index) => (
        <div key={index} className={cn("group relative h-60 overflow-hidden rounded-lg md:h-80")}>
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/30" />
        </div>
      ))}
    </div>
  )
}
