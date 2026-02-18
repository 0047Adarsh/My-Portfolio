export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-indigo-400">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            I’m <span className="text-white font-semibold">Adarsh A Devadiga</span>, 
            a Full Stack and Cloud Deployment Engineer with experience building 
            scalable ERP systems, analytics dashboards, and AI-powered platforms.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            At Uravu Labs, I work across frontend, backend, automation, and cloud 
            infrastructure — translating business workflows into reliable digital 
            systems that drive efficiency and insight.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I’m currently focused on building data-driven products, AI-powered 
            internal tools, and modern web platforms that solve real operational 
            problems.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-10">
            <div>
              <p className="text-3xl font-bold text-indigo-400">3+</p>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-indigo-400">15+</p>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-indigo-400">10+</p>
              <p className="text-gray-400 text-sm">Systems Automated</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="bg-gray-800/60 border border-white/10 rounded-2xl p-8 shadow-xl">
          <h3 className="text-xl font-semibold mb-4 text-white">
            Core Expertise
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>• Full Stack Development (React, Next.js, Node.js)</li>
            <li>• Cloud & DevOps (AWS, Docker, CI/CD)</li>
            <li>• ERP Systems (ERPNext, Zoho Creator)</li>
            <li>• Data & Analytics Dashboards</li>
            <li>• AI Integrations (OpenAI, LangChain)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
