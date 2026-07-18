import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo & About */}
          <div>
            <h2 className="text-3xl font-bold">
              <span className="text-cyan-400">Skill</span>
              <span className="text-white">In</span>
            </h2>

            <p className="mt-5 text-slate-400 leading-7">
              Learn. Build. Get Hired.
              <br />
              AI-powered learning platform for internships,
              placements and career growth.
            </p>

            <div className="flex gap-4 mt-6 text-2xl text-cyan-400">
              <FaFacebook className="cursor-pointer hover:text-white transition" />
              <FaInstagram className="cursor-pointer hover:text-white transition" />
              <FaLinkedin className="cursor-pointer hover:text-white transition" />
              <FaGithub className="cursor-pointer hover:text-white transition" />
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Platform
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>Courses</li>
              <li>Internships</li>
              <li>Jobs</li>
              <li>Certificates</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Contact
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>📧 support@skillin.in</li>
              <li>📞 +91 9059925182</li>
              <li>📍 Hyderabad, Telangana</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">
          © 2026 SkillIn. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;