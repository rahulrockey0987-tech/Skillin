import {
  FaUniversity,
  FaGraduationCap,
  FaBook,
  FaIdCard,
  FaChartLine,
  FaSchool,
} from "react-icons/fa";

export default function AcademicInfo({
  profile,
  handleChange,
}) {
  return (
    <div className="mt-8 bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-800 shadow-xl">

      <h2 className="text-2xl font-bold text-cyan-400 mb-8">
        Academic Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="flex items-center gap-2 mb-2 text-slate-300">
            <FaUniversity />
            College
          </label>

          <input
            name="college"
            value={profile.college}
            onChange={handleChange}
            placeholder="College Name"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:border-cyan-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 mb-2 text-slate-300">
            <FaBook />
            Branch
          </label>

          <input
            name="branch"
            value={profile.branch}
            onChange={handleChange}
            placeholder="AI & DS"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:border-cyan-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 mb-2 text-slate-300">
            <FaGraduationCap />
            Graduation Year
          </label>

          <input
            name="graduationYear"
            value={profile.graduationYear}
            onChange={handleChange}
            placeholder="2028"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:border-cyan-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 mb-2 text-slate-300">
            <FaIdCard />
            Roll Number
          </label>

          <input
            name="rollNumber"
            value={profile.rollNumber || ""}
            onChange={handleChange}
            placeholder="22A81A05XX"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:border-cyan-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 mb-2 text-slate-300">
            <FaChartLine />
            CGPA
          </label>

          <input
            name="cgpa"
            value={profile.cgpa || ""}
            onChange={handleChange}
            placeholder="8.75"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:border-cyan-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 mb-2 text-slate-300">
            <FaSchool />
            University
          </label>

          <input
            name="university"
            value={profile.university || ""}
            onChange={handleChange}
            placeholder="JNTUH"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:border-cyan-500 focus:outline-none"
          />
        </div>

      </div>

    </div>
  );
}