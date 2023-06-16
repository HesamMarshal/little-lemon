import Booked from "../components/Booking/Booked";
import ConfirmedBooking from "../components/Booking/ConfirmedBooking";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ConfirmedBookingPage = () => {
  return (
    <>
      <Header />
      <ConfirmedBooking />
      <Booked />
      <Footer />
    </>
  );
};

export default ConfirmedBookingPage;
