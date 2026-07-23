import { Link, useNavigate } from "react-router-dom";
import "../css/dashboard.css";

function OwnerDashboard() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("role");

    alert("Logged Out Successfully!");

    navigate("/login?role=owner");

  };

  return (

    <section className="student-dashboard">

      {/* Hero Section */}

      <div className="dashboard-hero">

        <h1>
          👋 Welcome Back,
          <span> Owner</span>
        </h1>

        <h2>
          Manage Your Hostel with STUBO
        </h2>

        <p>
          Welcome to the STUBO Owner Portal.
          Manage your hostel, update your profile and
          connect with thousands of students around
          GLA University.
        </p>

      </div>

      {/* Dashboard Cards */}

      <div className="dashboard-grid">

        {/* My Hostel */}

        <div className="dashboard-card">

          <h2>🏠 My Hostel</h2>

          <p>
            View your hostel details.
            <br />
            If your hostel is already listed on STUBO,
            you can manage it from here.
          </p>

          <Link to="/my-hostels">
            <button>View Hostel</button>
          </Link>

        </div>

        {/* My Profile */}

        <div className="dashboard-card">

          <h2>👤 My Profile</h2>

          <p>
            View and update your owner profile.
          </p>

          <Link to="/owner-profile">
            <button>View Profile</button>
          </Link>

        </div>

        {/* Settings */}

        <div className="dashboard-card">

          <h2>⚙️ Settings</h2>

          <p>
            Manage your account settings.
            <br />
            <strong>(Coming Soon)</strong>
          </p>

          <Link to="/owner-settings">
            <button>Open</button>
          </Link>

        </div>

        {/* Contact STUBO */}

        <div className="dashboard-card">

          <h2>📞 Contact STUBO</h2>

          <p>
            Want to list or claim your hostel?
            <br />
            Contact STUBO Team.
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

      </div>

      {/* Footer */}

      <div className="dashboard-footer">

        <p>
          🏢 STUBO Owner Portal • Trusted by GLA Students • Secure Platform
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

export default OwnerDashboard;