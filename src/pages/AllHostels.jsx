import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/hostel.css";
import "../css/AllHostels.css";

function AllHostels() {

  const [hostels, setHostels] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch("https://studo-backend-q8aw.onrender.com/hostels")
      .then((response) => response.json())
      .then((data) => setHostels(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="hostels-page">

      <h1>🏠 All Hostels</h1>

      <p className="hostel-subtitle">
        Find your perfect hostel near GLA University.
      </p>

      <div className="search-filter">

        <input
          type="text"
          placeholder="🔍 Search Hostel..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-box"
        />

        <div className="filter-buttons">

          <button onClick={() => setFilter("ALL")}>
            All
          </button>

          <button onClick={() => setFilter("BOYS")}>
            Boys
          </button>

          <button onClick={() => setFilter("GIRLS")}>
            Girls
          </button>

          <button onClick={() => setFilter("FAMILY")}>
            Family
          </button>

          <button onClick={() => {
            setFilter("ALL");
            setSearch("");
            setSort("");
          }}>
            Reset
          </button>

        </div>

        <select
          className="sort-box"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="LOW">💰 Price Low → High</option>
          <option value="HIGH">💰 Price High → Low</option>
          <option value="RATING">⭐ Rating High → Low</option>
        </select>

      </div>
      <div className="hostel-grid">

        {hostels
          .filter((hostel) => {

            const matchSearch = hostel.name
              .toLowerCase()
              .includes(search.toLowerCase());

            const matchFilter =
              filter === "ALL" ||
              hostel.hostelType.toUpperCase().includes(filter);

            return matchSearch && matchFilter;

          })

          .sort((a, b) => {

            if (sort === "LOW") {
              return (
                parseInt(a.rent.replace(/\D/g, "")) -
                parseInt(b.rent.replace(/\D/g, ""))
              );
            }

            if (sort === "HIGH") {
              return (
                parseInt(b.rent.replace(/\D/g, "")) -
                parseInt(a.rent.replace(/\D/g, ""))
              );
            }

            if (sort === "RATING") {
              return b.rating - a.rating;
            }

            return 0;

          })

          .map((hostel) => (

            <div className="card" key={hostel.id}>

              <img
                src={hostel.imageUrl}
                alt={hostel.name}
                className="hostel-img"
              />

              <h2>{hostel.name}</h2>

              <p>⭐ {hostel.rating} ({hostel.reviews})</p>

              <p>🚶 {hostel.distance}</p>

              <p className="rent">💰 {hostel.rent}</p>

              <p>🏠 {hostel.hostelType.replaceAll(",", " / ")}</p>

              <p>🛏 {hostel.sharingType.replaceAll(",", " / ")}</p>

              <p>
                {hostel.mess === "Mess Included"
                  ? "🍽️ Mess Included"
                  : hostel.mess === "Mess Not Included"
                  ? "❌ Mess Not Included"
                  : "🍽️ Mess Available"}
              </p>

              <Link to={`/hostel-details/${hostel.id}`}>
                <button className="view-btn">
                  🔍 View Details
                </button>
              </Link>

            </div>

          ))}

      </div>

      {hostels.filter((hostel) => {

        const matchSearch = hostel.name
          .toLowerCase()
          .includes(search.toLowerCase());

        const matchFilter =
          filter === "ALL" ||
          hostel.hostelType.toUpperCase().includes(filter);

        return matchSearch && matchFilter;

      }).length === 0 && (

        <h2
          style={{
            color: "white",
            textAlign: "center",
            marginTop: "40px"
          }}
        >
          😔 No Hostel Found
        </h2>

      )}

    </div>
  );
}

export default AllHostels;