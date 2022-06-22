import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  signUp_Phase1,
  signUp_Phase2,
  signUp_Phase3,
} from "../../../redux/user/user.action";

import logger from "../../../services/logService";

const Signup = ({ setSignupMode }) => {
  const dispatch = useDispatch();

  const [signinSignupStages, setSigninSignupStages] = useState(1);

  const [password1Visible, setPassword1Visible] = useState(false);
  const [password2Visible, setPassword2Visible] = useState(false);

  const [signupMobileNumber, setSignupMobileNumber] = useState("");
  const [signupOTP, setsignupOTP] = useState("");
  const [signupPassword1, setSignupPassword1] = useState("");
  const [signupPassword2, setSignupPassword2] = useState("");
  const [signupInviterPhoneNumber, setSignupInviterPhoneNumber] = useState("");

  const [disableSubmitButton, setDisableSubmitButton] = useState(true);

  const [disableOTPTimer, setDisableOTPTimer] = useState(true);
  const [otpTimer, setOtpTimer] = useState(false);
  const [counter, setCounter] = useState(120);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (otpTimer) {
      handleTimeConverting(counter);
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      if (!timer) {
        setDisableOTPTimer(false);
        setOtpTimer(false);
      }
      return () => clearInterval(timer);
    }
  }, [otpTimer, counter]);

  const handlePassword1VisibleIconToggle = () => {
    setPassword1Visible(!password1Visible);
  };

  const handlePassword2VisibleIconToggle = () => {
    setPassword2Visible(!password2Visible);
  };

  const handleSignUp_Phase1 = async () => {
    const result = await dispatch(signUp_Phase1(signupMobileNumber));
    if (result === "success") {
      setDisableSubmitButton(true);
      setOtpTimer(true);
      setSigninSignupStages(2);
    }
  };

  const handleSignUp_Phase2 = async () => {
    const result = await dispatch(signUp_Phase2(signupMobileNumber, signupOTP));
    if (result === "success") {
      setDisableSubmitButton(true);
      setSigninSignupStages(3);
      setOtpTimer(false);
    }
  };

  const handleSignUp_Phase3 = () => {
    //check this function works or not
    let inviterCode = "";
    const hasInviterCode =
      signupInviterPhoneNumber !== "" && signupInviterPhoneNumber.length === 11
        ? true
        : false;
    if (hasInviterCode) inviterCode = signupInviterPhoneNumber;
    if (signupPassword1 === signupPassword2) {
      const result = dispatch(
        signUp_Phase3(
          signupMobileNumber,
          signupPassword1,
          hasInviterCode,
          inviterCode
        )
      );
      result.then((response) => {
        if (response.status === 200) {
          // success toast => Welcome to medrick club
          logger.logInfo("Welcome to Medrick Club! - signup");
        }
      });
    } else {
      //error toast-> passwords are not same
    }
  };

  const handleSignupMobileNumberChange = (event) => {
    const { value, maxLength } = event.target;
    const mobileNumber = value.slice(0, maxLength);
    setSignupMobileNumber(mobileNumber);
    setDisableSubmitButton(mobileNumber.length === 11 ? false : true);
  };

  const handleSignupOTPChange = (event) => {
    const { value, maxLength } = event.target;
    const otp = value.slice(0, maxLength);
    setsignupOTP(otp);
    setDisableSubmitButton(otp.length === 5 ? false : true);
  };

  const handleSignupPassword1Change = (event) => {
    const { value, minLength } = event.target;
    const password1 = value;
    setSignupPassword1(password1);
    setDisableSubmitButton(
      signupPassword1.length >= minLength && signupPassword2.length >= minLength
        ? false
        : true
    );
  };

  const handleSignupPassword2Change = (event) => {
    const { value, minLength } = event.target;
    const password2 = value;
    setSignupPassword2(password2);
    setDisableSubmitButton(
      signupPassword1.length >= minLength && signupPassword2.length >= minLength
        ? false
        : true
    );
  };

  const handleSignupInviterNumberChange = (event) => {
    const { value, maxLength } = event.target;
    const inviterPhoneNumber = value.slice(0, maxLength);
    setSignupInviterPhoneNumber(inviterPhoneNumber);

    logger.logInfo("signupInviterPhoneNumber", signupInviterPhoneNumber);
  };

  const handleResendButton = async () => {
    setCounter(6);
    setDisableOTPTimer(true);
    setOtpTimer(true);
    await dispatch(signUp_Phase1(signupMobileNumber));
  };

  const handleTimeConverting = (currentSecond) => {
    let min = Math.floor(currentSecond / 60);
    let sec = currentSecond - min * 60;

    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    setMinutes(min);
    setSeconds(sec);
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
              disableSubmitButton ? "disabled" : ""
            }`}
            onClick={handleSignUp_Phase1}
            disabled={disableSubmitButton}
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
              maxLength="5"
              placeholder="مثلا ۱۲۳۴۵"
              value={signupOTP}
              onChange={(e) => handleSignupOTPChange(e)}
              required
            />
            <i
              className="fa fa-mobile fa-xs input-mobile-icon"
              aria-hidden="true"
            ></i>
          </div>

          {/* OTP time */}
          <div>
            <div>
              <span>{minutes}</span>
              <span>:</span>
              <span>{seconds}</span>
            </div>
            <button
              className={`btn space-margin--up--40 ${
                disableOTPTimer ? "disabled" : ""
              }`}
              disabled={disableOTPTimer}
              onClick={handleResendButton}
            >
              ارسال مجدد
            </button>
          </div>

          <button
            className={`btn space-margin--up--65 ${
              disableSubmitButton ? "disabled" : ""
            }`}
            onClick={handleSignUp_Phase2}
            disabled={disableSubmitButton}
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
              minLength="8"
              value={signupPassword1}
              onChange={(e) => handleSignupPassword1Change(e)}
              required
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
              minLength="8"
              value={signupPassword2}
              onChange={(e) => handleSignupPassword2Change(e)}
              required
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
            <input
              className="referral-input"
              type="text"
              maxLength="11"
              value={signupInviterPhoneNumber}
              onChange={(e) => handleSignupInviterNumberChange(e)}
            />
          </div>
          <p className="referral-txt">
            کد معرفتان را وارد کنید و هردو شانس چرخوندن گردونه را دریافت نمایید
          </p>

          {/* submit btn */}
          <button
            className={`btn space-margin--up--25 ${
              disableSubmitButton ? "disabled" : ""
            }`}
            onClick={handleSignUp_Phase3}
            disabled={disableSubmitButton}
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
