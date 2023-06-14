import Header from "../components/Header";
import "./booking.css";

const BookingPage = () => {
  return (
    <>
      <Header></Header>
      <form>
        <div className="formControl">
          <label>Date</label>
          <input type="text" />
        </div>
        <div className="formControl">
          <label>Time</label>
          <input type="text" />
        </div>
        <div className="formControl">
          <label>Number of guests</label>
          <input type="text" />
        </div>

        <div className="formControl">
          <label>Occasion</label>
          <input type="text" />
        </div>
        <button type="submit">Reserve</button>
      </form>
    </>
  );
};

export default BookingPage;
