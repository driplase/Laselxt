export default function About() {
  return (
    <div className="font-sans flex flex-col items-start relative">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-600 to-transparent"></div>

      <section className="bg-linear-to-b from-blue-900/36 to-transparent px-8 sm:px-12 py-[16dvh] sm:py-40 min-[860px]:py-36 lg:py-50 w-full ease-out duration-320 relative">

        <div className="text-[5.4dvw] whitespace-nowrap sm:text-4xl/12 min-[860px]:text-5xl/15 lg:text-6xl/20 font-bold my-3">
          Amaze peoples,<br />
          by doing something <span
            className="bg-(image:--text-grad) bg-clip-text text-transparent relative z-3 before:blur-sm before:content-['interesting'] before:absolute before:-z-1 before:bg-clip-text before:text-transparent before:bg-(image:--text-grad) before:brightness-125 before:opacity-64"
            style={{
              '--text-grad': `linear-gradient(128deg, rgba(36, 189, 255, 1) 0%,
                rgba(128, 31, 255, 1) 100%)`
            }}
          >
            interesting
          </span>.
        </div>

        <div className="text-lg text-slate-400 my-2 mb-6">
          Making something what we really love.
        </div>
      </section>

      <section className="bg-linear-to-b from-indigo-900/12 to-transparent border-t border-t-indigo-800/36 w-full p-6 sm:p-12">
        <h1></h1>
        <p className="text-lg">
          Laselxt (pronounced <code>/ˈleɪz.ləkst/</code>) is a non-profit organization that aims to create amazing artworks, and shares to everyone.<br />
          We wanted to grow and express our creativity, improve skills, and to be known by everyone else. So, we just made Laselxt.<br />
          This is the very beginning of Laselxt. But, we're already working on a new project! Please look forward to see it.
        </p>
      </section>
    </div>
  )
}