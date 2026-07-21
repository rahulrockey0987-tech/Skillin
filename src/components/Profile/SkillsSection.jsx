import { FaCode } from "react-icons/fa";

export default function SkillsSection({
  profile,
  handleChange,
}) {
  return (
    <div className="mt-8 bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-800 shadow-xl">

      <h2 className="text-2xl font-bold text-cyan-400 mb-6">
        Skills
      </h2>

      <label className="flex items-center gap-2 text-slate-300 mb-2">
        <FaCode />
        Skills
      </label>

      <input
        name="skills"
        value={profile.skills}
        onChange={handleChange}
        placeholder="React, Node.js, Python, AI, SQL..."
        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:border-cyan-500 focus:outline-none"
      />

      <p className="text-slate-400 mt-3 text-sm">
        Separate each skill with a comma.
      </p>

    </div>
  );
}