import {
  FaUserGraduate,
  FaBriefcase,
  FaCertificate,
  FaChalkboardTeacher,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserGraduate />,
    title: "Industry Ready Training",
    desc: "Gain practical skills with real-world projects and hands-on learning.",
  },
  {
    icon: <FaBriefcase />,
    title: "Internship Assistance",
    desc: "Access internship opportunities from trusted companies.",
  },
  {
    icon: <FaCertificate />,
    title: "Verified Certificates",
    desc: "Earn certificates that strengthen your resume and career.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Expert Mentors",
    desc: "Learn from experienced professionals and industry experts.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Why Choose <span className="text-blue-500">SkillIn?</span>
        </h2>

        <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
          Learn. Practice. Get Certified. Get Hired.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-lg hover:border-blue-500 hover:-translate-y-2 hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-center mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 text-center leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}