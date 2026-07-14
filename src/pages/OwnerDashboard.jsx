import { Link, useNavigate } from "react-router-dom";

function OwnerDashboard() {
    const navigate = useNavigate();

 const handleLogout = () => {
  alert("Logged Out Successfully!");
  navigate("/owner-login");
};
  return (
     <div className="dashboard-header">
  <div>
    <h1>🏢 Owner Dashboard</h1>
    <p>Manage your hostels easily.</p>
  </div>

  <button
    className="logout-btn"
    onClick={handleLogout}
  >
    Logout
  </button>
       <div className="stats">

      <div className="stat-card">
      <h2>3</h2>
      <p>Total Hostels</p>
       </div>

       <div className="stat-card">
      <h2>15</h2>
      <p>Total Bookings</p>
      </div>

     <div className="stat-card">
     <h2>₹45,000</h2>
     <p>Monthly Income</p>
     </div>

    </div>

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <h2>➕ Add Hostel</h2>
          <p>Add a new hostel.</p>
            <Link to="/add-hostel">
          <button>Add Hostel</button>
          </Link>
        </div>

        <div className="dashboard-card">
          <h2>📋 My Hostels</h2>
          <p>View all your hostels.</p>
          <Link to="/my-hostels">
          <button>View</button>
          </Link>
        </div>

        <div className="dashboard-card">
          <h2>✏ Edit Hostel</h2>
          <p>Update hostel details.</p>
           <Link to="/edit-hostel">
           <button>Edit</button>
           </Link>
        </div>

        <div className="dashboard-card">
          <h2>🗑 Delete Hostel</h2>
          <p>Remove hostel.</p>
          <button
         onClick={() => {
         if (window.confirm("Are you sure you want to delete this hostel?")) {
          alert("Hostel Deleted Successfully!");
          }
        }}
         >
           Delete
         </button>
        </div>
         <div className="dashboard-card">
          <h2>📋 Bookings</h2>
          <p>Manage student bookings.</p>

          <Link to="/owner-bookings">
          <button>View</button>
          </Link>
          </div>

      </div>

    </div>
  );
}

export default OwnerDashboard;