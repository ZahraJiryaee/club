import React, { useState } from "react";

const Signin = ({ setSignupMode }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [signinMobileNumber, setSigninMobileNumber] = useState("");

  const handlePasswordVisibleIconToggle = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleSignin = () => {
    //   user/token
    //   user/token/refresh
  };

  const handleSigninMobileNumberChange = (event) => {
    const { value, maxLength } = event.target;
    const mobileNumber = value.slice(0, maxLength);
    setSigninMobileNumber(mobileNumber);
  };

  return (
    <React.Fragment>
      <span className="text-right bolder-txt space-padding--up--30">ورود</span>
      {/* username */}
      <span className="text-right lighter-txt space-padding--up--40">
        نام کاربری <span className="compulsory-txt">(اجباری)</span>
      </span>
      <div className="signup-signin-input-container">
        <input
          className="signup-signin-input space-margin--up--20"
          type="number"
          maxLength={11}
          placeholder="مثلا ۰۹۱۲۱۲۳۴۵۶۷"
          value={signinMobileNumber}
          onChange={(e) => handleSigninMobileNumberChange(e)}
        />
      </div>
      {/* password */}
      <span className="text-right lighter-txt space-padding--up--45">
        کلمه عبور <span className="compulsory-txt">(اجباری)</span>
      </span>
      <div className="signup-signin-input-container">
        <input
          className="signup-signin-input space-margin--up--20"
          type={`${passwordVisible ? "text" : "password"}`}
        />
        <i
          className={`fa fa-eye${
            !passwordVisible ? "-slash" : ""
          } input-eye-icon`}
          aria-hidden="true"
          onClick={handlePasswordVisibleIconToggle}
        ></i>
      </div>

      <button className="btn space-margin--up--65" onClick={handleSignin}>
        ورود
      </button>
      <p className="switch-between-signin-signup-text">
        اگر در مدریک کلاب حساب کاربری ندارید،
        <span className="link" onClick={() => setSignupMode(true)}>
          {" "}
          ثبت نام کنید
        </span>
      </p>
    </React.Fragment>
  );
};

export default Signin;
