import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import InputField from "../components/InputField";

function Register() {
  const navigate = useNavigate();

  return (
    <div className="register-page">

      <h1 className="register-title">
        Create your
        <br />
        PopX account
      </h1>

      <InputField
        label="Full Name"
        placeholder="Marry Doe"
        required
      />

      <InputField
        label="Phone number"
        placeholder="Marry Doe"
        required
      />

      <InputField
        label="Email address"
        placeholder="Marry Doe"
        required
      />

      <InputField
        label="Password"
        type="password"
        placeholder="Marry Doe"
        required
      />

      <InputField
        label="Company name"
        placeholder="Marry Doe"
      />

      <div className="agency-section">

        <p className="agency-title">
          Are you an Agency?<span className="required">*</span>
        </p>

        <div className="radio-group">

          <label className="radio-label">
            <input
              type="radio"
              name="agency"
              defaultChecked
            />
            Yes
          </label>

          <label className="radio-label">
            <input
              type="radio"
              name="agency"
            />
            No
          </label>

        </div>

      </div>

      <div className="register-button">
        <Button
          title="Create Account"
          onClick={() => navigate("/account")}
        />
      </div>

    </div>
  );
}

export default Register;