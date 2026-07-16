import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Logo from "../components/Logo";
import "../css/login.css";

function Login() {

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const defaultRole =
  searchParams.get("role") === "owner"
    ? "owner"
    : "student";

  const [role, setRole] = useState("Student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter your email and password.");
      return;
    }

    if (role === "student") {

      if (
        email === "ankit@gmail.com" &&
        password === "123456"
      ) {

        navigate("/student-dashboard");

      } else {

        alert("Invalid Student Email or Password.");

      }

    } else {

      if (
        email === "owner@gmail.com" &&
        password === "123456"
      ) {

        navigate("/owner-dashboard");

      } else {

        alert("Invalid Owner Email or Password.");

      }

    }

  };

  return (

    <section className="login-page">

      <div className="login-box">

        <Logo />

        <h2 className="welcome-title">
          🔒 Welcome Back
        </h2>

        <p className="welcome-subtitle">
          Login to continue using STUBO
        </p>

        <div className="role-switch">

          <button
            className={role === "student" ? "active-role" : ""}
            onClick={() => setRole("student")}
          >
            Student
          </button>

          <button
            className={role === "owner" ? "active-role" : ""}
            onClick={() => setRole("owner")}
          >
            Owner
          </button>

        </div>

        <div className="login-form">

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p
            className="forgot-password"
            onClick={() => alert("Forgot Password feature will be available soon.")}
          >
            Forgot Password?
          </p>

          <button
            className="login-btn"
            onClick={handleLogin}
          >
            Continue
          </button>

        </div>

        <div className="register-section">

          {role === "student" ? (

            <>

              <p className="register-text">

                New to STUBO?

              </p>

              <button
                className="register-btn"
                onClick={() => navigate("/register")}
              >
                Create Student Account
              </button>

            </>

          ) : (

            <>

              <p className="register-text">

                Want to list your hostel?

              </p>

              <button
                className="register-btn"
                onClick={() => navigate("/owner-register")}
              >
                Register as Owner
              </button>

            </>

          )}

        </div>

        <p className="secure-text">
          🔒 Secure Login • Your information is protected.
        </p>

        <p className="copyright-login">
          © 2026 STUBO • Secure Student Hostel Platform
        </p>

      </div>

    </section>

  );

}

export default Login;