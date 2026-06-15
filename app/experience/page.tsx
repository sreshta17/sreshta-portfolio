import Image from "next/image";

const experiences = [
  {
    company: "Cetera Financial Group",
    location: "CA, Remote",
    role: "Senior Developer / AI Engineer",
    period: "Aug 2025 – Present",
    current: true,
    summary:
      "AdviceWorks — AI-enabled wealth platform for digital docs, account opening, annuities, trading, and pay automation.",
    highlights: [
      "Built production features with Java Spring Boot, Angular/TypeScript, REST APIs, PostgreSQL, and AWS.",
      "Established Claude Code, GitHub Copilot, and MCP infrastructure; resolved access, configuration, context, and workflow issues.",
      "Built reusable AI skills for code review, debugging, API guidance, cloud support, and docs — cutting setup effort by 40%.",
      "Optimized AI workflows by removing redundant context and standardizing instructions, reducing token usage by 30% and latency by 20–25%.",
      "Evaluated Amazon Bedrock and enterprise LLM workflows for secure model access, latency, cost, and production readiness.",
      "Integrated Docupace, Firelight, and Schwab REST APIs for UI prepopulation, PDF mapping, and advisor automation.",
      "Built AWS automation with Lambda, S3, IAM, ECS/Fargate, and CloudFormation for secure file handling.",
      "Used New Relic and Elasticsearch to monitor service health and improve observability across production workflows.",
    ],
    tags: ["Java", "Spring Boot", "Angular", "TypeScript", "PostgreSQL", "AWS", "Claude Code", "MCP", "Amazon Bedrock"],
  },
  {
    company: "Commonwealth of Pennsylvania",
    location: "PA",
    role: "Software Developer",
    period: "Aug 2024 – Aug 2025",
    current: false,
    summary:
      "Enterprise Energy, Sustainability, and Judicial Case Management platforms for secure statewide reporting and government workflows.",
    highlights: [
      "Designed enterprise web apps using .NET/C#, Java, Spring Boot, Vue, SQL Server, and Azure for state systems.",
      "Built backend services, APIs, dashboards, and reporting modules for secure transactional workflows across departments.",
      "Optimized SQL stored procedures and data-access components to improve performance and reporting speed.",
      "Built Azure workflows with App Services, Azure Functions, API Management, Blob Storage, and Azure SQL.",
      "Implemented asynchronous TEWS and RBMFA security workflows to protect sensitive user and case-management data.",
    ],
    tags: [".NET", "C#", "Java", "Vue.js", "SQL Server", "Azure", "Spring Boot"],
  },
  {
    company: "TD Securities",
    location: "New York",
    role: "Software Engineer",
    period: "Oct 2023 – Aug 2024",
    current: false,
    summary:
      "AI-driven banking and lending workflows around Finastra Loan IQ, document digitization, invoice processing, and risk calculations.",
    highlights: [
      "Built AI document digitization with Spring Boot, React, TypeScript, Python, and SpaCy NLP — reducing extraction errors by 15%.",
      "Designed responsive UIs with React, TypeScript, Bootstrap, AG Grid, and Highcharts for high-volume financial data.",
      "Improved performance by optimizing component rendering and applying React.memo, useMemo, and useCallback.",
      "Built reusable React components for loading states, errors, authentication, charts, and grids.",
      "Built AWS and Airflow data workflows, improving data handling throughput by 25%.",
      "Maintained 90–95% test coverage with JUnit, Selenium, and SonarQube, reducing defects by 40%.",
      "Used Datadog for service health, log analysis, and incident detection across critical applications.",
    ],
    tags: ["React", "TypeScript", "Spring Boot", "Python", "NLP/SpaCy", "AWS", "Datadog", "Airflow"],
  },
  {
    company: "Breezend Technologies LLC",
    location: "VA",
    role: "Web Application Developer",
    period: "Aug 2023 – Oct 2023",
    current: false,
    summary: "Enterprise web apps for commercial shopping operations and loan transaction automation.",
    highlights: [
      "Developed enterprise web apps using React.js, TypeScript, Node.js, and REST APIs.",
      "Built reusable React components with hooks, Context API, and memoization — improving UI maintainability.",
      "Integrated frontend with backend REST APIs to automate loan transaction workflows, reducing manual processing by 30%.",
    ],
    tags: ["React", "TypeScript", "Node.js", "REST APIs", "Context API"],
  },
  {
    company: "Tata Consultancy Services",
    location: "India",
    role: "Software Engineer",
    period: "Jan 2021 – Jan 2022",
    current: false,
    summary: "Full stack enterprise development and cloud migration for global clients across multiple industries.",
    highlights: [
      "Modernized ASP.NET Core/.NET services into Node.js and migrated legacy workflows to AWS (EC2, Elastic Beanstalk, Lambda, API Gateway).",
      "Developed web apps using React.js, Angular, Vue.js, Node.js, and Express.js for enterprise clients.",
      "Built backend APIs with Node.js and Express.js for business workflows and database operations.",
      "Worked with MongoDB, SQL Server, and Oracle for data-driven features including CRUD and stored procedures.",
    ],
    tags: ["React", "Angular", "Vue", "Node.js", ".NET", "AWS", "MongoDB", "SQL Server"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-[calc(100vh-52px)] bg-gray-50">

      {/* Page hero */}
      <div className="bg-white border-b border-gray-100 py-10 px-5 md:px-8 text-center">
        <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-blue-50 mx-auto mb-5">
          <Image src="/headshot.png" alt="Sai Sreshta Vure" fill className="object-cover object-top" priority />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Professional Experience</h1>
        <p className="text-sm text-gray-500 max-w-md mx-auto">
          5+ years across financial services, government, fintech, and enterprise software — from full stack engineering to Gen AI adoption.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-10">

        {/* Experience cards */}
        <div className="space-y-6 mb-10">
          {experiences.map((exp, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 hover:border-blue-100 hover:shadow-sm transition-all">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-base font-bold text-gray-900">{exp.company}</h2>
                  {exp.current && (
                    <span className="text-[10px] font-semibold bg-green-50 text-green-600 border border-green-100 px-2 py-0.5 rounded-full">
                      Current
                    </span>
                  )}
                </div>
                <span className="text-xs text-gray-400 shrink-0 whitespace-nowrap">{exp.period}</span>
              </div>

              <p className="text-sm font-semibold text-blue-600 mb-0.5">{exp.role}</p>
              <p className="text-xs text-gray-400 mb-4">{exp.location}</p>

              <p className="text-xs text-gray-500 italic border-l-2 border-blue-100 pl-3 mb-4">
                {exp.summary}
              </p>

              <ul className="space-y-2 mb-4">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="flex gap-2 text-xs text-gray-600 leading-relaxed">
                    <span className="text-blue-400 mt-0.5 shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-medium text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div>
          <h2 className="text-sm font-bold tracking-[0.15em] uppercase text-gray-400 mb-4">Education</h2>
          <div className="space-y-3">
            <div className="bg-white border border-gray-100 rounded-xl p-5 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-gray-900">MS, Computer Science</h3>
                <p className="text-xs font-semibold text-blue-600 mt-1">University of Central Missouri</p>
              </div>
              <span className="text-xs text-gray-400">2022 – 2024</span>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-gray-900">B.Tech, Electronics &amp; Communication Engineering</h3>
                <p className="text-xs font-semibold text-blue-600 mt-1">JNTUHCEJ, Jagityal</p>
              </div>
              <span className="text-xs text-gray-400">2016 – 2020</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
