import { FaBullseye, FaEye, FaUsers, FaGraduationCap } from "react-icons/fa";

function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-28 pb-20">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold">
          About <span className="text-cyan-400">SkillIn</span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg leading-8">
          SkillIn is a modern learning and career platform built to help
          students learn industry-ready skills, secure internships, and land
          their dream jobs through quality education and career guidance.
        </p>
      </section>

      {/* Mission / Vision / Community */}
      <section className="max-w-7xl mx-auto px-6 mt-20 grid md:grid-cols-3 gap-8">

        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 hover:border-cyan-400 transition">
          <FaBullseye className="text-5xl text-cyan-400 mb-5" />

          <h2 className="text-2xl font-bold mb-4">
            Our Mission
          </h2>

          <p className="text-gray-400 leading-7">
            To provide affordable, practical education and connect students with
            internships and career opportunities.
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 hover:border-cyan-400 transition">
          <FaEye className="text-5xl text-cyan-400 mb-5" />

          <h2 className="text-2xl font-bold mb-4">
            Our Vision
          </h2>

          <p className="text-gray-400 leading-7">
            To become India's leading platform for learning, internships,
            certifications, and career growth.
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 hover:border-cyan-400 transition">
          <FaUsers className="text-5xl text-cyan-400 mb-5" />

          <h2 className="text-2xl font-bold mb-4">
            Our Community
          </h2>

          <p className="text-gray-400 leading-7">
            Thousands of students, mentors, and recruiters work together on
            SkillIn to create better career opportunities.
          </p>
        </div>

      </section>

      {/* Why SkillIn */}
      <section className="max-w-7xl mx-auto px-6 mt-24">

        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl p-10 text-center">

          <FaGraduationCap className="text-6xl mx-auto mb-6 text-white" />

          <h2 className="text-4xl font-bold">
            Why Choose SkillIn?
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-cyan-100 leading-8">
            Learn from expert mentors, complete real-world projects, earn
            certificates, discover internships, and apply for jobs—all from one
            platform.
          </p>

        </div>

      </section>

    </div>
  );
}

export default About;