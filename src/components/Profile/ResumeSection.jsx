import {
  FaFilePdf,
  FaGithub,
  FaLinkedin,
  FaUpload,
} from "react-icons/fa";

export default function ResumeSection({
  profile,
  handleChange,
}) {
  return (
    <div className="mt-8 bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-800 shadow-xl p-8">

      <h2 className="text-2xl font-bold text-cyan-400 mb-8">
        Resume & Professional Links
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Resume Upload */}

        <div className="md:col-span-2">

          <label className="text-slate-300 mb-3 flex items-center gap-2">
            <FaFilePdf />
            Resume
          </label>

          <label className="border-2 border-dashed border-cyan-500 rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-800 transition">

            <FaUpload className="text-5xl text-cyan-400 mb-4" />

            <p className="text-white">
              Click to Upload Resume
            </p>

            <p className="text-slate-400 text-sm mt-2">
              PDF only • Max 5MB
            </p>

            <input
              type="file"
              hidden
              accept=".pdf"
            />

          </label>

        </div>

        {/* GitHub */}

        <div>

          <label className="flex items-center gap-2 text-slate-300 mb-2">

            <FaGithub />

            GitHub

          </label>

          <input
            name="github"
            value={profile.github}
            onChange={handleChange}
            placeholder="https://github.com/username"
            className="w-full bg-slate-800 rounded-xl px-4 py-3 border border-slate-700 focus:border-cyan-500 outline-none"
          />

        </div>

        {/* LinkedIn */}

        <div>

          <label className="flex items-center gap-2 text-slate-300 mb-2">

            <FaLinkedin />

            LinkedIn

          </label>

          <input
            name="linkedin"
            value={profile.linkedin}
            onChange={handleChange}
            placeholder="https://linkedin.com/in/username"
            className="w-full bg-slate-800 rounded-xl px-4 py-3 border border-slate-700 focus:border-cyan-500 outline-none"
          />

        </div>

      </div>

    </div>
  );
}