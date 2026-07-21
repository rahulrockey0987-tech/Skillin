import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLiveClass } from "../../services/liveClassService";

export default function Attendance() {
  const { id } = useParams();

  const [liveClass, setLiveClass] = useState(null);

  useEffect(() => {
    loadAttendance();
  }, []);

  const loadAttendance = async () => {
    try {
      const data = await getLiveClass(id);
      setLiveClass(data);
    } catch (err) {
      console.error(err);
    }
  };

  if (!liveClass) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-4">

      <div className="max-w-6xl mx-auto">

        <div className="bg-white rounded-3xl shadow p-6">

          <h1 className="text-3xl font-bold">
            Attendance
          </h1>

          <p className="text-gray-500 mt-2">
            {liveClass.title}
          </p>

        </div>

        <div className="mt-6 bg-white rounded-3xl shadow overflow-hidden">

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-slate-100">

                <tr>

                  <th className="p-4 text-left">
                    Student
                  </th>

                  <th className="p-4 text-left">
                    Status
                  </th>

                  <th className="p-4 text-left">
                    Joined At
                  </th>

                </tr>

              </thead>

              <tbody>

                {liveClass.attendance?.length > 0 ? (

                  liveClass.attendance.map((student) => (

                    <tr
                      key={student.student?._id}
                      className="border-t"
                    >

                      <td className="p-4">
                        {student.student?.name}
                      </td>

                      <td className="p-4">

                        <span
                          className={`px-3 py-1 rounded-full text-white text-sm ${
                            student.status === "Present"
                              ? "bg-green-600"
                              : student.status === "Late"
                              ? "bg-yellow-500"
                              : "bg-red-600"
                          }`}
                        >
                          {student.status}
                        </span>

                      </td>

                      <td className="p-4">
                        {new Date(
                          student.joinedAt
                        ).toLocaleString()}
                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td
                      colSpan={3}
                      className="p-8 text-center text-gray-500"
                    >
                      No attendance yet.
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}