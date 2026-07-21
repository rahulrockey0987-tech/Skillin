import { Link } from "react-router-dom";

export default function RecordedClassCard({ recordedClass }) {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h2 className="text-xl font-bold">
        {recordedClass?.title || "Recorded Class"}
      </h2>

      <p className="text-gray-600 mt-2">
        {recordedClass?.subject || "No Subject"}
      </p>

      <p className="text-gray-600">
        Faculty: {recordedClass?.faculty || "N/A"}
      </p>

      <Link
        to={`/recorded-classes/${recordedClass?._id}`}
        className="mt-4 inline-block bg-blue-600 text-white px-5 py-2 rounded-lg"
      >
        Watch
      </Link>
    </div>
  );
}