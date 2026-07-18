import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-white">
            Skill<span className="text-blue-500">In</span>
          </h2>

          <p className="mt-4 text-gray-400 leading-7">
            Learn in-demand skills, discover internships, and kick-start your
            career with SkillIn.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li><a href="/" className="hover:text-blue-500">Home</a></li>
            <li><a href="/courses" className="hover:text-blue-500">Courses</a></li>
            <li><a href="/internships" className="hover:text-blue-500">Internships</a></li>
            <li><a href="/jobs" className="hover:text-blue-500">Jobs</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Support
          </h3>

          <ul className="space-y-3">
            <li><a href="/about" className="hover:text-blue-500">About Us</a></li>
            <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
            <li><a href="/privacy" className="hover:text-blue-500">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-blue-500">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Follow Us
          </h3>

          <div className="flex gap-4">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6 text-center text-gray-500">
        © {new Date().getFullYear()} SkillIn. All Rights Reserved.
      </div>
    </footer>
  );
}