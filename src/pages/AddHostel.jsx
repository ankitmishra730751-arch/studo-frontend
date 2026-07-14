import { useState } from "react";

function AddHostel() {

  const [hostelName, setHostelName] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [contact, setContact] = useState("");
  const[added, setAdded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAdded(true);
    alert("Hostel Added Successfully!");
  };

  return (
    <div className="booking">

      <h1>🏠 Add Hostel</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Hostel Name"
          value={hostelName}
          onChange={(e)=>setHostelName(e.target.value)}
        />

        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e)=>setCity(e.target.value)}
        />

        <input
          type="number"
          placeholder="Monthly Price"
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
        />

        <input
          type="text"
          placeholder="Contact Number"
          value={contact}
          onChange={(e)=>setContact(e.target.value)}
        />
         <select>
         <option>Boys Hostel</option>
        <option>Girls Hostel</option>
         </select>

         <select>
        <option>1 Seater</option>
        <option>2 Seater</option>
        <option>3 Seater</option>
         <option>4 Seater</option>
        </select>

        <textarea
         placeholder="Hostel Description"
        ></textarea>

        <input type="file" />

        <button type="submit">
          Add Hostel
        </button>
        {added &&(
        <p className="success">
       ✅ Hostel Added Successfully!
       </p>
        )}

      </form>

    </div>
  );
}

export default AddHostel;