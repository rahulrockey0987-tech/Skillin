import {
  FaMapMarkerAlt,
  FaClock,
  FaMoneyBillWave,
  FaArrowRight,
  FaSearch,
  FaUsers,
} from "react-icons/fa";

const internships = [
  {
    company: "Google",
    role: "Frontend Developer Intern",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    stipend: "₹40,000 / month",
    location: "Bangalore",
    duration: "6 Months",
    mode: "Remote",
    applicants: "1.2k Applicants",
    deadline: "Apply by 30 July",
  },
  {
    company: "Microsoft",
    role: "Software Engineer Intern",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    stipend: "₹45,000 / month",
    location: "Hyderabad",
    duration: "6 Months",
    mode: "Hybrid",
    applicants: "980 Applicants",
    deadline: "Apply by 28 July",
  },
  {
    company: "Amazon",
    role: "Cloud Support Intern",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    stipend: "₹35,000 / month",
    location: "Hyderabad",
    duration: "3 Months",
    mode: "On-site",
    applicants: "740 Applicants",
    deadline: "Apply by 25 July",
  },
  {
    company: "Infosys",
    role: "Java Developer Intern",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
    stipend: "₹25,000 / month",
    location: "Pune",
    duration: "4 Months",
    mode: "Hybrid",
    applicants: "620 Applicants",
    deadline: "Apply by 27 July",
  },
  {
    company: "TCS",
    role: "Python Intern",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
    stipend: "₹22,000 / month",
    location: "Hyderabad",
    duration: "6 Months",
    mode: "Remote",
    applicants: "850 Applicants",
    deadline: "Apply by 29 July",
  },
  {
    company: "Accenture",
    role: "AI/ML Intern",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
    stipend: "₹38,000 / month",
    location: "Bangalore",
    duration: "6 Months",
    mode: "Hybrid",
    applicants: "510 Applicants",
    deadline: "Apply by 31 July",
  },
];

export default function Internships() {
  return (
    <section className="min-h-screen bg-slate-950 text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold">
            Latest <span className="text-cyan-400">Internships</span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Discover internship opportunities from top companies and start your
            career today.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mt-10 relative">
          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search internships..."
            className="w-full bg-slate-900 border border-slate-700 rounded-xl py-4 pl-14 pr-4 outline-none focus:border-cyan-400"
          />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {internships.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="flex items-center gap-4">
                <div className="bg-white rounded-xl p-3">
                  <img
                    src={item.logo}
                    alt={item.company}
                    className="w-12 h-12 object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    {item.company}
                  </h3>

                  <p className="text-gray-400">
                    {item.role}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">

                <div className="flex items-center gap-3">
                  <FaMoneyBillWave className="text-green-400" />
                  <span>{item.stipend}</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-red-400" />
                  <span>{item.location}</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaClock className="text-blue-400" />
                  <span>{item.duration}</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaUsers className="text-cyan-400" />
                  <span>{item.applicants}</span>
                </div>
                                <div className="flex justify-between items-center mt-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.mode === "Remote"
                        ? "bg-green-500/20 text-green-400"
                        : item.mode === "Hybrid"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    {item.mode}
                  </span>

                  <span className="text-sm text-orange-400">
                    {item.deadline}
                  </span>
                </div>

              </div>

              <button className="mt-6 w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold transition-all duration-300">
                Apply Now
                <FaArrowRight />
              </button>

            </div>
          ))}

        </div>

        {/* Load More */}
        <div className="text-center mt-14">
          <button className="px-8 py-3 border border-cyan-500 text-cyan-400 rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300">
            Load More Internships
          </button>
        </div>

      </div>
    </section>
  );
}