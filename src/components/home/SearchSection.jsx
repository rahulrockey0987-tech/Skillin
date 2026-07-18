import { FaSearch } from "react-icons/fa";

export default function SearchSection() {
  return (
    <section className="bg-slate-900 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-700">
          <h2 className="text-3xl font-bold text-white text-center">
            Find Your Next Opportunity
          </h2>

          <p className="text-slate-400 text-center mt-3">
            Search courses, internships, and jobs in one place.
          </p>

          <div className="mt-8 flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                placeholder="Search courses, internships, jobs..."
                className="w-full bg-slate-700 text-white rounded-xl pl-12 pr-4 py-4 outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-xl text-white font-semibold">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}