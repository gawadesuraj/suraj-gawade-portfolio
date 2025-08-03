import image from "../../assets/profile.jpg";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0e0e0e] text-[#f9fafb]"
    >
      <div className="w-[90vw] max-w-[1000px] border-2 border-[#d16f1e] rounded-2xl shadow-[0_0_30px_#d16f1e] p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-[#ff8800] shadow-[0_0_20px_#ff8800]">
              <img
                src={image}
                alt="Suraj Gawade"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Intro Text */}
          <div className="text-center md:text-left max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
              Hi, I’m <span className="text-[#ff8800]">Suraj Gawade</span>
            </h1>
            <p className="text-orange-300 italic mb-4">
              B.Tech CSE | Full-Stack Developer | TLUG Head
            </p>
            <h2 className="text-xl sm:text-2xl text-gray-300 mb-6">
              Passionate about clean code, open source & real-world impact
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed">
              I’m a full-stack developer skilled in React, Node.js, Express, and
              MongoDB. I love building scalable web apps and leading technical
              communities. Currently pursuing B.Tech in CSE with 9.15 CGPA at
              TKIE&T, Warananagar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="bg-[#ff8800] text-black py-3 px-6 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#ff8800]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-[#ff8800] text-[#ff8800] py-3 px-6 rounded-md font-medium transition-all duration-300 hover:bg-[#ff880026] hover:scale-105 hover:shadow-[0_0_15px_#ff8800]"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
