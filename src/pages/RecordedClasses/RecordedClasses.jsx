import { useEffect, useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  getRecordedClasses,
} from "../../services/recordedClassService";
import RecordedClassCard from "./RecordedClassCard";

export default function RecordedClasses() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [subject, setSubject] = useState("All");

  useEffect(() => {
    loadClasses();
  }, []);

  const loadClasses = async () => {
    try {
      setLoading(true);

      const data = await getRecordedClasses();

      setClasses(data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const subjects = [
    "All",
    ...new Set(classes.map((c) => c.subject)),
  ];

  const filteredClasses = useMemo(() => {
    return classes.filter((item) => {
      const matchesSearch =
        item.title
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        item.subject
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        item.faculty
          ?.toLowerCase()
          .includes(search.toLowerCase());

      const matchesSubject =
        subject === "All"
          ? true
          : item.subject === subject;

      return matchesSearch && matchesSubject;
    });
  }, [classes, search, subject]);

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Header */}

      <div className="bg-white sticky top-0 z-20 shadow-sm">

        <div className="max-w-7xl mx-auto p-4 sm:p-6">

          <h1 className="text-2xl sm:text-3xl font-bold">
            Recorded Classes
          </h1>

          <p className="text-gray-500 mt-1">
            Continue your learning anytime.
          </p>

          <div className="mt-5 flex flex-col md:flex-row gap-4">

            <div className="relative flex-1">

              <FaSearch className="absolute left-4 top-4 text-gray-400" />

              <input
                type="text"
                placeholder="Search classes..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="w-full border rounded-xl py-3 pl-12 pr-4"
              />

            </div>

            <select
              value={subject}
              onChange={(e) =>
                setSubject(e.target.value)
              }
              className="border rounded-xl px-4 py-3"
            >
              {subjects.map((item) => (
                <option key={item}>
                  {item}
                </option>
              ))}
            </select>

          </div>

        </div>

      </div>

      {/* Body */}

      <div className="max-w-7xl mx-auto p-4 sm:p-6">

        {loading ? (

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">

            {Array.from({ length: 6 }).map((_, i) => (

              <div
                key={i}
                className="bg-white rounded-3xl h-72 animate-pulse"
              />

            ))}

          </div>

        ) : filteredClasses.length === 0 ? (

          <div className="bg-white rounded-3xl p-10 text-center">

            <h2 className="text-xl font-bold">
              No Recorded Classes
            </h2>

            <p className="text-gray-500 mt-2">
              Videos will appear here after they are published.
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">

            {filteredClasses.map((item) => (

              <RecordedClassCard
                key={item._id}
                recordedClass={item}
              />

            ))}

          </div>

        )}

      </div>

    </div>
  );
}