import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  signUp_Phase1,
  signUp_Phase2,
  signUp_Phase3,
} from "../../../redux/user/user.action";

const Signup = ({ setSignupMode }) => {
  const dispatch = useDispatch();

  const [signinSignupStages, setSigninSignupStages] = useState(1);

  const [password1Visible, setPassword1Visible] = useState(false);
  const [password2Visible, setPassword2Visible] = useState(false);

  const [signupMobileNumber, setSignupMobileNumber] = useState("");
  const [signupOTP, setsignupOTP] = useState("");
  const [signupPassword1, setSignupPassword1] = useState("");
  const [signupPassword2, setSignupPassword2] = useState("");
  const [signupInvitedCode, setSignupInvitedCode] = useState("");

  const [disableSubmitPhase1, setDisableSubmitPhase1] = useState(true);
  const [disableSubmitPhase2, setDisableSubmitPhase2] = useState(true);
  const [disableSubmitPhase3, setDisableSubmitPhase3] = useState(true);

  const handlePassword1VisibleIconToggle = () => {
    setPassword1Visible(!password1Visible);
  };
  const handlePassword2VisibleIconToggle = () => {
    setPassword2Visible(!password2Visible);
  };

  const handleSignUp_Phase1 = async () => {
    const result = await dispatch(signUp_Phase1(signupMobileNumber));
    if (result === "success") setSigninSignupStages(2);
    else console.log(result);
  };

  const handleSignUp_Phase2 = async () => {
    const result = await dispatch(signUp_Phase2(signupMobileNumber, signupOTP));
    if (result === "success") setSigninSignupStages(3);
    else console.log(result);
  };

  const handleSignUp_Phase3 = async () => {
    //check invitedCode
    if (signupPassword1 === signupPassword2) {
      const result = await dispatch(
        signUp_Phase3(signupMobileNumber, signupPassword1)
      );
      if (result === "success") {
        setSigninSignupStages(2);
        //close popup
        //send request to get user info
      } else console.log(result);
    }
  };

  const handleSignupMobileNumberChange = (event) => {
    const { value, maxLength } = event.target;
    const mobileNumber = value.slice(0, maxLength);
    setSignupMobileNumber(mobileNumber);
    setDisableSubmitPhase1(mobileNumber.length === 11 ? false : true);
  };

  const handleSignupOTPChange = (event) => {
    const { value, maxLength } = event.target;
    const otp = value.slice(0, maxLength);
    setsignupOTP(otp);
    setDisableSubmitPhase2(otp.length === 5 ? false : true);
  };

  const handleSignupPassword1Change = (event) => {
    const { value, minLength } = event.target;
    const password1 = value.slice(0, minLength);
    setSignupPassword1(password1);
    setDisableSubmitPhase3(
      signupPassword1.length === 8 && signupPassword2.length === 8
        ? false
        : true
    );
  };
  const handleSignupPassword2Change = (event) => {
    const { value, minLength } = event.target;
    const password2 = value.slice(0, minLength);
    setSignupPassword2(password2);
    setDisableSubmitPhase3(
      signupPassword1.length === 8 && signupPassword2.length === 8
        ? false
        : true
    );
  };

  const handleSignupInvitedCodeChange = (event) => {
    const { value, maxLength } = event.target;
    const invitedCode = value.slice(0, maxLength);
    setSignupInvitedCode(invitedCode);

    console.log(signupInvitedCode);
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

          <button
            className={`btn space-margin--up--65 ${
              disableSubmitPhase2 ? "disabled" : ""
            }`}
            onClick={handleSignUp_Phase2}
            disabled={disableSubmitPhase2}
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
              maxLength="7"
              value={signupInvitedCode}
              onChange={(e) => handleSignupInvitedCodeChange(e)}
            />
          </div>
          <p className="referral-txt">
            کد معرفتان را وارد کنید و هردو شانس چرخوندن گردونه را دریافت نمایید
          </p>

          {/* submit btn */}
          <button
            className={`btn space-margin--up--25 ${
              disableSubmitPhase3 ? "disabled" : ""
            }`}
            onClick={handleSignUp_Phase3}
            disabled={disableSubmitPhase3}
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
