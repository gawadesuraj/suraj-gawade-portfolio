export const Skills = () => {
  const frontendSkills = [
    "React.js",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Tailwind CSS",
    "Bootstrap",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase",
    "REST APIs",
  ];

  const toolsAndPlatforms = [
    "GitHub",
    "Figma",
    "VS Code",
    "Netlify",
    "Vercel",
    "Postman",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 py-16 bg-[#0e0e0e]"
    >
      <div className="w-[92vw] max-w-5xl border-[3px] border-[#d16f1e] rounded-2xl shadow-[0_0_25px_#d16f1e90] p-6 sm:p-10 md:p-14">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-center text-[#ff8800] tracking-wide">
          My Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Frontend */}
          <div className="p-6 rounded-xl border border-[#d16f1e33] bg-[#ffffff0a] backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_25px_#d16f1e80]">
            <h3 className="text-xl font-semibold text-white mb-4 border-b border-[#d16f1e50] pb-2">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-3">
              {frontendSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-[#d16f1e1a] text-[#ffb84d] py-1 px-4 rounded-full text-sm font-medium hover:bg-[#d16f1e33] hover:text-white transition duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="p-6 rounded-xl border border-[#d16f1e33] bg-[#ffffff0a] backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_25px_#d16f1e80]">
            <h3 className="text-xl font-semibold text-white mb-4 border-b border-[#d16f1e50] pb-2">
              Backend
            </h3>
            <div className="flex flex-wrap gap-3">
              {backendSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-[#d16f1e1a] text-[#ffb84d] py-1 px-4 rounded-full text-sm font-medium hover:bg-[#d16f1e33] hover:text-white transition duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="p-6 rounded-xl border border-[#d16f1e33] bg-[#ffffff0a] backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_25px_#d16f1e80]">
            <h3 className="text-xl font-semibold text-white mb-4 border-b border-[#d16f1e50] pb-2">
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-3">
              {toolsAndPlatforms.map((tool, idx) => (
                <span
                  key={idx}
                  className="bg-[#d16f1e1a] text-[#ffb84d] py-1 px-4 rounded-full text-sm font-medium hover:bg-[#d16f1e33] hover:text-white transition duration-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
