import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getLiveClass,
  updateLiveClass,
} from "../../services/liveClassService";

export default function EditLiveClass() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    subject: "",
    faculty: "",
    description: "",
    meetingLink: "",
    recordingLink: "",
    startTime: "",
    endTime: "",
    status: "Upcoming",
  });

  useEffect(() => {
    loadClass();
  }, []);

  const loadClass = async () => {
    try {
      const data = await getLiveClass(id);

      setForm({
        title: data.title || "",
        subject: data.subject || "",
        faculty: data.faculty || "",
        description: data.description || "",
        meetingLink: data.meetingLink || "",
        recordingLink: data.recordingLink || "",
        startTime: data.startTime
          ? new Date(data.startTime).toISOString().slice(0, 16)
          : "",
        endTime: data.endTime
          ? new Date(data.endTime).toISOString().slice(0, 16)
          : "",
        status: data.status || "Upcoming",
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const saveClass = async (e) => {
    e.preventDefault();

    try {
      await updateLiveClass(id, form);
      navigate("/admin/live-classes");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow p-6">

        <h1 className="text-3xl font-bold mb-6">
          Edit Live Class
        </h1>

        <form
          onSubmit={saveClass}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            className="border rounded-xl p-3"
          />

          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="border rounded-xl p-3"
          />

          <input
            name="faculty"
            value={form.faculty}
            onChange={handleChange}
            placeholder="Faculty"
            className="border rounded-xl p-3"
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="border rounded-xl p-3"
          >
            <option>Upcoming</option>
            <option>Live</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>

          <input
            type="datetime-local"
            name="startTime"
            value={form.startTime}
            onChange={handleChange}
            className="border rounded-xl p-3"
          />

          <input
            type="datetime-local"
            name="endTime"
            value={form.endTime}
            onChange={handleChange}
            className="border rounded-xl p-3"
          />

          <input
            name="meetingLink"
            value={form.meetingLink}
            onChange={handleChange}
            placeholder="Meeting Link"
            className="border rounded-xl p-3 md:col-span-2"
          />

          <input
            name="recordingLink"
            value={form.recordingLink}
            onChange={handleChange}
            placeholder="Recording Link"
            className="border rounded-xl p-3 md:col-span-2"
          />

          <textarea
            rows={5}
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="border rounded-xl p-3 md:col-span-2"
          />

          <button
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-semibold md:col-span-2"
          >
            Update Live Class
          </button>

        </form>

      </div>
    </div>
  );
}