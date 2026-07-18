import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

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

    if (!form.name.trim()) {
      alert("Please enter your name");
      return;
    }

    if (!form.email.trim()) {
      alert("Please enter your email");
      return;
    }

    if (!form.password) {
      alert("Please enter your password");
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

      alert(res.data.message || "Registration Successful");

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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg,#1d4ed8,#2563eb,#06b6d4)",
        padding: "20px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "420px",
          maxWidth: "100%",
          background: "#ffffff",
          padding: "35px",
          borderRadius: "15px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#2563eb",
            marginBottom: "30px",
          }}
        >
          SkillIn Register
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "18px",
            border: "2px solid #d1d5db",
            borderRadius: "10px",
            backgroundColor: "#ffffff",
            color: "#000000",
            WebkitTextFillColor: "#000000",
            caretColor: "#000000",
            fontSize: "16px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "18px",
            border: "2px solid #d1d5db",
            borderRadius: "10px",
            backgroundColor: "#ffffff",
            color: "#000000",
            WebkitTextFillColor: "#000000",
            caretColor: "#000000",
            fontSize: "16px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "18px",
            border: "2px solid #d1d5db",
            borderRadius: "10px",
            backgroundColor: "#ffffff",
            color: "#000000",
            WebkitTextFillColor: "#000000",
            caretColor: "#000000",
            fontSize: "16px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "25px",
            border: "2px solid #d1d5db",
            borderRadius: "10px",
            backgroundColor: "#ffffff",
            color: "#000000",
            WebkitTextFillColor: "#000000",
            caretColor: "#000000",
            fontSize: "16px",
            outline: "none",
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
            color: "#ffffff",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          {loading ? "Creating Account..." : "Register"}
        </button>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: "#475569",
          }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            style={{
              color: "#2563eb",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}