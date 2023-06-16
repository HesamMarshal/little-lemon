import { useState } from "react";
import "./booking.css";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
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
    submitForm({ ...formValues });
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
        <div className="formControl">
          <label htmlFor="resDate">Choose date</label>
          <input
            type="date"
            id="resDate"
            name="resDate"
            value={formValues.resDate}
            onChange={selectDate}
          />
        </div>

        <div className="formControl">
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
        </div>

        <div className="formControl">
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
        </div>
        <div className="formControl">
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
        </div>
        <button type="submit"> Make Your reservation</button>
      </form>
    </>
  );
};

export default BookingForm;
