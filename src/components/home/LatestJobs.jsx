import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaArrowRight,
} from "react-icons/fa";

const jobs = [
  {
    id: 1,
    title: "Frontend React Developer",
    company: "Google",
    location: "Hyderabad",
    salary: "₹8 - ₹12 LPA",
    type: "Full Time",
  },
  {
    id: 2,
    title: "Python Developer",
    company: "Microsoft",
    location: "Bengaluru",
    salary: "₹7 - ₹10 LPA",
    type: "Full Time",
  },
  {
    id: 3,
    title: "AI Engineer",
    company: "Amazon",
    location: "Remote",
    salary: "₹12 - ₹18 LPA",
    type: "Remote",
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "Infosys",
    location: "Pune",
    salary: "₹5 - ₹8 LPA",
    type: "Full Time",
  },
  {
    id: 5,
    title: "UI/UX Designer",
    company: "Meta",
    location: "Hyderabad",
    salary: "₹6 - ₹9 LPA",
    type: "Hybrid",
  },
  {
    id: 6,
    title: "Java Developer",
    company: "TCS",
    location: "Chennai",
    salary: "₹4 - ₹7 LPA",
    type: "Full Time",
  },
];

export default function LatestJobs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">

          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              Latest Jobs
            </h2>

            <p className="mt-3 text-gray-600">
              Discover the newest job opportunities from top companies.
            </p>
          </div>

          <NavLink
            to="/jobs"
            className="mt-5 md:mt-0 text-cyan-600 font-semibold flex items-center gap-2"
          >
            View All Jobs
            <FaArrowRight />
          </NavLink>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {jobs.map((job) => (
            <motion.div
              key={job.id}
              whileHover={{ y: -8 }}
              className="bg-slate-50 rounded-3xl p-6 shadow hover:shadow-xl transition"
            >
              <span className="inline-block bg-cyan-500 text-white px-4 py-1 rounded-full text-sm mb-4">
                {job.type}
              </span>

              <h3 className="text-2xl font-bold mb-2">
                {job.title}
              </h3>

              <p className="text-cyan-600 font-semibold mb-5">
                {job.company}
              </p>

              <div className="space-y-3 text-gray-600">

                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt />
                  {job.location}
                </div>

                <div className="flex items-center gap-3">
                  <FaMoneyBillWave />
                  {job.salary}
                </div>

                <div className="flex items-center gap-3">
                  <FaBriefcase />
                  {job.type}
                </div>

              </div>

              <NavLink to={`/jobs/${job.id}`}>
                <button className="mt-6 w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl font-semibold transition">
                  Apply Now
                </button>
              </NavLink>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}