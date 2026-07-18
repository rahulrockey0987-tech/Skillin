import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaBookOpen,
  FaBuilding,
  FaBriefcase,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUserGraduate size={40} />,
    number: "10,000+",
    title: "Students",
  },
  {
    icon: <FaBookOpen size={40} />,
    number: "500+",
    title: "Courses",
  },
  {
    icon: <FaBuilding size={40} />,
    number: "150+",
    title: "Companies",
  },
  {
    icon: <FaBriefcase size={40} />,
    number: "2,000+",
    title: "Jobs",
  },
];

export default function Stats() {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-700">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-5xl font-bold text-white">
            SkillIn by the Numbers
          </h2>

          <p className="mt-4 text-gray-300">
            Trusted by thousands of learners and companies.
          </p>

        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center border border-white/10"
            >

              <div className="flex justify-center text-cyan-300 mb-5">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-white">
                {item.number}
              </h3>

              <p className="text-gray-300 mt-2">
                {item.title}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}