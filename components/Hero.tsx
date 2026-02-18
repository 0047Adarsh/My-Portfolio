import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 pt-32 grid gap-12">

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
         <div className="w-32 h-32 rounded-full border-4 border-indigo-500 overflow-hidden flex items-center justify-center ">
            <Image
                src="https://ik.imagekit.io/Adarsh0047/Personal/Adarsh.jpg.jpeg"
                alt="Adarsh A Devadiga"
                width={128}
                height={128}
                className="object-cover "
                priority
            />
            </div>


          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm<br/><span className="text-indigo-400">Adarsh A Devadiga</span>
          </h1>
        </div>

        {/* <p className="mt-6 text-gray-400 text-lg text-center md:text-left">
          From ERP dashboards to smart data search engines — I design and
          build scalable full-stack systems that automate business.
        </p>

        <div className="mt-8 flex justify-center md:justify-start gap-4">
          <a
            href="#projects"
            className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-md text-sm font-medium"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-white/20 px-6 py-3 rounded-md text-sm text-gray-300 hover:text-white"
          >
            Contact Me
          </a>
        </div> */}

      </div>
    </section>
  );
}
