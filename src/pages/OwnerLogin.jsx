import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function OwnerLogin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="booking">

      <h1>🏢 Owner Login</h1>

      <input
        type="email"
        placeholder="Owner Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={() => navigate("/owner-dashboard")}>
      Login
      </button>
      <p>
       Don't have an account?{" "}
      <Link to="/owner-register">Register Here</Link>
      </p>

    </div>
  );
}

export default OwnerLogin;