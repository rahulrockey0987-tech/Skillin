import { useEffect, useState } from "react";
import axios from "axios";

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/auth/users"
      );
      setStudents(res.data.users);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Registered Students
      </h1>

      <table className="w-full border border-gray-300">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">College</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Role</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student._id} className="border-b">
              <td className="p-3">{student.name}</td>
              <td className="p-3">{student.email}</td>
              <td className="p-3">{student.college || "-"}</td>
              <td className="p-3">{student.phone || "-"}</td>
              <td className="p-3">{student.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}