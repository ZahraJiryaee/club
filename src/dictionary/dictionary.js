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
      Leaderboard_Table: "جدول رده‌بندی",
      Weekly: "هفتگی",
      Purchase: "خرید",
      Sorting: "مرتب‌سازی",
      Next_Page: "صفحه بعدی",
      Previous_Page: "صفحه قبلی",
      Shopping_History: "تاریخچه فروشگاه",
      Gifts_History: "تاریخچه جوایز",
      Invite_Friends: "معرفی دوستان",
      Inviter_Code: "ثبت معرف",
      Connect_To_Games: "اتصال به بازی‌ها",
      Login_To_Access_Features: "برای دسترسی به امکانات برنامه لطفا وارد شوید",
      Login: "ورود به حساب کاربری",
      Logout: "خروج از حساب کاربری",
      Edit_Profile: "ویرایش پروفایل",
      Edit: "ویرایش",
      Save: "ذخیره",
      Username: "نام کاربری",
      Phone_Number: "شماره تلفن",
      Gender: "جنسیت",
      Unknown: "نامشخص",
      Male: "آقا",
      Female: "خانم",
      Inviter: "معرف",
      Inviter_Description:
        "کد معرف خود را وارد کنید تا \n هر دو شانس چرخوندن گردونه را دریافت نمایید",
      Enter_Device_ID: "ورود شناسه دستگاه",
      Device_ID_Description:
        "شما می‌توانید بازی خود را به اکانت مدریک کلاب خود متصل کنید تا با انجام ماموریت‌های مختلف در آن بازی، جوایز متنوع به دست بیارید. کافیه که کد مخصوص به بازی رو از قسمت تنظمیات به دست بیارید و در این قسمت وارد کنید.",
      Enter: "ورود",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fa",
});

export default i18n;
