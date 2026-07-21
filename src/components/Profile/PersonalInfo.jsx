import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function PersonalInfo({
  user,
  profile,
  handleChange,
}) {
  return (
    <div className="mt-8 bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-800 shadow-xl">

      <h2 className="text-2xl font-bold text-cyan-400 mb-8">
        Personal Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="flex items-center gap-2 text-slate-300 mb-2">
            <FaUser />
            Full Name
          </label>

          <input
            value={user?.name || ""}
            disabled
            className="w-full bg-slate-800 rounded-xl px-4 py-3 text-white border border-slate-700"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-slate-300 mb-2">
            <FaEnvelope />
            Email
          </label>

          <input
            value={user?.email || ""}
            disabled
            className="w-full bg-slate-800 rounded-xl px-4 py-3 text-white border border-slate-700"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-slate-300 mb-2">
            <FaPhone />
            Phone Number
          </label>

          <input
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className="w-full bg-slate-800 rounded-xl px-4 py-3 border border-slate-700 focus:border-cyan-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-slate-300 mb-2">
            <FaCalendarAlt />
            Date of Birth
          </label>

          <input
            type="date"
            name="dob"
            value={profile.dob}
            onChange={handleChange}
            className="w-full bg-slate-800 rounded-xl px-4 py-3 border border-slate-700 focus:border-cyan-500 focus:outline-none"
          />
        </div>

        <div className="md:col-span-2">
          <label className="flex items-center gap-2 text-slate-300 mb-2">
            <FaMapMarkerAlt />
            Address
          </label>

          <textarea
            rows={4}
            name="address"
            value={profile.address || ""}
            onChange={handleChange}
            placeholder="Enter your address..."
            className="w-full bg-slate-800 rounded-xl px-4 py-3 border border-slate-700 focus:border-cyan-500 focus:outline-none resize-none"
          />
        </div>

      </div>

    </div>
  );
}