import {
  FaUsers,
  FaBook,
  FaBriefcase,
  FaFileAlt,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

export default function StatCard({ title, value }) {
  const icons = {
    Students: <FaUsers className="text-3xl text-cyan-400" />,
    Courses: <FaBook className="text-3xl text-green-400" />,
    Jobs: <FaBriefcase className="text-3xl text-yellow-400" />,
    Applications: <FaFileAlt className="text-3xl text-purple-400" />,
    Pending: <FaClock className="text-3xl text-orange-400" />,
    Accepted: <FaCheckCircle className="text-3xl text-green-500" />,
    Rejected: <FaTimesCircle className="text-3xl text-red-500" />,
  };

  return (
    <div className="bg-slate-900 rounded-2xl p-5 shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02] transition-all duration-300">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-slate-400 text-sm">{title}</p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>
        </div>

        {icons[title]}
      </div>
    </div>
  );
}