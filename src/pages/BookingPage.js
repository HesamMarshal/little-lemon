import Header from "../components/Header";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";

import "./bookingPage.css";

const BookingPage = () => {
  return (
    <>
      <Header />
      <section id="reservation" className="container">
        <BookingForm />
      </section>
      <Footer />
    </>
  );
};

export default BookingPage;
