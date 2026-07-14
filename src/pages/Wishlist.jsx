import { Link } from "react-router-dom";

function Wishlist() {
  return (
    <div className="dashboard">
      <h1>❤️ Wishlist</h1>

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <h2>🏠 Royal Boys Hostel</h2>
          <p>📍 Mathura</p>
          <p>💰 ₹5000 / Month</p>

          <Link to="/hostel-details">
            <button>View Details</button>
          </Link>
        </div>

        <div className="dashboard-card">
          <h2>🏠 City Hostel</h2>
          <p>📍 Agra</p>
          <p>💰 ₹6500 / Month</p>

          <Link to="/hostel-details">
            <button>View Details</button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Wishlist;