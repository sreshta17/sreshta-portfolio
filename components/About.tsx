const highlights = [
  {
    icon: "🤖",
    title: "Gen AI Engineering",
    desc: "Built Claude Code, GitHub Copilot, and MCP workflows improving dev turnaround by 25–30%. Cut token usage by 30% through prompt optimization.",
  },
  {
    icon: "⚡",
    title: "Full Stack Expertise",
    desc: "5+ years shipping production apps with React, Angular, Vue, Java, Spring Boot, .NET/C#, and Node.js across financial, government, and fintech domains.",
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    desc: "Hands-on with AWS (Lambda, ECS, S3, CloudFormation) and Azure (App Services, Functions, AKS). Automated backend workflows and CI/CD pipelines.",
  },
  {
    icon: "🔒",
    title: "Enterprise Grade",
    desc: "Delivered secure, scalable systems for Cetera Financial, Commonwealth of Pennsylvania, and TD Securities — including async security workflows and RBAC.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Building for the AI era
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I&apos;m an AI-focused Full Stack Engineer based in King of Prussia, PA with 5+ years of
              experience building production enterprise applications. I specialize in bridging
              modern AI tooling with robust backend and frontend engineering.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              My recent work at Cetera Financial Group has centered on establishing Claude Code,
              GitHub Copilot, and MCP infrastructure — evaluating Amazon Bedrock for secure
              enterprise LLM adoption, and building reusable AI skills that reduce developer setup
              effort by 40%.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              I bring a strong foundation in distributed systems, RESTful APIs, microservices,
              and cloud automation across AWS and Azure, paired with a growing focus on AI-enabled
              workflows and NLP-driven document digitization.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Facts</h3>
            <ul className="space-y-4">
              {[
                ["📍", "Location", "King of Prussia, PA"],
                ["💼", "Experience", "5+ Years Full Stack & AI"],
                ["🎓", "Education", "MS Computer Science, UCM"],
                ["🏢", "Currently", "Cetera Financial Group"],
                ["🔍", "Focus", "Gen AI, Cloud, Full Stack"],
                ["📧", "Email", "sreshta.career@gmail.com"],
              ].map(([icon, label, value]) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="text-xl">{icon}</span>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      {label}
                    </span>
                    <p className="text-gray-800 font-medium text-sm mt-0.5">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-4">{h.icon}</div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{h.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
