function MyBookings() {
  return (
    <div className="dashboard">
      <h1>📖 My Bookings</h1>

      <table className="booking-table">
        <thead>
          <tr>
            <th>Hostel</th>
            <th>Room</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Royal Boys Hostel</td>
            <td>2 Seater</td>
            <td>Approved ✅</td>
          </tr>

          <tr>
            <td>City Hostel</td>
            <td>1 Seater</td>
            <td>Pending ⏳</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MyBookings;