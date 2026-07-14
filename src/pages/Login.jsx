import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = async () => {

  const response = await fetch(
    `http://localhost:8080/users/login?email=${email}&password=${password}`,
    {
      method: "POST",
    }
  );

  const token = await response.text();

if (response.ok) {
    localStorage.setItem("token", token);
    alert("Login Successful");
    console.log(token);
    navigate("/student-dashboard");
} else {
    alert("Login Failed");
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
    </div>
  </div>
);
}

export default Login;