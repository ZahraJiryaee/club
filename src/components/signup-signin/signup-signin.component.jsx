import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import Signup from "./signup/signup.component";
import Signin from "./signin/signin.component";

import { setOpenValidationDialog } from "../../redux/user/user.action";

import { selectOpenValidationDialog } from "../../redux/user/user.selectors";

import CloseIcon from "./../../assets/images/icon/close-icon.png";
import MedrickLogo from "./../../assets/images/icon/medrick-logo.png";

import "./signup-signin.styles.scss";

const SignupSignin = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [signupMode, setSignupMode] = useState(true); // true=>signup   false=>login
  const openVal = useSelector(selectOpenValidationDialog);

  const handleCloseSignUpSignIn = () => {
    dispatch(setOpenValidationDialog(false));
  };

  return (
    openVal && (
      <div className="entire-page">
        <div className="signup-signin-container">
          <img
            src={CloseIcon}
            alt="signinsignup-close"
            className="signinsignup-close"
            onClick={handleCloseSignUpSignIn}
          />
          <div className="signup-signin-wrapper">
            {/*--------------------- Medrick Logo -------------------*/}
            <img
              className="medrick-logo"
              src={MedrickLogo}
              alt="medrick-logo"
            />
            {/*--------------------- warning Msg -------------------*/}
            <p className="warningMsg">{t("Login_To_Access_Features")}</p>
            {/*------------------ SignUp or Signin ------------------*/}
            {signupMode ? (
              <Signup setSignupMode={setSignupMode} />
            ) : (
              <Signin setSignupMode={setSignupMode} />
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default SignupSignin;
