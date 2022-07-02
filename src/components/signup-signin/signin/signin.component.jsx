import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { login } from "../../../redux/user/user.action";

import CustomInput from "../../common/custom-input/custom-input.component";
import CustomButton from "../../common/custom-button/custom-button.component";

import { validateMobileNumber } from "../../../services/validateMobileNumber";
import logger from "../../../services/logService";

const Signin = ({ setSignupMode }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const mobilNumberMaxLength = 11;
  const passwordMinLength = 8;

  const [passwordVisible, setPasswordVisible] = useState(false);

  const [signinMobileNumber, setSigninMobileNumber] = useState("");
  const [signinPassword, setSigninPassword] = useState("");

  const [isSigninMobileNumberValid, setIsSigninMobileNumberValid] =
    useState(false);
  const [mobileNumberNotValidErrorMsg, setMobileNumberNotValidErrorMsg] =
    useState("");
  const [passwordNotValidErrorMsg, setPasswordNotValidErrorMsg] = useState("");

  const [disableSubmitButton, setDisableSubmitButton] = useState(true);

  const handlePasswordVisibleIconToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignin = () => {
    const result = dispatch(login(signinMobileNumber, signinPassword));
    result.then((response) => {
      if (response.status === 200) {
        // success toast => Welcome to medrick club
        logger.logInfo("Welcome to Medrick Club! - signin");
      }
    });
  };

  const handleSigninMobileNumberChange = (event) => {
    const { value, maxLength } = event.target;
    const mobileNumber = value.slice(0, maxLength);
    setSigninMobileNumber(mobileNumber);

    if (validateMobileNumber(mobileNumber)) {
      setIsSigninMobileNumberValid(true);
      setMobileNumberNotValidErrorMsg(null);
    } else {
      setIsSigninMobileNumberValid(false);
      setMobileNumberNotValidErrorMsg(t("Mobile_Number_Not_valid_Error_Msg"));
    }
  };

  const handleSigninPasswordChange = (event) => {
    const { value, minLength } = event.target;
    setSigninPassword(value);

    setPasswordNotValidErrorMsg(
      value.length < minLength
        ? t("Password_Should_Contain_Atleast_8_Chars")
        : null
    );
  };

  useEffect(() => {
    setDisableSubmitButton(
      isSigninMobileNumberValid && signinPassword.length >= passwordMinLength
        ? false
        : true
    );
  }, [isSigninMobileNumberValid, passwordMinLength, signinPassword]);

  return (
    <React.Fragment>
      <span className="text-right bolder-txt space-padding--up--30">ورود</span>
      <CustomInput
        icon="mobile"
        label={t("Mobile_Number")}
        type="number"
        maxLength={mobilNumberMaxLength}
        placeholder={t("Mobile_Number_Placeholder")}
        value={signinMobileNumber}
        onValueChange={handleSigninMobileNumberChange}
        errorMsg={mobileNumberNotValidErrorMsg}
      />
      <CustomInput
        icon={`eye${!passwordVisible ? "-slash" : ""}`}
        label={t("Password")}
        type={`${passwordVisible ? "text" : "password"}`}
        minLength={passwordMinLength}
        placeholder=""
        value={signinPassword}
        onValueChange={handleSigninPasswordChange}
        onPassword1VisibleIconToggle={handlePasswordVisibleIconToggle}
        errorMsg={passwordNotValidErrorMsg}
      />
      <CustomButton
        btnBgColor="marine-blue"
        onClick={handleSignin}
        disabled={disableSubmitButton}
      >
        {t("Signin")}
      </CustomButton>
      <p className="switch-between-signin-signup-text">
        {t("If_You_Dont_Have_An_Account_Signup__Part1")}
        <span className="link" onClick={() => setSignupMode(true)}>
          {" "}
          {t("If_You_Dont_Have_An_Account_Signup__Part2")}
        </span>
      </p>
    </React.Fragment>
  );
};

export default Signin;
