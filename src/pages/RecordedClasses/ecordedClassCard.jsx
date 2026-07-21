import { Link } from "react-router-dom";
import {
  FaPlayCircle,
  FaBookOpen,
  FaUserTie,
  FaClock,
  FaFilePdf,
  FaBookmark,
} from "react-icons/fa";

export default function RecordedClassCard({ recordedClass }) {
  const {
    _id,
    title,
    subject,
    faculty,
    duration,
    thumbnail,
    resources = [],
    watchedBy = [],
  } = recordedClass;

  // Demo progress (replace with logged-in user's progress)
  const progress =
    watchedBy.length > 0 ? watchedBy[0].progress : 0;

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition duration-300">

      {/* Thumbnail */}

      <div className="relative">

        <img
          src={
            thumbnail ||
            "https://placehold.co/800x450?text=Recorded+Class"
          }
          alt={title}
          className="w-full h-52 object-cover"
        />

        <button
          className="absolute top-4 right-4 bg-white/90 p-3 rounded-full shadow hover:bg-yellow-100"
        >
          <FaBookmark />
        </button>

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="bg-black/60 rounded-full p-5">

            <FaPlayCircle className="text-white text-5xl" />

          </div>

        </div>

      </div>

      {/* Body */}

      <div className="p-5">

        <h2 className="text-xl font-bold line-clamp-2">
          {title}
        </h2>

        <div className="mt-4 space-y-3 text-gray-600">

          <div className="flex items-center gap-2">

            <FaBookOpen />

            <span>{subject}</span>

          </div>

          <div className="flex items-center gap-2">

            <FaUserTie />

            <span>{faculty}</span>

          </div>

          <div className="flex items-center gap-2">

            <FaClock />

            <span>{duration} Minutes</span>

          </div>

          <div className="flex items-center gap-2">

            <FaFilePdf />

            <span>
              {resources.length} Resources
            </span>

          </div>

        </div>

        {/* Progress */}

        <div className="mt-5">

          <div className="flex justify-between text-sm mb-2">

            <span>Progress</span>

            <span>{progress}%</span>

          </div>

          <div className="w-full bg-gray-200 rounded-full h-3">

            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

        {/* Buttons */}

        <div className="mt-6 space-y-3">

          <Link
            to={`/recorded-classes/${_id}`}
            className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
          >
            {progress > 0
              ? "Continue Watching"
              : "Start Learning"}
          </Link>

          <button
            className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 rounded-xl transition"
          >
            View Resources
          </button>

        </div>

      </div>

    </div>
  );
}