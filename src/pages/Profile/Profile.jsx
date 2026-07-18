export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-slate-950 text-white flex justify-center items-center">
      <div className="bg-slate-900 p-10 rounded-2xl w-[500px]">
        <h1 className="text-4xl font-bold text-cyan-400 mb-8">
          My Profile
        </h1>

        <p className="mb-4">
          <strong>Name:</strong> {user?.name}
        </p>

        <p className="mb-4">
          <strong>Email:</strong> {user?.email}
        </p>

        <p>
          <strong>Role:</strong> Student
        </p>
      </div>
    </div>
  );
}