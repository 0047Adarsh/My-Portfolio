import Image from "next/image";
import { ArrowDownToLine, CircleUserRound, SquareArrowOutUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 pt-32 grid gap-12">

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
         <div className="w-32 h-32 rounded-full border-4 border-indigo-500 overflow-hidden flex items-center justify-center ">
            <Image
                src="https://ik.imagekit.io/Adarsh0047/Personal/Adarsh.jpg.jpeg"
                alt="Adarsh A Devadiga"
                width={128}
                height={128}
                className="object-cover"
                priority
                draggable="false"
            />
            </div>


          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm<br/><span className="text-indigo-400">Adarsh A Devadiga</span>
          </h1>
        </div>

        <div>
          <h1 className="text-4wxl md:text-4xl text-gray-400 text-center font-bold mb-6">Full Stack and Cloud Deployment Engineer</h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl text-left">
            I build software systems that businesses depend on.
            From operational platforms to intelligent automation, I design and deliver production-grade solutions end to end.
          </p>
        </div>


      <div className="flex items-center gap-3">
        <a
            className="bg-black/40 backdrop-blur-xl px-4 py-3 text-xm text-gray-300 hover:text-white transition rounded-full border border-white/15 flex w-max items-center gap-2"
            href="https://drive.google.com/uc?export=download&id=1qzpzhMUIA6CRm21RPBU_OSSO4AZeT7JP"
            download
          >
            <ArrowDownToLine className="w-4"/>
            Download CV
          </a>

           <a
            className="bg-black/40 backdrop-blur-xl px-4 py-3 text-xm text-gray-300 hover:text-white transition rounded-full border border-white/15 flex w-max items-center gap-2"
            href="#projects"
          >
            <SquareArrowOutUpRight className="w-4"/>
            View Projects
          </a>

          <a
            className="bg-black/40 backdrop-blur-xl px-4 py-3 text-xm text-gray-300 hover:text-white transition rounded-full border border-white/15 flex w-max items-center gap-2"
            href="#contact"
          >
            <CircleUserRound className="w-5"/>
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
