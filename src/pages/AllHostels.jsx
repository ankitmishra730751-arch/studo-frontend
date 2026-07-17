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
      type: "🏠 Boys & Girls & Family Flat",
      sharing: "🛏 1,2,3 Sharing",
      mess: "❌ Mess Not Included"
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
      sharing: "🛏 2,3 Sharing",
      mess: "🍽 Mess Included"
    },
{
  id: 4,
  name: "Vaishnavi Boys Hostel",
  image: "https://res.cloudinary.com/ktatmqjd/image/upload/v1784262084/Vaishnavi-Boys-Hostel-1.jpg_cn0fsb.jpg",
  rating: "⭐ 4.7 (102 Reviews)",
  distance: "📍 2 Min Away from GLA University",
  rent: "₹5,000 / Month",
  type: "🏠 Boys Hostel",
  sharing: "🛏 2 Sharing",
  mess: "❌ Mess Not Included"
},
{
  id: 5,
  name: "Neha Girls Hostel",
  image: "https://res.cloudinary.com/ktatmqjd/image/upload/v1784264070/Neha-Girls-Hostel-1.jpg_qm1q4l.jpg",
  rating: "⭐ 4.7 (89 Reviews)",
  distance: "📍 5 Min Away from GLA University",
  rent: "₹3,500 / Month",
  type: "🏠 Girls Hostel",
  sharing: "🛏 1 / 2 / 3 Sharing",
  mess: "🍽 Mess Available"
},
{
  id: 6,
  name: "Shree Govindam Chhatrawas Nivas",
  image: "https://res.cloudinary.com/ktatmqjd/image/upload/v1784266749/Shree-Govindam-Chhatrawas-Nivas-1.jpg_a7cos8.jpg",
  rating: "⭐ 4.7 (102 Reviews)",
  distance: "📍 4 Min Away from GLA University",
  rent: "₹9,000 / Month",
  type: "🏠 Boys Hostel",
  sharing: "🛏 1 / 2 Sharing",
  mess: "🍽 Mess Included"
},

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