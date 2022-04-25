import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import { store } from "./redux/store";

import "./dictionary/dictionary";

import App from "./App";

import reportWebVitals from "./reportWebVitals";

import "./style.scss";
import "swiper/css/bundle";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./components/common/Loading.component";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Loading />
      <ToastContainer
        toastClassName="toast"
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        pauseOnHover
        zIndex={200}
        theme="colored"
      />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
