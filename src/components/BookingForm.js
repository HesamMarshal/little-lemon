import { useState } from "react";
import "./reservationForm.css";

const BookingForm = ({ availableTimes, dispatch }) => {
  const [formValues, SetFormValues] = useState({
    resDate: "",
    resTime: "17",
    guests: 1,
    occasion: "birthday",
  });

  const [ocassioOptions] = useState([
    { label: "Birthday", value: "Birthday" },
    { label: "Anniversary", value: "Anniversary" },
  ]);

  const changeHandler = (e) => {
    SetFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const selectDate = (e) => {
    changeHandler(e);
    const selectedDate = new Date(e.target.value);
    dispatch(selectedDate);
  };
  return (
    <>
      <h2>Book Now</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="resDate">Choose date</label>
        <input
          type="date"
          id="resDate"
          name="resDate"
          value={formValues.resDate}
          onChange={selectDate}
        />

        <label htmlFor="resTime">Choose time</label>
        <select
          id="resTime"
          name="resTime"
          value={formValues.resTime}
          onChange={changeHandler}
        >
          {availableTimes.map((item) => (
            <option value={item.value} key={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          name="guests"
          value={formValues.guests}
          onChange={changeHandler}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formValues.occasion}
          onChange={changeHandler}
        >
          {ocassioOptions.map((item) => (
            <option value={item.value} key={item.value}>
              {item.label}
            </option>
          ))}
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </>
  );
};

export default BookingForm;
