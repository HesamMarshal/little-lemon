import { useEffect, useReducer, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import "./App.css";

import { fetchAPI, submitAPI } from "./api/WebApi";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBookingPage from "./pages/ConfirmedBookingPage";

function App() {
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
    console.log("APP", formData);
    const result = submitAPI(formData);

    if (result) {
      const newBooking = [...bookingData];
      newBooking.push(formData);
      setBookingData(newBooking);
      navigate("/confirm");
    }
  };

  useEffect(() => {
    localStorage.setItem("bookingData", JSON.stringify(bookingData));
  }, [bookingData]);

  const initialState = initializeTimes();
  const [availableTimes, dispatch] = useReducer(updateTimes, initialState);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} exact="true" />
      <Route
        path="/booking"
        element={
          <BookingPage
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
          />
        }
      />
      <Route path="/confirm" element={<ConfirmedBookingPage />} />
    </Routes>
  );
}

export default App;
