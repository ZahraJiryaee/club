import React, { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { setCurrentUser } from "./redux/user/user.action";

import { selectIsLoading } from "./redux/user/user.selectors";

import SignupSignin from "./components/signup-signin/signup-signin.component";
import LuckyWheelModal from "./components/lucky-wheel-modal/lucky-wheel-modal.component";
import ShopModal from "./components/shop-modal/shop-modal.component";
import WantMoreChance from "./components/want-more-chance/want-more-chance.component";
import Loading from "./components/common/loading/loading.component";
import {
  ErrorFallback,
  myErrorHandler,
} from "./components/common/error-boundary/error-boundary.component";

import { useSetupAxios } from "./services/httpServices";
import ScrollToTop from "./services/scrollToTop";
import logger from "./services/logService";

import routes from "./routes";

function App() {
  const routing = useRoutes(routes);
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  useSetupAxios();

  useEffect(() => {
    dispatch(setCurrentUser()).then((response) => {
      logger.logInfo("profile response app", response);
    });
  }, [dispatch, isLoading]);

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
        <LuckyWheelModal />
        <ShopModal />
        <WantMoreChance />
        <SignupSignin />
        <ScrollToTop>
          <Suspense fallback={<Loading />}>{routing}</Suspense>
        </ScrollToTop>
      </ErrorBoundary>
    </>
  );
}

export default App;
