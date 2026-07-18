import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://skillin-server.onrender.com/api";

export default function AdminJobs() {
  const [jobs, setJobs] = useState([]);

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");

  // ===========================
  // Fetch All Jobs
  // ===========================
  const fetchJobs = async () => {
    try {
      const res = await axios.get(`${API}/jobs`);
      setJobs(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch jobs");
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // ===========================
  // Post New Job
  // ===========================
  const postJob = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API}/jobs`, {
        title,
        company,
        location,
        salary,
        jobType: "Full Time",
        skills: ["React"],
        description: "Posted from Admin Dashboard",
      });

      alert("Job Posted Successfully");

      setTitle("");
      setCompany("");
      setLocation("");
      setSalary("");

      fetchJobs();
    } catch (err) {
      console.error(err);
      alert("Failed to post job");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        Admin Jobs
      </h1>

      <form
        onSubmit={postJob}
        className="bg-slate-900 p-6 rounded-xl mb-8 space-y-4"
      >
        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 rounded bg-slate-800 text-white"
          required
        />

        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full p-3 rounded bg-slate-800 text-white"
          required
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-3 rounded bg-slate-800 text-white"
          required
        />

        <input
          type="text"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="w-full p-3 rounded bg-slate-800 text-white"
          required
        />

        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold"
        >
          Post Job
        </button>
      </form>

      <h2 className="text-2xl font-bold mb-6">
        Total Jobs: {jobs.length}
      </h2>

      <div className="space-y-4">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div
              key={job._id}
              className="bg-slate-900 rounded-xl p-5 shadow-lg"
            >
              <h3 className="text-xl font-bold text-cyan-400">
                {job.title}
              </h3>

              <p className="mt-2">
                <strong>Company:</strong> {job.company}
              </p>

              <p>
                <strong>Location:</strong> {job.location}
              </p>

              <p>
                <strong>Salary:</strong> {job.salary}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No jobs found.</p>
        )}
      </div>

    </div>
  );
}