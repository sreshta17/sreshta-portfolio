const skillCategories = [
  {
    category: "AI / LLM & Tooling",
    color: "blue",
    skills: [
      "Claude Code", "GitHub Copilot", "MCP (Model Context Protocol)",
      "Amazon Bedrock", "NLP / SpaCy", "Prompt Engineering",
      "RAG (Retrieval-Augmented Generation)", "LangChain", "Agentic AI",
      "LLM Workflow Optimization", "AI Code Review Automation",
    ],
  },
  {
    category: "Frontend",
    color: "violet",
    skills: [
      "React.js", "Angular", "Vue.js", "TypeScript", "JavaScript (ES6+)",
      "HTML5 / CSS3", "Bootstrap", "AG Grid", "Highcharts",
    ],
  },
  {
    category: "Backend",
    color: "emerald",
    skills: [
      "Java", "Spring Boot", ".NET / C#", "ASP.NET Core",
      "Node.js", "Express.js", "Python", "REST APIs", "GraphQL",
      "Microservices", "JWT / OAuth2",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    color: "orange",
    skills: [
      "AWS Lambda", "AWS S3", "AWS ECS / Fargate", "AWS CloudFormation",
      "AWS EC2 / Elastic Beanstalk", "AWS API Gateway", "AWS IAM",
      "Azure App Services", "Azure Functions", "Azure AKS",
      "Azure Blob Storage", "Docker", "Kubernetes", "Jenkins",
    ],
  },
  {
    category: "Databases & Data",
    color: "rose",
    skills: [
      "PostgreSQL", "MySQL", "SQL Server", "Oracle",
      "MongoDB", "DynamoDB", "Elasticsearch",
      "SQL Stored Procedures", "Apache Airflow",
    ],
  },
  {
    category: "Testing & Monitoring",
    color: "teal",
    skills: [
      "JUnit", "Selenium", "SonarQube", "Datadog",
      "New Relic", "Postman", "Git / GitHub",
    ],
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string; badgeText: string }> = {
  blue:    { bg: "bg-blue-50",    border: "border-blue-100",    text: "text-blue-800",    badge: "bg-blue-100",    badgeText: "text-blue-700"    },
  violet:  { bg: "bg-violet-50",  border: "border-violet-100",  text: "text-violet-800",  badge: "bg-violet-100",  badgeText: "text-violet-700"  },
  emerald: { bg: "bg-emerald-50", border: "border-emerald-100", text: "text-emerald-800", badge: "bg-emerald-100", badgeText: "text-emerald-700" },
  orange:  { bg: "bg-orange-50",  border: "border-orange-100",  text: "text-orange-800",  badge: "bg-orange-100",  badgeText: "text-orange-700"  },
  rose:    { bg: "bg-rose-50",    border: "border-rose-100",    text: "text-rose-800",    badge: "bg-rose-100",    badgeText: "text-rose-700"    },
  teal:    { bg: "bg-teal-50",    border: "border-teal-100",    text: "text-teal-800",    badge: "bg-teal-100",    badgeText: "text-teal-700"    },
};

export default function SkillsPage() {
  return (
    <div className="min-h-[calc(100vh-52px)] bg-gray-50">

      {/* Page hero */}
      <div className="bg-white border-b border-gray-100 py-10 px-5 md:px-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Skills &amp; Technologies</h1>
        <p className="text-sm text-gray-500 max-w-md mx-auto">
          A full breakdown of the technologies, frameworks, and tools I work with — organized by category.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-10">
        <div className="grid gap-5">
          {skillCategories.map(({ category, color, skills }) => {
            const c = colorMap[color];
            return (
              <div key={category} className={`bg-white border ${c.border} rounded-xl p-6`}>
                <h2 className={`text-sm font-bold ${c.text} mb-4`}>{category}</h2>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className={`text-xs font-medium ${c.badgeText} ${c.badge} px-3 py-1 rounded-full`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
