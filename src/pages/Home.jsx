import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import "../css/home.css";

function Home() {

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const featuredHostels = [

    {
      id: 1,
      name: "Neha Flat",
      image:
        "https://res.cloudinary.com/ktatmqjd/image/upload/v1784145180/neha-flats-2.jpg_ysu3jo.jpg",
      location: "Near GLA University, Mathura",
      distance: "5 min away",
      rent: "₹12,000 / Month",
      extra: "❄ AC Rooms"
    },

    {
      id: 2,
      name: "Cozy Girls Hostel",
      image:
        "https://res.cloudinary.com/ktatmqjd/image/upload/v1784145623/Cozy-girls-hostels-1.jpg_z7tg5s.jpg",
      location: "Near GLA University, Mathura",
      distance: "2 min away",
      rent: "₹10,000 / Month",
      extra: "👧 Premium Girls Hostel"
    },

    {
      id: 3,
      name: "Rana Boys Hostel",
      image:
        "https://res.cloudinary.com/ktatmqjd/image/upload/v1784146187/rana-boys-hostels-1.jpg_obatjc.jpg",
      location: "Near GLA University, Mathura",
      distance: "2 min away",
      rent: "₹8,500 / Month",
      extra: "👦 Boys Hostel"
    }

  ];

  const handleSearch = () => {

    navigate(`/hostels?city=${search}`);

  };

  return (

    <>

      <section className="hero">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <span className="hero-badge">
            🎓 Made for Students
          </span>

          <h1>

            Find your
            <span> perfect hostel</span>

          </h1>

          <p>

            Discover verified hostels near your college with affordable
            prices, secure booking and trusted owners.

          </p>

          <div className="search-box">

            <input
              type="text"
              placeholder="Search hostel or city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button onClick={handleSearch}>
              Search
            </button>

          </div>

        </div>

      </section>

      <section className="features">

        <div className="feature-card">

          <div className="feature-icon">🛡️</div>

          <h3>Verified Hostels</h3>

          <p>
            Only trusted and verified hostel owners.
          </p>

        </div>

        <div className="feature-card">

          <div className="feature-icon">💰</div>

          <h3>Affordable Prices</h3>

          <p>
            Find hostels that fit your budget.
          </p>

        </div>

        <div className="feature-card">

          <div className="feature-icon">📞</div>

          <h3>Direct Contact</h3>

          <p>
            Connect directly with hostel owners.
          </p>

        </div>

      </section>
      <section className="hostel-section">

        <h2>Featured Hostels</h2>

        <div className="hostel-grid">

          {featuredHostels.map((hostel) => (

            <div
              className="hostel-card"
              key={hostel.id}
            >

              <img
                src={hostel.image}
                alt={hostel.name}
              />

              <div className="hostel-info">

                <h3>{hostel.name}</h3>

                <p>📍 {hostel.location}</p>

                <p>🚶 {hostel.distance}</p>

                <p className="price">
                  {hostel.rent}
                </p>

                <p className="facility-text">
                  {hostel.extra}
                </p>

                <Link to="/login">

                  <button>
                    View Details
                  </button>

                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

      <section className="why-stubo">

        <h2>
          Why Choose STUBO?
        </h2>

        <div className="why-grid">

          <div className="why-card">

            <h3>100% Verified</h3>

            <p>
              No fake listings.
            </p>

          </div>

          <div className="why-card">

            <h3>Easy Booking</h3>

            <p>
              Book hostel in minutes.
            </p>

          </div>

          <div className="why-card">

            <h3>Trusted Owners</h3>
           <p>Contact verified hostel owners directly.</p>

          </div>

        </div>

      </section>
      <section className="stats-section">

        <div className="stat-box">

          <h2>50+</h2>

          <p>Verified Hostels</p>

        </div>

        <div className="stat-box">

          <h2>📍</h2>

          <p>Near GLA University, Mathura</p>

        </div>

        <div className="stat-box">

          <h2>24/7</h2>

          <p>Support</p>

        </div>

        <div className="stat-box">

          <h2>100%</h2>

          <p>Verified Owners</p>

        </div>

      </section>

      <section className="cta-section">

        <div className="cta-card">

          <h2>
            Ready to Find Your Hostel?
          </h2>

          <p>
            Join STUBO today and discover verified hostels
            near your college.
          </p>

          <div className="cta-buttons">

            <Link to="/login">

              <button className="student-btn">
                Student Login
              </button>

            </Link>

            <Link to="/owner-login">

              <button className="owner-btn">
                Owner Login
              </button>

            </Link>

          </div>

        </div>

      </section>

      <footer className="footer">

        <div className="footer-content">

          <div>

            <h3>STUBO</h3>

            <p>
              India's Smart Hostel Booking Platform.
            </p>

          </div>

          <div>

            <h3>Quick Links</h3>

            <Link to="/">Home</Link><br />

            <Link to="/hostels">Hostels</Link><br />

            <Link to="/login">Student Login</Link><br />

            <Link to="/owner-login">Owner Login</Link>

          </div>

          <div>

            <h3>Contact</h3>

            <p>📍 Mathura, Uttar Pradesh</p>

            <p>📧 support@stubo.in</p>

            <p>📞 +91 XXXXXXXXXX</p>

          </div>

        </div>

        <hr />
        <p className="copyright">

          © 2026 STUBO. All Rights Reserved.

        </p>

      </footer>

    </>

  );

}

export default Home;