import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaBriefcase,
  FaBuilding,
  FaCertificate,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUserGraduate size={40} />,
    number: "10,000+",
    title: "Students Trained",
  },
  {
    icon: <FaBriefcase size={40} />,
    number: "5,000+",
    title: "Internships",
  },
  {
    icon: <FaBuilding size={40} />,
    number: "300+",
    title: "Hiring Companies",
  },
  {
    icon: <FaCertificate size={40} />,
    number: "95%",
    title: "Placement Success",
  },
];

function Stats() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            Student <span className="text-cyan-400">Success</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Helping students learn, build projects and launch their careers.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-slate-900 border border-slate-700 rounded-3xl p-8 text-center"
            >
              <div className="flex justify-center text-cyan-400 mb-6">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-white">
                {item.number}
              </h3>

              <p className="text-gray-400 mt-3">
                {item.title}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;