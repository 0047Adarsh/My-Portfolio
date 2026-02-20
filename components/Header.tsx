"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Linkedin, Github } from "lucide-react";



const nav = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "services", title: "Services" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "testimonials", title: "Testimonials" },
  { id: "contact", title: "Contact" },
];

export default function Header() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = nav.map((item) =>
      document.getElementById(item.id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="relative flex items-center gap-4">
        
        <div className="absolute -inset-1 rounded-full bg-white/10 blur-xl" />

        <nav className="relative flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/15 px-3 py-2 shadow-2xl text-white">
          {nav.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActive(item.id)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300
              ${
                active === item.id
                  ? "bg-white/10 text-white"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/adarsh-a-devadiga"
            target="_blank"
            className="bg-black/40 backdrop-blur-xl  px-3 py-3 text-sm text-gray-300 hover:text-white transition rounded-full border border-white/15"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/0047Adarsh"
            target="_blank"
            className=" bg-black/40 backdrop-blur-xl  px-3 py-3 text-sm text-gray-300 hover:text-white transition rounded-full border border-white/15"
          >
            <Github />
          </a>
      
          
        </div>
      </div>
    </header>
  );
}
