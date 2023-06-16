import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBookingPage from "./pages/ConfirmedBookingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} exact="true" />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/confirm" element={<ConfirmedBookingPage />} />
    </Routes>
  );
}

export default App;
