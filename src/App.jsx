import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Hostels from "./pages/Hostels";
import HostelDetails from "./pages/HostelDetails";
import Booking from "./pages/Booking";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OwnerLogin from "./pages/OwnerLogin";
import OwnerDashboard from "./pages/OwnerDashboard";
import AddHostel from "./pages/AddHostel";
import MyHostels from "./pages/MyHostels";
import EditHostel from "./pages/EditHostel";
import OwnerRegister from "./pages/OwnerRegister";
import OwnerBooking from "./pages/OwnerBooking";
import StudentDashboard from "./pages/StudentDashboard";
import StudentProfile from "./pages/StudentProfile";
import MyBookings from "./pages/MyBookings";
import Wishlist from "./pages/Wishlist";



import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hostels" element={<Hostels />} />
        <Route path="/hostel-details" element={<HostelDetails />} />
        <Route path="/booking" element={<Booking />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/owner-login" element={<OwnerLogin />} />
        <Route path="/owner-dashboard" element={<OwnerDashboard />} />
        <Route path="/add-hostel" element={<AddHostel />} />
        <Route path="/my-hostels" element={<MyHostels />} />
        <Route path="/edit-hostel" element={<EditHostel />} />
        <Route path="/Owner-Register" element={<OwnerRegister />} />
        <Route path="/Owner-booking" element={<OwnerBooking />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/student-profile" element={<StudentProfile />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </>
  );
}

export default App;