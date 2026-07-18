import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://skillin-server.onrender.com/api";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchJobs();
  }, []);

  // =============================
  // Fetch Jobs
  // =============================
  const fetchJobs = async () => {
    try {
      const res = await axios.get(`${API}/jobs`);
      setJobs(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load jobs.");
    }
  };

  // =============================
  // Apply Job
  // =============================
  const applyJob = async (jobId) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first.");
        return;
      }

      const res = await axios.post(
        `${API}/applications/apply`,
        { jobId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message || "Application submitted successfully.");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Application failed.");
    }
  };

  // =============================
  // Search Filter
  // =============================
  const filteredJobs = jobs.filter(
    (job) =>
      job.title?.toLowerCase().includes(search.toLowerCase()) ||
      job.company?.toLowerCase().includes(search.toLowerCase()) ||
      job.location?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold text-cyan-400 mb-2">
        Student Job Portal
      </h1>

      <p className="text-slate-400 mb-8">
        Find your dream internship and job.
      </p>

      <input
        type="text"
        placeholder="🔍 Search by company, job or location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 rounded-xl bg-slate-900 border border-cyan-500 mb-8 outline-none"
      />

      <div className="grid gap-6">
        {filteredJobs.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-400">
              No Jobs Available
            </h2>
          </div>
        ) : (
          filteredJobs.map((job) => (
            <div
              key={job._id}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-cyan-500 transition"
            >
              <div className="flex justify-between">
                <div className="w-full">

                  <div className="flex items-center gap-4">
                    <div className="text-5xl">💼</div>

                    <div>
                      <h2 className="text-2xl font-bold">
                        {job.title}
                      </h2>

                      <p className="text-cyan-400">
                        {job.company}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-2">
                    <p>📍 {job.location}</p>
                    <p>💰 {job.salary}</p>
                    <p>💼 {job.jobType}</p>
                  </div>

                  {job.skills?.length > 0 && (
                    <div className="flex gap-2 mt-5 flex-wrap">
                      {job.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="mt-6 text-gray-300">
                    {job.description}
                  </p>

                  <div className="flex gap-4 mt-8">

                    <button
                      onClick={() => applyJob(job._id)}
                      className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold transition"
                    >
                      Apply Now
                    </button>

                    <button
                      className="border border-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-500 hover:text-black transition"
                    >
                      Save Job
                    </button>

                  </div>

                </div>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
}