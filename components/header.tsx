import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { useEffect, useState } from "react"

export function Header() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize() // Check on mount
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const navItems = [
    { label: "Hem", href: "/" },
    { label: "Program", href: "/program" },
    { label: "Områden", href: "/omraden" },
    { label: "Om festivalen", href: "/om" },
    { label: "Nyheter", href: "/nyheter" },
    { label: "Kontakt", href: "/kontakt" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-black">
      <div className="p-4 md:p-10 relative overflow-hidden ">
        <div className="max-w-[1520px] mx-auto flex items-center justify-between">
          <Link href="/" className="text-base md:text-xl lg:text-2xl font-bold text-white">
            FRI ENTRÉ
          </Link>
          <Link href="/" className="text-2xl md:text-3xl font-bold">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={isMobile ? 186 : 372}
              height={isMobile ? 76 : 152}
            />
          </Link>
          <Sheet>
            <SheetTrigger asChild className="bg-black rounded-full border-0 hover:bg-black/80">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5 text-white" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="mt-8 flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <div className="absolute right-0 top-0 z-[-1] h-full">
          <Image
            src={"/images/header-bg.png"}
            alt="Festival background"
            width={isMobile ? 250 : 500}
            height={isMobile ? 250 : 500}
            className="object-contain"
          />
        </div>
      </div>
    </header>
  )
}
