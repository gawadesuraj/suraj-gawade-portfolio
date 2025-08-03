export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const menuItems = ["home", "about", "skills", "projects", "contact"];

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen z-50 bg-[rgba(15,15,15,0.9)] backdrop-blur-md flex flex-col items-center justify-center transition-all duration-500 ease-in-out
        ${
          menuOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-4xl focus:outline-none hover:text-[#ff8800] transition"
        aria-label="Close menu"
      >
        &times;
      </button>

      {/* Menu Links */}
      {menuItems.map((item, index) => (
        <a
          key={item}
          href={`#${item}`}
          onClick={() => setMenuOpen(false)}
          className="text-3xl font-bold text-white my-4 transition-all duration-500 ease-out hover:text-[#d16f1e] hover:scale-105"
          style={{
            transitionDelay: menuOpen ? `${index * 100 + 200}ms` : "0ms",
            transform: menuOpen ? "translateY(0)" : "translateY(10px)",
            opacity: menuOpen ? 1 : 0,
          }}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </a>
      ))}
    </div>
  );
};
