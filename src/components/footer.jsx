export default function Header() {
  return (
    <footer className="font-sans bg-[rgb(1,_9,_36)] w-full flex flex-row border-t-indigo-900 border-t px-12 py-8 min-h-64 relative">
      <div className="absolute inset-0 bg-linear-to-b from-indigo-950/10 to-transparent"></div>
      <div>
        <h1 className="text-4xl font-medium my-3">
          Laselxt
        </h1>
        <p className="text-sm my-2 italic opacity-64">(FYI: Laselxt is a fiction organization. I just made this website for fun.)</p>
        <div>&copy; 2025 Laselxt</div>
      </div>
    </footer>
  )
}