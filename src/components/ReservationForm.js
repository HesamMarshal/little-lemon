import { useFormik } from "formik";
import * as Yup from "yup";

import "./reservationForm.css";

const ReservationForm = () => {
  // formik Values and Funtions
  const initialValues = {
    resDate: "",
    resTime: "",
    guests: 1,
    occasion: "Birth",
  };
  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    resDate: Yup.string().required("Date is requierd!"),
    resTime: Yup.string().required("Time is required!"),
    guests: Yup.string().required("Number of Guests is requierd!").nullable(),
    occasion: Yup.string().required("Select your nationality"),
  });

  const formik = useFormik({
    // 1. managing states
    initialValues,

    // 2. handling form submit
    onSubmit,

    // 3. validation
    validationSchema,

    // validateOnMount: true,
    // enableReinitialize: true,
  });

  return (
    <form>
      <div className="formControl">
        <label htmlFor="resDate">Choose date</label>
        <input
          type="date"
          {...formik.getFieldProps("resDate")}
          name="resDate"
          id="resDate"
        />
        {formik.errors.resDate && formik.touched.resDate && (
          <div className="error">{formik.errors.resDate}</div>
        )}
      </div>
      <div className="formControl">
        <label htmlFor="resTime">Time</label>

        <select
          {...formik.getFieldProps("resTime")}
          name="resTime"
          id="resTime"
        >
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>

        {formik.errors.resTime && formik.touched.resTime && (
          <div className="error">{formik.errors.resTime}</div>
        )}
      </div>

      <div className="formControl">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          {...formik.getFieldProps("guests")}
          name="guests"
          id="guests"
          placeholder="1"
          min="1"
          max="10"
        />
        {formik.errors.guests && formik.touched.guests && (
          <div className="error">{formik.errors.guests}</div>
        )}
      </div>

      <div className="formControl">
        <label>occasion</label>
        <select id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        {formik.errors.guests && formik.touched.guests && (
          <div className="error">{formik.errors.guests}</div>
        )}
      </div>
      <button type="submit" disabled={!formik.isValid}>
        Make Your reservation
      </button>
    </form>
  );
};

export default ReservationForm;
