import { FaUserCircle, FaCamera } from "react-icons/fa";

export default function ProfileHeader({ user, completion = 0 }) {
  return (
    <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl p-8 text-white shadow-xl">
      <div className="flex flex-col md:flex-row items-center gap-6">

        <div className="relative">
          <FaUserCircle className="text-8xl" />

          <button className="absolute bottom-0 right-0 bg-white text-cyan-600 rounded-full p-2 shadow-lg">
            <FaCamera />
          </button>
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold">
            {user?.name || "Student"}
          </h1>

          <p className="text-cyan-100">
            {user?.email}
          </p>

          <div className="mt-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Profile Completion</span>
              <span>{completion}%</span>
            </div>

            <div className="w-full h-3 bg-white/20 rounded-full">
              <div
                className="h-3 bg-white rounded-full"
                style={{ width: `${completion}%` }}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}