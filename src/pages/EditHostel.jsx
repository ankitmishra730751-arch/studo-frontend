import { useState } from "react";

function EditHostel() {

  const [hostelName, setHostelName] = useState("Royal Boys Hostel");
  const [city, setCity] = useState("Mathura");
  const [price, setPrice] = useState("5000");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Hostel Updated Successfully!");
  };

  return (
    <div className="booking">

      <h1>✏️ Edit Hostel</h1>

      <form onSubmit={handleSubmit}>

        <input
          value={hostelName}
          onChange={(e)=>setHostelName(e.target.value)}
        />

        <input
          value={city}
          onChange={(e)=>setCity(e.target.value)}
        />

        <input
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
        />

        <button type="submit">
          Update Hostel
        </button>

      </form>

    </div>
  );
}

export default EditHostel;