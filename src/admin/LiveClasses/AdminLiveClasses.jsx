import { useEffect, useState } from "react";
import {
  getLiveClasses,
  createLiveClass,
  deleteLiveClass,
} from "../../services/liveClassService";

export default function AdminLiveClasses() {
  const [classes, setClasses] = useState([]);

  const [form, setForm] = useState({
    title: "",
    subject: "",
    faculty: "",
    description: "",
    meetingLink: "",
    startTime: "",
    endTime: "",
  });

  const loadClasses = async () => {
    try {
      const data = await getLiveClasses();
      setClasses(data || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadClasses();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createLiveClass(form);

      setForm({
        title: "",
        subject: "",
        faculty: "",
        description: "",
        meetingLink: "",
        startTime: "",
        endTime: "",
      });

      loadClasses();
    } catch (err) {
      console.log(err);
    }
  };

  const removeClass = async (id) => {
    if (!window.confirm("Delete this class?")) return;

    await deleteLiveClass(id);

    loadClasses();
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Live Classes
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow p-5 mb-8"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input
              name="title"
              placeholder="Class Title"
              value={form.title}
              onChange={handleChange}
              className="border rounded-xl p-3"
              required
            />

            <input
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="border rounded-xl p-3"
              required
            />

            <input
              name="faculty"
              placeholder="Faculty"
              value={form.faculty}
              onChange={handleChange}
              className="border rounded-xl p-3"
              required
            />

            <input
              name="meetingLink"
              placeholder="Meeting Link"
              value={form.meetingLink}
              onChange={handleChange}
              className="border rounded-xl p-3"
              required
            />

            <input
              type="datetime-local"
              name="startTime"
              value={form.startTime}
              onChange={handleChange}
              className="border rounded-xl p-3"
              required
            />

            <input
              type="datetime-local"
              name="endTime"
              value={form.endTime}
              onChange={handleChange}
              className="border rounded-xl p-3"
              required
            />

          </div>

          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            rows={4}
            className="border rounded-xl p-3 w-full mt-4"
          />

          <button
            className="mt-5 w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
          >
            Create Live Class
          </button>

        </form>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {classes.map((item) => (

            <div
              key={item._id}
              className="bg-white rounded-2xl shadow p-5"
            >

              <h2 className="text-xl font-bold">
                {item.title}
              </h2>

              <p className="text-gray-500 mt-2">
                {item.subject}
              </p>

              <p className="mt-1">
                Faculty : {item.faculty}
              </p>

              <p className="mt-1">
                {new Date(item.startTime).toLocaleString()}
              </p>

              <div className="flex gap-3 mt-5">

                <button
                  className="flex-1 bg-yellow-500 text-white py-2 rounded-xl"
                >
                  Edit
                </button>

                <button
                  onClick={() => removeClass(item._id)}
                  className="flex-1 bg-red-600 text-white py-2 rounded-xl"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}