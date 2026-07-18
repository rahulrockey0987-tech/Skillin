export default function Topbar() {
  return (
    <div className="flex justify-between items-center">
      <input
        type="text"
        placeholder="Search..."
        className="bg-slate-800 rounded-lg px-4 py-2 w-80 outline-none"
      />

      <div className="flex items-center gap-4">
        <button className="bg-cyan-500 px-4 py-2 rounded-lg">
          Notifications
        </button>
      </div>
    </div>
  );
}