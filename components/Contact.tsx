const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-300 mt-6">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-12">
        
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <form
              action="https://formspree.io/f/xbjnqvpp"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label className="block text-white font-semibold mb-2">
                  Name
                </label>
                <input
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Project Details
                </label>
                <textarea
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder:text-slate-400 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Tell me about your project..."
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Estimated Budget (helps align expectations)
                </label>
                <input
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Amount"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
