export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 pt-32 grid md:grid-cols-2 gap-12">
        
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi <span className="text-indigo-400">I'm Adarsh A Devadiga</span>  
          </h1>

          <p className="mt-6 text-gray-400 text-lg">
            From ERP dashboards to smart data search engines — I design and
            build scalable full-stack systems that automate business.
          </p>

          <div className="mt-8 flex gap-4">
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
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full"></div>
          <div className="relative bg-gray-900 border border-white/10 rounded-xl p-6 shadow-xl">
            <p className="text-sm text-gray-400">System Snapshot</p>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <span>ERP Orders</span>
                <span className="text-indigo-400">+128%</span>
              </div>
              <div className="flex justify-between">
                <span>AI Queries</span>
                <span className="text-indigo-400">2,430</span>
              </div>
              <div className="flex justify-between">
                <span>Automation Jobs</span>
                <span className="text-indigo-400">312</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
