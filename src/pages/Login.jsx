import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
    if (email === "ankit@gmail.com" && password === "123456") {
    navigate("/student-dashboard");
  } else {
    alert("Use Demo Credentials\nEmail: ankit@gmail.com\nPassword: 123456");
  }
};
    return (
  <div className="login-container">
    <div className="login-card">
      <h2>🔐 Welcome Back</h2>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      <p>
        Don't have an account?{" "}
        <span onClick={() => navigate("/register")}>
          Register
        </span>
      </p>
      <p style={{ marginTop: "10px", color: "#888", fontSize: "14px" }}>
       Demo Login <br />
      Email: <b>ankit@gmail.com</b><br />
      Password: <b>123456</b>
     </p>
    </div>
  </div>
);
}

export default Login;