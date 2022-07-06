import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import CustomInput from "../../common/custom-input/custom-input.component";
import CustomButton from "../../common/custom-button/custom-button.component";

import { validateMobileNumber } from "../../../services/validateMobileNumber";

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const mobilNumberMaxLength = 11;
  const passwordMinLength = 8;
  const otpMaxLength = 5;

  const [forgetPasswordStage, setForgetPasswordStage] = useState(1);

  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileNumberNotValidErrorMsg, setMobileNumberNotValidErrorMsg] =
    useState("");
  const [isMobileNumberValid, setIsMobileNumberValid] = useState(false);
  //
  const [password_1, setPassword_1] = useState("");
  const [passVisibility_1, setPassVisibility_1] = useState(false);
  const [passwordNotValidErrorMsg_1, setPasswordNotValidErrorMsg_1] =
    useState(null);
  //
  const [password_2, setPassword_2] = useState("");
  const [passVisibility_2, setPassVisibility_2] = useState(false);
  const [passwordNotValidErrorMsg_2, setPasswordNotValidErrorMsg_2] =
    useState(null);
  //
  const [passwordsDoesNotMatchErrorMsg, setPasswordsDoesNotMatchErrorMsg] =
    useState("");
  // phase 2
  const [signupOTP, setsignupOTP] = useState("");
  const [disableOTPTimer, setDisableOTPTimer] = useState(true);
  const [otpTimer, setOtpTimer] = useState(false);
  const [counter, setCounter] = useState(120);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  //   disable
  const [disableSubmitButton, setDisableSubmitButton] = useState(true);

  /* ------------------------------- PHASE 1 ---------------------------------- */
  const handleMobileNumberChange = (event) => {
    const { value, maxLength } = event.target;
    const mobile = value.slice(0, maxLength);
    setMobileNumber(mobile);

    if (validateMobileNumber(mobile)) {
      setIsMobileNumberValid(true);
      setMobileNumberNotValidErrorMsg(null);
    } else {
      setIsMobileNumberValid(false);
      setMobileNumberNotValidErrorMsg(t("Mobile_Number_Not_valid_Error_Msg"));
    }
  };

  const handlePasswordChange_1 = (event) => {
    const { value, minLength } = event.target;
    setPassword_1(value);

    setPasswordNotValidErrorMsg_1(
      value.length < minLength
        ? t("Password_Should_Contain_Atleast_8_Chars")
        : null
    );

    setPasswordsDoesNotMatchErrorMsg(
      value === password_2 ? null : t("Passwords_Does_Not_Match")
    );
  };

  const handlePasswordVisibleIconToggle_1 = () => {
    setPassVisibility_1(!passVisibility_1);
  };

  const handlePasswordChange_2 = (event) => {
    const { value, minLength } = event.target;
    setPassword_2(value);

    setPasswordNotValidErrorMsg_2(
      value.length < minLength
        ? t("Password_Should_Contain_Atleast_8_Chars")
        : null
    );

    setPasswordsDoesNotMatchErrorMsg(
      value === password_1 ? null : t("Passwords_Does_Not_Match")
    );
  };

  const handlePasswordVisibleIconToggle_2 = () => {
    setPassVisibility_2(!passVisibility_2);
  };

  /* ------------------------------- PHASE 2 ---------------------------------- */
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

  const handleTimeConverting = (currentSecond) => {
    let min = Math.floor(currentSecond / 60);
    let sec = currentSecond - min * 60;

    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    setMinutes(min);
    setSeconds(sec);
  };

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
  };

  /* ------------------------------- DISABLE SUBMIT BTNs ---------------------------------- */
  useEffect(() => {
    if (forgetPasswordStage === 1) {
      setDisableSubmitButton(
        isMobileNumberValid &&
          password_1.length >= passwordMinLength &&
          password_2.length >= passwordMinLength &&
          password_1 === password_2
          ? false
          : true
      );
    } else {
      setDisableSubmitButton(
        signupOTP.trim().length === otpMaxLength ? false : true
      );
    }
  }, [
    forgetPasswordStage,
    isMobileNumberValid,
    password_1,
    password_2,
    signupOTP,
    otpMaxLength,
  ]);

  /* ------------------------------- HANDLE ONCLICKS ---------------------------------- */
  const handleForgetPassword_Phase1 = () => {
    setOtpTimer(true);
    setForgetPasswordStage(2);
    setDisableSubmitButton(true);
  };

  const handleForgetPassword_Phase2 = () => {
    setOtpTimer(false);
    setForgetPasswordStage(1);
  };

  /* ------------------------------- POPULATE FORM ---------------------------------- */
  const populateForgetPasswordForm = () => {
    switch (forgetPasswordStage) {
      case 1:
        return (
          <>
            <CustomInput
              icon="mobile"
              label={t("Mobile_Number")}
              type="number"
              maxLength={mobilNumberMaxLength}
              placeholder={t("Mobile_Number_Placeholder")}
              value={mobileNumber}
              onValueChange={handleMobileNumberChange}
              errorMsg={mobileNumberNotValidErrorMsg}
            />
            <CustomInput
              icon={`eye${!passVisibility_1 ? "-slash" : ""}`}
              label={t("New_Password")}
              type={`${passVisibility_1 ? "text" : "password"}`}
              minLength={passwordMinLength}
              placeholder=""
              value={password_1}
              onValueChange={handlePasswordChange_1}
              onPassword1VisibleIconToggle={handlePasswordVisibleIconToggle_1}
              errorMsg={passwordNotValidErrorMsg_1}
            />
            <CustomInput
              icon={`eye${!passVisibility_2 ? "-slash" : ""}`}
              label={t("New_Password_Repeat")}
              type={`${passVisibility_2 ? "text" : "password"}`}
              minLength={passwordMinLength}
              placeholder=""
              value={password_2}
              onValueChange={handlePasswordChange_2}
              onPassword1VisibleIconToggle={handlePasswordVisibleIconToggle_2}
              errorMsg={passwordNotValidErrorMsg_2}
            />
            {passwordsDoesNotMatchErrorMsg ? (
              <p className="custom-input-error-message">
                {passwordsDoesNotMatchErrorMsg}
              </p>
            ) : null}
            <CustomButton
              btnBgColor="marine-blue"
              onClick={handleForgetPassword_Phase1}
              disabled={disableSubmitButton}
            >
              {t("Receive_Otp")}
            </CustomButton>
          </>
        );
      case 2:
        let signupMobileNumber = mobileNumber;
        return (
          <>
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
            <CustomButton
              btnBgColor="marine-blue"
              onClick={handleForgetPassword_Phase2}
              disabled={disableSubmitButton}
            >
              {t("Retrieve_Account")}
            </CustomButton>
          </>
        );
      default:
        break;
    }
  };

  return (
    <div>
      <span className="text-right bolder-txt space-padding--up--30">
        {t("Reset_Password")}
      </span>
      {populateForgetPasswordForm()}
    </div>
  );
};

export default ForgetPassword;
