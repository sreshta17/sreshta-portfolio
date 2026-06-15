const contactLinks = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "sreshta.career@gmail.com",
    href: "mailto:sreshta.career@gmail.com",
    color: "bg-red-50 text-red-600 border-red-100",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/in/sreshta-v-382a1b12a",
    href: "https://www.linkedin.com/in/sreshta-v-382a1b12a",
    color: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    label: "GitHub",
    value: "github.com/sreshta17",
    href: "https://github.com/sreshta17",
    color: "bg-gray-100 text-gray-700 border-gray-200",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
          Get In Touch
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Let&apos;s work together
        </h2>
        <p className="text-gray-500 text-lg max-w-xl mx-auto mb-14 leading-relaxed">
          Whether you&apos;re looking for a full stack engineer, an AI/ML collaborator, or want to
          discuss a new opportunity — I&apos;d love to connect.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-14">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`flex flex-col items-center gap-3 p-6 rounded-2xl border transition-all hover:shadow-md hover:-translate-y-0.5 ${item.color}`}
            >
              <div>{item.icon}</div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider opacity-60 mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-medium break-all">{item.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-10 text-white">
          <h3 className="text-2xl font-bold mb-3">Open to new opportunities</h3>
          <p className="text-blue-100 mb-6 max-w-md mx-auto">
            Currently based in King of Prussia, PA. Open to remote, hybrid, or on-site roles in
            AI engineering, full stack development, or cloud architecture.
          </p>
          <a
            href="mailto:sreshta.career@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  );
}
