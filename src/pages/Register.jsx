import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../css/login.css";
import "../css/register.css";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = async () => {

    if (
      !name ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const userData = {
      name,
      email,
      phone,
      password,
      role: "USER",
    };

    try {

      const response = await fetch(
        "http://localhost:8080/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.ok) {

        alert("Registration Successful");

        navigate("/login");

      } else {

        alert("Registration Failed");

      }

    } catch (error) {

      alert("Server Error");

    }

  };
  return (

    <section className="login-page">

      <div className="login-box">

        <h2 className="welcome-title">
          👤 Create Account
        </h2>

        <p className="welcome-subtitle">
          Join STUBO and find your perfect hostel
        </p>

        <div className="login-form">

          <input
            type="text"
            placeholder="👤 Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="📧 Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="📱 Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <div className="password-box">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="🔒 Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <span
              className="eye-icon"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>

          </div>

          <div className="password-box">

            <input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              placeholder="🔒 Confirm Password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
            />

            <span
              className="eye-icon"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
            >
              {showConfirmPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </span>

          </div>

          <button
            className="login-btn"
            onClick={handleRegister}
          >
            Create Account
          </button>

          <p className="register-text">

            Already have an account?

            <Link
              to="/login"
              style={{
                color: "#8cff4f",
                marginLeft: "6px",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </section>

  );

}

export default Register;