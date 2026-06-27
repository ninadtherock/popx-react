import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import InputField from "../components/InputField";

function Login() {

  const navigate = useNavigate();

  return (
    <div className="login-page">

      <h1 className="login-title">
        Signin to your
        <br />
        PopX account
      </h1>

      <p className="login-description">
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit.
      </p>

      <InputField
        label="Email Address"
        placeholder="Enter email address"
        required
      />

      <InputField
        label="Password"
        type="password"
        placeholder="Enter password"
        required
      />

      <button
        className="login-btn"
        onClick={() => navigate("/account")}
      >
        Login
      </button>

    </div>
  );
}

export default Login;