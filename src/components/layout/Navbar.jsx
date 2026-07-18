import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaMoon,
  FaUserCircle,
} from "react-icons/fa";

export default function Navbar() {
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-xl border-b border-slate-800"
          : "bg-slate-950"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className="text-3xl font-bold"
        >
          <span className="text-cyan-400">Skill</span>
          <span className="text-white">In</span>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 font-semibold"
                  : "text-white hover:text-cyan-400 transition"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-5">
          <FaSearch className="text-white hover:text-cyan-400 cursor-pointer" />
          <FaMoon className="text-white hover:text-cyan-400 cursor-pointer" />

          <NavLink to="/login">
            <FaUserCircle className="text-3xl text-cyan-400 hover:scale-110 transition" />
          </NavLink>

          <NavLink to="/register">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold">
              Register
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
      {menuOpen && (
        <div className="lg:hidden bg-slate-950 border-t border-slate-800">

          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-4 ${
                  isActive
                    ? "bg-slate-800 text-cyan-400"
                    : "text-white hover:bg-slate-800"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="flex justify-center gap-8 py-5 border-t border-slate-800">
            <FaSearch className="text-white text-xl cursor-pointer hover:text-cyan-400" />
            <FaMoon className="text-white text-xl cursor-pointer hover:text-cyan-400" />
          </div>

          <div className="px-6 pb-6 flex flex-col gap-4">

            <NavLink to="/login" onClick={() => setMenuOpen(false)}>
              <button className="w-full py-3 rounded-xl border border-cyan-500 text-cyan-400 font-semibold">
                Login
              </button>
            </NavLink>

            <NavLink to="/register" onClick={() => setMenuOpen(false)}>
              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold">
                Register
              </button>
            </NavLink>

          </div>
        </div>
      )}
    </header>
  );
}