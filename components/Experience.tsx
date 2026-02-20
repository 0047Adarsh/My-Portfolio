export default function Experience() {
  const experiences = [
    {
      company: "Uravu Labs Private Limited",
      role: "Full Stack & Cloud Deployment Engineer",
      duration: "Jan 2023 – Present",
      description:
        "Built ERP dashboards, automated reporting systems, and deployed scalable cloud-based applications using modern full-stack tools.",
      skills: ["React", "Node.js", "AWS", "Docker"],
    },
    {
      company: "Uravu Labs Private Limited",
      role: "Tech Integration Intern",
      duration: "Sept 2022 – Dec 2022",
      description:
        "Worked on automation workflows, API integrations, and frontend components for internal business tools.",
      skills: ["React", "Node.js", "AWS", "Docker"],
    },
  ];

  return (
    <section id="experience" className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Experience
      </h1>

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-indigo-500/30"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative mb-16 flex ${
              index % 2 === 0
                ? "md:flex-row"
                : "md:flex-row-reverse"
            }`}
          >
        
            <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full shadow-lg"></div>

        
            <div className="ml-12 md:ml-0 md:w-1/2 px-4">
              <div className="bg-gray-800/80 backdrop-blur border border-white/10 rounded-xl p-6 shadow-xl hover:shadow-indigo-500/20 transition">
                <h2 className="text-xl font-semibold text-indigo-400">
                  {exp.role}
                </h2>
                <p className="text-sm text-gray-400">{exp.company}</p>
                <p className="text-xs text-gray-500 mt-1">{exp.duration}</p>

                <p className="mt-4 text-gray-300">{exp.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
