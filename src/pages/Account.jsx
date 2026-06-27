import profile from "../assets/profile.png";
import camera from "../assets/camera.png";

function Account() {
  return (
    <div className="account-page">

      <div className="account-header">
        <h2>Account Settings</h2>
      </div>

      <div className="profile-section">

        <div className="profile-image">

          <img
            src={profile}
            alt="Profile"
          />

          <img
            src={camera}
            alt="Camera"
            className="camera-icon"
          />

        </div>

        <div className="profile-details">
          <h3>Marry Doe</h3>
          <p>Marrydoe@gmail.com</p>
        </div>

      </div>

      <p className="about">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
        Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
        Dolore Magna Aliquyam Erat, Sed Diam
      </p>

      <div className="divider"></div>

    </div>
  );
}

export default Account;