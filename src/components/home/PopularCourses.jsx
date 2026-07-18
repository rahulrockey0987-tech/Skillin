import {
  FaStar,
  FaClock,
  FaUserGraduate,
  FaArrowRight,
} from "react-icons/fa";

const courses = [
  {
    title: "Full Stack Web Development",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    instructor: "SkillIn Academy",
    duration: "12 Weeks",
    rating: "4.9",
    price: "₹2,999",
  },
  {
    title: "Python Programming",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800",
    instructor: "SkillIn Academy",
    duration: "8 Weeks",
    rating: "4.8",
    price: "₹1,999",
  },
  {
    title: "Data Science & AI",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
    instructor: "SkillIn Academy",
    duration: "16 Weeks",
    rating: "5.0",
    price: "₹3,999",
  },
  {
    title: "Java Development",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800",
    instructor: "SkillIn Academy",
    duration: "10 Weeks",
    rating: "4.7",
    price: "₹2,499",
  },
  {
    title: "Cloud Computing",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    instructor: "SkillIn Academy",
    duration: "14 Weeks",
    rating: "4.9",
    price: "₹3,499",
  },
  {
    title: "Cyber Security",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
    instructor: "SkillIn Academy",
    duration: "10 Weeks",
    rating: "4.8",
    price: "₹2,999",
  },
];

export default function PopularCourses() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            Popular Courses
          </h2>

          <p className="text-gray-400 mt-4">
            Learn in-demand skills from industry experts.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-3xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  {course.title}
                </h3>

                <div className="flex items-center text-yellow-400 mb-2">
                  <FaStar />
                  <span className="ml-2">{course.rating}</span>
                </div>

                <div className="flex items-center text-gray-300 mb-2">
                  <FaClock />
                  <span className="ml-2">{course.duration}</span>
                </div>

                <div className="flex items-center text-gray-300 mb-4">
                  <FaUserGraduate />
                  <span className="ml-2">{course.instructor}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-400">
                    {course.price}
                  </span>

                  <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl flex items-center gap-2">
                    Enroll
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}