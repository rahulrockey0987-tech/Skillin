import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful");
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1d4ed8 50%, #06b6d4 100%)",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "380px",
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#2563eb",
            marginBottom: "25px",
          }}
        >
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            border: "1px solid #cbd5e1",
            borderRadius: "8px",
            color: "black",
            background: "white",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            border: "1px solid #cbd5e1",
            borderRadius: "8px",
            color: "black",
            background: "white",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}