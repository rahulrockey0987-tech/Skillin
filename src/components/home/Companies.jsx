const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "TCS",
  "Infosys",
  "Wipro",
  "Accenture",
  "IBM",
];

export default function Companies() {
  return (
    <section className="py-16 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-3xl font-bold text-white">
          Trusted by <span className="text-cyan-400">Top Companies</span>
        </h2>

        <p className="text-center text-slate-400 mt-3 mb-12">
          Our students are placed in leading companies across India.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {companies.map((company) => (
            <div
              key={company}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-white font-semibold">{company}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}