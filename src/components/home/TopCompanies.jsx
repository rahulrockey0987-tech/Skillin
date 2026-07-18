import { FaArrowRight } from "react-icons/fa";

const companies = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    salary: "₹18 - ₹45 LPA",
    salary: "₹18 - ₹45 LPA",
    hiring: "Hiring Now",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    salary: "₹15 - ₹40 LPA",
    hiring: "Hiring Now",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    salary: "₹12 - ₹35 LPA",
    hiring: "Hiring Now",
  },
];

export default function TopCompanies() {
  return (
    <section className="bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Top Hiring Companies
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 rounded-2xl border border-slate-700"
            >
              <div className="bg-white rounded-lg p-4 flex justify-center">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-10"
                />
              </div>

              <h3 className="text-2xl font-bold mt-6">{company.name}</h3>

              <p className="text-green-400 mt-2">{company.hiring}</p>

              <p className="text-blue-400 font-semibold mt-2">
                {company.salary}
              </p>

              <button className="mt-6 w-full bg-blue-600 py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-blue-700">
                Apply Now
                <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}