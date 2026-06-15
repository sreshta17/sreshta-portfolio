const skillGroups = [
  {
    category: "AI / LLM Engineering",
    color: "blue",
    icon: "🤖",
    skills: [
      "Claude Code",
      "GitHub Copilot",
      "MCP Server Integration",
      "Amazon Bedrock",
      "Reusable AI Skills",
      "Prompt Optimization",
      "AI Agents",
      "NLP / SpaCy",
      "Gen AI Workflows",
      "Token Optimization",
    ],
  },
  {
    category: "Frontend",
    color: "indigo",
    icon: "🎨",
    skills: [
      "React",
      "Angular",
      "Vue.js",
      "TypeScript",
      "JavaScript",
      "HTML5 / CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "AG Grid",
      "Highcharts",
    ],
  },
  {
    category: "Backend / APIs",
    color: "violet",
    icon: "⚙️",
    skills: [
      "Java",
      "Spring Boot",
      ".NET Core / C#",
      "ASP.NET",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "GraphQL",
      "Microservices",
      "Python",
    ],
  },
  {
    category: "Cloud & DevOps",
    color: "sky",
    icon: "☁️",
    skills: [
      "AWS Lambda",
      "AWS ECS / Fargate",
      "AWS S3 / IAM / EC2",
      "CloudFormation",
      "Azure App Services",
      "Azure Functions / APIM",
      "AKS / Docker / Kubernetes",
      "Jenkins",
      "GitHub / Bitbucket",
      "CloudWatch",
    ],
  },
  {
    category: "Data & Observability",
    color: "emerald",
    icon: "📊",
    skills: [
      "SQL Server",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "DynamoDB",
      "Stored Procedures",
      "Datadog",
      "New Relic",
      "Elasticsearch",
      "SonarQube",
    ],
  },
  {
    category: "Testing & Quality",
    color: "amber",
    icon: "🧪",
    skills: [
      "JUnit",
      "Mockito",
      "Selenium",
      "SonarQube",
      "Nexus",
      "Code Reviews",
      "Agile / Scrum",
      "Maven",
    ],
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 border-blue-100 text-blue-700 hover:bg-blue-100",
  indigo: "bg-indigo-50 border-indigo-100 text-indigo-700 hover:bg-indigo-100",
  violet: "bg-violet-50 border-violet-100 text-violet-700 hover:bg-violet-100",
  sky: "bg-sky-50 border-sky-100 text-sky-700 hover:bg-sky-100",
  emerald: "bg-emerald-50 border-emerald-100 text-emerald-700 hover:bg-emerald-100",
  amber: "bg-amber-50 border-amber-100 text-amber-700 hover:bg-amber-100",
};

const headerColorMap: Record<string, string> = {
  blue: "text-blue-600",
  indigo: "text-indigo-600",
  violet: "text-violet-600",
  sky: "text-sky-600",
  emerald: "text-emerald-600",
  amber: "text-amber-600",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Technical Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What I work with
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            A broad toolkit across AI, frontend, backend, cloud, and data — built over 5+ years of
            production engineering.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{group.icon}</span>
                <h3 className={`text-base font-bold ${headerColorMap[group.color]}`}>
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors cursor-default ${colorMap[group.color]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
