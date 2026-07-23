import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

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
import OwnerProfile from "./pages/OwnerProfile";

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

        <Route
          path="/student-dashboard"
          element={
            <ProtectedRoute>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student-profile"
          element={
            <ProtectedRoute>
              <StudentProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-bookings"
          element={
            <ProtectedRoute>
              <MyBookings />
            </ProtectedRoute>
          }
        />

        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          }
        />

        {/* Owner */}
        <Route path="/owner-register" element={<OwnerRegister />} />

        <Route
          path="/owner-dashboard"
          element={
            <ProtectedRoute>
              <OwnerDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/owner-profile" element={<OwnerProfile />} />

        <Route
          path="/my-hostels"
          element={
            <ProtectedRoute>
              <MyHostels />
            </ProtectedRoute>
          }
        />

        <Route
          path="/edit-hostel"
          element={
            <ProtectedRoute>
              <EditHostel />
            </ProtectedRoute>
          }
        />

        <Route
          path="/owner-booking"
          element={
            <ProtectedRoute>
              <OwnerBooking />
            </ProtectedRoute>
          }
        />

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