import Header from "../components/Header";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";

import "./bookingPage.css";
import { useReducer } from "react";

const BookingPage = () => {
  // const initializeTimes = () => {
  //   return [
  //     { label: "17:00", value: "17:00" },
  //     { label: "18:00", value: "18:00" },
  //     { label: "19:00", value: "19:00" },
  //     { label: "20:00", value: "20:00" },
  //     { label: "21:00", value: "21:00" },
  //     { label: "22:00", value: "22:00" },
  //   ];
  // };

  const initializeTimes = () => {
    return [
      { label: "17:00", value: "17:00" },
      { label: "18:00", value: "18:00" },
      { label: "19:00", value: "19:00" },
      { label: "20:00", value: "20:00" },
      { label: "21:00", value: "21:00" },
      { label: "22:00", value: "22:00" },
    ];
  };

  const updateTimes = (state, action) => {
    // console.log(state);
    // console.log("action:", action);
    return [
      { label: "17:00", value: "17:00" },
      { label: "18:00", value: "18:00" },
      { label: "19:00", value: "19:00" },
      { label: "20:00", value: "20:00" },
      { label: "21:00", value: "21:00" },
      { label: "22:00", value: "22:00" },
    ];
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
