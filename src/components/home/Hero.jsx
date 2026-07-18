import { NavLink } from "react-router-dom";
import { FaArrowRight, FaPlayCircle } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="pt-24 md:pt-28 bg-gradient-to-br from-slate-950 via-blue-900 to-cyan-700 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left">

            <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-semibold mb-5">
              🚀 India's Smart Learning Platform
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Learn.
              <br />
              Build Skills.
              <br />
              Get Your Dream Job.
            </h1>

            <p className="mt-6 text-gray-300 text-base sm:text-lg leading-8 max-w-xl mx-auto lg:mx-0">
              SkillIn helps students master industry-ready skills, earn
              certificates, discover internships, and connect with top
              companies.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <NavLink to="/courses">
                <button className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition">
                  Explore Courses
                  <FaArrowRight />
                </button>
              </NavLink>

              <NavLink to="/internships">
                <button className="w-full sm:w-auto border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition">
                  <FaPlayCircle />
                  View Internships
                </button>
              </NavLink>

            </div>

            <div className="grid grid-cols-3 gap-5 mt-10">

              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold text-cyan-300">500+</h2>
                <p className="text-gray-300 text-sm">Courses</p>
              </div>

              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold text-cyan-300">100+</h2>
                <p className="text-gray-300 text-sm">Companies</p>
              </div>

              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold text-cyan-300">10K+</h2>
                <p className="text-gray-300 text-sm">Students</p>
              </div>

            </div>

          </div>

          {/* Right Image */}
          <div className="flex justify-center">

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200"
              alt="Students"
              className="w-full max-w-md lg:max-w-xl rounded-3xl shadow-2xl object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}