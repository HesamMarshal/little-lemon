import Header from "../components/Header";
import BookingForm from "../components/Booking/BookingForm";
import Footer from "../components/Footer";

import "./bookingPage.css";
import { useEffect, useReducer, useState } from "react";
import { fetchAPI, submitAPI } from "../api/WebApi";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
  const navigate = useNavigate();

  const [bookingData, setBookingData] = useState([]);

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

  const submitForm = (formData) => {
    const result = submitAPI(formData);

    if (result) {
      const oldBooking = [...bookingData];
      oldBooking.push(formData);
      console.log(oldBooking);
      setBookingData(oldBooking);

      navigate("/confirm");
    }
  };

  useEffect(() => {
    localStorage.setItem("bookingData", JSON.stringify(bookingData));
  }, [bookingData]);

  const initialState = initializeTimes();
  const [availableTimes, dispatch] = useReducer(updateTimes, initialState);

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
      <Footer />
    </>
  );
};

export default BookingPage;
