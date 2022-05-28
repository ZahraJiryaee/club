import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fa: {
    translation: {
      Please_Wait: "...لطفا منتظر بمانید",
      Not_Found: "یافت نشد!",
      Lucky_Wheel_Header_Txt: "گـــردونه شــانــس مـدریــک",
      Lucky_Wheel_Sub_Header_Txt_Lin1:
        "در گردونه مدریک شانس خود را جهت برنده شدن جوایز",
      Lucky_Wheel_Sub_Header_Txt_Lin2: "ارزنده امتحان کنید.",
      Lucky_Wheel_Spin_Btn: "بچرخون",
      Lucky_wheel_Want_More_Chance:
        "شــانـس بیشتری برای چـرخونـدن گـردونه می‌خـوای؟",
      Lucky_Wheel_Click_Here: "اینجا را کلیک کن",
      Chance: "شانس",
      Version: "نسخه",
      Confirm: "تایید",
      Receive: "دریافت",
      Verification_Code: "کد تایید",
      Tracking_Code: "کد پیگیری",
      Enter_Address: "لطفا شهر و آدرس محل دریافت را وارد نمایید.",
      Required: "(اجباری)",
      Send_To: "ارسال به:",
      Support_Number: "شماره پشتیبانی:",
      Enter_Code_In_Game: "توجه: کد دریافتی را در بازی مورد نظر وارد نمایید.",
      Low_Score_Warning: "امتیاز شما از حد مجاز کمتر است.",
      Your_Request_Was_Successful: "درخواست شما با موفقیت انجام شد",
      Enter_Code_In_Game:
        "توجه: کد تایید دریافتی را در بازی مورد نظر وارد نمایید.",
      Continue: "ادامه",
      Score: "امتیاز",
      Your_Score: "امتیاز شما:",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fa",
});

export default i18n;
