import { Link, useNavigate } from "react-router-dom";

function StudentDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
  localStorage.removeItem("token");
  alert("Logged Out Successfully!");
  navigate("/login");
};

  return (
    <div className="dashboard">

      <h1>🎓 Student Dashboard</h1>
      <p>Manage your bookings easily.</p>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <h2>👤 Profile</h2>
          <p>View your profile.</p>

          <Link to="/student-profile">
            <button>Open</button>
          </Link>
        </div>

        <div className="dashboard-card">
          <h2>📖 My Bookings</h2>
          <p>View your hostel bookings.</p>

          <Link to="/my-bookings">
            <button>View</button>
          </Link>
        </div>

        <div className="dashboard-card">
          <h2>❤️ Wishlist</h2>
          <p>Saved hostels.</p>

          <Link to="/wishlist">
            <button>Open</button>
          </Link>
        </div>

      </div>

    </div>
  );
}

export default StudentDashboard;