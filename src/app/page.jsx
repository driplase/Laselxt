import Image from "next/image";
import Link from "next/link";
import { IconVolume } from '@tabler/icons-react';

export default function Home() {

  return (
    <div className="font-sans flex flex-col items-start">
      <section className="bg-linear-to-b from-indigo-900/16 to-transparent border-t border-t-indigo-800/36 px-8 sm:px-12 py-[12dvh] sm:py-32 min-[860px]:py-36 lg:py-50 w-full ease-out duration-320">
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
          Making something what I really love.
        </div>

        <Link className="relative text-xl bg-linear-128 from-sky-500 to-indigo-500 px-3.5 py-2 rounded-xl before:text-xl before:bg-linear-128 before:from-sky-500 before:to-indigo-500 before:px-3.5 before:py-2 before:rounded-xl before:content-['Learn_more'] before:blur-sm hover:before:blur-md before:opacity-80 hover:before:opacity-100 before:absolute before:inset-0 before:-z-1 before:duration-640 before:ease-out" href="/about">
          Learn more
        </Link>
      </section>

      <section className="bg-linear-to-b from-indigo-900/16 to-transparent border-t border-t-indigo-800/36 w-full p-12">
        <h1></h1>
        <p className="text-lg">
          Laselxt (pronounced <code className="px-1.5 py-1 rounded-md bg-slate-800 border border-indigo-900/50">/ˈleɪz.ləkst/</code>) is a non-profit organization that aims to create amazing artworks, and shares to everyone.<br />
          We wanted to grow and express our creativity, improve skills, and to be known by everyone else. So, we just made Laselxt.<br />
          This is the very beginning of Laselxt. But, we're already working on a new project! Please look forward to see it.
        </p>
      </section>
    </div>
  );
}
