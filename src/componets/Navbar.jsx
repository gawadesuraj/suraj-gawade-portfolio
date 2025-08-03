import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0.3,
      }
    );

    sections.forEach((section) => observer.observe(section));

    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) setActiveSection(hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // For initial load with hash

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [menuOpen]);

  const navLinks = ["home", "about", "projects", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[rgba(10,10,10,0.85)] backdrop-blur-md border-b border-[#d16f1e]/30 shadow-[0_0_10px_#d16f1e40]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#home"
            className="font-mono text-xl font-bold text-white"
            onClick={() => {
              setMenuOpen(false);
              setActiveSection("home");
            }}
          >
            suraj<span className="text-[#d16f1e]">.com</span>
          </a>

          {/* Hamburger Menu (Mobile) */}
          <div
            className="md:hidden flex flex-col justify-between w-6 h-5 cursor-pointer z-50 relative"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              className={`block h-[2px] w-full bg-white transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-full bg-white transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-full bg-white transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setActiveSection(section)}
                className={`capitalize relative transition-colors ${
                  activeSection === section
                    ? "text-[#d16f1e]"
                    : "text-gray-300 hover:text-white"
                } after:content-[''] after:block after:h-[2px] after:bg-[#d16f1e] after:transition-all after:duration-300 ${
                  activeSection === section ? "after:w-full" : "after:w-0 hover:after:w-full"
                }`}
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 text-xl text-white md:hidden transition-opacity z-40">
          {navLinks.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => {
                setMenuOpen(false);
                setActiveSection(section);
              }}
              className={`capitalize ${
                activeSection === section
                  ? "text-[#d16f1e]"
                  : "hover:text-[#d16f1e]"
              } transition-all`}
            >
              {section}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
