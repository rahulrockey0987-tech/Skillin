import { FaArrowRight } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-cyan-600 via-blue-700 to-indigo-800">
      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-12 text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Start Your Career?
          </h2>

          <p className="text-cyan-100 mt-5 text-lg max-w-2xl mx-auto">
            Join thousands of students learning in-demand skills, applying for
            internships, and getting hired by top companies through SkillIn.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-10 mb-10">

            <div>
              <h3 className="text-4xl font-bold text-white">10K+</h3>
              <p className="text-cyan-100 mt-2">Students</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">500+</h3>
              <p className="text-cyan-100 mt-2">Internships</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">150+</h3>
              <p className="text-cyan-100 mt-2">Hiring Companies</p>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-5">

            <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
              Get Started
              <FaArrowRight />
            </button>

            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300">
              Explore Courses
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}