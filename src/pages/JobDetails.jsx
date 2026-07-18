import { useParams } from "react-router-dom";

export default function JobDetails() {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Job Details</h1>
        <p>Job ID: {id}</p>

        <button className="mt-6 px-6 py-3 bg-cyan-600 text-white rounded-lg">
          Apply Now
        </button>
      </div>
    </div>
  );
}