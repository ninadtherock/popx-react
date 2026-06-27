import "./Button.css";

function Button({
  title,
  onClick,
  type = "button",
  variant = "primary",
}) {
  return (
    <button
      type={type}
      className={`btn ${variant}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;