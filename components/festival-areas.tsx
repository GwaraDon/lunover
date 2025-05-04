import Image from "next/image"

export function FestivalAreas() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="rounded-lg bg-gray-100 p-6">
        <h3 className="mb-4 text-xl font-bold">Festivalområden</h3>
        <ul className="space-y-2">
          <li>• REGERINGSGATAN</li>
          <li>• MALMTORGSGATAN</li>
          <li>• GUSTAV ADOLFS TORG</li>
          <li>• NORRBRO</li>
          <li>• STRÖMGATAN</li>
          <li>• KUNGSTRÄDGÅRDEN</li>
        </ul>
      </div>
      <div className="relative h-[300px] overflow-hidden rounded-lg">
        <Image src="/images/festival-map.png" alt="Festival map" fill className="object-cover" />
      </div>
    </div>
  )
}
