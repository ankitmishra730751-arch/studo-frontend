import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav>
       <div className="logo">
    <img src={logo} alt="STUBO" />
    <h2>STUBO</h2>
     </div>

      <div>
        <Link to="/">Home</Link>{" | "}
        <Link to="/hostels">Hostels</Link>{" | "}
        <Link to="/login">Login</Link>{" | "}
        <Link to="/register">Register</Link>
        {" | "}
        <Link to="/owner-login">Owner Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;