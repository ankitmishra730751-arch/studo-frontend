import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import "../css/login.css";

function OwnerRegister() {

  const navigate = useNavigate();

  const [ownerName, setOwnerName] = useState("");
  const [hostelName, setHostelName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {

    if (
      !ownerName ||
      !hostelName ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match.");
      return;
    }

    try {

      const response = await fetch(
        "https://studo-backend-q8aw.onrender.com/owners/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ownerName,
            hostelName,
            email,
            phone,
            password,
          }),
        }
      );

      if (!response.ok) {
        alert("Registration Failed");
        return;
      }

      alert("Owner Registered Successfully! Please login.");

      navigate("/login?role=owner");

    } catch (error) {
      alert("Server Error");
    }
  };

  return (

    <section className="login-page">

      <div className="login-box">

        <Logo />

        <h2 className="welcome-title">
          🏢 Owner Registration
        </h2>

        <p className="welcome-subtitle">
          Register your hostel with STUBO
        </p>
        <div className="login-form">

  <input
    type="text"
    placeholder="Owner Name"
    value={ownerName}
    onChange={(e) => setOwnerName(e.target.value)}
  />

  <input
    type="text"
    placeholder="Hostel Name"
    value={hostelName}
    onChange={(e) => setHostelName(e.target.value)}
  />

  <input
    type="email"
    placeholder="Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />

  <input
    type="tel"
    placeholder="Mobile Number"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
  />

  <input
    type="password"
    placeholder="Create Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />

  <input
    type="password"
    placeholder="Confirm Password"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
  />
  <button
    className="login-btn"
    onClick={handleRegister}
  >
    Create Owner Account
  </button>

</div>

<div className="register-section">

  <p className="register-text">
    Already have an Owner Account?
  </p>

  <button
    className="register-btn"
    onClick={() => navigate("/login?role=owner")}
  >
    Login as Owner
  </button>

</div>

<p className="secure-text">
  🏢 Manage your hostel securely with STUBO.
</p>

<p className="copyright-login">
  © 2026 STUBO • Hostel Owner Portal
</p>

</div>

</section>
);
}

export default OwnerRegister;