import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    title: "Gen AI Engineering",
    desc: "Claude Code, GitHub Copilot, MCP, Amazon Bedrock, NLP/SpaCy, prompt optimization — building AI-enabled developer workflows that cut setup by 40% and token usage by 30%.",
  },
  {
    title: "Full Stack Expertise",
    desc: "5+ years shipping production apps with React, Angular, Vue, Java, Spring Boot, .NET/C#, and Node.js across financial, government, and fintech domains.",
  },
  {
    title: "Cloud & Infrastructure",
    desc: "AWS (Lambda, ECS, S3, CloudFormation) and Azure (App Services, Functions, AKS). Automated backend workflows, CI/CD pipelines, and secure cloud architectures.",
  },
  {
    title: "Enterprise Delivery",
    desc: "Production systems for Cetera Financial, Commonwealth of Pennsylvania, TD Securities, and TCS — including async security workflows, RBAC, and high-volume financial data platforms.",
  },
];

const coreSkills = [
  "React / Angular / Vue",
  "Java · Spring Boot",
  ".NET / C#",
  "Node.js · Python",
  "AWS · Azure",
  "Amazon Bedrock",
  "Claude · MCP",
  "PostgreSQL · MongoDB",
];

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row md:h-[calc(100vh-52px)] md:overflow-hidden">

      {/* ── Sidebar ───────────────────────────────────── */}
      <aside className="w-full md:w-[272px] md:shrink-0 border-b md:border-b-0 md:border-r border-gray-100 md:sticky md:top-[52px] md:h-[calc(100vh-52px)] md:overflow-y-auto flex flex-col items-center px-6 pt-8 pb-8">

        <div className="relative w-[110px] h-[110px] md:w-[128px] md:h-[128px] rounded-full overflow-hidden ring-4 ring-blue-50 mb-4 shrink-0">
          <Image src="/headshot.png" alt="Sai Sreshta Vure" fill className="object-cover object-top" priority />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 rounded-full mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[11px] font-semibold text-blue-600">Open to opportunities</span>
        </div>

        <h1 className="text-base font-bold text-gray-900 text-center mb-1">Sai Sreshta Vure</h1>
        <p className="text-xs text-gray-500 text-center mb-3">Full Stack Developer &amp; Gen AI Engineer</p>
        <p className="text-xs text-gray-400 text-center leading-relaxed mb-5 px-1">
          5+ years building enterprise apps &amp; AI workflows across React, Java, AWS &amp; Bedrock.
        </p>

        {/* Core expertise — hidden on mobile to keep sidebar compact */}
        <div className="hidden md:block w-full mb-5">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 text-center mb-3">Core Expertise</p>
          <div className="grid grid-cols-2 gap-1.5">
            {coreSkills.map((s) => (
              <span key={s} className="text-[10px] text-gray-600 bg-gray-50 border border-gray-100 rounded px-2 py-1.5 text-center leading-tight">
                {s}
              </span>
            ))}
          </div>
        </div>

        <p className="hidden md:block text-[11px] text-gray-400 mb-5 text-center">Building · AI Research · Open Source</p>

        <a
          href="mailto:sreshta.career@gmail.com"
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition-colors mb-2"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Get in Touch
        </a>
        <p className="text-[10px] text-gray-400 mb-5">sreshta.career@gmail.com</p>

        <div className="w-full">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 text-center mb-3">Find Me On</p>
          <div className="flex gap-2">
            <a href="https://github.com/sreshta17" target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center text-[11px] font-medium text-gray-500 hover:text-gray-900 bg-gray-50 border border-gray-100 hover:border-gray-200 px-3 py-1.5 rounded transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/sreshta-v-382a1b12a" target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center text-[11px] font-medium text-gray-500 hover:text-blue-600 bg-gray-50 border border-gray-100 hover:border-blue-200 px-3 py-1.5 rounded transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </aside>

      {/* ── Main content ──────────────────────────────── */}
      <main className="flex-1 px-5 md:px-10 py-8 md:py-10 overflow-y-auto">

        {/* Intro */}
        <section className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Hello, I&apos;m Sai Sreshta Vure
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            I&apos;m a Senior Full Stack Developer and Gen AI Engineer with 5+ years of experience
            delivering production-grade enterprise applications. Based in King of Prussia, PA, I&apos;ve
            worked across financial services, government, and fintech — building scalable platforms
            with React, Angular, Java, Spring Boot, .NET, AWS, and Azure.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-5">
            Currently at Cetera Financial Group, I lead AI adoption efforts using Claude Code, MCP
            integrations, and Amazon Bedrock — building secure, reusable AI workflows that meaningfully
            reduce developer overhead and improve delivery speed.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="/experience" className="px-4 py-2 text-xs font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              View Experience →
            </Link>
            <Link href="/skills" className="px-4 py-2 text-xs font-semibold bg-gray-50 text-gray-700 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
              Browse Skills
            </Link>
          </div>
        </section>

        {/* What I do */}
        <section className="mb-8 md:mb-10">
          <h3 className="text-sm font-bold tracking-[0.15em] uppercase text-gray-400 mb-5">What I Do</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div key={h.title} className="border border-gray-100 rounded-xl p-4 md:p-5 hover:border-blue-100 hover:shadow-sm transition-all">
                <h4 className="text-sm font-bold text-gray-900 mb-2">{h.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick stats */}
        <section>
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {[
              { value: "5+", label: "Years of Experience" },
              { value: "5", label: "Companies" },
              { value: "10+", label: "Tech Stacks" },
            ].map(({ value, label }) => (
              <div key={label} className="border border-gray-100 rounded-xl p-4 md:p-5 text-center">
                <p className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">{value}</p>
                <p className="text-[10px] md:text-xs text-gray-400 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
