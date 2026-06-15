const experiences = [
  {
    company: "Cetera Financial Group",
    location: "CA, Remote",
    role: "Senior Developer / AI Engineer",
    period: "Aug 2025 – Present",
    project: "AdviceWorks — AI-enabled wealth platform for digital docs, account opening, annuities, trading, and pay automation.",
    current: true,
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
    project: "Enterprise Energy, Sustainability, and Judicial Case Management platforms for secure statewide reporting and government workflows.",
    current: false,
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
    project: "AI-driven banking and lending workflows around Finastra Loan IQ, document digitization, invoice processing, and risk calculations.",
    current: false,
    highlights: [
      "Built AI document digitization with Spring Boot, React, TypeScript, Python, and SpaCy NLP — reducing extraction errors by 15%.",
      "Designed responsive UIs with React, TypeScript, Bootstrap, AG Grid, and Highcharts for high-volume financial data.",
      "Improved performance by optimizing component rendering and applying React.memo, useMemo, and useCallback.",
      "Built reusable React components for loading states, errors, authentication, charts, and grids.",
      "Built AWS and Airflow data workflows, improving data handling by 25%.",
      "Maintained 90–95% test coverage with JUnit, Selenium, and SonarQube, reducing defects by 40%.",
      "Used Datadog for service health, log analysis, and incident detection across critical applications.",
    ],
    tags: ["React", "TypeScript", "Spring Boot", "Python", "NLP", "AWS", "Datadog", "Airflow"],
  },
  {
    company: "Breezend Technologies LLC",
    location: "VA",
    role: "Web Application Developer",
    period: "Aug 2023 – Oct 2023",
    current: false,
    highlights: [
      "Developed enterprise web apps using React.js, TypeScript, Node.js, and REST APIs for commercial shopping operations.",
      "Built reusable React components with hooks, Context API, and memoization — improving UI maintainability.",
      "Integrated frontend with backend REST APIs to automate loan transaction workflows, reducing manual processing by 30%.",
    ],
    tags: ["React", "TypeScript", "Node.js", "REST APIs"],
  },
  {
    company: "TCS (Tata Consultancy Services)",
    location: "India",
    role: "Software Engineer",
    period: "Jan 2021 – Jan 2022",
    current: false,
    highlights: [
      "Modernized ASP.NET Core/.NET services into Node.js and migrated legacy workflows to AWS (EC2, Elastic Beanstalk, Lambda, API Gateway).",
      "Developed web apps using React.js, Angular, Vue.js, Node.js, and Express.js for enterprise clients.",
      "Built backend APIs with Node.js and Express.js for business workflows and database operations.",
      "Worked with MongoDB, SQL Server, and Oracle for data-driven features including CRUD and stored procedures.",
    ],
    tags: ["React", "Angular", "Vue", "Node.js", ".NET", "AWS", "MongoDB", "SQL Server"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Work History
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Professional Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-gray-200 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative md:pl-16">
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 top-2 w-5 h-5 rounded-full border-2 border-white shadow-md hidden md:block ${
                    exp.current ? "bg-blue-600 ring-4 ring-blue-100" : "bg-gray-300"
                  }`}
                />

                <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl font-bold text-gray-900">{exp.company}</h3>
                        {exp.current && (
                          <span className="px-2.5 py-0.5 text-xs font-semibold bg-green-100 text-green-700 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-blue-600 font-semibold mt-0.5">{exp.role}</p>
                      <p className="text-sm text-gray-400 mt-0.5">{exp.location}</p>
                    </div>
                    <span className="text-sm font-medium text-gray-500 bg-white px-3 py-1 rounded-lg border border-gray-200 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {exp.project && (
                    <p className="text-sm text-gray-500 italic mb-4 border-l-2 border-blue-200 pl-3">
                      {exp.project}
                    </p>
                  )}

                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-600">
                        <span className="text-blue-500 mt-1 flex-shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-100 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
