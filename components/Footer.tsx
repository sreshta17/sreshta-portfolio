export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Sai Sreshta Vure. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/sreshta17"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sreshta-v-382a1b12a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors text-sm"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sreshta.career@gmail.com"
            className="hover:text-white transition-colors text-sm"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
