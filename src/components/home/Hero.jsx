export default function Hero() {
  return (
   <section className="pt-24 bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Learn Skills.
            <br />
            Get Internships.
            <br />
            Build Your Career.
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            SkillIn helps students learn industry-ready skills, earn
            certifications, find internships, and get placed in top companies.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
              Explore Courses
            </button>

            <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-700 transition">
              View Internships
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
            alt="Students Learning"
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}