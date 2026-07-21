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
        "http://localhost:5000/api/auth/register",
        {
          name: form.name.trim(),
          email: form.email.trim().toLowerCase(),
          password: form.password,
        }
      );


      if (res.data.success) {

        alert("Registration Successful");

        navigate("/login");

      } else {

        alert(res.data.message);

      }


    } catch (err) {

      console.error(err);

      alert(
        err.response?.data?.message ||
        "Registration Failed"
      );

    } finally {

      setLoading(false);

    }

  };



  return (

    <div
      style={{
        minHeight:"100vh",
        background:
        "linear-gradient(135deg,#1d4ed8,#06b6d4)",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:"20px",
      }}
    >

      <div
        style={{
          width:"420px",
          maxWidth:"100%",
          background:"#fff",
          borderRadius:"18px",
          padding:"35px",
          boxShadow:"0 15px 40px rgba(0,0,0,.25)",
        }}
      >

        <h1
          style={{
            textAlign:"center",
            color:"#2563eb",
            marginBottom:"10px",
          }}
        >
          Create Account
        </h1>


        <p
          style={{
            textAlign:"center",
            color:"#666",
            marginBottom:"30px",
          }}
        >
          Join SkillIn Today
        </p>



        <form onSubmit={handleSubmit}>


          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />



          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />



          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            style={inputStyle}
          />



          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            style={inputStyle}
          />



          <button
            type="submit"
            disabled={loading}
            style={buttonStyle}
          >

            {loading
              ? "Creating Account..."
              : "Register"
            }

          </button>



          <p
            style={{
              textAlign:"center",
              marginTop:"20px",
              color:"#555",
            }}
          >

            Already have an account?{" "}

            <Link
              to="/login"
              style={{
                color:"#2563eb",
                fontWeight:"bold",
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



const inputStyle = {

  width:"100%",
  padding:"14px",
  marginBottom:"18px",
  border:"2px solid #d1d5db",
  borderRadius:"10px",
  color:"#000",
  background:"#fff",
  fontSize:"16px",
  boxSizing:"border-box",

};



const buttonStyle = {

  width:"100%",
  padding:"14px",
  background:"#2563eb",
  color:"#fff",
  border:"none",
  borderRadius:"10px",
  fontSize:"18px",
  fontWeight:"bold",
  cursor:"pointer",

};