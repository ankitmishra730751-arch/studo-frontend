function OwnerBooking() {
  return (
    <div className="dashboard">

      <h1>📋 Student Bookings</h1>

      <table className="booking-table">

        <thead>
          <tr>
            <th>Student</th>
            <th>Hostel</th>
            <th>Room</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Ankit Mishra</td>
            <td>Royal Boys Hostel</td>
            <td>2 Seater</td>
            <td>Pending</td>

            <td>
              <button>Approve</button>
              <button>Reject</button>
            </td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default OwnerBooking;