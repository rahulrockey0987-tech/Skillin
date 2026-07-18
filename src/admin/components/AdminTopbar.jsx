export default function AdminTopbar() {
  return (
    <div className="bg-white shadow flex justify-between items-center px-8 py-4">
      <h1 className="text-2xl font-bold text-slate-700">
        Admin Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
          A
        </div>

        <div>
          <p className="font-semibold">Administrator</p>
          <p className="text-sm text-gray-500">admin@skillin.com</p>
        </div>
      </div>
    </div>
  );
}