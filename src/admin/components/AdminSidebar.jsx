import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaBook,
  FaBriefcase,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const menu = [
  { name: "Dashboard", path: "/admin", icon: <FaTachometerAlt /> },
  { name: "Users", path: "/admin/users", icon: <FaUsers /> },
  { name: "Courses", path: "/admin/courses", icon: <FaBook /> },
  { name: "Jobs", path: "/admin/jobs", icon: <FaBriefcase /> },
  { name: "Messages", path: "/admin/messages", icon: <FaEnvelope /> },
  { name: "Settings", path: "/admin/settings", icon: <FaCog /> },
];

export default function AdminSidebar() {
  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white">
      <div className="text-2xl font-bold p-6 border-b border-slate-700">
        SkillIn Admin
      </div>

      <nav className="mt-6">
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 hover:bg-blue-600 transition ${
                isActive ? "bg-blue-600" : ""
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}

        <button className="flex items-center gap-3 px-6 py-3 w-full hover:bg-red-600 transition mt-8">
          <FaSignOutAlt />
          Logout
        </button>
      </nav>
    </div>
  );
}