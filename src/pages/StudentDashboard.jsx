import { Link, useNavigate } from "react-router-dom";
import "../css/dashboard.css";

function StudentDashboard() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("role");

    navigate("/login");
  };

  return (

    <section className="student-dashboard">

      {/* Hero Section */}

      <div className="dashboard-hero">

        <h1>
          👋 Welcome Back to <span>STUBO</span>
        </h1>

        <h2>
          Find Your Perfect Hostel
        </h2>

        <p>
          Discover verified hostels near GLA University,
          compare facilities, check room details and
          connect directly with trusted hostel owners.
        </p>

        <Link to="/all-hostels">

          <button className="explore-btn">
            🏠 Explore All Hostels
          </button>

        </Link>

      </div>

      {/* Dashboard Cards */}

      <div className="dashboard-grid">

        {/* Wishlist */}

        <div className="dashboard-card">

          <h2>❤️ Wishlist</h2>

          <p>
            Save your favourite hostels and access them anytime.
          </p>

          <Link to="/wishlist">
            <button>Open Wishlist</button>
          </Link>

        </div>

        {/* My Bookings */}

        <div className="dashboard-card">

          <h2>📖 My Bookings</h2>

          <p>
            View your hostel booking history.
            <br />
            <strong>(Coming Soon)</strong>
          </p>

          <Link to="/my-bookings">
            <button>Open</button>
          </Link>

        </div>
        {/* My Profile */}

        <div className="dashboard-card">

          <h2>👤 My Profile</h2>

          <p>
            View and manage your personal information.
            <br />
            <strong>(Profile will be connected soon)</strong>
          </p>

          <Link to="/student-profile">
            <button>View Profile</button>
          </Link>

        </div>

        {/* Contact Support */}

        <div className="dashboard-card">

          <h2>📞 Contact STUBO Support</h2>

          <p>
            Need help finding a hostel or facing any issue?
          </p>

          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              marginTop: "15px",
              flexWrap: "wrap"
            }}
          >

            <a
              href="tel:7307518516"
              style={{ textDecoration: "none" }}
            >
              <button>📞 Call</button>
            </a>

            <a
              href="https://wa.me/917307518516"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button>💬 WhatsApp</button>
            </a>

          </div>

        </div>

        {/* Add Hostel */}

        <div className="dashboard-card">

          <h2>🏢 Add Your Hostel on STUBO</h2>

          <p>
            Are you a hostel owner?
            <br />
            List your hostel on STUBO and reach thousands of students near GLA University.
          </p>

          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              marginTop: "15px",
              flexWrap: "wrap"
            }}
          >

            <a
              href="tel:7307518516"
              style={{ textDecoration: "none" }}
            >
              <button>📞 Call</button>
            </a>

            <a
              href="https://wa.me/917307518516"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button>💬 WhatsApp</button>
            </a>

          </div>

        </div>

        {/* Settings */}

        <div className="dashboard-card">

          <h2>⚙️ Settings</h2>

          <p>
            Manage your account preferences.
            <br />
            <strong>(Coming Soon)</strong>
          </p>

          <Link to="/settings">
            <button>Open</button>
          </Link>

        </div>

      </div>
      {/* Footer */}

      <div className="dashboard-footer">

        <p>
          🏠 Verified Hostels • 📞 Direct Owner Contact • 🔒 Secure Platform • ⭐ Built for Students
        </p>

      </div>

      {/* Logout */}

      <div className="logout-section">

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          🚪 Logout
        </button>

      </div>

    </section>

  );

}

export default StudentDashboard;