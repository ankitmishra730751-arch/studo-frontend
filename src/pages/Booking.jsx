import { useLocation } from "react-router-dom";
import {useState} from "react";
function Booking() {
    const [booked, setBooked] = useState(false);
    const location = useLocation();
    const hostelId = location.state?.hostelId;
    const [roomType, setRoomType] = useState("1 Seater");
    console.log(location.state);
    const [bookingDate, setBookingDate] = useState("");
    const [name, setName] = useState("");
    const[phone, setPhone] = useState("");
    const[email, setEmail] = useState("");

    const handleBooking = async () => {
    const token = localStorage.getItem("token");  
    if(!token){
        alert("Please login first!");
        return;
    }  
    const bookingData = {
    roomType: roomType,
   bookingDate: bookingDate,
   };
    
   console.log("hostelId =" ,hostelId);
  const response = await fetch(`https://studo-backend-q8aw.onrender.com/bookings/add/${hostelId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token,
    },
    body: JSON.stringify(bookingData),
  });

  if (response.ok) {
    setBooked(true);
    alert("Booking Successful!");
  } else {
    alert("Booking Failed!");
  }
};
  return (
    <div className="booking">
      <h1>Book Your Hostel</h1>

      <form
      onSubmit={(e) => {
      e.preventDefault();
       handleBooking();
       }}
       >
        <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
       />
        <br /><br />

        <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        />
        <br /><br />

        <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
       />
        <br /><br />
        <input
        type="date"
        value={bookingDate}
        onChange={(e) => setBookingDate(e.target.value)}
        />
         <br /><br />

        <select
         value={roomType}
         onChange={(e) => setRoomType(e.target.value)}
         >
          <option>1 Seater</option>
          <option>2 Seater</option>
          <option>3 Seater</option>
          <option>4 Seater</option>
        </select>
        <br /><br />

        <button type="submit">Book Now</button>
        {booked && (
    <p className="success">
        ✅ Booking Successful!
    </p>
    )}
      </form>
      <div className="summary">
      <h2>Booking Summary</h2>
      <p><b>Hostel:</b> Royal Boys Hostel</p>
      <p><b>Location:</b> Mathura</p>
      <p><b>Price:</b> ₹5000 / Month</p>
      </div>
    </div>
  );
}

export default Booking;