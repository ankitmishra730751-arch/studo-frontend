import { Link } from "react-router-dom";
function HostelDetails() {
  return (
    <div>
      <h1>🏠 Royal Boys Hostel</h1>

      <p>📍 Mathura</p>
      <p>💰 ₹5000 / Month</p>
      <p>🛏️ 2 Seater Room</p>
      <p>📶 Free WiFi</p>
      <p>🍛 Food Available</p>
      <p>🚗 Parking Available</p>
      <p>📞 Contact: 9876543210</p>
      <Link to="/booking"
      state={{ hostelId: 1 }}>
        <button onClick={() => alert("Button Clicked")}>
  Book Now
</button>
</Link>
    </div>
  );
}

export default HostelDetails;