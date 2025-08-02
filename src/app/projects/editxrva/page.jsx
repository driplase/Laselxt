export default function EditxrVA() {
  return (
    <div className="font-sans flex flex-col items-start relative text-center">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-600/75 to-transparent"></div>

      <section className="bg-linear-to-b from-blue-900/24 to-transparent px-8 sm:px-12 py-32 sm:py-40 min-[860px]:py-36 w-full ease-out duration-320 relative">

        <div className="whitespace-nowrap text-5xl/12 sm:text-6xl/20 font-bold my-3">
          Make a song while making a video.
        </div>
        
        <p className="text-base sm:text-lg mb-2 text-gray-200">
          This is a combination of video editor and audio editor.
          Now you don't need to buy another software for audio editing.
        </p>

      </section>

      <section className="bg-linear-to-b from-blue-900/12 to-transparent border-t border-t-blue-600/36 w-full p-6 sm:p-12">
        
        { /* put some showcases */ }

        <p className="text-base sm:text-lg mb-2">
          Laselxt (pronounced <code>/ˈleɪz.ləkst/</code>) is a non-profit organization that aims to create amazing artworks, and shares to everyone.<br />
          Our goal is to grow and express our creativity, improve skills, and to be known by everyone else.<br />
          But also, we're trying to help you express your creativity by creating tools.
        </p>
      </section>


    </div>
  );
}
