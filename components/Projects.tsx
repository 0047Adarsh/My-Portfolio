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
      title: "FromAir ERP – ERPNext",
      description:
        "Customized and deployed ERPNext as the internal ERP for FromAir, tailoring core modules to departmental workflows. Extended the backend with custom business logic and UI enhancements, improving data accuracy and process visibility for daily operations.",
      image:
        "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/ERPNxt.png",
      technologies: [
        "ERPNext",
        "Frappe",
        "Python",
        "JavaScript",
        "MariaDB",
      ],
      liveUrl: "#",
      githubUrl: "#",
      projectType: "professional",
      category: "full-stack",
    },
    {
      title: "FromAir ERP – Zoho Creator",
      description:
        "Built a custom ERP for FromAir on Zoho Creator covering invoicing, inventory tracking, and operational reporting. Designed the data model, automated workflows, and built real-time dashboards to support faster decision-making.",
      image:
        "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/ERP%20Main%20Page.png",
      technologies: [
        "Zoho Creator",
        "Deluge",
        "JavaScript",
      ],
      liveUrl: "#",
      githubUrl: "#",
      projectType: "professional",
      category: "full-stack",
    },
    {
      title: "SalesRadar – Sales Analytics Platform",
      description:
        "Full-stack analytics platform that turns ERPNext transaction data, synced via AWS Data Pipeline, into sales trend, cohort, and customer-level insights. Includes cohort-based revenue and quantity analysis with forecasting, served through REST APIs.",
      image:
        "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/Salas%20Radar%20Page.png",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "ERPNext",
        "AWS Data Pipeline",
        "REST APIs",
      ],
      liveUrl: "https://salesradar.onrender.com/dashboard",
      githubUrl: "#",
      projectType: "professional",
      category: "full-stack",
    },
    {
      title: "Uravu Labs – Company Website",
      description:
        "Designed and built the marketing website for Uravu Labs using a combination of Webflow and Next.js, with custom JavaScript for interactivity. Focused on clean UI, fast load times, and strong SEO.",
      image:
        "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/Uravulabs.png",
      technologies: [
        "Webflow",
        "Next.js",
        "JavaScript",
        "SEO",
      ],
      liveUrl: "https://www.uravulabs.com",
      githubUrl: "#",
      projectType: "public",
      category: "marketing",
    },
    {
      title: "Uravu Data Center Configurator",
      description:
        "Web application for Uravu Labs that estimates how much water a data center can generate from its waste heat using Uravu's water-generation machines, helping prospective clients evaluate deployment potential.",
      image:
        "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/Configurator%20App.png",
      technologies: [
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "Python",
      ],
      liveUrl: "https://www.uravulabs.com/app",
      githubUrl: "#",
      projectType: "public",
      category: "full-stack",
    },
    {
      title: "Hylif – Landing Page",
      description:
        "SEO-focused brand website for Hylif, a Bengaluru-based company producing premium drinking water from air. Showcases their water-from-air technology and product range, with an integrated CMS for managing content without code changes.",
      image:
        "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/Hylif.png",
      technologies: [
        "Next.js",
        "React.js",
        "Node.js",
        "Tailwind CSS",
        "CMS",
        "SEO",
      ],
      liveUrl: "https://hylif.co.in/",
      githubUrl: "#",
      projectType: "public",
      category: "marketing",
    },

    {
      title: "Ceerah Manufacturing – Company Website",
      description:
        "Company website for Ceerah Manufacturer, a Bangalore-based industrial fastener manufacturer. Showcases their staples, hog rings, springs, and tools with a product catalogue, dealership information, and channels for customer enquiries.",
      image:
        "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/Ceerah.png",
      technologies: [
        "Next.js",
        "React.js",
        "Node.js",
        "SEO",
      ],
      liveUrl: "https://ceerahmanufacturer.com/",
      githubUrl: "#",
      projectType: "public",
      category: "marketing",
    },
    {
      title: "FromAir – Landing & E-commerce Platform",
      description:
        "Marketing website and online store for FromAir, combining a conversion-focused landing experience with integrated checkout. Built a responsive UI and streamlined the journey from product discovery to payment.",
      image:
        "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/FromAir%20Main%20Page.png",
      technologies: [
        "Webflow",
        "JavaScript",
        "Stripe",
        "SEO",
      ],
      liveUrl: "https://www.fromair.club",
      githubUrl: "#",
      projectType: "public",
      category: "marketing",
    },

    {
      title: "FromAir OMS – Order Management System",
      description:
        "Custom order management system for FromAir that streamlines order processing and tracking. Integrated with ERPNext for centralized data and a WhatsApp chatbot for automated customer updates, giving real-time order visibility.",
      image:
        "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/oms-app.png",
      technologies: ["React.js", "Node.js", "ERPNext", "Twilio WhatsApp API", "REST APIs"],
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

  const categories = [
    { id: "all", label: "All" },
    { id: "full-stack", label: "Full Stack Systems" },
    { id: "marketing", label: "Marketing Platforms" },
  ];

  //   return (
  //     <section
  //       id="projects"
  //       className="min-h-screen bg-gray-950 text-white py-24 px-6"
  //     >
  //       <div className="max-w-7xl mx-auto">
  //         <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-indigo-400">
  //           Projects
  //         </h1>

  //         <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
  //           Engineered systems focused on scalability, automation, and AI-driven
  //           intelligence.
  //         </p>

  //         <div className="flex justify-center mb-14">
  //           <div className="flex rounded-full bg-black/40 backdrop-blur border border-white/10 p-1">
  //             {["all", "full-stack", "marketing"].map((category) => (
  //               <button
  //                 key={category}
  //                 onClick={() => setActiveCategory(category)}
  //                 className={`px-6 py-2 text-sm rounded-full transition duration-300
  //                   ${
  //                     activeCategory === category
  //                       ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
  //                       : "text-gray-400 hover:text-white"
  //                   }`}
  //               >
  //                 {category === "all"
  //                   ? "All"
  //                   : category === "full-stack"
  //                   ? "Full Stack Systems"
  //                   : "Marketing Platforms"}
  //               </button>
  //             ))}
  //           </div>
  //         </div>

  //         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 ml-20 mr-20">
  //           {filteredProjects.map((project, index) => (
  //             <div
  //               key={index}
  //               className="group bg-gray-900/60 backdrop-blur border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition duration-300"
  //             >
  //               <div className="h-48 w-full p-3">
  //                 <div className="h-full w-full overflow-hidden rounded-xl">
  //                   <img
  //                     src={project.image}
  //                     alt={project.title}
  //                     className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
  //                   />
  //                 </div>
  //               </div>

  //               <div className="p-4 flex flex-col h-full">
  //                 <h2 className="text-xl font-semibold mb-3 text-white-800">
  //                   {project.title}
  //                 </h2>

  //                 <p className="text-gray-400 mb-5">
  //                   {project.description}
  //                 </p>

  //                 <div className="flex flex-wrap gap-2 mb-6">
  //                   {project.technologies.map((tech, i) => (
  //                     <span
  //                       key={i}
  //                       className="px-3 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30"
  //                     >
  //                       {tech}
  //                     </span>
  //                   ))}
  //                 </div>






  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </section>
  //   );
  // }

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
          Engineered systems focused on scalability, automation, and operational intelligence.
        </p>

        <div className="flex justify-center mb-14">
          <div className="flex rounded-full bg-black/40 backdrop-blur border border-white/10 p-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 text-sm rounded-full transition duration-300
                  ${activeCategory === category.id
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                    : "text-gray-400 hover:text-white"
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>


        <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col bg-gray-900/60 backdrop-blur border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition duration-300"
            >
              <div className="w-full p-4">
                <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-3">
                  {project.title}
                </h2>

                <p className="text-gray-400 mb-5">
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

                <div className="mt-auto flex flex-wrap items-center gap-3">
                  {project.projectType === "public" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-indigo-400 hover:text-indigo-300 flex items-center gap-1 border border-indigo-400/30 px-3 py-1.5 rounded-xl transition"
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
                      className="text-sm text-indigo-400 hover:text-indigo-300 flex items-center gap-1 border border-indigo-400/30 px-3 py-1.5 rounded-xl transition"
                    >
                      <Github className="w-4" />
                      Code
                    </a>
                  )}

                  {project.projectType === "professional" && (
                    <span className="ml-auto text-xs px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-300 border border-yellow-500/30">
                      Private Project
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}