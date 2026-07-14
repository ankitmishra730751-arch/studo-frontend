import { useLocation } from "react-router-dom";
import royal from "../assets/royal.jpg";
import krishna from "../assets/krishna.jpg";
import gla from "../assets/gla.jpg";

function Hostels() {
  const location = useLocation();

  const city = new URLSearchParams(location.search)
    .get("city")
    ?.toLowerCase();
    const price = new URLSearchParams(location.search).get("price");

  return (
    <div>
      <h1>Available Hostels</h1>

      {(!city || "mathura".includes(city)) && (
        <div className="card">
          <img src={royal} alt="Royal Boys Hostel" className="hostel-img" />
          <h3>🏠 Royal Boys Hostel</h3>
          <p>📍 Mathura</p>
          <p>₹5000 / Month</p>
          <p>WiFi • Food • AC • Parking</p>
        </div>
      )}

      {(!city || "vrindavan".includes(city)) && (
        <div className="card">
          <img src={krishna} alt="Krishna PG" className="hostel-img" />
          <h3>🏠 Krishna PG</h3>
          <p>📍 Vrindavan</p>
          <p>₹4500 / Month</p>
          <p>WiFi • Food • Laundry</p>
        </div>
      )}

      {(!city || "mathura".includes(city)) && (
        <div className="card">
          <img src={gla} alt="GLA Boys Hostel" className="hostel-img" />
          <h3>🏠 GLA Boys Hostel</h3>
          <p>📍 Mathura</p>
          <p>₹6000 / Month</p>
          <p>AC • WiFi • Parking • Gym</p>
        </div>
      )}
    </div>
  );
}

export default Hostels;