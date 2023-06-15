import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

import Input from "../common/Input";
import SelectComponent from "../common/SelectComponent";

import "./reservationForm.css";

const BookingForm = () => {
  const [availableTimes] = useState([
    { label: "17:00", value: "17:00" },
    { label: "18:00", value: "18:00" },
    { label: "19:00", value: "19:00" },
    { label: "20:00", value: "20:00" },
    { label: "21:00", value: "21:00" },
    { label: "22:00", value: "22:00" },
  ]);

  const [ocassioOptions] = useState([
    { label: "Birthday", value: "Birthday" },
    { label: "Anniversary", value: "Anniversary" },
  ]);
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
    guests: Yup.number().required("Number of Guests is requierd!").nullable(),
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
    <>
      <h2>Book Now</h2>

      <form onSubmit={formik.handleSubmit}>
        <Input label="Choose date" name="resDate" formik={formik} type="date" />
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
        <button type="submit" disabled={!formik.isValid}>
          Make Your reservation
        </button>
      </form>
    </>
  );
};

export default BookingForm;
