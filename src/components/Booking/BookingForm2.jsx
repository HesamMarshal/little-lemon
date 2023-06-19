import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "../../common/Input";
import SelectComponent from "../../common/SelectComponent";

import "./booking.css";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const ocassioOptions = [
    { label: "Select an Occasion ...", value: "" },
    { label: "Birthday", value: "birthday" },
    { label: "Anniversary", value: "anniversary" },
    { label: "Engaement", value: "engaement" },
  ];
  // formik Values and Functions
  const initialValues = {
    resDate: "",
    resTime: "",
    guests: 1,
    occasion: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    resDate: Yup.string().required("Date is requierd!"),
    resTime: Yup.string().required("Time is required!"),
    guests: Yup.number().required("Number of Guests is requierd!").nullable(),
    occasion: Yup.string().required("Select the occasion"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const selectDate = (e) => {
    console.log(e.target.value);
    formik.values.resDate = e.target.value;
    const selectedDate = new Date(e.target.value);
    dispatch(selectedDate);
  };

  return (
    <>
      <h2>Book Now</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="formControl">
          <label htmlFor="resDate">Choose date</label>
          <input
            aria-label="Choose date"
            type="date"
            id="resDate"
            name="resDate"
            value={formik.values.resDate}
            onChange={selectDate}
          />
          {formik.errors.resDate && formik.touched.resDate && (
            <div className="error">{formik.errors.resDate}</div>
          )}
        </div>
        <SelectComponent
          label="Choose time"
          selectOptions={availableTimes}
          name="resTime"
          formik={formik}
        />
        <Input
          label="Number of guests"
          name="guests"
          formik={formik}
          type="number"
        />
        <SelectComponent
          label="Occasion"
          selectOptions={ocassioOptions}
          name="occasion"
          formik={formik}
        />
        <button
          type="submit"
          disabled={!formik.isValid}
          aria-label="Make Your reservation"
        >
          Make Your reservation
        </button>
      </form>
    </>
  );
};

export default BookingForm;
