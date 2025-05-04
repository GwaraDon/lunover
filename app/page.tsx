import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { ArtistLineup } from "@/components/artist-lineup"
import { ImageGallery } from "@/components/image-gallery"
import { stockholmFont, verdanaFont } from "@/lib/font"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner.png"
            alt="Festival concert with dramatic lighting"
            fill
            className="object-cover brightness-30"
            priority
          />
        </div>

      </section>

      {/* Lineup Section */}
      <section className={`${verdanaFont.className} bg-black text-center text-white`}>
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-[70px] font-normal">1 festival • 5 dagar • 6 områden</h2>
          <Button className="bg-[#D0336C] max-w-[425px] h-[74px] rounded text-[25px] font-bold hover:bg-[#D0336C]/90"> Se hela programmet här </Button>
        </div>
        <div className="relative py-[100px] isolate">
          <div className="absolute bottom-0 left-0 z-[-1]">
            <Image
              src="/images/kf_explosive.png"
              alt="bg"
              width={500}
              height={500}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="absolute bottom-0 left-0 z-[1]">
            <Image
              src="/images/skyline.png"
              alt="bg skyline"
              width={500}
              height={500}
              className="object-contain w-full h-full"
            />
          </div>
          <Image
            src="/images/artist-line.png"
            alt="Artist Lineup"
            width={500}
            height={500}
            className="object-contain w-full h-full max-w-[1520px] mx-auto"
          />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-[1520px] mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">Det här är KULTURFESTIVALEN</h2>
          <ImageGallery />
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black text-white">
        <div className="max-w-[1520px] mx-auto px-4 border-t border-t-white/20  py-10 ">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div>
              <Image src={"/images/stockholms_stad.png"} alt="Festival Logo" width={200} height={80} />
            </div>
            <div>
              <h2 className="mb-2 text-[17px] font-bold">Följ oss</h2>
              <div className="flex gap-4">
                <Link href="#" className="text-white hover:text-gray-300">
                  <Facebook size={24} />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-white hover:text-gray-300">
                  <Instagram size={24} />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-white hover:text-gray-300">
                  <Twitter size={24} />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
            <div>
              <h2 className="mb-2 text-[17px] font-bold">Kontakta oss</h2>
              <p className="text-[17px]">kulturfestivalen@stockholm.se</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
