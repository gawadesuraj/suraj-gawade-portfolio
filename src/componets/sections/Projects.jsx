export const Projects = () => {
  const projects = [
    {
      title: "Cloud Platform",
      description:
        "A scalable cloud platform using Docker, Node.js, and AWS to manage deployments and monitor applications.",
      techStack: ["React", "Node.js", "AWS", "Docker"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal developer portfolio built with React and TailwindCSS, showcasing skills and projects.",
      techStack: ["React", "Tailwind", "Framer Motion"],
      link: "#",
    },
    {
      title: "Chat Application",
      description:
        "A real-time chat app with private/public rooms, built using Socket.io and Node.js backend.",
      techStack: ["React", "Socket.io", "Express", "MongoDB"],
      link: "#",
    },
    {
      title: "E-commerce Dashboard",
      description:
        "An admin dashboard for managing products, orders, and users with charts and analytics.",
      techStack: ["Next.js", "TypeScript", "Chart.js"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 py-16 bg-[#0e0e0e] text-white"
    >
      <div className="w-[90vw] max-w-[1000px] border-2 border-[#d16f1e] rounded-2xl shadow-[0_0_30px_#d16f1e] p-8 md:p-12">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#ff8800]">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-[#d16f1e33] bg-white/5 backdrop-blur-sm hover:-translate-y-1 transition-all hover:shadow-[0_0_20px_#d16f1e80]"
            >
              <h3 className="text-2xl font-semibold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#d16f1e1a] text-[#ffb84d] py-1 px-3 rounded-full text-xs tracking-wide hover:bg-[#d16f1e33] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#ff8800] hover:text-orange-300 font-medium text-sm group"
              >
                View Project
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  &#10132;
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
