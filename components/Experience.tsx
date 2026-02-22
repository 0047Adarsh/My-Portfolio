export default function Experience() {
  const experiences = [
    {
      company: "Uravu Labs Private Limited",
      role: "Full Stack & Cloud Deployment Engineer",
      duration: "Jan 2023 – Present",
      description:
        "Work as a Full Stack Engineer building and deploying scalable business applications and data systems across web, cloud, and IoT environments.",
      responsibilities: [
        "Develop full-stack applications using the MERN stack (React.js, Node.js, MongoDB, Express)",
        "Customize and extend ERP systems using Python, Frappe Framework, and MariaDB",
        "Build automation solutions including WhatsApp chatbot integrations",
        "Develop web scraping solutions for automated data collection and processing",
        "Configure IoT devices and establish data pipelines for real-time data ingestion",
        "Design and manage datasets, dashboards, and cloud-based data infrastructure on AWS",
        "Deploy, manage, and maintain production applications in cloud environments",
      ],
    },
    {
      company: "Uravu Labs Private Limited",
      role: "Tech Integration Intern",
      duration: "Sept 2022 – Dec 2022",
      description:
        "Worked on automation workflows, API integrations, and internal business tools.",
      responsibilities: [
        "Developed frontend components using JavaScript and React",
        "Assisted in ERP customization using Python and Frappe",
        "Integrated APIs between internal systems",
        "Supported cloud deployments and dashboards",
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20">
      
      <h1 className="text-4xl md:text-5xl font-semibold mb-16 text-center">
        My Experience
      </h1>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Timeline Line on LEFT */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-indigo-500/30"></div>

        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-16">

            {/* Dot */}
            <div className="absolute left-4 top-6 w-4 h-4 bg-indigo-500 rounded-full shadow-md"></div>

            {/* Card */}
            <div className="ml-16 w-[70%]">

              <div className="bg-gray-800/80 backdrop-blur border border-white/10 rounded-xl p-6 shadow-xl hover:shadow-indigo-500/20 transition duration-300">

                <h2 className="text-xl font-semibold text-indigo-400">
                  {exp.role}
                </h2>

                <p className="text-sm text-gray-400 mt-1">
                  {exp.company}
                </p>

                <p className="text-xs text-gray-500">
                  {exp.duration}
                </p>

                <p className="mt-4 text-gray-300">
                  {exp.description}
                </p>

                <p className="mt-4 text-indigo-400 font-medium">
                  Key Responsibilities:
                </p>

                <ul className="mt-2 list-disc list-inside text-gray-400 space-y-1 text-sm">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}