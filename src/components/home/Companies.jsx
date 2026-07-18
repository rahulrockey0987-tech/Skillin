import { motion } from "framer-motion";

const companies = [
  {
    name: "Google",
    logo: "https://cdn.simpleicons.org/google",
  },
  {
    name: "Microsoft",
    logo: "https://cdn.simpleicons.org/microsoft",
  },
  {
    name: "Amazon",
    logo: "https://cdn.simpleicons.org/amazon",
  },
  {
    name: "Meta",
    logo: "https://cdn.simpleicons.org/meta",
  },
  {
    name: "IBM",
    logo: "https://cdn.simpleicons.org/ibm",
  },
  {
    name: "Oracle",
    logo: "https://cdn.simpleicons.org/oracle",
  },
  {
    name: "Infosys",
    logo: "https://cdn.simpleicons.org/infosys",
  },
  {
    name: "TCS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
  },
];

export default function Companies() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            Top Hiring Companies
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Learn the skills that top companies are looking for and start your
            career with confidence.
          </p>

        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">

          {companies.map((company, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-16 object-contain mb-4"
              />

              <h3 className="font-semibold text-lg text-slate-800">
                {company.name}
              </h3>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}