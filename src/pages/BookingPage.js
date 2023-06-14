import { useFormik } from "formik";
import Header from "../components/Header";
import "./booking.css";

const BookingPage = () => {
  // formik Values and Funtions
  const initialValues = {
    date: "",
    time: "",
    number: 1,
    occasion: "Birth",
  };
  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    // 1. managing states
    initialValues,

    // 2. handling form submit
    onSubmit,

    // 3. validation
    // validationSchema,

    // validateOnMount: true,
    // enableReinitialize: true,
  });

  return (
    <>
      <Header></Header>
      <form>
        <div className="formControl">
          <label htmlFor="date">Date</label>
          <input
            type="text"
            {...formik.getFieldProps("date")}
            name="date"
            id="date"
          />
        </div>
        <div className="formControl">
          <label htmlFor="time">Time</label>
          <input
            type="text"
            {...formik.getFieldProps("time")}
            name="time"
            id="time"
          />
        </div>

        <div className="formControl">
          <label htmlFor="number">Number of guests</label>
          <input
            type="text"
            {...formik.getFieldProps("number")}
            name="number"
            id="number"
          />
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
