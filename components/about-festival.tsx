export function AboutFestival() {
  const infoItems = [
    {
      title: "Festivalen genom tiderna",
      content:
        "Kulturfestivalen har varit en del av Stockholms kulturliv sedan 2006 och har vuxit till att bli en av Sveriges största kulturfestivaler.",
    },
    {
      title: "Frågor och svar",
      content:
        "Här hittar du svar på de vanligaste frågorna om festivalen, inklusive information om tillgänglighet, mat och dryck, och säkerhet.",
    },
    {
      title: "UNG Kulturfestival",
      content:
        "Ett särskilt program för unga besökare med aktiviteter och uppträdanden anpassade för barn och ungdomar.",
    },
    {
      title: "Partner och sponsorer",
      content: "Kulturfestivalen möjliggörs genom samarbete med våra partners och sponsorer. Läs mer om dem här.",
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {infoItems.map((item, index) => (
        <div key={index} className="rounded-lg bg-white p-6 shadow-sm">
          <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
          <p>{item.content}</p>
          <a href="#" className="mt-4 inline-block font-medium text-blue-600 hover:underline">
            Läs mer
          </a>
        </div>
      ))}
    </div>
  )
}
