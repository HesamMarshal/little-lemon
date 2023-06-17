import Header from "../components/Header";
// import BookingForm from "../components/Booking/BookingForm";
import BookingForm2 from "../components/Booking/BookingForm2";
import Booked from "../components/Booking/Booked";
import Footer from "../components/Footer";

import "./bookingPage.css";

const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
  return (
    <>
      <Header />
      <section id="reservation" className="container">
        {/* <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        /> */}
        <BookingForm2
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
