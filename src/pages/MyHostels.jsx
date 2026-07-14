import royal from "../assets/royal.jpg";
import krishna from "../assets/krishna.jpg";

function MyHostels() {
  return (
    <div>

      <h1>🏠 My Hostels</h1>

      <div className="hostel-cards">

        <div className="card">
          <img src={royal} alt="Royal Hostel" className="hostel-image" />
          <h3>Royal Boys Hostel</h3>
          <p>📍 Mathura</p>
          <p>₹5000 / Month</p>
          <p>⭐ 4.8</p>
        </div>

        <div className="card">
          <img src={krishna} alt="Krishna PG" className="hostel-image" />
          <h3>Krishna PG</h3>
          <p>📍 Vrindavan</p>
          <p>₹4500 / Month</p>
          <p>⭐ 4.6</p>
        </div>

      </div>

    </div>
  );
}

export default MyHostels;