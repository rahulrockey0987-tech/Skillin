import { useState } from "react";

export default function Enrollment() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlePayment = () => {
    alert("Payment integration will be added here.");
  };

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center mb-6">
          Course Enrollment
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-6"
        />

        <div className="bg-slate-100 rounded-lg p-4 mb-6">
          <h2 className="font-bold text-xl">Course Summary</h2>

          <p className="mt-3">
            <strong>Course:</strong> Full Stack Development
          </p>

          <p>
            <strong>Duration:</strong> 3 Months
          </p>

          <p className="text-2xl font-bold text-cyan-600 mt-3">
            ₹4,999
          </p>
        </div>

        <button
          onClick={handlePayment}
          className="w-full bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700"
        >
          Proceed to Payment
        </button>

      </div>
    </div>
  );
}