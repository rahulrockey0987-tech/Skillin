import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "https://skillin-server.onrender.com/api/auth/register",
        {
          name: form.name.trim(),
          email: form.email.trim().toLowerCase(),
          password: form.password,
        }
      );

      alert("Registration Successful");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#1d4ed8,#06b6d4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "420px",
          maxWidth: "100%",
          background: "#fff",
          borderRadius: "18px",
          padding: "35px",
          boxShadow: "0 15px 40px rgba(0,0,0,.25)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#2563eb",
            marginBottom: "10px",
          }}
        >
          Create Account
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "30px",
          }}
        >
          Join SkillIn Today
        </p>

        <form onSubmit={handleSubmit}>

          <label style={{ color: "#000", fontWeight: "600" }}>
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "14px",
              margin: "8px 0 18px",
              border: "2px solid #d1d5db",
              borderRadius: "10px",
              color: "#000",
              background: "#fff",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />

          <label style={{ color: "#000", fontWeight: "600" }}>
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "14px",
              margin: "8px 0 18px",
              border: "2px solid #d1d5db",
              borderRadius: "10px",
              color: "#000",
              background: "#fff",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />

          <label style={{ color: "#000", fontWeight: "600" }}>
            Password
          </label>

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "14px",
              margin: "8px 0 18px",
              border: "2px solid #d1d5db",
              borderRadius: "10px",
              color: "#000",
              background: "#fff",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />

          <label style={{ color: "#000", fontWeight: "600" }}>
            Confirm Password
          </label>

          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "14px",
              margin: "8px 0 25px",
              border: "2px solid #d1d5db",
              borderRadius: "10px",
              color: "#000",
              background: "#fff",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              background: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {loading ? "Creating Account..." : "Register"}
          </button>

          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
              color: "#555",
            }}
          >
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                color: "#2563eb",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Login
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}