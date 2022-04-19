import React, { useState } from "react";

import Signup from "./signup/signup.component";
import Signin from "./signin/signin.component";

import CloseIcon from "./../../assets/images/icon/close-icon.png";
import MedrickLogo from "./../../assets/images/icon/medrick-logo.png";

import "./signup-signin.styles.scss";

const SignupSignin = ({ warningMsg, onCloseSignUpSignIn }) => {
  const [signupMode, setSignupMode] = useState(true); // true=>signup   false=>login
  return (
    <div className="entire-page">
      <div className="signup-signin-container center-absolute">
        <img
          src={CloseIcon}
          alt="signinsignup-close"
          className="signinsignup-close"
          onClick={onCloseSignUpSignIn}
        />
        <div className="signup-signin-wrapper">
          {/*--------------------- Medrick Logo -------------------*/}
          <img className="medrick-logo" src={MedrickLogo} alt="medrick-logo" />
          {/*--------------------- warning Msg -------------------*/}
          {warningMsg && (
            <p className="warningMsg">
              برای دسترسی به امکانات برنامه لطفا وارد شوید
            </p>
          )}
          {/*------------------ SignUp or Signin ------------------*/}
          {signupMode ? (
            <Signup setSignupMode={setSignupMode} />
          ) : (
            <Signin setSignupMode={setSignupMode} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupSignin;
