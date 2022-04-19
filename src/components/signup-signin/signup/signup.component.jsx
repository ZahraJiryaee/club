import React, { useState } from "react";

const Signup = ({ setSignupMode }) => {
  const [signinSignupStages, setSigninSignupStages] = useState(1);

  const [password1Visible, setPassword1Visible] = useState(false);
  const [password2Visible, setPassword2Visible] = useState(false);

  const [signupMobileNumber, setSignupMobileNumber] = useState("");
  const [disableSubmitPhase1, setDisableSubmitPhase1] = useState(true);

  const handlePassword1VisibleIconToggle = () => {
    setPassword1Visible(!password1Visible);
  };
  const handlePassword2VisibleIconToggle = () => {
    setPassword2Visible(!password2Visible);
  };

  const handleSignUp_Phase1 = () => {
    //   user/signup/verify/request
    // take user mobile number, generate otp
    setSigninSignupStages(2);
  };

  const handleSignUp_Phase2 = () => {
    //   user/signup/verify
    // verify mobile number & opt
    setSigninSignupStages(3);
  };

  const handleSignUp_Phase3 = () => {
    //   user/signup
    //   set password for account
  };

  const handleSignupMobileNumberChange = (event) => {
    const { value, maxLength } = event.target;
    const mobileNumber = value.slice(0, maxLength);
    setSignupMobileNumber(mobileNumber);
    setDisableSubmitPhase1(mobileNumber.length === 11 ? false : true);
  };

  return (
    <React.Fragment>
      {/* ------------------- SignUp Phase 1 -------------------- */}
      {signinSignupStages === 1 && (
        <>
          <span className="text-right bolder-txt space-padding--up--30">
            ثبت نام
          </span>
          <span className="text-right lighter-txt space-padding--up--20">
            شماره موبایل خود را وارد نمایید
          </span>

          <div className="signup-signin-input-container">
            <input
              className="signup-signin-input space-margin--up--30"
              type="number"
              maxLength="11"
              placeholder="مثلا ۰۹۱۲۱۲۳۴۵۶۷"
              value={signupMobileNumber}
              onChange={(e) => handleSignupMobileNumberChange(e)}
              required
            />
            <i
              className="fa fa-mobile fa-xs input-mobile-icon"
              aria-hidden="true"
            ></i>
          </div>

          <button
            className={`btn space-margin--up--65 ${
              disableSubmitPhase1 ? "disabled" : ""
            }`}
            onClick={handleSignUp_Phase1}
            disabled={disableSubmitPhase1}
          >
            ثبت نام
          </button>
        </>
      )}
      {/* ------------------- SignUp Phase 2 -------------------- */}
      {signinSignupStages === 2 && (
        <>
          <span className="text-right bolder-txt space-padding--up--30">
            کد تائید را وارد نمایید
          </span>
          <span className="text-right lighter-txt space-padding--up--20">
            کد تائید برای شماره موبایل {signupMobileNumber} ارسال گردید
          </span>

          <div className="signup-signin-input-container">
            <input
              className="signup-signin-input space-margin--up--30"
              type="number"
            />
            <i
              className="fa fa-mobile fa-xs input-mobile-icon"
              aria-hidden="true"
            ></i>
          </div>

          <button
            className="btn space-margin--up--65"
            onClick={handleSignUp_Phase2}
          >
            ثبت نام
          </button>
        </>
      )}
      {/* ------------------- SignUp Phase 3 -------------------- */}
      {signinSignupStages === 3 && (
        <>
          <span className="text-right bolder-txt space-padding--up--15">
            تنظیم کلمه عبور
          </span>
          {/* set password */}
          <span className="text-right lighter-txt space-padding--up--25">
            کلمه عبور <span className="compulsory-txt">(اجباری)</span>
          </span>
          <div className="signup-signin-input-container">
            <input
              className="signup-signin-input space-margin--up--10"
              type={`${password1Visible ? "text" : "password"}`}
            />
            <i
              className={`fa fa-eye${
                !password1Visible ? "-slash" : ""
              } input-eye-icon`}
              aria-hidden="true"
              onClick={handlePassword1VisibleIconToggle}
            ></i>
          </div>
          {/* repeat password */}
          <span className="text-right lighter-txt space-padding--up--25">
            تکرار کلمه عبور <span className="compulsory-txt">(اجباری)</span>
          </span>
          <div className="signup-signin-input-container">
            <input
              className="signup-signin-input space-margin--up--10"
              type={`${password2Visible ? "text" : "password"}`}
            />
            <i
              className={`fa fa-eye${
                !password2Visible ? "-slash" : ""
              } input-eye-icon`}
              aria-hidden="true"
              onClick={handlePassword2VisibleIconToggle}
            ></i>
          </div>
          {/* referral code */}
          <div className="referral-container space-padding--up--35">
            <span className="bolder-txt">ورود کد معرف</span>
            <input className="referral-input" type="text" />
          </div>
          <p className="referral-txt">
            کد معرفتان را وارد کنید و هردو شانس چرخوندن گردونه را دریافت نمایید
          </p>

          {/* submit btn */}
          <button
            className="btn space-margin--up--25"
            onClick={handleSignUp_Phase3}
          >
            ثبت نام
          </button>
        </>
      )}
      <p className="switch-between-signin-signup-text">
        اگر در مدریک کلاب حساب کاربری دارید،
        <span className="link" onClick={() => setSignupMode(false)}>
          {" "}
          وارد شوید
        </span>
      </p>
    </React.Fragment>
  );
};

export default Signup;
