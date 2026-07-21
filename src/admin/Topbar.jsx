import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

export default function Topbar() {
  const admin = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Admin Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          Welcome, {admin.name || "Admin"}
        </p>
      </div>

      {/* Center */}
      <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 w-96">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search students, jobs, courses..."
          className="bg-transparent outline-none w-full"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        <button className="relative">
          <FaBell className="text-2xl text-gray-600 hover:text-blue-600" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            3
          </span>
        </button>

        <div className="flex items-center gap-3">
          <FaUserCircle className="text-4xl text-blue-600" />

          <div className="hidden sm:block">
            <h2 className="font-semibold">
              {admin.name || "Administrator"}
            </h2>
            <p className="text-sm text-gray-500">
              {admin.email || "admin@skillin.com"}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}