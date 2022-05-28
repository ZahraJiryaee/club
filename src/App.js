import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRoutes } from "react-router-dom";

import { setCurrentUser } from "./redux/user/user.action";

import { useSetupAxios } from "./services/httpServices";

import Loading from "./components/common/loading/loading.component";
import SignupSignin from "./components/signup-signin/signup-signin.component";
import LuckyWheelModal from "./components/lucky-wheel-modal/lucky-wheel-modal.component";
import ShopModal from "./components/shop-modal/shop-modal.component";

import routes from "./routes";

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
      <LuckyWheelModal />
      <ShopModal />
      <SignupSignin />
      <Loading />
      <Fragment>{routing}</Fragment>
    </>
  );
}

export default App;
