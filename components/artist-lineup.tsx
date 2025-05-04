import React from "react"

export function ArtistLineup() {
  const mainArtists = ["QUEENS OF THE STONE AGE", "MICHAEL KIWANUKA", "MADNESS"]

  const secondaryArtists = [
    "WUNDERHORSE",
    "THE MARY WALLOPERS",
    "EVERYTHING EVERYTHING",
    "JAMIE WEBSTER",
    "THE K'S",
    "SPRINTS",
    "ASH",
    "DANIEL BEDINGFIELD",
    "NATHAN DAWE",
  ]

  const otherArtists = [
    "FABIO & GROOVERIDER",
    "DODGYTE",
    "LIME GARDEN",
    "GRADE 2",
    "HOTWAX",
    "MAN/WOMAN/CHAINSAW",
    "OCTOBER DRIFT",
    "MASSAOKE",
    "MIA KIRKLAND",
    "SHE'S IN PARTIES",
    "FLORENCE ROAD",
    "DAWN PENN",
  ]

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8">
        {mainArtists.map((artist, index) => (
          <h3 key={index} className="text-3xl font-bold md:text-4xl">
            {artist}
          </h3>
        ))}
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xl font-medium md:text-2xl">
        {secondaryArtists.map((artist, index) => (
          <React.Fragment key={index}>
            <span>{artist}</span>
            {index < secondaryArtists.length - 1 && <span className="hidden md:inline">•</span>}
          </React.Fragment>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-lg md:text-xl">
        {otherArtists.map((artist, index) => (
          <React.Fragment key={index}>
            <span>{artist}</span>
            {index < otherArtists.length - 1 && <span className="hidden md:inline">•</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
