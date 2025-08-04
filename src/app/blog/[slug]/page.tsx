import contentList from '@/contents/list'
import Link from "next/link";

export default async function Post({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { default: Post, metadata } = await import(`@/contents/${slug}.mdx`)

  return (
    <div className="font-sans flex flex-col items-start relative text-center">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-600/75 to-transparent"></div>

      <div className="bg-linear-to-b from-blue-900/24 to-transparent w-full ease-out duration-320 relative grid justify-center">

        <section className='pt-20 pb-0'>
          <h1 className="whitespace-nowrap text-4xl md:text-5xl/16 lg:text-6xl/20 font-bold">
            { metadata.title }
          </h1>
          <p className="text-xs md:text-sm text-gray-400">
            { metadata.description }
          </p>
        </section>

        <hr
          className="border-none h-0.5 bg-linear-to-r from-transparent via-blue-500/64 to-transparent my-5"
        />

        <article className="markdown text-left text-pretty px-10 lg:w-200 max-w-full">
          <Post />
        </article>

      </div>

    </div>
  );
}

export function generateStaticParams() {
  return contentList
}

export const dynamicParams = false