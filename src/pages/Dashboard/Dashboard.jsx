import { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import StatCard from "./StatCard";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user")) || {};

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [stats, setStats] = useState({
    totalStudents: 0,
    totalCourses: 0,
    totalJobs: 0,
    totalApplications: 0,
    pendingApplications: 0,
    acceptedApplications: 0,
    rejectedApplications: 0,
  });

  useEffect(() => {
    axios
      .get("https://skillin-server.onrender.com/api/dashboard")
      .then((res) => {
        setStats(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <main className="flex-1 p-6 md:p-8 overflow-auto">

        <Topbar setSidebarOpen={setSidebarOpen} />

        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Welcome {user.name || "Student"} 👋
          </h1>

          <p className="text-slate-400 mt-2">
            Track your learning, internships and job applications.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

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

        <div className="grid lg:grid-cols-2 gap-6 mt-8">

          <div className="bg-slate-900 rounded-2xl p-6">

            <h2 className="text-2xl font-semibold mb-4">
              Recent Activity
            </h2>

            <ul className="space-y-4 text-slate-300">

              <li>✅ Profile completed</li>

              <li>📚 Continue your enrolled courses</li>

              <li>💼 Check latest job postings</li>

              <li>🎓 Apply for internships</li>

            </ul>

          </div>

          <div className="bg-slate-900 rounded-2xl p-6">

            <h2 className="text-2xl font-semibold mb-4">
              Quick Actions
            </h2>

            <div className="grid grid-cols-2 gap-4">

              <button className="bg-cyan-600 hover:bg-cyan-700 rounded-xl py-3">
                View Courses
              </button>

              <button className="bg-green-600 hover:bg-green-700 rounded-xl py-3">
                Find Jobs
              </button>

              <button className="bg-yellow-500 hover:bg-yellow-600 rounded-xl py-3 text-black font-semibold">
                Internships
              </button>

              <button className="bg-purple-600 hover:bg-purple-700 rounded-xl py-3">
                My Profile
              </button>

            </div>

          </div>

        </div>

      </main>
    </div>
  );
}