import i18n from "i18next";

import "./error-boundary.styles.scss";

export function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="error-boundary">
      <p>{i18n.t("Error_Boundary_Msg")}</p>
      <p className="support-number">
        <span>{i18n.t("Support_Number")}</span>{" "}
        <span>{process.env.REACT_APP_SUPPORT_NUMBER}</span>
      </p>
    </div>
  );
}

export function myErrorHandler(error, info) {
  // Do something with the error
  // E.g. log to an error logging client here
  console.error("err in err-boundary:", error);
  console.error("info in err-boundary:", info);
}
