import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fa: {
    translation: {
      "Please wait...": "...لطفا منتظر بمانید",
      "Not Found": "یافت نشد!",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fa",
});

export default i18n;
