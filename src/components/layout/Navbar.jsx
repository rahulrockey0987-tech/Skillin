import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.body.style.background = "#0f172a";
      document.body.style.color = "#fff";
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.body.style.background = "#ffffff";
      document.body.style.color = "#000";
      localStorage.setItem("theme", "light");
    } else {
      document.body.style.background = "#0f172a";
      document.body.style.color = "#fff";
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "70px",
        background: "#0F172A",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 40px",
        zIndex: 1000,
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ margin: 0 }}>SkillIn</h2>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/courses" style={linkStyle}>Courses</Link>
        <Link to="/internships" style={linkStyle}>Internships</Link>
        <Link to="/jobs" style={linkStyle}>Jobs</Link>
        <Link to="/login" style={linkStyle}>Login</Link>
        <Link to="/register" style={linkStyle}>Register</Link>

        <button
          onClick={toggleTheme}
          style={{
            padding: "8px 14px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "600",
};