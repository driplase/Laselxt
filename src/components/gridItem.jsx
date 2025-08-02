import Image from "next/image";

export default function GridItem({ cover, coverAlt, title, children }) {
  return (
    <div className="p-3 relative rounded-3xl before:rounded-3xl before:content-[''] before:absolute before:-z-3 before:-inset-1 before:bg-conic before:from-sky-400 before:via-purple-500 before:to-sky-400 before:blur-xs before:opacity-25 border bg-slate-950/50 border-slate-200/30 ring ring-slate-300/18">
      <Image
        className="rounded-xl"
        src={cover}
        alt={coverAlt}
        width={512}
        height={288}
      />

      <h2 className="my-1 mt-4 text-2xl font-bold">{ title }</h2>
      <div className="my-1 text-gray-300 text-base">
        { children }
      </div>

    </div>
  )
}