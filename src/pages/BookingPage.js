import Header from "../components/Header";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";

import "./bookingPage.css";
import { useState } from "react";

const BookingPage = () => {
  const [availableTimes] = useState([
    { label: "17:00", value: "17:00" },
    { label: "18:00", value: "18:00" },
    { label: "19:00", value: "19:00" },
    { label: "20:00", value: "20:00" },
    { label: "21:00", value: "21:00" },
    { label: "22:00", value: "22:00" },
  ]);
  return (
    <>
      <Header />
      <section id="reservation" className="container">
        <BookingForm availableTimes={availableTimes} />
      </section>
      <Footer />
    </>
  );
};

export default BookingPage;
