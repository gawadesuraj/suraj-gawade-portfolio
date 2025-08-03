export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 py-16 bg-[#0e0e0e] text-[#f9fafb]"
    >
      <div className="w-[90vw] max-w-[1000px] border-2 border-[#d16f1e] rounded-2xl shadow-[0_0_30px_#d16f1e] p-8 md:p-12">
        <h2 className="text-4xl font-bold mb-10 text-center text-[#ff8800]">
          About Me
        </h2>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-[#d16f1e40] hover:shadow-[0_0_20px_#d16f1e60] transition-all">
          {/* Bio */}
          <p className="text-gray-300 mb-8 leading-relaxed text-lg text-justify">
            Hello! I'm Suraj Gawade, a final-year B.Tech student in Computer
            Science & Engineering from Tatyasaheb Kore Institute of Engineering
            & Technology, Warananagar. With a CGPA of 9.15 and hands-on
            experience in building full-stack web applications, I’m driven by a
            passion for clean code, performance, and real-world problem solving.
          </p>

          {/* Education & Experience */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="rounded-xl p-6 border border-[#d16f1e40] hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-[#ffaa33]">
                Education
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                <li>
                  <strong>B.Tech in Computer Science & Engineering</strong><br />
                  TKIE&T, Warananagar (2021 – Present) <br />
                  <span className="italic">CGPA: 9.15</span>
                </li>
                <li>
                  <strong>Diploma in Computer Engineering</strong><br />
                  Government Polytechnic, Kolhapur (2018 – 2021)
                </li>
              </ul>
            </div>

            {/* Work Experience */}
            <div className="rounded-xl p-6 border border-[#d16f1e40] hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-[#ffaa33]">
                Experience
              </h3>
              <div className="space-y-4 text-gray-300 text-sm">
                <div>
                  <h4 className="font-semibold text-base text-white">
                    Intern @ Ypsilon IT Solutions (2024)
                  </h4>
                  <p>
                    Worked on web automation and backend integration for internal tools. 
                    Built reusable components using JavaScript and Node.js.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-base text-white">
                    Team Lead @ TechLearn Users Group (TLUG)
                  </h4>
                  <p>
                    Organized workshops and hackathons; mentored juniors on web 
                    development and GitHub contributions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
