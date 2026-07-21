import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaBook,
  FaBriefcase,
  FaVideo,
  FaPlayCircle,
  FaCog,
} from "react-icons/fa";

export default function Sidebar() {
  const menu = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <FaTachometerAlt /> },
    { name: "Students", path: "/admin/students", icon: <FaUsers /> },
    { name: "Courses", path: "/admin/courses", icon: <FaBook /> },
    { name: "Jobs", path: "/admin/jobs", icon: <FaBriefcase /> },
    { name: "Live Classes", path: "/admin/liveclasses", icon: <FaVideo /> },
    { name: "Recorded Classes", path: "/admin/recordedclasses", icon: <FaPlayCircle /> },
    { name: "Settings", path: "/admin/settings", icon: <FaCog /> },
  ];

  return (
    <div className="w-64 h-screen bg-slate-900 text-white fixed left-0 top-0">
      <div className="p-5 text-2xl font-bold border-b border-slate-700">
        SkillIn Admin
      </div>

      <nav className="mt-5">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-5 py-3 ${
                isActive
                  ? "bg-blue-600"
                  : "hover:bg-slate-800"
              }`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}