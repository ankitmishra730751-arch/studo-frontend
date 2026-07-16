import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";


import Home from "./pages/Home";

import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import StudentProfile from "./pages/StudentProfile";
import MyBookings from "./pages/MyBookings";
import Wishlist from "./pages/Wishlist";
import AllHostels from "./pages/AllHostels";


import OwnerRegister from "./pages/OwnerRegister";
import OwnerDashboard from "./pages/OwnerDashboard";
import MyHostels from "./pages/MyHostels";
import EditHostel from "./pages/EditHostel";
import OwnerBooking from "./pages/OwnerBooking";

import Hostels from "./pages/Hostels";
import HostelDetails from "./pages/HostelDetails";
import Booking from "./pages/Booking";

function App() {
  return (
    <div className="app">

      <Navbar />

      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Student */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/student-profile" element={<StudentProfile />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/wishlist" element={<Wishlist />} />

        {/* Owner */}
        <Route path="/owner-register" element={<OwnerRegister />} />
        <Route path="/owner-dashboard" element={<OwnerDashboard />} />
        <Route path="/my-hostels" element={<MyHostels />} />
        <Route path="/edit-hostel" element={<EditHostel />} />
        <Route path="/owner-booking" element={<OwnerBooking />} />

        {/* Hostels */}
        <Route path="/hostels" element={<Hostels />} />
        <Route path="/hostel-details/:id" element={<HostelDetails />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/all-hostels" element={<AllHostels />} />

      </Routes>

    </div>
  );
}

export default App;