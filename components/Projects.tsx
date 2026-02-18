export default function Projects() {
  const projects = [
    {
      title: "AI-Powered ERP Analytics Dashboard",
      description:
        "Cohort-based analytics, revenue insights, and natural language search over ERP data.",
      image:
        "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/ERPNxt.png",
      technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "OpenAI"],
      liveUrl: "#",
      githubUrl: "#",
      projectType: "professional",
    },
    {
      title: "Smart Doc AI",
      description:
        "AI system that understands documents and answers user queries with contextual accuracy.",
      image:
        "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/SkillLens.png",
      technologies: ["Python", "LangChain", "Vector DB", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
      projectType: "public",
    },
    {
      title: "B2B ERP Automation Platform",
      description:
        "Order management, pricing logic, and automated reporting for enterprise workflows.",
      image:
        "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/ERP%20Main%20Page.png",
      technologies: ["React", "ERPNext", "AWS", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      projectType: "professional",
    },
    {
      title: "FromAir ERP - Production Operations Platform",
      description:
        "Custom ERP workflows on top of ERPNext to support end-to-end manufacturing and logistics operations.",
      image:
        "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/ERPNxt.png",
      technologies: [
        "ERPNext",
        "Frappe",
        "Python",
        "Workflow Design",
        "JavaScript",
        "Cloud Integration",
      ],
      liveUrl: "#",
      githubUrl: "#",
      projectType: "professional",
    },
    {
      title: "Internal Operations Platform (Zoho Creator)",
      description:
        "Custom internal platform for invoicing, inventory tracking, and reporting automation.",
      image:
        "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/ERP%20Main%20Page.png",
      technologies: [
        "Zoho Creator",
        "Workflow Automation",
        "Business Logic",
        "Reporting Systems",
      ],
      liveUrl: "#",
      githubUrl: "#",
      projectType: "professional",
    },
    {
      title: "SalesRadar - Sales Analytics Platform",
      description:
        "Sales analytics platform for monitoring trends, cohorts, and key metrics.",
      image:
        "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/Salas%20Radar%20Page.png",
      technologies: [
        "Node.js",
        "REST APIs",
        "Data Aggregation",
        "Analytics Dashboards",
        "Backend Architecture",
      ],
      liveUrl: "https://salesradar.onrender.com/dashboard",
      githubUrl: "#",
      projectType: "professional",
    },
    {
      title: "Skill Lens",
      description:
        "AI-powered resume analysis tool with personalized career insights.",
      image:
        "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/SkillLens.png",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "OpenAI"],
      liveUrl: "https://skilllens.vercel.app/",
      githubUrl: "https://github.com/0047Adarsh/skilllens",
      projectType: "public",
    },
    {
      title: "Uravu Labs - Landing Page",
      description:
        "Responsive marketing website with clean UI and performance optimization.",
      image:
        "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/Uravu%20Landing%20Page.png",
      technologies: [
        "Webflow",
        "JavaScript",
        "Spline",
        "SEO Optimization",
        "Performance Optimization",
      ],
      liveUrl: "https://www.uravulabs.com",
      githubUrl: "#",
      projectType: "public",
    },
    {
      title: "FromAir – Landing & E-commerce",
      description:
        "High-conversion landing page with integrated e-commerce experience.",
      image:
        "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/FromAir%20Main%20Page.png",
      technologies: [
        "Webflow",
        "JavaScript",
        "Payment Gateway Integration",
        "SEO Optimization",
      ],
      liveUrl: "https://www.fromair.club",
      githubUrl: "#",
      projectType: "public",
    },
    {
      title: "TVI Landing Page",
      description:
        "Responsive landing page built using Express, EJS, and Postgres.",
      image:
        "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/TVI%20Landing%20Page.png",
      technologies: ["HTML & CSS", "Express.js", "Postgres", "EJS"],
      liveUrl: "https://the-venture-insight.onrender.com/",
      githubUrl: "#",
      projectType: "public",
    },
    {
      title: "FromAir OMS",
      description:
        "Order management system integrated with ERPNext and WhatsApp chatbot.",
      image:
        "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/oms-app.png",
      technologies: ["Next.js", "Twilio WhatsApp API", "Postgres"],
      liveUrl: "#",
      githubUrl: "#",
      projectType: "professional",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-900 text-white py-20 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-indigo-400">
        Projects
      </h1>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
        A selection of projects focused on scalable systems, automation, and
        AI-driven solutions.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-gray-800/80 border border-white/10 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-indigo-500/10 transition"
          >
            <div className="h-44 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />
            </div>

            <div className="p-6 flex flex-col h-full">
              <h2 className="text-xl font-semibold mb-2 text-indigo-300">
                {project.title}
              </h2>

              <p className="text-gray-400 mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-4">
                {project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="text-sm text-indigo-400 hover:text-indigo-300"
                  >
                    Live →
                  </a>
                )}

                {project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Code →
                  </a>
                )}

                <span className="ml-auto text-xs uppercase text-indigo-500/70">
                  {project.projectType}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
