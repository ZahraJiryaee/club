import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../../../redux/user/user.action";

const Signin = ({ setSignupMode }) => {
  const dispatch = useDispatch();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const [signinMobileNumber, setSigninMobileNumber] = useState("");
  const [signinPassword, setSigninPassword] = useState("");

  const [disableSubmitButton, setDisableSubmitButton] = useState(true);

  const handlePasswordVisibleIconToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignin = async () => {
    //   user/token
    //   user/token/refresh
    const result = await dispatch(login(signinMobileNumber, signinPassword));
    if (result === "success") console.log("Welcome to medrick club");
    else console.log(result);
  };

  const handleSigninMobileNumberChange = (event) => {
    const { value, maxLength } = event.target;
    const mobileNumber = value.slice(0, maxLength);
    setSigninMobileNumber(mobileNumber);
    setDisableSubmitButton(
      signinMobileNumber.length === 11 && signinPassword.length === 8
        ? false
        : true
    );
  };

  const handleSigninPasswordChange = (event) => {
    const { value, minLength } = event.target;
    const mobileNumber = value.slice(0, minLength);
    setSigninPassword(mobileNumber);
    setDisableSubmitButton(
      signinMobileNumber.length === 11 && signinPassword.length === 6
        ? false
        : true
    );
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
          minLength={6}
          value={signinPassword}
          onChange={(e) => handleSigninPasswordChange(e)}
        />
        <i
          className={`fa fa-eye${
            !passwordVisible ? "-slash" : ""
          } input-eye-icon`}
          aria-hidden="true"
          onClick={handlePasswordVisibleIconToggle}
        ></i>
      </div>

      <button
        className={`btn space-margin--up--65 ${
          disableSubmitButton ? "disabled" : ""
        }`}
        onClick={handleSignin}
        disabled={disableSubmitButton}
      >
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
