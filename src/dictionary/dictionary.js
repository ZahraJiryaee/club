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
      Search_In_Shop: "جستجو در فروشگاه",
      Search_In_Games: "جستجو بازی‌ها",
      No_Results_Were_Found: "نتیجه‌ای یافت نشد!",
      X_Results_Were_Found: "مورد یافت شد.",
      All: "همه",
      Prize: "جایزه",
      Prizes: "جوایز",
      Leaderboard_Table: "جدول رده‌بندی",
      Weekly: "هفتگی",
      Purchase: "خرید",
      Sorting: "مرتب‌سازی",
      Next_Page: "صفحه بعدی",
      Previous_Page: "صفحه قبلی",
      Thousand: "هزار",
      Active_Installation: "نصب فعال",
      Size: "حجم",
      Megabytes: "مگابایت",
      Creator: "سازنده",
      Install: "نصب",
      Game_Introduction: "معرفی برنامه",
      More: "بیشتر",
      More_Extended: "بیشـــتر",
      Less: "کمتر",
      Awards_That_Can_Be_Achieved_With_This_Game:
        "جوایزی که با این بازی می‌تونی بگیری:",
      Install_This_App_And: "این برنامه را نصب کنبد و",
      Get_X_Points: "امتیاز دریافت کنید",
      And: "و",
      Similar_Games: "بازی‌های مشابه",
      Achieve_X_Points_By_Installing_This_Game:
        "امتیاز با نصب این بازی دریافت کنید.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fa",
});

export default i18n;
