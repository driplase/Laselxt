import PathnameCode from "@/components/not-found/pathnameCode";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="font-sans flex flex-col text-center items-center relative">

      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-600 to-transparent opacity-64"></div>

      <section className="bg-linear-to-b from-blue-900/25 to-transparent p-8 w-full ease-out duration-320 relative">

        <div className="min-h-[calc(100vh_-_var(--navbar-height)_-_2_*_var(--spacing)_*_8)] flex flex-col justify-center items-center">

          <div className="whitespace-nowrap text-8xl font-bold my-3">
            404
          </div>

          <div className="text-lg text-slate-400 my-2 mb-6">
            Page not found: <PathnameCode />
          </div>

          <Link className="btn-normal before:content-['Back_to_Home']" href="/">
            Back to Home
          </Link>

        </div>

      </section>

    </div>
  );
}
