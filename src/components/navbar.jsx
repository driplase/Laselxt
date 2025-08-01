import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav
      className="font-sans flex justify-between w-full h-(--navbar-height) items-center border-b-blue-900/80 border-b bg-[rgba(0,_29,_77,_.64)] backdrop-blur-sm sticky top-0"
    >
      <div className="pl-7 sm:pl-12 py-2">
        <Link href="/">
          <span className="text-2xl font-medium">
            Laselxt
          </span>
        </Link>
      </div>
      
      <div className="py-2 pr-2">
        <Link href="https://lase.dev" target="_blank" alt="Visit lase.dev">
          <Image
            className="invert pointer-events-none"
            src="https://lase.dev/assets/d_64x64.png"
            decoding="async"
            width={42}
            height={42}
            alt="driplase logo"
          />
        </Link>
      </div>
    </nav>
  )
}