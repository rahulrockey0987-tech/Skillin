import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Courses from "../pages/Courses/Courses";
import Jobs from "../pages/Jobs/Jobs";
import Internships from "../pages/Internships/Internships";
import LiveClasses from "../pages/LiveClasses/LiveClasses";
import RecordedClasses from "../pages/RecordedClasses/RecordedClasses";
import AdminLayout from "../admin/AdminLayout";
import AdminDashboard from "../admin/AdminDashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/internships" element={<Internships />} />
      <Route path="/liveclasses" element={<LiveClasses />} />
<Route path="/recordedclasses" element={<RecordedClasses />} />
<Route path="/admin/*" element={<AdminLayout />}>
  <Route path="dashboard" element={<AdminDashboard />} />
</Route>
    </Routes>
  );
}