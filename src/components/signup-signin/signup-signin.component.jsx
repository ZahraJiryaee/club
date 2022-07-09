import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import Signup from "./signup/signup.component";
import Signin from "./signin/signin.component";
import ForgetPassword from "./forget-password/forget-password.component";

import { setOpenValidationDialog } from "../../redux/user/user.action";

import { selectOpenValidationDialog } from "../../redux/user/user.selectors";

import CloseIcon from "./../../assets/images/icon/close-icon.png";
import MedrickLogo from "./../../assets/images/icon/medrick-logo.png";

import "./signup-signin.styles.scss";

const SignupSignin = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [authMode, setAuthMode] = useState(1); // 1=>signup   2=>login    3=>forget-pass
  const openVal = useSelector(selectOpenValidationDialog);

  useEffect(() => {
    setAuthMode(1);
  }, []);

  const handleCloseSignUpSignIn = () => {
    dispatch(setOpenValidationDialog(false));
  };

  const populateAuthForm = () => {
    switch (authMode) {
      case 1:
        return <Signup setAuthMode={setAuthMode} />;
      case 2:
        return <Signin setAuthMode={setAuthMode} />;
      case 3:
        return <ForgetPassword />;
      default:
        break;
    }
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
            {populateAuthForm()}
          </div>
        </div>
      </div>
    )
  );
};

export default SignupSignin;
