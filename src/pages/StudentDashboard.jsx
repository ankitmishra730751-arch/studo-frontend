import { Link, useNavigate } from "react-router-dom";
import "../css/dashboard.css";

function StudentDashboard() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");

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
          Browse verified hostels near your college,
          compare facilities and connect directly with
          trusted hostel owners.
        </p>

        <Link to="/all-hostels">

          <button className="explore-btn">

            🏠 Explore All Hostels

          </button>

        </Link>

      </div>

      {/* Dashboard Cards */}

      <div className="dashboard-grid">
      <div className="dashboard-card">

          <h2>❤️ Wishlist</h2>

          <p>
            View all your saved favourite hostels.
          </p>

          <Link to="/wishlist">

            <button>
              Open
            </button>

          </Link>

        </div>

        <div className="dashboard-card">

          <h2>📖 My Bookings</h2>

          <p>
            Check your hostel booking status.
          </p>

          <Link to="/my-bookings">

            <button>
              Open
            </button>

          </Link>

        </div>

        <div className="dashboard-card">

          <h2>👤 My Profile</h2>

          <p>
            Update your personal information.
          </p>

          <Link to="/student-profile">

            <button>
              View
            </button>

          </Link>

        </div>

        <div className="dashboard-card">

          <h2>📞 Contact Support</h2>

          <p>
            Need help? Contact the STUBO support team.
          </p>

          <Link to="/contact">

            <button>
              Contact
            </button>

          </Link>

        </div>

        <div className="dashboard-card">

          <h2>⚙️ Settings</h2>

          <p>
            Manage your account settings.
          </p>

          <Link to="/settings">

            <button>
              Open
            </button>

          </Link>

        </div>

      </div>
      {/* Footer */}

      <div className="dashboard-footer">

        <p>
          🏠 Verified Hostels • 🔒 Secure Booking • ⭐ Trusted by Students
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