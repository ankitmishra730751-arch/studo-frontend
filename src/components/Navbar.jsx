import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import "../css/navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("role");

    alert("Logout Successful");

    setMenuOpen(false);

    navigate("/login");

  };

  return (

    <nav className="navbar">

      <Link
        to="/"
        className="logo-link"
        onClick={() => setMenuOpen(false)}
      >
        <Logo />
      </Link>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul
        className={
          menuOpen
            ? "nav-links active"
            : "nav-links"
        }
      >

        <li>
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            🏠 Home
          </Link>
        </li>

        {!token ? (
          <>
            <li>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
              >
                👨‍🎓 Student Login
              </Link>
            </li>

            <li>
              <Link
                to="/login?role=owner"
                onClick={() => setMenuOpen(false)}
              >
                🏢 Owner Login
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                to={
                  role === "OWNER"
                    ? "/owner-dashboard"
                    : "/student-dashboard"
                }
                onClick={() => setMenuOpen(false)}
              >
                📊 Dashboard
              </Link>
            </li>
            
             <li>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
          >
            ℹ️ About
          </Link>
        </li>


            <li>
              <button
                className="logout-btn"
                onClick={handleLogout}
              >
                🚪 Logout
              </button>
            </li>
          </>
        )}

       
      </ul>

    </nav>

  );

}

export default Navbar;