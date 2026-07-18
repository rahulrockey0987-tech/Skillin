import { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import StatCard from "./StatCard";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [stats, setStats] = useState({
    totalStudents: 0,
    totalJobs: 0,
    totalCourses: 0,
    totalApplications: 0,
    pendingApplications: 0,
    acceptedApplications: 0,
    rejectedApplications: 0,
    recentJobs: [],
    recentApplications: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await axios.get(
        "https://skillin-server.onrender.com/api/dashboard"
      );

      setStats(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <Topbar />

        {/* Heading */}
        <div className="mt-8">
          <h1 className="text-4xl font-bold">
            Welcome back,
            <span className="text-cyan-400">
              {" "}
              {user?.name || "Student"} 👋
            </span>
          </h1>

          <p className="text-slate-400 mt-2">
            Here's what's happening today.
          </p>

          {loading && (
            <div className="mt-5 bg-cyan-500/20 border border-cyan-500 rounded-xl p-4">
              Loading Dashboard...
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
          <StatCard
            title="Students"
            value={stats.totalStudents}
          />

          <StatCard
            title="Courses"
            value={stats.totalCourses}
          />

          <StatCard
            title="Jobs"
            value={stats.totalJobs}
          />

          <StatCard
            title="Applications"
            value={stats.totalApplications}
          />

          <StatCard
            title="Pending"
            value={stats.pendingApplications}
          />

          <StatCard
            title="Accepted"
            value={stats.acceptedApplications}
          />

          <StatCard
            title="Rejected"
            value={stats.rejectedApplications}
          />
        </div>

        {/* Learning Progress */}
        <div className="grid xl:grid-cols-3 gap-8 mt-10">
          <div className="xl:col-span-2 bg-slate-900 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-8">
              Learning Progress
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <span>React Masterclass</span>
                  <span>80%</span>
                </div>

                <div className="w-full h-3 bg-slate-700 rounded-full">
                  <div className="w-4/5 h-3 bg-cyan-400 rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Node.js Backend</span>
                  <span>65%</span>
                </div>

                <div className="w-full h-3 bg-slate-700 rounded-full">
                  <div className="w-2/3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* AI */}
          <div className="bg-slate-900 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-cyan-400">
              AI Assistant
            </h2>

            <p className="text-slate-400 mt-4">
              Ask anything about coding, placements,
              interviews, resume building or career
              guidance.
            </p>

            <button className="mt-8 w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl font-semibold">
              Open AI Assistant
            </button>
          </div>
        </div>

        {/* Latest Jobs */}
        <div className="grid lg:grid-cols-2 gap-8 mt-10">
          <div className="bg-slate-900 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">
              Latest Jobs
            </h2>

            {stats.recentJobs.length === 0 ? (
              <p className="text-slate-400">
                No jobs available.
              </p>
            ) : (
              <div className="space-y-4">
                {stats.recentJobs.map((job) => (
                  <div
                    key={job._id}
                    className="border-b border-slate-700 pb-4"
                  >
                    <h3 className="font-semibold">
                      {job.title}
                    </h3>

                    <p className="text-cyan-400">
                      {job.company}
                    </p>

                    <p className="text-slate-400">
                      {job.location}
                    </p>

                    <p className="text-green-400">
                      {job.salary}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Applications */}
          <div className="bg-slate-900 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">
              Recent Applications
            </h2>

            {stats.recentApplications.length === 0 ? (
              <p className="text-slate-400">
                No applications found.
              </p>
            ) : (
              <div className="space-y-4">
                {stats.recentApplications.map((app) => (
                  <div
                    key={app._id}
                    className="border-b border-slate-700 pb-4"
                  >
                    <h3 className="font-semibold">
                      {app.user?.name}
                    </h3>

                    <p className="text-cyan-400">
                      {app.job?.title}
                    </p>

                    <span className="text-sm text-slate-400">
                      {app.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;