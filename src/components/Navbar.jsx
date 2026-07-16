import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import "../css/navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="navbar">

      {/* Logo */}

      <Link
        to="/"
        className="logo-link"
        onClick={() => setMenuOpen(false)}
      >
        <Logo />
      </Link>

      {/* Menu Icon */}

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Sidebar */}

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

        <li>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
          >
            ℹ️ About
          </Link>
        </li>

      </ul>

    </nav>

  );

}

export default Navbar;