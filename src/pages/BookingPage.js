import Header from "../components/Header";
import ReservationForm from "../components/ReservationForm";
import Footer from "../components/Footer";

import "./bookingPage.css";

const BookingPage = () => {
  return (
    <>
      <Header />
      <section id="reservation">
        <ReservationForm />
      </section>
      <Footer />
    </>
  );
};

export default BookingPage;
