import Header from "../components/Header";
import BookingForm from "../components/Booking/BookingForm";
import Footer from "../components/Footer";

import "./bookingPage.css";

import Booked from "../components/Booking/Booked";

const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
  return (
    <>
      <Header />
      <section id="reservation" className="container">
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </section>
      <Booked />
      <Footer />
    </>
  );
};

export default BookingPage;
