import { useEffect, useState } from "react";
import "../css/dashboard.css";

function OwnerProfile() {

  const [owner, setOwner] = useState(null);

  useEffect(() => {

    const token = localStorage.getItem("token");

    fetch("https://studo-backend-q8aw.onrender.com/owners/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setOwner(data))
      .catch((error) => console.log(error));

  }, []);

  if (!owner) {
    return (
      <section className="student-dashboard">
        <h2>Loading...</h2>
      </section>
    );
  }

  return (

    <section className="student-dashboard">

      <div className="dashboard-hero">

        <h1>👤 My Profile</h1>

        <p>
          View your account information.
        </p>

      </div>

      <div className="dashboard-grid">

        <div className="dashboard-card">

          <h2>Owner Details</h2>

          <p><strong>Name:</strong> {owner.ownerName}</p>

          <p><strong>Email:</strong> {owner.email}</p>

          <p><strong>Phone:</strong> {owner.phone}</p>

          <p><strong>Hostel:</strong> {owner.hostelName}</p>

        </div>

      </div>

    </section>

  );

}

export default OwnerProfile;