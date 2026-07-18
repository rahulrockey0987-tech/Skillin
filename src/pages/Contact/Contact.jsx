import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-28 pb-20">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold">
          Contact <span className="text-cyan-400">SkillIn</span>
        </h1>

        <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
          We'd love to hear from you. Have questions about courses,
          internships, or jobs? Get in touch with us.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 grid lg:grid-cols-2 gap-12">

        {/* Contact Information */}
        <div className="space-y-6">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center gap-5">
            <FaMapMarkerAlt className="text-3xl text-cyan-400" />
            <div>
              <h3 className="font-bold text-xl">Address</h3>
              <p className="text-gray-400">
                Hyderabad, Telangana, India
              </p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center gap-5">
            <FaPhoneAlt className="text-3xl text-cyan-400" />
            <div>
              <h3 className="font-bold text-xl">Phone</h3>
              <p className="text-gray-400">
                +91 98765 43210
              </p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center gap-5">
            <FaEnvelope className="text-3xl text-cyan-400" />
            <div>
              <h3 className="font-bold text-xl">Email</h3>
              <p className="text-gray-400">
                support@skillin.com
              </p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center gap-5">
            <FaClock className="text-3xl text-cyan-400" />
            <div>
              <h3 className="font-bold text-xl">Working Hours</h3>
              <p className="text-gray-400">
                Monday - Saturday (9:00 AM - 6:00 PM)
              </p>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            Send us a Message
          </h2>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400 resize-none"
            ></textarea>

            <button
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-4 rounded-xl font-bold hover:from-cyan-600 hover:to-blue-700 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Contact;