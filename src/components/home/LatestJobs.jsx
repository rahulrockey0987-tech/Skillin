import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBriefcase,
} from "react-icons/fa";

const jobs = [
  {
    company: "Google",
    role: "Frontend Developer",
    location: "Hyderabad",
    salary: "₹8 - 12 LPA",
    type: "Full Time",
  },
  {
    company: "Microsoft",
    role: "AI Engineer",
    location: "Bengaluru",
    salary: "₹10 - 18 LPA",
    type: "Hybrid",
  },
  {
    company: "Amazon",
    role: "Software Engineer",
    location: "Chennai",
    salary: "₹9 - 15 LPA",
    type: "Remote",
  },
];

function LatestJobs() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-5xl font-bold text-white">
              Latest <span className="text-cyan-400">Jobs</span>
            </h2>

            <p className="text-gray-400 mt-3">
              Fresh opportunities from our hiring partners.
            </p>
          </div>

          <button className="bg-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-600 transition">
            View All
          </button>
        </div>

        <div className="space-y-6">

          {jobs.map((job) => (
            <motion.div
              key={job.company}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col lg:flex-row justify-between items-center"
            >
              <div>

                <h3 className="text-2xl font-bold text-white">
                  {job.role}
                </h3>

                <p className="text-cyan-400 mt-2">
                  {job.company}
                </p>

                <div className="flex flex-wrap gap-6 mt-5 text-gray-400">

                  <span className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    {job.location}
                  </span>

                  <span className="flex items-center gap-2">
                    <FaMoneyBillWave />
                    {job.salary}
                  </span>

                  <span className="flex items-center gap-2">
                    <FaBriefcase />
                    {job.type}
                  </span>

                </div>

              </div>

              <button className="mt-6 lg:mt-0 bg-cyan-500 px-8 py-3 rounded-xl hover:bg-cyan-600 transition">
                Apply Now
              </button>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default LatestJobs;