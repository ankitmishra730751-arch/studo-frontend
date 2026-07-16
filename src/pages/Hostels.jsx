import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Hostels() {
  const location = useLocation();

  const city = new URLSearchParams(location.search)
    .get("city")
    ?.toLowerCase();

  const hostels = [
    {
      id: 1,
      name: "Neha Flat",
      image:
        "https://res.cloudinary.com/ktatmqjd/image/upload/v1784145180/neha-flats-2.jpg_ysu3jo.jpg",
      location: "Near GLA University, Mathura",
      distance: "🚶 5 min away",
      rent: "₹12,000 / Month",
      facilities: "❄️ AC • WiFi • Food",
    },
    {
      id: 2,
      name: "Cozy Girls Hostel",
      images:
  "https://res.cloudinary.com/ktatmqjd/image/upload/v1784145623/Cozy-girls-hostels-1.jpg_z7tg5s.jpg",
      location: "Near GLA University, Mathura",
      distance: "🚶 2 min away",
      rent: "₹10,000 / Month",
      facilities: "👧 Girls Hostel • WiFi • Food",
    },
    {
      id: 3,
      name: "Rana Boys Hostel",
      image:
        "https://res.cloudinary.com/ktatmqjd/image/upload/v1784146187/rana-boys-hostels-1.jpg_obatjc.jpg",
      location: "Near GLA University, Mathura",
      distance: "🚶 2 min away",
      rent: "₹8,500 / Month",
      facilities: "👦 Boys Hostel • WiFi • Parking",
    },
  ];

  const filteredHostels = !city
    ? hostels
    : hostels.filter((hostel) =>
        hostel.location.toLowerCase().includes(city)
      );

  return (
    <div className="hostels-page">

      <h1>Available Hostels</h1>

      <div className="hostel-grid">

        {filteredHostels.map((hostel) => (

          <div className="card" key={hostel.id}>

            <img
              src={hostel.image}
              alt={hostel.name}
              className="hostel-img"
            />

            <h3>{hostel.name}</h3>

            <p>📍 {hostel.location}</p>

            <p>{hostel.distance}</p>

            <p className="rent">{hostel.rent}</p>

            <p>{hostel.facilities}</p>

            <Link to={`/hostel-details/${hostel.id}`}>
             <button className="login-btn">
                 👁 View Details
             </button>
             </Link>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Hostels;