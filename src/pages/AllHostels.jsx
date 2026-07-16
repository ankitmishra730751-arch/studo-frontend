import { Link } from "react-router-dom";
import "../css/hostel.css";

function AllHostels() {

  const hostels = [

    {
      id: 1,
      name: "Neha Flats",
      image: "https://res.cloudinary.com/ktatmqjd/image/upload/v1784145180/neha-flats-2.jpg_ysu3jo.jpg",
      rating: "⭐ 4.8 (120 Reviews)",
      distance: "📍 5 Min Away from GLA University",
      rent: "₹12,000 / Month",
      type: "🏠 Boys & Girls Hostel",
      sharing: "🛏 2 Sharing",
      mess: "🍽 Mess Included"
    },

    {
      id: 2,
      name: "Cozy Girls Hostel",
      image: "https://res.cloudinary.com/ktatmqjd/image/upload/v1784145623/Cozy-girls-hostels-1.jpg_z7tg5s.jpg",
      rating: "⭐ 4.7 (95 Reviews)",
      distance: "📍 2 Min Away from GLA University",
      rent: "₹10,000 / Month",
      type: "🏠 Girls Hostel",
      sharing: "🛏 2 Sharing",
      mess: "🍽 Mess Included"
    },

    {
      id: 3,
      name: "Rana Boys Hostel",
      image: "https://res.cloudinary.com/ktatmqjd/image/upload/v1784146187/rana-boys-hostels-1.jpg_obatjc.jpg",
      rating: "⭐ 4.6 (88 Reviews)",
      distance: "📍 2 Min Away from GLA University",
      rent: "₹8,500 / Month",
      type: "🏠 Boys Hostel",
      sharing: "🛏 3 Sharing",
      mess: "🍽 Mess Included"
    }

  ];

  return (

    <div className="hostels-page">

      <h1>🏠 All Hostels</h1>

      <p className="hostel-subtitle">
        Find your perfect hostel near GLA University.
      </p>

      <div className="hostel-grid">

        {hostels.map((hostel) => (

          <div className="card" key={hostel.id}>

            <img
              src={hostel.image}
              alt={hostel.name}
              className="hostel-img"
            />

            <h2>{hostel.name}</h2>

            <p>{hostel.rating}</p>

            <p>{hostel.distance}</p>

            <p className="rent">{hostel.rent}</p>

            <p>{hostel.type}</p>

            <p>{hostel.sharing}</p>

            <p>{hostel.mess}</p>

            <Link to={`/hostel-details/${hostel.id}`}>
             <button className="view-btn">
               👁 View Details
         </button>
         </Link>

          </div>

        ))}

      </div>

    </div>

  );

}

export default AllHostels;