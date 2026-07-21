import {
  FaHome,
  FaBook,
  FaBriefcase,
  FaGraduationCap,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaTimes,
  FaVideo,
  FaPlayCircle,
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };
const menu = [
  {
    name: "Dashboard",
    icon: <FaHome />,
    path: "/dashboard",
  },
  {
    name: "Courses",
    icon: <FaBook />,
    path: "/courses",
  },
  {
    name: "Live Classes",
    icon: <FaVideo />,
    path: "/liveclasses",
  },
  {
    name: "Recorded Videos",
    icon: <FaPlayCircle />,
    path: "/recordedclasses",
  },
  {
    name: "Internships",
    icon: <FaGraduationCap />,
    path: "/internships",
  },
  {
    name: "Jobs",
    icon: <FaBriefcase />,
    path: "/jobs",
  },
  {
    name: "Profile",
    icon: <FaUser />,
    path: "/profile",
  },
  {
    name: "Settings",
    icon: <FaCog />,
    path: "/settings",
  },
];

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed md:relative
        top-0 left-0
        h-screen
        w-72
        bg-slate-900
        border-r
        border-slate-800
        z-50
        transform
        transition-transform
        duration-300
        ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        }
      `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <h1 className="text-3xl font-bold text-cyan-400">
            SkillIn
          </h1>

          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-2xl text-white"
          >
            <FaTimes />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-4 space-y-2">
          {menu.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <span className="text-xl">
                {item.icon}
              </span>

              <span className="font-medium">
                {item.name}
              </span>
            </Link>
          ))}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-6 left-4 right-4">
          <button
            onClick={logout}
            className="w-full bg-red-600 hover:bg-red-700 transition py-3 rounded-xl flex items-center justify-center gap-3 font-semibold"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}