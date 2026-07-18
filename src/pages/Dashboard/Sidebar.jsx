import {
  FaHome,
  FaBook,
  FaBriefcase,
  FaGraduationCap,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 min-h-screen flex flex-col">
      <div className="p-8">
        <h1 className="text-4xl font-bold text-cyan-400">
          SkillIn
        </h1>
      </div>

      <nav className="flex-1 px-5">
        <Link
          to="/dashboard"
          className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-800 transition"
        >
          <FaHome />
          Dashboard
        </Link>

        <Link
          to="/courses"
          className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-800 transition"
        >
          <FaBook />
          Courses
        </Link>

        <Link
          to="/internships"
          className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-800 transition"
        >
          <FaGraduationCap />
          Internships
        </Link>

        <Link
          to="/jobs"
          className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-800 transition"
        >
          <FaBriefcase />
          Jobs
        </Link>

        <Link
          to="/profile"
          className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-800 transition"
        >
          <FaUser />
          Profile
        </Link>

        <Link
          to="/settings"
          className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-800 transition"
        >
          <FaCog />
          Settings
        </Link>
      </nav>

      <div className="p-5">
        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 py-3 rounded-xl"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;