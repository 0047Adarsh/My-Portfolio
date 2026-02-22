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
      title: "FromAir ERP",
      description:
        "Customized and deployed an ERPNext-based open-source ERP system to streamline internal operations across departments. Tailored core modules to match organizational workflows, improving efficiency, data accuracy, and process visibility. Extended backend functionality, implemented custom business logic, enhanced the UI, and successfully deployed the system for daily use by internal teams. @Uravu Labs Pvt Ltd",
      image:
        "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/ERPNxt.png",
      technologies: [
        "ERPNext",
        "Frappe Bench",
        "Python",
        "Workflow Design",
        "JavaScript",
        "Cloud Integration",
        "MariaDB",
      ],
      liveUrl: "#",
      githubUrl: "#",
      projectType: "professional",
      category: "full-stack",
    },
    {
      title: "Internal Operations Platform",
      description:
        "Developed a custom internal operations platform using Zoho Creator to streamline invoicing, inventory tracking, and operational reporting. Designed the business data model, implemented automated workflows, and built interactive dashboards to improve data collection, operational efficiency, and decision-making through real-time visualization.",
      image:
        "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/ERP%20Main%20Page.png",
      technologies: [
        "Zoho Creator",
         "Deluge",
         "JavaScript",
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
        "Built a full-stack data visualization platform for monitoring sales trends, cohort performance, and key business metrics. Designed cohort-based revenue and quantity analytics with forecasting capabilities to support data-driven decision-making. Developed customer-level analytics dashboards to extract actionable insights from transactional data. Implemented structured REST APIs and backend services to process and serve analytics-ready datasets.",
      image:
        "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/Salas%20Radar%20Page.png",
      technologies: [
        "ReactJS",
        "Node.js",
        "Express.js",
        "AWS Data Pipeline",
        "JavaScript",
        "REST APIs",
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
        "Developed a high-performance marketing landing page for Uravu Labs Pvt Ltd using Webflow, focused on clean UI, SEO optimization, and performance. Implemented interactive visuals and enhanced functionality with JavaScript to deliver an engaging, fast, and conversion-optimized user experience.",
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
        "Developed a high-conversion marketing and e-commerce platform for FromAir, combining a conversion-focused landing experience with a fully integrated online store. Built responsive UI, optimized performance, and streamlined the customer journey from product discovery to checkout to support sales and brand growth.",
      image:
        "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/FromAir%20Main%20Page.png",
      technologies: [
        "Webflow",
        "JavaScript",
        "Stripe Payment Gateway",
        "UI/UX",
        "SEO Optimization",
        "Performance Optimization"
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
        "Developed a custom Order Management System for FromAir using React.js and Node.js to streamline order processing and tracking. Integrated the system with ERPNext for centralized business data and automated customer communication through WhatsApp chatbot integration, improving operational efficiency and real-time order visibility.",
      image:
        "https://ik.imagekit.io/Adarsh0047/Portfolio%20Image%20Directory/oms-app.png",
      technologies: ["React.js","Node.js", "Twilio WhatsApp API", "RESTAPIs"],
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
                  ${
                    activeCategory === category.id
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