import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Internships", path: "/internships" },
    { name: "Jobs", path: "/jobs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-2xl border-b border-cyan-500/20 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-3xl font-extrabold tracking-wide transition-transform duration-300 hover:scale-105"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skill
          </span>
          <span className="text-white">In</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative py-2 font-medium transition-all duration-300 ${
                  isActive
                    ? "text-cyan-400"
                    : "text-slate-300 hover:text-cyan-400"
                } after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-cyan-400 after:transition-all after:duration-300 ${
                  isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-5">

          <FaSearch className="text-xl text-slate-300 hover:text-cyan-400 hover:scale-110 transition-all duration-300 cursor-pointer" />

          <FaMoon className="text-xl text-slate-300 hover:text-cyan-400 hover:scale-110 transition-all duration-300 cursor-pointer" />

          <NavLink to="/login">
            <FaUserCircle className="text-3xl text-cyan-400 hover:text-cyan-300 hover:scale-110 transition-all duration-300 cursor-pointer" />
          </NavLink>

          <NavLink to="/register">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300">
              Get Started
            </button>
          </NavLink>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-slate-950/95 backdrop-blur-xl border-t border-slate-800">

          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-4 transition-all ${
                  isActive
                    ? "text-cyan-400 bg-slate-900"
                    : "text-white hover:bg-slate-900 hover:text-cyan-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="px-6 py-5 border-t border-slate-800 flex items-center justify-between">

            <div className="flex gap-5">
              <FaSearch className="text-xl text-slate-300 hover:text-cyan-400 cursor-pointer transition" />
              <FaMoon className="text-xl text-slate-300 hover:text-cyan-400 cursor-pointer transition" />
            </div>

            <NavLink to="/login">
              <FaUserCircle className="text-3xl text-cyan-400 hover:text-cyan-300 cursor-pointer" />
            </NavLink>
          </div>

          <div className="p-6">
            <NavLink to="/register">
              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-cyan-500/40 transition-all duration-300">
                Get Started
              </button>
            </NavLink>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Navbar;