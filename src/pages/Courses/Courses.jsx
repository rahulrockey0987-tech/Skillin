import { FaClock, FaUsers, FaStar, FaSearch } from "react-icons/fa";

const courses = [
  {
    title: "Full Stack Web Development",
    category: "Web Development",
    duration: "6 Months",
    students: "2,450",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
  },
  {
    title: "Python Programming",
    category: "Programming",
    duration: "3 Months",
    students: "1,890",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800",
  },
  {
    title: "Data Science & AI",
    category: "Artificial Intelligence",
    duration: "8 Months",
    students: "980",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
  },
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-slate-100 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold">
            Explore Our <span className="text-blue-600">Courses</span>
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Learn industry-ready skills from expert mentors and prepare for
            internships and full-time jobs.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mt-10 relative">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search courses..."
            className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {["All", "Web", "Python", "AI", "Data Science"].map((item) => (
            <button
              key={item}
              className="px-5 py-2 rounded-full bg-white shadow hover:bg-blue-600 hover:text-white transition"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Courses */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">

                <span className="text-sm text-blue-600 font-semibold">
                  {course.category}
                </span>

                <h2 className="text-2xl font-bold mt-2">
                  {course.title}
                </h2>

                <div className="flex justify-between mt-6 text-gray-600">

                  <div className="flex items-center gap-2">
                    <FaClock />
                    {course.duration}
                  </div>

                  <div className="flex items-center gap-2">
                    <FaUsers />
                    {course.students}
                  </div>

                </div>

                <div className="flex items-center gap-2 mt-5 text-yellow-500">
                  <FaStar />
                  {course.rating}
                </div>

                <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
                  Enroll Now
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}