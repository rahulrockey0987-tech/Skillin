export default function StatCard({ title, value }) {
  return (
    <div className="bg-slate-900 rounded-2xl p-6">
      <h3 className="text-slate-400">{title}</h3>

      <p className="text-4xl font-bold mt-4">
        {value}
      </p>
    </div>
  );
}