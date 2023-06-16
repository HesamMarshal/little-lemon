import { useState } from "react";
import "./reservationForm.css";

const Reserve = () => {
  const [reserveValue, setReserveValue] = useState({
    resDate: "",
    resTime: "",
    guests: "",
    occasion: "",
  });

  const [availableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const changeHandler = (e) => {
    setReserveValue({ ...reserveValue, [e.target.name]: e.target.value });
  };
  return (
    <form>
      <div className="formControl">
        <label htmlFor="resDate">Choose date</label>
        <input
          type="date"
          name="resDate"
          id="resDate"
          value={reserveValue.resDate}
          onChange={changeHandler}
        />
      </div>
      <div className="formControl">
        <label htmlFor="resTime">Time</label>
        <select
          name="resTime"
          id="resTime"
          value={reserveValue.resTime}
          onChange={changeHandler}
        >
          {availableTimes.map((t) => (
            <option value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="formControl">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          name="guests"
          id="guests"
          placeholder="1"
          min="1"
          max="10"
          value={reserveValue.guests}
          onChange={changeHandler}
        />
      </div>

      <div className="formControl">
        <label>occasion</label>
        <select
          id="occasion"
          value={reserveValue.occasion}
          onChange={changeHandler}
          name="occasion"
        >
          <option value="birthDay">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>
      </div>
      <button type="submit">Make Your reservation</button>
    </form>
  );
};

export default Reserve;
