import i18n from "i18next";

import BazaarIcon from "./../../assets/images/icon/dn-app-from-bazaar.png";
import PlayStoreIcon from "./../../assets/images/icon/dn-app-from-googleplay.png";
import MyketIcon from "./../../assets/images/icon/dn-app-from-myket.png";
import AppStoreIcon from "./../../assets/images/icon/dn-app-from-appstore.png";

const appLogoMapper = {
  bazaar: { name: i18n.t("Bazaar"), icon: BazaarIcon },
  play: { name: i18n.t("Play_Store"), icon: PlayStoreIcon },
  myket: { name: i18n.t("Myket"), icon: MyketIcon },
  ios: { name: i18n.t("App_Store"), icon: AppStoreIcon },
  direct: {},
};

export default appLogoMapper;
