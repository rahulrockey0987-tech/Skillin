import { useEffect, useMemo, useState } from "react";
import {
  getLiveClasses,
  joinLiveClass,
} from "../../services/liveClassService";
import LiveClassCard from "./LiveClassCard";

export default function LiveClasses() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const loadClasses = async () => {
    try {
      setLoading(true);
      const data = await getLiveClasses();
      setClasses(data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadClasses();
  }, []);

  const filteredClasses = useMemo(() => {
    return classes.filter((item) => {
      const matchesSearch =
        item.title?.toLowerCase().includes(search.toLowerCase()) ||
        item.subject?.toLowerCase().includes(search.toLowerCase()) ||
        item.faculty?.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" ? true : item.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [classes, search, filter]);

  const handleJoin = async (id) => {
    try {
      await joinLiveClass(id);
      loadClasses();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Header */}

      <div className="sticky top-0 z-20 bg-white border-b">

        <div className="max-w-7xl mx-auto p-4">

          <h1 className="text-2xl sm:text-3xl font-bold">
            Live Classes
          </h1>

          <p className="text-gray-500 mt-1">
            Join your upcoming classes
          </p>

          <div className="mt-4 flex flex-col gap-3 md:flex-row">

            <input
              type="text"
              placeholder="Search class..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="rounded-xl border px-4 py-3"
            >
              <option>All</option>
              <option>Upcoming</option>
              <option>Live</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>

          </div>

        </div>

      </div>

      {/* Content */}

      <div className="max-w-7xl mx-auto p-4">

        {loading ? (

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

            {Array.from({ length: 6 }).map((_, index) => (

              <div
                key={index}
                className="rounded-2xl bg-white p-5 animate-pulse h-56"
              />

            ))}

          </div>

        ) : filteredClasses.length === 0 ? (

          <div className="bg-white rounded-2xl p-10 text-center">

            <h2 className="text-xl font-semibold">
              No Live Classes
            </h2>

            <p className="text-gray-500 mt-2">
              There are no classes available.
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

            {filteredClasses.map((item) => (

              <LiveClassCard
                key={item._id}
                liveClass={item}
                onJoin={() => handleJoin(item._id)}
              />

            ))}

          </div>

        )}

      </div>

    </div>
  );
}