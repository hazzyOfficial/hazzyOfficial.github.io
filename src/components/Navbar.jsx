import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-blue-400">
            {" "}
            Haziel<span className="text-blue-400"> Fuentes</span>{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden invert"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-black hove:text-white transition-colors hover:text-sky-700"
            >
              {" "}
              Home
            </a>
            <a
              href="#about"
              className="text-black hove:text-white transition-colors hover:text-sky-700"
            >
              {" "}
              About{" "}
            </a>
            <a
              href="#projects"
              className="text-black hove:text-white transition-colors hover:text-sky-700"
            >
              {" "}
              Projects{" "}
            </a>
            <a
              href="#contact"
              className="text-black hove:text-white transition-colors hover:text-sky-700"
            >
              {" "}
              Contact{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
