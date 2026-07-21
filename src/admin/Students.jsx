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
        "https://skillin-server.onrender.com/api/auth/users"
      );

      setStudents(res.data.users || []);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "#fff",
        padding: "30px",
      }}
    >
      <h1 style={{ color: "#22d3ee", fontSize: "32px" }}>
        Students
      </h1>

      <table
        style={{
          width: "100%",
          marginTop: "30px",
          borderCollapse: "collapse",
          background: "#1e293b",
        }}
      >
        <thead>
          <tr>
            <th style={{ padding: "15px" }}>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td style={{ padding: "15px" }}>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.role || "Student"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}