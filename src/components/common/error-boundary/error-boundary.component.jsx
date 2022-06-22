import React from "react";
import i18n from "i18next";

import logger from "./../../../services/logService";

import "./error-boundary.styles.scss";

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }
  /*
  in getDrivedStateFromError lifecycle method, an error is thrown if any children inside of this 
  error boundary does throw an error.
  we have to return an obj representing the new state.
  the rest of the component is aware of that this error has happened
  */

  componentDidCatch(error, info) {
    logger.logError("error-boundary-errmsg::", error);
    logger.logError("error-boundary-infomsg::", info);
  }

  /*
  react will naturally know we're writing an error-boundary component if we use one of
  getDerivedStateFromError or componentDidCatch lifecycle methods
  */

  render() {
    if (this.state.hasErrored) {
      return (
        <div className="error-boundary-image-overlay">
          <div className="error-boundary-image-container" />
          <div className="error-boundary-image-txt">
            <p>{i18n.t("Error_Boundary_Msg")}</p>
            <p className="support-number">
              <span>{i18n.t("Support_Number")}</span>{" "}
              <span>{process.env.REACT_APP_SUPPORT_NUMBER}</span>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
