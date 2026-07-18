import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaCertificate,
  FaBriefcase,
  FaUserFriends,
  FaArrowRight,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLaptopCode size={38} />,
    title: "Industry Ready Courses",
    description:
      "Learn with practical projects and real-world skills designed by industry experts.",
  },
  {
    icon: <FaCertificate size={38} />,
    title: "Verified Certificates",
    description:
      "Earn professional certificates after completing every course successfully.",
  },
  {
    icon: <FaBriefcase size={38} />,
    title: "Internships & Jobs",
    description:
      "Apply for internships and full-time jobs directly through the SkillIn platform.",
  },
  {
    icon: <FaUserFriends size={38} />,
    title: "Career Support",
    description:
      "Resume building, interview preparation, and career guidance to help you succeed.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            Why Choose SkillIn?
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Everything you need to build your career—from learning new skills
            to getting certified and landing your dream job.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-500 flex items-center justify-center text-white mb-6">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {feature.description}
              </p>
            </motion.div>
          ))}

        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-700 to-cyan-500 rounded-3xl p-10 md:p-16 text-center text-white">

          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Start Your Career?
          </h2>

          <p className="mt-5 text-lg text-blue-100 max-w-2xl mx-auto">
            Join thousands of students who are learning, earning certificates,
            and getting hired through SkillIn.
          </p>

          <button className="mt-8 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition flex items-center justify-center gap-2 mx-auto">
            Get Started
            <FaArrowRight />
          </button>

        </div>

      </div>
    </section>
  );
}