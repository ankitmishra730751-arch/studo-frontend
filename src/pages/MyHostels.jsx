import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/hostel.css";
import "../css/AllHostels.css";

function MyHostels() {

  const [hostel, setHostel] = useState(null);

  useEffect(() => {

    const token = localStorage.getItem("token");

    fetch("https://studo-backend-q8aw.onrender.com/owners/my-hostel", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setHostel(data))
      .catch((error) => console.log(error));

  }, []);

  return (

    <div className="hostels-page">

      <h1>🏠 My Hostel</h1>

      {!hostel ? (

        <div className="card">

          <h2>No Hostel Linked</h2>

          <p>
            Your hostel is not linked with your account yet.
          </p>

          <p>
            Contact STUBO to verify your hostel.
          </p>

        </div>

      ) : (

        <div className="card">

          <img
            src={hostel.imageUrl}
            alt={hostel.name}
            className="hostel-img"
          />

          <h2>{hostel.name}</h2>

          <p>⭐ {hostel.rating}</p>

          <p>📍 {hostel.location}</p>

          <p>💰 {hostel.rent}</p>

          <p>🏠 {hostel.hostelType}</p>

          <p>🛏 {hostel.sharingType}</p>

          <Link to={`/hostel-details/${hostel.id}`}>
            <button className="view-btn">
              View Details
            </button>
          </Link>

        </div>

      )}

    </div>

  );
}

export default MyHostels;