import AdminSidebar from "./components/AdminSidebar";
import AdminTopbar from "./components/AdminTopbar";
import StatCard from "./components/StatCard";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <AdminSidebar />

      <div className="flex-1">
        <AdminTopbar />

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            <StatCard
              title="Total Users"
              value="250"
              color="bg-blue-600"
            />

            <StatCard
              title="Courses"
              value="18"
              color="bg-green-600"
            />

            <StatCard
              title="Jobs"
              value="36"
              color="bg-purple-600"
            />

            <StatCard
              title="Messages"
              value="12"
              color="bg-orange-500"
            />

          </div>

          <div className="bg-white rounded-xl shadow-lg mt-8 p-8">
            <h2 className="text-3xl font-bold text-slate-700">
              Welcome to SkillIn Admin Dashboard
            </h2>

            <p className="mt-4 text-gray-600">
              Manage students, courses, internships, jobs and website content
              from one place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}