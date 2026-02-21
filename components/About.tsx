"use client";

import { useState } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiDocker,
  SiPostgresql,
  SiMysql,
  SiVercel,
  SiZoho,
  SiFrappe 

} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import {  FaWebflow } from "react-icons/fa6";

export default function About() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const skills = {
    Frontend: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React.js", icon: <SiReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
    ],
    Backend: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "RestAPIs", icon: <SiExpress /> }
    ],
    DevOps: [
      { name: "Docker", icon: <SiDocker /> },
    ],
    Database: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
    Cloud: [
      { name: "AWS", icon: <FaAws /> },
      { name: "Vercel", icon: <SiVercel /> },
    ],
    Opensource: [
      { name: "Frappe", icon: <SiFrappe  /> },
    ],
     LowCode: [
      { name: "Zoho Creator", icon: <SiZoho  /> },
       { name: "Webflow", icon: <FaWebflow /> },
    ],
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

 
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-indigo-400">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            I’m <span className="text-white font-semibold">Adarsh A Devadiga</span>,
            a Full Stack and Cloud Deployment Engineer building scalable ERP systems,
            analytics dashboards, and AI-powered platforms.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            I work across frontend, backend, automation, and cloud infrastructure —
            translating business workflows into reliable digital systems.
          </p>

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

 
        <div className="bg-gray-800/60 border border-white/10 rounded-2xl p-8 shadow-xl">

          <h3 className="text-2xl font-semibold mb-8 text-white">
            Core Expertise
          </h3>


          <div className="flex flex-wrap gap-4 mb-8">
            {Object.keys(skills).map((category) => (
              <button
                key={category}
                onMouseEnter={() => setActiveCategory(category)}
                onMouseLeave={() => setActiveCategory(null)}
                className={`px-5 py-2 rounded-full text-sm border transition-all duration-300
                ${
                  activeCategory === category
                    ? "bg-indigo-500 text-white border-indigo-400"
                    : "bg-gray-900 border-white/10 text-gray-400 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

  
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, tools]) =>
              tools.map((tool) => (
                <div
                  key={tool.name}
                  className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-300
                  ${
                    activeCategory === category
                      ? "bg-indigo-500/10 border-indigo-400 scale-105 opacity-100"
                      : "bg-gray-900/40 border-white/10 opacity-40"
                  }`}
                >
                  <span className="text-xl">{tool.icon}</span>
                  <span className="text-sm font-medium">{tool.name}</span>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </section>
  );
}