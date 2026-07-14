import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import royal from "../assets/royal.jpg";
import krishna from "../assets/krishna.jpg";
import gla from "../assets/gla.jpg";
function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
  const price = document.getElementById("price").value;
  navigate(`/hostels?city=${search}&price=${price}`);
  };
  return (
    <div>
      <div className="hero">
    <h1>🏠 Find Your Perfect Hostel</h1>

    <p>
    Discover verified hostels near your college with affordable prices,
    modern facilities and secure booking.
    </p>

    <div className="search-box">
    <input
    type="text"
    placeholder="Search by city or hostel..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    />
    <select id="price">
    <option value="">All Prices</option>
    <option value="5000">Below ₹5000</option>
    <option value="6000">Below ₹6000</option>
    </select>
    <button onClick={handleSearch}>
    🔍 Search
    </button>
     </div>
    </div>
    <div className="features">

  <div className="feature-card">
    <h3>🏠 Verified Hostels</h3>
    <p>Only trusted and verified hostel owners.</p>
  </div>

  <div className="feature-card">
    <h3>💰 Affordable Prices</h3>
    <p>Find hostels that fit your budget.</p>
  </div>

  <div className="feature-card">
    <h3>📞 Direct Contact</h3>
    <p>Connect directly with hostel owners.</p>
  </div>

   </div>

      <h2 className="section-title">Featured Hostels</h2>
      <div className="hostel-cards">

  <div className="card">
    <img src={royal} alt="Royal Boys Hostel" className="hostel-image" />
    <h3>🏠 Royal Boys Hostel</h3>
    <p>📍 Mathura</p>
    <p>⭐ 4.8 Rating</p>
    <p>₹5000 / Month</p>
    <Link to="/hostel-details">
  <button>View Details</button>
</Link>
  </div>

  <div className="card">
    <img src={krishna} alt="Krishna PG" className="hostel-image" />
    <h3>🏠 Krishna PG</h3>
    <p>📍 Vrindavan</p>
    <p>⭐ 4.8 Rating</p>
    <p>₹4500 / Month</p>
    <button>View Details</button>
  </div>

  <div className="card">
    <img src={gla} alt="GLA Boys Hostel" className="hostel-image" />
    <h3>🏠 GLA Boys Hostel</h3>
    <p>📍 Mathura</p>
    <p>⭐ 4.8 Rating</p>
    <p>₹6000 / Month</p>
    <button>View Details</button>
  </div>
   <footer className="footer">
  <div className="footer-content">

    <div>
      <h3>🏠 Hostel Booking</h3>
      <p>Find verified hostels near your college.</p>
    </div>

    <div>
      <h3>Quick Links</h3>
      <p>Home</p>
      <p>Hostels</p>
      <p>Login</p>
      <p>Register</p>
    </div>

    <div>
      <h3>Contact</h3>
      <p>📍 Mathura</p>
      <p>📧 support@hostelbooking.com</p>
      <p>📞 +91 9876543210</p>
    </div>

  </div>

  <hr />

  <p className="copyright">
    © 2026 Hostel Booking. All Rights Reserved.
  </p>
</footer>

   </div>
    </div>
  );
}

export default Home;