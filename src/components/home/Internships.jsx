import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaArrowRight,
} from "react-icons/fa";

const internships = [
  {
    id: 1,
    company: "Google",
    role: "Frontend Developer Intern",
    location: "Hyderabad",
    duration: "3 Months",
    stipend: "₹25,000/month",
  },
  {
    id: 2,
    company: "Microsoft",
    role: "Python Developer Intern",
    location: "Bengaluru",
    duration: "6 Months",
    stipend: "₹30,000/month",
  },
  {
    id: 3,
    company: "Amazon",
    role: "AI/ML Intern",
    location: "Remote",
    duration: "4 Months",
    stipend: "₹35,000/month",
  },
  {
    id: 4,
    company: "Infosys",
    role: "Data Analyst Intern",
    location: "Pune",
    duration: "2 Months",
    stipend: "₹20,000/month",
  },
  {
    id: 5,
    company: "TCS",
    role: "Java Intern",
    location: "Chennai",
    duration: "3 Months",
    stipend: "₹18,000/month",
  },
  {
    id: 6,
    company: "IBM",
    role: "Cloud Intern",
    location: "Remote",
    duration: "6 Months",
    stipend: "₹32,000/month",
  },
];

export default function Internships() {
  return (
    <section className="py-16 bg-slate-100">
      <div className="max-w-7xl mx-auto px-5">

        <div className="flex flex-col md:flex-row justify-between items-center mb-12">

          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              Featured Internships
            </h2>

            <p className="text-gray-600 mt-3">
              Gain real-world experience with top companies.
            </p>
          </div>

          <NavLink
            to="/internships"
            className="mt-5 md:mt-0 text-cyan-600 font-semibold flex items-center gap-2"
          >
            View All
            <FaArrowRight />
          </NavLink>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {internships.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition p-6"
            >

              <div className="flex justify-between items-center mb-5">

                <div className="bg-cyan-500 text-white p-4 rounded-2xl">
                  <FaBuilding size={24} />
                </div>

                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                  Internship
                </span>

              </div>

              <h3 className="text-xl font-bold mb-2">
                {item.role}
              </h3>

              <p className="text-cyan-600 font-semibold mb-5">
                {item.company}
              </p>

              <div className="space-y-3 text-gray-600">

                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt />
                  {item.location}
                </div>

                <div className="flex items-center gap-3">
                  <FaCalendarAlt />
                  {item.duration}
                </div>

                <div className="font-semibold text-green-600">
                  {item.stipend}
                </div>

              </div>

              <NavLink to={`/internships/${item.id}`}>
                <button className="mt-6 w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl font-semibold transition">
                  Apply Internship
                </button>
              </NavLink>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}