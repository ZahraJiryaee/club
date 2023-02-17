import React, { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";

import { setCurrentUser } from "./redux/user/user.action";

import SignupSignin from "./components/signup-signin/signup-signin.component";
import LuckyWheelModal from "./components/lucky-wheel-modal/lucky-wheel-modal.component";
import ShopModal from "./components/shop-modal/shop-modal.component";
import WantMoreChance from "./components/want-more-chance/want-more-chance.component";
import Spinner from "./components/common/spinner/spinner.componnent";
import ErrorBoundary from "./components/common/error-boundary/error-boundary.component";

import { useSetupAxios } from "./services/httpServices";
import ScrollToTop from "./services/scrollToTop";
import logger from "./services/logService";

import routes from "./routes";

function App() {
  const routing = useRoutes(routes);
  const dispatch = useDispatch();

  useSetupAxios();

  useEffect(() => {
    dispatch(setCurrentUser()).then((response) => {
      logger.logInfo("profile response app", response);
    });
  }, [dispatch]);

  return (
    <>
      <ErrorBoundary>
        <LuckyWheelModal />
        <ShopModal />
        <WantMoreChance />
        <SignupSignin />
        <ScrollToTop>
          <Suspense fallback={<Spinner />}>{routing}</Suspense>
        </ScrollToTop>
      </ErrorBoundary>
    </>
  );
}

export default App;
