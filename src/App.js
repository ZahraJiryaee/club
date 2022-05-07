import React, { Fragment } from "react";
import { useRoutes } from "react-router-dom";
import Loading from "./components/common/Loading.component";
import SignupSignin from "./components/signup-signin/signup-signin.component";

import routes from "./routes";

import { useSetupAxios } from "./services/httpServices";

function App() {
  const routing = useRoutes(routes);
  useSetupAxios();

  return (
    <>
      <Loading />
      <SignupSignin />
      <Fragment>{routing}</Fragment>
    </>
  );
}

export default App;
