import { Link } from "react-router-dom";
import "../css/dashboard.css";

function Wishlist() {

  return (

    <div className="dashboard">

      <h1>❤️ My Wishlist</h1>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "30px",
          fontSize: "17px"
        }}
      >
        Save your favourite hostels and access them anytime.
      </p>

      <div
        className="dashboard-card"
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          textAlign: "center"
        }}
      >

        <h2>💔 No Hostels Added Yet</h2>

        <p style={{ lineHeight: "1.8" }}>
          You haven't added any hostels to your wishlist yet.
          <br />
          Explore hostels and tap the ❤️ icon to save your favourite hostels.
        </p>

        <Link to="/all-hostels">

          <button
            style={{
              marginTop: "20px"
            }}
          >
            🏠 Explore Hostels
          </button>

        </Link>

      </div>

    </div>

  );

}

export default Wishlist;