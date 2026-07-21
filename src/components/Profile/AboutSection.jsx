import { FaUserEdit } from "react-icons/fa";

export default function AboutSection({
  profile,
  handleChange,
}) {
  return (
    <div className="mt-8 bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-800 shadow-xl p-8">

      <h2 className="text-2xl font-bold text-cyan-400 mb-6">
        About Me
      </h2>

      <label className="flex items-center gap-2 text-slate-300 mb-3">
        <FaUserEdit />
        Introduction
      </label>

      <textarea
        rows="6"
        name="bio"
        value={profile.bio}
        onChange={handleChange}
        placeholder="Write something about yourself..."
        className="w-full bg-slate-800 rounded-2xl px-4 py-4 border border-slate-700 focus:border-cyan-500 outline-none resize-none"
      />

    </div>
  );
}