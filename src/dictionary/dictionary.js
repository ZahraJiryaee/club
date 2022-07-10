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
      Enter_Code_In_Game__LuckyWheelModal:
        "توجه: کد دریافتی را در بازی مورد نظر وارد نمایید.",
      Enter_Code_In_Game__ShopModal:
        "توجه: کد تایید دریافتی را در بازی مورد نظر وارد نمایید.",
      Low_Score_Warning: "امتیاز شما از حد مجاز کمتر است.",
      Your_Request_Was_Successful: "درخواست شما با موفقیت انجام شد",
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
      Share: "اشتراک‌ گذاری",
      Invite_Friends_Description:
        "با معرفی مدریک کلاب به دوستانتان \n هر دو شانس چرخوندن گردونه را دریافت نمایید",
      Invite_Friends_Message_Title: "مدریک کلاب 😊",
      Invite_Friends_Message_Text:
        "گردونه رو بچرخون و از مدریک کلاب جایزه بگیر!\nاگه شماره تلفن من ({{phoneNumber}}) رو هم به عنوان معرف ثبت کنی، شانس چرخوندن بیشتری بهت داده میشه.",

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
      No_Links_To_display: "لینکی برای نمایش وجود ندارد!",
      Through_The_Following_Activities_You_Can_Get_A_Chance_To_Spin_The_Wheel:
        "از طریق فعالیت‌های زیر می‌تونی شانس چرخوندن گردونه را دریافت کنی",
      Try_Again: "دوباره تلاش کنید!",
      Lucky_Wheel_Page: "گردونه شانس",
      Leaderboard_Page: "جدول رده‌بندی",
      Games_Page: "بازی‌ها",
      Game_Details_Page: "بازی ",
      Genre: "ژانر ",
      Category: "کتگوری ",
      Search_Page__Game: "جستجو در بازی‌ها",
      Search_Page__Shop: "جستجو در فروشگاه",
      Shop_Page: "فروشگاه",
      Error_Boundary_Msg: "خطایی رخ داده است! لطفا با پشتیبانی تماس بگیرید.",
      Error_Something_Wrong_Msg: "خطایی رخ داده است! لطفا مجدد تلاش کنید.",
      Signup: "ثبت نام",
      Resend: "ارسال مجدد",
      User_Already_Exist: "این شماره موبایل قبلا ثبت نام کرده است.",
      InviteFriends_Error_Message: "ورود کد معرف با خطا مواجه شد!",
      User_Not_Valid_Msg: "User_Not_Valid",
      Login_To_See_Award_List: "برای دیدن لیست جوایز خود وارد شوید!",
      Mobile_Number_Not_valid_Error_Msg: "شماره موبایل معتبر نیست!",
      Password_Should_Contain_Atleast_8_Chars:
        "کلمه عبور باید حاوی 8 کاراکتر باشد!",
      Passwords_Does_Not_Match: "کلمه های عبور بر هم منطبق نیستند!",
      Otp_Not_Valid: "کد تایید وارد شده صحیح نیست!",
      Mobile_Number: "شماره موبایل",
      Mobile_Number_Placeholder: "مثلا ۰۹۱۲۱۲۳۴۵۶۷",
      Profile_Name: "نام کاربری",
      Password: "کلمه عبور",
      Password_Repeat: "تکرار کلمه عبور",
      Enter_Otp_Number: "کد تائید را وارد نمایید",
      Otp_Was_sent_To_Mobile_Number:
        "کد تائید برای شماره موبایل {{signupMobileNumber}} ارسال گردید",
      Otp_Placeholder: "مثلا ۱۲۳۴۵",
      X_Time_Is_left_To_Resend_Otp: "مانده تا دریافت مجدد کد",
      Resend_Otp_Code_Via: "دریافت مجدد کد از طریق",
      SMS: "پیامک",
      Enter_Referral_Code: "ورود کد معرف",
      Enter_Referral_Code_And_Get_Chances_To_Spin_The_Wheel:
        "کد معرفتان را وارد کنید و هردو شانس چرخوندن گردونه را دریافت نمایید",
      If_You_Already_Have_An_Account_Login__Part1:
        "اگر در مدریک کلاب حساب کاربری دارید،",
      If_You_Already_Have_An_Account_Login__Part2: "وارد شوید",
      If_You_Dont_Have_An_Account_Signup__Part1:
        "اگر در مدریک کلاب حساب کاربری ندارید،",
      If_You_Dont_Have_An_Account_Signup__Part2: "ثبت نام کنید",
      Signin: "ورود",
      Empty_Field_Error: "هیچ فیلدی نباید خالی باشد.",
      Inviter_Code_Error: "معرف خود را قبلا ثبت کرده‌اید.",
      Address: "آدرس محل دریافت",
      Edit_Address: "ویرایش آدرس",
      Gift_Code: "کد مصرفی",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fa",
});

export default i18n;
