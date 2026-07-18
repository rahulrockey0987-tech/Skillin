import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminJobs() {
  const [jobs, setJobs] = useState([]);

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");

  const fetchJobs = async () => {
    const res = await axios.get("http://localhost:5000/api/jobs");
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const postJob = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/jobs", {
      title,
      company,
      location,
      salary,
      jobType: "Full Time",
      skills: ["React"],
      description: "Posted from Admin Dashboard",
    });

    setTitle("");
    setCompany("");
    setLocation("");
    setSalary("");

    fetchJobs();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        Admin Jobs
      </h1>

      <form
        onSubmit={postJob}
        className="bg-slate-900 p-6 rounded-xl mb-8"
      >

        <input
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-slate-800 text-white"
        />

        <input
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-slate-800 text-white"
        />

        <input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-slate-800 text-white"
        />

        <input
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-slate-800 text-white"
        />

        <button
          className="bg-cyan-500 px-6 py-3 rounded-lg"
        >
          Post Job
        </button>

      </form>

      <h2 className="text-2xl mb-4">
        Total Jobs: {jobs.length}
      </h2>

      {jobs.map((job) => (
        <div
          key={job._id}
          className="bg-slate-900 rounded-xl p-5 mb-4"
        >
          <h3 className="text-xl font-bold">
            {job.title}
          </h3>

          <p>{job.company}</p>

          <p>{job.location}</p>

          <p>{job.salary}</p>
        </div>
      ))}
    </div>
  );
}