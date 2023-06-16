const SelectComponent = ({ selectOptions, name, formik, label }) => {
  return (
    <div className="formControl">
      <label htmlFor={name}>{label}:</label>
      <select name={name} {...formik.getFieldProps({ name })}>
        {selectOptions.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {formik.errors[name] && formik.touched[name] && (
        <div className="error">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default SelectComponent;
