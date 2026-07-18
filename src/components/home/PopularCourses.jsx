import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar, FaClock, FaUserGraduate } from "react-icons/fa";

const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800",
    duration: "12 Weeks",
    students: "5,000+",
    rating: "4.9",
  },
  {
    id: 2,
    title: "Python Programming",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800",
    duration: "8 Weeks",
    students: "4,200+",
    rating: "4.8",
  },
  {
    id: 3,
    title: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    duration: "16 Weeks",
    students: "3,500+",
    rating: "4.9",
  },
  {
    id: 4,
    title: "UI / UX Design",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800",
    duration: "10 Weeks",
    students: "2,800+",
    rating: "4.7",
  },
  {
    id: 5,
    title: "Data Science",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    duration: "14 Weeks",
    students: "3,200+",
    rating: "4.8",
  },
  {
    id: 6,
    title: "Cloud Computing",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    duration: "10 Weeks",
    students: "2,600+",
    rating: "4.8",
  },
];

export default function PopularCourses() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            Popular Courses
          </h2>

          <p className="mt-4 text-gray-600">
            Upgrade your skills with our most popular courses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {courses.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >

              <img
                src={course.image}
                alt={course.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-bold mb-4">
                  {course.title}
                </h3>

                <div className="flex justify-between text-gray-600 text-sm mb-4">

                  <span className="flex items-center gap-2">
                    <FaClock />
                    {course.duration}
                  </span>

                  <span className="flex items-center gap-2">
                    <FaUserGraduate />
                    {course.students}
                  </span>

                </div>

                <div className="flex items-center gap-2 mb-6">

                  <FaStar className="text-yellow-400" />

                  <span className="font-semibold">
                    {course.rating}
                  </span>

                </div>

                <NavLink to="/courses">

                  <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl font-semibold transition">

                    Enroll Now

                  </button>

                </NavLink>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}