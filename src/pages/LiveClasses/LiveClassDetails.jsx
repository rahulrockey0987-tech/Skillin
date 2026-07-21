import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaVideo,
  FaClock,
  FaCalendarAlt,
  FaUserTie,
  FaBookOpen,
  FaPlayCircle,
  FaLink,
} from "react-icons/fa";

import { getLiveClass } from "../../services/liveClassService";

export default function LiveClassDetails() {
  const { id } = useParams();

  const [liveClass, setLiveClass] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadClass();
  }, []);

  const loadClass = async () => {
    try {
      const data = await getLiveClass(id);
      setLiveClass(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100 p-4">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 animate-pulse h-96"></div>
      </div>
    );
  }

  if (!liveClass) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">
          Live Class Not Found
        </h2>
      </div>
    );
  }

  const {
    title,
    subject,
    faculty,
    description,
    thumbnail,
    meetingLink,
    recordingLink,
    startTime,
    endTime,
    duration,
    status,
  } = liveClass;

  return (
    <div className="min-h-screen bg-slate-100">

      <div className="max-w-6xl mx-auto p-4 sm:p-6">

        <Link
          to="/live-classes"
          className="inline-flex items-center gap-2 mb-5 text-blue-600 font-medium"
        >
          <FaArrowLeft />
          Back
        </Link>

        <div className="bg-white rounded-3xl shadow overflow-hidden">

          <img
            src={
              thumbnail ||
              "https://placehold.co/1200x500?text=Live+Class"
            }
            alt={title}
            className="w-full h-52 sm:h-72 lg:h-96 object-cover"
          />

          <div className="p-5 sm:p-8">

            <div className="flex flex-col lg:flex-row lg:justify-between gap-5">

              <div>

                <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm mb-3">
                  {status}
                </span>

                <h1 className="text-3xl font-bold">
                  {title}
                </h1>

                <p className="text-gray-500 mt-3">
                  {description}
                </p>

              </div>

              <div className="bg-slate-50 rounded-2xl p-5 lg:w-80">

                <div className="space-y-4">

                  <div className="flex items-center gap-3">
                    <FaBookOpen className="text-blue-600" />
                    <span>{subject}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaUserTie className="text-blue-600" />
                    <span>{faculty}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaCalendarAlt className="text-blue-600" />
                    <span>
                      {new Date(startTime).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaClock className="text-blue-600" />
                    <span>
                      {new Date(startTime).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaPlayCircle className="text-blue-600" />
                    <span>{duration} Minutes</span>
                  </div>

                </div>

              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">

              <a
                href={meetingLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 bg-blue-600 text-white rounded-xl py-4 font-semibold hover:bg-blue-700 transition"
              >
                <FaVideo />
                Join Live Class
              </a>

              {recordingLink ? (
                <a
                  href={recordingLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 bg-green-600 text-white rounded-xl py-4 font-semibold hover:bg-green-700 transition"
                >
                  <FaPlayCircle />
                  Watch Recording
                </a>
              ) : (
                <button
                  disabled
                  className="rounded-xl py-4 bg-gray-300 cursor-not-allowed"
                >
                  Recording Not Available
                </button>
              )}

            </div>

            <div className="mt-8 bg-slate-50 rounded-2xl p-6">

              <h2 className="text-xl font-bold mb-4">
                Class Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>
                  <p className="text-gray-500">Faculty</p>
                  <p className="font-semibold">{faculty}</p>
                </div>

                <div>
                  <p className="text-gray-500">Subject</p>
                  <p className="font-semibold">{subject}</p>
                </div>

                <div>
                  <p className="text-gray-500">Status</p>
                  <p className="font-semibold">{status}</p>
                </div>

                <div>
                  <p className="text-gray-500">Duration</p>
                  <p className="font-semibold">
                    {duration} Minutes
                  </p>
                </div>

              </div>

            </div>

            <div className="mt-8 bg-white border rounded-2xl p-6">

              <h2 className="text-xl font-bold mb-4">
                Meeting Link
              </h2>

              <a
                href={meetingLink}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 break-all flex items-center gap-2"
              >
                <FaLink />
                {meetingLink}
              </a>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}