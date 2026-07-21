import { useNavigate } from "react-router-dom";
import {
  FaUsers,
  FaBook,
  FaBriefcase,
  FaVideo,
  FaBell,
  FaClipboardList,
  FaCertificate,
  FaCog,
} from "react-icons/fa";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const items = [
    { title: "Students", icon: <FaUsers size={30} />, path: "/admin/students" },
    { title: "Courses", icon: <FaBook size={30} />, path: "/admin/courses" },
    { title: "Jobs", icon: <FaBriefcase size={30} />, path: "/admin/jobs" },
    { title: "Live Classes", icon: <FaVideo size={30} />, path: "/admin/live" },
    { title: "Recorded Classes", icon: <FaVideo size={30} />, path: "/admin/recorded" },
    { title: "Homework", icon: <FaClipboardList size={30} />, path: "/admin/homework" },
    { title: "Notifications", icon: <FaBell size={30} />, path: "/admin/notifications" },
    { title: "Certificates", icon: <FaCertificate size={30} />, path: "/admin/certificates" },
    { title: "Settings", icon: <FaCog size={30} />, path: "/admin/settings" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "#fff",
        padding: "40px",
      }}
    >
      <h1 style={{ fontSize: "34px", color: "#22d3ee" }}>
        SkillIn Admin Dashboard
      </h1>

      <p style={{ marginBottom: "30px" }}>
        Manage the complete SkillIn platform.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            style={{
              background: "#1e293b",
              padding: "30px",
              borderRadius: "15px",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <div style={{ marginBottom: "15px", color: "#22d3ee" }}>
              {item.icon}
            </div>

            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}