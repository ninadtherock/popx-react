import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <h1 className="welcome-title">
          Welcome to PopX
        </h1>

        <p className="welcome-text">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <div className="welcome-buttons">
          <Button
            title="Create Account"
            variant="primary"
            onClick={() => navigate("/register")}
          />

          <Button
            title="Already Registered? Login"
            variant="light"
            onClick={() => navigate("/login")}
          />
        </div>
      </div>
    </div>
  );
}

export default Welcome;