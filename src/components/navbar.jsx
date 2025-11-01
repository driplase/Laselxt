import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav
      className="font-sans flex justify-between w-full h-(--navbar-height) items-center border-b-slate-700/64 border-b bg-[rgba(17,18,51,0.64)] backdrop-blur-sm sticky top-0 z-81"
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
          <div className="relative group ease-out duration-640 hover:scale-110">
            <Image
              className="invert pointer-events-none z-2"
              src="https://lase.dev/assets/logo/d_128x128.webp"
              decoding="async"
              width={42}
              height={42}
              alt="driplase logo"
            />
            <Image
              className="invert pointer-events-none absolute z-1 inset-0 mix-blend-lighten blur-xs opacity-50 group-hover:blur-[3px] group-hover:opacity-100 ease-out duration-640"
              src="https://lase.dev/assets/logo/d_128x128.webp"
              decoding="async"
              width={42}
              height={42}
              alt="driplase logo"
            />
          </div>
        </Link>
      </div>

    </nav>
  )
}