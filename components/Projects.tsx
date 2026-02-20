"use client";

import { useState } from "react";
import { SquareArrowOutUpRight, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    // {
    //   title: "AI-Powered ERP Analytics Dashboard",
    //   description:
    //     "Cohort-based analytics, revenue insights, and natural language search over ERP data.",
    //   image:
    //     "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/ERPNxt.png",
    //   technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "OpenAI"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   projectType: "professional",
    //   category: "full-stack",
    // },
    // {
    //   title: "Smart Doc AI",
    //   description:
    //     "AI system that understands documents and answers user queries with contextual accuracy.",
    //   image:
    //     "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/SkillLens.png",
    //   technologies: ["Python", "LangChain", "Vector DB", "FastAPI"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   projectType: "public",
    //   category: "full-stack",
    // },
    // {
    //   title: "B2B ERP Automation Platform",
    //   description:
    //     "Order management, pricing logic, and automated reporting for enterprise workflows.",
    //   image:
    //     "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/ERP%20Main%20Page.png",
    //   technologies: ["React", "ERPNext", "AWS", "Docker"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   projectType: "professional",
    //   category: "full-stack",
    // },
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
      category: "full-stack",
    },
    {
      title: "Internal Operations Platform (Zoho Creator)",
      description:
        "Custom internal platform for invoicing, inventory tracking, and reporting automation.",
      image:
        "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/ERP%20Main%20Page.png",
      technologies: [
        "Zoho Creator",
         "Deluge",
        "Workflow Automation",
        "Business Logic",
        "Reporting Systems",
        
      ],
      liveUrl: "#",
      githubUrl: "#",
      projectType: "professional",
      category: "full-stack",
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
      category: "full-stack",
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
      category: "full-stack",
    },
    {
      title: "Uravu Labs - Marketing Platform",
      description:
        "High-performance marketing platform with clean UI, SEO optimization, and performance engineering.",
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
      category: "marketing",
    },
    {
      title: "FromAir – Landing & E-commerce Platform",
      description:
        "High-conversion marketing platform integrated with a full e-commerce experience.",
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
      category: "marketing",
    },
    {
      title: "TVI Marketing Interface",
      description:
        "Responsive marketing interface built using Express, EJS, and PostgreSQL.",
      image:
        "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/TVI%20Landing%20Page.png",
      technologies: ["HTML & CSS", "Express.js", "Postgres", "EJS"],
      liveUrl: "https://the-venture-insight.onrender.com/",
      githubUrl: "#",
      projectType: "public",
      category: "marketing",
    },
    {
      title: "FromAir OMS",
      description:
        "Order management system integrated with ERPNext and WhatsApp chatbot automation.",
      image:
        "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/oms-app.png",
      technologies: ["Next.js", "Twilio WhatsApp API", "Postgres"],
      liveUrl: "#",
      githubUrl: "#",
      projectType: "professional",
      category: "full-stack",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-indigo-400">
          Projects
        </h1>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          Engineered systems focused on scalability, automation, and AI-driven
          intelligence.
        </p>

        <div className="flex justify-center mb-14">
          <div className="flex rounded-full bg-black/40 backdrop-blur border border-white/10 p-1">
            {["all", "full-stack", "marketing"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-sm rounded-full transition duration-300
                  ${
                    activeCategory === category
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                      : "text-gray-400 hover:text-white"
                  }`}
              >
                {category === "all"
                  ? "All"
                  : category === "full-stack"
                  ? "Full Stack Systems"
                  : "Marketing Platforms"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900/60 backdrop-blur border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition duration-300"
            >
              <div className="h-48 w-full p-3">
                <div className="h-full w-full overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
              </div>

              <div className="p-4 flex flex-col h-full">
                <h2 className="text-xl font-semibold mb-3 text-indigo-300">
                  {project.title}
                </h2>

                <p className="text-gray-400 mb-5 line-clamp-3">
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

                <div className="flex gap-2">

                {project.projectType === "public" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xm text-indigo-400 hover:text-indigo-300 flex items-center gap-1 border border-indigo-400/30 px-2 py-1 rounded-2xl transition"
                  >
                    <SquareArrowOutUpRight className="w-4" />
                    Live
                  </a>
                )}

                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-indigo-400 hover:text-indigo-300 flex items-center gap-1 border border-indigo-400/30 px-2 py-1 rounded-2xl transition"
                    >
                      <Github className="w-4" />
                      Code
                    </a>
                  )}  

                </div>

                <div className="mt-auto flex items-center gap-4">

              

                

                  <span className="ml-auto text-xs uppercase text-indigo-500/70 tracking-wider">
                    {project.projectType}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}