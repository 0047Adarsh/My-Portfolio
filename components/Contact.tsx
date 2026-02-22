"use client";

import { useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section
      id="contact"
      className="py-28 px-6 bg-gradient-to-b from-black via-gray-950 to-black"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let’s Build Something Solid
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-6" />

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Whether it's a freelance collaboration or a full-time opportunity,
            I focus on building systems that scale and last.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-10">

            {/* Positioning */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Why Work With Me
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I design and build production-ready applications with a strong
                emphasis on structure, scalability, and long-term maintainability.
                Clean architecture and clear communication drive every project.
              </p>
            </div>

            {/* Strengths */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-indigo-500"></span>
                <p className="text-gray-300">
                  Scalable, maintainable architecture
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-indigo-500"></span>
                <p className="text-gray-300">
                  Business-aware engineering decisions
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-indigo-500"></span>
                <p className="text-gray-300">
                  Clear timelines and structured execution
                </p>
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <p className="text-sm text-gray-400 mb-2">Availability</p>
              <p className="text-white font-medium">
                Currently open to freelance projects and full-time roles.
              </p>
            </div>

            {/* Direct Contact
            <div className="space-y-4">
              <p className="text-gray-400 text-sm uppercase tracking-wider">
                Or reach me directly
              </p>

              <div className="flex items-center gap-5 text-gray-400">
                <a
                  href="mailto:your@email.com"
                  className="hover:text-white transition"
                >
                  <Mail />
                </a>

                <a
                  href="https://linkedin.com/in/YOUR_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  <Linkedin />
                </a>

                <a
                  href="https://github.com/0047Adarsh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  <Github />
                </a>
              </div>
            </div> */}
          </div>

          {/* RIGHT SIDE — FORM */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl">
            <form
              action="https://formspree.io/f/mlgwpkyg"
              method="POST"
              onSubmit={() => setIsSubmitting(true)}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    placeholder="Full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details
                </label>
                <textarea
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder:text-gray-500 min-h-[150px] focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  placeholder="Tell me about your project, timeline, and goals..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              <p className="text-xs text-gray-500 text-center">
                No spam. Your information stays private.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;