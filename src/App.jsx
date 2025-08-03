import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./componets/LoadingScreen.jsx";
import { Navbar } from "./componets/Navbar.jsx";
import { MobileMenu } from "./componets/MobileMenu.jsx";
import { Home } from "./componets/sections/Home.jsx";
import { About } from "./componets/sections/About.jsx";
import {Skills }from "./componets/sections/Skills.jsx"
import "./index.css";
import { Projects } from "./componets/sections/Projects.jsx";
import { Contact } from "./componets/sections/Contact.jsx";
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className="min-h-screen bg-[#0e0e0e] flex items-center justify-center px-4 py-6">
        <div className="w-full max-w-7xl ">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
