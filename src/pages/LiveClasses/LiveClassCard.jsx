import { FaVideo, FaClock, FaUserTie, FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function LiveClassCard({ liveClass, onJoin }) {
  const {
    _id,
    title,
    subject,
    faculty,
    startTime,
    endTime,
    status,
    recordingLink,
    thumbnail,
  } = liveClass;

  const now = new Date();
  const start = new Date(startTime);
  const end = new Date(endTime);

  const isLive = now >= start && now <= end;
  const isCompleted = now > end;

  const getCountdown = () => {
    if (isCompleted) return "Class Ended";
    if (isLive) return "LIVE NOW";

    const diff = start - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);

    if (days > 0) return `${days}d ${hrs}h left`;
    if (hrs > 0) return `${hrs}h ${mins}m left`;

    return `${mins} mins left`;
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all overflow-hidden border">

      {/* Thumbnail */}

      <div className="relative">

        <img
          src={
            thumbnail ||
            "https://placehold.co/600x350?text=Live+Class"
          }
          alt={title}
          className="w-full h-48 object-cover"
        />

        <div className="absolute top-3 left-3">

          {isLive ? (
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
              🔴 LIVE
            </span>
          ) : (
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
              {status}
            </span>
          )}

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
            <span>
              {start.toLocaleDateString()} •{" "}
              {start.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>

        </div>

        {/* Countdown */}

        <div className="mt-5 rounded-xl bg-blue-50 p-3">

          <p className="text-sm text-gray-500">
            Status
          </p>

          <p
            className={`font-bold text-lg ${
              isLive
                ? "text-red-600"
                : isCompleted
                ? "text-gray-600"
                : "text-blue-600"
            }`}
          >
            {getCountdown()}
          </p>

        </div>

        {/* Buttons */}

        <div className="mt-6 flex flex-col gap-3">

          {!isCompleted ? (
            <button
              onClick={onJoin}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
            >
              <FaVideo className="inline mr-2" />
              Join Class
            </button>
          ) : recordingLink ? (
            <a
              href={recordingLink}
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold"
            >
              Watch Recording
            </a>
          ) : (
            <button
              disabled
              className="w-full bg-gray-300 py-3 rounded-xl cursor-not-allowed"
            >
              Recording Not Available
            </button>
          )}

          <Link
            to={`/live-classes/${_id}`}
            className="text-center border border-blue-600 text-blue-600 py-3 rounded-xl hover:bg-blue-50 transition"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>
  );
}