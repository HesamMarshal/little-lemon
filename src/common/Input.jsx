const Input = ({ label, name, formik, placeholder = "", type = "text" }) => {
  return (
    <div className="formControl">
      <label htmlFor={name}>{label}:</label>
      <input
        type={type}
        {...formik.getFieldProps({ name })}
        name={name}
        id={name}
        placeholder={placeholder}
        aria-label={label}
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="error">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
