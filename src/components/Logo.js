import LogoImage from "../assets/images/logo.png";

const Logo = () => (
  <div>
    <div className="navbar-logo-image">
      <img className="navbar-logo" alt="Logo" src={LogoImage} />
    </div>
    <div className="navbar-logo-text">
      <h3>مدریک کلاب</h3>
    </div>
  </div>
);

export default Logo;
