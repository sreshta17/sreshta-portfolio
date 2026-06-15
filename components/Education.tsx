export default function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Education
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Academic Background
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-start gap-6">
            <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl">
              🎓
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Master of Science in Computer Science
              </h3>
              <p className="text-blue-600 font-semibold mt-1">
                University of Central Missouri
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0121 13c0 5.523-4.477 10-10 10S1 18.523 1 13c0-.87.109-1.717.316-2.525L12 14z" />
                  </svg>
                  Warrensburg, MO
                </span>
              </div>
              <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                Graduate studies focused on computer science fundamentals, software engineering,
                algorithms, and applied computing — providing a strong theoretical and practical
                foundation for enterprise software and AI engineering.
              </p>
            </div>
          </div>

          {/* AI Focus Box */}
          <div className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4">AI & Cloud Engineering Highlights</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  stat: "25–30%",
                  label: "Faster dev turnaround",
                  desc: "Via Claude Code, Copilot & MCP workflows",
                },
                {
                  stat: "30%",
                  label: "Token usage cut",
                  desc: "Through prompt standardization & context optimization",
                },
                {
                  stat: "40%",
                  label: "Setup effort reduced",
                  desc: "With reusable AI skills for code review & debugging",
                },
              ].map((item) => (
                <div key={item.stat} className="text-center">
                  <div className="text-3xl font-extrabold text-blue-600">{item.stat}</div>
                  <div className="text-sm font-semibold text-gray-800 mt-1">{item.label}</div>
                  <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
