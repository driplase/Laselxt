export default function SDACodeEditor() {
  return (
    <div className="font-sans flex flex-col items-start relative text-center">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-600/75 to-transparent"></div>

      <section className="bg-linear-to-b from-blue-900/24 to-transparent px-8 sm:px-12 py-32 sm:py-40 min-[860px]:py-36 w-full ease-out duration-320 relative">

        <div className="whitespace-nowrap text-5xl/12 sm:text-6xl/20 font-bold my-3">
          Make your coding times more fun.
        </div>
        
        <p className="text-base sm:text-lg mb-2 text-gray-200">
          Just a normal code editor, but we put so many animations in it.
          Now you don't feel coding is boring anymore.
        </p>

        { /* put some fake screenshot */ }

      </section>

      <section className="bg-linear-to-b from-blue-900/12 to-transparent border-t border-t-blue-600/36 w-full p-6 sm:p-12">
        <p className="text-base sm:text-lg mb-2">
          This is a Super Dynamically Animated Code Editor, a.k.a. SDA Code Editor.
        </p>
      </section>


    </div>
  );
}
