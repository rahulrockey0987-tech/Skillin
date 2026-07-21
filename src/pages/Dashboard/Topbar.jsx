import { FaBars, FaBell, FaSearch } from "react-icons/fa";

export default function Topbar({ setSidebarOpen }) {
  return (
    <header className="flex items-center justify-between gap-4 mb-8">

      {/* Mobile Menu */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="md:hidden bg-slate-800 p-3 rounded-lg"
      >
        <FaBars className="text-white text-xl" />
      </button>

      {/* Search */}
      <div className="hidden md:flex items-center bg-slate-800 rounded-xl px-4 py-3 w-full max-w-md">

        <FaSearch className="text-slate-400 mr-3" />

        <input
          type="text"
          placeholder="Search courses, jobs..."
          className="bg-transparent outline-none w-full text-white placeholder:text-slate-400"
        />

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4 ml-auto">

        <button className="relative bg-slate-800 p-3 rounded-xl hover:bg-slate-700 transition">

          <FaBell className="text-xl text-white" />

          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>

        </button>

        <img
          src="https://ui-avatars.com/api/?name=Student&background=06b6d4&color=fff"
          alt="Profile"
          className="w-11 h-11 rounded-full border-2 border-cyan-500"
        />

      </div>

    </header>
  );
}