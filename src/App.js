import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRoutes } from "react-router-dom";

import Loading from "./components/common/Loading.component";
import SignupSignin from "./components/signup-signin/signup-signin.component";

import { setCurrentUser } from "./redux/user/user.action";

import { useSetupAxios } from "./services/httpServices";

import routes from "./routes";
import LuckyWheelModal from "./components/lucky-wheel-modal/lucky-wheel-modal.component";

function App() {
  const routing = useRoutes(routes);
  const dispatch = useDispatch();

  useSetupAxios();

  useEffect(() => {
    dispatch(setCurrentUser()).then((response) => {
      console.log("profile response app", response);
    });
  }, [dispatch]);

  return (
    <>
      <Loading />
      <SignupSignin />
      <LuckyWheelModal />
      <Fragment>{routing}</Fragment>
    </>
  );
}

export default App;
