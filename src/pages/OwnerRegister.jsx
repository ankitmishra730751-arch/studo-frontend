import { useState } from "react";

function OwnerRegister() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Owner Registered Successfully!");
  };

  return (
    <div className="booking">

      <h1>🏢 Owner Register</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Owner Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">
          Register
        </button>

      </form>

    </div>
  );
}

export default OwnerRegister;