import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">

      <div className="max-w-7xl mx-auto px-5 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-4xl font-bold text-white">
              Skill<span className="text-cyan-400">In</span>
            </h2>

            <p className="mt-5 leading-7">
              SkillIn is India's modern learning platform helping students
              learn, earn certificates, get internships, and land dream jobs.
            </p>

            <div className="flex gap-4 mt-6 text-2xl">

              <a href="#">
                <FaFacebook className="hover:text-cyan-400 transition" />
              </a>

              <a href="#">
                <FaInstagram className="hover:text-cyan-400 transition" />
              </a>

              <a href="#">
                <FaLinkedin className="hover:text-cyan-400 transition" />
              </a>

              <a href="#">
                <FaYoutube className="hover:text-cyan-400 transition" />
              </a>

              <a href="#">
                <FaGithub className="hover:text-cyan-400 transition" />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-bold text-white mb-6">
              Quick Links
            </h3>

            <div className="space-y-3">

              <NavLink
                to="/"
                className="block hover:text-cyan-400"
              >
                Home
              </NavLink>

              <NavLink
                to="/courses"
                className="block hover:text-cyan-400"
              >
                Courses
              </NavLink>

              <NavLink
                to="/internships"
                className="block hover:text-cyan-400"
              >
                Internships
              </NavLink>

              <NavLink
                to="/jobs"
                className="block hover:text-cyan-400"
              >
                Jobs
              </NavLink>

              <NavLink
                to="/login"
                className="block hover:text-cyan-400"
              >
                Login
              </NavLink>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-bold text-white mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">
                <FaPhoneAlt className="text-cyan-400 mt-1" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="text-cyan-400 mt-1" />
                <span>support@skillin.in</span>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-cyan-400 mt-1" />
                <span>Hyderabad, Telangana, India</span>
              </div>

            </div>

          </div>

          {/* Newsletter */}
          <div>

            <h3 className="text-xl font-bold text-white mb-6">
              Newsletter
            </h3>

            <p>
              Subscribe to receive updates about new courses and jobs.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-5 p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
            />

            <button className="w-full mt-4 bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl font-semibold text-white transition">
              Subscribe
            </button>

          </div>

        </div>

      </div>

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-5 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-center md:text-left">
            © {new Date().getFullYear()} SkillIn. All Rights Reserved.
          </p>

          <div className="flex gap-6">

            <NavLink to="/privacy" className="hover:text-cyan-400">
              Privacy Policy
            </NavLink>

            <NavLink to="/terms" className="hover:text-cyan-400">
              Terms
            </NavLink>

          </div>

        </div>

      </div>

    </footer>
  );
}