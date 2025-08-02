export default function About() {
  return (
    <div className="font-sans flex flex-col items-start relative">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-600 to-transparent"></div>

      <section className="bg-linear-to-b from-blue-900/36 to-transparent px-8 sm:px-12 py-[16dvh] sm:py-40 min-[860px]:py-36 lg:py-50 w-full ease-out duration-320 relative">

        <div className="text-[5.4dvw] whitespace-nowrap sm:text-4xl/12 min-[860px]:text-5xl/15 lg:text-6xl/20 font-bold my-3">
          About Laselxt
        </div>
        
        <div className="text-lg text-slate-400 my-2 mb-6">
          Explaining something about Laselxt.
        </div>

      </section>

      <section className="bg-linear-to-b from-blue-900/12 to-transparent border-t border-t-blue-600/36 w-full p-6 sm:p-12">
        <p className="text-lg">
          Laselxt (pronounced <code>/ˈleɪz.ləkst/</code>) is a non-profit organization that aims to create amazing artworks, and shares to everyone.<br />
          We wanted to grow and express our creativity, improve skills, and to be known by everyone else. So, we made Laselxt.<br />
          This is the very beginning of Laselxt yet. But, we're already working on a new project! Please look forward to see it.
        </p>
      </section>
    </div>
  );
}
