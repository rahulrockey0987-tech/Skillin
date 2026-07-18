import { motion } from "framer-motion";
import { FaRobot, FaArrowRight } from "react-icons/fa";

function AIAssistant() {
  return (
    <section className="section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="glass rounded-[32px] p-10 lg:p-16 grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300">
            <FaRobot />
            AI Career Assistant
          </div>

          <h2 className="text-5xl font-bold text-white mt-8 leading-tight">
            Your Personal
            <span className="gradient-text"> AI Mentor</span>
          </h2>

          <p className="text-slate-300 mt-6 text-lg leading-8">
            Get instant career guidance, resume reviews, interview preparation,
            skill recommendations, and personalized learning paths.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 px-7 py-4 rounded-xl flex items-center gap-3">
              Chat with AI
              <FaArrowRight />
            </button>

            <button className="border border-cyan-400 px-7 py-4 rounded-xl hover:bg-cyan-500 hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="glass rounded-3xl p-8">
          <div className="bg-slate-900 rounded-2xl p-6 space-y-5">
            <div className="bg-cyan-500/20 rounded-xl p-4 text-cyan-300">
              👋 Hi Rahul! How can I help you today?
            </div>

            <div className="bg-slate-800 rounded-xl p-4 text-white">
              📄 Review my resume
            </div>

            <div className="bg-slate-800 rounded-xl p-4 text-white">
              🎤 Prepare me for interviews
            </div>

            <div className="bg-slate-800 rounded-xl p-4 text-white">
              💼 Find internships
            </div>

            <div className="bg-slate-800 rounded-xl p-4 text-white">
              🧠 Recommend AI courses
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default AIAssistant;