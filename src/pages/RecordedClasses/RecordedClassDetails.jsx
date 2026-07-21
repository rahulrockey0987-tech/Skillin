import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaBookOpen,
  FaUserTie,
  FaClock,
  FaDownload,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  getRecordedClass,
  updateProgress,
  markCompleted,
} from "../../services/recordedClassService";

export default function RecordedClassDetails() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [video, setVideo] = useState(null);

  const playerRef = useRef(null);

  useEffect(() => {
    loadVideo();
  }, []);

  const loadVideo = async () => {
    try {
      const data = await getRecordedClass(id);
      setVideo(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const saveProgress = async () => {
    if (!playerRef.current || !video) return;

    const current = playerRef.current.currentTime;
    const total = playerRef.current.duration;

    if (!total) return;

    const progress = Math.floor((current / total) * 100);

    try {
      await updateProgress(video._id, progress);
    } catch (err) {
      console.log(err);
    }
  };

  const completeClass = async () => {
    try {
      await markCompleted(video._id);
      alert("Course Completed!");
    } catch (err) {
      console.log(err);
    }
  };

  if (loading)
    return (
      <div className="p-8">
        <div className="h-80 bg-gray-200 animate-pulse rounded-3xl"></div>
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Header */}

      <div className="bg-white shadow-sm">

        <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">

          <Link
            to="/recorded-classes"
            className="flex items-center gap-2 text-blue-600"
          >
            <FaArrowLeft />
            Back
          </Link>

          <button
            onClick={completeClass}
            className="bg-green-600 text-white px-5 py-2 rounded-xl flex items-center gap-2"
          >
            <FaCheckCircle />
            Complete
          </button>

        </div>

      </div>

      <div className="max-w-7xl mx-auto p-4 lg:p-8">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Video */}

          <div className="lg:col-span-2">

            <video
              ref={playerRef}
              controls
              controlsList="nodownload"
              className="w-full rounded-3xl bg-black"
              onTimeUpdate={saveProgress}
            >
              <source src={video.videoUrl} type="video/mp4" />
            </video>

            <div className="bg-white rounded-3xl p-6 mt-6">

              <h1 className="text-3xl font-bold">
                {video.title}
              </h1>

              <p className="text-gray-600 mt-4">
                {video.description}
              </p>

            </div>

          </div>

          {/* Sidebar */}

          <div>

            <div className="bg-white rounded-3xl p-6">

              <h2 className="font-bold text-xl mb-6">
                Course Information
              </h2>

              <div className="space-y-5">

                <div className="flex items-center gap-3">
                  <FaBookOpen className="text-blue-600" />
                  <span>{video.subject}</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaUserTie className="text-blue-600" />
                  <span>{video.faculty}</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaClock className="text-blue-600" />
                  <span>{video.duration} Minutes</span>
                </div>

              </div>

            </div>

            {/* Resources */}

            <div className="bg-white rounded-3xl p-6 mt-6">

              <h2 className="font-bold text-xl mb-5">
                Resources
              </h2>

              {video.resources?.length === 0 ? (
                <p className="text-gray-500">
                  No resources uploaded.
                </p>
              ) : (
                <div className="space-y-3">

                  {video.resources.map((item, index) => (

                    <a
                      key={index}
                      href={item}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between border rounded-xl p-3 hover:bg-gray-50"
                    >
                      <span>
                        Resource {index + 1}
                      </span>

                      <FaDownload />

                    </a>

                  ))}

                </div>
              )}

            </div>

            {/* Notes */}

            <div className="bg-white rounded-3xl p-6 mt-6">

              <h2 className="font-bold text-xl">
                Personal Notes
              </h2>

              <textarea
                rows="8"
                placeholder="Write your notes here..."
                className="mt-4 w-full border rounded-xl p-4 resize-none"
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}