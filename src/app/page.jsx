import Image from "next/image";
import Link from "next/link";
import { IconVolume } from '@tabler/icons-react';
import GridItem from "@/components/gridItem";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-start relative">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-600 to-transparent"></div>

      <section className="bg-linear-to-b from-blue-900/36 to-transparent px-8 sm:px-12 py-[16dvh] sm:py-40 min-[860px]:py-36 lg:py-50 w-full ease-out duration-320 relative">

        <div className="text-[5.4dvw] whitespace-nowrap sm:text-4xl/12 min-[860px]:text-5xl/15 lg:text-6xl/20 font-bold my-3">
          Amaze peoples,<br />
          by doing something <span
            className="bg-(image:--text-grad) bg-clip-text text-transparent relative z-3 font-black before:blur-sm before:content-['interesting'] before:absolute before:-z-1 before:bg-clip-text before:text-transparent before:bg-(image:--text-grad) before:brightness-125 before:opacity-64 before:font-black"
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

        <Link className="btn-normal before:content-['Learn_more']" href="/about">
          Learn more
        </Link>
      </section>

      <section className="bg-linear-to-b from-blue-900/12 to-transparent border-t border-t-blue-600/36 w-full p-6 sm:p-12">
        <p className="text-lg">
          Laselxt (pronounced <code className="whitespace-nowrap">/ˈleɪz.ləkst/</code>) is a non-profit organization that aims to create amazing artworks, and shares to everyone.<br />
          We wanted to grow and express our creativity, improve skills, and to be known by everyone else. So, we made Laselxt.<br />
          This is the very beginning of Laselxt yet. But, we're already working on a new project! Please look forward to see it.
        </p>
      </section>

      <section className="bg-linear-to-b from-blue-900/12 to-transparent border-t border-t-blue-600/36 w-full p-6 sm:p-12">

        <h1 className="text-5xl font-bold">What we're working on</h1>
        <p className="my-2 text-gray-300 text-lg">Something we're making or we made.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-center my-3">

          <GridItem
            className="max-w-105"
            cover="https://lase.dev/assets/lase_dev_header.webp"
            coverAlt="lase.dev header image"
            title="lase.dev Website"
          >
            This is the first thing we've worked on.
          </GridItem>

          <GridItem
            className="max-w-105"
            cover="https://lase.dev/assets/lase_dev_header.webp"
            coverAlt=""
            title="EditxrVA"
          >
            An Open-Source Video and Audio Editor.
          </GridItem>

          <GridItem
            className="max-w-105"
            cover="https://lase.dev/assets/lase_dev_header.webp"
            coverAlt=""
            title="SDA Code Editor"
          >
            Super Dynamically Animated Code Editor.<br />
            Make your coding times more fun.
          </GridItem>

        </div>

      </section>
    </div>
  );
}
