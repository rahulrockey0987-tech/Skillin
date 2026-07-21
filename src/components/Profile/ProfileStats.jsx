import {
  FaBookOpen,
  FaBriefcase,
  FaCertificate,
  FaCode,
} from "react-icons/fa";

const stats = [
  {
    title: "Courses",
    value: "12",
    icon: <FaBookOpen />,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Internships",
    value: "5",
    icon: <FaBriefcase />,
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Certificates",
    value: "18",
    icon: <FaCertificate />,
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "LeetCode",
    value: "142",
    icon: <FaCode />,
    color: "from-orange-500 to-red-500",
  },
];

export default function ProfileStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {stats.map((item, index) => (
        <div
          key={index}
          className={`bg-gradient-to-r ${item.color} rounded-3xl p-[1px] shadow-xl hover:scale-105 transition duration-300`}
        >
          <div className="bg-slate-900 rounded-3xl p-6 text-center h-full">
            <div className="text-4xl text-white flex justify-center mb-4">
              {item.icon}
            </div>

            <h2 className="text-3xl font-bold text-white">
              {item.value}
            </h2>

            <p className="text-slate-300 mt-2">
              {item.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}