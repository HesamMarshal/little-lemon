import Header from "../components/Header";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";

import "./bookingPage.css";
import { useReducer } from "react";
import { fetchAPI } from "../api/WebApi";

const BookingPage = () => {
  const initializeTimes = () => {
    const availableTimesArray = fetchAPI(new Date());
    return availableTimesArray.map((item) => {
      return { label: item, value: item };
    });
  };

  const updateTimes = (state, action) => {
    const availableTimes2 = fetchAPI(action);
    return availableTimes2.map((item) => {
      return { label: item, value: item };
    });
  };
  const initialState = initializeTimes();
  const [availableTimes, dispatch] = useReducer(updateTimes, initialState);

  return (
    <>
      <Header />
      <section id="reservation" className="container">
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </section>
      <Footer />
    </>
  );
};

export default BookingPage;
