import "./Button.css";

function Button({ title, light = false, onClick, type = "button" }) {
  return (
    <button
      type={type}
      className={light ? "btn btn-light" : "btn btn-primary"}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;