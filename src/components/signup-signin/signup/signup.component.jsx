import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { signUp_Phase1, signUp_Phase2 } from "../../../redux/user/user.action";

import CustomInput from "../../common/custom-input/custom-input.component";
import CustomButton from "../../common/custom-button/custom-button.component";

import { validateMobileNumber } from "../../../services/validateMobileNumber";

import ArrowBack from "./../../../assets/images/icon/arrow-back.png";

const Signup = ({ setAuthMode }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const passwordMinLength = 8;
  const mobilNumberMaxLength = 11;
  const otpMaxLength = 5;
  const inviteNumberMaxLength = 11; //bc its a mobile number

  const [signinSignupStages, setSigninSignupStages] = useState(1);

  const [password1Visible, setPassword1Visible] = useState(false);
  const [password2Visible, setPassword2Visible] = useState(false);

  const [isSignupMobileNumberValid, setIsSignupMobileNumberValid] =
    useState(false);
  const [mobileNumberNotValidErrorMsg, setMobileNumberNotValidErrorMsg] =
    useState("");
  const [password1NotValidErrorMsg, setPassword1NotValidErrorMsg] =
    useState("");
  const [password2NotValidErrorMsg, setPassword2NotValidErrorMsg] =
    useState("");
  const [passwordsDoesNotMatchErrorMsg, setPasswordsDoesNotMatchErrorMsg] =
    useState("");
  const [isInviterPhoneNumberValid, setIsInviterPhoneNumberValid] =
    useState(true);

  const [signupMobileNumber, setSignupMobileNumber] = useState("");
  const [profileName, setProfileName] = useState("");
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

  /***************************SignUp Phase 1 ************************** */
  const handleSignupMobileNumberChange = (event) => {
    const { value, maxLength } = event.target;
    const mobileNumber = value.slice(0, maxLength);
    setSignupMobileNumber(mobileNumber);
    if (validateMobileNumber(mobileNumber)) {
      setIsSignupMobileNumberValid(true);
      setMobileNumberNotValidErrorMsg(null);
    } else {
      setIsSignupMobileNumberValid(false);
      setMobileNumberNotValidErrorMsg(t("Mobile_Number_Not_valid_Error_Msg"));
    }
  };

  const handleSignupProfileNameChange = (event) => {
    setProfileName(event.target.value);
  };

  const handlePassword1VisibleIconToggle = () => {
    setPassword1Visible(!password1Visible);
  };

  const handlePassword2VisibleIconToggle = () => {
    setPassword2Visible(!password2Visible);
  };

  const handleSignupPassword1Change = (event) => {
    const { value } = event.target;
    setSignupPassword1(value);
    setPassword1NotValidErrorMsg(
      value.length < passwordMinLength
        ? t("Password_Should_Contain_Atleast_8_Chars")
        : null
    );

    setPasswordsDoesNotMatchErrorMsg(
      value === signupPassword2 ? null : t("Passwords_Does_Not_Match")
    );
  };

  const handleSignupPassword2Change = (event) => {
    const { value } = event.target;
    setSignupPassword2(value);
    setPassword2NotValidErrorMsg(
      value.length < passwordMinLength
        ? t("Password_Should_Contain_Atleast_8_Chars")
        : null
    );

    setPasswordsDoesNotMatchErrorMsg(
      value === signupPassword1 ? null : t("Passwords_Does_Not_Match")
    );
  };

  const handleSignUp_Phase1 = () => {
    setDisableSubmitButton(true);
    const result = dispatch(signUp_Phase1(signupMobileNumber));

    result.then((result) => {
      setDisableSubmitButton(false);
      if (result === "success") {
        setOtpTimer(true);
        setSigninSignupStages(2);
        setDisableSubmitButton(true);
      }
    });
  };

  /*************************** SignUp Phase 2 ************************** */

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

  const handleSignupOTPChange = (event) => {
    const { value, maxLength } = event.target;
    const otp = value.slice(0, maxLength);
    setsignupOTP(otp);
    setDisableSubmitButton(otp.length === maxLength ? false : true);
  };

  const handleResendButton = () => {
    setsignupOTP("");
    setCounter(120);
    setDisableOTPTimer(true);
    setOtpTimer(true);
    dispatch(signUp_Phase1(signupMobileNumber));
  };

  const handleTimeConverting = (currentSecond) => {
    let min = Math.floor(currentSecond / 60);
    let sec = currentSecond - min * 60;

    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    setMinutes(min);
    setSeconds(sec);
  };

  const handleSignupInviterNumberChange = (event) => {
    const { value, maxLength } = event.target;
    const inviterPhoneNumber = value.slice(0, maxLength);
    setSignupInviterPhoneNumber(inviterPhoneNumber);
    setIsInviterPhoneNumberValid(validateMobileNumber(inviterPhoneNumber));
  };

  const handleSignUp_Phase2 = () => {
    const reqBody = {
      mobile_number: signupMobileNumber,
      otp: signupOTP,
      password: signupPassword1,
      profile_name: profileName,
      inviter_number: null,
    };

    reqBody.inviter_number = isInviterPhoneNumberValid
      ? signupInviterPhoneNumber
      : null;
    const result = dispatch(signUp_Phase2(reqBody));
    result.then((response) => {
      if (response === "success") {
        setDisableSubmitButton(true);
        setOtpTimer(false);
      }
    });
  };

  /*************************** Handle Subit Disable ************************** */
  useEffect(() => {
    if (signinSignupStages === 1) {
      setDisableSubmitButton(
        isSignupMobileNumberValid &&
          profileName !== "" &&
          signupPassword1.length >= passwordMinLength &&
          signupPassword2.length >= passwordMinLength &&
          signupPassword1 === signupPassword2
          ? false
          : true
      );
    } else {
      setDisableSubmitButton(
        signupOTP.trim().length === otpMaxLength ? false : true
      );
    }
  }, [
    signinSignupStages,
    isSignupMobileNumberValid,
    profileName,
    signupPassword1,
    signupPassword2,
    passwordMinLength,
    signupOTP,
    otpMaxLength,
  ]);

  const handleBackSignUp = () => {
    setSigninSignupStages(1);
    setsignupOTP("");
    setSignupInviterPhoneNumber("");
  };

  return (
    <React.Fragment>
      {/* ------------------- SignUp Phase 1 -------------------- */}
      {signinSignupStages === 1 && (
        <>
          <span className="text-right bolder-txt space-padding--up--10">
            {t("Signup")}
          </span>
          <CustomInput
            icon="mobile"
            label={t("Mobile_Number")}
            type="number"
            maxLength={mobilNumberMaxLength}
            placeholder={t("Mobile_Number_Placeholder")}
            value={signupMobileNumber}
            onValueChange={handleSignupMobileNumberChange}
            errorMsg={mobileNumberNotValidErrorMsg}
          />
          <CustomInput
            icon="user"
            label={t("Profile_Name")}
            type="text"
            placeholder=""
            value={profileName}
            onValueChange={handleSignupProfileNameChange}
          />
          <CustomInput
            icon={`eye${!password1Visible ? "-slash" : ""}`}
            label={t("Password")}
            type={`${password1Visible ? "text" : "password"}`}
            minLength={passwordMinLength}
            placeholder=""
            value={signupPassword1}
            onValueChange={handleSignupPassword1Change}
            onPassword1VisibleIconToggle={handlePassword1VisibleIconToggle}
            errorMsg={password1NotValidErrorMsg}
          />
          <CustomInput
            icon={`eye${!password2Visible ? "-slash" : ""}`}
            label={t("Password_Repeat")}
            type={`${password2Visible ? "text" : "password"}`}
            minLength={passwordMinLength}
            placeholder=""
            value={signupPassword2}
            onValueChange={handleSignupPassword2Change}
            onPassword1VisibleIconToggle={handlePassword2VisibleIconToggle}
            errorMsg={password2NotValidErrorMsg}
          />

          {passwordsDoesNotMatchErrorMsg ? (
            <p className="custom-input-error-message">
              {passwordsDoesNotMatchErrorMsg}
            </p>
          ) : null}
          <CustomButton
            btnBgColor="marine-blue"
            onClick={handleSignUp_Phase1}
            disabled={disableSubmitButton}
          >
            {t("Signup")}
          </CustomButton>
        </>
      )}
      {/* ------------------- SignUp Phase 2 -------------------- */}
      {signinSignupStages === 2 && (
        <>
          {/* back icon */}
          <img
            src={ArrowBack}
            alt="signup-back"
            className="signup-back"
            onClick={handleBackSignUp}
          />

          <span className="text-right bolder-txt">{t("Enter_Otp_Number")}</span>

          <CustomInput
            icon="mobile"
            label={`${t("Otp_Was_sent_To_Mobile_Number", {
              signupMobileNumber,
            })}`}
            type="number"
            maxLength={otpMaxLength}
            placeholder={t("Otp_Placeholder")}
            value={signupOTP}
            onValueChange={handleSignupOTPChange}
          />

          {/* OTP time */}
          <div>
            {disableOTPTimer ? (
              <p>
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>{" "}
                <span>{t("X_Time_Is_left_To_Resend_Otp")}</span>
              </p>
            ) : (
              <p>
                {t("Resend_Otp_Code_Via")}{" "}
                <span onClick={handleResendButton} className="resend-txt">
                  {t("SMS")}
                </span>
              </p>
            )}
          </div>

          {/* referral code */}
          <div className="referral-container space-padding--up--35">
            <span className="bolder-txt">{t("Enter_Referral_Code")}</span>
            <div>
              <input
                className="referral-input"
                type="text"
                maxLength={inviteNumberMaxLength}
                value={signupInviterPhoneNumber}
                onChange={(e) => handleSignupInviterNumberChange(e)}
              />
              {!isInviterPhoneNumberValid ? (
                <p className="custom-input-error-message">
                  {t("Mobile_Number_Not_valid_Error_Msg")}
                </p>
              ) : null}
            </div>
          </div>

          <p className="referral-txt">
            {t("Enter_Referral_Code_And_Get_Chances_To_Spin_The_Wheel")}
          </p>

          <CustomButton
            btnBgColor="marine-blue"
            onClick={handleSignUp_Phase2}
            disabled={disableSubmitButton}
          >
            {t("Signup")}
          </CustomButton>
        </>
      )}

      <p className="switch-between-signin-signup-text">
        {t("If_You_Already_Have_An_Account_Login__Part1")}
        <span className="link" onClick={() => setAuthMode(2)}>
          {" "}
          {t("If_You_Already_Have_An_Account_Login__Part2")}
        </span>
      </p>
    </React.Fragment>
  );
};

export default Signup;
