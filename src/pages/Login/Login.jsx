import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
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


    if (!form.email.trim() || !form.password.trim()) {
      alert("Please enter email and password");
      return;
    }


    try {

      setLoading(true);


      const res = await axios.post(
        "https://skillin-server.onrender.com/api/auth/login",
        {
          email: form.email.trim().toLowerCase(),
          password: form.password,
        }
      );


      if (res.data.success) {

        localStorage.setItem(
          "token",
          res.data.token
        );


        localStorage.setItem(
          "user",
          JSON.stringify(res.data.user)
        );


        alert("Login Successful");


        // Admin Redirect
        if (res.data.user.role === "admin") {

          navigate("/admin/dashboard");

        } 
        
        // Student Redirect
        else {

          navigate("/dashboard");

        }


      } else {

        alert(res.data.message);

      }


    } catch (err) {

      alert(
        err.response?.data?.message ||
        "Login Failed"
      );

    } finally {

      setLoading(false);

    }

  };


  return (

    <div
      style={{
        minHeight: "100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        background:
          "linear-gradient(135deg,#1d4ed8,#2563eb,#06b6d4)",
        padding:"20px",
      }}
    >

      <form
        onSubmit={handleSubmit}
        style={{
          width:"420px",
          maxWidth:"100%",
          background:"#ffffff",
          padding:"35px",
          borderRadius:"15px",
          boxShadow:"0 15px 40px rgba(0,0,0,0.25)",
        }}
      >

        <h1
          style={{
            textAlign:"center",
            color:"#2563eb",
            marginBottom:"30px",
          }}
        >
          SkillIn Login
        </h1>


        <input

          type="email"

          name="email"

          placeholder="Enter Email"

          value={form.email}

          onChange={handleChange}

          required

          style={{
            width:"100%",
            padding:"14px",
            marginBottom:"18px",
            border:"2px solid #d1d5db",
            borderRadius:"10px",
            background:"#fff",
            color:"#000",
            fontSize:"16px",
          }}

        />


        <input

          type="password"

          name="password"

          placeholder="Enter Password"

          value={form.password}

          onChange={handleChange}

          required

          style={{
            width:"100%",
            padding:"14px",
            marginBottom:"25px",
            border:"2px solid #d1d5db",
            borderRadius:"10px",
            background:"#fff",
            color:"#000",
            fontSize:"16px",
          }}

        />


        <button

          type="submit"

          disabled={loading}

          style={{
            width:"100%",
            padding:"14px",
            background:"#2563eb",
            color:"#fff",
            border:"none",
            borderRadius:"10px",
            fontSize:"18px",
            fontWeight:"600",
            cursor:"pointer",
          }}

        >

          {loading ? "Logging in..." : "Login"}

        </button>


        <p
          style={{
            textAlign:"center",
            marginTop:"20px",
            color:"#475569",
          }}
        >

          Don't have an account?{" "}

          <span

            onClick={() => navigate("/register")}

            style={{
              color:"#2563eb",
              cursor:"pointer",
              fontWeight:"600",
            }}

          >

            Register

          </span>

        </p>


      </form>


    </div>

  );

}