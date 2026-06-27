import "./Input.css";

function InputField({
  label,
  placeholder,
  type = "text",
  required = false
}) {
  return (
    <div className="input-container">

      <label className="input-label">
        {label}
        {required && <span className="required">*</span>}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="input-field"
      />

    </div>
  );
}

export default InputField;