import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";

import { setCurrentUser } from "./redux/user/user.action";

import { selectIsLoading } from "./redux/user/user.selectors";

import SignupSignin from "./components/signup-signin/signup-signin.component";
import LuckyWheelModal from "./components/lucky-wheel-modal/lucky-wheel-modal.component";
import ShopModal from "./components/shop-modal/shop-modal.component";
import WantMoreChance from "./components/want-more-chance/want-more-chance.component";

import { useSetupAxios } from "./services/httpServices";
import ScrollToTop from "./services/scrollToTop";

import routes from "./routes";

function App() {
  const routing = useRoutes(routes);
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  useSetupAxios();

  useEffect(() => {
    dispatch(setCurrentUser()).then((response) => {
      console.log("profile response app", response);
    });
  }, [dispatch, isLoading]);

  return (
    <>
      <LuckyWheelModal />
      <ShopModal />
      <WantMoreChance />
      <SignupSignin />
      <ScrollToTop>
        <>{routing}</>
      </ScrollToTop>
    </>
  );
}

export default App;
