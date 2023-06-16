import { useEffect, useState } from "react";

const Booked = () => {
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    const bookingData = JSON.parse(localStorage.getItem("bookingData"));
    if (bookingData) {
      setBookingData(bookingData);
    }
  }, []);

  return (
    <section id="boooked" className="container">
      <h3>Booked dates & Times</h3>

      <div className="bookedData">
        <p>Date</p>
        <p>Time</p>
        <p>Guests</p>
        <p>Occasion</p>
      </div>
      {bookingData.map((item) => {
        // TODO : show as table
        return (
          <div className="bookedData">
            <p>{item.resDate}</p>
            <p>{item.resTime}</p>
            <p>{item.guests}</p>
            <p>{item.occasion}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Booked;
