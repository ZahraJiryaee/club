import ShoppingHistory from "../assets/images/icon/shopping-icon.png";
import GiftHistory from "../assets/images/icon/gift-icon.png";
import InviteFriends from "../assets/images/icon/users-icon.png";
import InviterCode from "../assets/images/icon/user-plus-icon.png";

export const ProfileMenu = [
  {
    id: "1",
    title: "Shopping_History",
    icon: ShoppingHistory,
    route: "/shopping-history",
  },
  {
    id: "2",
    title: "Gifts_History",
    icon: GiftHistory,
    route: "/gift-history",
  },
  {
    id: "3",
    title: "Invite_Friends",
    icon: InviteFriends,
    route: "/invite-friends",
  },
  {
    id: "4",
    title: "Inviter_Code",
    icon: InviterCode,
    route: "/set-inviter",
  },
  {
    id: "5",
    title: "Connect_To_Games",
    icon: InviterCode,
    route: "/connet-games",
  },
];
