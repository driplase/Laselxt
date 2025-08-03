import Link from "next/link";

export default function Header() {
  return (
    <footer className="font-sans bg-[rgb(1,_9,_36)] w-full border-t-indigo-900 border-t px-12 py-8 min-h-64 relative">
      <div className="absolute inset-0 bg-linear-to-b from-indigo-950/10 to-transparent pointer-events-none"></div>

      <div className="flex flex-row">

        <div className="mr-8 my-6">
          <h1 className="text-4xl font-medium my-3">
            <Link href="/">
              Laselxt
            </Link>
          </h1>
          <p className="text-sm my-2 italic opacity-64">
            (The informations in this website is all fiction.)
            </p>
          <div className="text-gray-300">&copy; 2025 Laselxt</div>
        </div>

        <div className="mx-8 lg:mx-10 flex flex-col min-[54rem]:grid min-[54rem]:grid-cols-2 lg:grid-cols-3 flex-auto">
          
          <div className="my-2">
            <h4 className="text-base my-2">Projects</h4>

            <p className="m-3">
              <Link href="/projects/editxrva" className="text-lg text-gray-300 p-2 hover:text-gray-100">
                EditxrVA
              </Link>
            </p>

            <p className="m-3">
              <Link href="/projects/sdacode" className="text-lg text-gray-300 p-2 hover:text-gray-100">
                { /* super dynamically animated code editor */ }
                SDA Code Editor
              </Link>
            </p>

            <p className="m-3">
              <span className="text-lg text-gray-400 p-2 hover:cursor-default">
                ...Coming Soon!
              </span>
            </p>
          </div>
          
          <div className="my-2">
            <h4 className="text-base my-2">Laselxt</h4>

            <p className="m-3">
              <Link href="/about" className="text-lg text-gray-300 p-2 hover:text-gray-100">
                About us
              </Link>
            </p>
          </div>

        </div>
        
      </div>

      <div className="my-2 text-center">
        <p className="text-sm text-gray-400">
          <span className="px-2 py-1 mx-1.5">
            Website created by <Link
              href="https://lase.dev" 
              target="_blank" 
              className="underline hover:text-gray-200"
            >
              driplase
            </Link>
          </span>

          <span className="px-2 py-1 mx-1.5">
            <Link
              href="/blog/why-i-made-this-website"
              className="hover:text-gray-200"
            >
              Why I made this website
            </Link>
          </span>
        </p>
      </div>
    </footer>
  )
}