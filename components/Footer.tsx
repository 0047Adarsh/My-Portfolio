"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/10 text-gray-400 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">

        <div className="space-y-3">
          <h3 className="text-white font-semibold text-lg">
            Crafted by Adarsh A Devadiga
          </h3>
          <p className="text-sm max-w-md">
            Engineered with a focus on scalability, clarity, and production-grade
            architecture.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
              Built Using
            </p>
            <p className="text-sm">
              Next.js App Router · Tailwind CSS · Modern JavaScript
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/0047Adarsh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Github className="w-5" />
            </a>

            <a
              href="https://linkedin.com/in/YOUR_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Linkedin className="w-5" />
            </a>

            <a
              href="mailto:your@email.com"
              className="hover:text-white transition"
            >
              <Mail className="w-5" />
            </a>
          </div>
        </div>
      </div>


      <div className="mt-12 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Adarsh A Devadiga. All rights reserved.
      </div>
    </footer>
  );
}