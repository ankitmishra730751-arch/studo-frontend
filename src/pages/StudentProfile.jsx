import { useEffect, useState } from "react";
import "../css/dashboard.css";

function StudentProfile() {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const token = localStorage.getItem("token");

    fetch("https://studo-backend-q8aw.onrender.com/users/profile", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  if (!user) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div className="dashboard">

      <h1>👤 My Profile</h1>

      <div
        className="dashboard-card"
        style={{
          maxWidth: "650px",
          margin: "0 auto"
        }}
      >

        <h2 style={{ textAlign: "center", marginBottom: "25px" }}>
          👨 Student Information
        </h2>

        <p><strong>👤 Full Name :</strong> {user.name}</p>

        <p><strong>📧 Email :</strong> {user.email}</p>

        <p><strong>📱 Phone :</strong> {user.phone}</p>

        <p><strong>🎓 Role :</strong> {user.role}</p>

        <p><strong>📅 Member Since :</strong> {user.createdAt?.split("T")[0]}</p>

      </div>

    </div>
  );
}

export default StudentProfile;