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

        <Button
          title="Create Account"
          onClick={() => navigate("/register")}
        />

        <div className="button-gap"></div>

        <Button
          title="Already Registered? Login"
          light
          onClick={() => navigate("/login")}
        />

      </div>

    </div>
  );
}

export default Welcome;

