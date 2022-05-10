import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRoutes } from "react-router-dom";

import Loading from "./components/common/Loading.component";
import SignupSignin from "./components/signup-signin/signup-signin.component";

import { setUserProfile } from "./redux/user/user.action";

import { useSetupAxios } from "./services/httpServices";

import routes from "./routes";

function App() {
  const routing = useRoutes(routes);
  const dispatch = useDispatch();

  useSetupAxios();

  useEffect(() => {
    dispatch(setUserProfile()).then((response) => {
      console.log("profile response app", response);
    });
  }, []);

  return (
    <>
      <Loading />
      <SignupSignin />
      <Fragment>{routing}</Fragment>
    </>
  );
}

export default App;
