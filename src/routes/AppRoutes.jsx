import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import Courses from "../pages/Courses/Courses";
import Jobs from "../pages/Jobs/Jobs";
import Profile from "../pages/Profile/Profile";
import AdminJobs from "../admin/Jobs";
import JobDetails from "../pages/JobDetails";
export default function AppRoutes() {
  return (
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/courses" element={<Courses />} />
  <Route path="/jobs" element={<Jobs />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/jobs/:id" element={<JobDetails />} />

  {/* Admin */}
  <Route path="/admin/jobs" element={<AdminJobs />} />
</Routes>
  );
}